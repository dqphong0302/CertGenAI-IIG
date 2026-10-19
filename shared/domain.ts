// Phân loại dùng chung giữa Worker (server/) và SPA (app/, components/).
// Giữ ở shared/ để nội dung bài giảng phía server và logic chấm bài phía client
// không phải nhập lẫn vào nhau.

export type Difficulty = 'easy' | 'medium' | 'hard';
export type Topic = 'methods' | 'prompting' | 'verification' | 'responsible';

export const TOPICS: Topic[] = [
  'methods',
  'prompting',
  'verification',
  'responsible',
];

export const difficultyLabel: Record<Difficulty | 'all', string> = {
  all: 'Tổng hợp',
  easy: 'Dễ',
  medium: 'Trung bình',
  hard: 'Khó',
};

export const topicLabel: Record<Topic | 'all', string> = {
  all: 'Tất cả nội dung',
  methods: 'Phương pháp AI tạo sinh',
  prompting: 'Kỹ thuật tạo câu lệnh',
  verification: 'Tinh chỉnh và xác minh',
  responsible: 'Đạo đức, xã hội và pháp lý',
};

export function isTopic(value: unknown): value is Topic {
  return typeof value === 'string' && (TOPICS as string[]).includes(value);
}
