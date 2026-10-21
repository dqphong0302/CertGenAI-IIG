"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Answer, Question } from "@/lib/quiz";

export function QuestionInteraction({
  question,
  answer,
  disabled,
  onAnswer,
}: {
  question: Question;
  answer?: Answer;
  disabled: boolean;
  onAnswer: (answer: Answer) => void;
}) {
  const interaction = question.interaction;

  if (interaction.kind === "single" || interaction.kind === "multiple") {
    return (
      <div className="grid gap-3">
        {interaction.options.map((option, optionIndex) => {
          const selected =
            interaction.kind === "single"
              ? answer === option.id
              : ((answer as string[]) || []).includes(option.id);
          return (
            <button
              id={`answer-${optionIndex + 1}`}
              type="button"
              aria-pressed={selected}
              disabled={disabled}
              key={option.id}
              className={cn(
                "flex min-h-15 w-full items-center gap-3.5 rounded-xl border px-4 py-3 text-left text-[15px] leading-relaxed transition-colors",
                selected
                  ? "border-primary bg-primary/[0.06] font-medium text-foreground ring-1 ring-primary"
                  : "border-border bg-card text-foreground/85 hover:border-primary/40 hover:bg-primary/[0.04]",
                disabled && "cursor-not-allowed",
              )}
              onClick={() =>
                onAnswer(
                  interaction.kind === "single"
                    ? option.id
                    : selected
                    ? ((answer as string[]) || []).filter((id) => id !== option.id)
                    : [...((answer as string[]) || []), option.id],
                )
              }
            >
              <span
                className={cn(
                  "grid size-8 shrink-0 place-items-center rounded-lg text-[13px] font-extrabold transition-colors",
                  selected ? "bg-primary text-primary-foreground" : "bg-muted text-foreground",
                )}
              >
                {String.fromCharCode(65 + optionIndex)}
              </span>
              <span className="flex-1">{option.text}</span>
              <span
                className={cn(
                  "grid size-6 shrink-0 place-items-center rounded-md border",
                  selected ? "border-primary bg-primary text-primary-foreground" : "border-border text-transparent",
                )}
              >
                <Check size={14} />
              </span>
            </button>
          );
        })}
      </div>
    );
  }

  // Ô chọn và dòng ghép nối dùng chung một cỡ chữ với các lựa chọn ở trên,
  // để câu ma trận không đọc nhỏ hơn câu một đáp án.
  const selectClass =
    "h-11 w-full rounded-xl border border-input bg-card px-3 text-[14px] font-medium text-foreground shadow-sm outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/30";
  const rowClass =
    "grid grid-cols-1 items-center gap-3 rounded-xl border border-border/70 bg-muted/35 p-4 text-[14.5px] leading-relaxed sm:grid-cols-[1fr_minmax(180px,35%)] sm:gap-4";

  if (interaction.kind === "matrix") {
    return (
      <div className="grid gap-3">
        {interaction.rows.map((row) => (
          <label key={row.id} className={rowClass}>
            <span>{row.text}</span>
            <select
              id={`row-${row.id}`}
              disabled={disabled}
              className={selectClass}
              value={((answer as Record<string, string>) || {})[row.id] || ""}
              onChange={(event) =>
                onAnswer({
                  ...(answer as Record<string, string>),
                  [row.id]: event.target.value,
                })
              }
            >
              <option value="">Chọn đáp án phù hợp...</option>
              {row.options.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.text}
                </option>
              ))}
            </select>
          </label>
        ))}
      </div>
    );
  }

  if (interaction.kind === "matching") {
    return (
      <div className="grid gap-3">
        {interaction.rows.map((row) => (
          <label key={row.id} className={rowClass}>
            <span>{row.text}</span>
            <select
              id={`match-${row.id}`}
              disabled={disabled}
              className={selectClass}
              value={((answer as Record<string, string>) || {})[row.id] || ""}
              onChange={(event) =>
                onAnswer({
                  ...(answer as Record<string, string>),
                  [row.id]: event.target.value,
                })
              }
            >
              <option value="">Ghép với khái niệm...</option>
              {interaction.options.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.text}
                </option>
              ))}
            </select>
          </label>
        ))}
      </div>
    );
  }

  if (interaction.kind === "sequence") {
    return (
      <div className="grid gap-3">
        <p className="text-[14px] leading-relaxed text-muted-foreground">
          Chọn thứ tự vị trí đúng (1, 2, 3, …) cho từng bước:
        </p>
        {interaction.items.map((item) => (
          <label
            key={item.id}
            className="grid grid-cols-[7rem_1fr] items-center gap-3 rounded-xl border border-border/70 bg-muted/35 p-4 text-[14.5px] leading-relaxed"
          >
            <select
              id={`sequence-${item.id}`}
              disabled={disabled}
              className={selectClass}
              value={((answer as Record<string, string>) || {})[item.id] || ""}
              onChange={(event) =>
                onAnswer({
                  ...(answer as Record<string, string>),
                  [item.id]: event.target.value,
                })
              }
            >
              <option value="">—</option>
              {interaction.items.map((_, idx) => (
                <option key={idx} value={idx + 1}>
                  Bước {idx + 1}
                </option>
              ))}
            </select>
            <span>{item.text}</span>
          </label>
        ))}
      </div>
    );
  }

  return null;
}
