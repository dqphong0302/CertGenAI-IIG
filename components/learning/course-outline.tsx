'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import {
  AlertTriangle,
  BookOpenText,
  CheckCircle2,
  ChevronDown,
  FileText,
  Headphones,
  Layers,
  ListChecks,
  Search,
  Volume2,
  X,
  Zap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { topicLabel } from '@/shared/domain';
import type { CourseOutline, SearchHit } from '@/shared/learning';
import type { LearningProgress } from '@/lib/learning-progress';
import { percent } from '@/lib/learning-progress';
import { searchLearning } from '@/lib/api/client';
import {
  accentOf,
  sectionHint,
  sectionLabel,
  type LearningLocation,
  type LearningSectionId,
} from '@/components/learning/location';

const sectionIcon: Record<LearningSectionId, LucideIcon> = {
  lecture: Headphones,
  concept: Layers,
  lesson: BookOpenText,
  cram: Zap,
  traps: AlertTriangle,
  bank: ListChecks,
  references: FileText,
};

type GroupId = 'lecture' | 'concept' | 'lesson';

export function CourseOutline({
  outline,
  location,
  progress,
  onNavigate,
}: {
  outline: CourseOutline;
  location: LearningLocation;
  progress: LearningProgress;
  onNavigate: (next: LearningLocation) => void;
}) {
  const [query, setQuery] = useState('');
  // Kết quả gắn với đúng từ khóa đã hỏi, nên lượt gõ mới không hiện kết quả cũ.
  const [result, setResult] = useState<{
    query: string;
    hits: SearchHit[];
  } | null>(null);
  /**
   * Người học có thể tự gập/mở nhóm, nhưng điều hướng sang loại nội dung khác
   * thì nhóm chứa vị trí mới phải tự mở. Gắn lựa chọn thủ công với loại nội
   * dung lúc bấm: đổi loại là lựa chọn đó hết hiệu lực, nhóm mới mở ra.
   */
  const [manualGroup, setManualGroup] = useState<{
    forKind: LearningSectionId;
    group: GroupId | null;
  } | null>(null);
  const searchRef = useRef<HTMLInputElement | null>(null);
  const activeItemRef = useRef<HTMLButtonElement | null>(null);

  const trimmedQuery = query.trim();
  const searchActive = trimmedQuery.length >= 2;
  const hits =
    searchActive && result?.query === trimmedQuery ? result.hits : null;
  const searching = searchActive && hits === null;

  const groupOfLocation: GroupId | null =
    location.kind === 'lecture' ||
    location.kind === 'concept' ||
    location.kind === 'lesson'
      ? location.kind
      : null;
  const openGroup =
    manualGroup && manualGroup.forKind === location.kind
      ? manualGroup.group
      : (groupOfLocation ?? 'lecture');

  const toggleGroup = (group: GroupId) =>
    setManualGroup({
      forKind: location.kind,
      group: openGroup === group ? null : group,
    });

  // Cuộn mục đang mở vào tầm nhìn. Phải chạy cả khi vừa rời danh sách kết
  // quả tìm kiếm: lúc điều hướng, cây mục lục chưa được dựng nên chưa có gì
  // để cuộn tới.
  const showingResults = hits !== null;
  useEffect(() => {
    if (showingResults) return;
    activeItemRef.current?.scrollIntoView({ block: 'nearest' });
  }, [location, showingResults]);

  // `/` ở bất kỳ đâu trong phần học sẽ nhảy vào ô tìm kiếm.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== '/' || event.metaKey || event.ctrlKey) return;
      const target = event.target;
      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLSelectElement
      ) {
        return;
      }
      event.preventDefault();
      searchRef.current?.focus();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  // Tìm kiếm chạy trên Worker: gõ tới đâu hỏi tới đó, có hoãn và huỷ lượt cũ.
  useEffect(() => {
    if (!searchActive) return;

    const controller = new AbortController();
    const timer = window.setTimeout(() => {
      searchLearning(trimmedQuery, 30, controller.signal)
        .then((response) =>
          setResult({ query: trimmedQuery, hits: response.hits }),
        )
        .catch(() => {
          if (!controller.signal.aborted) {
            setResult({ query: trimmedQuery, hits: [] });
          }
        });
    }, 220);

    return () => {
      controller.abort();
      window.clearTimeout(timer);
    };
  }, [trimmedQuery, searchActive]);

  const doneLecture = useMemo(
    () => new Set(progress.lecture.completed),
    [progress.lecture.completed],
  );
  const doneLesson = useMemo(
    () => new Set(progress.lesson.read),
    [progress.lesson.read],
  );

  function hitLocation(hit: SearchHit): LearningLocation | null {
    if (hit.kind === 'lecture') return { kind: 'lecture', slideId: hit.ref };
    if (hit.kind === 'lesson') return { kind: 'lesson', lessonId: hit.ref };
    if (hit.kind === 'concept') {
      const [topic, index] = hit.ref.split(':');
      const entry = outline.concept.topics.find((item) => item.topic === topic);
      if (!entry) return null;
      return { kind: 'concept', topic: entry.topic, index: Number(index) };
    }
    return { kind: 'traps' };
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-3">
      <div className="relative">
        <Search
          size={14}
          className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground"
        />
        <input
          ref={searchRef}
          id="learning-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Tìm cả khóa…  /"
          aria-label="Tìm trong toàn bộ nội dung học tập"
          className="h-10 w-full rounded-xl border border-border bg-background pr-8 pl-9 text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/35 focus:outline-none [&::-webkit-search-cancel-button]:hidden"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery('')}
            aria-label="Xóa từ khóa"
            className="absolute top-1/2 right-2.5 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {hits === null ? (
        <nav
          aria-label="Mục lục khóa học"
          className="-mr-1 min-h-0 flex-1 space-y-1.5 overflow-y-auto pr-1"
        >
          <LectureGroup
            outline={outline}
            open={openGroup === 'lecture'}
            onToggle={() => toggleGroup('lecture')}
            location={location}
            done={doneLecture}
            onNavigate={onNavigate}
            activeItemRef={activeItemRef}
          />

          <ConceptGroup
            outline={outline}
            open={openGroup === 'concept'}
            onToggle={() => toggleGroup('concept')}
            location={location}
            progress={progress}
            onNavigate={onNavigate}
            activeItemRef={activeItemRef}
          />

          <LessonGroup
            outline={outline}
            open={openGroup === 'lesson'}
            onToggle={() => toggleGroup('lesson')}
            location={location}
            done={doneLesson}
            onNavigate={onNavigate}
            activeItemRef={activeItemRef}
          />

          <div className="pt-1.5">
            {(['cram', 'traps', 'bank', 'references'] as const).map((kind) => (
              <SingleSection
                key={kind}
                kind={kind}
                active={location.kind === kind}
                badge={
                  kind === 'traps'
                    ? outline.counts.traps
                    : kind === 'references'
                      ? outline.counts.references
                      : undefined
                }
                onSelect={() => onNavigate({ kind })}
              />
            ))}
          </div>
        </nav>
      ) : (
        <div
          className="-mr-1 min-h-0 flex-1 space-y-1.5 overflow-y-auto pr-1"
          aria-live="polite"
        >
          <p className="px-1 pb-1 text-[11px] font-bold tracking-wider text-muted-foreground uppercase">
            {searching
              ? 'Đang tìm…'
              : `${hits.length} kết quả cho “${query.trim()}”`}
          </p>
          {hits.map((hit) => {
            const target = hitLocation(hit);
            if (!target) return null;
            return (
              <button
                key={`${hit.kind}-${hit.ref}`}
                type="button"
                onClick={() => {
                  onNavigate(target);
                  setQuery('');
                }}
                className="w-full rounded-xl border border-border/60 bg-card/60 p-3 text-left transition-colors hover:border-primary/40 hover:bg-primary/[0.05]"
              >
                <span className="flex items-center gap-1.5 text-[10px] font-bold tracking-wider text-muted-foreground uppercase">
                  {sectionLabel[hit.kind === 'trap' ? 'traps' : hit.kind]}
                  <span className="text-border">·</span>
                  <span className="truncate font-semibold normal-case">
                    {hit.context}
                  </span>
                </span>
                <span className="mt-1 block text-[13px] leading-snug font-bold text-foreground">
                  {hit.title}
                </span>
                <span className="mt-1 line-clamp-2 block text-[12px] leading-relaxed text-muted-foreground">
                  {hit.snippet}
                </span>
              </button>
            );
          })}
          {!searching && hits.length === 0 && (
            <p className="rounded-xl border border-dashed border-border px-3 py-6 text-center text-xs text-muted-foreground">
              Không có nội dung nào khớp. Thử từ khóa ngắn hơn.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

/* ── Nhóm gập ────────────────────────────────────────────────────── */

function GroupHeader({
  kind,
  open,
  onToggle,
  done,
  total,
}: {
  kind: GroupId;
  open: boolean;
  onToggle: () => void;
  done: number;
  total: number;
}) {
  const Icon = sectionIcon[kind];
  return (
    <button
      type="button"
      id={`outline-group-${kind}`}
      onClick={onToggle}
      aria-expanded={open}
      className={cn(
        'flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2.5 text-left transition-colors',
        open ? 'bg-muted/70' : 'hover:bg-muted/40',
      )}
    >
      <Icon size={16} className="shrink-0 text-muted-foreground" />
      <span className="min-w-0 flex-1">
        <span className="block truncate text-[13px] font-bold text-foreground">
          {sectionLabel[kind]}
        </span>
        <span className="block text-[11px] text-muted-foreground tabular-nums">
          {done}/{total} · {percent(done, total)}%
        </span>
      </span>
      <ChevronDown
        size={15}
        className={cn(
          'shrink-0 text-muted-foreground transition-transform',
          open && 'rotate-180',
        )}
      />
    </button>
  );
}

function LectureGroup({
  outline,
  open,
  onToggle,
  location,
  done,
  onNavigate,
  activeItemRef,
}: {
  outline: CourseOutline;
  open: boolean;
  onToggle: () => void;
  location: LearningLocation;
  done: Set<string>;
  onNavigate: (next: LearningLocation) => void;
  activeItemRef: React.RefObject<HTMLButtonElement | null>;
}) {
  const activeId = location.kind === 'lecture' ? location.slideId : null;

  return (
    <section>
      <GroupHeader
        kind="lecture"
        open={open}
        onToggle={onToggle}
        done={done.size}
        total={outline.lecture.totalSlides}
      />
      {open && (
        <div className="mt-1 space-y-2 pl-1.5">
          {outline.lecture.parts.map((part) => {
            const accent = accentOf(part.number);
            const slides = outline.lecture.slides.filter(
              (slide) => slide.partNumber === part.number,
            );
            return (
              <div key={part.number}>
                <p className="flex items-center gap-2 px-1.5 py-1">
                  <span
                    className={cn('size-1.5 rounded-full', accent.bg)}
                    aria-hidden="true"
                  />
                  <span
                    className={cn(
                      'text-[10px] font-extrabold tracking-wider uppercase',
                      accent.text,
                    )}
                  >
                    Phần {part.number} · {part.shortName}
                  </span>
                </p>
                <ul className="space-y-0.5">
                  {slides.map((slide) => {
                    const isActive = slide.id === activeId;
                    const isDone = done.has(slide.id);
                    return (
                      <li key={slide.id}>
                        <button
                          ref={isActive ? activeItemRef : undefined}
                          type="button"
                          data-slide-id={slide.id}
                          onClick={() =>
                            onNavigate({ kind: 'lecture', slideId: slide.id })
                          }
                          aria-current={isActive ? 'true' : undefined}
                          className={cn(
                            'grid w-full grid-cols-[1.5rem_1fr] items-start gap-2 rounded-lg px-2 py-1.5 text-left transition-colors',
                            isActive
                              ? 'bg-primary/10 ring-1 ring-primary/35'
                              : 'hover:bg-muted/50',
                          )}
                        >
                          <span className="mt-px grid size-5 place-items-center text-[10px] font-bold tabular-nums text-muted-foreground">
                            {isActive ? (
                              <Volume2 size={12} className="text-primary" />
                            ) : isDone ? (
                              <CheckCircle2
                                size={12}
                                className="text-success"
                              />
                            ) : (
                              slide.slideNumber
                            )}
                          </span>
                          <span
                            className={cn(
                              'text-[12.5px] leading-snug',
                              isActive
                                ? 'font-bold text-primary'
                                : isDone
                                  ? 'text-muted-foreground'
                                  : 'text-foreground/85',
                            )}
                          >
                            {slide.title}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

function ConceptGroup({
  outline,
  open,
  onToggle,
  location,
  progress,
  onNavigate,
  activeItemRef,
}: {
  outline: CourseOutline;
  open: boolean;
  onToggle: () => void;
  location: LearningLocation;
  progress: LearningProgress;
  onNavigate: (next: LearningLocation) => void;
  activeItemRef: React.RefObject<HTMLButtonElement | null>;
}) {
  const visited = outline.concept.topics.reduce(
    (sum, entry) => sum + (progress.concept[entry.topic]?.visited.length ?? 0),
    0,
  );

  return (
    <section>
      <GroupHeader
        kind="concept"
        open={open}
        onToggle={onToggle}
        done={visited}
        total={outline.concept.total}
      />
      {open && (
        <div className="mt-1 space-y-2 pl-1.5">
          {outline.concept.topics.map((entry, entryIndex) => {
            const accent = accentOf(entryIndex + 1);
            const topicProgress = progress.concept[entry.topic];
            const isActiveTopic =
              location.kind === 'concept' && location.topic === entry.topic;
            return (
              <div key={entry.topic}>
                <p className="flex items-center gap-2 px-1.5 py-1">
                  <span
                    className={cn('size-1.5 rounded-full', accent.bg)}
                    aria-hidden="true"
                  />
                  <span
                    className={cn(
                      'text-[10px] font-extrabold tracking-wider uppercase',
                      accent.text,
                    )}
                  >
                    {topicLabel[entry.topic]}
                  </span>
                  <span className="ml-auto text-[10px] text-muted-foreground tabular-nums">
                    {topicProgress?.visited.length ?? 0}/{entry.slides.length}
                  </span>
                </p>
                <ul className="space-y-0.5">
                  {entry.slides.map((slide) => {
                    const isActive =
                      isActiveTopic &&
                      location.kind === 'concept' &&
                      location.index === slide.index;
                    const isDone = Boolean(
                      topicProgress?.visited.includes(slide.index),
                    );
                    return (
                      <li key={`${entry.topic}-${slide.index}`}>
                        <button
                          ref={isActive ? activeItemRef : undefined}
                          type="button"
                          onClick={() =>
                            onNavigate({
                              kind: 'concept',
                              topic: entry.topic,
                              index: slide.index,
                            })
                          }
                          aria-current={isActive ? 'true' : undefined}
                          className={cn(
                            'grid w-full grid-cols-[1.5rem_1fr] items-start gap-2 rounded-lg px-2 py-1.5 text-left transition-colors',
                            isActive
                              ? 'bg-info/10 ring-1 ring-info/35'
                              : 'hover:bg-muted/50',
                          )}
                        >
                          <span className="mt-px grid size-5 place-items-center text-[10px] font-bold tabular-nums text-muted-foreground">
                            {isDone && !isActive ? (
                              <CheckCircle2
                                size={12}
                                className="text-success"
                              />
                            ) : (
                              slide.index + 1
                            )}
                          </span>
                          <span
                            className={cn(
                              'text-[12.5px] leading-snug',
                              isActive
                                ? 'font-bold text-info'
                                : isDone
                                  ? 'text-muted-foreground'
                                  : 'text-foreground/85',
                            )}
                          >
                            {slide.title}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

function LessonGroup({
  outline,
  open,
  onToggle,
  location,
  done,
  onNavigate,
  activeItemRef,
}: {
  outline: CourseOutline;
  open: boolean;
  onToggle: () => void;
  location: LearningLocation;
  done: Set<string>;
  onNavigate: (next: LearningLocation) => void;
  activeItemRef: React.RefObject<HTMLButtonElement | null>;
}) {
  const activeId = location.kind === 'lesson' ? location.lessonId : null;

  return (
    <section>
      <GroupHeader
        kind="lesson"
        open={open}
        onToggle={onToggle}
        done={done.size}
        total={outline.lessons.entries.length}
      />
      {open && (
        <div className="mt-1 space-y-2 pl-1.5">
          {outline.lessons.domains.map((domain) => {
            const accent = accentOf(domain.number);
            const lessons = outline.lessons.entries.filter(
              (lesson) => lesson.domainNumber === domain.number,
            );
            return (
              <div key={domain.number}>
                <p className="flex items-center gap-2 px-1.5 py-1">
                  <span
                    className={cn('size-1.5 rounded-full', accent.bg)}
                    aria-hidden="true"
                  />
                  <span
                    className={cn(
                      'text-[10px] font-extrabold tracking-wider uppercase',
                      accent.text,
                    )}
                  >
                    {domain.shortName}
                  </span>
                </p>
                <ul className="space-y-0.5">
                  {lessons.map((lesson) => {
                    const isActive = lesson.id === activeId;
                    const isDone = done.has(lesson.id);
                    return (
                      <li key={lesson.id}>
                        <button
                          ref={isActive ? activeItemRef : undefined}
                          type="button"
                          onClick={() =>
                            onNavigate({
                              kind: 'lesson',
                              lessonId: lesson.id,
                            })
                          }
                          aria-current={isActive ? 'true' : undefined}
                          className={cn(
                            'grid w-full grid-cols-[1.5rem_1fr] items-start gap-2 rounded-lg px-2 py-1.5 text-left transition-colors',
                            isActive
                              ? 'bg-primary/10 ring-1 ring-primary/35'
                              : 'hover:bg-muted/50',
                          )}
                        >
                          <span className="mt-px grid size-5 place-items-center text-[10px] font-bold tabular-nums text-muted-foreground">
                            {isDone && !isActive ? (
                              <CheckCircle2
                                size={12}
                                className="text-success"
                              />
                            ) : (
                              lesson.number
                            )}
                          </span>
                          <span
                            className={cn(
                              'text-[12.5px] leading-snug',
                              isActive
                                ? 'font-bold text-primary'
                                : isDone
                                  ? 'text-muted-foreground'
                                  : 'text-foreground/85',
                            )}
                          >
                            {lesson.title}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

function SingleSection({
  kind,
  active,
  badge,
  onSelect,
}: {
  kind: LearningSectionId;
  active: boolean;
  badge?: number;
  onSelect: () => void;
}) {
  const Icon = sectionIcon[kind];
  return (
    <button
      type="button"
      id={`outline-${kind}`}
      onClick={onSelect}
      aria-current={active ? 'true' : undefined}
      className={cn(
        'flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2.5 text-left transition-colors',
        active ? 'bg-primary/10 ring-1 ring-primary/35' : 'hover:bg-muted/40',
      )}
    >
      <Icon
        size={16}
        className={cn(
          'shrink-0',
          active ? 'text-primary' : 'text-muted-foreground',
        )}
      />
      <span className="min-w-0 flex-1">
        <span
          className={cn(
            'block truncate text-[13px] font-bold',
            active ? 'text-primary' : 'text-foreground',
          )}
        >
          {sectionLabel[kind]}
        </span>
        <span className="block truncate text-[11px] text-muted-foreground">
          {sectionHint[kind]}
        </span>
      </span>
      {badge !== undefined && (
        <Badge variant="outline" className="shrink-0 text-[10px] tabular-nums">
          {badge}
        </Badge>
      )}
    </button>
  );
}
