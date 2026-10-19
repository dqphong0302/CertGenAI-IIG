# CertGenAI

Công cụ luyện thi cho kỳ thi **IIG Certiport Generative AI Foundations**: ngân hàng 164 câu hỏi đã lọc trùng và rà đáp án, 85 slide lý thuyết vi mô, và một bài kiểm tra mô phỏng bám sát định dạng phòng thi thật (45 câu / 50 phút, tính điểm lẻ từng câu nhỏ). Nội dung học tập do một Worker Hono phục vụ; toàn bộ tiến độ và bài làm vẫn lưu cục bộ trong trình duyệt (`localStorage` và IndexedDB) — không tài khoản, không gửi dữ liệu người học đi đâu.

> Đây là dự án luyện thi độc lập, không phải sản phẩm chính thức của Certiport hay IIG.

## Tính năng

- **Tập luyện có hướng dẫn** — lọc theo nhóm nội dung/độ khó, kiểm tra đáp án và xem giải thích ngay sau mỗi câu.
- **Thi thử mô phỏng** — 45 câu, đếm ngược 50 phút, tính điểm lẻ từng câu nhỏ (ma trận/ghép nối/chọn nhiều), bảng tổng quan gắn cờ/rà soát trước khi nộp bài, chấm điểm theo thang 1000 (chuẩn đạt ≥ 700).
- **Lộ trình tự học hợp nhất** — mở thẳng khi vào ứng dụng. Một mục lục cho cả khóa (85 bài giảng có tiếng, 85 slide khái niệm, 19 bài chuyên sâu, ôn nhanh, câu dễ nhầm, ngân hàng câu hỏi, tài liệu), tìm kiếm không dấu trên toàn bộ nội dung, nhớ chỗ đang học và học tiếp từ đó.
- **Trình bày theo nhịp như trình chiếu** — mỗi slide mở dần theo đúng thứ tự giảng: ý chính → thuật ngữ → ví dụ áp dụng → chỗ dễ nhầm → câu ghi nhớ, rồi mới tới câu tự kiểm tra. Phím `→` mở nhịp tiếp theo và sang slide kế; `←` lùi slide; `Cách` phát hoặc dừng lời giảng; `/` nhảy vào ô tìm kiếm. Ai muốn đọc nhanh thì bấm **Hiện cả slide**.
- Hỗ trợ 5 dạng câu hỏi: chọn một, chọn nhiều, ma trận (Yes/No), ghép cặp (matching), sắp xếp thứ tự (sequence).
- Lưu đầy đủ đề, lựa chọn và giải thích của bài đã nộp trong IndexedDB; mở lại ở chế độ chỉ đọc.
- Gom câu chưa khớp khóa và bỏ trống để luyện lại, cập nhật theo lần trả lời mới nhất.
- Xuất/nhập bản sao JSON v2 gồm bài làm chi tiết và bài dở; vẫn đọc lịch sử cũ chỉ có điểm.
- Lý thuyết cập nhật 17/10/2026: viết lại 45 slide, gắn tài liệu tham khảo cho cả 85 slide.
- Chấm toàn bộ 164 câu theo khóa IIG theo lựa chọn của người học, bao gồm khôi phục câu 89 và 126. Báo cáo phân tích trước đó là lịch sử, không dùng làm khóa chấm hiện tại.
- Thư viện tài liệu: 3 PDF và 1 DOCX, tìm không dấu, lọc chủ đề, mở/tải bản gốc và gợi ý trang đọc. Vào **Lý thuyết → Tài liệu tham khảo** trong mục lục.
- Giao diện sáng/tối, responsive.

## Công nghệ

- [Hono](https://hono.dev) trên **Cloudflare Workers** — API nội dung học tập (`server/`).
- React 19 + Vite 8 (SPA) với [@cloudflare/vite-plugin](https://developers.cloudflare.com/workers/vite-plugin/), TypeScript.
- Tailwind CSS v4 + [shadcn](https://ui.shadcn.com) (base-ui) cho hệ thống component.
- Triển khai bằng Wrangler.

### Phân vai hai tầng

- **Tầng asset của Cloudflare** phục vụ SPA đã build và mọi blob bất biến: `/data/*.enc` (ngân hàng câu hỏi đã mã hóa), `/audio/*` (lời giảng), `/questions/*` (ảnh đề), `/references/*` (tài liệu). Không tốn một lần gọi Worker nào.
- **Worker Hono** chỉ nhận `/api/*` — xem `assets.run_worker_first` trong `wrangler.jsonc` — và trả nội dung học tập dạng JSON. Nhờ vậy bundle client không phải mang theo gần 10.000 dòng dữ liệu bài giảng.

Client gọi API bằng RPC có kiểu của Hono (`hc<AppType>` trong `lib/api/client.ts`): đổi tên route hay đổi hình dạng phản hồi là `pnpm typecheck` báo lỗi ngay.

### API

| Route | Trả về |
| --- | --- |
| `GET /api/health` | Trạng thái Worker và ngày rà soát nội dung |
| `GET /api/learning/summary` | Số liệu tổng quan toàn khóa |
| `GET /api/learning/outline` | Mục lục toàn khóa (dựng thanh điều hướng) |
| `GET /api/learning/slides` · `/slides/:id` | Bài giảng (lọc theo `?part=`) |
| `GET /api/learning/theory` · `/theory/:topic` | Slide khái niệm theo nhóm |
| `GET /api/learning/curriculum` · `/curriculum/:id` | Bài học chuyên sâu |
| `GET /api/learning/traps` · `/references` · `/cram` | Câu dễ nhầm, tài liệu, bản ghi nhớ |
| `GET /api/learning/search?q=&limit=` | Tìm không dấu trên cả 4 loại nội dung |

Nội dung chỉ đổi khi deploy nên mọi route nội dung đều có `Cache-Control` một giờ kèm `ETag`; lỗi trả về một hình dạng JSON duy nhất (`{ error: { status, code, message } }`).

## Bắt đầu

Yêu cầu Node.js ≥ 22.13 và [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev
```

Mở `http://localhost:3000`.

### Các lệnh khác

```bash
pnpm build     # build production (vite build)
pnpm preview   # chạy bản build trong runtime Workers
pnpm deploy    # build rồi deploy lên Cloudflare Workers
pnpm typecheck # tsc --noEmit
pnpm lint      # oxlint
pnpm verify:data # kiểm tra nguồn, bản mã hóa, khóa chấm và phần đề bất biến
pnpm format    # oxfmt
```

## Triển khai lên Cloudflare Workers

```bash
pnpm build
wrangler deploy
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
index.html           Vỏ SPA
app/                 Entry client và globals.css
components/quiz/     Luyện tập, thi thử, kết quả, ngân hàng câu hỏi
components/learning/ Lộ trình tự học: mục lục, bài giảng, khái niệm, bài học…
components/ui/       Thư viện component shadcn (base-ui)
server/              Worker Hono
  index.ts           Khởi tạo app, middleware chung, xử lý lỗi
  routes/            Nhóm route theo chủ đề
  middleware/         Cache và hình dạng lỗi
  content/           Nguồn chuẩn nội dung học tập + lớp truy xuất
shared/              Kiểu và hằng dùng chung giữa Worker và SPA
lib/                 Logic client: chấm bài, mã hóa, tiến độ, client API
data/source/chunks/  Nguồn chuẩn câu hỏi, đáp án và giải thích đã rà
data/review/         Bản trước rà và kết luận đối chiếu
public/data/         Chunk và keybook đã mã hóa
public/questions/    Hình ảnh minh họa cho câu hỏi
scripts/             Script tạo ngân hàng câu hỏi từ dữ liệu thô
```

### Tài liệu tham khảo bổ sung

Thư viện trong ứng dụng cung cấp 3 PDF và 1 DOCX từ `../thamkhao`, hỗ trợ tìm không dấu, lọc chủ đề, mở/tải bản gốc và liên kết trang đọc. Danh mục nằm ở `server/content/references.ts`; bản phục vụ nằm trong `public/references/`. Cả 85 slide lý thuyết có nguồn tham khảo, trong đó 13 slide có ghi chú theo khóa thi IIG.

Lượt đối chiếu tài liệu và các kết luận trước khi chấp nhận toàn bộ khóa IIG được lưu trong `data/review/` và báo cáo `../audit-iig-2026-10-17/DOI_CHIEU_THAMKHAO.md` để truy vết lịch sử.
