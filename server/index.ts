import { Hono } from 'hono';
import { etag } from 'hono/etag';
import { HTTPException } from 'hono/http-exception';
import { requestId } from 'hono/request-id';
import { secureHeaders } from 'hono/secure-headers';
import type { Env } from '@/server/env';
import type { ApiError } from '@/server/middleware/problem';
import { healthRoutes } from '@/server/routes/health';
import { learningRoutes } from '@/server/routes/learning';

/**
 * Worker của CertGenAI.
 *
 * Phân vai rõ ràng giữa hai tầng:
 *
 * - **Tầng asset của Cloudflare** phục vụ SPA đã build cùng mọi blob bất biến
 *   (`/data/*.enc` ngân hàng câu hỏi đã mã hóa, `/audio/*` lời giảng,
 *   `/questions/*` ảnh đề, `/references/*` tài liệu). Không tốn một lần gọi
 *   Worker nào.
 * - **Worker Hono này** chỉ nhận `/api/*` (xem `assets.run_worker_first` trong
 *   wrangler.jsonc) và trả nội dung học tập dưới dạng JSON, nhờ đó bundle
 *   client không phải mang theo gần 10.000 dòng dữ liệu bài giảng.
 */
const app = new Hono<Env>()
  .use('*', requestId())
  .use('*', secureHeaders())
  // ETag trên nội dung tĩnh: lần ghé sau chỉ còn 304, không tải lại body.
  .use('/api/*', etag())

  .route('/api/health', healthRoutes)
  .route('/api/learning', learningRoutes)

  .notFound((c) =>
    c.json<ApiError>(
      {
        error: {
          status: 404,
          code: 'route_not_found',
          message: `Không có route ${c.req.method} ${new URL(c.req.url).pathname}.`,
        },
      },
      404,
      { 'Cache-Control': 'no-store' },
    ),
  )

  .onError((error, c) => {
    if (error instanceof HTTPException) return error.getResponse();

    console.error('Lỗi không lường trước', {
      requestId: c.get('requestId'),
      path: new URL(c.req.url).pathname,
      error,
    });

    return c.json<ApiError>(
      {
        error: {
          status: 500,
          code: 'internal_error',
          message: 'Worker gặp lỗi khi dựng phản hồi.',
        },
      },
      500,
      { 'Cache-Control': 'no-store' },
    );
  });

export type AppType = typeof app;

export default app;
