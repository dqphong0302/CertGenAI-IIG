"use client";

import { useEffect, useState } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BookOpenText,
  Check,
  ChevronRight,
  Flame,
  HelpCircle,
  Lightbulb,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Progress as ProgressBar } from "@/components/ui/progress";
import { Topic, topicLabel } from "@/lib/quiz";
import { THEORY_MODULES, THEORY_TOTAL } from "@/lib/theory";

type TheoryLearningProgress = Partial<Record<Topic, { visited: number[]; last: number }>>;

export function TheoryWorkspace({
  topic,
  slideIndex,
  progress,
  onTopic,
  onSlide,
  onPractice,
}: {
  topic: Topic;
  slideIndex: number;
  progress: TheoryLearningProgress;
  onTopic: (topic: Topic) => void;
  onSlide: (index: number) => void;
  onPractice: () => void;
}) {
  const topics: Topic[] = ["methods", "prompting", "verification", "responsible"];
  const lessonModule = THEORY_MODULES[topic];
  const slide = lessonModule.slides[slideIndex];
  const isFirst = slideIndex === 0;
  const isLast = slideIndex === lessonModule.slides.length - 1;
  const [checkChoice, setCheckChoice] = useState<number | null>(null);
  const [checkRevealed, setCheckRevealed] = useState(false);
  const totalVisited = topics.reduce((sum, item) => sum + (progress[item]?.visited.length || 0), 0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement) return;
      if (e.key === "ArrowLeft" && !isFirst) onSlide(slideIndex - 1);
      if (e.key === "ArrowRight" && !isLast) onSlide(slideIndex + 1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [slideIndex, isFirst, isLast, onSlide]);

  return (
    <section className="animate-in fade-in duration-300" aria-labelledby="theory-heading">
      <div className="mb-7 grid grid-cols-[54px_1fr] items-start gap-4.5">
        <span className="grid size-[54px] place-items-center rounded-2xl border border-info/20 bg-info/10 text-info shadow-sm">
          <BookOpenText size={26} />
        </span>
        <div>
          <span className="text-[11px] font-extrabold tracking-widest text-info uppercase">
            BÀI HỌC VI MÔ (MICRO-LEARNING)
          </span>
          <h2 id="theory-heading" className="mt-0.5 text-2xl font-extrabold tracking-tight text-foreground">
            Học lý thuyết từng khái niệm
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            Mỗi slide tập trung 1 khái niệm duy nhất. Nắm chắc định nghĩa, thuật ngữ và làm câu hỏi kiểm tra trước
            khi chuyển slide.
          </p>
        </div>
      </div>

      <nav className="mb-5.5 grid grid-cols-1 gap-2.5 sm:grid-cols-2" aria-label="Chọn nhóm lý thuyết">
        {topics.map((item, itemIndex) => (
          <button
            id={`theory-topic-${item}`}
            key={item}
            onClick={() => onTopic(item)}
            className={cn(
              "grid grid-cols-[32px_1fr_auto] items-center gap-3 rounded-xl border p-3 text-left transition-all",
              topic === item
                ? "border-info bg-info/10 ring-1 ring-info"
                : "border-border bg-card hover:border-info/40 hover:bg-info/5",
            )}
          >
            <span
              className={cn(
                "grid size-[30px] place-items-center rounded-lg text-[11px] font-extrabold",
                topic === item ? "bg-info text-white" : "bg-muted text-muted-foreground",
              )}
            >
              {itemIndex + 1}
            </span>
            <span className={cn("text-xs font-bold leading-tight", topic === item ? "text-info" : "text-foreground/85")}>
              {topicLabel[item]}
            </span>
            <small className="text-[10px] text-muted-foreground">
              {progress[item]?.visited.length || 0}/{THEORY_MODULES[item].slides.length} đã học
            </small>
          </button>
        ))}
      </nav>

      <div className="mb-4.5 rounded-xl border border-border bg-muted/40 p-4">
        <div className="mb-2 flex items-center justify-between text-xs font-semibold text-muted-foreground">
          <span>
            Chủ đề: <b className="font-bold text-foreground">{topicLabel[topic]}</b> · Slide {slideIndex + 1}/
            {lessonModule.slides.length}
          </span>
          <b className="font-bold text-info">
            {totalVisited}/{THEORY_TOTAL} slide toàn khóa
          </b>
        </div>
        <ProgressBar value={(totalVisited / THEORY_TOTAL) * 100} className="[&_[data-slot=progress-indicator]]:bg-info" />
        <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">{lessonModule.description}</p>
      </div>

      <article
        key={`${topic}-${slideIndex}`}
        className="grid min-h-[420px] animate-in fade-in slide-in-from-bottom-1 grid-cols-1 overflow-hidden rounded-2xl border border-info/20 bg-gradient-to-br from-card to-info/[0.03] shadow-sm sm:grid-cols-[88px_1fr]"
      >
        <div className="flex flex-row items-center justify-between bg-gradient-to-b from-violet-700 to-violet-500 px-5 py-3 text-white sm:flex-col sm:justify-start sm:px-0 sm:pt-9">
          <span className="text-xl font-extrabold tracking-tight tabular-nums sm:mt-0 sm:text-[28px]">
            {String(slideIndex + 1).padStart(2, "0")}
          </span>
          <small className="rounded-md bg-white/20 px-2 py-1 text-center text-[9px] font-bold tracking-wider text-violet-50 uppercase sm:mt-2">
            {slide.label}
          </small>
        </div>

        <div className="flex flex-col p-6 sm:p-9">
          <h3 className="text-2xl font-extrabold tracking-tight text-foreground">{slide.title}</h3>
          <p className="mt-2.5 mb-5 text-sm font-medium leading-relaxed text-foreground/80">{slide.summary}</p>

          <ul className="grid gap-3">
            {slide.bullets.map((bullet) => (
              <li key={bullet} className="grid grid-cols-[22px_1fr] items-start gap-2.5 text-[13px] leading-relaxed text-foreground">
                <Check size={20} className="mt-px shrink-0 rounded-full bg-info p-1 text-white" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          {slide.terms && slide.terms.length > 0 && (
            <div className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-2.5">
              {slide.terms.map((item) => (
                <div key={item.term} className="rounded-xl border border-info/15 bg-info/5 p-3.5">
                  <b className="block text-xs font-bold text-info">{item.term}</b>
                  <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">{item.definition}</p>
                </div>
              ))}
            </div>
          )}

          {slide.example && (
            <aside className="mt-5 grid grid-cols-[32px_1fr] gap-3 rounded-xl border border-warning/25 bg-warning/5 p-4">
              <Lightbulb size={24} className="mt-0.5 shrink-0 text-warning" />
              <div>
                <b className="text-[13px] font-bold text-warning">{slide.example.title}</b>
                <p className="mt-1 text-xs leading-relaxed text-foreground/80">{slide.example.content}</p>
              </div>
            </aside>
          )}

          {slide.pitfalls && slide.pitfalls.length > 0 && (
            <aside className="mt-4 rounded-xl border border-destructive/20 bg-destructive/5 p-4">
              <b className="flex items-center gap-1 text-xs font-extrabold tracking-wide text-destructive uppercase">
                <AlertTriangle size={14} />
                Bẫy trắc nghiệm & Ngộ nhận thường gặp
              </b>
              <ul className="mt-2 grid gap-2">
                {slide.pitfalls.map((item) => (
                  <li key={item} className="grid grid-cols-[18px_1fr] gap-2 text-xs leading-relaxed text-destructive/90">
                    <X size={16} className="mt-px shrink-0 rounded-full bg-destructive p-0.5 text-white" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          )}

          {slide.check && (
            <section className="mt-5.5 rounded-xl border border-border bg-muted/40 p-5">
              <span className="flex items-center gap-1 text-[11px] font-extrabold tracking-widest text-info uppercase">
                <HelpCircle size={12} />
                TỰ KIỂM TRA NHANH
              </span>
              <h4 className="mt-1.5 mb-3.5 text-sm font-bold leading-relaxed text-foreground">{slide.check.question}</h4>
              <div className="grid gap-2.5">
                {slide.check.options.map((option, optionIndex) => {
                  const isCorrectOption = optionIndex === slide.check!.answer;
                  const isSelected = checkChoice === optionIndex;
                  return (
                    <button
                      id={`theory-check-${optionIndex + 1}`}
                      key={option}
                      disabled={checkRevealed}
                      onClick={() => setCheckChoice(optionIndex)}
                      className={cn(
                        "grid min-h-12 grid-cols-[30px_1fr] items-center gap-3 rounded-lg border px-3.5 py-2.5 text-left text-[13px] font-medium leading-relaxed transition-all",
                        !checkRevealed &&
                          (isSelected
                            ? "border-info bg-info/10"
                            : "border-border bg-card hover:border-info/40 hover:bg-info/5"),
                        checkRevealed && isCorrectOption && "border-success/40 bg-success/10 font-bold text-success",
                        checkRevealed &&
                          isSelected &&
                          !isCorrectOption &&
                          "border-destructive/40 bg-destructive/10 font-bold text-destructive",
                      )}
                    >
                      <span
                        className={cn(
                          "grid size-7 shrink-0 place-items-center rounded-md text-xs font-extrabold",
                          checkRevealed && isCorrectOption
                            ? "bg-success text-white"
                            : checkRevealed && isSelected
                            ? "bg-destructive text-white"
                            : isSelected
                            ? "bg-info text-white"
                            : "bg-muted text-foreground",
                        )}
                      >
                        {String.fromCharCode(65 + optionIndex)}
                      </span>
                      <span>{option}</span>
                    </button>
                  );
                })}
              </div>
              {!checkRevealed ? (
                <Button
                  id="theory-check-answer"
                  size="sm"
                  className="mt-3.5"
                  disabled={checkChoice === null}
                  onClick={() => setCheckRevealed(true)}
                >
                  Kiểm tra đáp án
                </Button>
              ) : (
                <p
                  className={cn(
                    "mt-3.5 rounded-lg border p-3.5 text-xs leading-relaxed",
                    checkChoice === slide.check.answer
                      ? "border-success/30 bg-success/10 text-success"
                      : "border-destructive/30 bg-destructive/10 text-destructive",
                  )}
                >
                  <b className="font-bold">{checkChoice === slide.check.answer ? "Chính xác!" : "Chưa chính xác!"}</b>{" "}
                  {slide.check.explanation}
                </p>
              )}
            </section>
          )}

          <div className="mt-5.5 border-t border-dashed border-info/25 pt-4.5">
            <span className="inline-flex items-center gap-1 rounded-full border border-info/20 bg-info/10 px-2.5 py-1 text-[10px] font-extrabold tracking-wider text-info uppercase">
              <Flame size={12} />
              GHI NHỚ CỐT LÕI
            </span>
            <p className="mt-2 text-[13px] font-bold leading-relaxed text-foreground">{slide.takeaway}</p>
          </div>
        </div>
      </article>

      <div className="mt-4.5 flex flex-col-reverse items-stretch gap-5 pt-3.5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex max-w-full flex-wrap items-center justify-center gap-1.5 sm:max-w-[60%] sm:justify-start" aria-label="Tiến độ slide">
          {lessonModule.slides.map((item, itemIndex) => (
            <button
              id={`theory-slide-${itemIndex + 1}`}
              key={item.title}
              aria-label={`Đến slide ${itemIndex + 1}${progress[topic]?.visited.includes(itemIndex) ? ", đã đọc" : ""}`}
              onClick={() => onSlide(itemIndex)}
              className={cn(
                "h-2.5 rounded-full transition-all",
                slideIndex === itemIndex ? "w-7 bg-info" : "w-2.5 bg-border hover:bg-info/50",
                progress[topic]?.visited.includes(itemIndex) && slideIndex !== itemIndex && "bg-info/40",
              )}
            />
          ))}
        </div>
        <div className="flex gap-2.5 [&>*]:flex-1 sm:[&>*]:flex-none">
          <Button id="theory-previous" variant="outline" disabled={isFirst} onClick={() => onSlide(slideIndex - 1)}>
            <ArrowLeft size={16} /> Slide trước
          </Button>
          {isLast ? (
            <Button id="theory-practice" onClick={onPractice}>
              Luyện nhóm {topicLabel[topic]} <ChevronRight size={16} />
            </Button>
          ) : (
            <Button id="theory-next" onClick={() => onSlide(slideIndex + 1)}>
              Slide tiếp <ArrowRight size={16} />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
