# CẨM NANG ÔN THI CẤP TỐC — IIG CERTIPORT GENERATIVE AI FOUNDATIONS

> **Tài liệu tóm tắt 1 trang toàn diện phục vụ ôn tập cấp tốc trước giờ thi.**  
> Chuẩn hóa theo đề cương Certiport & Ngân hàng câu hỏi IIG Việt Nam.

---

## 🎯 PHẦN 0: CHIẾN LƯỢC PHÒNG THI & QUY TẮC TÍNH ĐIỂM

- **Thời gian & Số lượng:** **50 câu hỏi / 50 phút** (bình quân đúng **1 phút / câu**).
- **Thang điểm chuẩn:** Điểm tối đa **1000 điểm**; Điểm đỗ chuẩn là **700 / 1000 điểm** (đúng tối thiểu **35 / 50 câu**, đạt **70%**).
- **Quy tắc vàng:** **KHÔNG BỎ TRỐNG CÂU NÀO**. Bài thi không trừ điểm khi chọn sai, phải đánh dấu 100% các câu hỏi trước khi nộp bài.
- **5 Dạng câu hỏi chính:**
  1. _Multiple Choice:_ Chọn 1 phương án đúng duy nhất.
  2. _Multiple Response:_ Chọn 2 hoặc 3 phương án đúng (đọc kỹ số lượng yêu cầu).
  3. _Matching (Nối cột):_ Ghép thuật ngữ với định nghĩa hoặc tình huống tương ứng.
  4. _Yes/No Matrix:_ Xác định tính Đúng/Sai (hoặc Có/Không) cho từng phát biểu.
  5. _Sequence (Thứ tự):_ Kéo thả sắp xếp các bước thực hiện theo trình tự thời gian/logic.

---

## 🧠 KHỐI 1: BẢN CHẤT, KIẾN TRÚC & PHƯƠNG PHÁP AI TẠO SINH (METHODS - 25%)

### 1. Phân biệt sống còn: Generative AI vs Predictive / Discriminative AI

| Tiêu chí                | AI Tạo sinh (Generative AI)                                                                                                     | AI Dự báo / Phân tích (Predictive AI)                                                                                                                        |
| :---------------------- | :------------------------------------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Mục tiêu**            | Học phân phối xác suất để **sản sinh nội dung mới**                                                                             | Phân tích dữ liệu lịch sử để **phân loại hoặc dự đoán xu hướng**                                                                                             |
| **Đầu ra**              | Văn bản mới, hình ảnh, mã nguồn, âm thanh, video                                                                                | Nhãn phân loại (Có/Không), điểm số tín dụng, nhãn cảm xúc                                                                                                    |
| **Ví dụ ĐÚNG trong đề** | • **Thêm ngôi nhà vào ảnh sau khi được mô tả**<br>• Tự viết một bài thơ hoặc kịch bản phim mới<br>• Tự sinh mã Python tính toán | • **Phát hiện gian lận trong giao dịch ngân hàng**<br>• **Phát hiện bất thường trong mô hình bán hàng**<br>• **Phân loại đánh giá là tích cực hay tiêu cực** |

### 2. Bốn kiến trúc mô hình sinh cốt lõi

1. **Transformer (Bộ chuyển đổi - Cơ chế Self-Attention):**
   - _Cơ chế:_ Tự chú ý tính toán mối tương quan giữa mọi từ trong chuỗi bất kể khoảng cách địa lý. Dự đoán từ tiếp theo (_Next-Token Prediction_).
   - _Đại diện:_ GPT (ChatGPT), Claude, Gemini, BERT. Dùng cho văn bản, tóm tắt, dịch thuật, lập trình.
   - _Lưu ý thi:_ ChatGPT dùng kiến trúc Transformer mặc định, **KHÔNG PHẢI Diffusion**!
2. **Diffusion Models (Mô hình Khuếch tán):**
   - _Cơ chế:_ Thêm nhiễu Gaussian tuần hoàn vào ảnh cho đến khi thành nhiễu hoàn toàn, rồi huấn luyện mạng nơ-ron khử nhiễu (_Denoising_) từng bước theo văn bản hướng dẫn.
   - _Đại diện:_ Stable Diffusion, Midjourney, DALL-E 3, Adobe Firefly. Chuyên tạo ảnh phong cảnh, tranh nghệ thuật.
3. **GAN (Generative Adversarial Networks - Mạng đối nghịch tạo sinh):**
   - _Cơ chế:_ 2 mạng đối kháng: **Generator (Bộ sinh)** tạo dữ liệu giả; **Discriminator (Bộ phân biệt)** thẩm định thật/giả. Cả 2 cùng nâng cao chất lượng.
   - _Ứng dụng:_ Tạo avatar người ảo chân thực, hoán đổi khuôn mặt (Face-swap), deepfake.
4. **VAE (Variational Autoencoders - Bộ tự mã hóa biến phân):**
   - _Cơ chế:_ Nén dữ liệu vào **không gian tiềm ẩn liên tục (Latent space)** dạng xác suất, sau đó giải mã để tái tạo dữ liệu với đặc trưng mong muốn.
   - _Ứng dụng:_ Biến đổi mượt mà biểu cảm diện mạo (từ buồn sang cười, thay đổi góc nhìn khuôn mặt).

### 3. Tham số sinh & Phần cứng

- **Temperature (Nhiệt độ):**
  - _Thấp (0.0 - 0.2):_ Logic, xác định, lặp lại, ít lỗi. Dùng cho bài toán y tế, tài chính, kiểm toán, lập trình.
  - _Cao (0.7 - 1.0+):_ Tăng độ ngẫu nhiên, bất ngờ, phong phú. Dùng cho sáng tác truyện, thơ văn, ý tưởng marketing.
- **Token & Context Window:** 1 token ≈ 0.75 từ tiếng Anh. Context Window là bộ nhớ tối đa trong 1 phiên hội thoại; nếu câu lệnh vượt quá giới hạn, mô hình sẽ quên chỉ dẫn ban đầu.
- **GPU & VRAM:** AI tạo sinh đòi hỏi card đồ họa chuyên dụng với **dung lượng VRAM lớn** để nạp toàn bộ hàng tỷ tham số ma trận khi suy luận (_Inference_) và huấn luyện.

---

## ✍️ KHỐI 2: NGHỆ THUẬT & KỸ THUẬT VIẾT PROMPT (PROMPTING - 30%)

### 1. Công thức 5 thành tố của một Prompt chuẩn

`[Role - Vai trò]` + `[Task - Nhiệm vụ]` + `[Context - Bối cảnh]` + `[Constraints - Ràng buộc]` + `[Format - Định dạng]`

### 2. Bảng 7 kỹ thuật Prompting nâng cao

1. **Zero-shot Prompting:** Ra lệnh trực tiếp không kèm bất kỳ ví dụ mẫu nào.
2. **Few-shot Prompting:** Cung cấp 1 vài cặp mẫu (Hỏi - Đáp mẫu) trước khi đưa câu hỏi thực tế (ví dụ: đưa mẫu pha màu đỏ + xanh dương rồi mới hỏi câu mới).
3. **Chain-of-Thought (CoT - Tư duy chuỗi):** Yêu cầu AI trình bày từng bước suy luận trung gian trước khi chốt kết quả ("Hãy suy nghĩ từng bước..."). _Ví dụ đề thi: Quy trình tạo dàn ý → duyệt lại dàn ý → viết bản tóm tắt hoàn chỉnh._
4. **Prompt Chaining (Xâu chuỗi câu lệnh):** Chia bài toán lớn thành các bước tuần tự; đầu ra (_output_) của bước trước dùng làm đầu vào (_input_) cho bước kế tiếp.
5. **Reverse Prompting (Hỏi ngược):** Yêu cầu AI đóng vai người phỏng vấn để đặt câu hỏi ngược lại cho người dùng nhằm thu thập đủ thông tin trước khi viết bài (ví dụ viết CV xin việc).
6. **Self-Consistency (Nhất quán tự thân):** Cho AI sinh nhiều chuỗi suy luận độc lập, sau đó chọn câu trả lời xuất hiện với số phiếu cao nhất.
7. **Generate Knowledge (Tạo tri thức trước):** Yêu cầu AI sản sinh ra các tiêu chí và kiến thức nền tảng trước khi trả lời câu hỏi chính.

### 3. Tinh chỉnh văn phong & Đa phương tiện

- **Bản hướng dẫn phong cách (Style Guide):** Đồng nhất quy tắc ngữ pháp, chính tả, cách dùng từ giữa nhiều bài viết khác nhau của cùng một tòa soạn/ấn phẩm.
- **Bảng thuật ngữ (Glossary):** Đảm bảo từ vựng chuyên môn kỹ thuật được dịch chính xác theo đúng ngữ cảnh trong từng ngôn ngữ khác nhau.
- **Đối tượng mục tiêu (Audience):** Khi giải thích bài toán cho trẻ nhỏ, câu lệnh chuẩn nhất là: _"Viết lại cho đối tượng mục tiêu là học sinh tiểu học"_ (không dùng lệnh mơ hồ như 'đơn giản hóa').
- **Tránh từ viết tắt:** Không viết 'cấu hình LMS' mà phải ghi rõ _"hệ thống quản lý học tập"_ vì LMS có thể là Lightning Message Service.
- **Thao tác ảnh:**
  - _Inpainting:_ Sửa đổi hoặc thay thế một chi tiết **bên trong** vùng chọn của bức ảnh đã có.
  - _Outpainting:_ Mở rộng khung viền bức ảnh **ra bên ngoài** ranh giới gốc.
  - _Negative Prompt:_ Liệt kê các chi tiết **tuyệt đối không được xuất hiện** (no blur, no watermark).

---

## 🔍 KHỐI 3: ĐÁNH GIÁ, XÁC MINH & TINH CHỈNH (VERIFICATION - 25%)

### 1. Hiện tượng Ảo giác (AI Hallucination)

- **Bản chất:** AI bịa đặt các dữ kiện, số liệu thống kê, trích dẫn bài báo khoa học hoặc **án lệ pháp lý không có thật** nhưng trình bày với văn phong vô cùng tự tin và trôi chảy.
- **Nguyên nhân:** Mô hình ngôn ngữ chỉ dự đoán token tiếp theo theo xác suất, không thực sự hiểu chân lý khách quan.
- **Án lệ thực tế:** Luật sư dùng trích dẫn án lệ giả do ChatGPT sinh ra đã bị tòa án xử phạt nặng vì các vụ án đó hoàn toàn là bịa đặt.

### 2. Nguyên tắc Xác minh Độc lập & Bẫy tự xác nhận

- **Bẫy tự xác nhận (Self-Confirmation Bias):** Tuyệt đối **KHÔNG hỏi lại chính AI** xem câu trả lời trước đó có đúng không. AI sẽ có xu hướng tự bào chữa hoặc đồng tình sai lệch.
- **Biện pháp chuẩn:** Phải **xác minh độc lập chéo (Cross-verification)** với các nguồn bên ngoài có thẩm quyền (sách giáo khoa, cổng thông tin chính phủ, tài liệu học thuật).

### 3. Các kỹ thuật kiểm soát chất lượng

- **Kỹ thuật Grounding:** Đính kèm tài liệu tham chiếu và yêu cầu rõ: _"Chỉ trả lời dựa trên tài liệu này; nếu tài liệu không đề cập, hãy trả lời 'Tôi không biết'"_.
- **Phản hồi có mục tiêu (Targeted Feedback):** Bảo toàn phần nội dung đã ưng ý, chỉ yêu cầu sửa đúng yếu tố kỹ thuật: _"Phân tích tài liệu đã tải lên. Đưa ra đề xuất về ngữ pháp, dấu câu, chính tả và viết hoa"_.
- **Knowledge Cutoff:** Mô hình không biết dữ liệu sau ngày cắt dữ liệu huấn luyện. Muốn tra cứu sự kiện nóng cần tích hợp tìm kiếm thời gian thực.

---

## ⚖️ KHỐI 4: AI CÓ TRÁCH NHIỆM, ĐẠO ĐỨC & PHÁP LÝ (RESPONSIBLE AI - 20%)

### 1. Ba dạng Thiên kiến (Bias)

1. **Thiên kiến Lịch sử (Historical Bias):** Dữ liệu huấn luyện phản ánh định kiến xã hội bất bình đẳng trong quá khứ (ví dụ: nghề nghiệp nam/nữ).
2. **Thiên kiến Biểu diễn / Thiếu mẫu (Representation Bias):** Tập dữ liệu huấn luyện thiếu hụt mẫu đại diện của một nhóm người cụ thể (ví dụ: camera xe tự hành thiếu dữ liệu người ngồi xe lăn hoặc trẻ em qua đường ban đêm).
3. **Thiên kiến Gán nhãn (Labeling Bias):** Người dán nhãn đưa quan điểm thiên vị chủ quan vào nhãn phân loại.

### 2. Bảo vệ dữ liệu định danh (PII) & Riêng tư

- **PII (Personally Identifiable Information):** Số CCCD, số thẻ ngân hàng, hồ sơ bệnh án, số điện thoại, địa chỉ nhà.
- **Static Data Masking (Mặt nạ dữ liệu tĩnh):** Che giấu dữ liệu nhạy cảm bằng ký tự đại diện (chuyển 123-45-6789 thành XXX-XX-6789) trước khi đưa vào tập huấn luyện.
- **Tokenization (Mã hóa token):** Thay thế dữ liệu nhạy cảm bằng chuỗi token ngẫu nhiên không thể giải mã ngược nếu không có khóa bí mật riêng biệt.
- **Chính sách Opt-out:** Quyền yêu cầu nhà cung cấp AI không dùng dữ liệu trò chuyện của người dùng để huấn luyện mô hình thế hệ tiếp theo.

### 3. Sở hữu trí tuệ & Phán quyết tòa án

- **Phán quyết Tòa án Tối cao Vương quốc Anh:** AI **KHÔNG PHẢI là thể nhân/con người**, do đó không thể đứng tên là "nhà phát minh" để được cấp bằng sáng chế (_Patent_). Chỉ có con người mới được cấp bằng sáng chế.
- **Vi phạm bản quyền (Copyright):** Bắt chước phong cách (_style_) nói chung không vi phạm; nhưng sao chép nguyên văn lời bài hát, đoạn nhạc, hoặc tranh vẽ gốc là vi phạm bản quyền.
- **Quyền nhãn hiệu (Trademark):** Đưa logo hoặc nhãn hiệu đã đăng ký của công ty khác vào ảnh do AI tạo ra là vi phạm quyền nhãn hiệu.
- **Deepfake & Thủy vân:** Bắt buộc gắn watermark hoặc nhãn kỹ thuật số cảnh báo nội dung do AI sinh ra.
- **Human-in-the-loop:** Con người luôn là bên chịu trách nhiệm pháp lý cuối cùng đối với quyết định và sản phẩm do AI sinh ra.

---

## ⚠️ 15 BẪY TRẮC NGHIỆM IIG "KINH ĐIỂN" (MẸO CHỐN PHÒNG THI)

1. **Phát hiện gian lận ngân hàng / Bán hàng bất thường:** Là **Predictive AI**, KHÔNG PHẢI Generative AI. Chỉ có _"thêm ngôi nhà vào ảnh theo mô tả"_ mới là GenAI!
2. **AI gia sư đa môn học từ ChatGPT:** Dùng **Mô hình Transformer mặc định** kèm hướng dẫn cụ thể từng môn học (KHÔNG dùng Diffusion!).
3. **Giải thích quang hợp cho học sinh tiểu học:** Chọn **"Viết lại cho đối tượng mục tiêu là trẻ nhỏ"** (chỉ định rõ Audience, không dùng từ chung chung 'đơn giản hóa').
4. **Đồng nhất ngữ pháp toàn bộ bài viết trong tạp chí:** Dùng **Bản hướng dẫn sử dụng phong cách trình bày (Style Guide)**.
5. **Dịch thuật ngữ công nghệ sang nhiều thứ tiếng không sai nghĩa:** Dùng **Bảng thuật ngữ (Glossary)**.
6. **Quy trình: Tạo dàn ý → Duyệt lại dàn ý → Viết bản tóm tắt:** Là **Chain-of-Thought (Tư duy chuỗi)**.
7. **Chia nhỏ tác vụ, lấy đầu ra bước trước làm đầu vào bước sau:** Là **Prompt Chaining (Xâu chuỗi câu lệnh)**.
8. **Đưa ví dụ mẫu Hỏi - Đáp pha màu đỏ + xanh dương rồi hỏi câu mới:** Là **Few-shot Prompting**.
9. **Câu lệnh cấu hình XML cho LMS:** Viết rõ **"các hệ thống quản lý học tập"** vì LMS có thể là Lightning Message Service.
10. **Bằng sáng chế cho thuật toán do AI sáng tạo:** Tòa án Tối cao Anh phán quyết **AI không phải là thể nhân**, chỉ con người mới được đứng tên bằng sáng chế.
11. **Nicole đã ưng nội dung bài luận, chỉ cần sửa kỹ thuật:** Chỉ yêu cầu: _"Phân tích tài liệu. Đưa ra đề xuất về ngữ pháp, dấu câu, chính tả và viết hoa"_ (không viết lại nội dung).
12. **Logo công ty cắt cỏ thân thiện môi trường:** Thêm yếu tố sinh thái cụ thể: _"Thêm một khu vườn với cỏ xanh, hoa đầy màu sắc và ong"_.
13. **Bài đăng mạng xã hội cùng phong cách trong cùng 1 luồng chat:** Chỉ cần yêu cầu: _"Chỉnh sửa bài đăng để nó trông giống với các bài trước đã tạo"_ (vì AI đã nhớ ngữ cảnh).
14. **Tạo tác phẩm kết hợp phong cách Shakespeare & H.G. Wells:** Huấn luyện **Mô hình nhẹ dựa trên kiến trúc Transformer** trên toàn bộ tác phẩm của 2 tác giả.
15. **Mở rộng ảnh ra viền ngoài vs Sửa chi tiết bên trong:** Mở rộng ra xung quanh = **Outpainting**; Sửa chi tiết bên trong = **Inpainting**.

---

## 📖 BẢNG TRA CỨU 31 THUẬT NGỮ SONG NGỮ ANH - VIỆT

| Thuật ngữ tiếng Anh        | Nghĩa tiếng Việt         | Định nghĩa ngắn gọn                                                  |
| :------------------------- | :----------------------- | :------------------------------------------------------------------- |
| **Generative AI**          | AI tạo sinh              | Tạo nội dung mới từ phân phối xác suất đã học.                       |
| **Predictive AI**          | AI dự báo / phân tích    | Phân loại hoặc dự đoán dữ liệu dựa trên lịch sử.                     |
| **Discriminative AI**      | AI phân biệt             | Học ranh giới phân loại giữa các nhóm dữ liệu.                       |
| **Self-Attention**         | Tự chú ý                 | Cơ chế của Transformer tính toán trọng số liên kết giữa mọi từ.      |
| **Diffusion Model**        | Mô hình khuếch tán       | Khử nhiễu từng bước để tạo ảnh từ mô tả văn bản.                     |
| **GAN**                    | Mạng đối nghịch tạo sinh | Generator và Discriminator đối đầu nhau để tạo avatar chân thực.     |
| **VAE**                    | Bộ tự mã hóa biến phân   | Mã hóa vào không gian tiềm ẩn liên tục để biến đổi diện mạo mượt mà. |
| **Token**                  | Đơn vị từ vựng           | Đơn vị nhỏ mô hình xử lý (1 token ≈ 0.75 từ tiếng Anh).              |
| **Context Window**         | Cửa sổ ngữ cảnh          | Bộ nhớ token tối đa trong 1 phiên hội thoại.                         |
| **Temperature**            | Nhiệt độ sinh            | Điều khiển độ ngẫu nhiên: thấp = logic chuẩn xác; cao = sáng tạo.    |
| **Zero-shot Prompting**    | Lệnh không ví dụ         | Ra lệnh trực tiếp không kèm ví dụ mẫu nào.                           |
| **Few-shot Prompting**     | Lệnh kèm ví dụ mẫu       | Cung cấp vài cặp mẫu Hỏi - Đáp trước khi hỏi câu mới.                |
| **Chain-of-Thought (CoT)** | Tư duy chuỗi             | Bắt AI trình bày từng bước suy luận trung gian.                      |
| **Prompt Chaining**        | Xâu chuỗi câu lệnh       | Đầu ra của bước trước làm đầu vào của bước kế tiếp.                  |
| **Reverse Prompting**      | Hỏi ngược                | AI phỏng vấn ngược lại người dùng để thu thập thông tin.             |
| **Self-Consistency**       | Nhất quán tự thân        | Sinh nhiều chuỗi suy luận rồi chọn kết quả có số phiếu cao nhất.     |
| **Generate Knowledge**     | Tạo tri thức trước       | AI sinh kiến thức nền tảng trước khi trả lời câu hỏi cốt lõi.        |
| **Style Guide**            | Bản hướng dẫn phong cách | Quy định ngữ pháp, chính tả, cách dùng từ đồng nhất toàn ấn phẩm.    |
| **Glossary**               | Bảng thuật ngữ           | Danh sách dịch thuật ngữ chuyên ngành chuẩn, tránh sai ngữ cảnh.     |
| **Inpainting**             | Chỉnh sửa nội vùng       | Thay thế/sửa chi tiết bên trong vùng chọn của bức ảnh đã có.         |
| **Outpainting**            | Mở rộng ngoại cảnh       | Mở rộng khung viền bức ảnh ra bên ngoài ranh giới ban đầu.           |
| **Negative Prompt**        | Câu lệnh phủ định        | Danh sách các yếu tố cấm xuất hiện trong ảnh kết quả.                |
| **Hallucination**          | Ảo giác AI               | AI bịa đặt dữ liệu, số liệu hoặc án lệ với giọng văn tự tin.         |
| **Self-Confirmation Bias** | Bẫy tự xác nhận          | Lỗi hỏi lại chính AI xem nó có đúng không; phải xác minh độc lập.    |
| **Grounding**              | Ràng buộc thực tế        | Ràng buộc AI chỉ trả lời dựa trên tài liệu đính kèm.                 |
| **Knowledge Cutoff**       | Mốc ngắt tri thức        | Thời điểm kết thúc dữ liệu huấn luyện của mô hình.                   |
| **Historical Bias**        | Thiên kiến lịch sử       | Dữ liệu phản ánh định kiến bất bình đẳng trong quá khứ.              |
| **Representation Bias**    | Thiên kiến biểu diễn     | Dữ liệu thiếu hụt mẫu đại diện của một nhóm đối tượng cụ thể.        |
| **Static Data Masking**    | Mặt nạ dữ liệu tĩnh      | Che giấu thông tin PII bằng ký tự đại diện (XXX-XX-1234).            |
| **Tokenization**           | Mã hóa token bảo mật     | Thay dữ liệu nhạy cảm bằng chuỗi token ngẫu nhiên không thể giải mã. |
| **Human-in-the-loop**      | Con người giám sát       | Con người luôn kiểm soát và chịu trách nhiệm pháp lý tối hậu.        |

---

_Chúc bạn ôn tập hiệu quả và vượt qua kỳ thi IIG Certiport Generative AI Foundations với điểm số xuất sắc!_
