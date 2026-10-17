'use client';

import { useState } from 'react';
import {
  ArrowRight,
  BookOpenText,
  Copy,
  Download,
  Printer,
  Search,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { THEORY_UPDATED } from '@/lib/theory';

const SECTIONS = [
  {
    id: 'foundations',
    title: '1. Nền tảng và chọn công cụ',
    points: [
      'AI tạo sinh tạo nội dung; dự báo/phân loại và truy xuất nguồn là những tác vụ cần phân biệt. Một sản phẩm có thể kết hợp nhiều loại AI.',
      'Huấn luyện khác suy luận. GPU giúp xử lý song song; bộ nhớ, nguồn điện, kích thước mô hình và tải quyết định yêu cầu thực tế. Dùng cloud không bắt buộc máy khách có GPU cao cấp.',
      'Token không luôn bằng một từ. Ngữ cảnh và đầu ra có giới hạn; số token phụ thuộc bộ mã hóa và ngôn ngữ.',
      'Chọn công cụ theo chức năng, chất lượng, quyền riêng tư, chi phí, dễ dùng, cập nhật và tùy chỉnh. Tốc độ/phong cách có thể quan trọng theo nhiệm vụ.',
    ],
    source: 'Teacher Guide: Bài 1–6',
    href: '/references/teacher-guide.pdf#page=27',
  },
  {
    id: 'prompting',
    title: '2. Viết prompt đúng nhiệm vụ',
    points: [
      'Nêu vai trò, nhiệm vụ, ngữ cảnh, dữ liệu, định dạng và tiêu chí khi cần; không phải mọi prompt đều bắt buộc có đủ sáu phần.',
      'Zero-shot: không có ví dụ. One/few-shot: có ví dụ mẫu để làm theo. Thêm ràng buộc, bước xử lý hay một khoảng số không tự tạo ra shot.',
      'CoT: giải thích theo bước. Chaining: output prompt trước thành input prompt sau. Self-consistency: nhiều lần tạo rồi so sánh/chọn; không bảo đảm đúng.',
      'Reverse prompting có hai cách dùng trong tài liệu: thiết kế prompt từ đầu ra mong muốn; hoặc để AI hỏi làm rõ trước. Xét ngữ cảnh thay vì áp một nghĩa cho mọi câu.',
      'Style guide giữ phong cách; glossary giữ thuật ngữ; template giữ cấu trúc; tài liệu tham chiếu và hội thoại trước bổ sung ngữ cảnh.',
    ],
    source: 'Teacher Guide: Bài 11–13',
    href: '/references/teacher-guide.pdf#page=116',
  },
  {
    id: 'media',
    title: '3. Nội dung, hình ảnh và video',
    points: [
      'Tóm tắt rút gọn nội dung có sẵn; đổi định dạng trình bày lại thành bảng/danh sách/biểu đồ; tạo ý tưởng là nhiệm vụ khác.',
      'Ảnh: tách tạo mới, sửa và mô tả. “Nền ảnh là gì?” yêu cầu mô tả; “đổi nền xanh” yêu cầu chỉnh sửa. Khi làm câu 126, ghi nhớ khóa IIG No–Yes–No.',
      'Dữ liệu ảnh–văn bản có thể gán nhãn thủ công hoặc tự động; không giải thích rằng mọi nhãn đều phải do con người tạo. Khi làm câu 89, ghi nhớ khóa IIG Yes–No–No.',
      'Video: nêu thời lượng, chuyển động và âm thanh. Avatar cần chỉ rõ ai đọc script; TTS đơn thuần chưa bảo đảm avatar là người nói. Nội suy thêm khung trung gian.',
      'Phụ đề giúp xem không cần âm thanh; cần soát lỗi, đồng bộ thời gian và bảo đảm dễ đọc.',
    ],
    source: 'Teacher Guide: Bài 8–10',
    href: '/references/teacher-guide.pdf#page=87',
  },
  {
    id: 'verify',
    title: '4. Kiểm chứng và sử dụng có trách nhiệm',
    points: [
      'AI có thể viết trôi chảy nhưng sai. Kiểm tra lịch sử, thông tin hiện tại và số liệu bằng nguồn phù hợp; xác nhận một trích dẫn có thật và hỗ trợ đúng nhận định.',
      'Grounding, nhiệt độ thấp hay hỏi AI lại không loại bỏ hoàn toàn ảo giác. AI hỗ trợ rà lỗi; bằng chứng độc lập mới là căn cứ xác minh.',
      'Bias có thể đến từ dữ liệu thiếu/không đại diện, nhãn, tinh chỉnh, guardrails và prompt. Giới, tuổi, quốc tịch, địa lý/ngôn ngữ đều có thể liên quan.',
      'Không đưa PIN, mật khẩu, PII hoặc dữ liệu nội bộ vào công cụ chưa được phê duyệt. Che tên không bảo đảm ẩn danh; opt-out và thời hạn lưu phụ thuộc dịch vụ.',
      'Kiểm tra quyền dùng ảnh/nhạc/logo và giấy phép. Công khai trên web không đồng nghĩa miễn quyền. Trách nhiệm pháp lý, bằng sáng chế và gắn nhãn AI phụ thuộc bối cảnh; không áp một quy luật cho mọi nơi.',
      'Con người kiểm tra và phê duyệt đầu ra; ghi nhận AI đã hỗ trợ gì. Cân nhắc độ tuổi, khả năng tiếp cận, công bằng và tác động xã hội.',
    ],
    source: 'Teacher Guide: Bài 14–19',
    href: '/references/teacher-guide.pdf#page=145',
  },
];

export function TheoryCramSheet({
  onStartExam,
  onStartPractice,
}: {
  onStartExam: () => void;
  onStartPractice: () => void;
}) {
  const [search, setSearch] = useState('');
  const [message, setMessage] = useState('');
  const filtered = SECTIONS.filter((s) =>
    `${s.title} ${s.points.join(' ')}`
      .toLocaleLowerCase('vi-VN')
      .includes(search.toLocaleLowerCase('vi-VN')),
  );
  async function copyNotes() {
    try {
      await navigator.clipboard.writeText(
        SECTIONS.map(
          (s) => s.title + '\n' + s.points.map((p) => '• ' + p).join('\n'),
        ).join('\n\n'),
      );
      setMessage('Đã sao chép bản ghi nhớ.');
    } catch {
      setMessage('Không sao chép được. Bạn có thể tải bản Markdown bên dưới.');
    }
  }
  return (
    <section aria-labelledby="cram-heading">
      <span className="text-xs font-bold tracking-wide text-primary uppercase">
        Cập nhật {THEORY_UPDATED} · Theo tài liệu thamkhao
      </span>
      <h2 id="cram-heading" className="mt-2 text-2xl font-extrabold">
        Bản ghi nhớ trước khi thi
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Nắm khái niệm, đọc mục tiêu của đề và học từ câu làm sai. Bài luyện và
        bài thi chấm theo đáp án IIG. Phần ghi nhớ khi thi giúp học khóa câu cố
        định; lý thuyết giúp áp dụng kiến thức trong thực tế.
      </p>
      <div className="my-5 flex flex-wrap gap-2 print:hidden">
        <a
          id="download-theory"
          href="/theory-handbook.md"
          download="Cam_nang_GenAI_2026-10-17.md"
          className="inline-flex min-h-9 items-center gap-2 rounded-md border border-border px-3 text-xs font-semibold hover:bg-muted"
        >
          <Download size={14} />
          Tải cẩm nang Markdown
        </a>
        <Button
          id="copy-theory-notes"
          size="sm"
          variant="outline"
          onClick={copyNotes}
        >
          <Copy size={14} />
          Sao chép ghi nhớ
        </Button>
        <Button
          id="print-theory-notes"
          size="sm"
          variant="outline"
          onClick={() => window.print()}
        >
          <Printer size={14} />
          In
        </Button>
      </div>
      {message && (
        <output className="mb-3 block text-xs text-primary">{message}</output>
      )}
      <label className="mb-5 block print:hidden" htmlFor="cram-search">
        <span className="mb-2 flex items-center gap-2 text-xs font-semibold text-muted-foreground">
          <Search size={14} />
          Tìm trong ghi nhớ
        </span>
        <Input
          id="cram-search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Ví dụ: few-shot, ảnh, thiên lệch…"
        />
      </label>
      <div className="grid gap-4">
        {filtered.map((s) => (
          <article
            id={`cram-${s.id}`}
            key={s.id}
            className="rounded-xl border border-border bg-muted/20 p-5"
          >
            <h3 className="text-base font-extrabold text-foreground">
              {s.title}
            </h3>
            <ul className="mt-3 space-y-3 text-sm leading-relaxed">
              {s.points.map((p) => (
                <li key={p} className="grid grid-cols-[14px_1fr] gap-2">
                  <span className="mt-2 size-1.5 rounded-full bg-primary" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <a
              className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-primary underline"
              href={s.href}
              target="_blank"
              rel="noreferrer"
            >
              <BookOpenText size={14} />
              {s.source}
            </a>
          </article>
        ))}
        {!filtered.length && (
          <p className="py-6 text-center text-sm text-muted-foreground">
            Không có mục khớp. Thử một từ khóa khác.
          </p>
        )}
      </div>
      <aside className="mt-5 rounded-xl border border-info/25 bg-info/5 p-4 text-xs leading-relaxed">
        <b>Tài liệu đối chiếu</b>
        <p className="mt-2">
          Liên kết dẫn tới bản tài liệu trong thư mục thamkhao. Đây là phần diễn
          giải tự học, không phải đính chính chính thức.
        </p>
        <ul className="mt-2 space-y-2">
          <li>
            <a
              href="/references/practice-exercises.pdf#page=94"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Bài tập thực hành — thiên lệch, trang PDF 94
            </a>
          </li>
          <li>
            <a
              href="/references/education-examples.pdf#page=13"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Ví dụ giáo dục — ma trận chọn công cụ, trang PDF 13
            </a>
          </li>
          <li>
            <a
              href="/references/prompt-techniques.docx"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Ví dụ kỹ thuật câu lệnh — DOCX
            </a>
          </li>
        </ul>
      </aside>
      <div className="mt-5 flex flex-wrap gap-2 print:hidden">
        <Button id="cram-start-practice" onClick={onStartPractice}>
          Chọn bài luyện <ArrowRight size={15} />
        </Button>
        <Button id="cram-start-exam" variant="outline" onClick={onStartExam}>
          Thi thử 50 câu
        </Button>
      </div>
    </section>
  );
}
