'use client';

import { useEffect, useRef, useState } from 'react';
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Grid2X2,
  Maximize,
  Menu,
  Minimize,
  Monitor,
  Rows3,
  Sun,
} from 'lucide-react';
import type { CourseOutline } from '@/shared/learning';
import type { LearningProgress } from '@/lib/learning-progress';
import type { LearningLocation } from './location';
import { accentOf } from './location';
import { CourseOutline as Outline } from './course-outline';
import { LectureStage } from './lecture-stage';

type View = 'slide' | 'read' | 'grid';

export function LectureReader({
  course,
  slideId,
  progress,
  onNavigate,
  onComplete,
  onPractice,
}: {
  course: CourseOutline;
  slideId: string;
  progress: LearningProgress;
  onNavigate: (location: LearningLocation) => void;
  onComplete: (slideId: string, done: boolean) => void;
  onPractice?: (questionNumbers: number[], lessonTitle: string) => void;
}) {
  const root = useRef<HTMLDivElement>(null);
  const [outlineOpen, setOutlineOpen] = useState(
    () => window.innerWidth >= 1024,
  );
  const [view, setView] = useState<View>('slide');
  const [fullscreen, setFullscreen] = useState(false);
  const [fullscreenError, setFullscreenError] = useState('');
  const entries = course.lecture.slides;
  const position = entries.findIndex((entry) => entry.id === slideId);
  const current = entries[position];

  function go(id: string) {
    onNavigate({ kind: 'lecture', slideId: id });
    setView('slide');
    if (window.innerWidth < 1024) setOutlineOpen(false);
  }

  async function toggleFullscreen() {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await root.current?.requestFullscreen();
      setFullscreenError('');
    } catch {
      setFullscreenError('Trình duyệt chưa cho phép toàn màn hình.');
    }
  }

  useEffect(() => {
    const sync = () =>
      setFullscreen(document.fullscreenElement === root.current);
    document.addEventListener('fullscreenchange', sync);
    return () => document.removeEventListener('fullscreenchange', sync);
  }, []);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (
        event.ctrlKey ||
        event.metaKey ||
        event.altKey ||
        (event.target instanceof HTMLElement &&
          event.target.closest(
            'input, textarea, select, button, a, [contenteditable="true"]',
          ))
      )
        return;
      const key = event.key.toLowerCase();
      if (key === 't') setOutlineOpen((open) => !open);
      else if (key === 'g')
        setView((mode) => (mode === 'grid' ? 'slide' : 'grid'));
      else if (key === 's')
        setView((mode) => (mode === 'read' ? 'slide' : 'read'));
      else if (key === 'f') void toggleFullscreen();
      else return;
      event.preventDefault();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <div
      ref={root}
      className={`lecture-reader lecture-reader--${view} ${outlineOpen ? 'lecture-reader--outline' : ''}`}
    >
      {outlineOpen && (
        <aside id="reader-outline" className="reader-outline">
          <header className="reader-brand">
            <span className="reader-kicker">
              <BookOpen size={14} /> SỔ TAY HỌC TẬP
            </span>
            <h2>GenAI Foundation</h2>
            <p>Ôn luyện chứng chỉ IIG · {entries.length} slide</p>
            <button
              id="reader-close-outline"
              className="reader-close"
              aria-label="Đóng mục lục"
              onClick={() => setOutlineOpen(false)}
            >
              ×
            </button>
          </header>
          <Outline
            outline={course}
            location={{ kind: 'lecture', slideId }}
            progress={progress}
            onNavigate={(next) => {
              onNavigate(next);
              if (window.innerWidth < 1024) setOutlineOpen(false);
            }}
          />
          <p className="reader-shortcuts">
            ← → chuyển slide · / tìm kiếm
            <br />
            <kbd>T</kbd> mục lục · <kbd>G</kbd> lưới · <kbd>F</kbd> toàn màn
            hình
          </p>
        </aside>
      )}

      <div className="reader-main">
        <div className="reader-workspace" id="reader-workspace">
          {view === 'grid' ? (
            <section className="reader-grid" aria-label="Lưới bài giảng">
              <header>
                <span className="reader-kicker">TỔNG QUAN KHÓA HỌC</span>
                <h2>Chọn slide để bắt đầu</h2>
                <p>
                  {entries.length} bài giảng ·{' '}
                  {progress.lecture.completed.length} bài đã học
                </p>
              </header>
              {entries.map((entry) => (
                <button
                  id={`reader-grid-${entry.id}`}
                  key={entry.id}
                  aria-current={slideId === entry.id ? 'true' : undefined}
                  className="reader-thumbnail"
                  onClick={() => go(entry.id)}
                >
                  <span
                    className={`reader-thumbnail-line ${accentOf(entry.partNumber).bg}`}
                  />
                  <span className="reader-kicker">
                    PHẦN {entry.partNumber}{' '}
                    <span>{String(entry.slideNumber).padStart(2, '0')}</span>
                  </span>
                  <strong>{entry.title}</strong>
                  <small>{entry.subtitle}</small>
                  <span className="reader-thumbnail-footer">
                    {progress.lecture.completed.includes(entry.id)
                      ? '✓ Đã học'
                      : `${Math.round(entry.durationSeconds)} giây`}
                    <ChevronRight size={15} />
                  </span>
                </button>
              ))}
            </section>
          ) : (
            <LectureStage
              outline={course}
              slideId={slideId}
              completed={progress.lecture.completed.includes(slideId)}
              onNavigate={(id) => onNavigate({ kind: 'lecture', slideId: id })}
              onToggleComplete={onComplete}
              onPractice={onPractice}
              reading={view === 'read'}
            />
          )}
        </div>

        <footer className="reader-toolbar" aria-label="Điều khiển slide">
          <button
            id="reader-toggle-outline"
            title="Mục lục (T)"
            aria-label="Bật hoặc tắt mục lục"
            aria-expanded={outlineOpen}
            aria-controls="reader-outline"
            onClick={() => setOutlineOpen((open) => !open)}
          >
            <Menu size={19} />
          </button>
          <span className="reader-toolbar-divider" />
          <button
            id="reader-previous"
            aria-label="Slide trước"
            disabled={position <= 0}
            onClick={() => go(entries[position - 1].id)}
          >
            <ChevronLeft size={20} />
          </button>
          <span className="reader-counter" aria-live="polite">
            {position + 1}
            <span> / {entries.length}</span>
          </span>
          <button
            id="reader-next"
            aria-label="Slide tiếp"
            disabled={position >= entries.length - 1}
            onClick={() => go(entries[position + 1].id)}
          >
            <ChevronRight size={20} />
          </button>
          <span className="reader-current-title">{current?.title}</span>
          <fieldset className="reader-view-controls" aria-label="Chế độ xem">
            <button
              id="reader-view-slide"
              aria-pressed={view === 'slide'}
              onClick={() => setView('slide')}
              title="Trình chiếu"
            >
              <Monitor size={17} />
              <span>Trình chiếu</span>
            </button>
            <button
              id="reader-view-read"
              aria-pressed={view === 'read'}
              onClick={() => setView('read')}
              title="Đọc đầy đủ (S)"
            >
              <Rows3 size={17} />
              <span>Đọc</span>
            </button>
            <button
              id="reader-view-grid"
              aria-pressed={view === 'grid'}
              onClick={() => setView('grid')}
              title="Lưới (G)"
            >
              <Grid2X2 size={17} />
              <span>Lưới</span>
            </button>
          </fieldset>
          <span className="reader-light-indicator" title="Giao diện sáng">
            <Sun size={18} />
          </span>
          <button
            id="reader-fullscreen"
            aria-label={fullscreen ? 'Thoát toàn màn hình' : 'Toàn màn hình'}
            onClick={() => void toggleFullscreen()}
          >
            {fullscreen ? <Minimize size={19} /> : <Maximize size={19} />}
          </button>
        </footer>
        {fullscreenError && (
          <output className="reader-fullscreen-error">{fullscreenError}</output>
        )}
      </div>
    </div>
  );
}
