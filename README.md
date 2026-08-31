# CertGenAI

Công cụ luyện thi cho kỳ thi **IIG Certiport Generative AI Foundations**: ngân hàng 175 câu hỏi chuẩn hóa, 85 slide lý thuyết vi mô, và một bài kiểm tra mô phỏng bám sát định dạng phòng thi thật (50 câu / 50 phút). Toàn bộ tiến độ học tập được lưu cục bộ trong trình duyệt (`localStorage`) — không có backend, không tài khoản.

> Đây là dự án luyện thi độc lập, không phải sản phẩm chính thức của Certiport hay IIG.

## Tính năng

- **Tập luyện có hướng dẫn** — lọc theo nhóm nội dung/độ khó, kiểm tra đáp án và xem giải thích ngay sau mỗi câu.
- **Thi thử mô phỏng** — 50 câu, đếm ngược 50 phút, bảng tổng quan gắn cờ/rà soát trước khi nộp bài, chấm điểm theo thang 1000.
- **Lý thuyết vi mô** — 85 slide theo 4 khối kiến thức, mỗi slide có thuật ngữ, ví dụ, bẫy trắc nghiệm thường gặp và câu hỏi tự kiểm tra.
- Hỗ trợ 5 dạng câu hỏi: chọn một, chọn nhiều, ma trận (Yes/No), ghép cặp (matching), sắp xếp thứ tự (sequence).
- Theo dõi tiến độ, lịch sử làm bài, xuất/nhập bản sao lưu (JSON).
- Giao diện sáng/tối, responsive.

## Công nghệ

- [vinext](https://github.com/cloudflare/vinext) — chạy Next.js App Router trên Vite, build thẳng ra Cloudflare Workers.
- React 19, TypeScript.
- Tailwind CSS v4 + [shadcn](https://ui.shadcn.com) (base-ui) cho hệ thống component.
- Triển khai trên **Cloudflare Workers** qua Wrangler.

## Bắt đầu

Yêu cầu Node.js ≥ 22.13 và [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev
```

Mở `http://localhost:3000`.

### Các lệnh khác

```bash
pnpm build     # build production (vinext build)
pnpm start     # chạy bản build bằng wrangler dev
pnpm deploy    # build rồi deploy lên Cloudflare Workers
pnpm lint      # oxlint
pnpm format    # oxfmt
```

## Triển khai lên Cloudflare Workers

```bash
pnpm build
wrangler deploy --config dist/server/wrangler.json
```

Tên Worker được lấy từ trường `name` trong `package.json`. Cần đăng nhập Wrangler trước (`wrangler login`) và có tài khoản Cloudflare.

## Dữ liệu câu hỏi

`public/data/manifest.json` và `public/data/chunks/*.json` là ngân hàng câu hỏi đã được chuẩn hóa, dùng trực tiếp khi chạy app — không cần bước build thêm.

Nếu cần tạo lại ngân hàng câu hỏi từ một bản export thô khác:

```bash
node scripts/generate-question-bank.mjs <raw-quiz.json> <thư-mục-assets>
```

Script này đọc định dạng export riêng của nguồn dữ liệu gốc, phân loại độ khó/chủ đề và ghi ra `public/data/`.

## Cấu trúc thư mục

```
app/                 App Router (layout, trang chủ, globals.css)
components/quiz/     Các màn hình chính (trang chủ, làm bài, lý thuyết, kết quả)
components/ui/       Thư viện component shadcn (base-ui)
lib/                 Kiểu dữ liệu, hằng số, nội dung lý thuyết
public/data/         Ngân hàng câu hỏi đã xử lý
public/questions/    Hình ảnh minh họa cho câu hỏi
scripts/             Script tạo ngân hàng câu hỏi từ dữ liệu thô
```
