# CertGenAI

Công cụ luyện thi cho kỳ thi **IIG Certiport Generative AI Foundations**: ngân hàng 164 câu hỏi đã lọc trùng và rà đáp án, 85 slide lý thuyết vi mô, và một bài kiểm tra mô phỏng bám sát định dạng phòng thi thật (50 câu / 50 phút). Toàn bộ tiến độ học tập được lưu cục bộ trong trình duyệt (`localStorage`) — không có backend, không tài khoản.

> Đây là dự án luyện thi độc lập, không phải sản phẩm chính thức của Certiport hay IIG.

## Tính năng

- **Tập luyện có hướng dẫn** — lọc theo nhóm nội dung/độ khó, kiểm tra đáp án và xem giải thích ngay sau mỗi câu.
- **Thi thử mô phỏng** — 50 câu, đếm ngược 50 phút, bảng tổng quan gắn cờ/rà soát trước khi nộp bài, chấm điểm theo thang 1000.
- **Lý thuyết vi mô** — 85 slide theo 4 khối kiến thức, mỗi slide có thuật ngữ, ví dụ, bẫy trắc nghiệm thường gặp và câu hỏi tự kiểm tra.
- Hỗ trợ 5 dạng câu hỏi: chọn một, chọn nhiều, ma trận (Yes/No), ghép cặp (matching), sắp xếp thứ tự (sequence).
- Lưu đầy đủ đề, lựa chọn và giải thích của bài đã nộp trong IndexedDB; mở lại ở chế độ chỉ đọc.
- Gom câu chưa khớp khóa và bỏ trống để luyện lại, cập nhật theo lần trả lời mới nhất.
- Xuất/nhập bản sao JSON v2 gồm bài làm chi tiết và bài dở; vẫn đọc lịch sử cũ chỉ có điểm.
- Lý thuyết cập nhật 17/10/2026: viết lại 45 slide, gắn tài liệu tham khảo cho cả 85 slide.
- Chấm toàn bộ 164 câu theo khóa IIG theo lựa chọn của người học, bao gồm khôi phục câu 89 và 126. Báo cáo phân tích trước đó là lịch sử, không dùng làm khóa chấm hiện tại.
- Thư viện tài liệu: 3 PDF và 1 DOCX, tìm không dấu, lọc chủ đề, mở/tải bản gốc và gợi ý trang đọc. Vào **Lý thuyết tự học → Tài liệu tham khảo**.
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
pnpm verify:data # kiểm tra nguồn, bản mã hóa, khóa chấm và phần đề bất biến
pnpm format    # oxfmt
```

## Triển khai lên Cloudflare Workers

```bash
pnpm build
wrangler deploy --config dist/server/wrangler.json
```

Tên Worker được lấy từ trường `name` trong `package.json`. Cần đăng nhập Wrangler trước (`wrangler login`) và có tài khoản Cloudflare.

## Dữ liệu câu hỏi

Nguồn chuẩn là `data/source/chunks/*.json` (164 câu, giữ nguyên nội dung câu hỏi và lựa chọn). `pnpm data`, `pnpm encrypt` và `pnpm build` luôn đọc toàn bộ nguồn chuẩn để tạo lại `public/data/chunks/*.enc` và `keybook.enc`. Script kiểm tra đủ chunk, tổng số câu và khóa trước khi ghi.

Chính sách hiện tại (17/10/2026):

- Toàn bộ 164 câu dùng khóa IIG; giữ nguyên câu hỏi, lựa chọn, ID và ảnh của ngân hàng đã lọc trùng.
- Câu 89 dùng Yes–No–No; câu 126 dùng No–Yes–No. Mỗi câu có `review.status: "accepted-iig"` và `gradingBasis: "iig-key"`.
- Lý thuyết trình bày kiến thức chung kèm các ô “Ghi nhớ khi thi — khóa IIG” cho những câu cần lưu ý ngữ cảnh đề.
- Bài đã lưu giữ nguyên ảnh chụp đề, khóa và kết quả tại thời điểm làm; bài mới dùng khóa IIG hiện tại.
- `data/review/grading-policy.json` lưu chính sách hiện tại. Các tệp `before-*`, `decisions-*` và báo cáo trong `../audit-iig-2026-10-17/` lưu lịch sử thẩm định, không thay thế khóa chấm hiện tại.

Dùng `pnpm verify:data` để kiểm tra toàn bộ 164 khóa, tính bất biến của câu hỏi/lựa chọn và đường giải mã/chấm bài thực tế. `pnpm verify:learning` kiểm tra lưu bài, khôi phục và lịch sử học tập.

Không chạy lại trình nhập dữ liệu thô lên ngân hàng hiện tại: nó có thể thay thế nội dung đã lọc và các kết luận rà soát. Bản nguồn chuẩn được sửa trực tiếp rồi chạy `pnpm data`.

## Cấu trúc thư mục

```
app/                 App Router (layout, trang chủ, globals.css)
components/quiz/     Các màn hình chính (trang chủ, làm bài, lý thuyết, kết quả)
components/ui/       Thư viện component shadcn (base-ui)
lib/                 Kiểu dữ liệu, hằng số, nội dung lý thuyết
data/source/chunks/  Nguồn chuẩn, đáp án và giải thích đã rà
data/review/         Bản trước rà và kết luận đối chiếu
public/data/         Chunk và keybook đã mã hóa
public/questions/    Hình ảnh minh họa cho câu hỏi
scripts/             Script tạo ngân hàng câu hỏi từ dữ liệu thô
```

### Tài liệu tham khảo bổ sung

Thư viện trong ứng dụng cung cấp 3 PDF và 1 DOCX từ `../thamkhao`, hỗ trợ tìm không dấu, lọc chủ đề, mở/tải bản gốc và liên kết trang đọc. Danh mục nằm ở `lib/reference-materials.ts`; bản phục vụ nằm trong `public/references/`. Cả 85 slide lý thuyết có nguồn tham khảo, trong đó 13 slide có ghi chú theo khóa thi IIG.

Lượt đối chiếu tài liệu và các kết luận trước khi chấp nhận toàn bộ khóa IIG được lưu trong `data/review/` và báo cáo `../audit-iig-2026-10-17/DOI_CHIEU_THAMKHAO.md` để truy vết lịch sử.
