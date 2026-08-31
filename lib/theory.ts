import type { Topic } from "@/lib/quiz";

export type TheorySlide = {
  title: string;
  label: string;
  summary: string;
  bullets: string[];
  example?: { title: string; content: string };
  terms?: Array<{ term: string; definition: string }>;
  pitfalls?: string[];
  check?: { question: string; options: string[]; answer: number; explanation: string };
  takeaway: string;
};

export const THEORY_TOTAL = 85;

export const THEORY_MODULES: Record<Topic, { description: string; slides: TheorySlide[] }> = {
  "methods": {
    "description": "Hiểu rõ bản chất AI tạo sinh, các kiến trúc mô hình riêng biệt (LLM, Diffusion, GAN, VAE), vòng đời 4 giai đoạn, cơ chế Token/Ngữ cảnh, phần cứng GPU và tiêu chí lựa chọn công cụ.",
    "slides": [
      {
        "label": "Bản chất",
        "title": "AI tạo sinh (Generative AI) là gì?",
        "summary": "AI tạo sinh là nhánh trí tuệ nhân tạo học các quy luật xác suất từ dữ liệu lớn để tạo ra nội dung hoàn toàn mới thay vì chỉ phân tích dữ liệu cũ.",
        "bullets": [
          "Học phân phối xác suất: Phân tích hàng tỷ mẫu dữ liệu để hiểu cấu trúc và quy luật liên kết giữa các phần tử.",
          "Sản sinh nội dung mới: Tạo văn bản, hình ảnh nghệ thuật, âm thanh giọng nói, video và mã nguồn theo yêu cầu.",
          "Tính xác suất (Probabilistic): Cùng một câu lệnh có thể cho ra nhiều phương án kết quả khác nhau tùy theo thiết lập."
        ],
        "terms": [
          {
            "term": "AI tạo sinh (Generative AI)",
            "definition": "Hệ thống AI có khả năng sản sinh ra nội dung mới chưa từng tồn tại trước đó dựa trên dữ liệu đã học."
          }
        ],
        "example": {
          "title": "Sản phẩm thực tế",
          "content": "Viết một bài thơ mới, vẽ một bức tranh từ lời mô tả, hoặc sinh đoạn mã Python tính tổng hai số: Đều là sản phẩm của AI tạo sinh."
        },
        "pitfalls": [
          "Nghĩ rằng AI tạo sinh chỉ là một kho lưu trữ sao chép nguyên văn các tài liệu có sẵn trên mạng."
        ],
        "check": {
          "question": "Điểm cốt lõi nào định nghĩa một hệ thống là AI tạo sinh (Generative AI)?",
          "options": [
            "Khả năng học quy luật dữ liệu để tạo ra nội dung mới theo xác suất",
            "Khả năng chạy không cần nguồn điện",
            "Khả năng lưu trữ toàn bộ Internet vào một ổ cứng",
            "Khả năng tự động sửa chữa phần cứng máy tính"
          ],
          "answer": 0,
          "explanation": "AI tạo sinh học các mẫu quy luật từ dữ liệu để tạo ra các nội dung mới chưa từng tồn tại trước đó."
        },
        "takeaway": "AI tạo sinh học quy luật từ quá khứ để sáng tạo ra nội dung mới trong hiện tại."
      },
      {
        "label": "Phân biệt",
        "title": "AI tạo sinh vs AI phân tích/dự báo",
        "summary": "AI phân tích/dự báo (Predictive AI) chuyên phân loại và dự đoán xu hướng từ dữ liệu cũ, trong khi AI tạo sinh tạo ra nội dung mới.",
        "bullets": [
          "AI phân tích/dự báo: Phân loại email (Spam / Không spam), chấm điểm tín dụng, dự đoán giá nhà dựa trên diện tích.",
          "AI tạo sinh: Tự viết một email bán hàng mới, soạn thảo hợp đồng vay vốn, vẽ thiết kế mẫu nhà 3D.",
          "Kết hợp trong thực tế: AI phân tích tìm ra khách hàng tiềm năng, sau đó AI tạo sinh tự động viết thư chào hàng cá nhân hóa.",
          "AI phân biệt (Discriminative AI): Chuyên phân loại dữ liệu vào các nhóm có sẵn (ví dụ nhận diện email spam) — không tạo ra nội dung mới như AI tạo sinh."
        ],
        "terms": [
          {
            "term": "AI dự báo (Predictive AI)",
            "definition": "Hệ thống AI chuyên phân tích dữ liệu lịch sử để phân loại hoặc dự đoán các kết quả trong tương lai."
          },
          {
            "term": "AI phân biệt (Discriminative AI)",
            "definition": "Hệ thống AI học ranh giới phân loại giữa các nhóm dữ liệu (ví dụ: thật/giả, spam/không spam) thay vì tạo nội dung mới — thường đóng vai trò bộ phân loại, khác với AI tạo sinh."
          }
        ],
        "example": {
          "title": "Tình huống đối chiếu",
          "content": "Phát hiện đánh giá của khách hàng là hài lòng hay thất vọng: AI phân tích. Viết thư phản hồi xin lỗi và bồi thường cho khách: AI tạo sinh."
        },
        "pitfalls": [
          "Nhầm lẫn bài toán phân loại nhãn (Classification) là tác vụ của AI tạo sinh."
        ],
        "check": {
          "question": "Tác vụ nào sau đây là ứng dụng của AI dự báo (Predictive AI) thay vì AI tạo sinh?",
          "options": [
            "Dự đoán xác suất một giao dịch ngân hàng là gian lận dựa trên lịch sử chi tiêu",
            "Viết một kịch bản phim khoa học viễn tưởng mới",
            "Vẽ hình ảnh minh họa cho cuốn sách thiếu nhi",
            "Tạo giọng nói thuyết minh nhân tạo từ văn bản"
          ],
          "answer": 0,
          "explanation": "Dự đoán gian lận là bài toán phân loại và dự báo dựa trên dữ liệu lịch sử, thuộc phạm vi của Predictive AI."
        },
        "takeaway": "Predictive AI xếp loại và dự đoán; Generative AI sáng tạo nội dung mới."
      },
      {
        "label": "Phân biệt",
        "title": "AI tạo sinh vs Công cụ tìm kiếm",
        "summary": "Công cụ tìm kiếm truy xuất và hiển thị các trang web đã có sẵn; AI tạo sinh tổng hợp và viết ra nội dung mới theo ngữ cảnh yêu cầu.",
        "bullets": [
          "Công cụ tìm kiếm (Google, Bing): Lập chỉ mục các trang web có sẵn và trả về danh sách các đường dẫn (URL) phù hợp nhất.",
          "AI tạo sinh (ChatGPT, Claude): Đọc hiểu yêu cầu, tổng hợp kiến thức từ nhiều nguồn và tự soạn câu trả lời liền mạch.",
          "Tính trực tiếp: Người dùng tìm kiếm phải tự bấm vào từng liên kết để đọc; AI tạo sinh đưa ra câu trả lời trực tiếp."
        ],
        "terms": [
          {
            "term": "Công cụ tìm kiếm (Search Engine)",
            "definition": "Hệ thống lập chỉ mục và truy xuất các tài liệu/đường dẫn đã tồn tại sẵn trên Internet."
          }
        ],
        "example": {
          "title": "Tìm công thức nấu ăn",
          "content": "Google trả về 10 đường link blog ẩm thực (Tìm kiếm). AI tạo sinh viết ngay một công thức nấu ăn phù hợp với đúng 3 nguyên liệu bạn đang có trong tủ lạnh."
        },
        "pitfalls": [
          "Nghĩ rằng AI tạo sinh lưu trữ sẵn các trang web như cơ sở dữ liệu của Google."
        ],
        "check": {
          "question": "Khác biệt cơ bản giữa việc tìm kiếm trên Google truyền thống và hỏi một chatbot AI tạo sinh là gì?",
          "options": [
            "Google trả về các liên kết web có sẵn; AI tạo sinh trực tiếp tổng hợp và sinh ra câu trả lời mới",
            "Google luôn luôn sai; AI luôn luôn đúng",
            "Chatbot AI không thể sử dụng trên điện thoại di động",
            "Google chỉ hoạt động khi có máy chủ GPU cao cấp"
          ],
          "answer": 0,
          "explanation": "Công cụ tìm kiếm lập chỉ mục và điều hướng đến nội dung có sẵn, còn AI tạo sinh tổng hợp và viết nội dung mới."
        },
        "takeaway": "Công cụ tìm kiếm chỉ đường đến tài liệu có sẵn; AI tạo sinh tự tay soạn thảo nội dung mới."
      },
      {
        "label": "Kiến trúc LLM",
        "title": "Kiến trúc Transformer & Cơ chế Tự chú ý",
        "summary": "Transformer là kiến trúc mạng nơ-ron nền tảng cho hầu hết các mô hình ngôn ngữ lớn (LLM), sử dụng cơ chế Attention để hiểu ngữ cảnh toàn diện.",
        "bullets": [
          "Cơ chế Tự chú ý (Self-Attention): Cho phép mô hình tính toán mối liên hệ giữa mọi từ trong câu mà không bị giới hạn thứ tự trước sau.",
          "Xử lý song song (Parallel Processing): Khắc phục nhược điểm xử lý tuần tự của mạng RNN cũ, giúp huấn luyện nhanh trên dữ liệu khổng lồ.",
          "Ứng dụng cốt lõi: Nền tảng của các mô hình GPT (OpenAI), Claude (Anthropic), Gemini (Google), Llama (Meta)."
        ],
        "terms": [
          {
            "term": "Transformer",
            "definition": "Kiến trúc mạng nơ-ron đột phá ra mắt năm 2017, sử dụng cơ chế Attention để xử lý ngôn ngữ song song."
          },
          {
            "term": "Self-Attention (Tự chú ý)",
            "definition": "Cơ chế toán học giúp mô hình xác định mức độ quan trọng và liên kết giữa các từ trong cùng một câu."
          }
        ],
        "example": {
          "title": "Giải quyết sự mơ hồ của đại từ",
          "content": "Trong câu 'Con chó không qua đường vì nó quá mệt', cơ chế Self-Attention giúp mô hình hiểu chính xác từ 'nó' đang chỉ 'con chó' chứ không phải 'con đường'."
        },
        "pitfalls": [
          "Nghĩ rằng Transformer chỉ dùng để dịch thuật từng từ một theo từ điển."
        ],
        "check": {
          "question": "Cơ chế toán học cốt lõi nào trong kiến trúc Transformer giúp mô hình hiểu mối liên kết giữa các từ trong một câu văn dài?",
          "options": [
            "Cơ chế Tự chú ý (Self-Attention)",
            "Cơ chế nén ảnh JPEG",
            "Cơ chế quét virus máy tính",
            "Cơ chế làm mát bằng chất lỏng"
          ],
          "answer": 0,
          "explanation": "Self-Attention là cơ chế trung tâm của Transformer, cho phép mô hình tính toán trọng số liên kết ngữ nghĩa giữa các từ trong ngữ cảnh."
        },
        "takeaway": "Transformer và Self-Attention là trái tim của các mô hình ngôn ngữ lớn hiện đại."
      },
      {
        "label": "Kiến trúc Ảnh",
        "title": "Mô hình Khuếch tán (Diffusion Models)",
        "summary": "Mô hình khuếch tán tạo hình ảnh chất lượng cao bằng cách học cách loại bỏ nhiễu ngẫu nhiên từng bước từ một khung hình mờ đục.",
        "bullets": [
          "Quá trình thêm nhiễu (Forward Process): Thêm dần nhiễu ngẫu nhiên Gaussian vào ảnh thật cho đến khi ảnh trở thành nhiễu hạt hoàn toàn.",
          "Quá trình khử nhiễu (Reverse Denoising): Mô hình học cách đoán và loại bỏ từng lớp nhiễu để phục hồi lại hình ảnh sắc nét theo câu lệnh prompt.",
          "Ứng dụng hàng đầu: Midjourney, Stable Diffusion, DALL-E 3, Adobe Firefly."
        ],
        "terms": [
          {
            "term": "Diffusion Model (Mô hình khuếch tán)",
            "definition": "Họ mô hình tạo dữ liệu bằng cách học cách khử nhiễu ngẫu nhiên từng bước (denoising)."
          },
          {
            "term": "Khử nhiễu (Denoising)",
            "definition": "Quá trình loại bỏ tạp âm ngẫu nhiên để tái tạo lại các chi tiết hình ảnh rõ nét."
          }
        ],
        "example": {
          "title": "Tạo tranh phong cảnh",
          "content": "Khi bạn nhập prompt 'Một ngọn núi tuyết lúc bình minh', mô hình bắt đầu từ một mảng nhiễu hạt xám và qua 30-50 bước khử nhiễu để hiện rõ đỉnh núi tuyết rực rỡ."
        },
        "pitfalls": [
          "Lầm tưởng mô hình AI tạo ảnh bằng cách cắt ghép các mảnh ảnh tìm thấy trên Google Images."
        ],
        "check": {
          "question": "Họ mô hình AI nào tạo ảnh bằng cách biến đổi một khung hình chứa đầy nhiễu hạt ngẫu nhiên thành hình ảnh rõ nét thông qua quy trình khử nhiễu?",
          "options": [
            "Mô hình khuếch tán (Diffusion Models)",
            "Mạng nơ-ron truyền thẳng đơn giản",
            "Hệ thống cơ sở dữ liệu quan hệ",
            "Bộ nhớ đệm trình duyệt"
          ],
          "answer": 0,
          "explanation": "Diffusion Models hoạt động dựa trên nguyên lý tiêm nhiễu và khử nhiễu ngược (reverse denoising) để sinh hình ảnh."
        },
        "takeaway": "Diffusion Model tạo hình ảnh bằng cách khử nhiễu từng bước từ một bức tranh hạt ngẫu nhiên."
      },
      {
        "label": "Kiến trúc Đối kháng",
        "title": "Mạng đối nghịch tạo sinh (GAN)",
        "summary": "GAN bao gồm hai mạng nơ-ron cạnh tranh đối kháng trực tiếp với nhau: Mạng tạo sinh (Generator) và Mạng phân biệt (Discriminator).",
        "bullets": [
          "Mạng tạo sinh (Generator): Đóng vai 'kẻ làm giả', cố gắng tạo ra các mẫu ảnh giả sao cho giống thật nhất.",
          "Mạng phân biệt (Discriminator): Đóng vai 'chuyên gia giám định', cố gắng phát hiện xem mẫu ảnh là thật hay do Generator làm giả.",
          "Kết quả huấn luyện: Qua hàng nghìn vòng đấu trí, Generator học được cách tạo ra hình ảnh khuôn mặt hoặc phong cảnh chân thực đến mức mắt người không phân biệt được."
        ],
        "terms": [
          {
            "term": "GAN (Generative Adversarial Network)",
            "definition": "Kiến trúc mạng AI gồm 2 thành phần đối kháng nhau để liên tục nâng cao độ chân thực của mẫu tạo ra."
          },
          {
            "term": "Generator",
            "definition": "Mạng nơ-ron có nhiệm vụ tạo ra dữ liệu giả."
          },
          {
            "term": "Discriminator",
            "definition": "Mạng nơ-ron có nhiệm vụ phân biệt dữ liệu thật từ tập huấn luyện với dữ liệu giả do Generator tạo."
          }
        ],
        "example": {
          "title": "Tạo avatar người ảo",
          "content": "Trang web 'ThisPersonDoesNotExist' sử dụng StyleGAN để tạo ra hàng triệu bức ảnh chân dung người ảo vô cùng chân thực mà người đó không có thật."
        },
        "pitfalls": [
          "Nhầm lẫn vai trò của Generator (tạo mẫu) và Discriminator (đánh giá/giám định)."
        ],
        "check": {
          "question": "Trong kiến trúc Mạng đối nghịch tạo sinh (GAN), thành phần nào có nhiệm vụ phát hiện xem một bức ảnh là ảnh thật hay ảnh giả do AI tạo ra?",
          "options": [
            "Mạng phân biệt (Discriminator)",
            "Mạng tạo sinh (Generator)",
            "Cửa sổ ngữ cảnh (Context Window)",
            "Bộ mã hóa Token"
          ],
          "answer": 0,
          "explanation": "Discriminator đóng vai trò người giám định, liên tục kiểm tra và phân biệt giữa ảnh thật từ dữ liệu và ảnh giả từ Generator."
        },
        "takeaway": "GAN = Generator (Tạo giả) đấu với Discriminator (Bắt bài) để cùng tiến bộ."
      },
      {
        "label": "Kiến trúc Không gian ẩn",
        "title": "Bộ tự mã hóa biến phân (VAE)",
        "summary": "VAE nén dữ liệu đầu vào vào một không gian ẩn xác suất (Latent Space) và giải mã để tạo ra các biến thể mới mượt mà.",
        "bullets": [
          "Bộ mã hóa (Encoder): Nén bức ảnh hoặc âm thanh thành một vector biểu diễn trong không gian ẩn nhiều chiều.",
          "Không gian ẩn liên tục (Continuous Latent Space): Sắp xếp các đặc trưng tương đồng nằm gần nhau, cho phép chuyển đổi mượt mà giữa các kiểu mẫu.",
          "Bộ giải mã (Decoder): Nhận điểm dữ liệu từ không gian ẩn và tái tạo lại thành nội dung hoàn chỉnh mới."
        ],
        "terms": [
          {
            "term": "VAE (Variational Autoencoder)",
            "definition": "Mô hình tạo sinh nén dữ liệu vào phân phối xác suất trong không gian ẩn để sinh dữ liệu mới."
          },
          {
            "term": "Không gian ẩn (Latent Space)",
            "definition": "Không gian toán học trừu tượng biểu diễn các đặc trưng cốt lõi của dữ liệu."
          }
        ],
        "example": {
          "title": "Biến đổi nét mặt",
          "content": "Sử dụng VAE để điều chỉnh độ dài mái tóc hoặc độ cười trên khuôn mặt bằng cách di chuyển nhẹ vị trí tọa độ trong không gian ẩn."
        },
        "pitfalls": [
          "Nghĩ rằng VAE chỉ là công cụ nén file ZIP thông thường không có khả năng sinh dữ liệu mới."
        ],
        "check": {
          "question": "Thành phần nào trong mô hình VAE đóng vai trò là không gian biểu diễn toán học chứa các đặc trưng nén của dữ liệu?",
          "options": [
            "Không gian ẩn (Latent Space)",
            "Ổ cứng thể rắn SSD",
            "Dây cáp mạng quang",
            "Màn hình hiển thị"
          ],
          "answer": 0,
          "explanation": "Không gian ẩn (Latent Space) là nơi VAE mã hóa và biểu diễn các đặc trưng xác suất của dữ liệu trước khi giải mã."
        },
        "takeaway": "VAE nén dữ liệu vào không gian ẩn xác suất rồi giải mã để tạo các biến thể mới."
      },
      {
        "label": "Vòng đời AI (1 & 2)",
        "title": "Thu thập, Tiền xử lý & Gán nhãn dữ liệu",
        "summary": "Giai đoạn nền tảng của mọi hệ thống AI: Thu thập tập dữ liệu lớn và tiến hành làm sạch, chuẩn hóa và gán nhãn trọng số.",
        "bullets": [
          "1. Thu thập dữ liệu (Data Collection): Gom dữ liệu văn bản, ảnh, video, cảm biến (ví dụ: xe tự hành quay camera đường phố).",
          "2. Tiền xử lý (Preprocessing): Lọc bỏ dữ liệu lỗi, trùng lặp, xóa tạp âm và định dạng chuẩn hóa.",
          "3. Gán nhãn & Trọng số (Labeling & Weighting): Gắn nhãn cho các đối tượng (biển báo dừng, người đi bộ, làn đường) và ấn định mức độ ưu tiên."
        ],
        "terms": [
          {
            "term": "Tiền xử lý (Data Preprocessing)",
            "definition": "Khâu làm sạch, chuẩn hóa dữ liệu thô trước khi đưa vào huấn luyện."
          },
          {
            "term": "Gán nhãn dữ liệu (Data Labeling)",
            "definition": "Quá trình gắn chú thích có ý nghĩa vào dữ liệu thô để mô hình học nhận biết."
          }
        ],
        "example": {
          "title": "Dữ liệu xe tự hành",
          "content": "Xe tự hành thu thập cảnh quay trên phố (Thu thập) -> Lọc bỏ video mờ nhòe (Tiền xử lý) -> Đóng khung chú thích từng người đi bộ và biển báo (Gán nhãn)."
        },
        "pitfalls": [
          "Nạp dữ liệu thô chưa được làm sạch vào huấn luyện khiến mô hình học các thông tin rác (Garbage in, Garbage out)."
        ],
        "check": {
          "question": "Trong vòng đời phát triển AI, việc làm sạch tạp âm và loại bỏ dữ liệu trùng lặp thuộc giai đoạn nào?",
          "options": [
            "Tiền xử lý dữ liệu (Data Preprocessing)",
            "Triển khai thương mại (Deployment)",
            "Đánh giá sau bán hàng",
            "Viết câu lệnh prompt của người dùng"
          ],
          "answer": 0,
          "explanation": "Làm sạch và loại bỏ dữ liệu lỗi, trùng lặp là nhiệm vụ trọng tâm của khâu Tiền xử lý dữ liệu."
        },
        "takeaway": "Dữ liệu sạch và gán nhãn chuẩn là điều kiện tiên quyết trước khi huấn luyện mô hình."
      },
      {
        "label": "Vòng đời AI (3 & 4)",
        "title": "Huấn luyện mô hình & Triển khai suy luận",
        "summary": "Hai giai đoạn tiếp theo: Huấn luyện mô hình trên siêu máy tính và triển khai vào ứng dụng thực tế để thực hiện suy luận (Inference).",
        "bullets": [
          "3. Huấn luyện mô hình (Model Training): Mô hình tự điều chỉnh hàng tỷ trọng số tham số để nắm bắt các quy luật dữ liệu (thực hiện bởi nhà phát triển trên cụm GPU).",
          "4. Đánh giá & Kiểm thử (Evaluation): Kiểm tra độ chính xác, an toàn, khả năng chống lỗi trước khi xuất bản.",
          "5. Triển khai & Suy luận (Deployment & Inference): Mô hình được đưa lên đám mây hoặc thiết bị; khi người dùng nhập câu lệnh (prompt), mô hình thực hiện suy luận để trả về kết quả."
        ],
        "terms": [
          {
            "term": "Huấn luyện (Training)",
            "definition": "Quá trình máy tính học từ dữ liệu để thiết lập hàng tỷ tham số trọng số nội bộ."
          },
          {
            "term": "Suy luận (Inference)",
            "definition": "Giai đoạn mô hình đã huấn luyện hoàn chỉnh tiếp nhận đầu vào của người dùng và sinh kết quả đầu ra."
          }
        ],
        "example": {
          "title": "Phân biệt Training vs Inference",
          "content": "OpenAI mất hàng tháng huấn luyện GPT-4 trên hàng nghìn GPU (Training). Bạn gõ một câu hỏi và nhận câu trả lời sau 2 giây (Inference)."
        },
        "pitfalls": [
          "Nhầm lẫn giữa việc người dùng gõ prompt (Suy luận - Inference) với việc tạo ra mô hình (Huấn luyện - Training)."
        ],
        "check": {
          "question": "Thuật ngữ kỹ thuật nào chỉ quá trình một mô hình AI đã hoàn tất huấn luyện tiếp nhận yêu cầu từ người dùng và tính toán để trả về câu trả lời?",
          "options": [
            "Suy luận (Inference)",
            "Thu thập dữ liệu thô",
            "Lắp ráp phần cứng",
            "Gán nhãn dữ liệu thủ công"
          ],
          "answer": 0,
          "explanation": "Suy luận (Inference) là quá trình mô hình ứng dụng tri thức đã học để xử lý câu lệnh đầu vào và tạo ra kết quả mới."
        },
        "takeaway": "Huấn luyện (Training) là giai đoạn học tập; Suy luận (Inference) là giai đoạn làm việc thực tế."
      },
      {
        "label": "Phương thức Văn bản & Ảnh",
        "title": "Phương thức Text-to-Text & Text-to-Image",
        "summary": "Hai phương thức ứng dụng phổ biến nhất của AI tạo sinh trong công việc văn phòng và thiết kế sáng tạo.",
        "bullets": [
          "Text-to-Text: Đầu vào là văn bản, đầu ra là văn bản mới (soạn email, tóm tắt báo cáo, dịch thuật, viết mã nguồn, trả lời câu hỏi).",
          "Text-to-Image: Đầu vào là câu lệnh mô tả bằng chữ, đầu ra là hình ảnh mới (logo, tranh nghệ thuật, ảnh chụp sản phẩm, sơ đồ kiến trúc).",
          "Image-to-Image: Đầu vào là ảnh gốc kèm câu lệnh điều chỉnh, đầu ra là ảnh đã được chuyển đổi phong cách hoặc bổ sung chi tiết."
        ],
        "terms": [
          {
            "term": "Text-to-Text",
            "definition": "Tác vụ nhận đầu vào là văn bản và sinh ra kết quả đầu ra là văn bản."
          },
          {
            "term": "Text-to-Image",
            "definition": "Tác vụ nhận đầu vào là văn bản mô tả và sinh ra kết quả là hình ảnh minh họa."
          }
        ],
        "example": {
          "title": "Ứng dụng tiếp thị",
          "content": "Nhập yêu cầu 'Viết bài quảng cáo cà phê': Text-to-Text. Nhập yêu cầu 'Vẽ một tách cà phê bốc khói trên bàn gỗ lúc sáng sớm': Text-to-Image."
        },
        "pitfalls": [
          "Kỳ vọng công cụ Text-to-Text thuần túy có thể tự render trực tiếp file ảnh độ phân giải cao."
        ],
        "check": {
          "question": "Một nhà thiết kế nhập đoạn văn bản mô tả logo và nhận lại một bức ảnh minh họa định dạng PNG. Đây là dạng chuyển đổi dữ liệu nào?",
          "options": [
            "Text-to-image",
            "Audio-to-text",
            "Text-to-audio",
            "Video-to-text"
          ],
          "answer": 0,
          "explanation": "Đầu vào là câu lệnh chữ (Text) và đầu ra là hình ảnh (Image), do đó đây là tác vụ Text-to-image."
        },
        "takeaway": "Text-to-Text phục vụ câu chữ và logic; Text-to-Image phục vụ hình ảnh và đồ họa."
      },
      {
        "label": "Xử lý văn bản",
        "title": "Ba kiểu Tóm tắt: Trích xuất, Trừu tượng & Theo truy vấn",
        "summary": "AI tạo sinh có thể tóm tắt văn bản theo 3 cách khác nhau tùy vào mục tiêu: giữ nguyên câu gốc, diễn giải lại, hoặc chỉ trả lời đúng trọng tâm câu hỏi.",
        "bullets": [
          "Tóm tắt Trích xuất (Extractive): Lấy nguyên văn các câu quan trọng nhất từ tài liệu gốc, ghép lại thành bản tóm tắt — không tạo câu chữ mới.",
          "Tóm tắt Trừu tượng (Abstractive): Đọc hiểu toàn bộ nội dung rồi diễn giải lại bằng câu chữ hoàn toàn mới, súc tích và tự nhiên hơn.",
          "Tóm tắt Theo truy vấn (Query-based): Chỉ trả lời đúng phần thông tin liên quan đến một câu hỏi cụ thể, bỏ qua phần còn lại của tài liệu."
        ],
        "terms": [
          {
            "term": "Tóm tắt Trích xuất (Extractive Summarization)",
            "definition": "Kỹ thuật chọn và ghép nguyên văn những câu quan trọng nhất từ văn bản gốc."
          },
          {
            "term": "Tóm tắt Trừu tượng (Abstractive Summarization)",
            "definition": "Kỹ thuật viết lại nội dung bằng ngôn từ mới, giữ đúng ý nghĩa nhưng không sao chép nguyên câu."
          }
        ],
        "example": {
          "title": "So sánh 3 kiểu tóm tắt",
          "content": "Với một báo cáo tài chính dài 10 trang: Trích xuất = ghép 5 câu quan trọng nhất nguyên văn; Trừu tượng = viết lại thành 1 đoạn văn mới tóm lược ý chính; Theo truy vấn = chỉ trả lời 'Lợi nhuận quý 3 là bao nhiêu?'"
        },
        "pitfalls": [
          "Nhầm lẫn Tóm tắt Trích xuất với Tóm tắt Trừu tượng vì cả hai đều làm ngắn gọn văn bản — điểm khác biệt là có tạo câu chữ MỚI hay không."
        ],
        "check": {
          "question": "Một AI đọc toàn bộ hợp đồng rồi viết lại bằng 3 câu hoàn toàn mới, diễn đạt lại ý chính bằng lời văn của chính nó. Đây là kiểu tóm tắt nào?",
          "options": [
            "Tóm tắt Trích xuất (Extractive)",
            "Tóm tắt Trừu tượng (Abstractive)",
            "Tóm tắt Theo truy vấn (Query-based)",
            "Tóm tắt Ngẫu nhiên"
          ],
          "answer": 1,
          "explanation": "Vì AI tạo ra câu chữ hoàn toàn mới thay vì lấy nguyên văn câu gốc, đây là tóm tắt Trừu tượng (Abstractive)."
        },
        "takeaway": "Trích xuất = lấy nguyên câu gốc; Trừu tượng = viết lại bằng lời mới; Theo truy vấn = chỉ trả lời đúng câu hỏi."
      },
      {
        "label": "Phương thức Âm thanh",
        "title": "Phương thức Âm thanh & Giọng nói (TTS & ASR)",
        "summary": "Chuyển đổi hai chiều giữa văn bản chữ viết và âm thanh giọng nói phục vụ lồng tiếng, trợ lý ảo và bóc băng ghi âm.",
        "bullets": [
          "Text-to-Audio (TTS - Text to Speech): Chuyển kịch bản chữ thành giọng đọc tự nhiên, lồng tiếng video, tạo hiệu ứng âm thanh hoặc sáng tác bài hát (ElevenLabs, Suno).",
          "Audio-to-Text (ASR - Nhận dạng giọng nói): Nghe file âm thanh/giọng nói và tự động chuyển đổi thành văn bản, tạo phụ đề video (OpenAI Whisper).",
          "Tương tác hai chiều: Người dùng nói chuyện với AI bằng giọng nói (Voice Mode) kết hợp cả ASR (để nghe) và TTS (để trả lời bằng giọng nói)."
        ],
        "terms": [
          {
            "term": "Text-to-Speech (TTS)",
            "definition": "Công nghệ tổng hợp tiếng nói nhân tạo từ văn bản chữ viết."
          },
          {
            "term": "Automatic Speech Recognition (ASR)",
            "definition": "Công nghệ nhận diện và chuyển đổi giọng nói thành văn bản chữ viết."
          }
        ],
        "example": {
          "title": "Lồng tiếng kịch bản",
          "content": "Một đạo diễn muốn nghe thử giọng đọc diễn viên cho kịch bản hoạt hình: Dùng công cụ Text-to-Audio (TTS)."
        },
        "pitfalls": [
          "Chọn nhầm Audio-to-Text khi mục đích là tạo ra giọng nói thuyết minh từ bài viết có sẵn."
        ],
        "check": {
          "question": "Công nghệ nào được sử dụng để tự động nghe và chuyển đổi đoạn ghi âm cuộc họp thành văn bản biên bản cuộc họp?",
          "options": [
            "Audio-to-Text (ASR)",
            "Text-to-Audio (TTS)",
            "Text-to-Image",
            "Image-to-Video"
          ],
          "answer": 0,
          "explanation": "Audio-to-Text (ASR) nhận đầu vào là âm thanh giọng nói và chuyển đổi thành văn bản chữ viết."
        },
        "takeaway": "TTS biến chữ thành tiếng nói; ASR biến tiếng nói thành chữ viết."
      },
      {
        "label": "Phương thức Video",
        "title": "Phương thức Video đa phương tiện",
        "summary": "Tạo video hoạt cảnh từ kịch bản văn bản hoặc biến một bức ảnh tĩnh thành đoạn clip chuyển động chân thực.",
        "bullets": [
          "Text-to-Video: Nhập kịch bản mô tả phân cảnh và các chuyển động để AI tạo đoạn video hoàn chỉnh (Sora, Runway, Kling).",
          "Image-to-Video: Nạp một bức ảnh tĩnh và yêu cầu AI làm chuyển động các chi tiết (nước chảy, mây bay, nhân vật cử động) và điều khiển góc quay camera.",
          "Kiểm soát chuyển động: Sử dụng các tham số điều khiển lia máy (pan), phóng to/thu nhỏ (zoom), góc nghiêng (tilt) và chuyển động chậm (slow-motion)."
        ],
        "terms": [
          {
            "term": "Image-to-Video",
            "definition": "Tác vụ tạo video chuyển động từ một hình ảnh tĩnh đầu vào."
          },
          {
            "term": "Điều khiển camera (Camera Motion)",
            "definition": "Các chỉ dẫn thiết lập hướng di chuyển của góc nhìn trong video do AI tạo."
          }
        ],
        "example": {
          "title": "Hoạt hóa ảnh chụp",
          "content": "Nạp ảnh chụp đỉnh núi Everest và yêu cầu AI tạo video 5 giây góc nhìn flycam bay lượn quanh đỉnh núi: Đây là tác vụ Image-to-Video."
        },
        "pitfalls": [
          "Quên mô tả chuyển động khiến video AI tạo ra trông như một bức ảnh đứng im bị kéo dài."
        ],
        "check": {
          "question": "Tác vụ nào sau đây nhận một bức ảnh tĩnh của sản phẩm và tạo ra đoạn video ngắn xoay 360 độ quanh sản phẩm đó?",
          "options": [
            "Image-to-video",
            "Text-to-text",
            "Audio-to-text",
            "Speech-to-speech"
          ],
          "answer": 0,
          "explanation": "Image-to-video nhận đầu vào là ảnh tĩnh và sinh ra kết quả là video chuyển động tương ứng."
        },
        "takeaway": "Image-to-Video thổi hồn chuyển động và góc quay điện ảnh vào những bức ảnh tĩnh."
      },
      {
        "label": "Mô hình chuyên biệt",
        "title": "Mô hình chuyên biệt: OCR & Talking-head",
        "summary": "Ngoài các phương thức Văn bản/Ảnh/Âm thanh/Video tổng quát, còn có các mô hình AI chuyên biệt cho một tác vụ duy nhất như đọc chữ trong ảnh hay tạo video người nói.",
        "bullets": [
          "OCR (Optical Character Recognition — Nhận dạng ký tự quang học): Đầu vào là Hình ảnh chứa chữ viết, đầu ra là Văn bản được trích xuất.",
          "Talking-head (Khuôn mặt người đang nói): Đầu vào là Âm thanh (hoặc văn bản chuyển giọng nói), đầu ra là Video khuôn mặt chuyển động khớp khẩu hình theo lời nói.",
          "Cả hai đều là mô hình 'một nhiệm vụ - một chức năng' (task-specific), khác với các mô hình đa năng như ChatGPT."
        ],
        "terms": [
          {
            "term": "OCR (Nhận dạng ký tự quang học)",
            "definition": "Công nghệ AI chuyển đổi chữ viết trong hình ảnh/tài liệu quét thành văn bản có thể chỉnh sửa được."
          },
          {
            "term": "Talking-head (Mô hình khuôn mặt nói)",
            "definition": "Mô hình AI tạo video khuôn mặt nhân vật cử động môi khớp với âm thanh hoặc văn bản đầu vào."
          }
        ],
        "example": {
          "title": "Ứng dụng thực tế",
          "content": "Quét hóa đơn giấy để trích xuất số tiền và ngày tháng thành dữ liệu số: dùng OCR. Tạo video đại diện ảo đọc kịch bản bằng nhiều giọng khác nhau: dùng Talking-head."
        },
        "pitfalls": [
          "Nhầm OCR với Text-to-Image vì cả hai đều liên quan đến 'hình ảnh' — OCR đi từ Ảnh ra Văn bản (ngược chiều), không phải tạo ảnh mới."
        ],
        "check": {
          "question": "Một ứng dụng nhận ảnh chụp danh thiếp và trả về tên, số điện thoại dạng văn bản có thể copy được. Đây là loại mô hình nào?",
          "options": [
            "Talking-head",
            "Text-to-Image",
            "OCR (Nhận dạng ký tự quang học)",
            "Diffusion Model"
          ],
          "answer": 2,
          "explanation": "Chuyển đổi chữ trong ảnh thành văn bản là chức năng đặc trưng của OCR."
        },
        "takeaway": "OCR: Ảnh chữ → Văn bản. Talking-head: Âm thanh/Văn bản → Video khuôn mặt nói."
      },
      {
        "label": "Cơ chế xử lý",
        "title": "Đơn vị xử lý Token & Token hóa",
        "summary": "Mô hình ngôn ngữ không đọc từng chữ cái như con người mà chia văn bản thành các đơn vị số học gọi là Token.",
        "bullets": [
          "Khái niệm Token: Là một từ, một phần của từ, hoặc thậm chí một ký tự đơn lẻ được mã hóa thành các con số nguyên.",
          "Quy đổi trung bình: Trong tiếng Anh, 1 token xấp xỉ 0.75 từ (~4 ký tự); trong tiếng Việt, một từ có thể tốn từ 1 đến 3 token do dấu thanh và âm tiết.",
          "Ý nghĩa kinh tế: Mọi chi phí sử dụng API, tốc độ sinh văn bản và dung lượng bộ nhớ đều được tính toán và thanh toán dựa trên số lượng Token."
        ],
        "terms": [
          {
            "term": "Token",
            "definition": "Đơn vị cơ bản của văn bản được mã hóa thành số để mô hình AI xử lý."
          },
          {
            "term": "Token hóa (Tokenization)",
            "definition": "Quy trình cắt chuỗi văn bản thành danh sách các token riêng biệt."
          }
        ],
        "example": {
          "title": "Mã hóa token",
          "content": "Từ 'unbelievable' có thể được tách thành 3 token: 'un', 'believ', 'able' trước khi nạp vào mạng nơ-ron."
        },
        "pitfalls": [
          "Nghĩ rằng 1 token luôn luôn bằng đúng 1 từ hoàn chỉnh trong mọi ngôn ngữ."
        ],
        "check": {
          "question": "Đơn vị nhỏ nhất mà các mô hình ngôn ngữ lớn (LLM) sử dụng để mã hóa và xử lý văn bản được gọi là gì?",
          "options": [
            "Token",
            "Pixel",
            "Megabyte",
            "Frame"
          ],
          "answer": 0,
          "explanation": "Token là đơn vị cơ bản biểu diễn văn bản dưới dạng số để mô hình ngôn ngữ tính toán."
        },
        "takeaway": "Token là đơn vị tiền tệ và đơn vị tính toán cơ bản của mô hình ngôn ngữ."
      },
      {
        "label": "Giới hạn bộ nhớ",
        "title": "Cửa sổ ngữ cảnh (Context Window)",
        "summary": "Cửa sổ ngữ cảnh là giới hạn lượng token tối đa mà mô hình có thể ghi nhớ và xử lý đồng thời trong một lượt tương tác.",
        "bullets": [
          "Bao gồm cả đầu vào và đầu ra: Tổng số token của câu lệnh prompt + tài liệu đính kèm + câu trả lời của AI phải nằm trong giới hạn này.",
          "Hiện tượng tràn ngữ cảnh: Khi cuộc trò chuyện quá dài vượt qua Context Window, AI sẽ quên các yêu cầu và thông tin đã cung cấp ở phần đầu.",
          "Giải pháp quản lý: Tóm tắt lại nội dung định kỳ hoặc chia nhỏ tài liệu lớn thành nhiều phần trước khi nạp vào AI."
        ],
        "terms": [
          {
            "term": "Cửa sổ ngữ cảnh (Context Window)",
            "definition": "Số lượng token tối đa mà mô hình AI có thể duy trì trong bộ nhớ làm việc cùng lúc."
          }
        ],
        "example": {
          "title": "Quên yêu cầu ban đầu",
          "content": "Sau khi trao đổi 50 tin nhắn dài, bạn thấy AI không còn xưng hô theo đúng vai trò bạn đã yêu cầu ở tin nhắn số 1: Do cuộc trò chuyện đã vượt quá Context Window."
        },
        "pitfalls": [
          "Nạp tài liệu dài hàng nghìn trang vào một mô hình có cửa sổ ngữ cảnh nhỏ mà không kiểm tra giới hạn."
        ],
        "check": {
          "question": "Hiện tượng gì xảy ra khi độ dài cuộc trò chuyện của bạn vượt quá dung lượng Cửa sổ ngữ cảnh (Context Window) của mô hình?",
          "options": [
            "Mô hình sẽ bắt đầu quên hoặc bỏ qua các thông tin và chỉ thị ở phần đầu cuộc trò chuyện",
            "Máy tính của bạn sẽ bị tắt nguồn",
            "Chatbot sẽ tự động chuyển sang giao diện màu đen",
            "Tài khoản của bạn bị xóa vĩnh viễn"
          ],
          "answer": 0,
          "explanation": "Khi vượt quá Context Window, các token ở phần đầu sẽ bị trượt ra khỏi bộ nhớ làm việc của mô hình."
        },
        "takeaway": "Giữ cuộc trò chuyện tập trung để tránh hiện tượng tràn cửa sổ ngữ cảnh."
      },
      {
        "label": "Xác suất & Tham số",
        "title": "Next-Token Prediction & Tham số Nhiệt độ",
        "summary": "Mô hình ngôn ngữ dự đoán từ tiếp theo theo xác suất; tham số Nhiệt độ (Temperature) kiểm soát mức độ sáng tạo của câu trả lời.",
        "bullets": [
          "Next-Token Prediction: Tại mỗi bước, mô hình tính xác suất cho hàng nghìn từ tiếp theo và chọn từ phù hợp nhất.",
          "Nhiệt độ thấp (Temperature ~ 0 đến 0.2): AI chọn các từ có xác suất cao nhất; câu trả lời mang tính tất định, chính xác, ít biến đổi (phù hợp cho lập trình, dữ liệu tài chính).",
          "Nhiệt độ cao (Temperature ~ 0.7 đến 1.0): AI chọn cả các từ có xác suất thấp hơn; câu trả lời giàu trí tưởng tượng, phong phú, đa dạng (phù hợp viết văn, sáng tạo ý tưởng)."
        ],
        "terms": [
          {
            "term": "Next-Token Prediction",
            "definition": "Cơ chế dự đoán từ hoặc token kế tiếp dựa trên toàn bộ chuỗi từ trước đó."
          },
          {
            "term": "Nhiệt độ (Temperature)",
            "definition": "Tham số điều chỉnh mức độ ngẫu nhiên và sáng tạo của mô hình AI."
          }
        ],
        "example": {
          "title": "Thiết lập cho công việc",
          "content": "Viết code Python giải thuật toán: Đặt Temperature = 0. Viết 10 ý tưởng kịch bản quảng cáo hài hước: Đặt Temperature = 0.9."
        },
        "pitfalls": [
          "Để nhiệt độ cao khi yêu cầu AI tính toán số liệu kế toán hoặc trích xuất số liệu hợp đồng."
        ],
        "check": {
          "question": "Khi bạn cần AI trích xuất dữ liệu tài chính chính xác tuyệt đối và nhất quán giữa các lần chạy, bạn nên thiết lập tham số Nhiệt độ (Temperature) như thế nào?",
          "options": [
            "Hạ thấp nhiệt độ về mức gần bằng 0 (Low Temperature)",
            "Tăng nhiệt độ lên mức tối đa 2.0",
            "Tắt kết nối Internet",
            "Gõ câu lệnh bằng chữ in hoa"
          ],
          "answer": 0,
          "explanation": "Nhiệt độ thấp (gần 0) giúp mô hình chọn các token có xác suất cao nhất, đảm bảo tính tất định và chính xác cao."
        },
        "takeaway": "Nhiệt độ thấp cho tính chính xác; Nhiệt độ cao cho sự sáng tạo."
      },
      {
        "label": "Phần cứng AI",
        "title": "Phần cứng GPU chuyên dụng & VRAM",
        "summary": "Huấn luyện và vận hành AI tạo sinh đòi hỏi các bộ xử lý đồ họa (GPU) chuyên dụng với khả năng tính toán ma trận song song khổng lồ.",
        "bullets": [
          "GPU máy chủ (Data Center GPUs): Các dòng chip chuyên dụng như NVIDIA A100, H100, B200 sở hữu hàng nghìn lõi tính toán song song.",
          "Lõi Tensor (Tensor Cores): Phần cứng chuyên biệt được tối ưu hóa riêng cho các phép nhân ma trận đa chiều trong học sâu.",
          "Dung lượng VRAM lớn: Bộ nhớ đồ họa tốc độ cao (40GB - 80GB VRAM/card) cho phép nạp hàng tỷ tham số mô hình vào bộ nhớ để tính toán tức thời."
        ],
        "terms": [
          {
            "term": "GPU (Graphics Processing Unit)",
            "definition": "Bộ xử lý đồ họa chuyên thực hiện các phép tính song song quy mô lớn."
          },
          {
            "term": "Tensor Cores",
            "definition": "Các lõi tính toán chuyên dụng trên GPU NVIDIA giúp tăng tốc độ huấn luyện mô hình AI."
          },
          {
            "term": "VRAM (Video RAM)",
            "definition": "Bộ nhớ đồ họa tốc độ cao trên GPU, quyết định dung lượng mô hình có thể tải vào."
          }
        ],
        "example": {
          "title": "Hạ tầng huấn luyện",
          "content": "Huấn luyện một mô hình ngôn ngữ lớn đòi hỏi cụm hàng chục nghìn card GPU NVIDIA H100 kết nối với nhau trong các trung tâm dữ liệu chuyên dụng."
        },
        "pitfalls": [
          "Nghĩ rằng một chiếc laptop văn phòng thông thường không có GPU rời có thể tự huấn luyện lại mô hình LLM 70 tỷ tham số."
        ],
        "check": {
          "question": "Thành phần phần cứng nào sau đây đóng vai trò quan trọng hàng đầu trong việc tăng tốc huấn luyện các mô hình học sâu và AI tạo sinh?",
          "options": [
            "Bộ xử lý đồ họa GPU với các lõi Tensor Cores và VRAM lớn",
            "Chuột không dây Bluetooth",
            "Ổ đĩa mềm dung lượng 1.44MB",
            "Cổng xuất hình ảnh VGA"
          ],
          "answer": 0,
          "explanation": "GPU chuyên dụng với các lõi Tensor Cores và dung lượng VRAM lớn là hạ tầng phần cứng cốt lõi của tính toán AI."
        },
        "takeaway": "GPU với Tensor Cores và VRAM lớn là động cơ phần cứng thúc đẩy AI tạo sinh."
      },
      {
        "label": "Môi trường & Tinh chỉnh",
        "title": "Hạ tầng mạng & Tinh chỉnh (Fine-tuning)",
        "summary": "Huấn luyện AI cần mạng Internet băng thông rộng và doanh nghiệp thường sử dụng kỹ thuật Tinh chỉnh (Fine-tuning) để tối ưu chi phí.",
        "bullets": [
          "Kết nối Internet tốc độ cao: Yêu cầu bắt buộc để đồng bộ dữ liệu giữa các cụm máy chủ và phục vụ hàng triệu truy vấn API theo thời gian thực.",
          "Điện toán đám mây (Cloud Infrastructure): Doanh nghiệp thuê tài nguyên AI từ AWS, Azure, Google Cloud thay vì tự xây dựng phòng máy chủ đắt đỏ.",
          "Tinh chỉnh (Fine-tuning): Huấn luyện bổ sung một mô hình nền tảng có sẵn bằng một tập dữ liệu nhỏ chuyên ngành (ví dụ: luật Việt Nam, y khoa) để tiết kiệm 99% chi phí so với huấn luyện từ đầu."
        ],
        "terms": [
          {
            "term": "Tinh chỉnh (Fine-tuning)",
            "definition": "Quá trình tái huấn luyện một mô hình nền tảng trên tập dữ liệu chuyên ngành nhỏ để đáp ứng nghiệp vụ cụ thể."
          },
          {
            "term": "Mô hình nền tảng (Foundation Model)",
            "definition": "Mô hình AI lớn đã được huấn luyện sơ bộ trên lượng dữ liệu khổng lồ."
          }
        ],
        "example": {
          "title": "Tối ưu cho công ty luật",
          "content": "Thay vì chi hàng triệu USD huấn luyện LLM từ đầu, công ty luật lấy mô hình Llama có sẵn và tiến hành tinh chỉnh (Fine-tuning) trên 10,000 văn bản luật để phục vụ tra cứu án lệ."
        },
        "pitfalls": [
          "Cho rằng doanh nghiệp nào muốn dùng AI chuyên ngành cũng bắt buộc phải tự huấn luyện mô hình từ con số không."
        ],
        "check": {
          "question": "Phương pháp nào cho phép doanh nghiệp điều chỉnh một mô hình AI có sẵn để trả lời chuyên sâu về nghiệp vụ nội bộ với chi phí thấp hơn nhiều so với huấn luyện từ đầu?",
          "options": [
            "Tinh chỉnh chuyên ngành (Fine-tuning)",
            "Thay đổi màu sắc biểu tượng ứng dụng",
            "Xóa bỏ toàn bộ dữ liệu máy chủ",
            "Chỉ sử dụng tìm kiếm web"
          ],
          "answer": 0,
          "explanation": "Fine-tuning cho phép tái sử dụng tri thức nền tảng của mô hình và chỉ huấn luyện bổ sung trên dữ liệu chuyên biệt của doanh nghiệp."
        },
        "takeaway": "Fine-tuning giúp tùy biến mô hình AI theo nghiệp vụ chuyên sâu với chi phí tối ưu."
      },
      {
        "label": "Hệ sinh thái",
        "title": "Hệ sinh thái & Trợ lý tùy biến (Custom GPTs)",
        "summary": "Hệ sinh thái AI hiện đại cung cấp các nền tảng đa dạng và cho phép người dùng tùy biến trợ lý riêng (Custom GPTs / Google Gems).",
        "bullets": [
          "Trợ lý đa năng hàng đầu: OpenAI ChatGPT, Google Gemini, Microsoft Copilot, Anthropic Claude.",
          "Trợ lý chuyên trách tùy biến: Custom GPTs (OpenAI) và Google Gems (Google) cho phép người dùng nạp tài liệu riêng và thiết lập hướng dẫn sư phạm/nghiệp vụ cố định.",
          "Không cần lập trình: Bất kỳ ai cũng có thể tạo Custom GPT bằng ngôn ngữ tự nhiên để hỗ trợ chấm bài, giải toán hay hỗ trợ khách hàng."
        ],
        "terms": [
          {
            "term": "Custom GPTs",
            "definition": "Phiên bản ChatGPT được người dùng tùy chỉnh với các chỉ dẫn, tài liệu tri thức và tác vụ chuyên biệt."
          },
          {
            "term": "Google Gems",
            "definition": "Các phiên bản tùy chỉnh của Google Gemini được thiết kế riêng cho các chủ đề và quy trình cụ thể."
          }
        ],
        "example": {
          "title": "Gia sư Sinh học",
          "content": "Một giáo viên tạo 'Gia sư Sinh học 10': Nạp toàn bộ sách giáo khoa và ra lệnh 'Chỉ hướng dẫn học sinh tư duy từng bước, không cho ngay đáp án bài tập'."
        },
        "pitfalls": [
          "Nghĩ rằng Custom GPT bắt buộc phải biết viết mã Python phức tạp mới tạo được."
        ],
        "check": {
          "question": "Tính năng nào cho phép người dùng tạo một trợ lý AI riêng với các tài liệu tài liệu và hướng dẫn chuyên biệt cho một môn học mà không cần lập trình?",
          "options": [
            "Custom GPTs hoặc Google Gems",
            "Bảng điều khiển Control Panel của Windows",
            "Trình soạn thảo văn bản Notepad",
            "Phần mềm dọn rác máy tính"
          ],
          "answer": 0,
          "explanation": "Custom GPTs và Google Gems được thiết kế để mọi người dùng đều có thể tạo trợ lý AI chuyên trách theo nhu cầu riêng."
        },
        "takeaway": "Tạo Custom GPTs hoặc Google Gems để xây dựng trợ lý AI chuyên môn hóa cho riêng bạn."
      },
      {
        "label": "Công cụ sáng tạo",
        "title": "Công cụ tạo hình ảnh & Thiết kế chuyên dụng",
        "summary": "Bên cạnh các chatbot đa năng, có một nhóm công cụ AI chuyên về tạo và thiết kế hình ảnh, mỗi công cụ phù hợp với một nhu cầu khác nhau.",
        "bullets": [
          "Stable Diffusion: Mô hình khuếch tán mã nguồn mở chuyên tạo hình ảnh nghệ thuật/chân thực từ văn bản mô tả (text-to-image thuần túy).",
          "Adobe Firefly: Công cụ tạo/chỉnh sửa hình ảnh AI của Adobe, tích hợp sẵn trong Photoshop/Illustrator, huấn luyện trên kho ảnh có bản quyền hợp pháp.",
          "Canva (Magic Media): Nền tảng thiết kế kéo-thả tích hợp AI tạo ảnh, phù hợp cho người không chuyên tạo nhanh banner, áp phích, bài đăng mạng xã hội.",
          "Adobe Express: Công cụ thiết kế nhanh của Adobe, tạo hình ảnh và phông chữ cách điệu, hỗ trợ lên lịch đăng bài mạng xã hội trực tiếp."
        ],
        "terms": [
          {
            "term": "Stable Diffusion",
            "definition": "Mô hình khuếch tán (diffusion) mã nguồn mở, chuyên tạo hình ảnh chất lượng cao từ mô tả văn bản."
          },
          {
            "term": "Adobe Firefly",
            "definition": "Bộ công cụ AI tạo sinh của Adobe, tích hợp trong hệ sinh thái Creative Cloud, dữ liệu huấn luyện có nguồn gốc bản quyền rõ ràng."
          }
        ],
        "example": {
          "title": "Chọn đúng công cụ",
          "content": "Cần một logo nhanh cho câu lạc bộ học sinh, không rành thiết kế: dùng Canva. Cần tạo hàng loạt concept-art nghệ thuật độ phân giải cao: dùng Stable Diffusion."
        },
        "pitfalls": [
          "Nghĩ rằng mọi công cụ tạo ảnh AI đều giống nhau — thực tế mỗi công cụ khác nhau về mức độ kiểm soát sáng tạo, nguồn dữ liệu huấn luyện và đối tượng người dùng mục tiêu."
        ],
        "check": {
          "question": "Một câu lạc bộ học sinh cần nhanh chóng tạo một banner quảng cáo sự kiện mà không ai trong nhóm biết thiết kế chuyên nghiệp. Công cụ nào phù hợp nhất?",
          "options": [
            "Stable Diffusion",
            "Canva",
            "Kiến trúc Transformer",
            "VAE"
          ],
          "answer": 1,
          "explanation": "Canva được thiết kế cho người không chuyên, thao tác kéo-thả đơn giản, rất phù hợp để tạo banner nhanh."
        },
        "takeaway": "Chọn công cụ tạo ảnh theo nhu cầu: Canva/Adobe Express cho thiết kế nhanh, Stable Diffusion/Adobe Firefly cho tạo ảnh chuyên sâu."
      },
      {
        "label": "Nền tảng doanh nghiệp",
        "title": "Nền tảng AI doanh nghiệp & Đa tác tử (Multi-agent)",
        "summary": "Doanh nghiệp thường cần các nền tảng AI mạnh hơn chatbot đơn lẻ: có khả năng kết nối nhiều AI thành quy trình, hoặc tích hợp sâu vào công cụ làm việc sẵn có.",
        "bullets": [
          "Azure AI Studio: Nền tảng của Microsoft cho phép doanh nghiệp xây dựng và kết nối một chuỗi nhiều mô hình AI lại với nhau để thực hiện một quy trình nghiệp vụ phức tạp.",
          "Microsoft Copilot: Trợ lý AI tích hợp sẵn trong hệ sinh thái Microsoft (Word, Excel, Teams, Visual Studio), hỗ trợ công việc và lập trình ngay trong công cụ quen thuộc.",
          "MetaGPT: Framework đa tác tử (multi-agent) cho phép nhiều 'vai trò AI' khác nhau (quản lý dự án, lập trình viên, kiểm thử...) cùng hợp tác tự động để hoàn thành một dự án phần mềm."
        ],
        "terms": [
          {
            "term": "Azure AI Studio",
            "definition": "Nền tảng AI doanh nghiệp của Microsoft, cho phép xây dựng và kết nối chuỗi các mô hình AI thành một quy trình xử lý hoàn chỉnh."
          },
          {
            "term": "Đa tác tử (Multi-agent)",
            "definition": "Kiến trúc trong đó nhiều AI đảm nhận các vai trò khác nhau, phối hợp với nhau để hoàn thành một nhiệm vụ phức tạp."
          }
        ],
        "example": {
          "title": "Khi nào dùng nền tảng doanh nghiệp?",
          "content": "Một quy trình duyệt hồ sơ vay gồm 3 bước riêng biệt (nhập dữ liệu → tính điểm tín dụng → gửi thông báo) phù hợp để triển khai bằng Azure AI Studio hoặc Microsoft Copilot thay vì một chatbot đơn lẻ."
        },
        "pitfalls": [
          "Nhầm Azure AI Studio (nền tảng kết nối quy trình AI) với một chatbot đơn giản — điểm khác biệt cốt lõi là khả năng nối chuỗi nhiều mô hình/bước xử lý."
        ],
        "check": {
          "question": "Một nhóm phát triển phần mềm muốn nhiều 'AI vai trò' (quản lý, lập trình viên, kiểm thử) tự động phối hợp để cùng xây dựng một ứng dụng. Công cụ nào phù hợp nhất với mô hình đa tác tử này?",
          "options": [
            "Canva",
            "Stable Diffusion",
            "MetaGPT",
            "Adobe Express"
          ],
          "answer": 2,
          "explanation": "MetaGPT được thiết kế đặc biệt cho việc điều phối nhiều AI đóng vai trò khác nhau để hợp tác hoàn thành một dự án."
        },
        "takeaway": "Azure AI Studio nối chuỗi AI cho quy trình nghiệp vụ; Copilot tích hợp vào công cụ Microsoft; MetaGPT điều phối nhiều AI theo vai trò."
      },
      {
        "label": "Ứng dụng doanh nghiệp",
        "title": "Tác vụ Doanh nghiệp & Kỹ thuật",
        "summary": "AI tạo sinh mang lại hiệu suất vượt trội trong soạn thảo tài liệu kinh doanh, sinh mã lập trình và giải thích cấu trúc tệp XML.",
        "bullets": [
          "Soạn thảo kinh doanh: Viết bản nháp đề xuất kinh doanh (Business Proposals), tóm tắt biên bản họp, soạn email chăm sóc khách hàng.",
          "Lập trình & Kỹ thuật: Viết mã nguồn Python, JavaScript, SQL; gỡ lỗi (debugging) và tạo dữ liệu mẫu thử nghiệm.",
          "Hệ thống quản lý học tập (LMS): Giải thích cách các tệp XML được sử dụng để cấu hình dữ liệu khóa học và chuyển giao tài nguyên giữa các nền tảng."
        ],
        "terms": [
          {
            "term": "Đề xuất kinh doanh (Business Proposal)",
            "definition": "Văn bản trình bày giải pháp, kế hoạch và chi phí để thuyết phục khách hàng hoặc đối tác."
          },
          {
            "term": "XML (eXtensible Markup Language)",
            "definition": "Ngôn ngữ đánh dấu mở rộng dùng để lưu trữ và truyền tải dữ liệu có cấu trúc."
          }
        ],
        "example": {
          "title": "Giải thích tệp XML trong LMS",
          "content": "Quản trị viên LMS mới vào nghề dùng AI giải thích cấu trúc tệp XML để hiểu rõ cách bài giảng trực tuyến được đóng gói và chia sẻ."
        },
        "pitfalls": [
          "Gửi thẳng bản nháp do AI viết cho đối tác mà không có bước rà soát, chỉnh sửa số liệu của con người."
        ],
        "check": {
          "question": "Trong môi trường giáo dục trực tuyến (LMS), AI tạo sinh có thể hỗ trợ quản trị viên mới bằng cách nào?",
          "options": [
            "Tạo tài liệu hướng dẫn và giải thích cách các tệp XML được dùng để cấu hình dữ liệu khóa học",
            "Tự động thay thế giáo viên đứng lớp hoàn toàn",
            "Tắt máy chủ khi có sự cố mạng",
            "Tự động in tất cả tài liệu ra giấy"
          ],
          "answer": 0,
          "explanation": "AI tạo sinh rất xuất sắc trong việc giải thích các khái niệm kỹ thuật và định dạng dữ liệu có cấu trúc như XML."
        },
        "takeaway": "AI tạo sinh là trợ lý đắc lực giúp tăng tốc soạn thảo văn bản và giải thích kỹ thuật."
      },
      {
        "label": "Nhận diện lỗi & Tiêu chí",
        "title": "Bất thường thị giác & Tiêu chí chọn công cụ",
        "summary": "Nhận biết các lỗi không nhất quán thị giác do AI tạo ra và các tiêu chí cốt lõi khi doanh nghiệp đánh giá lựa chọn phần mềm AI.",
        "bullets": [
          "Dị vật thị giác (Visual Artifacts): Bàn tay có 6 ngón, cấu trúc giải phẫu học sai lệch, bóng đổ phi vật lý, chữ cái méo mó trong ảnh.",
          "Tiêu chí lựa chọn công cụ AI: Tính dễ sử dụng (Usability), Chi phí vận hành/bản quyền, Khả năng tùy chỉnh (Customizability) và Bảo mật dữ liệu doanh nghiệp.",
          "Điểm chốt dữ liệu (Knowledge Cutoff): Lưu ý mốc thời gian hoàn thành huấn luyện của mô hình khi tra cứu các chủ đề thời sự."
        ],
        "terms": [
          {
            "term": "Dị vật thị giác (Visual Artifacts)",
            "definition": "Các chi tiết lỗi bất thường, phi vật lý xuất hiện trong hình ảnh do AI sinh ra."
          },
          {
            "term": "Tính dễ sử dụng (Usability)",
            "definition": "Mức độ thuận tiện và dễ dàng tiếp cận của công cụ đối với người dùng không chuyên kỹ thuật."
          }
        ],
        "example": {
          "title": "Kiểm tra ảnh trước khi in",
          "content": "Trước khi in áp phích quảng cáo, nhân viên tiếp thị phóng to kiểm tra đôi bàn tay của người mẫu trong ảnh AI để đảm bảo không bị lỗi 6 ngón."
        },
        "pitfalls": [
          "Chỉ nhìn lướt qua bức ảnh AI mà không phóng to kiểm tra kỹ các chi tiết ngón tay và nguồn sáng."
        ],
        "check": {
          "question": "Ba tiêu chí quan trọng hàng đầu cần xem xét khi một doanh nghiệp lựa chọn công cụ AI tạo sinh là gì?",
          "options": [
            "Tính dễ sử dụng, Chi phí và Khả năng tùy chỉnh (Customizability)",
            "Màu sắc bao bì, vị trí trụ sở công ty và số lượng nhân viên bảo vệ",
            "Khả năng chạy trên đĩa mềm dung lượng nhỏ",
            "Năm thành lập công ty trên 100 năm"
          ],
          "answer": 0,
          "explanation": "Tính dễ sử dụng, chi phí hợp lý và khả năng tùy chỉnh nghiệp vụ là 3 tiêu chí đánh giá phần mềm hàng đầu."
        },
        "takeaway": "Luôn soi kỹ dị vật thị giác và chọn công cụ AI theo tiêu chí: Dễ dùng + Chi phí hợp lý + Tùy biến cao."
      }
    ]
  },
  "prompting": {
    "description": "Thành thạo công thức viết prompt 5 thành tố, phân vai Persona, kỹ thuật Few-shot, CoT, Prompt Chaining, Reverse Prompting, Style Guide, Glossary và đồ họa nâng cao.",
    "slides": [
      {
        "label": "Cấu trúc",
        "title": "Công thức viết Prompt 5 thành tố",
        "summary": "Một câu lệnh (prompt) chất lượng cao bao gồm 5 thành phần rõ ràng: Nhiệm vụ, Vai trò, Bối cảnh, Ràng buộc và Định dạng.",
        "bullets": [
          "1. Nhiệm vụ (Task): Động từ hành động cụ thể (Tóm tắt, Phân tích, Lập bảng, Soạn thảo, Viết mã).",
          "2. Vai trò (Role/Persona): Chuyên môn giả định của AI (Bạn là huấn luyện viên thể hình, luật sư doanh nghiệp).",
          "3. Bối cảnh (Context): Tình huống thực tế và mục đích sử dụng (Dành cho người mới bắt đầu, trong cuộc họp ban giám đốc).",
          "4. Ràng buộc (Constraints): Giới hạn độ dài, giọng điệu, từ ngữ cần tránh (Dưới 150 từ, không dùng tạ nặng).",
          "5. Định dạng (Format): Hình thức hiển thị đầu ra (Bảng Markdown, danh sách đánh số, JSON, kịch bản 2 cột)."
        ],
        "terms": [
          {
            "term": "Prompt (Câu lệnh)",
            "definition": "Đoạn văn bản đầu vào do người dùng cung cấp để hướng dẫn mô hình AI thực hiện nhiệm vụ."
          },
          {
            "term": "Ràng buộc (Constraints)",
            "definition": "Các giới hạn và tiêu chí bắt buộc áp đặt lên câu trả lời của AI."
          }
        ],
        "example": {
          "title": "Lập lịch tập thể hình",
          "content": "Bạn là HLV thể hình (Vai trò). Hãy lập lịch tập rèn sức mạnh 30 phút (Nhiệm vụ) cho người mới (Bối cảnh). Trả về dạng Bảng 3 cột: Bài tập, Số hiệp, Thời gian nghỉ (Định dạng), không dùng tạ (Ràng buộc)."
        },
        "pitfalls": [
          "Viết câu lệnh cộc lốc như 'Lập lịch tập' rồi nhận về kết quả chung chung không thể áp dụng."
        ],
        "check": {
          "question": "Thành phần nào trong prompt giúp kiểm soát giới hạn số lượng từ và định hình hình thức hiển thị của câu trả lời?",
          "options": [
            "Ràng buộc và định dạng (Constraints & Format)",
            "Tốc độ gõ phím của người dùng",
            "Dung lượng RAM máy tính",
            "Tên nhà cung cấp mạng Internet"
          ],
          "answer": 0,
          "explanation": "Ràng buộc thiết lập các giới hạn (độ dài, giọng điệu) và Định dạng quy định cấu trúc hiển thị (bảng, danh sách)."
        },
        "takeaway": "Công thức vàng: Nhiệm vụ + Vai trò + Bối cảnh + Ràng buộc + Định dạng."
      },
      {
        "label": "Định hình Persona",
        "title": "Kỹ thuật Gán vai trò chuyên gia",
        "summary": "Yêu cầu AI đóng vai một chuyên gia cụ thể giúp định hình vốn từ, phong cách tư duy và độ sâu chuyên môn của câu trả lời.",
        "bullets": [
          "Thiết lập góc nhìn chuyên môn: 'Bạn là chuyên gia dinh dưỡng thể thao', 'Bạn là kiểm toán viên kỳ cựu'.",
          "Kích hoạt vốn từ chuyên ngành: Gán vai trò giúp mô hình ưu tiên các mẫu ngôn ngữ chuyên nghiệp phù hợp với lĩnh vực đó.",
          "Tránh câu trả lời mơ hồ: Persona rõ ràng giúp AI không trả lời theo kiểu bách khoa toàn thư chung chung."
        ],
        "terms": [
          {
            "term": "Persona (Hình mẫu nhân vật)",
            "definition": "Tính cách, phong cách và chuyên môn giả định mà người dùng yêu cầu AI đóng vai."
          },
          {
            "term": "Role-based Prompting",
            "definition": "Kỹ thuật gán vai trò cụ thể cho AI trước khi giao nhiệm vụ."
          }
        ],
        "example": {
          "title": "Tư vấn dinh dưỡng",
          "content": "Thay vì hỏi 'Nên ăn gì sau khi tập?', hãy gán vai trò: 'Bạn là chuyên gia dinh dưỡng thể thao. Hãy gợi ý thực đơn phục hồi cơ bắp sau buổi chạy 10km cho vận động viên bán chuyên.'"
        },
        "pitfalls": [
          "Gán hai vai trò mâu thuẫn nhau trong cùng một câu lệnh (ví dụ: vừa là luật sư khắt khe vừa là diễn viên hài hước)."
        ],
        "check": {
          "question": "Lợi ích lớn nhất của việc gán vai trò (Persona) cho AI trong câu lệnh prompt là gì?",
          "options": [
            "Định hình góc nhìn chuyên môn, phong cách tư duy và vốn từ chuyên sâu cho câu trả lời",
            "Giúp AI chạy nhanh gấp đôi",
            "Giúp máy tính không bị nóng",
            "Tự động xóa lịch sử trò chuyện"
          ],
          "answer": 0,
          "explanation": "Gán vai trò giúp mô hình kích hoạt đúng vùng tri thức và áp dụng văn phong của chuyên gia tương ứng."
        },
        "takeaway": "Cho AI một vai trò để nhận lại câu trả lời mang tầm chuyên gia."
      },
      {
        "label": "Phân hóa đối tượng",
        "title": "Phân hóa theo Trình độ người đọc",
        "summary": "Xác định rõ đối tượng tiếp nhận giúp AI lựa chọn độ phức tạp của ngôn từ, cấu trúc câu và các ví dụ minh họa trực quan phù hợp.",
        "bullets": [
          "Trẻ em tiểu học (Lớp 3): Sử dụng câu chuyện ngụ ngôn, nhân hóa đồ vật, ví dụ sinh động (ví dụ: bài học về sự ra đời của ô tô).",
          "Học sinh lớp 9: Sử dụng các ví dụ thực tế liên quan đến sở thích lứa tuổi (ví dụ: dùng góc nghiêng mái nhà và cần cẩu để giải thích hàm Cosin).",
          "Chuyên gia kỹ thuật: Sử dụng thuật ngữ chuyên ngành chính xác, công thức toán học và dẫn chứng số liệu chặt chẽ."
        ],
        "terms": [
          {
            "term": "Đối tượng mục tiêu (Target Audience)",
            "definition": "Nhóm người sẽ đọc hoặc tiếp nhận nội dung do AI tạo ra."
          }
        ],
        "example": {
          "title": "Giải thích hiện tượng quang hợp",
          "content": "Cho học sinh lớp 1: 'Cây xanh dùng ánh nắng mặt trời như chiếc bếp nấu ăn để tạo thức ăn cho lá cây'. Cho sinh viên sinh học: Giải thích chu trình Calvin và phản ứng sáng."
        },
        "pitfalls": [
          "Không nêu rõ đối tượng khiến AI giải thích một khái niệm đơn giản bằng văn phong học thuật cao cấp khó hiểu."
        ],
        "check": {
          "question": "Để tạo một bài giảng về sự phát minh ra ô tô cho học sinh lớp 3, kỹ thuật prompt nào sau đây là phù hợp nhất?",
          "options": [
            "Chỉ định rõ đối tượng là học sinh lớp 3 và yêu cầu dùng ngôn từ đơn giản, kể chuyện sinh động",
            "Yêu cầu AI viết bằng mã giả Python",
            "Yêu cầu AI trích dẫn các tài liệu kỹ thuật bằng tiếng Đức",
            "Chạy câu lệnh nhiều lần để văn bản dài ra"
          ],
          "answer": 0,
          "explanation": "Chỉ định rõ đối tượng mục tiêu giúp AI tự động điều chỉnh độ khó của từ vựng và sử dụng hình thức kể chuyện gần gũi."
        },
        "takeaway": "Nói rõ người nghe là ai để AI chọn đúng ngôn ngữ và ví dụ phù hợp."
      },
      {
        "label": "Kỹ thuật cơ bản",
        "title": "Kỹ thuật Zero-shot Prompting",
        "summary": "Zero-shot Prompting là việc ra lệnh trực tiếp cho AI thực hiện nhiệm vụ mà không cung cấp bất kỳ ví dụ mẫu minh họa nào.",
        "bullets": [
          "Đặc điểm: Câu lệnh ngắn gọn, đi thẳng vào yêu cầu nhiệm vụ.",
          "Trường hợp sử dụng tối ưu: Các câu hỏi kiến thức phổ thông, tra cứu định nghĩa, tóm tắt đoạn văn đơn giản, dịch câu thông dụng.",
          "Ưu điểm: Nhanh chóng, tiết kiệm token ngữ cảnh, không mất công chuẩn bị dữ liệu mẫu."
        ],
        "terms": [
          {
            "term": "Zero-shot Prompting",
            "definition": "Kỹ thuật yêu cầu mô hình AI thực hiện nhiệm vụ ngay lập tức mà không đưa ra bất kỳ ví dụ mẫu nào."
          }
        ],
        "example": {
          "title": "Dịch menu cà phê tại Đức",
          "content": "'Hãy dịch câu sau sang tiếng Đức: Một mocha latte, làm ơn.' -> AI trả về ngay: 'Einen Mokka Latte, bitte.'"
        },
        "pitfalls": [
          "Sử dụng Zero-shot khi yêu cầu định dạng đầu ra phức tạp hoặc phân loại dữ liệu theo tiêu chuẩn riêng của công ty."
        ],
        "check": {
          "question": "Khi bạn nhập câu lệnh 'Tóm tắt bài báo sau thành 3 ý chính' mà không kèm theo bất kỳ bài mẫu nào, bạn đang sử dụng kỹ thuật gì?",
          "options": [
            "Zero-shot Prompting",
            "Few-shot Prompting",
            "Fine-tuning",
            "Reverse Prompting"
          ],
          "answer": 0,
          "explanation": "Zero-shot là kỹ thuật ra lệnh trực tiếp cho mô hình mà không cần cung cấp các ví dụ mẫu minh họa trước."
        },
        "takeaway": "Zero-shot phù hợp cho các nhiệm vụ thông thường, nhanh gọn và quen thuộc."
      },
      {
        "label": "Kỹ thuật mẫu",
        "title": "Kỹ thuật Few-shot Prompting",
        "summary": "Few-shot Prompting cung cấp 2–3 cặp ví dụ mẫu (Đầu vào -> Đầu ra) ngay trong câu lệnh để định hình cấu trúc và phong cách cho AI.",
        "bullets": [
          "Cung cấp khuôn mẫu chuẩn: Giúp mô hình 'học trong ngữ cảnh' (In-context learning) cách trình bày và định dạng mong muốn.",
          "Cực kỳ hiệu quả cho cấu trúc nghiêm ngặt: Dạng câu hỏi Hỏi (Q) - Đáp (A), phân tích cảm xúc (Tích cực/Tiêu cực), trích xuất thực thể.",
          "Ổn định kết quả: Giảm thiểu sai sót và hiện tượng AI trả lời lạc đề hoặc sai quy chuẩn."
        ],
        "terms": [
          {
            "term": "Few-shot Prompting",
            "definition": "Kỹ thuật cung cấp một vài ví dụ minh họa đầu vào/đầu ra trong prompt để hướng dẫn mô hình làm theo mẫu."
          },
          {
            "term": "In-context Learning",
            "definition": "Khả năng mô hình nắm bắt quy luật và bắt chước phong cách ngay từ các ví dụ trong ngữ cảnh prompt."
          }
        ],
        "example": {
          "title": "Mẫu màu sắc tương phản",
          "content": "Q: Màu tương phản của Đỏ? A: Xanh lá cây.\nQ: Màu tương phản của Xanh lam? A: Cam.\nQ: Màu tương phản của Vàng? A: Tím.\nQ: Màu tương phản của Đen? A:"
        },
        "pitfalls": [
          "Đưa các ví dụ mẫu có định dạng mâu thuẫn hoặc sai chính tả khiến AI bắt chước theo lỗi sai đó."
        ],
        "check": {
          "question": "Khi bạn đưa 3 cặp câu mẫu về cách phân loại phản hồi khách hàng trước khi yêu cầu AI phân loại phản hồi thứ 4, kỹ thuật này được gọi là gì?",
          "options": [
            "Few-shot Prompting",
            "Zero-shot Prompting",
            "Mã hóa Token",
            "Che dấu dữ liệu tĩnh"
          ],
          "answer": 0,
          "explanation": "Few-shot Prompting là việc nạp vài ví dụ minh họa vào câu lệnh để mô hình làm theo đúng cấu trúc mẫu."
        },
        "takeaway": "Đưa 2-3 ví dụ mẫu (Few-shot) để cố định định dạng và phong cách trả lời của AI."
      },
      {
        "label": "Tư duy từng bước",
        "title": "Chain-of-Thought (Chuỗi tư duy CoT)",
        "summary": "Kỹ thuật Chain-of-Thought hướng dẫn AI chia nhỏ bài toán và trình bày từng bước suy luận trung gian trước khi đưa ra kết quả cuối.",
        "bullets": [
          "Câu thần chú kích hoạt: Thêm câu lệnh 'Hãy suy nghĩ từng bước' (Let's think step by step).",
          "Nâng cao độ chính xác: Giúp mô hình không đưa ra kết luận vội vàng theo trực giác xác suất đơn thuần.",
          "Minh bạch hóa lập luận: Giúp người dùng nhìn rõ từng bước giải để phát hiện chính xác vị trí sai sót nếu có."
        ],
        "terms": [
          {
            "term": "Chain-of-Thought (CoT)",
            "definition": "Kỹ thuật prompt yêu cầu mô hình tạo ra chuỗi các bước suy luận trung gian trước khi trả lời."
          }
        ],
        "example": {
          "title": "Kích hoạt CoT",
          "content": "'Một cửa hàng có 20 quả táo, bán đi một nửa, sau đó nhập thêm 5 quả. Hãy suy nghĩ từng bước và cho biết cửa hàng còn bao nhiêu quả?'"
        },
        "pitfalls": [
          "Hỏi thẳng đáp số của bài toán logic phức tạp mà không yêu cầu AI giải thích từng bước."
        ],
        "check": {
          "question": "Cụm từ nào sau đây trong câu lệnh giúp kích hoạt khả năng suy luận từng bước (Chain-of-Thought) của mô hình AI?",
          "options": [
            "'Hãy suy nghĩ từng bước' (Let's think step by step)",
            "'Hãy trả lời thật nhanh trong 1 giây'",
            "'Hãy dùng phông chữ màu xanh'",
            "'Hãy đóng tab trình duyệt'"
          ],
          "answer": 0,
          "explanation": "Câu lệnh 'Hãy suy nghĩ từng bước' kích hoạt chuỗi suy luận logic trung gian (CoT), giúp tăng độ chính xác của câu trả lời."
        },
        "takeaway": "'Hãy suy nghĩ từng bước' giúp giải quyết chính xác các bài toán logic và số học phức tạp."
      },
      {
        "label": "Ứng dụng CoT",
        "title": "Ứng dụng CoT trong Đề xuất Kinh doanh",
        "summary": "Vận dụng Chain-of-Thought để giải quyết các bài toán lập kế hoạch, phân tích chi phí và xây dựng đề xuất kinh doanh ẩm thực.",
        "bullets": [
          "Bước 1: Tính toán chi phí nguyên liệu đầu vào cho từng món ăn.",
          "Bước 2: Tính toán chi phí nhân công, điện nước và mặt bằng phân bổ.",
          "Bước 3: Xác định tỷ suất lợi nhuận mục tiêu và tính giá bán đề xuất.",
          "Bước 4: Tổng hợp thành bản đề xuất kinh doanh hoàn chỉnh."
        ],
        "terms": [
          {
            "term": "Suy luận tuần tự (Sequential Reasoning)",
            "definition": "Quá trình giải quyết vấn đề bằng cách thực hiện tuần tự các phép tính logic kế tiếp nhau."
          }
        ],
        "example": {
          "title": "Lập giá bán món ăn mới",
          "content": "Yêu cầu AI: 'Hãy suy nghĩ từng bước để lập đề xuất giá cho món Bánh mì kẹp: Bắt đầu từ chi phí bột mì, thịt, rau -> chi phí đóng gói -> tỷ suất lợi nhuận 30% -> đưa ra giá bán lẻ lẻ.'"
        },
        "pitfalls": [
          "Yêu cầu đưa ra giá bán ngay lập tức mà không yêu cầu bóc tách các thành phần chi phí cấu thành."
        ],
        "check": {
          "question": "Khi lập kế hoạch kinh doanh ẩm thực, việc yêu cầu AI tính toán chi phí nguyên liệu trước, sau đó tính chi phí vận hành rồi mới kết luận giá bán là ứng dụng của kỹ thuật nào?",
          "options": [
            "Chain-of-Thought (Suy luận theo chuỗi tư duy)",
            "Negative Prompting",
            "Data Scraping",
            "Mã hóa Token"
          ],
          "answer": 0,
          "explanation": "Bóc tách từng bước tính toán tuần tự trước khi đưa ra kết luận giá bán là ứng dụng điển hình của Chain-of-Thought."
        },
        "takeaway": "Dùng CoT để bóc tách từng tầng chi phí trước khi chốt phương án kinh doanh."
      },
      {
        "label": "Xâu chuỗi",
        "title": "Prompt Chaining (Xâu chuỗi câu lệnh)",
        "summary": "Prompt Chaining chia dự án lớn thành nhiều câu lệnh độc lập; kết quả đã được con người kiểm duyệt của bước trước làm đầu vào cho bước sau.",
        "bullets": [
          "Quy trình đa chặng có kiểm soát: Tách bạch các khâu: Thu thập tài liệu -> Lập dàn ý -> Viết chi tiết -> Hiệu đính.",
          "Kiểm soát chất lượng tại từng nút chặn: Con người kiểm tra và sửa đổi dàn ý ở bước 1 trước khi cho AI viết nội dung ở bước 2.",
          "Tránh quá tải: Giúp mô hình tập trung 100% năng lực vào một tác vụ đơn lẻ thay vì làm nhiều việc cùng lúc."
        ],
        "terms": [
          {
            "term": "Prompt Chaining",
            "definition": "Kỹ thuật liên kết nhiều câu lệnh tuần tự, lấy kết quả của câu lệnh trước làm đầu vào cho câu lệnh sau."
          }
        ],
        "example": {
          "title": "Quy trình 2 bước",
          "content": "Prompt 1: 'Trích xuất 5 luận điểm chính từ bài báo này.' (Bạn kiểm tra & chỉnh sửa). Prompt 2: 'Dựa vào 5 luận điểm đã duyệt, hãy viết một bài thuyết trình 5 slide.'"
        },
        "pitfalls": [
          "Nhồi nhét toàn bộ 5 bước vào 1 câu lệnh duy nhất khiến AI làm sơ sài và bỏ sót nhiều yêu cầu quan trọng."
        ],
        "check": {
          "question": "Phương pháp chia một tác vụ lớn thành chuỗi các câu lệnh tuần tự có sự kiểm tra của con người giữa các chặng được gọi là gì?",
          "options": [
            "Prompt Chaining (Xâu chuỗi câu lệnh)",
            "Zero-shot Prompting",
            "Mô hình khuếch tán Diffusion",
            "Mã hóa dữ liệu tĩnh"
          ],
          "answer": 0,
          "explanation": "Prompt Chaining liên kết các câu lệnh theo chuỗi, giúp con người kiểm soát chất lượng ở từng giai đoạn."
        },
        "takeaway": "Chia dự án lớn thành chuỗi các prompt nhỏ có kiểm duyệt để đảm bảo chất lượng hoàn hảo."
      },
      {
        "label": "Ứng dụng Xâu chuỗi",
        "title": "Dự án 3 bước với Prompt Chaining",
        "summary": "Ví dụ thực tế áp dụng Prompt Chaining để chuyển đổi cuốn sổ tay nhân viên 30 trang thành bài thuyết trình PowerPoint chuyên nghiệp.",
        "bullets": [
          "Chặng 1 (Trích xuất): AI đọc tài liệu 30 trang và liệt kê ra 10 quy định quan trọng nhất (Người dùng rà soát).",
          "Chặng 2 (Lập dàn ý): Dựa trên 10 quy định đã duyệt, AI xây dựng cấu trúc 10 slide thuyết trình (Người dùng chỉnh sửa).",
          "Chặng 3 (Soạn thảo chi tiết): Dựa trên dàn ý đã hoàn thiện, AI viết nội dung chi tiết và gợi ý hình ảnh cho từng slide."
        ],
        "terms": [
          {
            "term": "Chốt kiểm soát chất lượng (QA Gate)",
            "definition": "Điểm dừng giữa các bước trong chuỗi prompt để con người rà soát và phê duyệt."
          }
        ],
        "example": {
          "title": "Chuyển đổi sổ tay nhân viên",
          "content": "Thay vì gõ 'Hãy làm slide từ sổ tay này', hãy dùng chuỗi 3 prompt: Trích xuất ý cốt lõi -> Lập dàn ý slide -> Viết nội dung chi tiết từng slide."
        },
        "pitfalls": [
          "Không dừng lại kiểm tra dàn ý ở bước 2 mà để AI viết thẳng nội dung chi tiết, dẫn đến việc phải làm lại từ đầu nếu dàn ý sai hướng."
        ],
        "check": {
          "question": "Khi chuyển đổi một cuốn sổ tay nhân viên dày 30 trang thành slide thuyết trình, cách tiếp cận nào đảm bảo kết quả chính xác nhất?",
          "options": [
            "Sử dụng Prompt Chaining qua 3 bước: Trích xuất ý chính -> Lập dàn ý -> Soạn chi tiết từng slide",
            "Copy toàn bộ 30 trang vào một câu lệnh duy nhất và yêu cầu tạo slide ngay",
            "Chỉ đọc trang bìa của cuốn sổ tay",
            "Chụp ảnh cuốn sổ tay và không nhập chữ"
          ],
          "answer": 0,
          "explanation": "Prompt Chaining 3 bước giúp kiểm duyệt dàn ý trước khi soạn thảo chi tiết, đảm bảo bài thuyết trình bám sát tài liệu gốc."
        },
        "takeaway": "Trích xuất ý chính $\rightarrow$ Duyệt dàn ý $\rightarrow$ Soạn chi tiết: Công thức chuẩn cho tài liệu lớn."
      },
      {
        "label": "Nhắc ngược",
        "title": "Reverse Prompting (Kỹ thuật hỏi ngược)",
        "summary": "Reverse Prompting yêu cầu AI đóng vai người phỏng vấn, chủ động đặt câu hỏi cho người dùng để thu thập đầy đủ thông tin trước khi thực hiện nhiệm vụ.",
        "bullets": [
          "Chủ động khai thác dữ liệu: Phù hợp nhất khi người dùng chưa biết mình cần phải cung cấp những thông tin gì để có kết quả tốt nhất.",
          "Quy tắc từng câu một: Yêu cầu AI đặt từng câu hỏi một, chờ người dùng trả lời rồi mới hỏi tiếp.",
          "Chỉ hành động khi đủ dữ liệu: Hướng dẫn AI tuyệt đối không được viết sản phẩm cuối cùng cho đến khi người dùng xác nhận đã hoàn tất trả lời."
        ],
        "terms": [
          {
            "term": "Reverse Prompting (Nhắc ngược)",
            "definition": "Kỹ thuật yêu cầu AI chủ động đặt câu hỏi ngược lại cho người dùng để thu thập thông tin trước khi thực hiện nhiệm vụ."
          }
        ],
        "example": {
          "title": "Câu lệnh kích hoạt",
          "content": "'Tôi muốn bạn giúp tôi viết một kế hoạch kinh doanh. Hãy đóng vai một chuyên gia cố vấn và phỏng vấn tôi từng câu một về ý tưởng, khách hàng và ngân sách.'"
        },
        "pitfalls": [
          "Để AI đặt cùng lúc 20 câu hỏi khiến người dùng quá tải và khó trả lời chi tiết."
        ],
        "check": {
          "question": "Khi bạn muốn AI tạo một bản kế hoạch hoàn hảo nhưng chưa biết mình cần cung cấp những thông tin gì, bạn nên sử dụng kỹ thuật nào?",
          "options": [
            "Reverse Prompting (Yêu cầu AI phỏng vấn ngược lại bạn)",
            "Zero-shot Prompting cộc lốc",
            "Tạo ảnh Inpainting",
            "Tăng tốc độ xung nhịp CPU"
          ],
          "answer": 0,
          "explanation": "Reverse Prompting biến AI thành người phỏng vấn chủ động để khai thác toàn bộ dữ liệu cần thiết từ người dùng."
        },
        "takeaway": "Để AI hỏi bạn trước khi bạn yêu cầu AI viết sản phẩm hoàn thiện."
      },
      {
        "label": "Ứng dụng Nhắc ngược",
        "title": "Ứng dụng Reverse Prompting: Viết CV & Du lịch",
        "summary": "Vận dụng kỹ thuật hỏi ngược để xây dựng Sơ yếu lý lịch (CV) chuyên nghiệp và thiết kế lịch trình du lịch cá nhân hóa.",
        "bullets": [
          "Viết Sơ yếu lý lịch (CV): AI hỏi lần lượt về mục tiêu nghề nghiệp, kinh nghiệm 3 công ty gần nhất, kỹ năng nổi bật và bằng cấp trước khi tổng hợp thành CV.",
          "Lập lịch trình du lịch: AI hỏi về ngân sách, sở thích ăn uống, phương tiện di chuyển, số lượng thành viên (ví dụ: kỳ nghỉ của Kenneth hoặc chuyến leo núi Kilimanjaro).",
          "Cá nhân hóa tối đa: Sản phẩm cuối cùng hoàn toàn bám sát tình trạng thực tế của người dùng thay vì một mẫu chung chung trên mạng."
        ],
        "terms": [
          {
            "term": "Cá nhân hóa (Personalization)",
            "definition": "Quá trình tùy biến nội dung theo đúng đặc điểm và nhu cầu riêng biệt của từng cá nhân."
          }
        ],
        "example": {
          "title": "Phỏng vấn viết CV",
          "content": "'Hãy phỏng vấn tôi 5 câu hỏi để viết CV xin việc Marketing Manager. Hãy hỏi từng câu một và chờ tôi trả lời trước khi hỏi câu tiếp theo.'"
        },
        "pitfalls": [
          "Tự mình viết một đoạn văn dài dòng lộn xộn thay vì để AI phỏng vấn có cấu trúc."
        ],
        "check": {
          "question": "Tại sao sử dụng Reverse Prompting lại giúp tạo ra bản CV xin việc chất lượng hơn so với một câu lệnh Zero-shot thông thường?",
          "options": [
            "Vì AI sẽ chủ động hỏi để thu thập đầy đủ các thành tích và kỹ năng nổi bật mà người dùng có thể quên nêu ra",
            "Vì AI sẽ tự động bịa thêm các giải thưởng quốc tế",
            "Vì câu lệnh này giúp giảm tiền điện",
            "Vì AI sẽ gửi CV trực tiếp cho nhà tuyển dụng"
          ],
          "answer": 0,
          "explanation": "Quy trình phỏng vấn của Reverse Prompting giúp khai thác đầy đủ các chi tiết kinh nghiệm quan trọng mà người dùng có thể vô tình bỏ sót."
        },
        "takeaway": "Phỏng vấn có cấu trúc mang lại bản CV và lịch trình du lịch cá nhân hóa hoàn hảo."
      },
      {
        "label": "Tự nhất quán",
        "title": "Kỹ thuật Self-Consistency Prompting",
        "summary": "Self-Consistency chạy mô hình nhiều lần với cùng một câu lệnh suy luận (CoT) và chọn câu trả lời xuất hiện nhiều nhất (bỏ phiếu đa số).",
        "bullets": [
          "Nguyên lý bỏ phiếu đa số (Majority Voting): Lấy mẫu 5 đến 10 đường suy luận khác nhau; đáp án nào xuất hiện với tần suất cao nhất sẽ được chọn.",
          "Khắc phục sai lệch ngẫu nhiên: Tránh việc mô hình bị trượt vào một nhánh suy luận sai lầm đơn lẻ.",
          "Ứng dụng: Giải các bài toán đố phức tạp, bài toán xác suất hoặc đánh giá chiến lược kinh doanh quan trọng."
        ],
        "terms": [
          {
            "term": "Self-Consistency",
            "definition": "Phương pháp lấy mẫu nhiều đường dẫn suy luận và chọn đáp án có độ đồng thuận cao nhất."
          },
          {
            "term": "Bỏ phiếu đa số (Majority Voting)",
            "definition": "Cơ chế chọn kết quả dựa trên số lượng phương án trùng khớp chiếm tỷ lệ cao nhất."
          }
        ],
        "example": {
          "title": "Xác minh bài toán xác suất",
          "content": "Chạy mô hình 5 lần giải cùng một bài toán: 4 lần ra đáp số 42, 1 lần ra đáp số 38 -> Kết luận chọn 42 theo nguyên tắc Self-Consistency."
        },
        "pitfalls": [
          "Chỉ chạy 1 lần duy nhất rồi tin ngay vào kết quả của một bài toán suy luận phức tạp."
        ],
        "check": {
          "question": "Phương pháp nào sau đây sinh ra nhiều chuỗi suy luận CoT khác nhau và chọn đáp án có tần suất xuất hiện cao nhất?",
          "options": [
            "Self-Consistency Prompting",
            "Zero-shot đơn lẻ",
            "Static Data Masking",
            "Outpainting"
          ],
          "answer": 0,
          "explanation": "Self-Consistency dựa trên việc lấy mẫu nhiều chuỗi lập luận và áp dụng bỏ phiếu đa số để đạt độ chính xác cao."
        },
        "takeaway": "Lấy mẫu nhiều lời giải và chọn đáp án đồng thuận cao nhất để đạt độ tin cậy tối đa."
      },
      {
        "label": "Tạo tri thức nền",
        "title": "Kỹ thuật Generate Knowledge Prompting",
        "summary": "Yêu cầu AI tự tạo ra các sự kiện và tri thức nền tảng trước khi sử dụng chính tri thức đó để giải quyết câu hỏi chính.",
        "bullets": [
          "Giai đoạn 1 (Tạo tri thức): Yêu cầu AI liệt kê các đặc điểm, tiêu chí và sự kiện liên quan đến chủ đề.",
          "Giai đoạn 2 (Suy luận giải quyết): Yêu cầu AI dựa vào các tri thức vừa liệt kê ở trên để trả lời hoặc đưa ra giải pháp.",
          "Ứng dụng: Tìm kiếm quán ăn ngon giá hợp lý tại địa phương, phân tích chiến lược cạnh tranh của đối thủ."
        ],
        "terms": [
          {
            "term": "Generate Knowledge Prompting",
            "definition": "Kỹ thuật kích hoạt tri thức nền tảng trong mô hình trước khi trả lời câu hỏi cốt lõi."
          }
        ],
        "example": {
          "title": "Tìm nhà hàng ẩm thực",
          "content": "Bước 1: Hãy nêu các tiêu chí của một quán ăn gia đình chất lượng cao. Bước 2: Dựa vào các tiêu chí trên, hãy gợi ý 3 nhà hàng phù hợp tại khu vực X."
        },
        "pitfalls": [
          "Hỏi thẳng gợi ý mà không yêu cầu AI định hình các tiêu chuẩn đánh giá nền tảng trước."
        ],
        "check": {
          "question": "Khi bạn yêu cầu AI liệt kê các tiêu chí đánh giá sản phẩm trước, rồi mới dùng các tiêu chí đó để so sánh 2 nhãn hàng, bạn đang dùng kỹ thuật gì?",
          "options": [
            "Generate Knowledge Prompting",
            "Negative Prompting",
            "Image-to-Video",
            "Mã hóa Token"
          ],
          "answer": 0,
          "explanation": "Generate Knowledge Prompting tạo ra các tri thức và tiêu chí nền trước khi áp dụng để giải bài toán."
        },
        "takeaway": "Khai phá tri thức nền tảng trước khi đưa ra quyết định hoặc gợi ý."
      },
      {
        "label": "Chuẩn mực văn bản",
        "title": "Bản hướng dẫn phong cách (Style Guide)",
        "summary": "Cung cấp Bản hướng dẫn phong cách (Style Guide) để AI hiệu đính văn bản tuân thủ đúng các quy chuẩn về dấu câu, ngữ pháp và viết hoa.",
        "bullets": [
          "Nội dung của Style Guide: Quy tắc dùng dấu câu, quy chuẩn viết hoa chức danh, cách xưng hô thương hiệu, từ ngữ cấm sử dụng.",
          "Ứng dụng biên tập sao chép (Copy Editor): Biên tập viên tải lên tài liệu và bản Style Guide của tòa soạn để AI rà soát lỗi chính tả và định dạng.",
          "Đảm bảo tính nhất quán thương hiệu: Giúp hàng trăm bài viết từ nhiều tác giả khác nhau đều có chung một giọng điệu chuẩn mực."
        ],
        "terms": [
          {
            "term": "Bản hướng dẫn phong cách (Style Guide)",
            "definition": "Bộ quy tắc văn bản quy định chuẩn mực về ngữ pháp, dấu câu, chính tả, cách viết hoa và giọng điệu của tổ chức."
          }
        ],
        "example": {
          "title": "Hiệu đính bài viết tòa soạn",
          "content": "Biên tập viên tải lên Style Guide và yêu cầu: 'Rà soát bài báo này, sửa lỗi dấu câu và đảm bảo tất cả tên chức danh đều viết thường theo đúng quy định trong Style Guide đính kèm.'"
        },
        "pitfalls": [
          "Yêu cầu AI 'Hãy sửa bài cho hay' mà không cung cấp quy tắc Style Guide cụ thể."
        ],
        "check": {
          "question": "Một biên tập viên muốn AI kiểm tra và sửa lỗi bài viết theo đúng quy chuẩn dấu câu và viết hoa của cơ quan mình thì nên cung cấp tài liệu gì trong prompt?",
          "options": [
            "Bản hướng dẫn phong cách trình bày (Style Guide)",
            "Bản báo cáo thuế năm trước",
            "Sơ đồ hệ thống mạng nội bộ",
            "Hóa đơn tiền nước"
          ],
          "answer": 0,
          "explanation": "Style Guide chứa toàn bộ các quy chuẩn về chính tả, dấu câu, cách viết hoa mà AI cần tuân theo khi hiệu đính."
        },
        "takeaway": "Nạp Style Guide để văn bản do AI hiệu đính đạt chuẩn mực xuất bản chuyên nghiệp."
      },
      {
        "label": "Dịch thuật chuyên ngành",
        "title": "Bảng thuật ngữ (Glossary) trong Dịch thuật",
        "summary": "Đính kèm Bảng thuật ngữ (Glossary) giúp AI dịch thuật các từ khóa chuyên ngành kỹ thuật một cách chuẩn xác và thống nhất toàn bộ tài liệu.",
        "bullets": [
          "Khái niệm Glossary: Danh mục các từ chuyên ngành kèm theo bản dịch chuẩn xác được chỉ định sẵn (ví dụ: 'Inpainting' $\rightarrow$ 'Chỉnh sửa nội suy').",
          "Giải quyết vấn đề bất nhất: Ngăn chặn việc chương 1 dịch một kiểu, chương 5 lại dịch sang một từ đồng nghĩa khác.",
          "Bảo toàn thuật ngữ gốc: Chỉ định rõ những từ ngữ nào bắt buộc phải giữ nguyên tiếng Anh không được dịch."
        ],
        "terms": [
          {
            "term": "Bảng thuật ngữ (Glossary)",
            "definition": "Danh mục từ vựng chuyên ngành kèm theo định nghĩa hoặc bản dịch chuẩn định sẵn."
          }
        ],
        "example": {
          "title": "Dịch sách Trí tuệ nhân tạo",
          "content": "Đính kèm bảng: 'Generative AI' $\rightarrow$ 'AI tạo sinh'; 'Prompt' $\rightarrow$ 'Câu lệnh'; 'Transformer' $\rightarrow$ Giữ nguyên không dịch."
        },
        "pitfalls": [
          "Dịch một tài liệu kỹ thuật dài 100 trang mà không nạp Glossary khiến thuật ngữ bị dịch lộn xộn."
        ],
        "check": {
          "question": "Khi sử dụng AI để dịch một cuốn sách kỹ thuật sang tiếng Việt, tài liệu nào đính kèm giúp đảm bảo các thuật ngữ chuyên ngành được dịch đồng nhất trong tất cả các chương?",
          "options": [
            "Bảng thuật ngữ (Glossary)",
            "Bản sao kê ngân hàng",
            "Danh bạ điện thoại",
            "Ảnh chụp bìa sách"
          ],
          "answer": 0,
          "explanation": "Bảng thuật ngữ (Glossary) cung cấp bản dịch chuẩn cho các từ khóa chuyên ngành, đảm bảo tính thống nhất trong toàn bộ tác phẩm."
        },
        "takeaway": "Đính kèm Glossary để bản dịch chuyên ngành luôn chuẩn xác và đồng nhất."
      },
      {
        "label": "Biến đổi cấu trúc",
        "title": "Biến đổi Định dạng: Bảng, JSON & XML",
        "summary": "Kỹ thuật yêu cầu AI chuyển đổi các đoạn văn bản dài thành cấu trúc dữ liệu trực quan như Bảng Markdown, JSON hoặc XML.",
        "bullets": [
          "Bảng Markdown (Markdown Table): Biến đoạn văn mô tả số lượng cây rừng thành bảng gồm các cột: Châu lục, Loại cây, Số lượng.",
          "Định dạng JSON / XML: Chuyển đổi thông tin khách hàng hoặc tệp cấu hình sang định dạng có cấu trúc để nạp vào phần mềm.",
          "Bảo toàn số liệu: Chỉ thị rõ ràng yêu cầu AI giữ nguyên các giá trị số học và tên riêng trong quá trình chuyển đổi."
        ],
        "terms": [
          {
            "term": "Bảng Markdown (Markdown Table)",
            "definition": "Cấu trúc hiển thị dữ liệu dạng hàng và cột bằng các ký tự gạch nối và gạch đứng."
          },
          {
            "term": "Dữ liệu có cấu trúc (Structured Data)",
            "definition": "Dữ liệu được tổ chức theo định dạng rõ ràng (như JSON, XML, bảng) giúp máy tính dễ xử lý."
          }
        ],
        "example": {
          "title": "Chuyển văn bản thành bảng",
          "content": "'Hãy đọc đoạn văn sau về số lượng cây trên các châu lục và chuyển toàn bộ thông tin thành Bảng Markdown gồm 3 cột: Châu lục, Số lượng cây, Tỷ lệ phần trăm.'"
        },
        "pitfalls": [
          "Không chỉ định tên các cột khiến AI tự tạo bảng với cấu trúc không đúng mong muốn."
        ],
        "check": {
          "question": "Để chuyển một đoạn văn bản mô tả số lượng cây rừng trên thế giới thành dạng bảng dễ đọc nhất, bạn nên yêu cầu định dạng đầu ra nào?",
          "options": [
            "Bảng Markdown (Markdown Table) với các cột cụ thể",
            "Một bài thơ lục bát",
            "Một tệp âm thanh MP3",
            "Một đoạn video ngắn"
          ],
          "answer": 0,
          "explanation": "Yêu cầu định dạng Bảng Markdown giúp tổ chức các dữ liệu số liệu thành hàng và cột trực quan, rõ ràng."
        },
        "takeaway": "Chỉ định rõ tên cột và định dạng Bảng Markdown để trực quan hóa dữ liệu chữ."
      },
      {
        "label": "Neo dữ liệu thực tế",
        "title": "Grounding & Ràng buộc 'Nói không biết'",
        "summary": "Grounding buộc AI bám sát tài liệu được cung cấp và kết hợp ràng buộc 'nói không biết' để ngăn chặn hoàn toàn việc tự suy đoán.",
        "bullets": [
          "Khái niệm Grounding: Khóa vùng kiến thức của AI vào tài liệu tham chiếu đính kèm (PDF, CSV, XML, Báo cáo nội bộ).",
          "Ràng buộc chống bịa đặt: 'Chỉ trả lời dựa trên tài liệu đính kèm. Nếu tài liệu không có thông tin, hãy ghi rõ Tôi không tìm thấy thông tin trong tài liệu'.",
          "Yêu cầu trích dẫn số trang: Bắt buộc AI chỉ rõ số trang hoặc đoạn văn làm bằng chứng cho câu trả lời."
        ],
        "terms": [
          {
            "term": "Grounding (Neo dữ liệu)",
            "definition": "Kỹ thuật ràng buộc câu trả lời của mô hình bám sát vào tài liệu thực tế được cung cấp."
          }
        ],
        "example": {
          "title": "Câu lệnh Grounding chuẩn",
          "content": "'Chỉ dựa vào báo cáo tài chính quý 3 đính kèm, hãy cho biết doanh thu mảng phần mềm. Nếu không có số liệu, ghi rõ Không có dữ liệu, tuyệt đối không tự ước tính.'"
        },
        "pitfalls": [
          "Nạp tài liệu nhưng không kèm câu lệnh cấm suy đoán ngoài luồng."
        ],
        "check": {
          "question": "Chỉ dẫn nào trong prompt giúp ngăn ngừa AI tự suy đoán thông tin khi đọc báo cáo nội bộ của công ty?",
          "options": [
            "Chỉ thị AI chỉ trả lời dựa trên tài liệu đính kèm và trả lời 'Không có dữ liệu' nếu thông tin không xuất hiện",
            "Yêu cầu AI viết câu trả lời thật dài",
            "Yêu cầu AI trả lời bằng tiếng Pháp",
            "Thêm nhiều biểu tượng cảm xúc vào prompt"
          ],
          "answer": 0,
          "explanation": "Neo dữ liệu vào tài liệu và cho phép AI nói 'Không có dữ liệu' là cách hiệu quả nhất để chặn đứng suy đoán bịa đặt."
        },
        "takeaway": "Neo dữ liệu nguồn + Ràng buộc 'nói không biết' = Loại bỏ suy đoán sai sự thật."
      },
      {
        "label": "Đọc biểu đồ",
        "title": "Phân tích Biểu đồ phân tán & Trendline",
        "summary": "Đính kèm hình ảnh biểu đồ phân tán (Scatter plot) có đường xu hướng (Trendline) để AI phân tích tương quan và ước tính dữ liệu.",
        "bullets": [
          "Đường xu hướng (Trendline): Biểu diễn hướng chuyển động trung bình của dữ liệu, giúp nhận biết tương quan thuận hay nghịch.",
          "Ước tính giá trị ngoại suy: Dựa vào độ dốc của đường xu hướng để ước tính giá trị tháng tiếp theo (lợi nhuận ròng, nhiệt độ trái đất).",
          "Yêu cầu rõ ràng: 'Dựa vào đường xu hướng trong biểu đồ phân tán đính kèm, hãy ước tính mức lợi nhuận của tháng thứ 12'."
        ],
        "terms": [
          {
            "term": "Biểu đồ phân tán (Scatter Plot)",
            "definition": "Biểu đồ thể hiện các điểm dữ liệu tọa độ của hai biến số để khảo sát mối tương quan."
          },
          {
            "term": "Đường xu hướng (Trendline)",
            "definition": "Đường kẻ biểu diễn xu hướng biến thiên tổng thể của dữ liệu trên biểu đồ."
          }
        ],
        "example": {
          "title": "Ước tính lợi nhuận tháng 12",
          "content": "Nạp biểu đồ phân tán lợi nhuận 11 tháng có Trendline đi lên: AI đọc độ dốc đường xu hướng và ước tính doanh thu tháng 12 đạt 150 triệu đồng."
        },
        "pitfalls": [
          "Nạp hình ảnh biểu đồ bị mờ hoặc bị cắt mất phần chú thích các trục tọa độ X và Y."
        ],
        "check": {
          "question": "Thành phần nào trên biểu đồ phân tán giúp AI ước tính xu hướng biến thiên và ngoại suy giá trị tương lai của một chỉ số?",
          "options": [
            "Đường xu hướng (Trend line)",
            "Màu sắc khung viền biểu đồ",
            "Phông chữ tiêu đề",
            "Kích thước tệp tin ảnh"
          ],
          "answer": 0,
          "explanation": "Đường xu hướng (Trendline) tổng hợp chiều hướng chuyển động của dữ liệu, giúp AI nhận định tương quan và ngoại suy giá trị."
        },
        "takeaway": "Dùng đường xu hướng (Trendline) trên biểu đồ để AI phân tích và ước tính chuẩn xác."
      },
      {
        "label": "Prompt Ảnh (Phần 1)",
        "title": "Thiết kế Prompt Hình ảnh: Chủ thể & Phong cách",
        "summary": "Xây dựng prompt tạo ảnh chuyên nghiệp bằng cách mô tả chi tiết Chủ thể, Môi trường bối cảnh và Phong cách nghệ thuật (Art Style).",
        "bullets": [
          "Chủ thể trọng tâm (Subject): Mô tả rõ con người, động vật, đồ vật (ví dụ: 'chú chó cứu hộ tại trại động vật', 'máy cắt cỏ điện').",
          "Môi trường & Bối cảnh (Setting): Không gian xung quanh, thời tiết, địa điểm (ví dụ: 'trong khu vườn xanh ngắt đầy hoa rực rỡ và ong').",
          "Phong cách nghệ thuật (Art Style): Đồ họa phẳng tối giản (flat vector minimalist), tranh màu nước, ảnh chụp chân dung thực tế 35mm, render 3D."
        ],
        "terms": [
          {
            "term": "Chủ thể (Subject)",
            "definition": "Đối tượng chính xuất hiện trong bức ảnh do AI vẽ."
          },
          {
            "term": "Phong cách nghệ thuật (Art Style)",
            "definition": "Ngôn ngữ thị giác định hình phong cách của bức ảnh (vector, tranh sơn dầu, ảnh chụp thực tế)."
          }
        ],
        "example": {
          "title": "Logo dịch vụ cắt cỏ",
          "content": "'Logo vector phẳng tối giản, máy cắt cỏ điện ở giữa một khu vườn xanh có hoa rực rỡ và ong, phong cách hiện đại, nền trong suốt.'"
        },
        "pitfalls": [
          "Nhập câu lệnh chung chung 'Vẽ cho tôi một bức tranh đẹp' mà không nêu chủ thể và phong cách cụ thể."
        ],
        "check": {
          "question": "Yếu tố nào trong câu lệnh tạo ảnh giúp AI hiểu rằng bạn muốn một biểu tượng đồ họa phẳng thay vì một bức ảnh chụp phong cảnh ngoài đời thực?",
          "options": [
            "Chỉ định phong cách nghệ thuật (Art Style) như 'flat vector minimalist logo'",
            "Nhập độ phân giải màn hình máy tính",
            "Yêu cầu tạo ảnh trong 1 giây",
            "Gõ câu lệnh bằng tiếng Latinh"
          ],
          "answer": 0,
          "explanation": "Chỉ định phong cách nghệ thuật (Art Style) là yếu tố quyết định ngôn ngữ hình ảnh (đồ họa phẳng hay ảnh chụp)."
        },
        "takeaway": "Chủ thể rõ nét + Bối cảnh cụ thể + Phong cách nghệ thuật chuẩn = Bức ảnh hoàn hảo."
      },
      {
        "label": "Prompt Ảnh (Phần 2)",
        "title": "Ánh sáng, Bố cục & Negative Prompt",
        "summary": "Tinh chỉnh độ chuyên nghiệp của hình ảnh bằng cách thiết lập nguồn sáng, góc máy, tỷ lệ khung hình và câu lệnh phủ định (Negative Prompt).",
        "bullets": [
          "Ánh sáng (Lighting): Ánh sáng giờ vàng (golden hour), ánh sáng điện ảnh (cinematic lighting), ánh sáng trường quay mềm (soft studio lighting).",
          "Bố cục & Góc máy (Camera Angle): Chụp cận cảnh (close-up), góc rộng (wide angle), góc nhìn flycam từ trên cao (top-down view).",
          "Tỷ lệ khung hình (Aspect Ratio): Chỉ định rõ tỷ lệ ngang (--ar 16:9) cho video/màn hình hoặc tỷ lệ dọc (--ar 9:16) cho bài đăng điện thoại.",
          "Câu lệnh phủ định (Negative Prompt): Liệt kê các chi tiết cấm xuất hiện: 'no text, no blurry, no extra limbs, no watermark'."
        ],
        "terms": [
          {
            "term": "Negative Prompt (Câu lệnh phủ định)",
            "definition": "Danh sách các chi tiết hoặc lỗi mà người dùng yêu cầu AI tuyệt đối không vẽ vào ảnh."
          },
          {
            "term": "Tỷ lệ khung hình (Aspect Ratio)",
            "definition": "Tỷ lệ giữa chiều rộng và chiều cao của bức ảnh."
          }
        ],
        "example": {
          "title": "Áp phích thú cưng chất lượng cao",
          "content": "'Áp phích Nhớ bạn cho chú chó cứu hộ, chụp cận cảnh, ánh sáng studio mềm mại, tỷ lệ 16:9, phong cách chân thực. Negative: no blurry, no text, no distorted paws.'"
        },
        "pitfalls": [
          "Quên thiết lập tỷ lệ khung hình khiến ảnh bị mặc định hình vuông 1:1 không vừa với slide thuyết trình."
        ],
        "check": {
          "question": "Tính năng nào trong các công cụ tạo ảnh AI cho phép người dùng chỉ định những chi tiết KHÔNG ĐƯỢC PHÉP xuất hiện trong bức ảnh?",
          "options": [
            "Negative Prompt (Câu lệnh phủ định)",
            "Zero-shot Prompting",
            "Mã hóa Token",
            "Khử nhiễu Denoising"
          ],
          "answer": 0,
          "explanation": "Negative Prompt là nơi người dùng liệt kê các yếu tố không mong muốn (như chữ viết, mờ nhòe, dị vật) để AI loại trừ."
        },
        "takeaway": "Kiểm soát ánh sáng, góc máy và dùng Negative Prompt để loại bỏ tạp âm hình ảnh."
      },
      {
        "label": "Chỉnh sửa ảnh nâng cao",
        "title": "Inpainting vs Outpainting",
        "summary": "Hai kỹ thuật chỉnh sửa ảnh nâng cao: Inpainting để sửa bên trong vùng chọn; Outpainting để mở rộng khung cảnh ra bên ngoài.",
        "bullets": [
          "Inpainting: Khoanh vùng một chi tiết bên trong bức ảnh để xóa bỏ hoặc thay thế bằng chi tiết mới mà không làm thay đổi các phần còn lại (ví dụ: xóa người mặc áo len xanh lá sáng trong clip hoặc thay đổi màu xe).",
          "Outpainting: Mở rộng ranh giới khung hình ra bên ngoài bức ảnh gốc, để AI tự vẽ thêm cảnh quan xung quanh liền mạch và đồng nhất phong cách (ví dụ: thêm ngôi nhà vào bên cạnh ngọn núi trong ảnh phong cảnh).",
          "Bảo toàn bối cảnh: Cả hai kỹ thuật đều giữ nguyên độ phân giải và ánh sáng của vùng ảnh gốc."
        ],
        "terms": [
          {
            "term": "Inpainting",
            "definition": "Kỹ thuật chỉnh sửa, thay thế hoặc xóa một vùng chọn cụ thể bên trong bức ảnh."
          },
          {
            "term": "Outpainting",
            "definition": "Kỹ thuật mở rộng khung hình và vẽ thêm nội dung mới ra bên ngoài bức ảnh gốc."
          }
        ],
        "example": {
          "title": "Phân biệt tình huống",
          "content": "Xóa chiếc xe cũ nằm trong sân nhà: Dùng Inpainting. Mở rộng bức ảnh chụp khu vườn để thấy thêm cả cánh đồng phía sau: Dùng Outpainting."
        },
        "pitfalls": [
          "Dùng Outpainting khi mục tiêu thực sự là muốn thay đổi một chi tiết nhỏ nằm bên trong bức ảnh."
        ],
        "check": {
          "question": "Kỹ thuật chỉnh sửa ảnh nào cho phép bạn khoanh vùng một chiếc ghế sofa cũ bên trong bức ảnh phòng khách để thay bằng một chiếc ghế sofa mới?",
          "options": [
            "Inpainting",
            "Outpainting",
            "Zero-shot",
            "Data Scraping"
          ],
          "answer": 0,
          "explanation": "Inpainting cho phép khoanh vùng và chỉnh sửa chi tiết bên trong bức ảnh mà không làm ảnh hưởng đến vùng xung quanh."
        },
        "takeaway": "Inpainting để sửa bên trong; Outpainting để mở rộng ra ngoài."
      },
      {
        "label": "Hoạt ảnh & Video",
        "title": "Image-to-Video & Khớp khẩu hình Avatar",
        "summary": "Biến ảnh tĩnh thành video với các lệnh chuyển động camera và tạo hoạt ảnh nhân vật ảo nói khớp khẩu hình (Lip-sync).",
        "bullets": [
          "Image-to-Video: Sử dụng các động từ chuyển động: lia máy sang phải (pan right), phóng to cận cảnh (zoom in), chuyển động chậm (slow motion) cho sản phẩm (ví dụ: video đánh giá máy đánh trứng Healthy Eats).",
          "Khớp khẩu hình (Lip-sync): Đồng bộ cử động môi và biểu cảm khuôn mặt của nhân vật hoạt hình (ví dụ: hình đại diện chú khỉ) khớp chính xác với file âm thanh lời thoại.",
          "Ứng dụng quảng cáo: Tạo video giới thiệu sản phẩm và video bài giảng sinh động mà không cần quay phim thực tế."
        ],
        "terms": [
          {
            "term": "Lia máy (Camera Panning)",
            "definition": "Kỹ thuật di chuyển góc quay camera theo phương ngang trong video."
          },
          {
            "term": "Khớp khẩu hình (Lip-sync)",
            "definition": "Kỹ thuật đồng bộ cử động môi của nhân vật khớp với âm thanh lời nói."
          }
        ],
        "example": {
          "title": "Video đánh giá sản phẩm",
          "content": "Nạp ảnh máy đánh trứng mới: 'Quay cận cảnh que đánh trứng đang quay êm ái trong bát bột, ánh sáng ấm áp, lia máy từ trái sang phải, tỷ lệ 16:9.'"
        },
        "pitfalls": [
          "Quên mô tả hướng chuyển động của camera khiến video AI tạo ra bị đứng im hoặc chuyển động hỗn loạn."
        ],
        "check": {
          "question": "Công nghệ nào giúp tạo hoạt ảnh cho một hình đại diện chú khỉ hoạt hình cử động môi và nói chuyện khớp với kịch bản âm thanh có sẵn?",
          "options": [
            "Đồng bộ khẩu hình avatar (Lip-syncing)",
            "Mã hóa Token tĩnh",
            "Zero-shot Prompting",
            "Tạo bảng Markdown"
          ],
          "answer": 0,
          "explanation": "Lip-syncing là kỹ thuật đồng bộ cử động môi của nhân vật đại diện khớp hoàn toàn với file âm thanh lời thoại."
        },
        "takeaway": "Dùng từ ngữ chuyển động camera để tạo video và dùng Lip-sync để thổi hồn vào nhân vật đại diện."
      }
    ]
  },
  "verification": {
    "description": "Nắm vững nguyên tắc xác minh độc lập, đối chiếu chéo nguồn tin thẩm quyền, nhận diện và loại bỏ ảo giác (Hallucination), tinh chỉnh lặp và checklist kiểm định 5 bước.",
    "slides": [
      {
        "label": "Nguyên tắc vàng",
        "title": "Nguyên tắc Xác minh độc lập",
        "summary": "Tuyệt đối không bao giờ dùng chính hệ thống AI để xác minh tính chính xác của dữ kiện do nó tạo ra; kiểm chứng bắt buộc phải đến từ nguồn bên ngoài.",
        "bullets": [
          "Nguyên tắc cốt lõi: Mọi số liệu, ngày tháng, tên tuổi và sự kiện do AI đưa ra phải được đối chiếu với tài liệu gốc bên ngoài mô hình.",
          "AI không phải nguồn chân lý: AI là mô hình dự đoán từ theo xác suất thống kê, không có cơ chế tự kiểm tra sự thật nội tại.",
          "Trách nhiệm cuối cùng: Người sử dụng chịu toàn bộ trách nhiệm kiểm tra tính chân thực trước khi đưa kết quả vào công việc thực tế."
        ],
        "terms": [
          {
            "term": "Xác minh độc lập (Independent Verification)",
            "definition": "Quy trình kiểm chứng tính đúng đắn của dữ liệu bằng các nguồn tài liệu nằm ngoài hệ thống AI đang sử dụng."
          }
        ],
        "example": {
          "title": "Xác minh số liệu dân số",
          "content": "AI đưa ra con số dân số một thành phố: Bạn phải mở website Tổng cục Thống kê để tra cứu đối chiếu, không phải hỏi lại chatbot đó."
        },
        "pitfalls": [
          "Tin tưởng ngay câu trả lời của AI chỉ vì văn phong nghe rất tự tin, mạch lạc và có vẻ uyên bác."
        ],
        "check": {
          "question": "Quy tắc quan trọng nhất khi kiểm chứng tính chính xác của các dữ kiện lịch sử hoặc số liệu do AI cung cấp là gì?",
          "options": [
            "Bắt buộc đối chiếu với các nguồn tài liệu tin cậy độc lập bên ngoài hệ thống AI",
            "Hỏi lại chính chatbot đó 3 lần",
            "Tin tưởng tuyệt đối nếu câu trả lời không có lỗi chính tả",
            "Chỉ sử dụng AI vào buổi sáng"
          ],
          "answer": 0,
          "explanation": "Kiểm chứng độc lập từ các nguồn dữ liệu bên ngoài là nguyên tắc bất di bất dịch để bảo đảm tính chính xác."
        },
        "takeaway": "Kiểm chứng phải đến từ nguồn độc lập bên ngoài; không dùng AI để kiểm tra AI."
      },
      {
        "label": "Bẫy tự xác nhận",
        "title": "Bẫy tự xác nhận (Self-Confirmation)",
        "summary": "Chạy lại cùng một câu lệnh nhiều lần hoặc hỏi 'AI có chắc không' không chứng minh câu trả lời đúng; AI có thể tự tin lặp lại cùng một sai lầm.",
        "bullets": [
          "Ảo tưởng lặp lại: Nếu mô hình có xu hướng tính toán xác suất nghiêng về một thông tin sai, nó sẽ lặp lại thông tin sai đó ở mọi lần chạy.",
          "Hỏi 'Bạn có chắc chắn không?': Chỉ khiến AI tiếp tục tính toán chuỗi ngôn ngữ xã giao ('Tôi hoàn toàn chắc chắn') chứ không tạo ra bằng chứng thực tế mới.",
          "Lãng phí thời gian: Việc chạy đi chạy lại một prompt không thay thế được 30 giây tra cứu sách báo chính thống."
        ],
        "terms": [
          {
            "term": "Bẫy tự xác nhận (Self-Confirmation Fallacy)",
            "definition": "Sai lầm khi tin rằng việc AI lặp lại câu trả lời nhiều lần đồng nghĩa với việc thông tin đó là sự thật khách quan."
          }
        ],
        "example": {
          "title": "Hỏi lại AI",
          "content": "Bạn hỏi AI: 'Ai là tổng thống thứ 100 của Mỹ?' -> AI bịa ra một cái tên -> Bạn hỏi 'Chắc không?' -> AI trả lời 'Tôi chắc chắn 100%' -> Đây là sự tự tin mù quáng của mô hình xác suất."
        },
        "pitfalls": [
          "Chạy prompt 3 lần thấy ra kết quả y hệt nhau liền vội vàng kết luận thông tin là chính xác 100%."
        ],
        "check": {
          "question": "Hành động nào sau đây KHÔNG PHẢI là phương pháp hợp lệ để kiểm chứng tính đúng đắn của dữ liệu do AI tạo ra?",
          "options": [
            "Chạy lại cùng một câu lệnh 3 lần trên cùng một chatbot và kiểm tra xem kết quả có giống nhau không",
            "Tra cứu số liệu trên niên giám thống kê chính thức",
            "Đối chiếu với bài báo khoa học có bình duyệt",
            "Hỏi ý kiến của chuyên gia đầu ngành"
          ],
          "answer": 0,
          "explanation": "Chạy lại cùng một prompt chỉ kiểm tra tính tất định của thuật toán, không chứng minh được tính đúng đắn của dữ kiện trong thực tế."
        },
        "takeaway": "Lặp lại nhiều lần không biến điều sai thành sự thật; hãy mở nguồn tài liệu gốc để kiểm chứng."
      },
      {
        "label": "Nguồn thẩm quyền",
        "title": "Đối chiếu chéo với Dữ liệu Nhà nước",
        "summary": "Đối chiếu chéo (Cross-referencing) số liệu của AI với các cơ sở dữ liệu quốc gia chính thức, Tổng điều tra dân số và báo cáo chính phủ.",
        "bullets": [
          "Dữ liệu Tổng điều tra dân số (Census Data): Nguồn chuẩn mực nhất để xác thực quy mô dân số, cơ cấu độ tuổi, tỷ lệ đô thị hóa.",
          "Cổng thông tin bộ ngành & Chính phủ: Dùng để xác thực các văn bản pháp luật, quy chuẩn xây dựng, thông tư thuế và số liệu xuất nhập khẩu.",
          "Báo cáo tổ chức quốc tế: Dữ liệu của Ngân hàng Thế giới (World Bank), Liên Hợp Quốc (UN), Quỹ Tiền tệ Quốc tế (IMF)."
        ],
        "terms": [
          {
            "term": "Đối chiếu chéo (Cross-referencing)",
            "definition": "Phương pháp so sánh dữ liệu từ nhiều nguồn độc lập khác nhau để thẩm định tính chân thực."
          },
          {
            "term": "Tổng điều tra dân số (Census Data)",
            "definition": "Dữ liệu thống kê quy mô dân số và nhân khẩu học chính thức do cơ quan nhà nước thực hiện."
          }
        ],
        "example": {
          "title": "Kiểm tra số liệu dân số thành phố",
          "content": "AI đưa ra báo cáo dân số tỉnh A năm 2025: Mở Cổng thông tin Tổng cục Thống kê để đối chiếu số liệu chính xác từng quận huyện."
        },
        "pitfalls": [
          "Dùng số liệu trên các bài đăng mạng xã hội không rõ nguồn gốc để đối chiếu chéo số liệu AI."
        ],
        "check": {
          "question": "Nguồn tài liệu nào sau đây là thẩm quyền và chuẩn xác nhất để kiểm chứng số liệu nhân khẩu học và dân số do AI đưa ra?",
          "options": [
            "Dữ liệu Tổng điều tra dân số (Census Data) của cơ quan thống kê quốc gia",
            "Diễn đàn mạng xã hội ẩn danh",
            "Blog cá nhân chưa được kiểm duyệt",
            "Một chatbot AI khác"
          ],
          "answer": 0,
          "explanation": "Dữ liệu Tổng điều tra dân số chính thức là nguồn tham chiếu chuẩn mực và có giá trị pháp lý cao nhất."
        },
        "takeaway": "Ưu tiên dữ liệu Tổng điều tra dân số và báo cáo chính phủ làm mốc tham chiếu chuẩn mực."
      },
      {
        "label": "Nguồn học thuật",
        "title": "Nguồn học thuật & Trang Fact-checking",
        "summary": "Sử dụng cơ sở dữ liệu học thuật có bình duyệt (Peer-reviewed) và các tổ chức kiểm chứng tin tức độc lập để xác minh thông tin chuyên sâu.",
        "bullets": [
          "Cơ sở dữ liệu học thuật bình duyệt: Google Scholar, PubMed (y khoa), IEEE Xplore (kỹ thuật), JSTOR (xã hội nhân văn).",
          "Tổ chức kiểm chứng dữ kiện (Fact-checking): Snopes, Reuters Fact Check, AP Fact Check chuyên điều tra các tin đồn và tuyên bố sai sự thật.",
          "Kiểm tra ngày xuất bản: Đảm bảo nghiên cứu học thuật tham chiếu vẫn còn giá trị áp dụng và chưa bị thay thế bởi các công trình mới hơn."
        ],
        "terms": [
          {
            "term": "Bình duyệt (Peer-reviewed)",
            "definition": "Quy trình thẩm định khắt khe bởi hội đồng các nhà khoa học độc lập trước khi bài báo được xuất bản."
          },
          {
            "term": "Tổ chức Fact-checking",
            "definition": "Tổ chức độc lập chuyên điều tra và xác minh tính chân thực của các thông tin công khai."
          }
        ],
        "example": {
          "title": "Ôn tập thi lịch sử thế giới",
          "content": "Sử dụng AI để ôn thi lịch sử: Bắt buộc tra cứu cơ sở dữ liệu học thuật và các trang fact-checking uy tín để đối chiếu các mốc thời gian và sự kiện."
        },
        "pitfalls": [
          "Tin vào một bài báo khoa học mà không kiểm tra xem tạp chí đó có uy tín và được bình duyệt hay không."
        ],
        "check": {
          "question": "Hai nguồn dữ liệu nào sau đây giúp một nhà nghiên cứu xác thực tốt nhất các dữ kiện khoa học do AI cung cấp?",
          "options": [
            "Cơ sở dữ liệu học thuật có bình duyệt và các trang kiểm tra dữ kiện (Fact-checking) uy tín",
            "Các video ngắn giải trí trên mạng xã hội",
            "Các trang web quảng cáo sản phẩm",
            "Phần bình luận của các diễn đàn game"
          ],
          "answer": 0,
          "explanation": "Cơ sở dữ liệu học thuật bình duyệt và các trang fact-checking là những nguồn bằng chứng khoa học vững chắc nhất."
        },
        "takeaway": "Dữ liệu bình duyệt + Trang Fact-checking = Lá chắn bảo vệ sự thật khoa học."
      },
      {
        "label": "Tham vấn con người",
        "title": "Tham vấn Chuyên gia có Thẩm quyền",
        "summary": "Trao đổi và tham vấn trực tiếp với các giáo sư, bác sĩ, kỹ sư hoặc chuyên gia đầu ngành là chốt chặn xác thực cao nhất.",
        "bullets": [
          "Giá trị của kinh nghiệm thực tế: Chuyên gia có khả năng nhận biết ngay những lỗi sai phi thực tế mà tài liệu viết có thể chưa cập nhật.",
          "Đánh giá tính khả thi: Chuyên gia thẩm định xem các giải pháp kỹ thuật do AI đề xuất có thực sự thi công hoặc áp dụng được trên thực địa hay không.",
          "Xử lý các tình huống nhạy cảm: Các quyết định y khoa, bản án pháp lý và chính sách công bắt buộc phải có sự đánh giá của hội đồng chuyên môn."
        ],
        "terms": [
          {
            "term": "Tham vấn chuyên gia (Expert Consultation)",
            "definition": "Quá trình trao đổi với người có chuyên môn sâu trong ngành để đánh giá và thẩm định thông tin."
          }
        ],
        "example": {
          "title": "Thẩm định phác đồ điều trị",
          "content": "Bác sĩ sử dụng AI để tổng hợp tài liệu nghiên cứu mới, nhưng phác đồ điều trị thực tế cho bệnh nhân bắt buộc phải được hội đồng bác sĩ chuyên khoa phê duyệt."
        },
        "pitfalls": [
          "Bỏ qua bước hỏi ý kiến chuyên gia và tự ý áp dụng các hướng dẫn kỹ thuật phức tạp của AI vào thực tế."
        ],
        "check": {
          "question": "Khi nghiên cứu một đề tài lịch sử phức tạp bằng AI, hành động nào sau đây mang lại độ tin cậy cao nhất cho bài nghiên cứu?",
          "options": [
            "Đối chiếu kết quả với tài liệu gốc và tham vấn ý kiến của chuyên gia sử học",
            "Tự suy đoán đáp án theo cảm tính cá nhân",
            "Đăng câu hỏi lên nhóm mạng xã hội để bình chọn",
            "Chạy lại câu lệnh 10 lần"
          ],
          "answer": 0,
          "explanation": "Đối chiếu tài liệu gốc kết hợp tham vấn chuyên gia là phương pháp xác thực chuẩn mực và đáng tin cậy nhất."
        },
        "takeaway": "Tham vấn chuyên gia là chốt chặn an toàn và uy tín nhất cho các dự án quan trọng."
      },
      {
        "label": "Bản chất ảo giác",
        "title": "AI Hallucination (Ảo giác) là gì?",
        "summary": "Ảo giác (Hallucination) là hiện tượng mô hình AI tự tạo ra thông tin hoàn toàn sai sự thật hoặc bịa đặt nhưng trình bày với văn phong cực kỳ tự tin.",
        "bullets": [
          "Bản chất xác suất: Mô hình ghép các từ ngữ có vẻ hợp lý nhất theo quy luật thống kê chứ không tra cứu cơ sở dữ liệu sự thật khách quan.",
          "Độ trôi chảy đánh lừa người dùng: Câu văn được viết rất mượt mà, đúng ngữ pháp, lập luận chặt chẽ khiến người đọc dễ mất cảnh giác.",
          "Phạm vi xuất hiện: Xảy ra ở mọi lĩnh vực từ số liệu khoa học, tên tác giả bài báo, sự kiện lịch sử đến điều khoản luật pháp."
        ],
        "terms": [
          {
            "term": "Ảo giác AI (Hallucination)",
            "definition": "Hiện tượng mô hình AI tạo ra thông tin sai lệch, bịa đặt hoặc phi thực tế nhưng được trình bày với giọng văn tự tin và thuyết phục."
          }
        ],
        "example": {
          "title": "Ảo giác số liệu",
          "content": "AI tuyên bố: 'Theo nghiên cứu năm 2024 của Đại học Oxford, 87.4% người uống trà sống thọ trên 100 tuổi' -> Con số 87.4% và nghiên cứu này hoàn toàn do AI tự bịa ra."
        },
        "pitfalls": [
          "Tin tưởng rằng một câu văn viết hay và trôi chảy thì chắc chắn nội dung bên trong phải đúng sự thật."
        ],
        "check": {
          "question": "Thuật ngữ kỹ thuật nào chỉ hiện tượng mô hình AI tự bịa ra các dữ kiện hoặc thông tin sai lệch nhưng trình bày với giọng văn vô cùng tự tin?",
          "options": [
            "Ảo giác (Hallucination)",
            "Che dấu dữ liệu tĩnh (Static Data Masking)",
            "Tokenization",
            "Tăng tốc phần cứng GPU"
          ],
          "answer": 0,
          "explanation": "Ảo giác (Hallucination) là thuật ngữ chỉ việc AI tự tạo ra các thông tin sai sự thật hoặc trích dẫn bịa đặt."
        },
        "takeaway": "Văn phong tự tin không chứng minh sự thật; luôn cảnh giác trước hiện tượng ảo giác AI."
      },
      {
        "label": "Dấu hiệu ảo giác",
        "title": "Dấu hiệu nhận diện Trích dẫn & Án lệ Giả",
        "summary": "Học cách phát hiện các dấu hiệu ảo giác đặc trưng: Mã số DOI giả mạo, đường link URL không tồn tại và các án lệ luật pháp bịa đặt.",
        "bullets": [
          "Trích dẫn bài báo khoa học giả: AI bịa ra tên tác giả nổi tiếng ghép với tên bài báo nghe rất kêu, nhưng mã DOI hoặc đường link bấm vào báo lỗi 404.",
          "Bịa đặt án lệ luật pháp: Tự tạo ra tên các vụ tranh chấp, số hiệu hồ sơ tòa án và tên thẩm phán không hề có trong thực tế (rủi ro cực lớn cho ngành luật).",
          "Cách phòng ngừa: Luôn copy mã DOI hoặc số hiệu án lệ và tra cứu trực tiếp trên hệ thống thư viện hoặc cổng tòa án."
        ],
        "terms": [
          {
            "term": "Trích dẫn giả (Fabricated Citation)",
            "definition": "Tài liệu tham khảo, đường link hoặc mã định danh DOI do AI tự tạo ra mà không có thật."
          },
          {
            "term": "Mã định danh số (DOI - Digital Object Identifier)",
            "definition": "Chuỗi ký tự duy nhất dùng để định danh vĩnh viễn một bài báo khoa học trên Internet."
          }
        ],
        "example": {
          "title": "Bài học từ luật sư",
          "content": "Một thực tập sinh công ty luật nộp đơn kiện có 3 án lệ do AI trích dẫn -> Ra tòa phát hiện cả 3 án lệ đều không tồn tại -> Tòa án xử phạt luật sư vì vi phạm liêm chính nghề nghiệp."
        },
        "pitfalls": [
          "Sao chép nguyên văn danh mục tài liệu tham khảo do AI tạo ra vào bài luận mà không mở kiểm tra từng liên kết."
        ],
        "check": {
          "question": "Dấu hiệu nhận diện điển hình nhất của một tài liệu tham khảo khoa học bị ảo giác (Hallucination) do AI tạo ra là gì?",
          "options": [
            "Tên bài báo và tác giả nghe rất thuyết phục nhưng mã DOI hoặc đường link tra cứu không hề tồn tại trong thực tế",
            "Tài liệu được viết bằng tiếng Anh",
            "Tài liệu có độ dài dưới 1 trang",
            "Tài liệu có ngày xuất bản trong quá khứ"
          ],
          "answer": 0,
          "explanation": "Trích dẫn giả thường có tên nghe rất khoa học nhưng mã định danh DOI hoặc liên kết hoàn toàn không tồn tại."
        },
        "takeaway": "Mọi trích dẫn khoa học và điều luật do AI tạo ra bắt buộc phải được mở kiểm tra thực tế."
      },
      {
        "label": "Chống ảo giác (1)",
        "title": "Kỹ thuật Grounding & Trích dẫn Nguồn",
        "summary": "Kỹ thuật hiệu quả hàng đầu để triệt tiêu ảo giác: Buộc mô hình bám sát tài liệu nguồn và trích dẫn bằng chứng trực tiếp.",
        "bullets": [
          "Cung cấp tài liệu xác thực: Tải lên tệp PDF, bảng Excel, tệp XML hoặc đoạn văn bản gốc kèm câu lệnh.",
          "Yêu cầu trích dẫn nguyên văn: Ra lệnh cho AI: 'Với mỗi nhận định, hãy trích dẫn chính xác số dòng hoặc đoạn văn gốc trong tài liệu làm bằng chứng'.",
          "Hạn chế tri thức bên ngoài: Yêu cầu AI không được tự ý sử dụng các kiến thức phỏng đoán nằm ngoài tài liệu đã cho."
        ],
        "terms": [
          {
            "term": "Neo dữ liệu (Grounding)",
            "definition": "Kỹ thuật giới hạn không gian trả lời của mô hình vào một tài liệu xác thực được cung cấp."
          }
        ],
        "example": {
          "title": "Tóm tắt hợp đồng kinh tế",
          "content": "'Đọc hợp đồng đính kèm. Trích xuất điều khoản phạt vi phạm hợp đồng và ghi rõ số trang, số điều khoản chứa quy định đó.'"
        },
        "pitfalls": [
          "Hỏi câu hỏi mở về một tài liệu nội bộ mà không đính kèm tệp tài liệu đó vào phiên làm việc."
        ],
        "check": {
          "question": "Kỹ thuật nào sau đây giúp loại bỏ ảo giác tốt nhất khi cần AI phân tích điều khoản hợp đồng của công ty?",
          "options": [
            "Đính kèm tệp hợp đồng (Grounding) và yêu cầu AI trích dẫn số trang/điều khoản cụ thể làm bằng chứng",
            "Yêu cầu AI đoán xem hợp đồng nói về điều gì",
            "Tăng tham số nhiệt độ Temperature lên mức cao nhất",
            "Chạy câu lệnh nhiều lần liên tiếp"
          ],
          "answer": 0,
          "explanation": "Grounding vào hợp đồng gốc và yêu cầu trích dẫn bằng chứng cụ thể giúp triệt tiêu việc tự suy đoán bịa đặt."
        },
        "takeaway": "Neo dữ liệu vào tài liệu nguồn và bắt buộc trích dẫn số trang để diệt trừ ảo giác."
      },
      {
        "label": "Chống ảo giác (2)",
        "title": "Hạ Nhiệt độ & Ràng buộc 'Nói không biết'",
        "summary": "Thiết lập tham số kỹ thuật và câu lệnh ràng buộc nghiêm ngặt để mô hình từ chối suy đoán khi thiếu dữ kiện.",
        "bullets": [
          "Thiết lập Temperature = 0: Ép mô hình chọn các từ có xác suất thống kê cao nhất, triệt tiêu tính sáng tạo bay bổng ngẫu nhiên.",
          "Ràng buộc 'Nói không biết': 'Nếu tài liệu không đề cập đến thông tin này, bạn bắt buộc phải trả lời Tôi không tìm thấy thông tin trong tài liệu'.",
          "Cấm tuyệt đối việc tự ngoại suy: Thêm quy tắc: 'Tuyệt đối không được tự suy đoán hoặc điền thêm các số liệu không có trong văn bản'."
        ],
        "terms": [
          {
            "term": "Nhiệt độ bằng 0 (Zero Temperature)",
            "definition": "Thiết lập giúp mô hình hoạt động ở trạng thái tất định cao nhất, giảm thiểu tối đa tính ngẫu nhiên."
          },
          {
            "term": "Ràng buộc từ chối (Explicit Refusal Constraint)",
            "definition": "Chỉ thị cho phép AI thừa nhận thiếu thông tin thay vì cố gắng tự bịa câu trả lời."
          }
        ],
        "example": {
          "title": "Báo cáo kiểm toán",
          "content": "'Với vai trò kiểm toán viên (Temperature=0), hãy đọc bảng cân đối kế toán. Với các chỉ số không xuất hiện, ghi rõ Không có dữ liệu, cấm tự ước tính.'"
        },
        "pitfalls": [
          "Ép AI phải trả lời bằng mọi giá khiến mô hình bị buộc phải bịa ra thông tin khi không tìm thấy dữ liệu."
        ],
        "check": {
          "question": "Khi xử lý các tài liệu kế toán và tài chính đòi hỏi độ chính xác tuyệt đối, bạn nên thiết lập câu lệnh như thế nào?",
          "options": [
            "Đặt Temperature = 0 và quy định rõ: Nếu thiếu dữ kiện phải trả lời 'Không có dữ liệu', cấm tự suy đoán",
            "Yêu cầu AI tự điền các con số ước tính",
            "Đặt Temperature = 1.5 để tăng tính sáng tạo",
            "Yêu cầu AI viết bằng thơ"
          ],
          "answer": 0,
          "explanation": "Hạ nhiệt độ và cho phép AI trả lời 'Không có dữ liệu' là quy chuẩn bắt buộc để đảm bảo an toàn số liệu tài chính."
        },
        "takeaway": "Hạ Temperature về 0 và cho phép AI nói 'Không có dữ liệu' khi thiếu thông tin."
      },
      {
        "label": "Tinh chỉnh lặp (1)",
        "title": "Phản hồi có Mục tiêu (Targeted Feedback)",
        "summary": "Quy trình Tinh chỉnh lặp (Iterative Refinement) nâng cao chất lượng kết quả qua từng lượt trao đổi bằng phản hồi cụ thể, rõ ràng.",
        "bullets": [
          "Chỉ rõ điểm chưa đạt: Nêu chính xác tiêu chí nào cần sửa (độ dài, giọng điệu, mức độ chuyên môn, định dạng hiển thị).",
          "Tránh phản hồi mơ hồ: Những câu như 'Làm lại đi', 'Chưa hay', 'Viết tốt hơn đi' không cung cấp hướng dẫn định lượng cho mô hình.",
          "Cung cấp hướng điều chỉnh: 'Hãy rút ngắn đoạn 2 xuống dưới 50 từ và thay thế các từ ngữ kỹ thuật bằng ví dụ thực tế'."
        ],
        "terms": [
          {
            "term": "Tinh chỉnh lặp (Iterative Refinement)",
            "definition": "Quy trình cải thiện từng bước kết quả của AI thông qua các lượt phản hồi và điều chỉnh có chủ đích."
          },
          {
            "term": "Phản hồi có mục tiêu (Targeted Feedback)",
            "definition": "Lời nhận xét chỉ rõ tiêu chí và vị trí cụ thể cần điều chỉnh."
          }
        ],
        "example": {
          "title": "Sửa bài viết mạng xã hội",
          "content": "Thay vì gõ 'Viết lại đi', hãy phản hồi: 'Bài viết đầy đủ thông tin nhưng giọng văn quá trang trọng. Hãy viết lại phần mở đầu với giọng văn thân thiện, hào hứng hơn.'"
        },
        "pitfalls": [
          "Xóa bỏ toàn bộ cuộc hội thoại khi AI mới chỉ làm sai một chi tiết nhỏ có thể sửa được bằng một phản hồi ngắn."
        ],
        "check": {
          "question": "Khi bài viết do AI tạo ra đã đúng nội dung nhưng phong cách quá khô khan, cách phản hồi nào sau đây mang lại hiệu quả tinh chỉnh cao nhất?",
          "options": [
            "Nêu rõ phần nội dung cần giữ nguyên và chỉ ra cụ thể phong cách giọng điệu cần điều chỉnh cho thân thiện hơn",
            "Gõ một chữ 'Sai' và bấm gửi",
            "Xóa toàn bộ ứng dụng",
            "Tắt máy tính và không dùng AI nữa"
          ],
          "answer": 0,
          "explanation": "Phản hồi có mục tiêu nêu rõ điểm giữ nguyên và điểm cần sửa giúp mô hình căn chỉnh chính xác theo kỳ vọng."
        },
        "takeaway": "Phản hồi rõ ràng + Chỉ rõ tiêu chí cần sửa = Tinh chỉnh thành công."
      },
      {
        "label": "Tinh chỉnh lặp (2)",
        "title": "Bảo toàn Phần tốt & Thêm Tiêu chí Mới",
        "summary": "Trong quá trình tinh chỉnh, luôn chỉ thị rõ ràng phần nào của kết quả trước đã đạt yêu cầu cần được giữ nguyên không đổi.",
        "bullets": [
          "Bảo toàn kết quả đạt chuẩn: Nêu rõ: 'Hãy giữ nguyên cấu trúc 3 phần và các số liệu doanh thu trong bảng ở câu trả lời trước'.",
          "Bổ sung tiêu chí hoặc ví dụ mới: 'Bổ sung thêm một cột Thời hạn hoàn thành vào bảng trên và thêm 2 hashtag ở cuối bài'.",
          "Kiểm soát sự ổn định: Ngăn chặn hiện tượng AI sửa được lỗi này nhưng lại vô tình làm hỏng các phần khác vốn đã làm rất tốt."
        ],
        "terms": [
          {
            "term": "Bảo toàn ngữ cảnh (Context Preservation)",
            "definition": "Kỹ thuật yêu cầu mô hình duy trì các phần nội dung đã được người dùng phê duyệt trong các lượt chỉnh sửa tiếp theo."
          }
        ],
        "example": {
          "title": "Tinh chỉnh bảng kế hoạch",
          "content": "'Bảng phân công công việc rất tốt. Hãy giữ nguyên danh sách nhiệm vụ và người phụ trách; chỉ thêm một cột Mức độ ưu tiên (Cao/Trung bình/Thấp) vào bên phải.'"
        },
        "pitfalls": [
          "Không nhắc AI giữ lại phần tốt khiến mô hình tự ý viết lại toàn bộ theo một cấu trúc hoàn toàn mới."
        ],
        "check": {
          "question": "Để tránh việc AI thay đổi mất các số liệu chính xác đã tạo ở lượt trước khi yêu cầu bổ sung thông tin mới, bạn nên làm gì?",
          "options": [
            "Chỉ định rõ ràng trong câu lệnh yêu cầu giữ nguyên các số liệu và cấu trúc đã đạt yêu cầu ở lượt trước",
            "Chỉ gõ câu lệnh mới mà không nhắc gì đến nội dung cũ",
            "Tải lại trang web từ đầu",
            "Yêu cầu AI viết bằng tiếng nước ngoài"
          ],
          "answer": 0,
          "explanation": "Yêu cầu giữ nguyên các phần đã đạt giúp mô hình bảo toàn kết quả tốt và chỉ tập trung sửa đúng phần cần bổ sung."
        },
        "takeaway": "Chỉ thị giữ nguyên phần đã tốt để kết quả tinh chỉnh luôn ổn định và hoàn thiện."
      },
      {
        "label": "Thời hạn dữ liệu",
        "title": "Knowledge Cutoff & Dữ liệu biến động",
        "summary": "Hiểu rõ mốc chốt dữ liệu (Knowledge Cutoff Date) và sự cần thiết của tính năng tìm kiếm web thời gian thực đối với các sự kiện hiện tại.",
        "bullets": [
          "Điểm chốt dữ liệu (Knowledge Cutoff): Mốc thời gian hoàn tất huấn luyện mô hình; AI độc lập hoàn toàn không biết các sự kiện diễn ra sau ngày này.",
          "Dữ liệu biến động nhanh (Rapidly Changing Data): Giá cổ phiếu, tỷ giá ngoại tệ, thời tiết hôm nay, kết quả bóng đá trực tiếp, tin tức nóng.",
          "Giải pháp thời gian thực: Bắt buộc sử dụng các công cụ AI có tính năng tìm kiếm web (Browse with Bing/Google) hoặc dán trực tiếp tin tức mới vào prompt."
        ],
        "terms": [
          {
            "term": "Knowledge Cutoff Date",
            "definition": "Mốc thời gian giới hạn dữ liệu huấn luyện của mô hình ngôn ngữ lớn."
          },
          {
            "term": "Dữ liệu biến động nhanh (Rapidly Changing Data)",
            "definition": "Thông tin thay đổi liên tục theo thời gian thực như giá chứng khoán, tin thời sự."
          }
        ],
        "example": {
          "title": "Hỏi về sự kiện thể thao tối qua",
          "content": "Một mô hình offline có cutoff tháng 1/2025 sẽ không thể biết ai vô địch bóng đá tháng 8/2026 nếu không được kích hoạt tính năng tìm kiếm web."
        },
        "pitfalls": [
          "Dùng một mô hình AI không kết nối Internet để tra cứu giá vàng hoặc tỷ giá USD ngày hôm nay."
        ],
        "check": {
          "question": "Tại sao một mô hình ngôn ngữ lớn độc lập (không kết nối mạng) không thể cung cấp chính xác kết quả bầu cử vừa diễn ra ngày hôm qua?",
          "options": [
            "Do mô hình bị giới hạn bởi điểm chốt dữ liệu huấn luyện (Knowledge Cutoff Date)",
            "Do mô hình chỉ hoạt động trên hệ điều hành cũ",
            "Do câu hỏi của người dùng quá ngắn",
            "Do bàn phím máy tính bị lỗi"
          ],
          "answer": 0,
          "explanation": "Mô hình độc lập không có dữ liệu về các sự kiện diễn ra sau mốc chốt dữ liệu (Knowledge Cutoff) của nó."
        },
        "takeaway": "Với thông tin thời sự và dữ liệu biến động nhanh: Luôn bật tính năng tìm kiếm thời gian thực."
      },
      {
        "label": "Thông tin thời sự",
        "title": "Xử lý Tin tức Nóng & Tìm kiếm Thời gian thực",
        "summary": "Kỹ thuật tra cứu và thẩm định tin tức thời sự bằng AI có kết nối web kết hợp kiểm tra nguồn gốc bài báo.",
        "bullets": [
          "Kích hoạt tìm kiếm web: Đảm bảo tính năng tìm kiếm (Search / Web Browsing) đã được bật trong giao diện chatbot.",
          "Kiểm tra đường link trích dẫn: Bấm trực tiếp vào các liên kết nguồn do AI đính kèm để xem bài báo gốc được đăng vào ngày nào.",
          "Thẩm định cơ quan báo chí: Đảm bảo thông tin đến từ các hãng thông tấn chính thống (Thông tấn xã, Reuters, AP) thay vì các trang tin đồn."
        ],
        "terms": [
          {
            "term": "Tìm kiếm thời gian thực (Real-time Search)",
            "definition": "Tính năng cho phép AI truy vấn Internet trực tiếp để lấy dữ liệu mới nhất tại thời điểm hỏi."
          }
        ],
        "example": {
          "title": "Tra cứu hội nghị quốc tế",
          "content": "Hỏi về hội nghị vừa bế mạc tuần trước: AI trả lời kèm 3 đường link báo chính thống; bạn mở liên kết kiểm tra ngày xuất bản để xác nhận số liệu."
        },
        "pitfalls": [
          "Tin vào bản tóm tắt tin tức thời sự của AI mà không bấm mở đường link nguồn để kiểm tra ngày tháng."
        ],
        "check": {
          "question": "Khi sử dụng chatbot AI có kết nối web để tổng hợp thông tin về một chính sách mới ban hành tuần trước, bước xác minh bắt buộc là gì?",
          "options": [
            "Bấm vào các đường link bài báo do AI trích dẫn để kiểm tra ngày xuất bản và tính chính thống của nguồn tin",
            "Chỉ đọc câu trả lời đầu tiên và tắt máy",
            "Chụp ảnh màn hình gửi cho bạn bè",
            "Đổi tên tài khoản chatbot"
          ],
          "answer": 0,
          "explanation": "Kiểm tra trực tiếp các đường link nguồn trích dẫn là cách duy nhất để đảm bảo thông tin thời sự được cập nhật đúng và chính xác."
        },
        "takeaway": "Bật tìm kiếm web và luôn mở liên kết nguồn để kiểm tra tính cập nhật của tin tức."
      },
      {
        "label": "Biểu đồ (Trục & Xu hướng)",
        "title": "Phân tích Biểu đồ: Đọc trục & Đường xu hướng",
        "summary": "Khi yêu cầu AI phân tích biểu đồ, cần kiểm tra kỹ đơn vị tính, trục tọa độ X/Y và cách mô hình ngoại suy từ đường xu hướng (Trendline).",
        "bullets": [
          "Kiểm tra đơn vị tính và trục tọa độ: Xác nhận AI đọc đúng đơn vị (triệu USD hay nghìn USD, năm hay tháng) trên trục tung và trục hoành.",
          "Phân tích tương quan: Đánh giá xem AI có nhận định đúng mối quan hệ giữa 2 biến số (tương quan thuận hay tương quan nghịch).",
          "Ước tính từ Trendline: Sử dụng đường xu hướng trung bình để dự báo giá trị tiếp theo một cách khoa học.",
          "Histogram (Biểu đồ tần suất): Thể hiện phân phối/tần suất của một biến số theo từng khoảng giá trị — khác với biểu đồ phân tán (thể hiện mối quan hệ giữa hai biến)."
        ],
        "terms": [
          {
            "term": "Trục tọa độ (Coordinate Axes)",
            "definition": "Trục X (hoành độ) và trục Y (tung độ) biểu diễn các chiều biến số và đơn vị đo lường trên biểu đồ."
          },
          {
            "term": "Ngoại suy (Extrapolation)",
            "definition": "Phương pháp ước tính giá trị tương lai nằm ngoài phạm vi các điểm dữ liệu đã quan sát dựa trên đường xu hướng."
          }
        ],
        "example": {
          "title": "Biểu đồ tiêu thụ chất béo và tim mạch",
          "content": "Nạp biểu đồ cột so sánh: Kiểm tra xem AI có đọc đúng tỷ lệ phần trăm trên trục Y và phân loại đúng các nhóm thực phẩm trên trục X hay không."
        },
        "pitfalls": [
          "Nạp hình ảnh biểu đồ bị mất nhãn trục tọa độ khiến AI suy đoán sai hoàn toàn đơn vị tính."
        ],
        "check": {
          "question": "Bước kiểm tra đầu tiên khi yêu cầu AI đọc và phân tích số liệu từ một hình ảnh biểu đồ là gì?",
          "options": [
            "Kiểm tra xem AI có đọc đúng đơn vị tính, giá trị các trục tọa độ X/Y và tiêu đề biểu đồ hay không",
            "Yêu cầu AI vẽ lại biểu đồ bằng màu hồng",
            "Tăng độ sáng màn hình lên 100%",
            "In biểu đồ ra giấy"
          ],
          "answer": 0,
          "explanation": "Đơn vị tính và giá trị các trục tọa độ là cơ sở nền tảng quyết định tính chính xác của toàn bộ phân tích số liệu."
        },
        "takeaway": "Kiểm tra đúng nhãn trục tọa độ và đơn vị tính trước khi tin vào phân tích biểu đồ của AI."
      },
      {
        "label": "Biểu đồ (Điểm ngoại lai)",
        "title": "Nhận diện Điểm ngoại lai (Outliers)",
        "summary": "Kiểm tra khả năng của AI trong việc phát hiện các điểm dữ liệu dị biệt (Outliers) lệch xa khỏi xu hướng chung trên biểu đồ phân tán.",
        "bullets": [
          "Khái niệm Điểm ngoại lai: Điểm dữ liệu có giá trị bất thường, tách rời khỏi đám đông dữ liệu hoặc nằm rất xa đường xu hướng.",
          "Nguyên nhân của Outliers: Do sai sót trong khâu thu thập ghi chép dữ liệu, hoặc do một biến cố đặc biệt bất thường xảy ra trong kỳ đó.",
          "Yêu cầu xử lý: Kiểm tra xem AI có nhận diện được điểm ngoại lai và giải thích lý do không nên để điểm dị biệt làm méo mó xu hướng chung hay không."
        ],
        "terms": [
          {
            "term": "Điểm ngoại lai (Outlier)",
            "definition": "Điểm dữ liệu có giá trị khác biệt bất thường, lệch xa khỏi phần còn lại của tập dữ liệu."
          }
        ],
        "example": {
          "title": "Phát hiện doanh thu bất thường",
          "content": "Trên biểu đồ doanh thu 12 tháng đều ở mức 100 triệu, riêng tháng 7 vọt lên 900 triệu do sự kiện đột xuất: AI nhận diện tháng 7 là điểm ngoại lai (Outlier)."
        },
        "pitfalls": [
          "Để một điểm ngoại lai cá biệt làm sai lệch toàn bộ đường xu hướng dự báo tương lai dài hạn."
        ],
        "check": {
          "question": "Thuật ngữ nào chỉ một điểm dữ liệu trên biểu đồ phân tán có giá trị khác biệt bất thường và nằm lệch xa khỏi đường xu hướng chung?",
          "options": [
            "Điểm ngoại lai (Outlier)",
            "Cửa sổ ngữ cảnh (Context Window)",
            "Mã hóa Token",
            "Lia máy quay (Panning)"
          ],
          "answer": 0,
          "explanation": "Điểm ngoại lai (Outlier) là giá trị bất thường nằm tách biệt khỏi đám đông dữ liệu trên biểu đồ."
        },
        "takeaway": "Nhận diện điểm ngoại lai (Outlier) để tránh làm sai lệch xu hướng phân tích tổng thể."
      },
      {
        "label": "Sai lệch mô hình (1)",
        "title": "Sai lệch do Tiền xử lý & Tokenizer",
        "summary": "Nguyên nhân vì sao các mô hình AI khác nhau lại đưa ra câu trả lời và mức độ thiên lệch khác nhau: Sự khác biệt về xử lý dữ liệu thô.",
        "bullets": [
          "Kỹ thuật tiền xử lý (Preprocessing): Mỗi công ty áp dụng các thuật toán lọc tạp âm, loại bỏ từ cấm và làm sạch dữ liệu theo tiêu chuẩn riêng.",
          "Bộ tách từ (Tokenizer): Cách chia từ và mã hóa token khác nhau dẫn đến cách mô hình hiểu ngữ nghĩa và trọng số từ vựng khác nhau.",
          "Nguồn dữ liệu huấn luyện: Một mô hình được học chủ yếu từ báo chí học thuật sẽ trả lời khác với mô hình được học từ mạng xã hội Reddit."
        ],
        "terms": [
          {
            "term": "Tokenizer (Bộ tách từ)",
            "definition": "Thuật toán chuyển đổi văn bản chữ viết thành các mã token số học theo từ điển riêng của mô hình."
          },
          {
            "term": "Tập dữ liệu huấn luyện (Training Set)",
            "definition": "Toàn bộ kho dữ liệu được sử dụng để dạy cho mô hình AI trong giai đoạn ban đầu."
          }
        ],
        "example": {
          "title": "Khác biệt câu trả lời",
          "content": "Cùng một câu hỏi về kinh tế: Chatbot A (huấn luyện từ báo tài chính) trả lời bằng số liệu vĩ mô; Chatbot B (huấn luyện từ mạng xã hội) trả lời bằng góc nhìn dân sinh."
        },
        "pitfalls": [
          "Cho rằng mọi mô hình AI trên thị trường đều được huấn luyện trên cùng một kho dữ liệu giống hệt nhau."
        ],
        "check": {
          "question": "Yếu tố kỹ thuật nào ở khâu chuẩn bị dữ liệu là nguyên nhân chính khiến hai mô hình AI khác nhau có phong cách trả lời khác nhau?",
          "options": [
            "Sự khác biệt trong kỹ thuật tiền xử lý dữ liệu (Preprocessing) và bộ tách từ (Tokenizer)",
            "Màu sắc của màn hình máy tính",
            "Loại bàn phím của người dùng",
            "Thời tiết tại thời điểm gõ câu lệnh"
          ],
          "answer": 0,
          "explanation": "Khác biệt về khâu tiền xử lý, thuật toán Tokenizer và tập dữ liệu huấn luyện tạo nên đặc tính riêng biệt của từng mô hình."
        },
        "takeaway": "Dữ liệu huấn luyện và bộ Tokenizer khác nhau tạo nên phong cách và thiên hướng riêng của từng AI."
      },
      {
        "label": "Sai lệch mô hình (2)",
        "title": "Sai lệch do Tinh chỉnh & Safety Guardrails",
        "summary": "Tác động của quá trình căn chỉnh con người (RLHF) và các rào chắn an toàn (Safety Guardrails) lên câu trả lời của mô hình.",
        "bullets": [
          "Căn chỉnh phản hồi con người (RLHF): Mô hình được huấn luyện để ưu tiên câu trả lời lịch sự, an toàn, hữu ích theo chuẩn mực của nhà phát triển.",
          "Rào chắn an toàn (Safety Guardrails): Các bộ lọc từ khóa và quy tắc kiểm duyệt (như Guardrails của Microsoft / Azure) chủ động chặn các chủ đề nhạy cảm.",
          "Hành vi từ chối: Một mô hình có rào chắn nghiêm ngặt sẽ từ chối trả lời, trong khi một mô hình mã nguồn mở có thể trả lời chi tiết kèm cảnh báo."
        ],
        "terms": [
          {
            "term": "Rào chắn an toàn (Safety Guardrails)",
            "definition": "Hệ thống quy tắc và bộ lọc tự động nhằm ngăn chặn mô hình AI tạo ra nội dung độc hại hoặc nguy hiểm."
          },
          {
            "term": "RLHF",
            "definition": "Phương pháp học tăng cường từ phản hồi của con người để định hình hành vi ứng xử của AI."
          }
        ],
        "example": {
          "title": "Khác biệt về mức độ kiểm duyệt",
          "content": "Hỏi về cách mở khóa cửa khi quên chìa khóa: Mô hình A từ chối vì nghi ngờ hành vi trộm cắp; Mô hình B hướng dẫn các mẹo xử lý an toàn kèm khuyến cáo gọi thợ khóa."
        },
        "pitfalls": [
          "Không biết rằng công cụ AI của công ty mình có thể đã bị rào chắn an toàn lược bỏ một số thông tin chuyên ngành."
        ],
        "check": {
          "question": "Thành phần nào được nhà phát triển tích hợp vào mô hình AI để chủ động ngăn chặn việc tạo ra các nội dung độc hại hoặc nguy hiểm?",
          "options": [
            "Rào chắn an toàn (Safety Guardrails)",
            "Mô hình khuếch tán Diffusion",
            "Dây cáp mạng Internet",
            "Ổ đĩa quang CD-ROM"
          ],
          "answer": 0,
          "explanation": "Safety Guardrails là các bộ lọc và quy tắc an toàn được thiết lập để kiểm duyệt và ngăn chặn nội dung có hại."
        },
        "takeaway": "Mỗi mô hình có bộ quy tắc rào chắn an toàn riêng định hình phong cách phản hồi."
      },
      {
        "label": "Checklist 5 bước",
        "title": "Tính trợ năng & Checklist Kiểm định 5 bước",
        "summary": "Quy trình kiểm định chất lượng 5 bước và đảm bảo tính trợ năng (Accessibility) trước khi công bố nội dung do AI hỗ trợ.",
        "bullets": [
          "Tính trợ năng (Accessibility): Đảm bảo video có Bản chép lời (Transcript) chính xác, phông chữ phụ đề dễ đọc, văn bản thay thế (Alt text) cho hình ảnh.",
          "1. Tính chính xác (Accuracy): Đã đối chiếu chéo số liệu, ngày tháng, liên kết với nguồn độc lập chưa?",
          "2. Tính đầy đủ (Completeness): Đã đáp ứng trọn vẹn mọi yêu cầu và ràng buộc trong prompt chưa?",
          "3. Tính phù hợp (Appropriateness): Giọng văn có phù hợp với đối tượng tiếp nhận mục tiêu không?",
          "4. An toàn & Tuân thủ (Compliance): Có dính dữ liệu cá nhân PII hay vi phạm bản quyền không?",
          "5. Tính nhất quán (Consistency): Các số liệu giữa các phần và bảng biểu có ăn khớp logic với nhau không?"
        ],
        "terms": [
          {
            "term": "Tính trợ năng (Accessibility)",
            "definition": "Khả năng sản phẩm nội dung có thể được tiếp cận và sử dụng dễ dàng bởi tất cả mọi người, bao gồm người khuyết tật."
          },
          {
            "term": "Bản chép lời (Transcript)",
            "definition": "Bản ghi lại toàn bộ nội dung lời nói trong video/âm thanh dưới dạng văn bản chữ viết."
          }
        ],
        "example": {
          "title": "Chiếu video cho chuyên gia quốc tế",
          "content": "Chiếu video hướng dẫn cho đối tác đa quốc gia: Bắt buộc chuẩn bị bản chép lời (transcript) chuẩn xác và phông chữ phụ đề rõ nét, dễ đọc trên màn hình."
        },
        "pitfalls": [
          "Bỏ qua bước kiểm tra checklist và gửi thẳng tài liệu của AI cho khách hàng hoặc ban giám đốc."
        ],
        "check": {
          "question": "Trước khi công bố một báo cáo quan trọng do AI hỗ trợ soạn thảo, bước bắt buộc phải thực hiện là gì?",
          "options": [
            "Con người thực hiện rà soát, đối chiếu dữ kiện và đánh giá toàn diện theo Checklist 5 bước",
            "Gửi ngay cho khách hàng mà không cần đọc lại",
            "Chạy lại câu lệnh 5 lần nữa",
            "Xóa bỏ toàn bộ phần tóm tắt"
          ],
          "answer": 0,
          "explanation": "Sự kiểm tra và rà soát trực tiếp của con người theo bộ tiêu chí checklist là chốt chặn an toàn bắt buộc trước khi phát hành."
        },
        "takeaway": "Chỉ xuất bản khi nội dung đã vượt qua đầy đủ 5 tiêu chí trong Checklist kiểm định."
      }
    ]
  },
  "responsible": {
    "description": "Hiểu rõ các nguồn gốc thiên kiến (Bias), nhận diện prompt thiên vị, bảo vệ PII bằng Static Data Masks, tuân thủ bản quyền/sáng chế (Phán quyết Tòa án Anh), phòng ngừa phỉ báng và duy trì giám sát con người.",
    "slides": [
      {
        "label": "Bản chất thiên kiến",
        "title": "Thiên kiến (Bias) trong AI là gì?",
        "summary": "Thiên kiến trong AI là hiện tượng kết quả đầu ra bị thiên lệch, không công bằng hoặc có định kiến đối với một nhóm người cụ thể.",
        "bullets": [
          "Bản chất: AI không tự sinh ra lòng thù ghét; thiên kiến là sự phản chiếu lại các định kiến và sự mất cân bằng có sẵn trong tập dữ liệu huấn luyện.",
          "Các nhóm dễ bị ảnh hưởng: Giới tính (Gender), Chủng tộc (Race), Độ tuổi (Age), Tôn giáo, Khuyết tật và Vùng miền địa lý.",
          "Hậu quả thực tế: AI tuyển dụng tự động loại bỏ hồ sơ của phụ nữ, hoặc AI xét duyệt vay vốn từ chối người ở vùng nông thôn một cách bất công."
        ],
        "terms": [
          {
            "term": "Thiên kiến / Thiên vị (Bias)",
            "definition": "Hiện tượng mô hình AI đưa ra kết quả thiên lệch có lợi hoặc có hại một cách bất công đối với một nhóm đối tượng cụ thể."
          }
        ],
        "example": {
          "title": "Thiên kiến trong tuyển dụng",
          "content": "Một công ty công nghệ dùng AI sàng lọc hồ sơ: Do dữ liệu 10 năm qua chủ yếu là nam giới, AI tự động hạ điểm các hồ sơ của ứng viên nữ dù có cùng trình độ."
        },
        "pitfalls": [
          "Tin rằng máy tính hoạt động bằng thuật toán toán học thì tuyệt đối khách quan và không thể có định kiến."
        ],
        "check": {
          "question": "Khái niệm nào mô tả việc một hệ thống AI đưa ra các quyết định thiên lệch bất công đối với một nhóm người dựa trên giới tính hoặc chủng tộc?",
          "options": [
            "Thiên kiến AI (AI Bias)",
            "Mã hóa Token",
            "Cửa sổ ngữ cảnh (Context Window)",
            "Lia máy quay (Camera Panning)"
          ],
          "answer": 0,
          "explanation": "Thiên kiến AI (AI Bias) là hiện tượng mô hình đưa ra kết quả thiên lệch, bất công phản ánh các định kiến trong dữ liệu."
        },
        "takeaway": "Dữ liệu có định kiến thì AI sẽ tái tạo lại định kiến; con người phải chủ động kiểm soát thiên kiến."
      },
      {
        "label": "Nguồn gốc Bias (1)",
        "title": "Thiếu dữ liệu & Thiếu tính Đa dạng",
        "summary": "Nguyên nhân hàng đầu gây ra thiên kiến là do tập dữ liệu thu thập không đầy đủ hoặc thiếu sự đại diện cân bằng của các nhóm dân cư.",
        "bullets": [
          "Thiếu dữ liệu đại diện: Dữ liệu nhận diện khuôn mặt chỉ thu thập ảnh của người da trắng khiến AI nhận diện sai người da màu.",
          "Thiếu điều kiện môi trường: Dữ liệu camera xe tự hành chỉ thu thập vào ban ngày khiến xe hoạt động kém an toàn vào ban đêm.",
          "Giải pháp khắc phục: Bắt buộc phải bổ sung và đa dạng hóa mẫu dữ liệu đại diện cho mọi nhóm nhân khẩu học và hoàn cảnh thực tế."
        ],
        "terms": [
          {
            "term": "Thiếu tính đa dạng (Lack of Diversity)",
            "definition": "Tình trạng tập dữ liệu chỉ tập trung vào một nhóm đối tượng hẹp, bỏ quên các nhóm thiểu số khác."
          }
        ],
        "example": {
          "title": "Dữ liệu camera xe tự hành",
          "content": "Công ty thu thập dữ liệu xe tự hành chỉ ghi hình đường phố vào những ngày trời nắng đẹp (Thiếu đa dạng) -> Xe gặp sự cố khi trời mưa bão hoặc ban đêm."
        },
        "pitfalls": [
          "Cho rằng chỉ cần số lượng dữ liệu nhiều (Big Data) là tự động đảm bảo tính đa dạng và công bằng."
        ],
        "check": {
          "question": "Hai nguyên nhân cốt lõi nào trong khâu thu thập dữ liệu dẫn đến sự thiên lệch (bias) của mô hình AI?",
          "options": [
            "Thiếu hụt dữ liệu và thiếu sự đa dạng trong tập mẫu thu thập",
            "Tốc độ đường truyền Internet quá cao",
            "Máy tính có dung lượng ổ cứng quá lớn",
            "Sử dụng phần mềm mã nguồn mở"
          ],
          "answer": 0,
          "explanation": "Thiếu dữ liệu và thiếu tính đa dạng (không đại diện đủ các nhóm đối tượng) là 2 nguồn gốc trực tiếp gây ra bias."
        },
        "takeaway": "Tập dữ liệu phải đa dạng và đại diện cho mọi đối tượng để tránh thiên kiến."
      },
      {
        "label": "Nguồn gốc Bias (2)",
        "title": "Thiên kiến Lịch sử (Historical Bias)",
        "summary": "Thiên kiến lịch sử xuất hiện khi dữ liệu quá khứ phản ánh những bất bình đẳng hoặc định kiến xã hội đã tồn tại từ trước.",
        "bullets": [
          "Số hóa định kiến cũ: Dữ liệu quá khứ chứa đựng sự bất bình đẳng (ví dụ: trong lịch sử, các vị trí lãnh đạo cấp cao chủ yếu do nam giới nắm giữ).",
          "AI học lại cái sai của quá khứ: Khi học từ các bài báo cũ, AI tự động gán nhãn 'Bác sĩ' gắn với nam giới và 'Y tá' gắn với phụ nữ.",
          "Sự can thiệp của con người: Phải chủ động rà soát và điều chỉnh phân phối dữ liệu để ngăn AI duy trì các định kiến lỗi thời."
        ],
        "terms": [
          {
            "term": "Thiên kiến lịch sử (Historical Bias)",
            "definition": "Hiện tượng các định kiến xã hội đã ăn sâu trong quá khứ được phản ánh trực tiếp vào dữ liệu thu thập."
          }
        ],
        "example": {
          "title": "Dịch thuật đại từ xưng hô",
          "content": "Dịch câu 'Bác sĩ đang khám bệnh' sang ngôn ngữ có phân biệt giống: AI tự động dịch thành 'Anh ấy là bác sĩ' do ảnh hưởng của dữ liệu lịch sử."
        },
        "pitfalls": [
          "Nghĩ rằng chỉ cần huấn luyện trên toàn bộ sách báo trong lịch sử là AI sẽ có tư duy hoàn toàn công bằng."
        ],
        "check": {
          "question": "Hiện tượng AI tự động liên kết các vị trí quản lý cấp cao với nam giới do học từ các tài liệu kinh doanh cũ trong lịch sử được gọi là gì?",
          "options": [
            "Thiên kiến lịch sử (Historical Bias)",
            "Mã hóa Token tĩnh",
            "Cửa sổ ngữ cảnh",
            "Kỹ thuật Inpainting"
          ],
          "answer": 0,
          "explanation": "Historical Bias là việc mô hình tái tạo lại các định kiến và sự mất cân bằng xã hội đã tồn tại trong dữ liệu quá khứ."
        },
        "takeaway": "Nhận diện thiên kiến lịch sử để chủ động cân bằng lại dữ liệu huấn luyện."
      },
      {
        "label": "Nguồn gốc Bias (3)",
        "title": "Thiên lệch Gán nhãn & Triển khai",
        "summary": "Thiên kiến phát sinh trong quá trình con người gán nhãn/trọng số cho dữ liệu hoặc khi triển khai thử nghiệm trong phạm vi quá hẹp.",
        "bullets": [
          "Thiên lệch gán nhãn & Trọng số (Labeling & Weighting Bias): Người gán nhãn ấn định trọng số ưu tiên không công bằng cho người đi bộ dựa trên chiều cao, ngoại hình.",
          "Thiên lệch triển khai (Deployment Bias): Mô hình xe tự hành chỉ được thử nghiệm ở một thành phố khí hậu ấm áp nhưng lại mang bán thương mại và chạy ở vùng có tuyết rơi dày.",
          "Kiểm thử toàn diện: Bắt buộc thử nghiệm mô hình trong nhiều môi trường thực tế khác nhau trước khi phát hành chính thức."
        ],
        "terms": [
          {
            "term": "Thiên lệch gán trọng số (Weighting Bias)",
            "definition": "Việc ấn định tầm quan trọng không công bằng cho các nhóm dữ liệu trong khâu gán nhãn."
          },
          {
            "term": "Thiên lệch triển khai (Deployment Bias)",
            "definition": "Sự không phù hợp giữa môi trường thử nghiệm hạn hẹp với môi trường vận hành thực tế rộng lớn."
          }
        ],
        "example": {
          "title": "Chuỗi thiên lệch xe tự hành",
          "content": "Gán nhãn ưu tiên người đi bộ cao lớn (Gán nhãn) -> Chỉ thử nghiệm xe ở bang California nắng ấm nhưng mang bán ở Alaska đầy tuyết (Triển khai)."
        },
        "pitfalls": [
          "Vội vàng thương mại hóa sản phẩm AI khi mới chỉ thử nghiệm thành công trong phòng thí nghiệm hoặc một khu vực hẹp."
        ],
        "check": {
          "question": "Khi một mô hình xe tự hành chỉ được thử nghiệm ở một thành phố nhỏ nhưng lại được triển khai thương mại trên toàn quốc, lỗi này được gọi là gì?",
          "options": [
            "Thiên lệch triển khai (Deployment Bias)",
            "Prompt Chaining",
            "Tokenization",
            "Khử nhiễu Denoising"
          ],
          "answer": 0,
          "explanation": "Deployment Bias xảy ra khi môi trường thử nghiệm không đại diện đầy đủ cho môi trường vận hành thực tế."
        },
        "takeaway": "Gán nhãn công bằng và thử nghiệm đa môi trường trước khi triển khai thực tế."
      },
      {
        "label": "Prompt thiên vị",
        "title": "Nhận diện Prompt thiên vị (Biased Prompt)",
        "summary": "Câu lệnh của người dùng có thể vô tình hoặc cố ý cài cắm thiên kiến thông qua các từ ngữ mớm ý, dẫn dắt hoặc chỉ yêu cầu phân tích một chiều.",
        "bullets": [
          "Đặc điểm của Prompt thiên vị: Chứa các giả định có sẵn, ép AI phải chứng minh một quan điểm định trước.",
          "Ví dụ mớm ý năng lượng: 'Hãy chứng minh năng lượng mặt trời vượt trội hơn hẳn và là lựa chọn duy nhất cho đô thị' $\rightarrow$ Ép AI bỏ qua các khó khăn về lưu trữ và chi phí.",
          "Ví dụ dự án đập sông Smith: 'Tạo bản tóm tắt tác động dỡ bỏ đập theo quan điểm của công ty điện lực' $\rightarrow$ Chỉ phản ánh góc nhìn một phía có lợi cho công ty điện lực."
        ],
        "terms": [
          {
            "term": "Prompt thiên vị (Biased Prompt)",
            "definition": "Câu lệnh chứa ngôn từ dẫn dắt hoặc giả định ép AI chỉ trả lời nghiêng về một chiều quan điểm."
          }
        ],
        "example": {
          "title": "Prompt thiên vị về đập sông Smith",
          "content": "'Hãy viết bài giải thích vì sao việc dỡ bỏ đập sông Smith là một sai lầm thảm họa kinh tế' -> Đây là prompt thiên vị nặng nề."
        },
        "pitfalls": [
          "Đặt câu hỏi theo kiểu 'Tại sao phương án A là tốt nhất?' rồi lầm tưởng câu trả lời của AI là khách quan."
        ],
        "check": {
          "question": "Câu lệnh nào sau đây là ví dụ điển hình của một Prompt thiên vị (Biased Prompt)?",
          "options": [
            "'Hãy nhấn mạnh hiệu suất vượt trội và chứng minh năng lượng mặt trời là nguồn năng lượng hoàn hảo nhất'",
            "'Phân tích các ưu điểm và nhược điểm của các nguồn năng lượng tái tạo khác nhau một cách khách quan'",
            "'Tóm tắt các phát hiện từ nghiên cứu độc lập của bên thứ ba'",
            "'Lập bảng so sánh chi phí và sản lượng điện của các nguồn năng lượng'"
          ],
          "answer": 0,
          "explanation": "Câu lệnh mớm ý ép AI chứng minh một quan điểm định sẵn ('hoàn hảo nhất') là prompt chứa thiên kiến rõ rệt."
        },
        "takeaway": "Tránh các từ ngữ mớm ý và định hướng một chiều trong câu lệnh."
      },
      {
        "label": "Prompt khách quan",
        "title": "Kỹ thuật Viết Prompt Khách quan",
        "summary": "Prompt khách quan yêu cầu AI phân tích đa chiều cân bằng, trình bày đầy đủ ưu nhược điểm dựa trên các nghiên cứu độc lập của bên thứ ba.",
        "bullets": [
          "Yêu cầu phân tích đa chiều: Bắt buộc nêu rõ cả mặt thuận lợi và khó khăn của từng phương án.",
          "Dựa trên bên thứ ba độc lập: Chỉ định AI trích xuất thông tin từ các báo cáo đánh giá độc lập thay vì tài liệu của các bên có xung đột lợi ích.",
          "Dự án đập sông Smith khách quan: 'Tạo bản tóm tắt về các khuyến nghị rút ra từ nghiên cứu độc lập của bên thứ ba về việc dỡ bỏ đập sông Smith, nêu rõ các bước khả thi và tác động sinh thái'."
        ],
        "terms": [
          {
            "term": "Đánh giá không thiên vị (Unbiased Evaluation)",
            "definition": "Yêu cầu AI phân tích cân bằng, khách quan dựa trên các bằng chứng khoa học đa chiều."
          }
        ],
        "example": {
          "title": "So sánh các nguồn năng lượng",
          "content": "'Phân tích ưu điểm và nhược điểm của năng lượng mặt trời, gió và thủy điện dựa trên chi phí đầu tư ban đầu, sản lượng điện và tác động môi trường một cách khách quan.'"
        },
        "pitfalls": [
          "Chỉ yêu cầu phân tích một phương án duy nhất mà không so sánh đối chiếu với các giải pháp thay thế."
        ],
        "check": {
          "question": "Để nhận được câu trả lời khách quan và công bằng nhất về dự án dỡ bỏ đập thủy điện, bạn nên viết câu lệnh như thế nào?",
          "options": [
            "Yêu cầu tóm tắt các khuyến nghị từ nghiên cứu độc lập của bên thứ ba, nêu rõ cả tác động kinh tế và sinh thái",
            "Chỉ yêu cầu nêu ý kiến của công ty thủy điện",
            "Chỉ yêu cầu nêu ý kiến của người câu cá",
            "Yêu cầu AI viết một bài thơ chỉ trích dự án"
          ],
          "answer": 0,
          "explanation": "Dựa vào nghiên cứu độc lập của bên thứ ba và xem xét tác động đa chiều là phương pháp chuẩn để nhận kết quả khách quan."
        },
        "takeaway": "Yêu cầu nêu cả ưu lẫn nhược điểm và dựa vào nguồn bên thứ ba độc lập để có câu trả lời khách quan."
      },
      {
        "label": "Bảo vệ PII",
        "title": "Thông tin Định danh Cá nhân (PII)",
        "summary": "Bảo vệ thông tin định danh cá nhân (PII) là nguyên tắc bắt buộc để ngăn chặn nguy cơ trộm cắp danh tính và vi phạm quyền riêng tư.",
        "bullets": [
          "Dữ liệu định danh trực tiếp (Direct PII): Họ và tên, số Căn cước công dân (CCCD/CMND), số hộ chiếu, số điện thoại, địa chỉ nhà riêng, địa chỉ email cá nhân, tài khoản mạng xã hội.",
          "Nguy cơ trộm cắp danh tính (Identity Theft): Khi PII bị nạp vào các mô hình AI công khai, thông tin có thể bị lưu vào bộ nhớ máy chủ và vô tình trả lời cho người dùng khác.",
          "Nguyên tắc sử dụng an toàn: Luôn loại bỏ hoặc thay thế toàn bộ PII trước khi gửi câu lệnh prompt lên các công cụ AI công cộng."
        ],
        "terms": [
          {
            "term": "PII (Personally Identifiable Information)",
            "definition": "Mọi thông tin có thể được sử dụng để nhận dạng, liên lạc hoặc xác định chính xác danh tính của một cá nhân."
          },
          {
            "term": "Trộm cắp danh tính (Identity Theft)",
            "definition": "Hành vi chiếm đoạt thông tin cá nhân của người khác để mạo danh thực hiện các hành vi gian lận hoặc trục lợi."
          }
        ],
        "example": {
          "title": "Bảo vệ danh tính khách hàng",
          "content": "Thay vì dán 'Khách hàng Nguyễn Văn A, CCCD 0123456789, SĐT 0901234567 bị khiếu nại...', hãy ẩn danh thành 'Khách hàng X khiếu nại...' trước khi nhờ AI soạn thư phản hồi."
        },
        "pitfalls": [
          "Cho rằng chỉ cần xóa họ tên là an toàn, trong khi vẫn để lại số CCCD, số điện thoại và địa chỉ nhà riêng trong prompt."
        ],
        "check": {
          "question": "Hành động nào sau đây là đúng đắn nhất để tránh rò rỉ dữ liệu cá nhân khi sử dụng các chatbot AI công khai như ChatGPT?",
          "options": [
            "Tránh nhập các thông tin định danh cá nhân như họ tên, số giấy tờ, vị trí, số điện thoại và tài khoản mạng xã hội",
            "Chỉ sử dụng chatbot vào ban đêm",
            "Gõ câu lệnh bằng chữ in hoa",
            "Thêm từ 'Bí mật' vào đầu prompt"
          ],
          "answer": 0,
          "explanation": "Loại bỏ hoàn toàn các thông tin PII trước khi gửi câu lệnh là cách tốt nhất để bảo vệ quyền riêng tư cá nhân."
        },
        "takeaway": "Tuyệt đối không nhập thông tin định danh cá nhân (PII) vào các công cụ AI công khai."
      },
      {
        "label": "Dữ liệu nhạy cảm",
        "title": "Bảo vệ Dữ liệu Nhạy cảm Đặc biệt",
        "summary": "Các nhóm dữ liệu đặc biệt như hồ sơ bệnh án y tế, thông tin tài chính và dữ liệu trẻ em đòi hỏi chế độ bảo mật nghiêm ngặt nhất.",
        "bullets": [
          "Dữ liệu y tế sức khỏe: Hồ sơ bệnh án, lịch sử khám chữa bệnh, thông tin xét nghiệm gen, tình trạng điều trị của khách hàng Healthy Eats.",
          "Dữ liệu tài chính: Số thẻ tín dụng, mã CVV, lịch sử giao dịch ngân hàng, mức thu nhập chi tiết.",
          "Dữ liệu trẻ em vị thành niên: Mọi thông tin hình ảnh, học tập và vị trí của trẻ em đều được luật pháp quốc tế bảo vệ đặc biệt nghiêm ngặt.",
          "Quy chế nội bộ: Viện nghiên cứu và doanh nghiệp phải thiết lập quy định cấm nhân viên tải dữ liệu nhạy cảm lên AI công cộng."
        ],
        "terms": [
          {
            "term": "Dữ liệu nhạy cảm (Sensitive Personal Data)",
            "definition": "Nhóm dữ liệu đặc thù về sức khỏe, sinh trắc, tài chính hoặc nguồn gốc sắc tộc đòi hỏi mức độ bảo vệ tối đa."
          }
        ],
        "example": {
          "title": "Bảo mật tại phòng khám",
          "content": "Phòng khám y tế cấm nhân viên tải hồ sơ bệnh án chứa tên và tình trạng bệnh của bệnh nhân lên chatbot AI để dịch thuật; bắt buộc phải dùng phần mềm nội bộ có mã hóa."
        },
        "pitfalls": [
          "Nạp tài liệu hợp đồng kinh tế chứa đầy đủ số tài khoản ngân hàng của đối tác vào công cụ AI miễn phí trên mạng."
        ],
        "check": {
          "question": "Nhóm dữ liệu nào sau đây thuộc danh mục Dữ liệu nhạy cảm đặc biệt và tuyệt đối không được nạp vào các mô hình AI công cộng chưa được cấp phép bảo mật?",
          "options": [
            "Hồ sơ bệnh án y tế, thông tin thẻ tín dụng và dữ liệu trẻ vị thành niên",
            "Dự báo thời tiết công khai",
            "Lịch thi đấu thể thao quốc tế",
            "Danh mục các thành phố thủ đô trên thế giới"
          ],
          "answer": 0,
          "explanation": "Hồ sơ y tế, thông tin tài chính và dữ liệu trẻ em là các dữ liệu nhạy cảm đặc biệt được pháp luật bảo vệ nghiêm ngặt."
        },
        "takeaway": "Bệnh án y tế, tài chính và dữ liệu trẻ em là vùng cấm tuyệt đối đối với AI công cộng."
      },
      {
        "label": "Che dấu dữ liệu tĩnh",
        "title": "Kỹ thuật Static Data Masks",
        "summary": "Che dấu dữ liệu tĩnh (Static Data Masks) là kỹ thuật biến đổi vĩnh viễn dữ liệu nhạy cảm trước khi đưa vào huấn luyện mô hình AI.",
        "bullets": [
          "Bản chất: Thay đổi vĩnh viễn các trường dữ liệu nhạy cảm trong cơ sở dữ liệu để tạo ra một bản sao dữ liệu an toàn.",
          "Chống trích xuất danh tính: Do dữ liệu gốc đã bị thay đổi vĩnh viễn, kẻ xấu không thể tấn công để khôi phục lại danh tính thực của khách hàng.",
          "Bảo toàn giá trị phân tích: Vẫn giữ nguyên cấu trúc và phân phối thống kê của dữ liệu để mô hình AI học tập hiệu quả."
        ],
        "terms": [
          {
            "term": "Che dấu dữ liệu tĩnh (Static Data Masking)",
            "definition": "Kỹ thuật biến đổi vĩnh viễn các trường dữ liệu nhạy cảm trong cơ sở dữ liệu để tạo ra bản sao an toàn cho huấn luyện AI."
          }
        ],
        "example": {
          "title": "Ẩn danh cơ sở dữ liệu đào tạo",
          "content": "Ngân hàng thay thế vĩnh viễn toàn bộ số tài khoản thật bằng các chuỗi số ngẫu nhiên trước khi đưa dữ liệu cho nhóm kỹ sư AI huấn luyện mô hình phát hiện gian lận."
        },
        "pitfalls": [
          "Nhầm lẫn Static Data Masking (thay đổi vĩnh viễn dữ liệu gốc) với Dynamic Masking (chỉ che tạm thời khi hiển thị trên màn hình)."
        ],
        "check": {
          "question": "Kỹ thuật bảo mật nào sau đây làm THAY ĐỔI VĨNH VIỄN các dữ liệu nhạy cảm trong cơ sở dữ liệu trước khi huấn luyện mô hình AI để chống trộm cắp danh tính?",
          "options": [
            "Che dấu dữ liệu tĩnh (Static data masks)",
            "Lia máy quay camera (Camera Panning)",
            "Chain-of-thought Prompting",
            "Zero-shot Prompting"
          ],
          "answer": 0,
          "explanation": "Static data masks thay đổi vĩnh viễn dữ liệu nhạy cảm trong tập dữ liệu đào tạo, ngăn chặn triệt để nguy cơ lộ danh tính."
        },
        "takeaway": "Static Data Masks biến đổi vĩnh viễn dữ liệu nhạy cảm để tạo môi trường đào tạo AI an toàn."
      },
      {
        "label": "Phân biệt kỹ thuật",
        "title": "Tokenization vs Pseudonymization (Tên giả)",
        "summary": "Phân biệt rõ ràng giữa kỹ thuật mã hóa bằng Token đại diện (Tokenization) và kỹ thuật sử dụng tên giả thay thế (Pseudonymization).",
        "bullets": [
          "Mã hóa Token (Tokenization): Thay thế phần tử dữ liệu nhạy cảm bằng một chuỗi mã định danh ngẫu nhiên (token không có quy luật từ ngữ) và lưu bảng ánh xạ bảo mật riêng biệt.",
          "Dùng tên giả (Pseudonymization): Thay thế tên thật bằng một cái tên giả có ý nghĩa (ví dụ: thay 'Nguyễn Văn A' bằng 'Bệnh nhân John Doe').",
          "Điểm cần nhớ trong đề thi: Tokenization KHÔNG PHẢI là việc sử dụng tên giả; sử dụng tên giả là Pseudonymization."
        ],
        "terms": [
          {
            "term": "Tokenization (Mã hóa Token)",
            "definition": "Quy trình chuyển đổi dữ liệu nhạy cảm thành các mã token đại diện không thể giải mã nếu không có bảng ánh xạ."
          },
          {
            "term": "Pseudonymization (Bí danh hóa)",
            "definition": "Kỹ thuật thay thế các thông tin định danh bằng các tên giả hoặc bí danh đại diện."
          }
        ],
        "example": {
          "title": "Đối chiếu kỹ thuật",
          "content": "Thay 'Thẻ tín dụng 1234-5678' thành mã 'TKN_889922': Tokenization. Thay 'Nguyễn Văn A' thành 'Anh Nam': Pseudonymization."
        },
        "pitfalls": [
          "Nhầm lẫn và chọn đáp án cho rằng 'Tokenization là kỹ thuật sử dụng tên giả'."
        ],
        "check": {
          "question": "Phát biểu nào sau đây phân biệt CHÍNH XÁC giữa Tokenization và Pseudonymization trong bảo mật dữ liệu AI?",
          "options": [
            "Pseudonymization sử dụng tên giả/bí danh thay thế; Tokenization thay thế dữ liệu bằng chuỗi mã token ngẫu nhiên",
            "Tokenization là việc sử dụng tên giả hoàn toàn",
            "Pseudonymization chỉ dùng cho hình ảnh video",
            "Hai kỹ thuật này là một, không có điểm khác biệt"
          ],
          "answer": 0,
          "explanation": "Pseudonymization là bí danh hóa (dùng tên giả), còn Tokenization là mã hóa thành chuỗi token đại diện phi ngữ nghĩa."
        },
        "takeaway": "Dùng tên giả là Pseudonymization; Mã hóa chuỗi đại diện là Tokenization."
      },
      {
        "label": "Quản trị dữ liệu",
        "title": "Chính sách Opt-out & Quy chế Nội bộ",
        "summary": "Chính sách từ chối sử dụng dữ liệu (Opt-out) và việc thiết lập quy chế bảo mật nội bộ trong tổ chức.",
        "bullets": [
          "Quyền chọn không tham gia (Opt-out): Tùy chọn cài đặt cho phép người dùng và doanh nghiệp yêu cầu nhà cung cấp AI không dùng các cuộc trò chuyện của mình để tái huấn luyện mô hình.",
          "Quy chế quản trị nội bộ: Ban hành quy định cấm nhân viên dán mã nguồn dự án mật, báo cáo tài chính chưa công bố lên các nền tảng AI miễn phí.",
          "Sử dụng gói Doanh nghiệp (Enterprise Plan): Sử dụng các gói dịch vụ có cam kết pháp lý về bảo mật dữ liệu và quyền riêng tư chuyên biệt."
        ],
        "terms": [
          {
            "term": "Chính sách Opt-out",
            "definition": "Tùy chọn cho phép người dùng từ chối việc nhà cung cấp dịch vụ sử dụng dữ liệu của mình vào mục đích huấn luyện AI."
          },
          {
            "term": "Quản trị AI nội bộ (Internal AI Governance)",
            "definition": "Hệ thống quy định và chính sách kiểm soát việc sử dụng các công cụ AI trong một tổ chức."
          }
        ],
        "example": {
          "title": "Quy chế bảo mật viện nghiên cứu",
          "content": "Viện nghiên cứu công nghệ ban hành quy chế: Mọi nhân viên bắt buộc phải bật tùy chọn Opt-out và chỉ được dùng tài khoản Enterprise nội bộ khi xử lý tài liệu dự án."
        },
        "pitfalls": [
          "Sử dụng tài khoản AI cá nhân miễn phí để phân tích dữ liệu kinh doanh của công ty mà không bật chế độ Opt-out."
        ],
        "check": {
          "question": "Tính năng hoặc chính sách nào cho phép một công ty yêu cầu nhà cung cấp AI không sử dụng các câu lệnh và tài liệu tải lên để tái huấn luyện mô hình?",
          "options": [
            "Chính sách chọn không tham gia (Data Training Opt-out)",
            "Tính năng thay đổi hình nền",
            "Tính năng tải video",
            "Tính năng phát âm thanh"
          ],
          "answer": 0,
          "explanation": "Chính sách Opt-out đảm bảo dữ liệu tương tác của người dùng không bị nhà cung cấp thu thập để huấn luyện mô hình tương lai."
        },
        "takeaway": "Kích hoạt chính sách Opt-out và tuân thủ quy chế nội bộ để bảo vệ bí mật kinh doanh."
      },
      {
        "label": "Bản quyền (Copyright)",
        "title": "Sở hữu trí tuệ: Vi phạm Bản quyền",
        "summary": "Vi phạm bản quyền xảy ra khi sử dụng AI để sao chép, mô phỏng y nguyên các tác phẩm nghệ thuật, âm nhạc, văn học hoặc mã nguồn có bản quyền.",
        "bullets": [
          "Khái niệm Bản quyền (Copyright): Quyền độc quyền của tác giả đối với tác phẩm văn học, nghệ thuật, âm nhạc, bài viết, mã phần mềm gốc.",
          "Hành vi vi phạm: Yêu cầu AI vẽ một bức tranh sao chép y hệt nhân vật hoạt hình Disney hoặc viết một bài hát sao chép giai điệu bài hát nổi tiếng.",
          "Rủi ro thương mại: Sử dụng các ấn phẩm do AI tạo ra có chứa chi tiết vi phạm bản quyền để bán hàng sẽ bị kiện và bồi thường thiệt hại."
        ],
        "terms": [
          {
            "term": "Bản quyền (Copyright)",
            "definition": "Quyền sở hữu hợp pháp bảo vệ các tác phẩm sáng tạo nguyên bản của tác giả khỏi bị sao chép trái phép."
          },
          {
            "term": "Vi phạm bản quyền (Copyright Infringement)",
            "definition": "Hành vi sử dụng, sao chép hoặc phân phối tác phẩm được bảo hộ bản quyền mà không có sự cho phép của chủ sở hữu."
          }
        ],
        "example": {
          "title": "Tạo bài hát bắt chước",
          "content": "AI tạo ra một bài hát có lời và giai điệu trùng khớp 90% với bài hát của một ca sĩ nổi tiếng: Phát hành bài hát này là hành vi vi phạm bản quyền (Copyright Infringement)."
        },
        "pitfalls": [
          "Nghĩ rằng tác phẩm do AI vẽ ra thì đương nhiên không thể bị dính bản quyền của người khác."
        ],
        "check": {
          "question": "Hành vi sử dụng AI tạo sinh để tạo ra một đoạn mã nguồn phần mềm hoặc bài hát sao chép y nguyên tác phẩm đang được bảo hộ của tác giả khác thuộc loại vi phạm nào?",
          "options": [
            "Vi phạm Bản quyền (Copyright Infringement)",
            "Vi phạm quy định giao thông",
            "Lỗi tràn cửa sổ ngữ cảnh",
            "Lỗi phần cứng máy chủ"
          ],
          "answer": 0,
          "explanation": "Sao chép tác phẩm văn học, nghệ thuật, âm nhạc hoặc mã nguồn phần mềm có bản quyền là hành vi vi phạm Bản quyền (Copyright)."
        },
        "takeaway": "Tôn trọng bản quyền tác giả: Không sao chép các tác phẩm nghệ thuật, âm nhạc và mã nguồn gốc."
      },
      {
        "label": "Nhãn hiệu (Trademark)",
        "title": "Sở hữu trí tuệ: Vi phạm Quyền Nhãn hiệu",
        "summary": "Vi phạm nhãn hiệu xảy ra khi sử dụng AI tạo ra các hình ảnh có gắn logo, biểu tượng hoặc tên thương hiệu đã được bảo hộ gây nhầm lẫn.",
        "bullets": [
          "Khái niệm Nhãn hiệu (Trademark): Dấu hiệu nhận diện (Logo, biểu tượng, tên thương mại, khẩu hiệu) dùng để phân biệt sản phẩm của các công ty.",
          "Hành vi vi phạm: Dùng AI vẽ logo một chiếc xe có gắn biểu tượng ngôi sao 3 cánh của Mercedes hoặc quả táo cắn dở của Apple để kinh doanh.",
          "Bảo vệ người tiêu dùng: Luật nhãn hiệu ngăn chặn việc mạo danh gây nhầm lẫn cho khách hàng trên thị trường."
        ],
        "terms": [
          {
            "term": "Nhãn hiệu (Trademark)",
            "definition": "Dấu hiệu nhận diện độc quyền (logo, biểu tượng, tên gọi) dùng để phân biệt hàng hóa, dịch vụ của các tổ chức."
          },
          {
            "term": "Vi phạm nhãn hiệu (Trademark Infringement)",
            "definition": "Hành vi sử dụng trái phép dấu hiệu trùng hoặc tương tự với nhãn hiệu đã được bảo hộ gây nhầm lẫn thương mại."
          }
        ],
        "example": {
          "title": "Vẽ logo xe hơi",
          "content": "Một công ty đồ chơi dùng AI tạo mẫu xe có gắn biểu tượng cánh quạt của BMW: Đây là hành vi vi phạm quyền Nhãn hiệu (Trademark Infringement)."
        },
        "pitfalls": [
          "Nhầm lẫn giữa Bản quyền (bảo vệ tác phẩm sáng tạo) và Nhãn hiệu (bảo vệ logo, tên thương hiệu sản phẩm)."
        ],
        "check": {
          "question": "Hành vi sử dụng AI tạo ra hình ảnh sản phẩm có gắn logo biểu tượng thương hiệu đã đăng ký của một hãng nổi tiếng thuộc loại vi phạm nào?",
          "options": [
            "Vi phạm quyền Nhãn hiệu (Trademark Infringement)",
            "Vi phạm quyền sáng chế",
            "Lỗi bộ nhớ đệm",
            "Lỗi định dạng bảng Markdown"
          ],
          "answer": 0,
          "explanation": "Sử dụng trái phép logo, biểu tượng nhận diện thương hiệu đã được bảo hộ là hành vi vi phạm quyền Nhãn hiệu (Trademark)."
        },
        "takeaway": "Nhãn hiệu bảo vệ logo và biểu tượng thương hiệu; tuyệt đối không xâm phạm logo của tổ chức khác."
      },
      {
        "label": "Sáng chế (Patent)",
        "title": "Sở hữu trí tuệ: Sáng chế & Phán quyết Tòa án Anh",
        "summary": "Bằng sáng chế bảo hộ giải pháp kỹ thuật và Phán quyết lịch sử của Tòa án Tối cao Anh: AI không thể là người phát minh bằng sáng chế.",
        "bullets": [
          "Khái niệm Sáng chế (Patent): Giải pháp kỹ thuật dưới dạng sản phẩm hoặc quy trình mới, có tính sáng tạo và khả năng áp dụng công nghiệp.",
          "Phán quyết Tòa án Tối cao Vương quốc Anh (UK Supreme Court): **AI không thể được công nhận là người phát minh (Inventor) của một bằng sáng chế**.",
          "Nguyên tắc pháp lý: Người phát minh theo luật định bắt buộc phải là một con người cụ thể (thể nhân); AI chỉ được coi là công cụ hỗ trợ."
        ],
        "terms": [
          {
            "term": "Bằng sáng chế (Patent)",
            "definition": "Chứng nhận độc quyền của nhà nước cấp cho tác giả của một giải pháp kỹ thuật hoặc quy trình công nghệ mới."
          },
          {
            "term": "Người phát minh (Inventor)",
            "definition": "Cá nhân con người có đóng góp trí tuệ trực tiếp tạo ra sáng chế theo luật pháp."
          }
        ],
        "example": {
          "title": "Đăng ký sáng chế cho thuật toán AI",
          "content": "Một nhóm kỹ sư dùng AI thiết kế ra một loại van động cơ mới: Bằng sáng chế phải đứng tên các kỹ sư, không thể ghi tên tác giả phát minh là 'Phần mềm AI XYZ'."
        },
        "pitfalls": [
          "Cho rằng phần mềm AI có tư cách pháp nhân độc lập và có thể tự đứng tên sở hữu bằng sáng chế."
        ],
        "check": {
          "question": "Tòa án Tối cao Vương quốc Anh (UK Supreme Court) đã đưa ra phán quyết pháp lý mang tính bước ngoặt nào liên quan đến AI và quyền sáng chế?",
          "options": [
            "AI không thể được công nhận là người phát minh duy nhất của một bằng sáng chế (Patent)",
            "AI được quyền sở hữu nhà đất",
            "Cấm hoàn toàn việc sử dụng máy tính trong nghiên cứu",
            "Mọi người dùng AI đều được miễn trách nhiệm pháp lý"
          ],
          "answer": 0,
          "explanation": "Tòa án Tối cao Anh phán quyết rằng người phát minh bằng sáng chế bắt buộc phải là con người, AI không thể đứng tên người phát minh."
        },
        "takeaway": "AI là công cụ hỗ trợ; chỉ con người mới có quyền đứng tên người phát minh bằng sáng chế."
      },
      {
        "label": "Khung pháp lý",
        "title": "Ba nhóm luật cần xét khi triển khai AI trong doanh nghiệp",
        "summary": "Khi một doanh nghiệp áp dụng AI tạo sinh vào quy trình thực tế (như tuyển dụng), cần xem xét đồng thời 3 nhóm luật khác nhau, không chỉ riêng luật sở hữu trí tuệ.",
        "bullets": [
          "Luật Sở hữu trí tuệ (Intellectual Property): Liên quan đến dữ liệu và mô hình AI dùng để huấn luyện, tránh vi phạm bản quyền/nhãn hiệu/sáng chế của bên thứ ba.",
          "Luật Bảo mật dữ liệu (Data Privacy): Liên quan đến việc thu thập, lưu trữ và xử lý thông tin cá nhân (như hồ sơ ứng viên) mà AI tiếp cận được.",
          "Luật Lao động/Việc làm (Employment Law): Liên quan đến việc đảm bảo quy trình AI (như sàng lọc hồ sơ, ra quyết định tuyển dụng) không vi phạm quy định công bằng, chống phân biệt đối xử."
        ],
        "terms": [
          {
            "term": "Luật Lao động (Employment Law)",
            "definition": "Nhóm quy định pháp lý về tuyển dụng, đối xử công bằng và chống phân biệt đối xử với người lao động — áp dụng cả khi quy trình được tự động hóa bằng AI."
          }
        ],
        "example": {
          "title": "Tình huống thực tế",
          "content": "Một công ty dùng AI tạo sinh để sàng lọc CV ứng viên cần đồng thời kiểm tra: dữ liệu huấn luyện mô hình có vi phạm bản quyền không (SHTT), hồ sơ ứng viên được bảo vệ ra sao (bảo mật dữ liệu), và mô hình có vô tình thiên vị giới tính/độ tuổi khi loại hồ sơ không (luật lao động)."
        },
        "pitfalls": [
          "Chỉ nghĩ đến luật sở hữu trí tuệ khi nói về 'rủi ro pháp lý của AI', trong khi bảo mật dữ liệu và luật lao động cũng là hai mảng bắt buộc phải xem xét trong quy trình nhân sự."
        ],
        "check": {
          "question": "Một hãng luật được yêu cầu tư vấn cho khách hàng doanh nghiệp về việc dùng AI tạo sinh trong quy trình tuyển dụng. Ba nhóm luật nào cần được xem xét?",
          "options": [
            "Luật bất động sản, luật hình sự, luật dân sự",
            "Luật sở hữu trí tuệ, luật bảo mật dữ liệu, luật lao động",
            "Luật giao thông, luật thuế, luật doanh nghiệp",
            "Luật hôn nhân, luật thừa kế, luật đất đai"
          ],
          "answer": 1,
          "explanation": "Ba nhóm luật trực tiếp liên quan đến việc dùng AI trong tuyển dụng là sở hữu trí tuệ, bảo mật dữ liệu và luật lao động."
        },
        "takeaway": "Ứng dụng AI vào tuyển dụng phải đồng thời tuân thủ: Sở hữu trí tuệ + Bảo mật dữ liệu + Luật lao động."
      },
      {
        "label": "Thu thập web (Scraping)",
        "title": "Quy tắc Thu thập Dữ liệu & Xin phép",
        "summary": "Thu thập dữ liệu từ các trang web để huấn luyện AI đòi hỏi sự xin phép của chủ sở hữu và việc ghi chép quy trình sử dụng minh bạch.",
        "bullets": [
          "Cào dữ liệu web (Web Scraping): Khi công ty muốn lấy dữ liệu thông số sản phẩm từ website đối tác hoặc nhà sản xuất, **bắt buộc phải xin phép (Obtain permission)**.",
          "Thỏa thuận cấp phép dữ liệu (Licensing Agreement): Ký kết hợp đồng sử dụng dữ liệu rõ ràng, minh bạch quyền lợi và trách nhiệm.",
          "Minh bạch quy trình sử dụng AI: Doanh nghiệp cần ghi chép tài liệu rõ ràng về nguồn gốc dữ liệu và cách thức vận hành của hệ thống AI."
        ],
        "terms": [
          {
            "term": "Cào dữ liệu web (Web Scraping)",
            "definition": "Quá trình tự động trích xuất dữ liệu từ các trang web trên Internet."
          },
          {
            "term": "Xin phép sử dụng (Obtain Permission)",
            "definition": "Việc liên hệ chính thức và nhận được sự đồng thuận của chủ sở hữu bản quyền trước khi sử dụng dữ liệu."
          }
        ],
        "example": {
          "title": "Xây dựng mô hình từ web nhà sản xuất",
          "content": "Một công ty công nghệ muốn xây dựng chatbot tư vấn sản phẩm bằng dữ liệu trên website của nhà sản xuất: Hành động chuẩn xác là gửi công văn xin phép sử dụng dữ liệu chính thức."
        },
        "pitfalls": [
          "Tự ý cào dữ liệu thương mại vào ban đêm và cho rằng dữ liệu công khai trên mạng là miễn phí không cần xin phép."
        ],
        "check": {
          "question": "Khi một công ty công nghệ muốn thu thập dữ liệu từ trang web của đối tác để huấn luyện mô hình AI, hành động nào là đúng pháp luật?",
          "options": [
            "Công ty nên liên hệ xin phép (Obtain permission) sử dụng dữ liệu từ chủ sở hữu",
            "Âm thầm tải trộm dữ liệu vào ban đêm",
            "Xóa bỏ tên tác giả rồi nhận là dữ liệu của mình",
            "Thuê hacker tấn công máy chủ đối tác"
          ],
          "answer": 0,
          "explanation": "Xin phép chính thức và có thỏa thuận cấp phép là yêu cầu bắt buộc khi thu thập dữ liệu bên thứ ba."
        },
        "takeaway": "Luôn xin phép và có thỏa thuận rõ ràng trước khi thu thập dữ liệu web để đào tạo AI."
      },
      {
        "label": "Tội danh Phỉ báng",
        "title": "Phỉ báng (Defamation) & Hậu quả Pháp lý",
        "summary": "Tạo ra nội dung sai sự thật bằng AI làm tổn hại danh dự, uy tín của người khác cấu thành tội Phỉ báng (Defamation) và bị pháp luật nghiêm trị.",
        "bullets": [
          "Bản chất tội Phỉ báng (Defamation): Tạo ảnh, video hoặc bài viết sai sự thật mô tả một người có thật đang thực hiện hành vi phạm tội hoặc vô đạo đức.",
          "Hành vi bất hợp pháp: Đây là hành vi vi phạm pháp luật nghiêm trọng, không thể biện minh là 'tự do sáng tạo nghệ thuật'.",
          "Trách nhiệm kép: Người vi phạm có thể vừa bị kiện bồi thường thiệt hại (Dân sự) vừa bị truy tố phạt tiền hoặc phạt tù (Hình sự)."
        ],
        "terms": [
          {
            "term": "Phỉ báng (Defamation)",
            "definition": "Hành vi công bố thông tin sai sự thật làm tổn hại nghiêm trọng đến danh dự, nhân phẩm hoặc uy tín của cá nhân/tổ chức."
          }
        ],
        "example": {
          "title": "Tạo ảnh giả mạo bạn học",
          "content": "Sam dùng AI tạo ảnh giả mô tả bạn học Taylor đang ăn trộm trong cửa hàng rồi đăng lên mạng: Đây là hành vi phỉ báng (defamation) bất hợp pháp và Sam sẽ bị xử lý trước pháp luật."
        },
        "pitfalls": [
          "Nghĩ rằng chỉ cần ghi dòng chữ nhỏ 'Ảnh do AI tạo' là có thể thoải mái đăng ảnh bôi nhọ danh dự người khác."
        ],
        "check": {
          "question": "Hành vi sử dụng AI tạo ra hình ảnh giả mạo mô tả một người có thật đang thực hiện hành vi phi pháp rồi đăng lên mạng được định nghĩa là gì?",
          "options": [
            "Phỉ báng (Defamation), và đây là hành vi bất hợp pháp",
            "Tự do sáng tạo nghệ thuật hợp lệ",
            "Thử nghiệm phần mềm thông thường",
            "Kỹ thuật tạo ảnh chân dung"
          ],
          "answer": 0,
          "explanation": "Tạo và phát tán hình ảnh sai sự thật bôi nhọ người khác là hành vi phỉ báng (Defamation), vi phạm pháp luật nghiêm trọng."
        },
        "takeaway": "Tạo nội dung bôi nhọ danh dự người khác bằng AI là hành vi phỉ báng bất hợp pháp."
      },
      {
        "label": "Hành vi gây hại",
        "title": "Bắt nạt, Rình rập & Trách nhiệm Dân sự / Hình sự",
        "summary": "Sử dụng AI để bắt nạt qua mạng (Cyberbullying) hoặc rình rập (Stalking) sẽ kéo theo các chế tài nghiêm khắc về Trách nhiệm Dân sự và Hình sự.",
        "bullets": [
          "Bắt nạt qua mạng (Cyberbullying): Dùng AI tạo nội dung xúc phạm, chế giễu, đe dọa làm tổn thương tâm lý nạn nhân trên không gian mạng.",
          "Rình rập (Stalking): Sử dụng AI để thu thập, phân tích thông tin vị trí, theo dõi và quấy rối đời tư của người khác.",
          "Trách nhiệm Dân sự (Civil Liability): Bị tòa án buộc phải bồi thường thiệt hại tài chính và tổn thất tinh thần cho nạn nhân.",
          "Trách nhiệm Hình sự (Criminal Liability): Bị cơ quan công an điều tra, khởi tố hình sự và phải chịu án phạt tù nghiêm khắc."
        ],
        "terms": [
          {
            "term": "Trách nhiệm Dân sự (Civil Liability)",
            "definition": "Nghĩa vụ pháp lý phải bồi thường thiệt hại về vật chất hoặc tinh thần cho nạn nhân."
          },
          {
            "term": "Trách nhiệm Hình sự (Criminal Liability)",
            "definition": "Trách nhiệm phải chịu các hình phạt nghiêm khắc từ nhà nước (như phạt tiền hoặc phạt tù) do phạm tội."
          }
        ],
        "example": {
          "title": "Hậu quả của việc quấy rối bằng AI",
          "content": "Kẻ sử dụng AI tạo video đe dọa và tống tiền nạn nhân vừa bị tòa án tuyên phạt 5 năm tù (Trách nhiệm Hình sự) vừa phải bồi thường 500 triệu đồng (Trách nhiệm Dân sự)."
        },
        "pitfalls": [
          "Coi hành vi dùng AI ghép ảnh bắt nạt bạn bè chỉ là trò đùa vô hại không liên quan đến pháp luật."
        ],
        "check": {
          "question": "Người sử dụng AI để tạo nội dung đe dọa, bắt nạt và tống tiền người khác có thể phải đối mặt với những hậu quả pháp lý nào?",
          "options": [
            "Cả Trách nhiệm Dân sự (bồi thường tiền) và Trách nhiệm Hình sự (phạt tù)",
            "Chỉ bị nhắc nhở nhẹ nhàng và không có hậu quả gì",
            "Được tặng thêm dung lượng lưu trữ đám mây",
            "Được miễn trừ mọi trách nhiệm pháp lý"
          ],
          "answer": 0,
          "explanation": "Hành vi bắt nạt, đe dọa và tống tiền kéo theo cả trách nhiệm bồi thường dân sự lẫn án phạt tù hình sự."
        },
        "takeaway": "Bắt nạt và rình rập bằng AI sẽ bị xử lý nghiêm khắc bằng cả chế tài Dân sự và Hình sự."
      },
      {
        "label": "Deepfake & Gắn nhãn",
        "title": "Deepfake & Nghĩa vụ Gắn nhãn Thủy vân",
        "summary": "Deepfake là nội dung giả mạo danh tính tinh vi; việc gắn nhãn AI và Thủy vân số (Watermarking) là nghĩa vụ bắt buộc để minh bạch nguồn gốc.",
        "bullets": [
          "Bản chất Deepfake: Sử dụng AI để hoán đổi khuôn mặt, nhân bản giọng nói (Voice cloning) khiến người thật trông như đang nói điều họ chưa từng nói.",
          "Tác hại xã hội: Thao túng các cuộc bầu cử chính trị (làm giả phát ngôn ứng viên), lừa đảo giọng nói mượn tiền người thân, phá hoại an ninh trật tự.",
          "Thủy vân số (Digital Watermarking): Kỹ thuật nhúng dấu hiệu nhận diện ẩn hoặc hiện vào tệp tin để chứng minh đây là nội dung do AI tạo ra.",
          "Nghĩa vụ minh bạch: Bắt buộc gắn nhãn 'Do AI tạo' trên mọi ấn phẩm truyền thông tổng hợp."
        ],
        "terms": [
          {
            "term": "Deepfake",
            "definition": "Công nghệ sử dụng AI để tạo ra video, hình ảnh hoặc giọng nói giả mạo một người có thật với độ chân thực cao."
          },
          {
            "term": "Thủy vân số (Digital Watermarking)",
            "definition": "Kỹ thuật nhúng dấu hiệu nhận diện vào tệp tin để xác thực nguồn gốc và bản quyền nội dung AI."
          }
        ],
        "example": {
          "title": "Deepfake trong bầu cử",
          "content": "Trong cuộc tranh cử, phát tán video deepfake khiến đối thủ trông như đang phát ngôn phân biệt chủng tộc: Đây là hành vi lừa dối cử tri và phá hoại nền dân chủ."
        },
        "pitfalls": [
          "Tin ngay vào cuộc gọi mượn tiền khẩn cấp từ giọng nói giống người thân mà không gọi lại số điện thoại cá nhân để kiểm chứng."
        ],
        "check": {
          "question": "Công nghệ nào sử dụng AI để tạo ra hình ảnh, video hoặc giọng nói giả mạo một người thật đang nói hoặc làm những điều họ chưa từng làm?",
          "options": [
            "Deepfake (Giả mạo sâu)",
            "Few-shot Prompting",
            "Tokenization",
            "XML Parsing"
          ],
          "answer": 0,
          "explanation": "Deepfake là thuật ngữ chỉ các sản phẩm đa phương tiện tổng hợp do AI tạo ra để mạo danh con người thực tế."
        },
        "takeaway": "Cảnh giác với Deepfake; luôn minh bạch và gắn nhãn thủy vân cho nội dung do AI tạo ra."
      },
      {
        "label": "Giám sát con người",
        "title": "Human-in-the-loop & Liêm chính Học thuật",
        "summary": "AI chỉ là công cụ hỗ trợ; con người giữ quyền kiểm soát tối cao (Human-in-the-loop) và chịu toàn bộ trách nhiệm đạo đức, pháp lý.",
        "bullets": [
          "Sự giám sát của con người (Human-in-the-loop): Mọi quyết định quan trọng (y tế, pháp luật, tuyển dụng, báo chí) bắt buộc phải có sự phê duyệt của con người.",
          "Không đổ lỗi cho AI: Bạn không thể nói 'Do AI bảo tôi làm vậy' để thoái thác trách nhiệm trước pháp luật khi xảy ra thiệt hại.",
          "Liêm chính học thuật (Academic Integrity): Đảm bảo học sinh/sinh viên có trách nhiệm tự mình hoàn thành bài tập một cách trung thực; ngăn chặn hành vi gian lận dùng AI làm bài thi hộ (ví dụ: bài kiểm tra hệ thần kinh trong giờ khoa học)."
        ],
        "terms": [
          {
            "term": "Human-in-the-loop",
            "definition": "Mô hình thiết kế hệ thống AI đòi hỏi sự tương tác, kiểm tra và phê duyệt của con người tại các nút quyết định then chốt."
          },
          {
            "term": "Liêm chính học thuật (Academic Integrity)",
            "definition": "Chuẩn mực đạo đức yêu cầu người học phải trung thực, tự mình thực hiện bài tập và không gian lận."
          }
        ],
        "example": {
          "title": "Trách nhiệm của chuyên gia",
          "content": "Kỹ sư dùng AI thiết kế kết cấu cầu đường: Nếu cầu bị sập, kỹ sư đó phải chịu trách nhiệm hình sự và nghề nghiệp, không thể đổ lỗi cho thuật toán AI."
        },
        "pitfalls": [
          "Giao toàn bộ quyền ra quyết định tuyển dụng nhân sự cho AI mà không có sự thẩm định của chuyên viên nhân sự."
        ],
        "check": {
          "question": "Làm thế nào người dùng và tổ chức có thể loại bỏ hiệu quả nhất các rủi ro sai sót và pháp lý từ kết quả đầu ra của AI tạo sinh?",
          "options": [
            "Duy trì sự giám sát, rà soát và phê duyệt trực tiếp của con người (Human-in-the-loop)",
            "Chỉ sử dụng AI vào các ngày cuối tuần",
            "Tăng tốc độ bộ xử lý CPU",
            "Tắt màn hình khi AI đang tạo câu trả lời"
          ],
          "answer": 0,
          "explanation": "Sự giám sát trực tiếp của con người (Human-in-the-loop) là chốt chặn an toàn cốt lõi để loại bỏ rủi ro."
        },
        "takeaway": "Con người luôn là người chịu trách nhiệm cao nhất; AI không bao giờ nhận trách nhiệm thay con người."
      },
      {
        "label": "Tác động xã hội",
        "title": "Tác động Xã hội, Việc làm & Khoảng cách số",
        "summary": "AI phá vỡ rào cản ngôn ngữ và thúc đẩy sáng tạo, đồng thời tạo ra chuyển dịch việc làm và đặt ra thách thức về Khoảng cách số.",
        "bullets": [
          "3 tác động tích cực lớn nhất: Vượt qua rào cản ngôn ngữ (dịch thuật tức thì), khơi nguồn sáng tạo nghệ thuật, và nâng cao hiệu suất công việc hàng ngày.",
          "Tương lai việc làm: AI không thay thế toàn bộ con người mà tự động hóa tác vụ lặp lại và đóng vai trò như **công cụ tạo việc làm mới** (kỹ sư prompt, quản trị dữ liệu).",
          "Khoảng cách số (Digital Divide): Nguy cơ gia tăng bất bình đẳng giữa nhóm có điều kiện tiếp cận AI với nhóm thiếu thốn hạ tầng công nghệ.",
          "Tài nguyên & Môi trường: Trung tâm dữ liệu AI tiêu thụ lượng điện năng khổng lồ và đòi hỏi nguồn nước làm mát lớn."
        ],
        "terms": [
          {
            "term": "Khoảng cách số (Digital Divide)",
            "definition": "Sự bất bình đẳng về cơ hội tiếp cận và kỹ năng sử dụng công nghệ thông tin giữa các nhóm dân cư."
          },
          {
            "term": "Chuyển dịch việc làm (Job Transformation)",
            "definition": "Quá trình công nghệ định hình lại tính chất và kỹ năng của công việc thay vì xóa sổ hoàn toàn."
          }
        ],
        "example": {
          "title": "Lợi ích giao tiếp quốc tế",
          "content": "Chuyên gia tham dự hội nghị tại Đức dùng AI dịch tức thì 'Một mocha latte, làm ơn' $\rightarrow$ 'Einen Mokka Latte, bitte' để gọi đồ uống tự tin và thuận tiện."
        },
        "pitfalls": [
          "Tin vào nhận định cực đoan rằng 'Tương lai mọi công việc đều bị AI cướp mất và con người không còn việc gì để làm'."
        ],
        "check": {
          "question": "Ba tác động tích cực nổi bật nhất mà AI tạo sinh mang lại cho đời sống xã hội là gì?",
          "options": [
            "Giúp vượt qua rào cản ngôn ngữ, khơi nguồn sáng tạo và giúp thực hiện các nhiệm vụ cuộc sống hàng ngày hiệu quả hơn",
            "Xóa bỏ hoàn toàn nhu cầu học tập của học sinh, làm giảm nhu cầu giao tiếp giữa con người và tiêu thụ hết điện năng",
            "Thay thế toàn bộ bác sĩ và cấm người dân đi du lịch",
            "Làm máy tính chạy chậm lại và hạn chế sáng tạo"
          ],
          "answer": 0,
          "explanation": "Phá rào cản ngôn ngữ, khơi nguồn sáng tạo và nâng cao năng suất công việc là 3 giá trị xã hội tích cực nhất của AI."
        },
        "takeaway": "Khai thác mặt tích cực của AI để phát triển bản thân và chủ động thu hẹp khoảng cách số."
      }
    ]
  }
};
