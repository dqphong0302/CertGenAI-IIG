import { Hono } from 'hono';
import { isTopic } from '@/shared/domain';
import type { Env } from '@/server/env';
import { cacheContent } from '@/server/middleware/cache';
import { badRequest, notFound } from '@/server/middleware/problem';
import * as content from '@/server/content';

const ONE_HOUR = 3600;
const SEARCH_LIMIT_DEFAULT = 20;
const SEARCH_LIMIT_MAX = 50;

/**
 * Nội dung học tập. Toàn bộ là dữ liệu chỉ đọc, dựng sẵn khi build, nên mọi
 * route đều cache được và không có nhánh ghi.
 */
export const learningRoutes = new Hono<Env>()
  .use('*', cacheContent(ONE_HOUR))

  .get('/summary', (c) => c.json(content.learningSummary()))

  /** Mục lục toàn khóa: đủ dựng sidebar mà không tải nội dung chi tiết. */
  .get('/outline', (c) => c.json(content.courseOutline()))

  /** Chỉ phần bài giảng của mục lục, cho màn hình chỉ cần danh sách slide. */
  .get('/outline/lecture', (c) => c.json(content.lectureOutline()))

  .get('/slides', (c) => {
    const part = c.req.query('part');
    if (part === undefined) return c.json(content.lectureSlides());

    const partNumber = Number(part);
    if (!Number.isInteger(partNumber) || partNumber < 1) {
      throw badRequest('Tham số "part" phải là số nguyên dương.');
    }
    return c.json(content.lectureSlides(partNumber));
  })

  .get('/slides/:id', (c) => {
    const slide = content.lectureSlide(c.req.param('id'));
    if (!slide) throw notFound('Không có slide bài giảng này.');
    return c.json(slide);
  })

  .get('/theory', (c) => c.json(content.theoryBundle()))

  .get('/theory/:topic', (c) => {
    const topic = c.req.param('topic');
    if (!isTopic(topic)) throw notFound('Không có nhóm khái niệm này.');
    return c.json(content.theoryModule(topic));
  })

  .get('/curriculum', (c) => c.json(content.curriculumBundle()))

  .get('/curriculum/:id', (c) => {
    const lesson = content.curriculumLesson(c.req.param('id'));
    if (!lesson) throw notFound('Không có bài học này.');
    return c.json(lesson);
  })

  .get('/traps', (c) => c.json(content.trapBundle()))

  .get('/references', (c) => c.json(content.referenceMaterials()))

  .get('/cram', (c) => c.json(content.cramSheet()))

  /** Tìm trên cả bài giảng, khái niệm, bài học và câu dễ nhầm. */
  .get('/search', (c) => {
    const query = c.req.query('q') ?? '';
    const rawLimit = c.req.query('limit');
    const limit = rawLimit === undefined ? SEARCH_LIMIT_DEFAULT : Number(rawLimit);

    if (!Number.isInteger(limit) || limit < 1 || limit > SEARCH_LIMIT_MAX) {
      throw badRequest(`Tham số "limit" phải là số nguyên 1–${SEARCH_LIMIT_MAX}.`);
    }

    const { total, hits } = content.searchLearning(query, limit);
    return c.json({ query, total, hits });
  });
