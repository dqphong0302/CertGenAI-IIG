// Bản ghi nhớ một trang: những ý chính cần nhớ trước khi vào phòng thi.

import type { CramSection } from '@/shared/learning';

export const CRAM_SECTIONS: CramSection[] = [
  {
    id: 'foundations',
    title: '1. Nền tảng và chọn công cụ',
    points: [
      'AI tạo sinh tạo nội dung; dự báo/phân loại và truy xuất nguồn là những tác vụ cần phân biệt. Một sản phẩm có thể kết hợp nhiều loại AI.',
      'Huấn luyện khác suy luận. GPU giúp xử lý song song; bộ nhớ, nguồn điện, kích thước mô hình và tải quyết định yêu cầu thực tế. Dùng cloud không bắt buộc máy khách có GPU cao cấp.',
      'Token không luôn bằng một từ. Ngữ cảnh và đầu ra có giới hạn; số token phụ thuộc bộ mã hóa và ngôn ngữ.',
      'Chọn công cụ theo chức năng, chất lượng, quyền riêng tư, chi phí, dễ dùng, cập nhật và tùy chỉnh. Tốc độ/phong cách có thể quan trọng theo nhiệm vụ.',
    ],
    source: 'Teacher Guide: Bài 1–6',
    href: '/references/teacher-guide.pdf#page=27',
  },
  {
    id: 'prompting',
    title: '2. Viết prompt đúng nhiệm vụ',
    points: [
      'Nêu vai trò, nhiệm vụ, ngữ cảnh, dữ liệu, định dạng và tiêu chí khi cần; không phải mọi prompt đều bắt buộc có đủ sáu phần.',
      'Zero-shot: không có ví dụ. One/few-shot: có ví dụ mẫu để làm theo. Thêm ràng buộc, bước xử lý hay một khoảng số không tự tạo ra shot.',
      'CoT: giải thích theo bước. Chaining: output prompt trước thành input prompt sau. Self-consistency: nhiều lần tạo rồi so sánh/chọn; không bảo đảm đúng.',
      'Reverse prompting có hai cách dùng trong tài liệu: thiết kế prompt từ đầu ra mong muốn; hoặc để AI hỏi làm rõ trước. Xét ngữ cảnh thay vì áp một nghĩa cho mọi câu.',
      'Style guide giữ phong cách; glossary giữ thuật ngữ; template giữ cấu trúc; tài liệu tham chiếu và hội thoại trước bổ sung ngữ cảnh.',
    ],
    source: 'Teacher Guide: Bài 11–13',
    href: '/references/teacher-guide.pdf#page=116',
  },
  {
    id: 'media',
    title: '3. Nội dung, hình ảnh và video',
    points: [
      'Tóm tắt rút gọn nội dung có sẵn; đổi định dạng trình bày lại thành bảng/danh sách/biểu đồ; tạo ý tưởng là nhiệm vụ khác.',
      'Ảnh: tách tạo mới, sửa và mô tả. “Nền ảnh là gì?” yêu cầu mô tả; “đổi nền xanh” yêu cầu chỉnh sửa. Khi làm câu 126, ghi nhớ khóa IIG No–Yes–No.',
      'Dữ liệu ảnh–văn bản có thể gán nhãn thủ công hoặc tự động; không giải thích rằng mọi nhãn đều phải do con người tạo. Khi làm câu 89, ghi nhớ khóa IIG Yes–No–No.',
      'Video: nêu thời lượng, chuyển động và âm thanh. Avatar cần chỉ rõ ai đọc script; TTS đơn thuần chưa bảo đảm avatar là người nói. Nội suy thêm khung trung gian.',
      'Phụ đề giúp xem không cần âm thanh; cần soát lỗi, đồng bộ thời gian và bảo đảm dễ đọc.',
    ],
    source: 'Teacher Guide: Bài 8–10',
    href: '/references/teacher-guide.pdf#page=87',
  },
  {
    id: 'verify',
    title: '4. Kiểm chứng và sử dụng có trách nhiệm',
    points: [
      'AI có thể viết trôi chảy nhưng sai. Kiểm tra lịch sử, thông tin hiện tại và số liệu bằng nguồn phù hợp; xác nhận một trích dẫn có thật và hỗ trợ đúng nhận định.',
      'Grounding, nhiệt độ thấp hay hỏi AI lại không loại bỏ hoàn toàn ảo giác. AI hỗ trợ rà lỗi; bằng chứng độc lập mới là căn cứ xác minh.',
      'Bias có thể đến từ dữ liệu thiếu/không đại diện, nhãn, tinh chỉnh, guardrails và prompt. Giới, tuổi, quốc tịch, địa lý/ngôn ngữ đều có thể liên quan.',
      'Không đưa PIN, mật khẩu, PII hoặc dữ liệu nội bộ vào công cụ chưa được phê duyệt. Che tên không bảo đảm ẩn danh; opt-out và thời hạn lưu phụ thuộc dịch vụ.',
      'Kiểm tra quyền dùng ảnh/nhạc/logo và giấy phép. Công khai trên web không đồng nghĩa miễn quyền. Trách nhiệm pháp lý, bằng sáng chế và gắn nhãn AI phụ thuộc bối cảnh; không áp một quy luật cho mọi nơi.',
      'Con người kiểm tra và phê duyệt đầu ra; ghi nhận AI đã hỗ trợ gì. Cân nhắc độ tuổi, khả năng tiếp cận, công bằng và tác động xã hội.',
    ],
    source: 'Teacher Guide: Bài 14–19',
    href: '/references/teacher-guide.pdf#page=145',
  },
];

export const CRAM_EXTRA_REFERENCES = [
  {
    label: 'Bài tập thực hành — thiên lệch, trang PDF 94',
    url: '/references/practice-exercises.pdf#page=94',
  },
  {
    label: 'Ví dụ giáo dục — ma trận chọn công cụ, trang PDF 13',
    url: '/references/education-examples.pdf#page=13',
  },
  {
    label: 'Ví dụ kỹ thuật câu lệnh — DOCX',
    url: '/references/prompt-techniques.docx',
  },
];
