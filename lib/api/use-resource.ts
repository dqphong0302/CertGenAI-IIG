'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

type Entry<T> = { promise: Promise<T>; value?: T; error?: unknown };

/**
 * Cache nội dung học tập theo khóa, sống suốt phiên làm việc.
 *
 * Nội dung chỉ đọc và chỉ đổi khi deploy, nên đã tải một lần thì chuyển qua
 * chuyển lại giữa các mục không nên gọi mạng nữa — kể cả khi component bị
 * unmount. Giữ ở tầng module thay vì state React để cache không chết theo
 * cây component.
 */
const cache = new Map<string, Entry<unknown>>();

function loadResource<T>(key: string, load: () => Promise<T>): Entry<T> {
  const existing = cache.get(key) as Entry<T> | undefined;
  if (existing) return existing;

  const entry: Entry<T> = {
    promise: load().then(
      (value) => {
        entry.value = value;
        return value;
      },
      (error: unknown) => {
        entry.error = error;
        // Lỗi mạng thì bỏ khỏi cache để lần ghé sau thử lại được.
        cache.delete(key);
        throw error;
      },
    ),
  };
  cache.set(key, entry as Entry<unknown>);
  return entry;
}

/** Tải sẵn một tài nguyên (bài kế tiếp, mục sắp mở). */
export function prefetchResource<T>(key: string, load: () => Promise<T>) {
  void loadResource(key, load).promise.catch(() => {
    // Tải sẵn thất bại thì bỏ qua; lần đọc thật sẽ báo lỗi cho người dùng.
  });
}

export function clearResourceCache() {
  cache.clear();
}

export type Resource<T> = {
  data: T | undefined;
  error: string | undefined;
  loading: boolean;
  reload: () => void;
};

function messageOf(error: unknown) {
  if (error instanceof Error) return error.message;
  return 'Không tải được nội dung học tập.';
}

/**
 * Đọc một tài nguyên API. `key` là danh tính của tài nguyên: đổi key là tải
 * mục mới, và phản hồi đến muộn của mục cũ bị bỏ qua.
 *
 * Giá trị đã nằm trong cache được đọc ngay khi render, nên mở lại một mục đã
 * xem không chớp qua trạng thái đang tải. Effect chỉ làm một việc: chờ lượt
 * tải đang chạy rồi ghi kết quả vào state.
 */
export function useResource<T>(
  key: string | null,
  load: () => Promise<T>,
): Resource<T> {
  // `load` được dựng lại mỗi lần render nên không thể là dependency; chỉ `key`
  // quyết định khi nào phải tải. Cập nhật trong effect để không chạm vào ref
  // giữa lúc render.
  const loadRef = useRef(load);
  useEffect(() => {
    loadRef.current = load;
  });

  const [generation, setGeneration] = useState(0);
  const [settled, setSettled] = useState<{
    key: string;
    data?: T;
    error?: string;
  } | null>(null);

  useEffect(() => {
    if (key === null) return;

    const entry = loadResource(key, () => loadRef.current());
    // Đã có sẵn giá trị thì render đọc thẳng từ cache, không cần state.
    if (entry.value !== undefined) return;

    let active = true;
    entry.promise.then(
      (value) => {
        if (active) setSettled({ key, data: value });
      },
      (error: unknown) => {
        if (active) setSettled({ key, error: messageOf(error) });
      },
    );

    return () => {
      active = false;
    };
  }, [key, generation]);

  const reload = useCallback(() => {
    if (key !== null) cache.delete(key);
    setSettled(null);
    setGeneration((value) => value + 1);
  }, [key]);

  const cached =
    key === null ? undefined : (cache.get(key) as Entry<T> | undefined);
  // State chỉ dùng được khi nó thuộc đúng key đang mở: ngay sau khi `key` đổi,
  // state vẫn còn của mục trước.
  const forKey = settled?.key === key ? settled : null;

  const data = cached?.value ?? forKey?.data;
  const error = forKey?.error;

  return {
    data,
    error,
    loading: key !== null && data === undefined && error === undefined,
    reload,
  };
}
