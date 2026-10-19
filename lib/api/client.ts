import { hc } from 'hono/client';
import type { AppType } from '@/server/index';
import type { ApiError } from '@/server/middleware/problem';
import type {
  CourseOutline,
  CramSheet,
  CurriculumBundle,
  CurriculumLesson,
  LearningSummary,
  LectureOutline,
  LectureSlide,
  ReferenceMaterial,
  SearchResponse,
  TheoryBundle,
  TheoryModule,
  TrapBundle,
} from '@/shared/learning';
import type { Topic } from '@/shared/domain';

/**
 * Client gọi Worker Hono.
 *
 * `hc<AppType>` lấy đường dẫn và hình dạng phản hồi trực tiếp từ kiểu của
 * `server/index.ts`: đổi tên route hay đổi dữ liệu trả về là call site ở đây
 * báo lỗi ngay khi typecheck, không phải chờ chạy.
 */
const client = hc<AppType>(
  typeof window === 'undefined' ? 'http://localhost' : window.location.origin,
);

const api = client.api;

/** Lỗi API đã đọc được phần thân JSON do Worker trả về. */
export class ApiRequestError extends Error {
  constructor(
    readonly status: number,
    readonly code: string,
    message: string,
  ) {
    super(message);
    this.name = 'ApiRequestError';
  }
}

/** Phần `ClientResponse` của Hono mà `unwrap` cần — tránh lệ thuộc kiểu nội bộ. */
type JsonResponse = {
  ok: boolean;
  status: number;
  json: () => Promise<unknown>;
};

async function unwrap<T>(response: JsonResponse): Promise<T> {
  if (response.ok) return (await response.json()) as T;

  let code = 'http_error';
  let message = `Worker trả về ${response.status}.`;
  try {
    const body = (await response.json()) as ApiError;
    if (body?.error) {
      code = body.error.code;
      message = body.error.message;
    }
  } catch {
    // Phản hồi không phải JSON (ví dụ lỗi ở tầng mạng/CDN) — giữ thông báo mặc định.
  }
  throw new ApiRequestError(response.status, code, message);
}

export async function fetchLearningSummary(
  signal?: AbortSignal,
): Promise<LearningSummary> {
  const response = await api.learning.summary.$get(undefined, {
    init: { signal },
  });
  return unwrap<LearningSummary>(response);
}

export async function fetchCourseOutline(
  signal?: AbortSignal,
): Promise<CourseOutline> {
  const response = await api.learning.outline.$get(undefined, {
    init: { signal },
  });
  return unwrap<CourseOutline>(response);
}

export async function fetchLectureOutline(
  signal?: AbortSignal,
): Promise<LectureOutline> {
  const response = await api.learning.outline.lecture.$get(undefined, {
    init: { signal },
  });
  return unwrap<LectureOutline>(response);
}

export async function fetchLectureSlide(
  id: string,
  signal?: AbortSignal,
): Promise<LectureSlide> {
  const response = await api.learning.slides[':id'].$get(
    { param: { id } },
    { init: { signal } },
  );
  return unwrap<LectureSlide>(response);
}

export async function fetchLectureSlides(
  part: number | undefined,
  signal?: AbortSignal,
): Promise<LectureSlide[]> {
  const response = await api.learning.slides.$get(
    { query: part === undefined ? {} : { part: String(part) } },
    { init: { signal } },
  );
  return unwrap<LectureSlide[]>(response);
}

export async function fetchTheory(signal?: AbortSignal): Promise<TheoryBundle> {
  const response = await api.learning.theory.$get(undefined, {
    init: { signal },
  });
  return unwrap<TheoryBundle>(response);
}

export async function fetchTheoryModule(
  topic: Topic,
  signal?: AbortSignal,
): Promise<TheoryModule> {
  const response = await api.learning.theory[':topic'].$get(
    { param: { topic } },
    { init: { signal } },
  );
  return unwrap<TheoryModule>(response);
}

export async function fetchCurriculum(
  signal?: AbortSignal,
): Promise<CurriculumBundle> {
  const response = await api.learning.curriculum.$get(undefined, {
    init: { signal },
  });
  return unwrap<CurriculumBundle>(response);
}

export async function fetchCurriculumLesson(
  id: string,
  signal?: AbortSignal,
): Promise<CurriculumLesson> {
  const response = await api.learning.curriculum[':id'].$get(
    { param: { id } },
    { init: { signal } },
  );
  return unwrap<CurriculumLesson>(response);
}

export async function fetchTraps(signal?: AbortSignal): Promise<TrapBundle> {
  const response = await api.learning.traps.$get(undefined, {
    init: { signal },
  });
  return unwrap<TrapBundle>(response);
}

export async function fetchReferences(
  signal?: AbortSignal,
): Promise<ReferenceMaterial[]> {
  const response = await api.learning.references.$get(undefined, {
    init: { signal },
  });
  return unwrap<ReferenceMaterial[]>(response);
}

export async function fetchCramSheet(
  signal?: AbortSignal,
): Promise<CramSheet> {
  const response = await api.learning.cram.$get(undefined, { init: { signal } });
  return unwrap<CramSheet>(response);
}

export async function searchLearning(
  query: string,
  limit = 20,
  signal?: AbortSignal,
): Promise<SearchResponse> {
  const response = await api.learning.search.$get(
    { query: { q: query, limit: String(limit) } },
    { init: { signal } },
  );
  return unwrap<SearchResponse>(response);
}
