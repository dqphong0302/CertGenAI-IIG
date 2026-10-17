# Cẩm nang GenAI Foundations — cập nhật theo thamkhao

Cập nhật 17/10/2026. Bài luyện và bài thi chấm theo đáp án IIG theo lựa chọn của người học. Phần ghi nhớ khi thi chỉ rõ cách làm câu cố định; phần lý thuyết giúp áp dụng kiến thức. Tài liệu diễn giải từ 3 PDF và 1 DOCX.

## Bản chất AI tạo sinh, dữ liệu và mô hình; phân biệt dùng công cụ, huấn luyện và chọn tài nguyên theo nhiệm vụ.

### 1. AI tạo sinh tạo ra điều gì?

AI tạo sinh học quy luật từ dữ liệu để tạo nội dung theo yêu cầu; nội dung không mặc nhiên đúng hoặc độc nhất.

- Đầu ra có thể là văn bản, ảnh, âm thanh, video hoặc mã.
- Có thể tạo phản hồi mới từ kiến thức và ngữ cảnh; cũng có nguy cơ lặp lại dữ liệu đã học.
- Phân biệt tạo nội dung với dự đoán một nhãn hoặc truy xuất nguồn.

Ví dụ: Viết email giới thiệu sản phẩm theo dữ liệu được cung cấp là tạo sinh.

Lưu ý: Không học rằng mọi output đều chưa từng tồn tại hoặc tự động có bản quyền.

Ghi nhớ khi thi — khóa IIG: Câu 104: chọn hai ứng dụng theo IIG là lập danh sách thực phẩm từ công thức và tóm tắt văn bản. Bài học tổng quát vẫn bao gồm tạo nội dung sáng tạo.

Đọc thêm: Teacher Guide — trang PDF 27–34

### 2. AI tạo sinh vs AI phân tích/dự báo

AI phân tích/dự báo (Predictive AI) chuyên phân loại và dự đoán xu hướng từ dữ liệu cũ, trong khi AI tạo sinh tạo ra nội dung mới.

- AI phân tích/dự báo: Phân loại email (Spam / Không spam), chấm điểm tín dụng, dự đoán giá nhà dựa trên diện tích.
- AI tạo sinh: Tự viết một email bán hàng mới, soạn thảo hợp đồng vay vốn, vẽ thiết kế mẫu nhà 3D.
- Kết hợp trong thực tế: AI phân tích tìm ra khách hàng tiềm năng, sau đó AI tạo sinh tự động viết thư chào hàng cá nhân hóa.
- AI phân biệt (Discriminative AI): Chuyên phân loại dữ liệu vào các nhóm có sẵn (ví dụ nhận diện email spam) — không tạo ra nội dung mới như AI tạo sinh.

Ví dụ: Phát hiện đánh giá của khách hàng là hài lòng hay thất vọng: AI phân tích. Viết thư phản hồi xin lỗi và bồi thường cho khách: AI tạo sinh.

Lưu ý: Phân biệt mục tiêu bài toán phân loại với tạo nội dung; mô hình tạo sinh vẫn có thể được dùng để phân loại bằng prompt.

Ghi nhớ khi thi — khóa IIG: Câu 100: dùng các cặp theo IIG. Trong thực tế một sản phẩm có thể kết hợp tạo sinh, truy xuất, dự báo và đề xuất.

Đọc thêm: Teacher Guide — trang PDF 27–34

### 3. AI tạo sinh và công cụ tìm kiếm

Tìm kiếm ưu tiên truy xuất nguồn; AI tạo sinh ưu tiên tổng hợp phản hồi. Hai chức năng có thể kết hợp trong một sản phẩm.

- Tìm kiếm giúp tới trang, báo cáo và tài liệu có sẵn.
- AI có thể viết bản nháp, giải thích và tóm tắt.
- Cả hai có thể nhận câu hỏi tự nhiên; không phân biệt bằng số câu trả lời hoặc cách gõ từ khóa.

Ví dụ: Cần số liệu mới: tìm báo cáo gốc; cần email: nhờ AI soạn và kiểm tra dữ kiện.

Lưu ý: Đừng học rằng công cụ tìm kiếm chỉ nhận cụm từ, hoặc AI không bao giờ dẫn nguồn.

Đọc thêm: Teacher Guide — trang PDF 27–34

### 4. Kiến trúc Transformer & Cơ chế Tự chú ý

Transformer là kiến trúc mạng nơ-ron nền tảng cho hầu hết các mô hình ngôn ngữ lớn (LLM), sử dụng cơ chế Attention để hiểu ngữ cảnh toàn diện.

- Cơ chế Tự chú ý (Self-Attention): Cho phép mô hình tính toán mối liên hệ giữa mọi từ trong câu mà không bị giới hạn thứ tự trước sau.
- Xử lý song song (Parallel Processing): Khắc phục nhược điểm xử lý tuần tự của mạng RNN cũ, giúp huấn luyện nhanh trên dữ liệu khổng lồ.
- Ứng dụng cốt lõi: Nền tảng của các mô hình GPT (OpenAI), Claude (Anthropic), Gemini (Google), Llama (Meta).

Ví dụ: Trong câu 'Con chó không qua đường vì nó quá mệt', cơ chế Self-Attention giúp mô hình xác định từ 'nó' đang chỉ 'con chó' chứ không phải 'con đường'.

Lưu ý: Nghĩ rằng Transformer chỉ dùng để dịch thuật từng từ một theo từ điển.

Đọc thêm: Teacher Guide — trang PDF 43–50

### 5. Mô hình Khuếch tán (Diffusion Models)

Mô hình khuếch tán tạo hình ảnh chất lượng cao bằng cách học cách loại bỏ nhiễu ngẫu nhiên từng bước từ một khung hình mờ đục.

- Quá trình thêm nhiễu (Forward Process): Thêm dần nhiễu ngẫu nhiên Gaussian vào ảnh thật cho đến khi ảnh trở thành nhiễu hạt hoàn toàn.
- Quá trình khử nhiễu (Reverse Denoising): Mô hình học cách đoán và loại bỏ từng lớp nhiễu để phục hồi lại hình ảnh sắc nét theo câu lệnh prompt.
- Ứng dụng hàng đầu: Midjourney, Stable Diffusion, DALL-E 3, Adobe Firefly.

Ví dụ: Khi bạn nhập prompt 'Một ngọn núi tuyết lúc bình minh', mô hình bắt đầu từ một mảng nhiễu hạt xám và qua 30-50 bước khử nhiễu để hiện rõ đỉnh núi tuyết rực rỡ.

Lưu ý: Lầm tưởng mô hình AI tạo ảnh bằng cách cắt ghép các mảnh ảnh tìm thấy trên Google Images.

Đọc thêm: Teacher Guide — trang PDF 43–50

### 6. Mạng đối nghịch tạo sinh (GAN)

GAN bao gồm hai mạng nơ-ron cạnh tranh đối kháng trực tiếp với nhau: Mạng tạo sinh (Generator) và Mạng phân biệt (Discriminator).

- Mạng tạo sinh (Generator): Đóng vai 'kẻ làm giả', cố gắng tạo ra các mẫu ảnh giả sao cho giống thật nhất.
- Mạng phân biệt (Discriminator): Đóng vai 'chuyên gia giám định', cố gắng phát hiện xem mẫu ảnh là thật hay do Generator làm giả.
- Kết quả huấn luyện: Qua hàng nghìn vòng đấu trí, Generator học được cách tạo ra hình ảnh khuôn mặt hoặc phong cảnh chân thực đến mức mắt người không phân biệt được.

Ví dụ: Trang web 'ThisPersonDoesNotExist' sử dụng StyleGAN để tạo ra hàng triệu bức ảnh chân dung người ảo vô cùng chân thực mà người đó không có thật.

Lưu ý: Nhầm lẫn vai trò của Generator (tạo mẫu) và Discriminator (đánh giá/giám định).

Đọc thêm: Teacher Guide — trang PDF 43–50

### 7. Bộ tự mã hóa biến phân (VAE)

VAE nén dữ liệu đầu vào vào một không gian ẩn xác suất (Latent Space) và giải mã để tạo ra các biến thể mới mượt mà.

- Bộ mã hóa (Encoder): Nén bức ảnh hoặc âm thanh thành một vector biểu diễn trong không gian ẩn nhiều chiều.
- Không gian ẩn liên tục (Continuous Latent Space): Sắp xếp các đặc trưng tương đồng nằm gần nhau, cho phép chuyển đổi mượt mà giữa các kiểu mẫu.
- Bộ giải mã (Decoder): Nhận điểm dữ liệu từ không gian ẩn và tái tạo lại thành nội dung hoàn chỉnh mới.

Ví dụ: Sử dụng VAE để điều chỉnh độ dài mái tóc hoặc độ cười trên khuôn mặt bằng cách di chuyển nhẹ vị trí tọa độ trong không gian ẩn.

Lưu ý: Nghĩ rằng VAE chỉ là công cụ nén file ZIP thông thường không có khả năng sinh dữ liệu mới.

Đọc thêm: Teacher Guide — trang PDF 43–50

### 8. Thu thập, tiền xử lý và gán nhãn

Thu thập, làm sạch, mã hóa và gán nhãn là các thao tác khác nhau trong chuẩn bị dữ liệu.

- Thu thập: nguồn dữ liệu, quyền sử dụng và mức đại diện.
- Tiền xử lý: làm sạch, chuẩn hóa, chia token hoặc xử lý định dạng.
- Gán nhãn: tạo mô tả/nhãn; gán trọng số là thao tác khác, dù cùng ảnh hưởng quá trình học.
- Cặp ảnh–văn bản có thể có nhãn thủ công hoặc tự động; phải kiểm soát chất lượng.

Ví dụ: Ảnh kèm mô tả “chó trắng trên cỏ” giúp mô hình học liên hệ từ–ảnh.

Lưu ý: Mô hình không phải loại nào cũng bắt buộc có nhãn thủ công; không đồng nhất gán trọng số với gán nhãn.

Ghi nhớ khi thi — khóa IIG: Câu 89 theo IIG: Yes–No–No. Ghi nhớ khóa này khi thi; kiến thức thực hành vẫn phân biệt gán nhãn thủ công và hỗ trợ gán nhãn tự động.

Đọc thêm: Teacher Guide — trang PDF 35–42

### 9. Huấn luyện và suy luận

Huấn luyện điều chỉnh mô hình từ dữ liệu; suy luận dùng mô hình đã học để tạo đầu ra.

- Huấn luyện lớn có thể tốn nhiều GPU, điện và dữ liệu.
- Triển khai cung cấp mô hình cho người dùng hoặc ứng dụng.
- Suy luận cũng cần tài nguyên; mức yêu cầu tùy mô hình và tải.
- Không phải mọi tác vụ đều cần siêu máy tính ở máy người dùng.

Ví dụ: Dùng một mô hình có sẵn tạo đoạn văn là suy luận, không phải huấn luyện lại.

Lưu ý: Đừng gộp yêu cầu phần cứng của huấn luyện lớn với dùng dịch vụ đám mây.

Đọc thêm: Teacher Guide — trang PDF 35–42

### 10. Phương thức Text-to-Text & Text-to-Image

Hai phương thức ứng dụng phổ biến nhất của AI tạo sinh trong công việc văn phòng và thiết kế sáng tạo.

- Text-to-Text: Đầu vào là văn bản, đầu ra là văn bản mới (soạn email, tóm tắt báo cáo, dịch thuật, viết mã nguồn, trả lời câu hỏi).
- Text-to-Image: Đầu vào là câu lệnh mô tả bằng chữ, đầu ra là hình ảnh mới (logo, tranh nghệ thuật, ảnh chụp sản phẩm, sơ đồ kiến trúc).
- Image-to-Image: Đầu vào là ảnh gốc kèm câu lệnh điều chỉnh, đầu ra là ảnh đã được chuyển đổi phong cách hoặc bổ sung chi tiết.

Ví dụ: Nhập yêu cầu 'Viết bài quảng cáo cà phê': Text-to-Text. Nhập yêu cầu 'Vẽ một tách cà phê bốc khói trên bàn gỗ lúc sáng sớm': Text-to-Image.

Lưu ý: Kỳ vọng công cụ Text-to-Text thuần túy có thể tự render trực tiếp file ảnh độ phân giải cao.

Đọc thêm: Teacher Guide — trang PDF 51–59

### 11. Ba kiểu Tóm tắt: Trích xuất, Trừu tượng & Theo truy vấn

AI tạo sinh có thể tóm tắt văn bản theo 3 cách khác nhau tùy vào mục tiêu: giữ nguyên câu gốc, diễn giải lại, hoặc chỉ trả lời đúng trọng tâm câu hỏi.

- Tóm tắt Trích xuất (Extractive): Lấy nguyên văn các câu quan trọng nhất từ tài liệu gốc, ghép lại thành bản tóm tắt — không tạo câu chữ mới.
- Tóm tắt Trừu tượng (Abstractive): Đọc hiểu toàn bộ nội dung rồi diễn giải lại bằng câu chữ hoàn toàn mới, súc tích và tự nhiên hơn.
- Tóm tắt Theo truy vấn (Query-based): Chỉ trả lời đúng phần thông tin liên quan đến một câu hỏi cụ thể, bỏ qua phần còn lại của tài liệu.

Ví dụ: Với một báo cáo tài chính dài 10 trang: Trích xuất = ghép 5 câu quan trọng nhất nguyên văn; Trừu tượng = viết lại thành 1 đoạn văn mới tóm lược ý chính; Theo truy vấn = chỉ trả lời 'Lợi nhuận quý 3 là bao nhiêu?'

Lưu ý: Nhầm lẫn Tóm tắt Trích xuất với Tóm tắt Trừu tượng vì cả hai đều làm ngắn gọn văn bản — điểm khác biệt là có tạo câu chữ MỚI hay không.

Ghi nhớ khi thi — khóa IIG: Câu 51: IIG chọn tóm tắt cốt truyện trong 500 từ. Nhớ mục tiêu rút gọn nội dung có sẵn.

Đọc thêm: Teacher Guide — trang PDF 51–59

### 12. Phương thức Âm thanh & Giọng nói (TTS & ASR)

Chuyển đổi hai chiều giữa văn bản chữ viết và âm thanh giọng nói phục vụ lồng tiếng, trợ lý ảo và bóc băng ghi âm.

- Text-to-Audio (TTS - Text to Speech): Chuyển kịch bản chữ thành giọng đọc tự nhiên, lồng tiếng video, tạo hiệu ứng âm thanh hoặc sáng tác bài hát (ElevenLabs, Suno).
- Audio-to-Text (ASR - Nhận dạng giọng nói): Nghe file âm thanh/giọng nói và tự động chuyển đổi thành văn bản, tạo phụ đề video (OpenAI Whisper).
- Tương tác hai chiều: Người dùng nói chuyện với AI bằng giọng nói (Voice Mode) kết hợp cả ASR (để nghe) và TTS (để trả lời bằng giọng nói).

Ví dụ: Một đạo diễn muốn nghe thử giọng đọc diễn viên cho kịch bản hoạt hình: Dùng công cụ Text-to-Audio (TTS).

Lưu ý: Chọn nhầm Audio-to-Text khi mục đích là tạo ra giọng nói thuyết minh từ bài viết có sẵn.

Đọc thêm: Teacher Guide — trang PDF 51–59

### 13. Phương thức Video đa phương tiện

Tạo video hoạt cảnh từ kịch bản văn bản hoặc biến một bức ảnh tĩnh thành đoạn clip chuyển động chân thực.

- Text-to-Video: Nhập kịch bản mô tả phân cảnh và các chuyển động để AI tạo đoạn video hoàn chỉnh (Sora, Runway, Kling).
- Image-to-Video: Nạp một bức ảnh tĩnh và yêu cầu AI làm chuyển động các chi tiết (nước chảy, mây bay, nhân vật cử động) và điều khiển góc quay camera.
- Kiểm soát chuyển động: Sử dụng các tham số điều khiển lia máy (pan), phóng to/thu nhỏ (zoom), góc nghiêng (tilt) và chuyển động chậm (slow-motion).

Ví dụ: Nạp ảnh chụp đỉnh núi Everest và yêu cầu AI tạo video 5 giây góc nhìn flycam bay lượn quanh đỉnh núi: Đây là tác vụ Image-to-Video.

Lưu ý: Thiếu mô tả chuyển động có thể khiến video không đúng ý; kết quả còn tùy công cụ và thiết lập.

Đọc thêm: Teacher Guide — trang PDF 51–59

### 14. Mô hình chuyên biệt: OCR & Talking-head

Ngoài các phương thức Văn bản/Ảnh/Âm thanh/Video tổng quát, còn có các mô hình AI chuyên biệt cho một tác vụ duy nhất như đọc chữ trong ảnh hay tạo video người nói.

- OCR (Optical Character Recognition — Nhận dạng ký tự quang học): Đầu vào là Hình ảnh chứa chữ viết, đầu ra là Văn bản được trích xuất.
- Talking-head (Khuôn mặt người đang nói): Đầu vào là Âm thanh (hoặc văn bản chuyển giọng nói), đầu ra là Video khuôn mặt chuyển động khớp khẩu hình theo lời nói.
- Cả hai đều là mô hình 'một nhiệm vụ - một chức năng' (task-specific), khác với các mô hình đa năng như ChatGPT.

Ví dụ: Quét hóa đơn giấy để trích xuất số tiền và ngày tháng thành dữ liệu số: dùng OCR. Tạo video đại diện ảo đọc kịch bản bằng nhiều giọng khác nhau: dùng Talking-head.

Lưu ý: Nhầm OCR với Text-to-Image vì cả hai đều liên quan đến 'hình ảnh' — OCR đi từ Ảnh ra Văn bản (ngược chiều), không phải tạo ảnh mới.

Đọc thêm: Teacher Guide — trang PDF 51–59

### 15. Token và tokenization trong mô hình ngôn ngữ

Token là đơn vị mô hình xử lý; có thể là phần từ, từ, ký tự hoặc ký hiệu, tùy bộ mã hóa.

- Số token không bằng số từ trong mọi ngôn ngữ.
- Giới hạn ngữ cảnh và đầu ra thường tính bằng token.
- Tokenization trong NLP khác với thay PII bằng mã đại diện trong bảo mật.

Ví dụ: Một từ dài có thể bị chia thành nhiều token; nên dùng bộ đếm của mô hình khi cần ước tính.

Lưu ý: Không áp dụng tỷ lệ token/từ cố định cho mọi mô hình hoặc tiếng Việt.

Đọc thêm: Teacher Guide — trang PDF 43–50

### 16. Cửa sổ ngữ cảnh (Context Window)

Cửa sổ ngữ cảnh là giới hạn lượng token tối đa mà mô hình có thể ghi nhớ và xử lý đồng thời trong một lượt tương tác.

- Bao gồm cả đầu vào và đầu ra: Tổng số token của câu lệnh prompt + tài liệu đính kèm + câu trả lời của AI phải nằm trong giới hạn này.
- Hiện tượng tràn ngữ cảnh: Khi cuộc trò chuyện quá dài vượt qua Context Window, AI sẽ quên các yêu cầu và thông tin đã cung cấp ở phần đầu.
- Giải pháp quản lý: Tóm tắt lại nội dung định kỳ hoặc chia nhỏ tài liệu lớn thành nhiều phần trước khi nạp vào AI.

Ví dụ: Sau khi trao đổi 50 tin nhắn dài, bạn thấy AI không còn xưng hô theo đúng vai trò bạn đã yêu cầu ở tin nhắn số 1: Do cuộc trò chuyện đã vượt quá Context Window.

Lưu ý: Nạp tài liệu dài hàng nghìn trang vào một mô hình có cửa sổ ngữ cảnh nhỏ mà không kiểm tra giới hạn.

Đọc thêm: Teacher Guide — trang PDF 43–50

### 17. Next-Token Prediction & Tham số Nhiệt độ

Mô hình ngôn ngữ tự hồi quy dự đoán token tiếp theo; Temperature điều chỉnh độ ngẫu nhiên khi chọn token, không bảo đảm sáng tạo hay chính xác.

- Next-Token Prediction: Tại mỗi bước, mô hình tính xác suất cho hàng nghìn từ tiếp theo và chọn từ phù hợp nhất.
- Nhiệt độ thấp (Temperature ~ 0 đến 0.2): AI chọn các từ có xác suất cao nhất; câu trả lời mang tính tất định, chính xác, ít biến đổi (phù hợp cho lập trình, dữ liệu tài chính).
- Nhiệt độ cao (Temperature ~ 0.7 đến 1.0): AI chọn cả các từ có xác suất thấp hơn; câu trả lời giàu trí tưởng tượng, phong phú, đa dạng (phù hợp viết văn, sáng tạo ý tưởng).

Ví dụ: Viết code Python giải thuật toán: Đặt Temperature = 0. Viết 10 ý tưởng kịch bản quảng cáo hài hước: Đặt Temperature = 0.9.

Lưu ý: Để nhiệt độ cao khi yêu cầu AI tính toán số liệu kế toán hoặc trích xuất số liệu hợp đồng.

Đọc thêm: Teacher Guide — trang PDF 43–50

### 18. GPU, bộ nhớ và tài nguyên chạy mô hình

GPU hỗ trợ tính toán song song; bộ nhớ, nguồn điện và tải công việc cũng quyết định khả năng chạy mô hình.

- Huấn luyện mô hình lớn thường cần GPU mạnh và nhiều năng lượng.
- VRAM/RAM cần đủ chứa mô hình và dữ liệu; nguồn điện cần đủ tải.
- Dùng cloud không đồng nghĩa máy khách phải có GPU cao cấp.
- Chọn phần cứng theo mô hình và tốc độ mục tiêu.

Ví dụ: Máy nhẹ vẫn có thể truy cập dịch vụ AI chạy trên máy chủ từ xa.

Lưu ý: Không có một cặp linh kiện luôn quan trọng nhất cho mọi cách triển khai.

Đọc thêm: Teacher Guide — trang PDF 35–42; Bài tập tài nguyên — trang PDF 41

### 19. Internet, dữ liệu và tùy biến

Yêu cầu internet và dữ liệu phụ thuộc cách triển khai; tùy biến trợ lý không đồng nghĩa huấn luyện lại mô hình.

- Cloud thường cần kết nối mạng; mô hình local có thể chạy ngoại tuyến nếu đã có đủ tài nguyên.
- Hướng dẫn, template và tài liệu tham chiếu có thể tùy biến phản hồi.
- Fine-tuning điều chỉnh trọng số bằng dữ liệu huấn luyện bổ sung, khác thêm prompt.

Ví dụ: Muốn email đúng mẫu: thử hướng dẫn và template trước khi quyết định fine-tune.

Lưu ý: Đừng khẳng định mọi huấn luyện cần internet công cộng hay mọi tùy biến cần fine-tune.

Ghi nhớ khi thi — khóa IIG: Câu 102: IIG chọn đầu ra không đáng tin cậy và chưa có tiêu chuẩn chung. Khi dùng công cụ, vẫn kiểm tra giới hạn ngữ cảnh và đầu ra.

Đọc thêm: Teacher Guide — trang PDF 69–78; Bài tập tài nguyên — trang PDF 41

### 20. Hệ sinh thái & Trợ lý tùy biến (Custom GPTs)

Hệ sinh thái AI hiện đại cung cấp các nền tảng đa dạng và cho phép người dùng tùy biến trợ lý riêng (Custom GPTs / Google Gems).

- Trợ lý đa năng hàng đầu: OpenAI ChatGPT, Google Gemini, Microsoft Copilot, Anthropic Claude.
- Trợ lý chuyên trách tùy biến: Custom GPTs (OpenAI) và Google Gems (Google) cho phép người dùng nạp tài liệu riêng và thiết lập hướng dẫn sư phạm/nghiệp vụ cố định.
- Không cần lập trình: Bất kỳ ai cũng có thể tạo Custom GPT bằng ngôn ngữ tự nhiên để hỗ trợ chấm bài, giải toán hay hỗ trợ khách hàng.

Ví dụ: Một giáo viên tạo 'Gia sư Sinh học 10': Nạp toàn bộ sách giáo khoa và ra lệnh 'Chỉ hướng dẫn học sinh tư duy từng bước, không cho ngay đáp án bài tập'.

Lưu ý: Nghĩ rằng Custom GPT bắt buộc phải biết viết mã Python phức tạp mới tạo được.

Đọc thêm: Teacher Guide — trang PDF 60–68

### 21. Công cụ tạo hình ảnh & Thiết kế chuyên dụng

Bên cạnh các chatbot đa năng, có một nhóm công cụ AI chuyên về tạo và thiết kế hình ảnh, mỗi công cụ phù hợp với một nhu cầu khác nhau.

- Stable Diffusion: Mô hình khuếch tán mã nguồn mở chuyên tạo hình ảnh nghệ thuật/chân thực từ văn bản mô tả (text-to-image thuần túy).
- Adobe Firefly: Công cụ tạo/chỉnh sửa hình ảnh AI của Adobe, tích hợp sẵn trong Photoshop/Illustrator, huấn luyện trên kho ảnh có bản quyền hợp pháp.
- Canva (Magic Media): Nền tảng thiết kế kéo-thả tích hợp AI tạo ảnh, phù hợp cho người không chuyên tạo nhanh banner, áp phích, bài đăng mạng xã hội.
- Adobe Express: Công cụ thiết kế nhanh của Adobe, tạo hình ảnh và phông chữ cách điệu, hỗ trợ lên lịch đăng bài mạng xã hội trực tiếp.

Ví dụ: Cần một logo nhanh cho câu lạc bộ học sinh, không rành thiết kế: dùng Canva. Cần tạo hàng loạt concept-art nghệ thuật độ phân giải cao: dùng Stable Diffusion.

Lưu ý: Nghĩ rằng mọi công cụ tạo ảnh AI đều giống nhau — thực tế mỗi công cụ khác nhau về mức độ kiểm soát sáng tạo, nguồn dữ liệu huấn luyện và đối tượng người dùng mục tiêu.

Đọc thêm: Teacher Guide — trang PDF 97–105

### 22. Công cụ hỗ trợ doanh nghiệp và quy trình

Chọn công cụ theo nhiệm vụ, dữ liệu và khả năng tích hợp; không suy ra tác vụ độc quyền chỉ từ tên thương hiệu.

- Phát triển phần mềm có thể dùng trợ lý mã hoặc hệ thống nhiều vai trò.
- Thiết kế poster cần công cụ hỗ trợ bố cục/ảnh.
- Kiểm tra công cụ thật sự có quyền truy cập tệp, API hay dữ liệu trước khi giao việc.
- Tên họ sản phẩm không mô tả đầy đủ mọi phiên bản.

Ví dụ: Bài ghép công cụ dùng công dụng tiêu biểu; thực tế cần kiểm tra phiên bản và chức năng.

Lưu ý: Không mặc định MetaGPT là công cụ chuyên mạng xã hội hoặc mọi Copilot đều có cùng tính năng.

Ghi nhớ khi thi — khóa IIG: Câu 13 theo IIG: Microsoft Copilot. Câu 96: ghi nhớ các cặp công cụ–nhiệm vụ trong khóa. Khi áp dụng, kiểm tra tính năng sản phẩm đang dùng.

Đọc thêm: Teacher Guide — trang PDF 51–68

### 23. Tác vụ Doanh nghiệp & Kỹ thuật

AI tạo sinh mang lại hiệu suất vượt trội trong soạn thảo tài liệu kinh doanh, sinh mã lập trình và giải thích cấu trúc tệp XML.

- Soạn thảo kinh doanh: Viết bản nháp đề xuất kinh doanh (Business Proposals), tóm tắt biên bản họp, soạn email chăm sóc khách hàng.
- Lập trình & Kỹ thuật: Viết mã nguồn Python, JavaScript, SQL; gỡ lỗi (debugging) và tạo dữ liệu mẫu thử nghiệm.
- Hệ thống quản lý học tập (LMS): Giải thích cách các tệp XML được sử dụng để cấu hình dữ liệu khóa học và chuyển giao tài nguyên giữa các nền tảng.

Ví dụ: Quản trị viên LMS mới vào nghề dùng AI giải thích cấu trúc tệp XML để hiểu rõ cách bài giảng trực tuyến được đóng gói và chia sẻ.

Lưu ý: Gửi thẳng bản nháp do AI viết cho đối tác mà không có bước rà soát, chỉnh sửa số liệu của con người.

Đọc thêm: Teacher Guide — trang PDF 51–68

### 24. Chọn công cụ theo nhiệm vụ

So sánh đúng chức năng, chất lượng, quyền riêng tư, chi phí và khả năng sử dụng trước khi chọn công cụ.

- Xác định đầu vào và đầu ra cần có.
- Cân nhắc dễ dùng, tùy chỉnh, hỗ trợ, cập nhật và giới hạn sử dụng.
- Tốc độ, phong cách và tích hợp có thể quan trọng tùy nhiệm vụ.
- Kiểm tra output mẫu: ảnh có thể lỗi chi tiết; văn bản có thể sai dữ kiện.

Ví dụ: Ma trận giáo dục gợi ý: đúng chức năng 30%, chất lượng 25%, bảo mật 20% trở lên, chi phí 15%, dễ dùng 10%; điều chỉnh theo bối cảnh.

Lưu ý: Ba lựa chọn trong một câu thi không phải toàn bộ tiêu chí ra quyết định ngoài thực tế.

Đọc thêm: Teacher Guide — trang PDF 60–68

## Viết và tinh chỉnh prompt; phân biệt ví dụ mẫu, chuỗi prompt, hỏi làm rõ, nội dung ảnh và video.

### 1. Cấu trúc prompt: vai trò, nhiệm vụ và ngữ cảnh

Prompt rõ giúp AI biết cần làm gì, dùng dữ liệu nào, cho ai và theo tiêu chí nào; không có một số thành phần bắt buộc cho mọi tác vụ.

- Mô hình R–T–C–D–F–C: Role, Task, Context, Data, Format, Criteria.
- Nêu nguồn đầu vào, đối tượng và ràng buộc quan trọng.
- Có thể bắt đầu ngắn rồi bổ sung phần còn thiếu theo output.

Ví dụ: Đóng vai giáo viên; tạo phiếu học tập từ đoạn sách này; cho lớp 7; gồm 5 câu và đáp án; không thêm dữ kiện ngoài nguồn.

Lưu ý: Persona không bảo đảm kiến thức chuyên môn đúng; prompt dài không mặc nhiên tốt.

Ghi nhớ khi thi — khóa IIG: Câu 45: ghép các phần theo nhãn IIG. Phân biệt vai trò, phong cách, nhiệm vụ và dữ liệu khi tự soạn prompt.

Đọc thêm: Teacher Guide — trang PDF 79–86

### 2. Kỹ thuật Gán vai trò chuyên gia

Yêu cầu AI đóng vai một chuyên gia cụ thể giúp định hình vốn từ, phong cách tư duy và độ sâu chuyên môn của câu trả lời.

- Thiết lập góc nhìn chuyên môn: 'Bạn là chuyên gia dinh dưỡng thể thao', 'Bạn là kiểm toán viên kỳ cựu'.
- Kích hoạt vốn từ chuyên ngành: Gán vai trò giúp mô hình ưu tiên các mẫu ngôn ngữ chuyên nghiệp phù hợp với lĩnh vực đó.
- Tránh câu trả lời mơ hồ: Persona rõ ràng giúp AI không trả lời theo kiểu bách khoa toàn thư chung chung.

Ví dụ: Thay vì hỏi 'Nên ăn gì sau khi tập?', hãy gán vai trò: 'Bạn là chuyên gia dinh dưỡng thể thao. Hãy gợi ý thực đơn phục hồi cơ bắp sau buổi chạy 10km cho vận động viên bán chuyên.'

Lưu ý: Gán hai vai trò mâu thuẫn nhau trong cùng một câu lệnh (ví dụ: vừa là luật sư khắt khe vừa là diễn viên hài hước).

Đọc thêm: Teacher Guide — trang PDF 116–124

### 3. Phân hóa theo Trình độ người đọc

Xác định rõ đối tượng tiếp nhận giúp AI lựa chọn độ phức tạp của ngôn từ, cấu trúc câu và các ví dụ minh họa trực quan phù hợp.

- Trẻ em tiểu học (Lớp 3): Sử dụng câu chuyện ngụ ngôn, nhân hóa đồ vật, ví dụ sinh động (ví dụ: bài học về sự ra đời của ô tô).
- Học sinh lớp 9: Sử dụng các ví dụ thực tế liên quan đến sở thích lứa tuổi (ví dụ: dùng góc nghiêng mái nhà và cần cẩu để giải thích hàm Cosin).
- Chuyên gia kỹ thuật: Sử dụng thuật ngữ chuyên ngành chính xác, công thức toán học và dẫn chứng số liệu chặt chẽ.

Ví dụ: Cho học sinh lớp 1: 'Cây xanh dùng ánh nắng mặt trời như chiếc bếp nấu ăn để tạo thức ăn cho lá cây'. Cho sinh viên sinh học: Giải thích chu trình Calvin và phản ứng sáng.

Lưu ý: Không nêu rõ đối tượng khiến AI giải thích một khái niệm đơn giản bằng văn phong học thuật cao cấp khó hiểu.

Đọc thêm: Teacher Guide — trang PDF 116–124

### 4. Kỹ thuật Zero-shot Prompting

Zero-shot Prompting là việc ra lệnh trực tiếp cho AI thực hiện nhiệm vụ mà không cung cấp bất kỳ ví dụ mẫu minh họa nào.

- Đặc điểm: Câu lệnh ngắn gọn, đi thẳng vào yêu cầu nhiệm vụ.
- Trường hợp sử dụng tối ưu: Các câu hỏi kiến thức phổ thông, tra cứu định nghĩa, tóm tắt đoạn văn đơn giản, dịch câu thông dụng.
- Ưu điểm: Nhanh chóng, tiết kiệm token ngữ cảnh, không mất công chuẩn bị dữ liệu mẫu.

Ví dụ: 'Hãy dịch câu sau sang tiếng Đức: Một mocha latte, làm ơn.' -> AI trả về ngay: 'Einen Mokka Latte, bitte.'

Lưu ý: Sử dụng Zero-shot khi yêu cầu định dạng đầu ra phức tạp hoặc phân loại dữ liệu theo tiêu chuẩn riêng của công ty.

Đọc thêm: Teacher Guide — trang PDF 135–144

### 5. One-shot và few-shot: đếm ví dụ mẫu

Shot được nhận diện qua ví dụ làm mẫu cho nhiệm vụ, không qua độ dài prompt hoặc số ràng buộc.

- Zero-shot: không đưa ví dụ mẫu.
- One-shot: một ví dụ; few-shot: một vài ví dụ theo cách phân loại của bài học.
- Ví dụ cần thể hiện kiểu đầu vào và đầu ra muốn AI làm theo.
- Một ảnh tham chiếu không tự động chứng minh few-shot.

Ví dụ: “Rất tốt → tích cực; rất tệ → tiêu cực; hãy phân loại câu mới” cung cấp mẫu nhiệm vụ.

Lưu ý: Thêm “số từ 1 đến 10” là ràng buộc phạm vi, không phải một shot.

Ghi nhớ khi thi — khóa IIG: Câu 92 và 140: dùng các cặp/nhãn IIG khi làm câu hỏi cố định. Khi học kỹ thuật, đếm ví dụ mẫu minh họa nhiệm vụ để nhận diện shot.

Đọc thêm: Teacher Guide — trang PDF 135–144

### 6. Chain-of-Thought (Chuỗi tư duy CoT)

Kỹ thuật Chain-of-Thought hướng dẫn AI chia nhỏ bài toán và trình bày từng bước suy luận trung gian trước khi đưa ra kết quả cuối.

- Câu thần chú kích hoạt: Thêm câu lệnh 'Hãy suy nghĩ từng bước' (Let's think step by step).
- Nâng cao độ chính xác: Giúp mô hình không đưa ra kết luận vội vàng theo trực giác xác suất đơn thuần.
- Minh bạch hóa lập luận: Giúp người dùng nhìn rõ từng bước giải để phát hiện chính xác vị trí sai sót nếu có.

Ví dụ: 'Một cửa hàng có 20 quả táo, bán đi một nửa, sau đó nhập thêm 5 quả. Hãy suy nghĩ từng bước và cho biết cửa hàng còn bao nhiêu quả?'

Lưu ý: Hỏi thẳng đáp số của bài toán logic phức tạp mà không yêu cầu AI giải thích từng bước.

Đọc thêm: Teacher Guide — trang PDF 135–144

### 7. Quy trình dàn ý, rà soát rồi viết

Làm việc theo bước giúp kiểm soát nội dung; tên kỹ thuật còn phụ thuộc cách tổ chức các lượt tương tác.

- Trong câu 98, IIG chọn CoT theo cách trình bày của bài nền tảng.
- Nếu gửi nhiều prompt, lấy dàn ý trước làm input cho lượt sau: prompt chaining.
- Nếu đánh giá và sửa một output nhiều lần: iterative refinement.
- Giải thích từng bước không phải bằng chứng output đúng.

Ví dụ: Lập dàn ý dựa trên nguồn; kiểm tra thiếu ý; viết tóm tắt từ dàn ý đã duyệt.

Lưu ý: Đừng định nghĩa mọi workflow nhiều bước đều là CoT.

Đọc thêm: Teacher Guide — trang PDF 135–144

### 8. Prompt Chaining (Xâu chuỗi câu lệnh)

Prompt Chaining chia dự án lớn thành nhiều câu lệnh độc lập; kết quả đã được con người kiểm duyệt của bước trước làm đầu vào cho bước sau.

- Quy trình đa chặng có kiểm soát: Tách bạch các khâu: Thu thập tài liệu -> Lập dàn ý -> Viết chi tiết -> Hiệu đính.
- Kiểm soát chất lượng tại từng nút chặn: Con người kiểm tra và sửa đổi dàn ý ở bước 1 trước khi cho AI viết nội dung ở bước 2.
- Tránh quá tải: Giúp mô hình tập trung 100% năng lực vào một tác vụ đơn lẻ thay vì làm nhiều việc cùng lúc.

Ví dụ: Prompt 1: 'Trích xuất 5 luận điểm chính từ bài báo này.' (Bạn kiểm tra & chỉnh sửa). Prompt 2: 'Dựa vào 5 luận điểm đã duyệt, hãy viết một bài thuyết trình 5 slide.'

Lưu ý: Nhồi nhét toàn bộ 5 bước vào 1 câu lệnh duy nhất khiến AI làm sơ sài và bỏ sót nhiều yêu cầu quan trọng.

Đọc thêm: Teacher Guide — trang PDF 135–144

### 9. Dự án 3 bước với Prompt Chaining

Ví dụ thực tế áp dụng Prompt Chaining để chuyển đổi cuốn sổ tay nhân viên 30 trang thành bài thuyết trình PowerPoint chuyên nghiệp.

- Chặng 1 (Trích xuất): AI đọc tài liệu 30 trang và liệt kê ra 10 quy định quan trọng nhất (Người dùng rà soát).
- Chặng 2 (Lập dàn ý): Dựa trên 10 quy định đã duyệt, AI xây dựng cấu trúc 10 slide thuyết trình (Người dùng chỉnh sửa).
- Chặng 3 (Soạn thảo chi tiết): Dựa trên dàn ý đã hoàn thiện, AI viết nội dung chi tiết và gợi ý hình ảnh cho từng slide.

Ví dụ: Thay vì gõ 'Hãy làm slide từ sổ tay này', hãy dùng chuỗi 3 prompt: Trích xuất ý cốt lõi -> Lập dàn ý slide -> Viết nội dung chi tiết từng slide.

Lưu ý: Không dừng lại kiểm tra dàn ý ở bước 2 mà để AI viết thẳng nội dung chi tiết, dẫn đến việc phải làm lại từ đầu nếu dàn ý sai hướng.

Đọc thêm: Teacher Guide — trang PDF 135–144

### 10. Reverse prompting: hai cách dùng trong tài liệu

Guide dùng thiết kế prompt từ đầu ra mong muốn; tài liệu ví dụ còn dùng AI hỏi lại để làm rõ nhu cầu.

- Thiết kế ngược: xác định sản phẩm cuối, tiêu chí rồi nhờ AI đề xuất prompt.
- Hỏi làm rõ: để AI thu thập thông tin còn thiếu trước khi viết.
- Đọc ngữ cảnh từng câu; không áp một nghĩa cho tất cả ví dụ.
- Hỏi AI soạn câu phỏng vấn người khác chưa phải yêu cầu AI hỏi lại chính bạn.

Ví dụ: Mục tiêu: email 100 từ cho phụ huynh. Hãy đề xuất prompt phù hợp. Hoặc: hãy hỏi tôi các dữ kiện cần có trước khi soạn CV.

Lưu ý: Khi thi, câu 144 dùng Yes–Yes–No theo IIG; khi thực hành, xác định cách dùng thuật ngữ trong tài liệu.

Ghi nhớ khi thi — khóa IIG: Câu 144 theo IIG: Yes–Yes–No. Tài liệu có hai cách dùng reverse prompting; đọc mục tiêu của từng ví dụ.

Đọc thêm: Teacher Guide — trang PDF 135–144; Ví dụ kỹ thuật prompt (DOCX); Ví dụ giáo dục — trang PDF 12

### 11. Ứng dụng Reverse Prompting: Viết CV & Du lịch

Vận dụng kỹ thuật hỏi ngược để xây dựng Sơ yếu lý lịch (CV) chuyên nghiệp và thiết kế lịch trình du lịch cá nhân hóa.

- Viết Sơ yếu lý lịch (CV): AI hỏi lần lượt về mục tiêu nghề nghiệp, kinh nghiệm 3 công ty gần nhất, kỹ năng nổi bật và bằng cấp trước khi tổng hợp thành CV.
- Lập lịch trình du lịch: AI hỏi về ngân sách, sở thích ăn uống, phương tiện di chuyển, số lượng thành viên (ví dụ: kỳ nghỉ của Kenneth hoặc chuyến leo núi Kilimanjaro).
- Cá nhân hóa tối đa: Sản phẩm cuối cùng hoàn toàn bám sát tình trạng thực tế của người dùng thay vì một mẫu chung chung trên mạng.

Ví dụ: 'Hãy phỏng vấn tôi 5 câu hỏi để viết CV xin việc Marketing Manager. Hãy hỏi từng câu một và chờ tôi trả lời trước khi hỏi câu tiếp theo.'

Lưu ý: Tự mình viết một đoạn văn dài dòng lộn xộn thay vì để AI phỏng vấn có cấu trúc.

Đọc thêm: Teacher Guide — trang PDF 135–144; Ví dụ kỹ thuật prompt (DOCX); Ví dụ giáo dục — trang PDF 12

### 12. Self-consistency: nhiều lần tạo và đối chiếu

Tạo nhiều phương án rồi so sánh/chọn kết quả nhất quán; việc lặp lại tự nó không xác minh sự thật.

- Guide nhấn mạnh chạy lại cùng prompt và đánh giá các kết quả.
- Có thể dùng bỏ phiếu nếu câu trả lời có thể so sánh rõ.
- Với nội dung sáng tạo, chọn theo tiêu chí thay vì chỉ đếm từ trùng.
- Câu 137 theo IIG là self-consistency; trong thực hành thêm bước so sánh các kết quả.

Ví dụ: Tạo ba phương án tiêu đề, so với mục tiêu bài, chọn phương án phù hợp và kiểm tra các dữ kiện.

Lưu ý: Kết quả đa số vẫn có thể sai; không gọi đây là bảo đảm đúng tuyệt đối.

Đọc thêm: Teacher Guide — trang PDF 135–144; Ví dụ kỹ thuật prompt (DOCX); Ví dụ giáo dục — trang PDF 12

### 13. Knowledge generation: mở nền rồi áp dụng

Tạo hoặc làm rõ kiến thức nền trước, rồi dùng kiến thức đó để đi sâu vào nhiệm vụ; phần kiến thức vẫn cần kiểm chứng.

- Guide minh họa hỏi chung rồi đào sâu theo các câu tiếp theo.
- Có thể nhờ liệt kê tiêu chí trước khi đánh giá một phương án.
- Tách dữ kiện có nguồn khỏi nội dung AI tự đề xuất.

Ví dụ: Hỏi lợi ích nhà thông minh; chọn lợi ích phù hợp hộ gia đình; giải thích bằng ví dụ có kiểm chứng.

Lưu ý: AI tự sinh nền kiến thức không làm nguồn đó trở thành độc lập hoặc chắc đúng.

Đọc thêm: Teacher Guide — trang PDF 135–144; Ví dụ kỹ thuật prompt (DOCX); Ví dụ giáo dục — trang PDF 12

### 14. Bản hướng dẫn phong cách (Style Guide)

Cung cấp Bản hướng dẫn phong cách (Style Guide) để AI hiệu đính văn bản tuân thủ đúng các quy chuẩn về dấu câu, ngữ pháp và viết hoa.

- Nội dung của Style Guide: Quy tắc dùng dấu câu, quy chuẩn viết hoa chức danh, cách xưng hô thương hiệu, từ ngữ cấm sử dụng.
- Ứng dụng biên tập sao chép (Copy Editor): Biên tập viên tải lên tài liệu và bản Style Guide của tòa soạn để AI rà soát lỗi chính tả và định dạng.
- Đảm bảo tính nhất quán thương hiệu: Giúp hàng trăm bài viết từ nhiều tác giả khác nhau đều có chung một giọng điệu chuẩn mực.

Ví dụ: Biên tập viên tải lên Style Guide và yêu cầu: 'Rà soát bài báo này, sửa lỗi dấu câu và đảm bảo tất cả tên chức danh đều viết thường theo đúng quy định trong Style Guide đính kèm.'

Lưu ý: Yêu cầu AI 'Hãy sửa bài cho hay' mà không cung cấp quy tắc Style Guide cụ thể.

Đọc thêm: Teacher Guide — trang PDF 125–134

### 15. Bảng thuật ngữ (Glossary) trong Dịch thuật

Đính kèm Bảng thuật ngữ (Glossary) giúp AI dịch thuật các từ khóa chuyên ngành kỹ thuật một cách chuẩn xác và thống nhất toàn bộ tài liệu.

- Khái niệm Glossary: Danh mục các từ chuyên ngành kèm theo bản dịch chuẩn xác được chỉ định sẵn (ví dụ: 'Inpainting' $
ightarrow$ 'Chỉnh sửa nội suy').
- Giải quyết vấn đề bất nhất: Ngăn chặn việc chương 1 dịch một kiểu, chương 5 lại dịch sang một từ đồng nghĩa khác.
- Bảo toàn thuật ngữ gốc: Chỉ định rõ những từ ngữ nào bắt buộc phải giữ nguyên tiếng Anh không được dịch.

Ví dụ: Đính kèm bảng: 'Generative AI' $
ightarrow$ 'AI tạo sinh'; 'Prompt' $
ightarrow$ 'Câu lệnh'; 'Transformer' $
ightarrow$ Giữ nguyên không dịch.

Lưu ý: Dịch một tài liệu kỹ thuật dài 100 trang mà không nạp Glossary khiến thuật ngữ bị dịch lộn xộn.

Đọc thêm: Teacher Guide — trang PDF 125–134

### 16. Biến đổi Định dạng: Bảng, JSON & XML

Kỹ thuật yêu cầu AI chuyển đổi các đoạn văn bản dài thành cấu trúc dữ liệu trực quan như Bảng Markdown, JSON hoặc XML.

- Bảng Markdown (Markdown Table): Biến đoạn văn mô tả số lượng cây rừng thành bảng gồm các cột: Châu lục, Loại cây, Số lượng.
- Định dạng JSON / XML: Chuyển đổi thông tin khách hàng hoặc tệp cấu hình sang định dạng có cấu trúc để nạp vào phần mềm.
- Bảo toàn số liệu: Chỉ thị rõ ràng yêu cầu AI giữ nguyên các giá trị số học và tên riêng trong quá trình chuyển đổi.

Ví dụ: 'Hãy đọc đoạn văn sau về số lượng cây trên các châu lục và chuyển toàn bộ thông tin thành Bảng Markdown gồm 3 cột: Châu lục, Số lượng cây, Tỷ lệ phần trăm.'

Lưu ý: Không chỉ định tên các cột khiến AI tự tạo bảng với cấu trúc không đúng mong muốn.

Đọc thêm: Teacher Guide — trang PDF 87–96

### 17. Grounding và cách xử lý thiếu dữ liệu

Tài liệu nguồn và yêu cầu nói rõ phần chưa biết giúp giảm suy diễn, nhưng không loại bỏ hoàn toàn ảo giác.

- Chỉ định tài liệu và phạm vi cần sử dụng.
- Yêu cầu trích vị trí nguồn cho các dữ kiện chính.
- Tách phần có chứng cứ với đề xuất/giả định.
- Nếu thiếu dữ liệu: hỏi lại hoặc ghi chưa đủ căn cứ.

Ví dụ: Dựa vào báo cáo này, nêu ba kết quả; dẫn trang; nếu báo cáo không có thì ghi “chưa có thông tin”.

Lưu ý: Không có một prompt đơn lẻ nào bảo đảm AI không bịa.

Đọc thêm: Teacher Guide — trang PDF 145–153

### 18. Phân tích Biểu đồ phân tán & Trendline

Đính kèm hình ảnh biểu đồ phân tán (Scatter plot) có đường xu hướng (Trendline) để AI phân tích tương quan và ước tính dữ liệu.

- Đường xu hướng (Trendline): Biểu diễn hướng chuyển động trung bình của dữ liệu, giúp nhận biết tương quan thuận hay nghịch.
- Ước tính giá trị ngoại suy: Dựa vào độ dốc của đường xu hướng để ước tính giá trị tháng tiếp theo (lợi nhuận ròng, nhiệt độ trái đất).
- Yêu cầu rõ ràng: 'Dựa vào đường xu hướng trong biểu đồ phân tán đính kèm, hãy ước tính mức lợi nhuận của tháng thứ 12'.

Ví dụ: Nạp biểu đồ phân tán lợi nhuận 11 tháng có Trendline đi lên: AI đọc độ dốc đường xu hướng và ước tính doanh thu tháng 12 đạt 150 triệu đồng.

Lưu ý: Nạp hình ảnh biểu đồ bị mờ hoặc bị cắt mất phần chú thích các trục tọa độ X và Y.

Đọc thêm: Teacher Guide — trang PDF 87–96

### 19. Thiết kế Prompt Hình ảnh: Chủ thể & Phong cách

Xây dựng prompt tạo ảnh chuyên nghiệp bằng cách mô tả chi tiết Chủ thể, Môi trường bối cảnh và Phong cách nghệ thuật (Art Style).

- Chủ thể trọng tâm (Subject): Mô tả rõ con người, động vật, đồ vật (ví dụ: 'chú chó cứu hộ tại trại động vật', 'máy cắt cỏ điện').
- Môi trường & Bối cảnh (Setting): Không gian xung quanh, thời tiết, địa điểm (ví dụ: 'trong khu vườn xanh ngắt đầy hoa rực rỡ và ong').
- Phong cách nghệ thuật (Art Style): Đồ họa phẳng tối giản (flat vector minimalist), tranh màu nước, ảnh chụp chân dung thực tế 35mm, render 3D.

Ví dụ: 'Logo vector phẳng tối giản, máy cắt cỏ điện ở giữa một khu vườn xanh có hoa rực rỡ và ong, phong cách hiện đại, nền trong suốt.'

Lưu ý: Nhập câu lệnh chung chung 'Vẽ cho tôi một bức tranh đẹp' mà không nêu chủ thể và phong cách cụ thể.

Đọc thêm: Teacher Guide — trang PDF 97–105

### 20. Ánh sáng, Bố cục & Negative Prompt

Tinh chỉnh độ chuyên nghiệp của hình ảnh bằng cách thiết lập nguồn sáng, góc máy, tỷ lệ khung hình và câu lệnh phủ định (Negative Prompt).

- Ánh sáng (Lighting): Ánh sáng giờ vàng (golden hour), ánh sáng điện ảnh (cinematic lighting), ánh sáng trường quay mềm (soft studio lighting).
- Bố cục & Góc máy (Camera Angle): Chụp cận cảnh (close-up), góc rộng (wide angle), góc nhìn flycam từ trên cao (top-down view).
- Tỷ lệ khung hình (Aspect Ratio): Chỉ định rõ tỷ lệ ngang (--ar 16:9) cho video/màn hình hoặc tỷ lệ dọc (--ar 9:16) cho bài đăng điện thoại.
- Câu lệnh phủ định (Negative Prompt): Liệt kê các chi tiết cấm xuất hiện: 'no text, no blurry, no extra limbs, no watermark'.

Ví dụ: 'Áp phích Nhớ bạn cho chú chó cứu hộ, chụp cận cảnh, ánh sáng studio mềm mại, tỷ lệ 16:9, phong cách chân thực. Negative: no blurry, no text, no distorted paws.'

Lưu ý: Kiểm tra tỷ lệ khung hình theo công cụ; chọn tỷ lệ phù hợp nơi sử dụng thay vì dựa vào mặc định.

Đọc thêm: Teacher Guide — trang PDF 97–105

### 21. Tạo, sửa và mô tả ảnh

Tạo ảnh mới, chỉnh sửa ảnh có sẵn và mô tả ảnh là ba nhiệm vụ cần phân biệt khi đọc prompt.

- Tạo: sinh hình từ mô tả.
- Sửa: thêm/xóa/thay chi tiết; inpainting sửa vùng trong ảnh, outpainting mở rộng khung.
- Mô tả: phân tích nội dung, bố cục, phong cách hoặc metadata có sẵn.
- Metadata không nhất thiết suy ra được từ pixel; không đoán ngày/vị trí như dữ kiện thật.

Ví dụ: “Nền ảnh này là gì?” là mô tả. “Đổi nền thành xanh” là sửa.

Lưu ý: Sửa metadata là sửa dữ liệu tệp; không nhất thiết đổi nội dung thị giác.

Ghi nhớ khi thi — khóa IIG: Câu 126 theo IIG: No–Yes–No; ghi nhớ prompt máy ảnh có nền xanh. Ở phần thực hành, phân biệt mô tả ảnh hiện có với yêu cầu tạo hoặc sửa ảnh.

Đọc thêm: Teacher Guide — trang PDF 97–105

### 22. Video: chuyển động, nội suy, avatar và phụ đề

Prompt video cần nêu chuyển động, thời lượng, nhân vật, âm thanh và mục tiêu tiếp cận.

- Ảnh tĩnh → video: chỉ rõ vật hoặc camera chuyển động ra sao.
- Nội suy: bổ sung khung hình trung gian cho chuyển tiếp.
- Avatar đọc script: nhân vật nào đọc nội dung gì, giọng điệu và khẩu hình/cử chỉ phù hợp.
- Phụ đề hỗ trợ xem không cần âm thanh; phải soát lỗi và đồng bộ.

Ví dụ: Tạo video 10 giây từ ảnh này; camera lia nhẹ; nhân vật đọc script; thêm phụ đề tiếng Việt.

Lưu ý: Chỉ tạo giọng đọc TTS chưa bảo đảm avatar là người đọc; nhiều cảm xúc không phải lúc nào cũng cần.

Đọc thêm: Teacher Guide — trang PDF 106–115

## Đối chiếu lịch sử, thông tin hiện tại và số liệu; kiểm tra nguồn, bias và chất lượng trước khi sử dụng.

### 1. Xác minh bằng chứng độc lập

AI có thể hỗ trợ tìm lỗi, nhưng kết luận về độ chính xác cần đối chiếu nguồn phù hợp và bằng chứng có thể kiểm tra.

- Dữ kiện lịch sử: kiểm tra tài liệu/nguồn đáng tin.
- Thông tin hiện tại: xem nguồn có cập nhật và ngày công bố.
- Số liệu: truy bảng gốc, đơn vị, mốc thời gian và phương pháp.
- Không lấy lời xác nhận của cùng chatbot làm bằng chứng độc lập.

Ví dụ: Nhờ AI chỉ ra điểm cần kiểm tra rồi tự mở báo cáo nguồn để xác minh.

Lưu ý: Không cần cấm AI hỗ trợ rà lỗi; cần phân biệt hỗ trợ với xác minh độc lập.

Đọc thêm: Teacher Guide — trang PDF 145–153

### 2. Bẫy tự xác nhận (Self-Confirmation)

Chạy lại cùng một câu lệnh nhiều lần hoặc hỏi 'AI có chắc không' không chứng minh câu trả lời đúng; AI có thể tự tin lặp lại cùng một sai lầm.

- Ảo tưởng lặp lại: Nếu mô hình có xu hướng tính toán xác suất nghiêng về một thông tin sai, nó sẽ lặp lại thông tin sai đó ở mọi lần chạy.
- Hỏi 'Bạn có chắc chắn không?': Chỉ khiến AI tiếp tục tính toán chuỗi ngôn ngữ xã giao ('Tôi hoàn toàn chắc chắn') chứ không tạo ra bằng chứng thực tế mới.
- Lãng phí thời gian: Việc chạy đi chạy lại một prompt không thay thế được 30 giây tra cứu sách báo chính thống.

Ví dụ: Bạn hỏi AI: 'Ai là tổng thống thứ 100 của Mỹ?' -> AI bịa ra một cái tên -> Bạn hỏi 'Chắc không?' -> AI trả lời 'Tôi chắc chắn 100%' -> Đây là sự tự tin mù quáng của mô hình xác suất.

Lưu ý: Chạy prompt 3 lần thấy ra kết quả y hệt nhau liền vội vàng kết luận thông tin là chính xác 100%.

Đọc thêm: Teacher Guide — trang PDF 145–153

### 3. Đối chiếu chéo với Dữ liệu Nhà nước

Đối chiếu chéo (Cross-referencing) số liệu của AI với các cơ sở dữ liệu quốc gia chính thức, Tổng điều tra dân số và báo cáo chính phủ.

- Dữ liệu Tổng điều tra dân số (Census Data): Nguồn chuẩn mực nhất để xác thực quy mô dân số, cơ cấu độ tuổi, tỷ lệ đô thị hóa.
- Cổng thông tin bộ ngành & Chính phủ: Dùng để xác thực các văn bản pháp luật, quy chuẩn xây dựng, thông tư thuế và số liệu xuất nhập khẩu.
- Báo cáo tổ chức quốc tế: Dữ liệu của Ngân hàng Thế giới (World Bank), Liên Hợp Quốc (UN), Quỹ Tiền tệ Quốc tế (IMF).

Ví dụ: AI đưa ra báo cáo dân số tỉnh A năm 2025: Mở Cổng thông tin Tổng cục Thống kê để đối chiếu số liệu chính xác từng quận huyện.

Lưu ý: Dùng số liệu trên các bài đăng mạng xã hội không rõ nguồn gốc để đối chiếu chéo số liệu AI.

Đọc thêm: Teacher Guide — trang PDF 145–153

### 4. Nguồn học thuật & Trang Fact-checking

Sử dụng cơ sở dữ liệu học thuật có bình duyệt (Peer-reviewed) và các tổ chức kiểm chứng tin tức độc lập để xác minh thông tin chuyên sâu.

- Cơ sở dữ liệu học thuật bình duyệt: Google Scholar, PubMed (y khoa), IEEE Xplore (kỹ thuật), JSTOR (xã hội nhân văn).
- Tổ chức kiểm chứng dữ kiện (Fact-checking): Snopes, Reuters Fact Check, AP Fact Check chuyên điều tra các tin đồn và tuyên bố sai sự thật.
- Kiểm tra ngày xuất bản: Đảm bảo nghiên cứu học thuật tham chiếu vẫn còn giá trị áp dụng và chưa bị thay thế bởi các công trình mới hơn.

Ví dụ: Sử dụng AI để ôn thi lịch sử: Bắt buộc tra cứu cơ sở dữ liệu học thuật và các trang fact-checking uy tín để đối chiếu các mốc thời gian và sự kiện.

Lưu ý: Tin vào một bài báo khoa học mà không kiểm tra xem tạp chí đó có uy tín và được bình duyệt hay không.

Đọc thêm: Teacher Guide — trang PDF 145–153

### 5. Tham vấn Chuyên gia có Thẩm quyền

Trao đổi và tham vấn trực tiếp với các giáo sư, bác sĩ, kỹ sư hoặc chuyên gia đầu ngành giúp đánh giá thông tin theo chuyên môn; vẫn cần xem bằng chứng và phạm vi năng lực.

- Giá trị của kinh nghiệm thực tế: Chuyên gia có khả năng nhận biết ngay những lỗi sai phi thực tế mà tài liệu viết có thể chưa cập nhật.
- Đánh giá tính khả thi: Chuyên gia thẩm định xem các giải pháp kỹ thuật do AI đề xuất có thực sự thi công hoặc áp dụng được trên thực địa hay không.
- Xử lý các tình huống nhạy cảm: Các quyết định y khoa, bản án pháp lý và chính sách công bắt buộc phải có sự đánh giá của hội đồng chuyên môn.

Ví dụ: Bác sĩ sử dụng AI để tổng hợp tài liệu nghiên cứu mới, nhưng phác đồ điều trị thực tế cho bệnh nhân bắt buộc phải được hội đồng bác sĩ chuyên khoa phê duyệt.

Lưu ý: Bỏ qua bước hỏi ý kiến chuyên gia và tự ý áp dụng các hướng dẫn kỹ thuật phức tạp của AI vào thực tế.

Đọc thêm: Teacher Guide — trang PDF 145–153

### 6. AI Hallucination (Ảo giác) là gì?

Ảo giác (Hallucination) là hiện tượng mô hình AI tự tạo ra thông tin hoàn toàn sai sự thật hoặc bịa đặt nhưng trình bày với văn phong cực kỳ tự tin.

- Bản chất xác suất: Mô hình ghép các từ ngữ có vẻ hợp lý nhất theo quy luật thống kê chứ không tra cứu cơ sở dữ liệu sự thật khách quan.
- Độ trôi chảy đánh lừa người dùng: Câu văn được viết rất mượt mà, đúng ngữ pháp, lập luận chặt chẽ khiến người đọc dễ mất cảnh giác.
- Phạm vi xuất hiện: Xảy ra ở mọi lĩnh vực từ số liệu khoa học, tên tác giả bài báo, sự kiện lịch sử đến điều khoản luật pháp.

Ví dụ: AI tuyên bố: 'Theo nghiên cứu năm 2024 của Đại học Oxford, 87.4% người uống trà sống thọ trên 100 tuổi' -> Con số 87.4% và nghiên cứu này hoàn toàn do AI tự bịa ra.

Lưu ý: Tin tưởng rằng một câu văn viết hay và trôi chảy thì chắc chắn nội dung bên trong phải đúng sự thật.

Đọc thêm: Teacher Guide — trang PDF 145–153

### 7. Dấu hiệu nhận diện Trích dẫn & Án lệ Giả

Học cách phát hiện các dấu hiệu ảo giác đặc trưng: Mã số DOI giả mạo, đường link URL không tồn tại và các án lệ luật pháp bịa đặt.

- Trích dẫn bài báo khoa học giả: AI bịa ra tên tác giả nổi tiếng ghép với tên bài báo nghe rất kêu, nhưng mã DOI hoặc đường link bấm vào báo lỗi 404.
- Bịa đặt án lệ luật pháp: Tự tạo ra tên các vụ tranh chấp, số hiệu hồ sơ tòa án và tên thẩm phán không hề có trong thực tế (rủi ro cực lớn cho ngành luật).
- Cách phòng ngừa: Luôn copy mã DOI hoặc số hiệu án lệ và tra cứu trực tiếp trên hệ thống thư viện hoặc cổng tòa án.

Ví dụ: Một thực tập sinh công ty luật nộp đơn kiện có 3 án lệ do AI trích dẫn -> Ra tòa phát hiện cả 3 án lệ đều không tồn tại -> Tòa án xử phạt luật sư vì vi phạm liêm chính nghề nghiệp.

Lưu ý: Sao chép nguyên văn danh mục tài liệu tham khảo do AI tạo ra vào bài luận mà không mở kiểm tra từng liên kết.

Đọc thêm: Teacher Guide — trang PDF 145–153

### 8. Bám nguồn và kiểm tra trích dẫn

Grounding giảm nguy cơ bịa nhưng nguồn được dẫn vẫn cần kiểm tra có tồn tại và hỗ trợ đúng mệnh đề.

- Mở đúng tài liệu, kiểm tra đoạn/trang.
- Đối chiếu tác giả, ngày, số liệu và phạm vi.
- Phân biệt câu có chứng cứ với suy luận thêm.

Ví dụ: AI dẫn báo cáo trang 12: mở trang 12, kiểm tra con số cùng đơn vị và năm.

Lưu ý: Một URL hợp lệ không đồng nghĩa nội dung trang chứng minh kết luận.

Đọc thêm: Teacher Guide — trang PDF 145–153

### 9. Giảm tính ngẫu nhiên và nêu điều chưa biết

Điều chỉnh tham số và hướng dẫn có thể làm phản hồi ổn định hơn; ổn định không đồng nghĩa đúng.

- Nếu công cụ hỗ trợ, nhiệt độ thấp thường giảm đa dạng lấy mẫu.
- Hỏi rõ giả định, dữ kiện thiếu và nguồn.
- Kiểm tra phép tính bằng dữ liệu/công cụ thích hợp.

Ví dụ: Với bảng doanh số, yêu cầu tính tổng từng cột rồi đối chiếu bảng tính.

Lưu ý: Nhiệt độ thấp không loại được ảo giác hoặc lỗi số học.

Đọc thêm: Teacher Guide — trang PDF 145–153

### 10. Phản hồi có Mục tiêu (Targeted Feedback)

Quy trình Tinh chỉnh lặp (Iterative Refinement) nâng cao chất lượng kết quả qua từng lượt trao đổi bằng phản hồi cụ thể, rõ ràng.

- Chỉ rõ điểm chưa đạt: Nêu chính xác tiêu chí nào cần sửa (độ dài, giọng điệu, mức độ chuyên môn, định dạng hiển thị).
- Tránh phản hồi mơ hồ: Những câu như 'Làm lại đi', 'Chưa hay', 'Viết tốt hơn đi' không cung cấp hướng dẫn định lượng cho mô hình.
- Cung cấp hướng điều chỉnh: 'Hãy rút ngắn đoạn 2 xuống dưới 50 từ và thay thế các từ ngữ kỹ thuật bằng ví dụ thực tế'.

Ví dụ: Thay vì gõ 'Viết lại đi', hãy phản hồi: 'Bài viết đầy đủ thông tin nhưng giọng văn quá trang trọng. Hãy viết lại phần mở đầu với giọng văn thân thiện, hào hứng hơn.'

Lưu ý: Xóa bỏ toàn bộ cuộc hội thoại khi AI mới chỉ làm sai một chi tiết nhỏ có thể sửa được bằng một phản hồi ngắn.

Đọc thêm: Teacher Guide — trang PDF 116–124

### 11. Bảo toàn Phần tốt & Thêm Tiêu chí Mới

Trong quá trình tinh chỉnh, luôn chỉ thị rõ ràng phần nào của kết quả trước đã đạt yêu cầu cần được giữ nguyên không đổi.

- Bảo toàn kết quả đạt chuẩn: Nêu rõ: 'Hãy giữ nguyên cấu trúc 3 phần và các số liệu doanh thu trong bảng ở câu trả lời trước'.
- Bổ sung tiêu chí hoặc ví dụ mới: 'Bổ sung thêm một cột Thời hạn hoàn thành vào bảng trên và thêm 2 hashtag ở cuối bài'.
- Kiểm soát sự ổn định: Ngăn chặn hiện tượng AI sửa được lỗi này nhưng lại vô tình làm hỏng các phần khác vốn đã làm rất tốt.

Ví dụ: 'Bảng phân công công việc rất tốt. Hãy giữ nguyên danh sách nhiệm vụ và người phụ trách; chỉ thêm một cột Mức độ ưu tiên (Cao/Trung bình/Thấp) vào bên phải.'

Lưu ý: Không nhắc AI giữ lại phần tốt khiến mô hình tự ý viết lại toàn bộ theo một cấu trúc hoàn toàn mới.

Đọc thêm: Teacher Guide — trang PDF 116–124

### 12. Knowledge Cutoff & Dữ liệu biến động

Hiểu rõ mốc chốt dữ liệu (Knowledge Cutoff Date) và sự cần thiết của tính năng tìm kiếm web thời gian thực đối với các sự kiện hiện tại.

- Điểm chốt dữ liệu (Knowledge Cutoff): Mốc thời gian hoàn tất huấn luyện mô hình; AI độc lập hoàn toàn không biết các sự kiện diễn ra sau ngày này.
- Dữ liệu biến động nhanh (Rapidly Changing Data): Giá cổ phiếu, tỷ giá ngoại tệ, thời tiết hôm nay, kết quả bóng đá trực tiếp, tin tức nóng.
- Giải pháp thời gian thực: Bắt buộc sử dụng các công cụ AI có tính năng tìm kiếm web (Browse with Bing/Google) hoặc dán trực tiếp tin tức mới vào prompt.

Ví dụ: Một mô hình offline có cutoff tháng 1/2025 sẽ không thể biết ai vô địch bóng đá tháng 8/2026 nếu không được kích hoạt tính năng tìm kiếm web.

Lưu ý: Dùng một mô hình AI không kết nối Internet để tra cứu giá vàng hoặc tỷ giá USD ngày hôm nay.

Đọc thêm: Teacher Guide — trang PDF 69–78

### 13. Xử lý Tin tức Nóng & Tìm kiếm Thời gian thực

Kỹ thuật tra cứu và thẩm định tin tức thời sự bằng AI có kết nối web kết hợp kiểm tra nguồn gốc bài báo.

- Kích hoạt tìm kiếm web: Đảm bảo tính năng tìm kiếm (Search / Web Browsing) đã được bật trong giao diện chatbot.
- Kiểm tra đường link trích dẫn: Bấm trực tiếp vào các liên kết nguồn do AI đính kèm để xem bài báo gốc được đăng vào ngày nào.
- Thẩm định cơ quan báo chí: Đảm bảo thông tin đến từ các hãng thông tấn chính thống (Thông tấn xã, Reuters, AP) thay vì các trang tin đồn.

Ví dụ: Hỏi về hội nghị vừa bế mạc tuần trước: AI trả lời kèm 3 đường link báo chính thống; bạn mở liên kết kiểm tra ngày xuất bản để xác nhận số liệu.

Lưu ý: Tin vào bản tóm tắt tin tức thời sự của AI mà không bấm mở đường link nguồn để kiểm tra ngày tháng.

Đọc thêm: Teacher Guide — trang PDF 69–78

### 14. Phân tích Biểu đồ: Đọc trục & Đường xu hướng

Khi yêu cầu AI phân tích biểu đồ, cần kiểm tra kỹ đơn vị tính, trục tọa độ X/Y và cách mô hình ngoại suy từ đường xu hướng (Trendline).

- Kiểm tra đơn vị tính và trục tọa độ: Xác nhận AI đọc đúng đơn vị (triệu USD hay nghìn USD, năm hay tháng) trên trục tung và trục hoành.
- Phân tích tương quan: Đánh giá xem AI có nhận định đúng mối quan hệ giữa 2 biến số (tương quan thuận hay tương quan nghịch).
- Ước tính từ Trendline: Sử dụng đường xu hướng trung bình để dự báo giá trị tiếp theo một cách khoa học.
- Histogram (Biểu đồ tần suất): Thể hiện phân phối/tần suất của một biến số theo từng khoảng giá trị — khác với biểu đồ phân tán (thể hiện mối quan hệ giữa hai biến).

Ví dụ: Nạp biểu đồ cột so sánh: Kiểm tra xem AI có đọc đúng tỷ lệ phần trăm trên trục Y và phân loại đúng các nhóm thực phẩm trên trục X hay không.

Lưu ý: Nạp hình ảnh biểu đồ bị mất nhãn trục tọa độ khiến AI suy đoán sai hoàn toàn đơn vị tính.

Đọc thêm: Teacher Guide — trang PDF 145–153

### 15. Nhận diện Điểm ngoại lai (Outliers)

Kiểm tra khả năng của AI trong việc phát hiện các điểm dữ liệu dị biệt (Outliers) lệch xa khỏi xu hướng chung trên biểu đồ phân tán.

- Khái niệm Điểm ngoại lai: Điểm dữ liệu có giá trị bất thường, tách rời khỏi đám đông dữ liệu hoặc nằm rất xa đường xu hướng.
- Nguyên nhân của Outliers: Do sai sót trong khâu thu thập ghi chép dữ liệu, hoặc do một biến cố đặc biệt bất thường xảy ra trong kỳ đó.
- Yêu cầu xử lý: Kiểm tra xem AI có nhận diện được điểm ngoại lai và giải thích lý do không nên để điểm dị biệt làm méo mó xu hướng chung hay không.

Ví dụ: Trên biểu đồ doanh thu 12 tháng đều ở mức 100 triệu, riêng tháng 7 vọt lên 900 triệu do sự kiện đột xuất: AI nhận diện tháng 7 là điểm ngoại lai (Outlier).

Lưu ý: Để một điểm ngoại lai cá biệt làm sai lệch toàn bộ đường xu hướng dự báo tương lai dài hạn.

Đọc thêm: Teacher Guide — trang PDF 145–153

### 16. Dữ liệu, tiền xử lý và mức thiên lệch

Khác nguồn dữ liệu, cách xử lý và mức đại diện có thể làm các mô hình cho kết quả khác nhau.

- Kiểm tra nhóm nào bị thiếu dữ liệu.
- Dữ liệu không đầy đủ có thể làm kết quả thiếu cân bằng.
- Tokenization là một phần biểu diễn dữ liệu, không phải toàn bộ nguyên nhân bias.
- Đánh giá theo nhóm/ngôn ngữ thay vì chỉ điểm trung bình.

Ví dụ: Bài tập yêu cầu quan sát thiên lệch giới tính, tuổi và vùng địa lý trong mô tả nghề nghiệp.

Lưu ý: Không loại địa lý hay dữ liệu thiếu khỏi các nguồn bias chỉ vì không nằm trong khóa chọn hai.

Đọc thêm: Teacher Guide — trang PDF 154–163

### 17. Tinh chỉnh và guardrails

Fine-tuning và guardrails có thể làm khác hành vi mô hình; guardrails hỗ trợ an toàn nhưng không bảo đảm trung lập tuyệt đối.

- Cách tinh chỉnh thay đổi phản hồi theo dữ liệu/mục tiêu.
- Guardrails có thể lọc hoặc định hướng câu trả lời.
- Đánh giá cả hiệu quả bảo vệ lẫn ảnh hưởng tới các nhóm/ngữ cảnh.
- Người dùng vẫn phải kiểm tra đầu ra.

Ví dụ: Hai công cụ có thể từ chối/diễn đạt khác nhau vì chính sách thiết kế khác nhau.

Lưu ý: Không suy ra mọi guardrail đều gây hại hoặc đều loại sạch bias.

Đọc thêm: Teacher Guide — trang PDF 154–163

### 18. Checklist trước khi dùng nội dung AI

Kiểm tra độ chính xác, quyền riêng tư, thiên lệch, quyền sử dụng và khả năng tiếp cận trước khi chia sẻ.

- Đối chiếu dữ kiện với nguồn; kiểm tra ngày/đơn vị.
- Ẩn danh và giảm dữ liệu cá nhân, chú ý khả năng tái nhận diện.
- Kiểm tra hình, ngôn ngữ, phụ đề, đối tượng sử dụng.
- Ghi nhận AI đã hỗ trợ phần nào và người phê duyệt.

Ví dụ: Một slide lớp học cần kiểm tra kiến thức, ảnh đúng, chữ đọc được, nguồn và phù hợp độ tuổi.

Lưu ý: Không coi bản nháp đẹp là sản phẩm đã được duyệt.

Đọc thêm: Teacher Guide — trang PDF 145–153

## Quyền riêng tư, sở hữu trí tuệ, thiên lệch, rủi ro và trách nhiệm; tránh các kết luận pháp lý tuyệt đối.

### 1. Thiên lệch là gì?

Bias là thiên lệch trong dữ liệu, cách mô tả hoặc kết quả có thể dẫn tới thiếu công bằng.

- Kiểm tra nhóm được đại diện và bị bỏ sót.
- Không xem output mặc định là trung lập.
- So sánh cách mô tả giữa các nhóm.

Ví dụ: CEO mặc định là nam có thể phản ánh khuôn mẫu.

Lưu ý: Có trường nhân khẩu học không tự động chứng minh mô hình bị thiên lệch.

Ghi nhớ khi thi — khóa IIG: Câu 117 và 161: chọn các yếu tố nhân khẩu học theo khóa IIG. Trong thực tế, đánh giá thêm dữ liệu thiếu, địa lý và ngôn ngữ.

Đọc thêm: Teacher Guide — trang PDF 154–163; Bài tập thiên lệch — trang PDF 94

### 2. Dữ liệu thiếu và tính đại diện

Dữ liệu không đầy đủ hoặc không đại diện có thể làm output thiên lệch.

- Xem dữ liệu thiếu ở nhóm nào.
- Cân nhắc tuổi, quốc tịch, vùng địa lý, ngôn ngữ và khả năng tiếp cận công nghệ.
- Không chỉ đánh giá bằng kết quả tổng thể.

Ví dụ: Chỉ thu người dùng thành thị có thể bỏ sót nhu cầu nông thôn.

Lưu ý: Không học rằng chỉ tuổi và quốc tịch mới có thể gây bias.

Đọc thêm: Teacher Guide — trang PDF 154–163; Bài tập thiên lệch — trang PDF 94

### 3. Thiên lệch lịch sử

Dữ liệu phản ánh định kiến xã hội có thể làm mô hình tái hiện những khuôn mẫu đó.

- Quan sát ngôn ngữ gắn nghề với giới.
- Đánh giá bối cảnh lịch sử và mục đích sử dụng.
- Bổ sung ví dụ đa dạng và kiểm tra kết quả.

Ví dụ: Dữ liệu nghề nghiệp thiếu nữ kỹ sư có thể tạo mô tả thiếu cân bằng.

Lưu ý: Dữ liệu quá khứ không mặc nhiên là chuẩn công bằng cho hiện tại.

Đọc thêm: Teacher Guide — trang PDF 154–163; Bài tập thiên lệch — trang PDF 94

### 4. Bias qua các giai đoạn

Thiên lệch có thể xuất hiện khi thu thập, gán nhãn/xử lý, học và triển khai.

- Thu thập chỉ ban ngày bỏ sót điều kiện ban đêm.
- Nhãn và trọng số có thể ảnh hưởng khác nhau.
- Thử nghiệm một địa phương không đại diện mọi nơi.

Ví dụ: Xe chỉ thử ở một thành phố có thể gặp tình huống chưa được đánh giá khi triển khai rộng.

Lưu ý: Không đồng nhất gán nhãn, gán trọng số và tokenization.

Đọc thêm: Teacher Guide — trang PDF 154–163; Bài tập thiên lệch — trang PDF 94

### 5. Prompt có thể dẫn dắt đầu ra

Yêu cầu một chiều hoặc giả định định kiến có thể đưa bias vào kết quả.

- Không chỉ hỏi lợi ích khi cần đánh giá khách quan.
- Tránh mặc định nhóm người có một đặc tính.
- Nêu nhiều góc nhìn và bằng chứng.

Ví dụ: Hỏi cả ưu/nhược điểm MySQL theo nhu cầu cụ thể thay vì chỉ khen lợi ích.

Lưu ý: Hỏi về một công nghệ cụ thể không tự nó là vi phạm; xem mục tiêu và cách dẫn dắt.

Đọc thêm: Teacher Guide — trang PDF 154–163; Bài tập thiên lệch — trang PDF 94

### 6. Viết prompt cân bằng

Prompt trung lập giúp giảm định hướng một chiều, nhưng không thay thế dữ liệu và kiểm chứng.

- Nêu tiêu chí so sánh.
- Yêu cầu nguồn và giới hạn kết luận.
- Kiểm tra nhóm/ý kiến bị bỏ sót.

Ví dụ: So sánh hai lựa chọn theo chi phí, quyền riêng tư và tính phù hợp nhiệm vụ.

Lưu ý: Không yêu cầu cân bằng giả tạo giữa dữ kiện đúng và thông tin đã bị bác bỏ.

Đọc thêm: Teacher Guide — trang PDF 154–163; Bài tập thiên lệch — trang PDF 94

### 7. Dữ liệu định danh cá nhân — PII

PII là dữ liệu có thể nhận diện một người, riêng lẻ hoặc kết hợp với dữ liệu khác.

- Tên, email, địa chỉ, tài khoản và hồ sơ đều cần xem xét.
- Giảm dữ liệu đưa vào công cụ công cộng.
- Thay bằng dữ liệu mô phỏng khi học.

Ví dụ: Tên trường, lớp và kết quả hiếm gặp có thể tái nhận diện học sinh dù đã bỏ tên.

Lưu ý: Che tên chưa đủ đảm bảo ẩn danh.

Ghi nhớ khi thi — khóa IIG: Câu 14: chấm theo từng dòng IIG. Khi sử dụng thực tế, không nhập mã PIN và dữ liệu nhạy cảm vào công cụ chưa được phê duyệt; đọc chính sách áp dụng.

Đọc thêm: Teacher Guide — trang PDF 173–181

### 8. Dữ liệu nhạy cảm và dữ liệu nội bộ

Dữ liệu tài chính, sức khỏe, trẻ em và bí mật nội bộ cần được xử lý theo quyền truy cập và chính sách phù hợp.

- Chỉ dùng công cụ đã được tổ chức phê duyệt.
- Không nhập PIN/mật khẩu để nhờ AI phân tích.
- Phân loại dữ liệu và giới hạn người truy cập.

Ví dụ: Dùng bảng doanh thu giả lập thay vì tài khoản và mã PIN thật.

Lưu ý: Không mặc định dữ liệu công ty không phải PII thì được công khai.

Đọc thêm: Teacher Guide — trang PDF 173–181

### 9. Che dữ liệu trước khi chia sẻ

Masking thay dữ liệu nhạy cảm bằng giá trị che/giả để giảm phơi lộ; hiệu quả phụ thuộc cách thực hiện.

- Kiểm tra cả trường trực tiếp và thông tin kết hợp.
- Giữ dữ liệu gốc trong môi trường được kiểm soát.
- Đánh giá nguy cơ tái nhận diện.

Ví dụ: Thay email thật bằng địa chỉ giả trước bài tập.

Lưu ý: Masking không tự động bảo đảm không thể khôi phục hay suy ra danh tính.

Đọc thêm: Teacher Guide — trang PDF 173–181

### 10. Token bảo mật khác token ngôn ngữ

Trong bảo mật, tokenization dùng mã đại diện cho giá trị nhạy cảm; trong NLP, tokenization chia dữ liệu thành đơn vị mô hình.

- Tên giả/mã đại diện vẫn có thể nối lại người thật nếu còn bảng ánh xạ.
- Bảo vệ bảng ánh xạ và quyền truy cập.
- Không coi bút danh là ẩn danh tuyệt đối.

Ví dụ: KH001 thay tên khách hàng, bảng ánh xạ nằm riêng.

Lưu ý: Tokenization không đồng nghĩa mã hóa mật mã trong mọi hệ thống.

Đọc thêm: Teacher Guide — trang PDF 173–181

### 11. Opt-out và chính sách dữ liệu

Khả năng từ chối dùng dữ liệu huấn luyện phụ thuộc nhà cung cấp, dịch vụ và thiết lập.

- Đọc chính sách lưu dữ liệu, chia sẻ và huấn luyện.
- Kiểm tra tùy chọn nếu có, không suy từ nhãn “AI”.
- Phân biệt ngữ cảnh hội thoại, lịch sử và dữ liệu huấn luyện.

Ví dụ: Bài tập yêu cầu mở cài đặt riêng tư rồi ghi lại các lựa chọn thực tế.

Lưu ý: Không hứa công cụ quên dữ liệu sau phiên hoặc nối IP với PIN theo một quy tắc chung.

Đọc thêm: Teacher Guide — trang PDF 173–181

### 12. Quyền sử dụng nội dung

Có thể có rủi ro bản quyền khi sao chép hoặc sử dụng nội dung thiếu quyền; cần kiểm tra giấy phép và bối cảnh.

- Ưu tiên nội dung tự tạo hoặc có giấy phép phù hợp.
- Công khai trên web không đồng nghĩa miễn quyền sử dụng.
- Ghi nguồn không luôn thay thế xin phép.

Ví dụ: Kiểm tra giấy phép ảnh trước khi đưa vào quảng cáo.

Lưu ý: Không suy ra mọi phong cách tương tự đều là vi phạm, hoặc AI tạo thì tự động không có rủi ro.

Đọc thêm: Teacher Guide — trang PDF 164–172

### 13. Nhãn hiệu và khả năng gây nhầm lẫn

Logo/tên thương hiệu tương tự có thể tạo rủi ro nhãn hiệu; không chỉ kiểm tra ảnh có đẹp hay không.

- Xem quyền đối với logo và phạm vi sử dụng.
- Tránh làm người xem hiểu nhầm nguồn gốc/liên kết.
- Đưa trường hợp chưa rõ cho người có thẩm quyền.

Ví dụ: Logo quảng cáo giống thương hiệu đã có cần rà quyền sử dụng.

Lưu ý: Một bài ghép quyền chỉ là nhận diện nguy cơ, không phải phán quyết pháp lý.

Đọc thêm: Teacher Guide — trang PDF 164–172

### 14. Sáng chế: tách người phát minh, đơn nộp và bảo hộ

Việc dùng AI hỗ trợ thiết kế không tự xác định ai là người phát minh hoặc có đủ điều kiện bảo hộ.

- Phân biệt người phát minh với chủ sở hữu quyền.
- Nộp đơn khác được cấp bằng.
- Ghi lại đóng góp của con người và cần kiểm tra quy định áp dụng.

Ví dụ: Câu 54 chưa nêu đủ đóng góp con người để chọn riêng một cách dùng AI.

Lưu ý: Không học rằng mọi sản phẩm AI thiết kế lại đều đủ điều kiện nộp/được cấp bằng.

Ghi nhớ khi thi — khóa IIG: Câu 54: IIG chọn tình huống AI hỗ trợ cải tiến thiết kế có sẵn. Không suy ra chỉ việc dùng AI cải tiến là tự đủ mọi điều kiện cấp bằng.

Đọc thêm: Teacher Guide — trang PDF 164–172

### 15. Kiểm tra rủi ro theo bối cảnh

Nghĩa vụ phụ thuộc nơi áp dụng, dữ liệu, nội dung và mục đích; tài liệu nền tảng không thay thế kết luận pháp lý cụ thể.

- Xem quyền sở hữu trí tuệ.
- Xem dữ liệu cá nhân, phân biệt đối xử và hợp đồng khi liên quan.
- Xác định người phê duyệt trước khi sử dụng.

Ví dụ: Một hệ thống tuyển dụng cần xem dữ liệu và công bằng, ngoài quyền dùng phần mềm.

Lưu ý: Không áp một danh sách luật cố định cho mọi doanh nghiệp/quốc gia.

Đọc thêm: Teacher Guide — trang PDF 164–172

### 16. Thu thập nguồn và ghi nhận quy trình

Kiểm tra quyền sử dụng nguồn và ghi rõ cách dùng AI để có thể giải trình.

- Xác định tài liệu tự tạo, mở, công khai hay phải xin phép.
- Đọc điều khoản sử dụng theo mục đích.
- Lưu nguồn, phiên bản và phần đã chỉnh sửa.

Ví dụ: Lập bảng tên ảnh, nguồn, giấy phép và mục đích trước khi xuất bản.

Lưu ý: Không coi mọi thứ tìm thấy trên internet là dữ liệu mở.

Đọc thêm: Teacher Guide — trang PDF 164–172

### 17. Thông tin sai có thể gây hại danh dự

Nội dung AI sai về người/tổ chức có thể gây thiệt hại và rủi ro pháp lý tùy quy định, bối cảnh.

- Kiểm tra cáo buộc trước khi chia sẻ.
- Không biến suy đoán thành dữ kiện.
- Sửa hoặc gỡ thông tin sai qua quy trình phù hợp.

Ví dụ: AI bịa một cáo buộc: cần đối chiếu nguồn, không đăng lại ngay.

Lưu ý: Không khẳng định mọi thông tin sai đều cấu thành cùng một tội danh ở mọi nơi.

Đọc thêm: Teacher Guide — trang PDF 182–190

### 18. Mạo danh, bắt nạt và rủi ro danh tính

AI có thể khuếch đại mạo danh, quấy rối và rò rỉ dữ liệu; cần phòng ngừa và xử lý có trách nhiệm.

- Giảm phơi lộ PII.
- Kiểm tra nguồn yêu cầu nhạy cảm qua kênh độc lập.
- Ghi nhận sự cố và báo người phụ trách.

Ví dụ: Giọng nói giống cấp quản lý không đủ để xác nhận yêu cầu chuyển tiền.

Lưu ý: Trách nhiệm cụ thể phụ thuộc hành vi và quy định, không tự quy hết cho một bên.

Đọc thêm: Teacher Guide — trang PDF 182–190

### 19. Deepfake, minh bạch và gắn nhãn

Nội dung mô phỏng người thật cần được xử lý minh bạch; yêu cầu gắn nhãn phụ thuộc bối cảnh, nền tảng và quy định.

- Không làm người xem hiểu nhầm nội dung là sự kiện thật.
- Xem quyền hình ảnh/giọng nói.
- Ghi nhận nội dung đã tạo/chỉnh bằng AI khi phù hợp.

Ví dụ: Avatar giáo viên ảo cần tránh gây hiểu nhầm là ghi hình người thật.

Lưu ý: Watermark không chứng minh nội dung đúng và không là nghĩa vụ giống nhau trong mọi tình huống.

Đọc thêm: Teacher Guide — trang PDF 182–190

### 20. Con người rà soát và phê duyệt

Người sử dụng vẫn có trách nhiệm kiểm tra và quyết định cách dùng output; phân chia trách nhiệm thực tế còn tùy bối cảnh.

- Xác định người duyệt nội dung.
- Kiểm tra kiến thức, nguồn, dữ liệu và ảnh hưởng tới người khác.
- Minh bạch phần AI hỗ trợ trong công việc/học tập.

Ví dụ: Giáo viên kiểm tra đáp án và độ tuổi trước khi phát phiếu học tập AI.

Lưu ý: Không dùng AI như lý do miễn trách nhiệm, cũng không khẳng định chỉ một bên luôn chịu mọi trách nhiệm.

Đọc thêm: Teacher Guide — trang PDF 182–190

### 21. Tác động xã hội và khoảng cách số

AI hỗ trợ học tập, sáng tạo và giao tiếp, đồng thời có thể làm tăng phụ thuộc và bất bình đẳng tiếp cận.

- Lợi ích: tóm tắt, dịch thuật, tạo học liệu.
- Rủi ro: thông tin sai, giảm tương tác, thay đổi công việc.
- Xem khả năng tiếp cận công nghệ giữa các nhóm.

Ví dụ: Kết hợp AI soạn nháp với thảo luận nhóm thay vì giao toàn bộ suy nghĩ cho AI.

Lưu ý: Không coi AI luôn thay thế mọi công việc hay luôn mang lại lợi ích ngang nhau cho mọi người.

Đọc thêm: Teacher Guide — trang PDF 191–198
