import type { Topic } from '@/lib/quiz';

export type ReferenceMaterial = {
  id: string;
  title: string;
  description: string;
  filename: string;
  url: string;
  format: 'PDF' | 'DOCX';
  pages?: number;
  topics: Topic[];
  reading: Array<{ title: string; page?: number; note: string }>;
};

export const REFERENCE_MATERIALS: ReferenceMaterial[] = [
  {
    id: 'teacher-guide',
    title: 'Giáo trình GenAI Foundations',
    filename: 'GEN AI TEACHER GUIDE FINAL 5.pdf',
    description:
      'Tài liệu nền tảng để học theo bài: phương pháp, câu lệnh, kiểm chứng và sử dụng AI có trách nhiệm.',
    url: '/references/teacher-guide.pdf',
    format: 'PDF',
    pages: 198,
    topics: ['methods', 'prompting', 'verification', 'responsible'],
    reading: [
      {
        title: 'Nền tảng và công cụ',
        page: 27,
        note: 'Bài 1–6 · trang PDF 27–68',
      },
      {
        title: 'Chuyển đổi nội dung, ảnh và video',
        page: 87,
        note: 'Bài 8–10 · trang PDF 87–115',
      },
      {
        title: 'Tinh chỉnh và kỹ thuật prompt',
        page: 116,
        note: 'Bài 11–13 · trang PDF 116–144',
      },
      {
        title: 'Kiểm chứng và trách nhiệm',
        page: 145,
        note: 'Bài 14–19 · trang PDF 145–198',
      },
    ],
  },
  {
    id: 'practice-exercises',
    title: 'Bài tập thực hành GenAI Foundations',
    filename: 'Generative AI Foundation Practice Exercises 2.pdf',
    description:
      'Đọc tình huống và thực hành áp dụng khái niệm sau khi học lý thuyết.',
    url: '/references/practice-exercises.pdf',
    format: 'PDF',
    pages: 127,
    topics: ['methods', 'prompting', 'verification', 'responsible'],
    reading: [
      {
        title: 'Tài nguyên và cách chạy mô hình',
        page: 41,
        note: 'Cloud, máy cục bộ và dữ liệu riêng tư',
      },
      {
        title: 'Reverse prompting',
        page: 86,
        note: 'Thực hành từ kết quả mong muốn',
      },
      {
        title: 'Thiên lệch trong dữ liệu',
        page: 94,
        note: 'Đối chiếu các yếu tố nhân khẩu học và địa lý',
      },
    ],
  },
  {
    id: 'education-examples',
    title: 'Ví dụ GenAI trong giáo dục',
    filename:
      'Gen AI Practice Examples for School Teachers and Educational Administrators.pdf',
    description:
      'Ví dụ cho giáo viên và quản lý giáo dục, kèm cách chọn công cụ theo mục tiêu sử dụng.',
    url: '/references/education-examples.pdf',
    format: 'PDF',
    pages: 48,
    topics: ['methods', 'prompting', 'responsible'],
    reading: [
      {
        title: 'Kỹ thuật prompt qua tình huống',
        page: 12,
        note: 'Self-consistency và hỏi làm rõ yêu cầu',
      },
      {
        title: 'Ma trận lựa chọn công cụ',
        page: 13,
        note: 'So sánh chức năng, chất lượng, bảo mật và chi phí',
      },
    ],
  },
  {
    id: 'prompt-techniques',
    title: 'Ví dụ về kỹ thuật câu lệnh',
    filename: 'Ví dụ về kỹ thuật các câu lệnh Gen AI.docx',
    description:
      'Mẫu prompt bằng tiếng Việt để đọc, điều chỉnh và dùng trong các bài tập riêng.',
    url: '/references/prompt-techniques.docx',
    format: 'DOCX',
    topics: ['prompting'],
    reading: [
      {
        title: 'Đọc các mẫu kỹ thuật câu lệnh',
        note: 'Mở bằng Word hoặc tải về để chỉnh sửa mẫu',
      },
    ],
  },
];
