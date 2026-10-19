import { createMiddleware } from 'hono/factory';

/**
 * Gắn Cache-Control cho các phản hồi nội dung tĩnh của API.
 *
 * Đặt header **trước** `next()` để Hono ghép vào Response do `c.json()` dựng
 * ra. Nội dung bài giảng chỉ đổi khi deploy bản mới, nên biên CDN giữ được
 * lâu; `stale-while-revalidate` cho phép trả bản cũ trong lúc làm mới.
 */
export function cacheContent(maxAgeSeconds: number) {
  return createMiddleware(async (c, next) => {
    c.header(
      'Cache-Control',
      `public, max-age=${maxAgeSeconds}, stale-while-revalidate=86400`,
    );
    await next();
  });
}

/** Phản hồi phụ thuộc thời điểm gọi (health check) thì không được cache. */
export const noStore = createMiddleware(async (c, next) => {
  c.header('Cache-Control', 'no-store');
  await next();
});
