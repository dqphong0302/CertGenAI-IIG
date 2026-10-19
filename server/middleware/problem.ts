import { HTTPException } from 'hono/http-exception';
import type { ContentfulStatusCode } from 'hono/utils/http-status';

export type ApiError = {
  error: { status: number; code: string; message: string };
};

/**
 * Lỗi API có hình dạng cố định. Dùng `fail()` ở route thay vì tự dựng
 * Response để `app.onError` và client chỉ phải biết một dạng lỗi duy nhất.
 */
export function fail(
  status: ContentfulStatusCode,
  code: string,
  message: string,
): HTTPException {
  const body: ApiError = { error: { status, code, message } };
  return new HTTPException(status, {
    res: Response.json(body, {
      status,
      headers: { 'Cache-Control': 'no-store' },
    }),
  });
}

export const badRequest = (message: string) =>
  fail(400, 'bad_request', message);

export const notFound = (message: string) => fail(404, 'not_found', message);
