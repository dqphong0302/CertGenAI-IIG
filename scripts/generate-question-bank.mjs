import fs from "node:fs";
import path from "node:path";

const source = process.argv[2];
const assetSource = process.argv[3];
if (!source || !assetSource) {
  console.error("Usage: node scripts/generate-question-bank.mjs <raw-quiz.json> <assets-dir>");
  process.exit(1);
}
const output = path.resolve("public/data");
const imageOutput = path.resolve("public/questions");
const raw = JSON.parse(fs.readFileSync(source, "utf8"));

const text = (value) => {
  if (!value) return "";
  if (Array.isArray(value)) return value.map(text).filter(Boolean).join("\n").trim();
  if (typeof value === "object" && value.d) return text(value.d);
  return String(value).replace(/\u200b/g, "").replace(/\n{3,}/g, "\n\n").trim();
};

const label = (value) => text(value?.t?.d || value?.d || value);
const imageRefs = (question) => [
  ...new Set(JSON.stringify(question).match(/storage:\/\/images\/[^"\\]+/g) || []),
];

const fallbackExplanation = (answerText) =>
  `Đáp án đúng là: ${answerText}. Hãy đối chiếu các từ khóa trong câu hỏi với yêu cầu của từng lựa chọn; phương án này đáp ứng đầy đủ và trực tiếp nhất.`;

const topicRules = {
  responsible: /đạo đức|thiên kiến|định kiến|bản quyền|quyền riêng tư|pháp lý|luật|dân sự|hình sự|bắt nạt|gây hại|deepfake|giả mạo|minh bạch|trách nhiệm|an toàn|bảo mật|thông tin cá nhân|sở hữu trí tuệ|xin phép|đồng thuận/i,
  verification: /xác minh|kiểm chứng|tham chiếu chéo|nguồn tin|nguồn đáng tin|kiểm tra thực tế|fact.?check|ảo giác|hallucination|độ chính xác|chính xác|sự kiện hiện tại|phản hồi|tinh chỉnh|cải thiện kết quả|chỉnh sửa|đánh giá kết quả|tạo lại|lặp lại/i,
  prompting: /câu lệnh|prompt|zero.?shot|few.?shot|chain of thought|chuỗi tư duy|khai thác kiến thức|vai trò|đối tượng mục tiêu|giọng điệu|định dạng|bối cảnh|hướng dẫn cụ thể|từ khóa|tham số|negative prompt/i,
};

function classifyTopic(question, interaction, explanation) {
  const haystack = [question.D?.d, explanation, JSON.stringify(interaction)].map(text).join(" ");
  if (topicRules.responsible.test(haystack)) return "responsible";
  if (topicRules.verification.test(haystack)) return "verification";
  if (topicRules.prompting.test(haystack)) return "prompting";
  return "methods";
}

function normalizeQuestion(question, group, number) {
  const base = {
    id: question.i,
    number,
    source: group.T,
    type: question.tp,
    prompt: text(question.D?.d),
    images: imageRefs(question).map((ref) => `/questions/${path.basename(raw.rs.i?.[ref]?.s?.replaceAll("\\", "/") || ref)}`),
  };

  let interaction;
  let answerText = "";
  if (["MultipleChoice", "MultipleResponse"].includes(question.tp)) {
    const options = question.C.chs.map((choice) => ({
      id: choice.i,
      text: label(choice.t),
      correct: Boolean(choice.c),
    }));
    interaction = { kind: question.tp === "MultipleChoice" ? "single" : "multiple", options };
    answerText = options.filter((item) => item.correct).map((item) => item.text).join("; ");
  } else if (question.tp === "MultipleChoiceText") {
    const rows = [];
    const fragments = question.C.rt.d;
    for (let index = 0; index < fragments.length; index += 2) {
      const marker = fragments[index];
      const definition = question.C.rt.r.find((item) => item.id === marker.id);
      if (!definition) continue;
      rows.push({
        id: marker.id,
        text: text(fragments[index + 1]),
        options: definition.data.v.map((option, optionIndex) => ({
          id: String(optionIndex),
          text: option,
          correct: optionIndex === definition.data.i,
        })),
      });
    }
    interaction = { kind: "matrix", rows };
    answerText = rows.map((row) => `${row.text}: ${row.options.find((item) => item.correct)?.text}`).join("; ");
  } else if (question.tp === "Matching") {
    const rows = question.C.m.map((pair) => ({
      id: pair.p.i,
      text: label(pair.p.t),
      answerId: pair.r.i,
    }));
    const options = question.C.m.map((pair) => ({ id: pair.r.i, text: label(pair.r.t) }));
    interaction = { kind: "matching", rows, options };
    answerText = rows.map((row) => `${row.text}: ${options.find((item) => item.id === row.answerId)?.text}`).join("; ");
  } else if (question.tp === "Sequence") {
    const items = question.C.chs.map((choice, index) => ({ id: choice.i, text: label(choice.t), order: index + 1 }));
    interaction = { kind: "sequence", items };
    answerText = items.map((item) => `${item.order}. ${item.text}`).join("; ");
  } else {
    throw new Error(`Unsupported question type: ${question.tp}`);
  }

  const feedback = text(question.s?.F?.i?.v?.d);
  const genericFeedback = /You did not choose|That's not exactly|Thank you for your answer/i.test(feedback);
  const complexity =
    (question.tp === "MultipleChoiceText" ? 2 : 0) +
    (["MultipleResponse", "Matching", "Sequence"].includes(question.tp) ? 3 : 0) +
    (base.prompt.length > 300 ? 1 : 0) +
    (base.images.length ? 1 : 0) +
    ((interaction.options?.filter((item) => item.correct).length || interaction.rows?.length || interaction.items?.length || 0) >= 3 ? 1 : 0) +
    (/quyền riêng tư|đạo đức|thiên kiến|bản quyền|pháp lý|rủi ro/i.test(base.prompt) ? 1 : 0);
  const difficulty = complexity <= 1 ? "easy" : complexity <= 3 ? "medium" : "hard";
  const explanation = !feedback || genericFeedback ? fallbackExplanation(answerText) : feedback;

  return {
    ...base,
    difficulty,
    topic: classifyTopic(question, interaction, explanation),
    interaction,
    explanation,
  };
}

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(path.join(output, "chunks"), { recursive: true });
fs.mkdirSync(imageOutput, { recursive: true });

const questions = [];
raw.d.sl.g.forEach((group) => {
  group.S.forEach((question) => questions.push(normalizeQuestion(question, group, questions.length + 1)));
});

for (const file of fs.readdirSync(assetSource)) {
  if (!file.includes("_normalized")) fs.copyFileSync(path.join(assetSource, file), path.join(imageOutput, file));
}

const topics = ["methods", "prompting", "verification", "responsible"];
const difficulties = ["easy", "medium", "hard"];
const chunks = [];
for (const topic of topics) {
  for (const difficulty of difficulties) {
    const selected = questions.filter((question) => question.topic === topic && question.difficulty === difficulty);
    for (let offset = 0; offset < selected.length; offset += 18) {
      const items = selected.slice(offset, offset + 18);
      const id = `${topic}-${difficulty}-${String(offset / 18 + 1).padStart(2, "0")}`;
      const file = `/data/chunks/${id}.json`;
      fs.writeFileSync(path.join(output, "chunks", `${id}.json`), JSON.stringify(items));
      chunks.push({ id, topic, difficulty, count: items.length, file });
    }
  }
}

const counts = Object.fromEntries(difficulties.map((level) => [level, questions.filter((q) => q.difficulty === level).length]));
const topicCounts = Object.fromEntries(topics.map((topic) => [topic, {
  total: questions.filter((question) => question.topic === topic).length,
  counts: Object.fromEntries(difficulties.map((difficulty) => [difficulty, questions.filter((question) => question.topic === topic && question.difficulty === difficulty).length])),
}]));
const manifest = {
  version: 2,
  title: "Bộ câu hỏi ôn luyện GenAI",
  total: questions.length,
  counts,
  topicCounts,
  sources: raw.d.sl.g.map((group) => ({ name: group.T, count: group.S.length })),
  chunks,
  generatedAt: new Date().toISOString(),
};
fs.writeFileSync(path.join(output, "manifest.json"), JSON.stringify(manifest));
console.log(JSON.stringify({ total: questions.length, counts, chunks: chunks.length, images: fs.readdirSync(imageOutput).length }, null, 2));
