'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import {
  Pause,
  Play,
  RotateCcw,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const SPEEDS = [1, 1.25, 1.5, 2] as const;

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
  const minutes = Math.floor(seconds / 60);
  const rest = Math.floor(seconds % 60);
  return `${minutes}:${rest.toString().padStart(2, '0')}`;
}

export type AudioPlayerProps = {
  /** Đổi `src` là đổi bài: phát lại từ đầu, giữ nguyên tốc độ và âm lượng. */
  src: string;
  fallbackDuration: number;
  autoPlayNext: boolean;
  onAutoPlayNextChange: (value: boolean) => void;
  /** Bắt đầu phát: màn hình slide dùng để mở hết các nhịp. */
  onPlay?: () => void;
  onEnded: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  hasPrev: boolean;
  hasNext: boolean;
};

/**
 * Thanh phát lời giảng.
 *
 * Phần tử `<audio>` do component này sở hữu hoàn toàn; màn hình slide chỉ
 * truyền `src` và nhận lại sự kiện kết thúc. Nhờ vậy việc chuyển slide không
 * còn kéo theo một chuỗi effect đồng bộ lẫn nhau như bản trước.
 */
export function AudioPlayer({
  src,
  fallbackDuration,
  autoPlayNext,
  onAutoPlayNextChange,
  onPlay,
  onEnded,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(fallbackDuration);
  const [speed, setSpeed] = useState<number>(1);
  const [muted, setMuted] = useState(false);
  const [failed, setFailed] = useState(false);

  // Giữ ý định "đang phát" khi chuyển sang bài kế tiếp.
  const wantsPlayRef = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    setCurrentTime(0);
    setDuration(fallbackDuration);
    setFailed(false);
    audio.src = src;
    audio.load();

    if (wantsPlayRef.current) {
      audio.play().catch(() => {
        setPlaying(false);
        wantsPlayRef.current = false;
      });
    }
  }, [src, fallbackDuration]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.playbackRate = speed;
  }, [speed]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.muted = muted;
  }, [muted]);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      wantsPlayRef.current = false;
      return;
    }
    wantsPlayRef.current = true;
    audio.play().catch(() => {
      setFailed(true);
      setPlaying(false);
      wantsPlayRef.current = false;
    });
  }, [playing]);

  const replay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = 0;
    wantsPlayRef.current = true;
    audio.play().catch(() => setFailed(true));
  }, []);

  // Phím tắt của người học: cách = phát/dừng, M = tắt tiếng.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target;
      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLSelectElement ||
        (target instanceof HTMLElement && target.isContentEditable)
      ) {
        return;
      }
      if (event.code === 'Space') {
        event.preventDefault();
        toggle();
      } else if (event.key.toLowerCase() === 'm') {
        setMuted((value) => !value);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [toggle]);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="border-t border-border/70 bg-muted/25 p-4 sm:px-6">
      <audio
        ref={audioRef}
        preload="metadata"
        onPlay={() => {
          setPlaying(true);
          onPlay?.();
        }}
        onPause={() => setPlaying(false)}
        onTimeUpdate={(event) =>
          setCurrentTime(event.currentTarget.currentTime)
        }
        onLoadedMetadata={(event) =>
          setDuration(event.currentTarget.duration || fallbackDuration)
        }
        onError={() => {
          setFailed(true);
          setPlaying(false);
        }}
        onEnded={() => {
          setPlaying(false);
          onEnded();
        }}
      >
        <track kind="captions" />
      </audio>

      <div className="flex items-center gap-3">
        <span className="w-9 shrink-0 text-right text-[11px] font-medium text-muted-foreground tabular-nums">
          {formatTime(currentTime)}
        </span>
        <div className="relative flex-1">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-1/2 h-1.5 -translate-y-1/2 overflow-hidden rounded-full bg-border"
          >
            <div
              className="h-full rounded-full bg-primary transition-[width] duration-150"
              style={{ width: `${progress}%` }}
            />
          </div>
          <input
            type="range"
            aria-label="Vị trí phát lời giảng"
            min={0}
            max={duration || 1}
            step={0.5}
            value={currentTime}
            onChange={(event) => {
              const next = Number(event.target.value);
              setCurrentTime(next);
              if (audioRef.current) audioRef.current.currentTime = next;
            }}
            className="relative h-5 w-full cursor-pointer appearance-none bg-transparent [&::-moz-range-thumb]:size-3.5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-primary [&::-webkit-slider-thumb]:size-3.5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary"
          />
        </div>
        <span className="w-9 shrink-0 text-[11px] font-medium text-muted-foreground tabular-nums">
          {formatTime(duration)}
        </span>
      </div>

      <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2.5">
        <div className="flex items-center gap-1.5">
          <Button
            variant="outline"
            size="sm"
            className="size-9 rounded-full p-0"
            onClick={onPrev}
            disabled={!hasPrev}
            title="Bài trước (←)"
            aria-label="Bài trước"
          >
            <SkipBack size={15} />
          </Button>
          <Button
            size="sm"
            id="lecture-play"
            onClick={toggle}
            className="h-10 gap-1.5 rounded-full px-4 font-bold"
            title="Phát hoặc tạm dừng (Cách)"
          >
            {playing ? <Pause size={17} /> : <Play size={17} />}
            {playing ? 'Tạm dừng' : 'Nghe bài'}
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="size-9 rounded-full p-0"
            onClick={onNext}
            disabled={!hasNext}
            title="Bài tiếp (→)"
            aria-label="Bài tiếp"
          >
            <SkipForward size={15} />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="size-9 p-0 text-muted-foreground"
            onClick={replay}
            title="Nghe lại từ đầu"
            aria-label="Nghe lại từ đầu"
          >
            <RotateCcw size={14} />
          </Button>
        </div>

        <div className="flex items-center gap-1.5">
          <Button
            variant="outline"
            size="sm"
            className="h-8 px-2.5 text-xs font-bold tabular-nums"
            onClick={() =>
              setSpeed(
                SPEEDS[(SPEEDS.indexOf(speed as 1) + 1) % SPEEDS.length],
              )
            }
            title="Tốc độ đọc"
          >
            {speed}×
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="size-8 p-0 text-muted-foreground"
            onClick={() => setMuted((value) => !value)}
            aria-pressed={muted}
            title={muted ? 'Bật tiếng (M)' : 'Tắt tiếng (M)'}
          >
            {muted ? (
              <VolumeX size={16} className="text-destructive" />
            ) : (
              <Volume2 size={16} />
            )}
          </Button>
          <label
            className={cn(
              'flex cursor-pointer items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[11px] font-bold transition-colors',
              autoPlayNext
                ? 'border-primary/40 bg-primary/10 text-primary'
                : 'border-border text-muted-foreground hover:bg-muted/50',
            )}
          >
            <input
              type="checkbox"
              checked={autoPlayNext}
              onChange={(event) => onAutoPlayNextChange(event.target.checked)}
              className="size-3.5 accent-current"
            />
            Tự chuyển bài
          </label>
        </div>
      </div>

      {failed && (
        <output className="mt-2 block text-[11px] text-muted-foreground">
          Không phát được tệp tiếng của bài này. Phần lời giảng đầy đủ nằm ở
          thẻ <b>Lời giảng</b> bên dưới.
        </output>
      )}
    </div>
  );
}
