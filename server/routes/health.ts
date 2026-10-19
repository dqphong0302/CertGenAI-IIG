import { Hono } from 'hono';
import type { Env } from '@/server/env';
import { noStore } from '@/server/middleware/cache';
import { learningSummary } from '@/server/content';

export const healthRoutes = new Hono<Env>().get('/', noStore, (c) =>
  c.json({
    status: 'ok' as const,
    /** Ngày rà soát nội dung — đủ để biết Worker đang chạy bản dữ liệu nào. */
    contentUpdated: learningSummary().theoryUpdated,
    now: new Date().toISOString(),
  }),
);
