// Sổ tay Bài giảng Tự động chuẩn Pearson Certiport Generative AI Foundation
// Hệ thống 85 Slide Micro-learning Tích hợp Giọng đọc VieNeu v3 Turbo 48kHz (Home Server Speech Cluster)

import type { LecturePart, LectureSlide } from '@/shared/learning';

export const LECTURE_PARTS: LecturePart[] = [
  {
    "number": 1,
    "title": "Phần 1: Phương pháp và Phương pháp luận AI tạo sinh",
    "shortName": "Phương pháp & Mô hình",
    "range": "Slide 1 – Slide 24",
    "slidesCount": 24,
    "color": "emerald"
  },
  {
    "number": 2,
    "title": "Phần 2: Kỹ thuật Prompting & Sáng tạo nội dung",
    "shortName": "Prompting & Đa phương thức",
    "range": "Slide 25 – Slide 46",
    "slidesCount": 22,
    "color": "blue"
  },
  {
    "number": 3,
    "title": "Phần 3: Đánh giá, Xác minh & Phát hiện ảo giác",
    "shortName": "Đánh giá & Xác minh",
    "range": "Slide 47 – Slide 64",
    "slidesCount": 18,
    "color": "amber"
  },
  {
    "number": 4,
    "title": "Phần 4: Đạo đức, Pháp lý & Trách nhiệm xã hội",
    "shortName": "Đạo đức, Pháp lý & Trách nhiệm",
    "range": "Slide 65 – Slide 85",
    "slidesCount": 21,
    "color": "rose"
  }
];

export const LECTURE_SLIDES: LectureSlide[] = [
  {
    "id": "slide-01",
    "partNumber": 1,
    "partTitle": "Phần 1: Phương pháp và Phương pháp luận AI tạo sinh",
    "slideNumber": 1,
    "title": "AI tạo sinh tạo ra điều gì?",
    "subtitle": "AI tạo sinh học quy luật từ dữ liệu để tạo nội dung theo yêu cầu; nội dung không mặc nhiên đúng hoặc độc nhất.",
    "keyPoints": [
      "Đầu ra có thể là văn bản, ảnh, âm thanh, video hoặc mã.",
      "Có thể tạo phản hồi mới từ kiến thức và ngữ cảnh; cũng có nguy cơ lặp lại dữ liệu đã học.",
      "Phân biệt tạo nội dung với dự đoán một nhãn hoặc truy xuất nguồn."
    ],
    "frameworkBox": {
      "title": "Tình huống áp dụng (Ví dụ áp dụng)",
      "items": [
        {
          "label": "Tình huống",
          "desc": "Viết email giới thiệu sản phẩm theo dữ liệu được cung cấp là tạo sinh."
        },
        {
          "label": "Ghi nhớ cốt lõi",
          "desc": "AI tạo sinh học quy luật từ dữ liệu để tạo nội dung theo yêu cầu; nội dung không mặc nhiên đúng hoặc độc nhất."
        }
      ]
    },
    "examTrap": "Không học rằng mọi output đều chưa từng tồn tại hoặc tự động có bản quyền.",
    "lectureScript": "Chào các bạn. Ở slide số 1, chúng ta cùng tìm hiểu: AI tạo sinh tạo ra điều gì?. AI tạo sinh học quy luật từ dữ liệu để tạo nội dung theo yêu cầu; nội dung không mặc nhiên đúng hoặc độc nhất. Điểm mấu chốt: Đầu ra có thể là văn bản, ảnh, âm thanh, video hoặc mã. Ví dụ: Viết email giới thiệu sản phẩm theo dữ liệu được cung cấp là tạo sinh. Lưu ý bẫy đề thi: Không học rằng mọi output đều chưa từng tồn tại hoặc tự động có bản quyền.",
    "audioSrc": "/audio/lecture/slide-01.mp3",
    "durationSeconds": 23.7,
    "relatedQuestions": [
      99,
      110,
      121,
      147,
      160,
      162,
      163
    ]
  },
  {
    "id": "slide-02",
    "partNumber": 1,
    "partTitle": "Phần 1: Phương pháp và Phương pháp luận AI tạo sinh",
    "slideNumber": 2,
    "title": "AI tạo sinh vs AI phân tích/dự báo",
    "subtitle": "Predictive AI xếp loại và dự đoán; Generative AI sáng tạo nội dung mới.",
    "keyPoints": [
      "AI phân tích/dự báo: Phân loại email (Spam / Không spam), chấm điểm tín dụng, dự đoán giá nhà dựa trên diện tích.",
      "AI tạo sinh: Tự viết một email bán hàng mới, soạn thảo hợp đồng vay vốn, vẽ thiết kế mẫu nhà 3D.",
      "Kết hợp trong thực tế: AI phân tích tìm ra khách hàng tiềm năng, sau đó AI tạo sinh tự động viết thư chào hàng cá nhân hóa.",
      "AI phân biệt (Discriminative AI): Chuyên phân loại dữ liệu vào các nhóm có sẵn (ví dụ nhận diện email spam) — không tạo ra nội dung mới như AI tạo sinh."
    ],
    "frameworkBox": {
      "title": "Thuật ngữ & Định nghĩa cốt lõi (Phân biệt)",
      "items": [
        {
          "label": "AI dự báo (Predictive AI)",
          "desc": "Hệ thống AI chuyên phân tích dữ liệu lịch sử để phân loại hoặc dự đoán các kết quả trong tương lai."
        },
        {
          "label": "AI phân biệt (Discriminative AI)",
          "desc": "Hệ thống AI học ranh giới phân loại giữa các nhóm dữ liệu (ví dụ: thật/giả, spam/không spam) thay vì tạo nội dung mới — thường đóng vai trò bộ phân loại, khác với AI tạo sinh."
        }
      ]
    },
    "examTrap": "Phân biệt mục tiêu bài toán phân loại với tạo nội dung; mô hình tạo sinh vẫn có thể được dùng để phân loại bằng prompt.",
    "lectureScript": "Chào các bạn. Ở slide số 2, chúng ta cùng tìm hiểu: AI tạo sinh vs AI phân tích/dự báo. AI phân tích/dự báo (Predictive AI) chuyên phân loại và dự đoán xu hướng từ dữ liệu cũ, trong khi AI tạo sinh tạo ra nội dung mới. Điểm mấu chốt: AI phân tích/dự báo: Phân loại email (Spam / Không spam), chấm điểm tín dụng, dự đoán giá nhà dựa trên diện tích. Ví dụ: Phát hiện đánh giá của khách hàng là hài lòng hay thất vọng: AI phân tích. Viết thư phản hồi xin lỗi và bồi thường cho khách: AI tạo sinh. Lưu ý bẫy đề thi: Phân biệt mục tiêu bài toán phân loại với tạo nội dung; mô hình tạo sinh vẫn có thể được dùng để phân loại bằng prompt.",
    "audioSrc": "/audio/lecture/slide-02.mp3",
    "durationSeconds": 35.5,
    "relatedQuestions": [
      91,
      110,
      112,
      123,
      147,
      162,
      163
    ]
  },
  {
    "id": "slide-03",
    "partNumber": 1,
    "partTitle": "Phần 1: Phương pháp và Phương pháp luận AI tạo sinh",
    "slideNumber": 3,
    "title": "AI tạo sinh và công cụ tìm kiếm",
    "subtitle": "Tìm kiếm ưu tiên truy xuất nguồn; AI tạo sinh ưu tiên tổng hợp phản hồi. Hai chức năng có thể kết hợp trong một sản phẩm.",
    "keyPoints": [
      "Tìm kiếm giúp tới trang, báo cáo và tài liệu có sẵn.",
      "AI có thể viết bản nháp, giải thích và tóm tắt.",
      "Cả hai có thể nhận câu hỏi tự nhiên; không phân biệt bằng số câu trả lời hoặc cách gõ từ khóa."
    ],
    "frameworkBox": {
      "title": "Tình huống áp dụng (Ví dụ áp dụng)",
      "items": [
        {
          "label": "Tình huống",
          "desc": "Cần số liệu mới: tìm báo cáo gốc; cần email: nhờ AI soạn và kiểm tra dữ kiện."
        },
        {
          "label": "Ghi nhớ cốt lõi",
          "desc": "Tìm kiếm ưu tiên truy xuất nguồn; AI tạo sinh ưu tiên tổng hợp phản hồi. Hai chức năng có thể kết hợp trong một sản phẩm."
        }
      ]
    },
    "examTrap": "Đừng học rằng công cụ tìm kiếm chỉ nhận cụm từ, hoặc AI không bao giờ dẫn nguồn.",
    "lectureScript": "Chào các bạn. Ở slide số 3, chúng ta cùng tìm hiểu: AI tạo sinh và công cụ tìm kiếm. Tìm kiếm ưu tiên truy xuất nguồn; AI tạo sinh ưu tiên tổng hợp phản hồi. Hai chức năng có thể kết hợp trong một sản phẩm. Điểm mấu chốt: Tìm kiếm giúp tới trang, báo cáo và tài liệu có sẵn. Ví dụ: Cần số liệu mới: tìm báo cáo gốc; cần email: nhờ AI soạn và kiểm tra dữ kiện. Lưu ý bẫy đề thi: Đừng học rằng công cụ tìm kiếm chỉ nhận cụm từ, hoặc AI không bao giờ dẫn nguồn.",
    "audioSrc": "/audio/lecture/slide-03.mp3",
    "durationSeconds": 25.5,
    "relatedQuestions": [
      91,
      96,
      99,
      100,
      104,
      114,
      123,
      147
    ]
  },
  {
    "id": "slide-04",
    "partNumber": 1,
    "partTitle": "Phần 1: Phương pháp và Phương pháp luận AI tạo sinh",
    "slideNumber": 4,
    "title": "Kiến trúc Transformer & Cơ chế Tự chú ý",
    "subtitle": "Transformer và Self-Attention là trái tim của các mô hình ngôn ngữ lớn hiện đại.",
    "keyPoints": [
      "Cơ chế Tự chú ý (Self-Attention): Cho phép mô hình tính toán mối liên hệ giữa mọi từ trong câu mà không bị giới hạn thứ tự trước sau.",
      "Xử lý song song (Parallel Processing): Khắc phục nhược điểm xử lý tuần tự của mạng RNN cũ, giúp huấn luyện nhanh trên dữ liệu khổng lồ.",
      "Ứng dụng cốt lõi: Nền tảng của các mô hình GPT (OpenAI), Claude (Anthropic), Gemini (Google), Llama (Meta)."
    ],
    "frameworkBox": {
      "title": "Thuật ngữ & Định nghĩa cốt lõi (Kiến trúc LLM)",
      "items": [
        {
          "label": "Transformer",
          "desc": "Kiến trúc mạng nơ-ron đột phá ra mắt năm 2017, sử dụng cơ chế Attention để xử lý ngôn ngữ song song."
        },
        {
          "label": "Self-Attention (Tự chú ý)",
          "desc": "Cơ chế toán học giúp mô hình xác định mức độ quan trọng và liên kết giữa các từ trong cùng một câu."
        }
      ]
    },
    "examTrap": "Nghĩ rằng Transformer chỉ dùng để dịch thuật từng từ một theo từ điển.",
    "lectureScript": "Chào các bạn. Ở slide số 4, chúng ta cùng tìm hiểu: Kiến trúc Transformer & Cơ chế Tự chú ý. Transformer là kiến trúc mạng nơ-ron nền tảng cho hầu hết các mô hình ngôn ngữ lớn (LLM), sử dụng cơ chế Attention để hiểu ngữ cảnh toàn diện. Điểm mấu chốt: Cơ chế Tự chú ý (Self-Attention): Cho phép mô hình tính toán mối liên hệ giữa mọi từ trong câu mà không bị giới hạn thứ tự trước sau. Ví dụ: Trong câu 'Con chó không qua đường vì nó quá mệt', cơ chế Self-Attention giúp mô hình xác định từ 'nó' đang chỉ 'con chó' chứ không phải 'con đường'. Lưu ý bẫy đề thi: Nghĩ rằng Transformer chỉ dùng để dịch thuật từng từ một theo từ điển.",
    "audioSrc": "/audio/lecture/slide-04.mp3",
    "durationSeconds": 33.0,
    "relatedQuestions": [
      100,
      110,
      162
    ]
  },
  {
    "id": "slide-05",
    "partNumber": 1,
    "partTitle": "Phần 1: Phương pháp và Phương pháp luận AI tạo sinh",
    "slideNumber": 5,
    "title": "Mô hình Khuếch tán (Diffusion Models)",
    "subtitle": "Diffusion Model tạo hình ảnh bằng cách khử nhiễu từng bước từ một bức tranh hạt ngẫu nhiên.",
    "keyPoints": [
      "Quá trình thêm nhiễu (Forward Process): Thêm dần nhiễu ngẫu nhiên Gaussian vào ảnh thật cho đến khi ảnh trở thành nhiễu hạt hoàn toàn.",
      "Quá trình khử nhiễu (Reverse Denoising): Mô hình học cách đoán và loại bỏ từng lớp nhiễu để phục hồi lại hình ảnh sắc nét theo câu lệnh prompt.",
      "Ứng dụng hàng đầu: Midjourney, Stable Diffusion, DALL-E 3, Adobe Firefly."
    ],
    "frameworkBox": {
      "title": "Thuật ngữ & Định nghĩa cốt lõi (Kiến trúc Ảnh)",
      "items": [
        {
          "label": "Diffusion Model (Mô hình khuếch tán)",
          "desc": "Họ mô hình tạo dữ liệu bằng cách học cách khử nhiễu ngẫu nhiên từng bước (denoising)."
        },
        {
          "label": "Khử nhiễu (Denoising)",
          "desc": "Quá trình loại bỏ tạp âm ngẫu nhiên để tái tạo lại các chi tiết hình ảnh rõ nét."
        }
      ]
    },
    "examTrap": "Lầm tưởng mô hình AI tạo ảnh bằng cách cắt ghép các mảnh ảnh tìm thấy trên Google Images.",
    "lectureScript": "Chào các bạn. Ở slide số 5, chúng ta cùng tìm hiểu: Mô hình Khuếch tán (Diffusion Models). Mô hình khuếch tán tạo hình ảnh chất lượng cao bằng cách học cách loại bỏ nhiễu ngẫu nhiên từng bước từ một khung hình mờ đục. Điểm mấu chốt: Quá trình thêm nhiễu (Forward Process): Thêm dần nhiễu ngẫu nhiên Gaussian vào ảnh thật cho đến khi ảnh trở thành nhiễu hạt hoàn toàn. Ví dụ: Khi bạn nhập prompt 'Một ngọn núi tuyết lúc bình minh', mô hình bắt đầu từ một mảng nhiễu hạt xám và qua 30-50 bước khử nhiễu để hiện rõ đỉnh núi tuyết rực rỡ. Lưu ý bẫy đề thi: Lầm tưởng mô hình AI tạo ảnh bằng cách cắt ghép các mảnh ảnh tìm thấy trên Google Images.",
    "audioSrc": "/audio/lecture/slide-05.mp3",
    "durationSeconds": 32.0,
    "relatedQuestions": [
      114,
      117,
      121,
      123,
      162
    ]
  },
  {
    "id": "slide-06",
    "partNumber": 1,
    "partTitle": "Phần 1: Phương pháp và Phương pháp luận AI tạo sinh",
    "slideNumber": 6,
    "title": "Mạng đối nghịch tạo sinh (GAN)",
    "subtitle": "GAN = Generator (Tạo giả) đấu với Discriminator (Bắt bài) để cùng tiến bộ.",
    "keyPoints": [
      "Mạng tạo sinh (Generator): Đóng vai 'kẻ làm giả', cố gắng tạo ra các mẫu ảnh giả sao cho giống thật nhất.",
      "Mạng phân biệt (Discriminator): Đóng vai 'chuyên gia giám định', cố gắng phát hiện xem mẫu ảnh là thật hay do Generator làm giả.",
      "Kết quả huấn luyện: Qua hàng nghìn vòng đấu trí, Generator học được cách tạo ra hình ảnh khuôn mặt hoặc phong cảnh chân thực đến mức mắt người không phân biệt được."
    ],
    "frameworkBox": {
      "title": "Thuật ngữ & Định nghĩa cốt lõi (Kiến trúc Đối kháng)",
      "items": [
        {
          "label": "GAN (Generative Adversarial Network)",
          "desc": "Kiến trúc mạng AI gồm 2 thành phần đối kháng nhau để liên tục nâng cao độ chân thực của mẫu tạo ra."
        },
        {
          "label": "Generator",
          "desc": "Mạng nơ-ron có nhiệm vụ tạo ra dữ liệu giả."
        },
        {
          "label": "Discriminator",
          "desc": "Mạng nơ-ron có nhiệm vụ phân biệt dữ liệu thật từ tập huấn luyện với dữ liệu giả do Generator tạo."
        }
      ]
    },
    "examTrap": "Nhầm lẫn vai trò của Generator (tạo mẫu) và Discriminator (đánh giá/giám định).",
    "lectureScript": "Chào các bạn. Ở slide số 6, chúng ta cùng tìm hiểu: Mạng đối nghịch tạo sinh (GAN). GAN bao gồm hai mạng nơ-ron cạnh tranh đối kháng trực tiếp với nhau: Mạng tạo sinh (Generator) và Mạng phân biệt (Discriminator). Điểm mấu chốt: Mạng tạo sinh (Generator): Đóng vai 'kẻ làm giả', cố gắng tạo ra các mẫu ảnh giả sao cho giống thật nhất. Ví dụ: Trang web 'ThisPersonDoesNotExist' sử dụng StyleGAN để tạo ra hàng triệu bức ảnh chân dung người ảo vô cùng chân thực mà người đó không có thật. Lưu ý bẫy đề thi: Nhầm lẫn vai trò của Generator (tạo mẫu) và Discriminator (đánh giá/giám định).",
    "audioSrc": "/audio/lecture/slide-06.mp3",
    "durationSeconds": 31.4,
    "relatedQuestions": [
      96,
      123,
      126,
      138,
      145
    ]
  },
  {
    "id": "slide-07",
    "partNumber": 1,
    "partTitle": "Phần 1: Phương pháp và Phương pháp luận AI tạo sinh",
    "slideNumber": 7,
    "title": "Bộ tự mã hóa biến phân (VAE)",
    "subtitle": "VAE nén dữ liệu vào không gian ẩn xác suất rồi giải mã để tạo các biến thể mới.",
    "keyPoints": [
      "Bộ mã hóa (Encoder): Nén bức ảnh hoặc âm thanh thành một vector biểu diễn trong không gian ẩn nhiều chiều.",
      "Không gian ẩn liên tục (Continuous Latent Space): Sắp xếp các đặc trưng tương đồng nằm gần nhau, cho phép chuyển đổi mượt mà giữa các kiểu mẫu.",
      "Bộ giải mã (Decoder): Nhận điểm dữ liệu từ không gian ẩn và tái tạo lại thành nội dung hoàn chỉnh mới."
    ],
    "frameworkBox": {
      "title": "Thuật ngữ & Định nghĩa cốt lõi (Kiến trúc Không gian ẩn)",
      "items": [
        {
          "label": "VAE (Variational Autoencoder)",
          "desc": "Mô hình tạo sinh nén dữ liệu vào phân phối xác suất trong không gian ẩn để sinh dữ liệu mới."
        },
        {
          "label": "Không gian ẩn (Latent Space)",
          "desc": "Không gian toán học trừu tượng biểu diễn các đặc trưng cốt lõi của dữ liệu."
        }
      ]
    },
    "examTrap": "Nghĩ rằng VAE chỉ là công cụ nén file ZIP thông thường không có khả năng sinh dữ liệu mới.",
    "lectureScript": "Chào các bạn. Ở slide số 7, chúng ta cùng tìm hiểu: Bộ tự mã hóa biến phân (VAE). VAE nén dữ liệu đầu vào vào một không gian ẩn xác suất (Latent Space) và giải mã để tạo ra các biến thể mới mượt mà. Điểm mấu chốt: Bộ mã hóa (Encoder): Nén bức ảnh hoặc âm thanh thành một vector biểu diễn trong không gian ẩn nhiều chiều. Ví dụ: Sử dụng VAE để điều chỉnh độ dài mái tóc hoặc độ cười trên khuôn mặt bằng cách di chuyển nhẹ vị trí tọa độ trong không gian ẩn. Lưu ý bẫy đề thi: Nghĩ rằng VAE chỉ là công cụ nén file ZIP thông thường không có khả năng sinh dữ liệu mới.",
    "audioSrc": "/audio/lecture/slide-07.mp3",
    "durationSeconds": 30.8,
    "relatedQuestions": [
      112,
      145,
      147,
      157,
      160,
      162
    ]
  },
  {
    "id": "slide-08",
    "partNumber": 1,
    "partTitle": "Phần 1: Phương pháp và Phương pháp luận AI tạo sinh",
    "slideNumber": 8,
    "title": "Thu thập, tiền xử lý và gán nhãn",
    "subtitle": "Thu thập, làm sạch, mã hóa và gán nhãn là các thao tác khác nhau trong chuẩn bị dữ liệu.",
    "keyPoints": [
      "Thu thập: nguồn dữ liệu, quyền sử dụng và mức đại diện.",
      "Tiền xử lý: làm sạch, chuẩn hóa, chia token hoặc xử lý định dạng.",
      "Gán nhãn: tạo mô tả/nhãn; gán trọng số là thao tác khác, dù cùng ảnh hưởng quá trình học.",
      "Cặp ảnh–văn bản có thể có nhãn thủ công hoặc tự động; phải kiểm soát chất lượng."
    ],
    "frameworkBox": {
      "title": "Tình huống áp dụng (Ví dụ áp dụng)",
      "items": [
        {
          "label": "Tình huống",
          "desc": "Ảnh kèm mô tả “chó trắng trên cỏ” giúp mô hình học liên hệ từ–ảnh."
        },
        {
          "label": "Ghi nhớ cốt lõi",
          "desc": "Thu thập, làm sạch, mã hóa và gán nhãn là các thao tác khác nhau trong chuẩn bị dữ liệu."
        }
      ]
    },
    "examTrap": "Mô hình không phải loại nào cũng bắt buộc có nhãn thủ công; không đồng nhất gán trọng số với gán nhãn.",
    "lectureScript": "Chào các bạn. Ở slide số 8, chúng ta cùng tìm hiểu: Thu thập, tiền xử lý và gán nhãn. Thu thập, làm sạch, mã hóa và gán nhãn là các thao tác khác nhau trong chuẩn bị dữ liệu. Điểm mấu chốt: Thu thập: nguồn dữ liệu, quyền sử dụng và mức đại diện. Ví dụ: Ảnh kèm mô tả “chó trắng trên cỏ” giúp mô hình học liên hệ từ–ảnh. Lưu ý bẫy đề thi: Mô hình không phải loại nào cũng bắt buộc có nhãn thủ công; không đồng nhất gán trọng số với gán nhãn.",
    "audioSrc": "/audio/lecture/slide-08.mp3",
    "durationSeconds": 22.9,
    "relatedQuestions": [
      160,
      161,
      162,
      163
    ]
  },
  {
    "id": "slide-09",
    "partNumber": 1,
    "partTitle": "Phần 1: Phương pháp và Phương pháp luận AI tạo sinh",
    "slideNumber": 9,
    "title": "Huấn luyện và suy luận",
    "subtitle": "Huấn luyện điều chỉnh mô hình từ dữ liệu; suy luận dùng mô hình đã học để tạo đầu ra.",
    "keyPoints": [
      "Huấn luyện lớn có thể tốn nhiều GPU, điện và dữ liệu.",
      "Triển khai cung cấp mô hình cho người dùng hoặc ứng dụng.",
      "Suy luận cũng cần tài nguyên; mức yêu cầu tùy mô hình và tải.",
      "Không phải mọi tác vụ đều cần siêu máy tính ở máy người dùng."
    ],
    "frameworkBox": {
      "title": "Tình huống áp dụng (Ví dụ áp dụng)",
      "items": [
        {
          "label": "Tình huống",
          "desc": "Dùng một mô hình có sẵn tạo đoạn văn là suy luận, không phải huấn luyện lại."
        },
        {
          "label": "Ghi nhớ cốt lõi",
          "desc": "Huấn luyện điều chỉnh mô hình từ dữ liệu; suy luận dùng mô hình đã học để tạo đầu ra."
        }
      ]
    },
    "examTrap": "Đừng gộp yêu cầu phần cứng của huấn luyện lớn với dùng dịch vụ đám mây.",
    "lectureScript": "Chào các bạn. Ở slide số 9, chúng ta cùng tìm hiểu: Huấn luyện và suy luận. Huấn luyện điều chỉnh mô hình từ dữ liệu; suy luận dùng mô hình đã học để tạo đầu ra. Điểm mấu chốt: Huấn luyện lớn có thể tốn nhiều GPU, điện và dữ liệu. Ví dụ: Dùng một mô hình có sẵn tạo đoạn văn là suy luận, không phải huấn luyện lại. Lưu ý bẫy đề thi: Đừng gộp yêu cầu phần cứng của huấn luyện lớn với dùng dịch vụ đám mây.",
    "audioSrc": "/audio/lecture/slide-09.mp3",
    "durationSeconds": 21.4,
    "relatedQuestions": [
      91,
      96,
      99,
      100,
      102,
      104,
      117,
      145
    ]
  },
  {
    "id": "slide-10",
    "partNumber": 1,
    "partTitle": "Phần 1: Phương pháp và Phương pháp luận AI tạo sinh",
    "slideNumber": 10,
    "title": "Phương thức Text-to-Text & Text-to-Image",
    "subtitle": "Text-to-Text phục vụ câu chữ và logic; Text-to-Image phục vụ hình ảnh và đồ họa.",
    "keyPoints": [
      "Text-to-Text: Đầu vào là văn bản, đầu ra là văn bản mới (soạn email, tóm tắt báo cáo, dịch thuật, viết mã nguồn, trả lời câu hỏi).",
      "Text-to-Image: Đầu vào là câu lệnh mô tả bằng chữ, đầu ra là hình ảnh mới (logo, tranh nghệ thuật, ảnh chụp sản phẩm, sơ đồ kiến trúc).",
      "Image-to-Image: Đầu vào là ảnh gốc kèm câu lệnh điều chỉnh, đầu ra là ảnh đã được chuyển đổi phong cách hoặc bổ sung chi tiết."
    ],
    "frameworkBox": {
      "title": "Thuật ngữ & Định nghĩa cốt lõi (Phương thức Văn bản & Ảnh)",
      "items": [
        {
          "label": "Text-to-Text",
          "desc": "Tác vụ nhận đầu vào là văn bản và sinh ra kết quả đầu ra là văn bản."
        },
        {
          "label": "Text-to-Image",
          "desc": "Tác vụ nhận đầu vào là văn bản mô tả và sinh ra kết quả là hình ảnh minh họa."
        }
      ]
    },
    "examTrap": "Kỳ vọng công cụ Text-to-Text thuần túy có thể tự render trực tiếp file ảnh độ phân giải cao.",
    "lectureScript": "Chào các bạn. Ở slide số 10, chúng ta cùng tìm hiểu: Phương thức Text-to-Text & Text-to-Image. Hai phương thức ứng dụng phổ biến nhất của AI tạo sinh trong công việc văn phòng và thiết kế sáng tạo. Điểm mấu chốt: Text-to-Text: Đầu vào là văn bản, đầu ra là văn bản mới (soạn email, tóm tắt báo cáo, dịch thuật, viết mã nguồn, trả lời câu hỏi). Ví dụ: Nhập yêu cầu 'Viết bài quảng cáo cà phê': Text-to-Text. Nhập yêu cầu 'Vẽ một tách cà phê bốc khói trên bàn gỗ lúc sáng sớm': Text-to-Image. Lưu ý bẫy đề thi: Kỳ vọng công cụ Text-to-Text thuần túy có thể tự render trực tiếp file ảnh độ phân giải cao.",
    "audioSrc": "/audio/lecture/slide-10.mp3",
    "durationSeconds": 31.1,
    "relatedQuestions": [
      97,
      99,
      100,
      102,
      123,
      163
    ]
  },
  {
    "id": "slide-11",
    "partNumber": 1,
    "partTitle": "Phần 1: Phương pháp và Phương pháp luận AI tạo sinh",
    "slideNumber": 11,
    "title": "Ba kiểu Tóm tắt: Trích xuất, Trừu tượng & Theo truy vấn",
    "subtitle": "Trích xuất = lấy nguyên câu gốc; Trừu tượng = viết lại bằng lời mới; Theo truy vấn = chỉ trả lời đúng câu hỏi.",
    "keyPoints": [
      "Tóm tắt Trích xuất (Extractive): Lấy nguyên văn các câu quan trọng nhất từ tài liệu gốc, ghép lại thành bản tóm tắt — không tạo câu chữ mới.",
      "Tóm tắt Trừu tượng (Abstractive): Đọc hiểu toàn bộ nội dung rồi diễn giải lại bằng câu chữ hoàn toàn mới, súc tích và tự nhiên hơn.",
      "Tóm tắt Theo truy vấn (Query-based): Chỉ trả lời đúng phần thông tin liên quan đến một câu hỏi cụ thể, bỏ qua phần còn lại của tài liệu."
    ],
    "frameworkBox": {
      "title": "Thuật ngữ & Định nghĩa cốt lõi (Xử lý văn bản)",
      "items": [
        {
          "label": "Tóm tắt Trích xuất (Extractive Summarization)",
          "desc": "Kỹ thuật chọn và ghép nguyên văn những câu quan trọng nhất từ văn bản gốc."
        },
        {
          "label": "Tóm tắt Trừu tượng (Abstractive Summarization)",
          "desc": "Kỹ thuật viết lại nội dung bằng ngôn từ mới, giữ đúng ý nghĩa nhưng không sao chép nguyên câu."
        }
      ]
    },
    "examTrap": "Nhầm lẫn Tóm tắt Trích xuất với Tóm tắt Trừu tượng vì cả hai đều làm ngắn gọn văn bản — điểm khác biệt là có tạo câu chữ MỚI hay không.",
    "lectureScript": "Chào các bạn. Ở slide số 11, chúng ta cùng tìm hiểu: Ba kiểu Tóm tắt: Trích xuất, Trừu tượng & Theo truy vấn. AI tạo sinh có thể tóm tắt văn bản theo 3 cách khác nhau tùy vào mục tiêu: giữ nguyên câu gốc, diễn giải lại, hoặc chỉ trả lời đúng trọng tâm câu hỏi. Điểm mấu chốt: Tóm tắt Trích xuất (Extractive): Lấy nguyên văn các câu quan trọng nhất từ tài liệu gốc, ghép lại thành bản tóm tắt — không tạo câu chữ mới. Ví dụ: Với một báo cáo tài chính dài 10 trang: Trích xuất = ghép 5 câu quan trọng nhất nguyên văn; Trừu tượng = viết lại thành 1 đoạn văn mới tóm lược ý chính; Theo truy vấn = chỉ trả lời 'Lợi nhuận quý 3 là bao nhiêu?'. Lưu ý bẫy đề thi: Nhầm lẫn Tóm tắt Trích xuất với Tóm tắt Trừu tượng vì cả hai đều làm ngắn gọn văn bản — điểm khác biệt là có tạo câu chữ MỚI hay không.",
    "audioSrc": "/audio/lecture/slide-11.mp3",
    "durationSeconds": 40.3,
    "relatedQuestions": [
      94,
      138,
      157
    ]
  },
  {
    "id": "slide-12",
    "partNumber": 1,
    "partTitle": "Phần 1: Phương pháp và Phương pháp luận AI tạo sinh",
    "slideNumber": 12,
    "title": "Phương thức Âm thanh & Giọng nói (TTS & ASR)",
    "subtitle": "TTS biến chữ thành tiếng nói; ASR biến tiếng nói thành chữ viết.",
    "keyPoints": [
      "Text-to-Audio (TTS - Text to Speech): Chuyển kịch bản chữ thành giọng đọc tự nhiên, lồng tiếng video, tạo hiệu ứng âm thanh hoặc sáng tác bài hát (ElevenLabs, Suno).",
      "Audio-to-Text (ASR - Nhận dạng giọng nói): Nghe file âm thanh/giọng nói và tự động chuyển đổi thành văn bản, tạo phụ đề video (OpenAI Whisper).",
      "Tương tác hai chiều: Người dùng nói chuyện với AI bằng giọng nói (Voice Mode) kết hợp cả ASR (để nghe) và TTS (để trả lời bằng giọng nói)."
    ],
    "frameworkBox": {
      "title": "Thuật ngữ & Định nghĩa cốt lõi (Phương thức Âm thanh)",
      "items": [
        {
          "label": "Text-to-Speech (TTS)",
          "desc": "Công nghệ tổng hợp tiếng nói nhân tạo từ văn bản chữ viết."
        },
        {
          "label": "Automatic Speech Recognition (ASR)",
          "desc": "Công nghệ nhận diện và chuyển đổi giọng nói thành văn bản chữ viết."
        }
      ]
    },
    "examTrap": "Chọn nhầm Audio-to-Text khi mục đích là tạo ra giọng nói thuyết minh từ bài viết có sẵn.",
    "lectureScript": "Chào các bạn. Ở slide số 12, chúng ta cùng tìm hiểu: Phương thức Âm thanh & Giọng nói (TTS & ASR). Chuyển đổi hai chiều giữa văn bản chữ viết và âm thanh giọng nói phục vụ lồng tiếng, trợ lý ảo và bóc băng ghi âm. Điểm mấu chốt: Text-to-Audio (TTS - Text to Speech): Chuyển kịch bản chữ thành giọng đọc tự nhiên, lồng tiếng video, tạo hiệu ứng âm thanh hoặc sáng tác bài hát (ElevenLabs, Suno). Ví dụ: Một đạo diễn muốn nghe thử giọng đọc diễn viên cho kịch bản hoạt hình: Dùng công cụ Text-to-Audio (TTS). Lưu ý bẫy đề thi: Chọn nhầm Audio-to-Text khi mục đích là tạo ra giọng nói thuyết minh từ bài viết có sẵn.",
    "audioSrc": "/audio/lecture/slide-12.mp3",
    "durationSeconds": 33.5,
    "relatedQuestions": [
      93,
      123,
      163
    ]
  },
  {
    "id": "slide-13",
    "partNumber": 1,
    "partTitle": "Phần 1: Phương pháp và Phương pháp luận AI tạo sinh",
    "slideNumber": 13,
    "title": "Phương thức Video đa phương tiện",
    "subtitle": "Image-to-Video thổi hồn chuyển động và góc quay điện ảnh vào những bức ảnh tĩnh.",
    "keyPoints": [
      "Text-to-Video: Nhập kịch bản mô tả phân cảnh và các chuyển động để AI tạo đoạn video hoàn chỉnh (Sora, Runway, Kling).",
      "Image-to-Video: Nạp một bức ảnh tĩnh và yêu cầu AI làm chuyển động các chi tiết (nước chảy, mây bay, nhân vật cử động) và điều khiển góc quay camera.",
      "Kiểm soát chuyển động: Sử dụng các tham số điều khiển lia máy (pan), phóng to/thu nhỏ (zoom), góc nghiêng (tilt) và chuyển động chậm (slow-motion)."
    ],
    "frameworkBox": {
      "title": "Thuật ngữ & Định nghĩa cốt lõi (Phương thức Video)",
      "items": [
        {
          "label": "Image-to-Video",
          "desc": "Tác vụ tạo video chuyển động từ một hình ảnh tĩnh đầu vào."
        },
        {
          "label": "Điều khiển camera (Camera Motion)",
          "desc": "Các chỉ dẫn thiết lập hướng di chuyển của góc nhìn trong video do AI tạo."
        }
      ]
    },
    "examTrap": "Thiếu mô tả chuyển động có thể khiến video không đúng ý; kết quả còn tùy công cụ và thiết lập.",
    "lectureScript": "Chào các bạn. Ở slide số 13, chúng ta cùng tìm hiểu: Phương thức Video đa phương tiện. Tạo video hoạt cảnh từ kịch bản văn bản hoặc biến một bức ảnh tĩnh thành đoạn clip chuyển động chân thực. Điểm mấu chốt: Text-to-Video: Nhập kịch bản mô tả phân cảnh và các chuyển động để AI tạo đoạn video hoàn chỉnh (Sora, Runway, Kling). Ví dụ: Nạp ảnh chụp đỉnh núi Everest và yêu cầu AI tạo video 5 giây góc nhìn flycam bay lượn quanh đỉnh núi: Đây là tác vụ Image-to-Video. Lưu ý bẫy đề thi: Thiếu mô tả chuyển động có thể khiến video không đúng ý; kết quả còn tùy công cụ và thiết lập.",
    "audioSrc": "/audio/lecture/slide-13.mp3",
    "durationSeconds": 30.4,
    "relatedQuestions": [
      121,
      123,
      126,
      138,
      163
    ]
  },
  {
    "id": "slide-14",
    "partNumber": 1,
    "partTitle": "Phần 1: Phương pháp và Phương pháp luận AI tạo sinh",
    "slideNumber": 14,
    "title": "Mô hình chuyên biệt: OCR & Talking-head",
    "subtitle": "OCR: Ảnh chữ → Văn bản. Talking-head: Âm thanh/Văn bản → Video khuôn mặt nói.",
    "keyPoints": [
      "OCR (Optical Character Recognition — Nhận dạng ký tự quang học): Đầu vào là Hình ảnh chứa chữ viết, đầu ra là Văn bản được trích xuất.",
      "Talking-head (Khuôn mặt người đang nói): Đầu vào là Âm thanh (hoặc văn bản chuyển giọng nói), đầu ra là Video khuôn mặt chuyển động khớp khẩu hình theo lời nói.",
      "Cả hai đều là mô hình 'một nhiệm vụ - một chức năng' (task-specific), khác với các mô hình đa năng như ChatGPT."
    ],
    "frameworkBox": {
      "title": "Thuật ngữ & Định nghĩa cốt lõi (Mô hình chuyên biệt)",
      "items": [
        {
          "label": "OCR (Nhận dạng ký tự quang học)",
          "desc": "Công nghệ AI chuyển đổi chữ viết trong hình ảnh/tài liệu quét thành văn bản có thể chỉnh sửa được."
        },
        {
          "label": "Talking-head (Mô hình khuôn mặt nói)",
          "desc": "Mô hình AI tạo video khuôn mặt nhân vật cử động môi khớp với âm thanh hoặc văn bản đầu vào."
        }
      ]
    },
    "examTrap": "Nhầm OCR với Text-to-Image vì cả hai đều liên quan đến 'hình ảnh' — OCR đi từ Ảnh ra Văn bản (ngược chiều), không phải tạo ảnh mới.",
    "lectureScript": "Chào các bạn. Ở slide số 14, chúng ta cùng tìm hiểu: Mô hình chuyên biệt: OCR & Talking-head. Ngoài các phương thức Văn bản/Ảnh/Âm thanh/Video tổng quát, còn có các mô hình AI chuyên biệt cho một tác vụ duy nhất như đọc chữ trong ảnh hay tạo video người nói. Điểm mấu chốt: OCR (Optical Character Recognition — Nhận dạng ký tự quang học): Đầu vào là Hình ảnh chứa chữ viết, đầu ra là Văn bản được trích xuất. Ví dụ: Quét hóa đơn giấy để trích xuất số tiền và ngày tháng thành dữ liệu số: dùng OCR. Tạo video đại diện ảo đọc kịch bản bằng nhiều giọng khác nhau: dùng Talking-head. Lưu ý bẫy đề thi: Nhầm OCR với Text-to-Image vì cả hai đều liên quan đến 'hình ảnh' — OCR đi từ Ảnh ra Văn bản (ngược chiều), không phải tạo ảnh mới.",
    "audioSrc": "/audio/lecture/slide-14.mp3",
    "durationSeconds": 40.7,
    "relatedQuestions": [
      91,
      93,
      96,
      102,
      104
    ]
  },
  {
    "id": "slide-15",
    "partNumber": 1,
    "partTitle": "Phần 1: Phương pháp và Phương pháp luận AI tạo sinh",
    "slideNumber": 15,
    "title": "Token và tokenization trong mô hình ngôn ngữ",
    "subtitle": "Token là đơn vị mô hình xử lý; có thể là phần từ, từ, ký tự hoặc ký hiệu, tùy bộ mã hóa.",
    "keyPoints": [
      "Số token không bằng số từ trong mọi ngôn ngữ.",
      "Giới hạn ngữ cảnh và đầu ra thường tính bằng token.",
      "Tokenization trong NLP khác với thay PII bằng mã đại diện trong bảo mật."
    ],
    "frameworkBox": {
      "title": "Tình huống áp dụng (Ví dụ áp dụng)",
      "items": [
        {
          "label": "Tình huống",
          "desc": "Một từ dài có thể bị chia thành nhiều token; nên dùng bộ đếm của mô hình khi cần ước tính."
        },
        {
          "label": "Ghi nhớ cốt lõi",
          "desc": "Token là đơn vị mô hình xử lý; có thể là phần từ, từ, ký tự hoặc ký hiệu, tùy bộ mã hóa."
        }
      ]
    },
    "examTrap": "Không áp dụng tỷ lệ token/từ cố định cho mọi mô hình hoặc tiếng Việt.",
    "lectureScript": "Chào các bạn. Ở slide số 15, chúng ta cùng tìm hiểu: Token và tokenization trong mô hình ngôn ngữ. Token là đơn vị mô hình xử lý; có thể là phần từ, từ, ký tự hoặc ký hiệu, tùy bộ mã hóa. Điểm mấu chốt: Số token không bằng số từ trong mọi ngôn ngữ. Ví dụ: Một từ dài có thể bị chia thành nhiều token; nên dùng bộ đếm của mô hình khi cần ước tính. Lưu ý bẫy đề thi: Không áp dụng tỷ lệ token/từ cố định cho mọi mô hình hoặc tiếng Việt.",
    "audioSrc": "/audio/lecture/slide-15.mp3",
    "durationSeconds": 23.7,
    "relatedQuestions": [
      91,
      102,
      112
    ]
  },
  {
    "id": "slide-16",
    "partNumber": 1,
    "partTitle": "Phần 1: Phương pháp và Phương pháp luận AI tạo sinh",
    "slideNumber": 16,
    "title": "Cửa sổ ngữ cảnh (Context Window)",
    "subtitle": "Giữ cuộc trò chuyện tập trung để tránh hiện tượng tràn cửa sổ ngữ cảnh.",
    "keyPoints": [
      "Bao gồm cả đầu vào và đầu ra: Tổng số token của câu lệnh prompt + tài liệu đính kèm + câu trả lời của AI phải nằm trong giới hạn này.",
      "Hiện tượng tràn ngữ cảnh: Khi cuộc trò chuyện quá dài vượt qua Context Window, AI sẽ quên các yêu cầu và thông tin đã cung cấp ở phần đầu.",
      "Giải pháp quản lý: Tóm tắt lại nội dung định kỳ hoặc chia nhỏ tài liệu lớn thành nhiều phần trước khi nạp vào AI."
    ],
    "frameworkBox": {
      "title": "Thuật ngữ & Định nghĩa cốt lõi (Giới hạn bộ nhớ)",
      "items": [
        {
          "label": "Cửa sổ ngữ cảnh (Context Window)",
          "desc": "Số lượng token tối đa mà mô hình AI có thể duy trì trong bộ nhớ làm việc cùng lúc."
        }
      ]
    },
    "examTrap": "Nạp tài liệu dài hàng nghìn trang vào một mô hình có cửa sổ ngữ cảnh nhỏ mà không kiểm tra giới hạn.",
    "lectureScript": "Chào các bạn. Ở slide số 16, chúng ta cùng tìm hiểu: Cửa sổ ngữ cảnh (Context Window). Cửa sổ ngữ cảnh là giới hạn lượng token tối đa mà mô hình có thể ghi nhớ và xử lý đồng thời trong một lượt tương tác. Điểm mấu chốt: Bao gồm cả đầu vào và đầu ra: Tổng số token của câu lệnh prompt + tài liệu đính kèm + câu trả lời của AI phải nằm trong giới hạn này. Ví dụ: Sau khi trao đổi 50 tin nhắn dài, bạn thấy AI không còn xưng hô theo đúng vai trò bạn đã yêu cầu ở tin nhắn số 1: Do cuộc trò chuyện đã vượt quá Context Window. Lưu ý bẫy đề thi: Nạp tài liệu dài hàng nghìn trang vào một mô hình có cửa sổ ngữ cảnh nhỏ mà không kiểm tra giới hạn.",
    "audioSrc": "/audio/lecture/slide-16.mp3",
    "durationSeconds": 34.7,
    "relatedQuestions": [
      91,
      93,
      94,
      96
    ]
  },
  {
    "id": "slide-17",
    "partNumber": 1,
    "partTitle": "Phần 1: Phương pháp và Phương pháp luận AI tạo sinh",
    "slideNumber": 17,
    "title": "Next-Token Prediction & Tham số Nhiệt độ",
    "subtitle": "Nhiệt độ thấp cho tính chính xác; Nhiệt độ cao cho sự sáng tạo.",
    "keyPoints": [
      "Next-Token Prediction: Tại mỗi bước, mô hình tính xác suất cho hàng nghìn từ tiếp theo và chọn từ phù hợp nhất.",
      "Nhiệt độ thấp (Temperature ~ 0 đến 0.2): AI chọn các từ có xác suất cao nhất; câu trả lời mang tính tất định, chính xác, ít biến đổi (phù hợp cho lập trình, dữ liệu tài chính).",
      "Nhiệt độ cao (Temperature ~ 0.7 đến 1.0): AI chọn cả các từ có xác suất thấp hơn; câu trả lời giàu trí tưởng tượng, phong phú, đa dạng (phù hợp viết văn, sáng tạo ý tưởng)."
    ],
    "frameworkBox": {
      "title": "Thuật ngữ & Định nghĩa cốt lõi (Xác suất & Tham số)",
      "items": [
        {
          "label": "Next-Token Prediction",
          "desc": "Cơ chế dự đoán từ hoặc token kế tiếp dựa trên toàn bộ chuỗi từ trước đó."
        },
        {
          "label": "Nhiệt độ (Temperature)",
          "desc": "Tham số điều chỉnh mức độ ngẫu nhiên và sáng tạo của mô hình AI."
        }
      ]
    },
    "examTrap": "Để nhiệt độ cao khi yêu cầu AI tính toán số liệu kế toán hoặc trích xuất số liệu hợp đồng.",
    "lectureScript": "Chào các bạn. Ở slide số 17, chúng ta cùng tìm hiểu: Next-Token Prediction & Tham số Nhiệt độ. Mô hình ngôn ngữ tự hồi quy dự đoán token tiếp theo; Temperature điều chỉnh độ ngẫu nhiên khi chọn token, không bảo đảm sáng tạo hay chính xác. Điểm mấu chốt: Next-Token Prediction: Tại mỗi bước, mô hình tính xác suất cho hàng nghìn từ tiếp theo và chọn từ phù hợp nhất. Ví dụ: Viết code Python giải thuật toán: Đặt Temperature = 0. Viết 10 ý tưởng kịch bản quảng cáo hài hước: Đặt Temperature = 0.9. Lưu ý bẫy đề thi: Để nhiệt độ cao khi yêu cầu AI tính toán số liệu kế toán hoặc trích xuất số liệu hợp đồng.",
    "audioSrc": "/audio/lecture/slide-17.mp3",
    "durationSeconds": 32.5,
    "relatedQuestions": [
      96,
      97,
      99,
      100
    ]
  },
  {
    "id": "slide-18",
    "partNumber": 1,
    "partTitle": "Phần 1: Phương pháp và Phương pháp luận AI tạo sinh",
    "slideNumber": 18,
    "title": "GPU, bộ nhớ và tài nguyên chạy mô hình",
    "subtitle": "GPU hỗ trợ tính toán song song; bộ nhớ, nguồn điện và tải công việc cũng quyết định khả năng chạy mô hình.",
    "keyPoints": [
      "Huấn luyện mô hình lớn thường cần GPU mạnh và nhiều năng lượng.",
      "VRAM/RAM cần đủ chứa mô hình và dữ liệu; nguồn điện cần đủ tải.",
      "Dùng cloud không đồng nghĩa máy khách phải có GPU cao cấp.",
      "Chọn phần cứng theo mô hình và tốc độ mục tiêu."
    ],
    "frameworkBox": {
      "title": "Tình huống áp dụng (Ví dụ áp dụng)",
      "items": [
        {
          "label": "Tình huống",
          "desc": "Máy nhẹ vẫn có thể truy cập dịch vụ AI chạy trên máy chủ từ xa."
        },
        {
          "label": "Ghi nhớ cốt lõi",
          "desc": "GPU hỗ trợ tính toán song song; bộ nhớ, nguồn điện và tải công việc cũng quyết định khả năng chạy mô hình."
        }
      ]
    },
    "examTrap": "Không có một cặp linh kiện luôn quan trọng nhất cho mọi cách triển khai.",
    "lectureScript": "Chào các bạn. Ở slide số 18, chúng ta cùng tìm hiểu: GPU, bộ nhớ và tài nguyên chạy mô hình. GPU hỗ trợ tính toán song song; bộ nhớ, nguồn điện và tải công việc cũng quyết định khả năng chạy mô hình. Điểm mấu chốt: Huấn luyện mô hình lớn thường cần GPU mạnh và nhiều năng lượng. Ví dụ: Máy nhẹ vẫn có thể truy cập dịch vụ AI chạy trên máy chủ từ xa. Lưu ý bẫy đề thi: Không có một cặp linh kiện luôn quan trọng nhất cho mọi cách triển khai.",
    "audioSrc": "/audio/lecture/slide-18.mp3",
    "durationSeconds": 23.9,
    "relatedQuestions": [
      100,
      102,
      104,
      110,
      126
    ]
  },
  {
    "id": "slide-19",
    "partNumber": 1,
    "partTitle": "Phần 1: Phương pháp và Phương pháp luận AI tạo sinh",
    "slideNumber": 19,
    "title": "Internet, dữ liệu và tùy biến",
    "subtitle": "Yêu cầu internet và dữ liệu phụ thuộc cách triển khai; tùy biến trợ lý không đồng nghĩa huấn luyện lại mô hình.",
    "keyPoints": [
      "Cloud thường cần kết nối mạng; mô hình local có thể chạy ngoại tuyến nếu đã có đủ tài nguyên.",
      "Hướng dẫn, template và tài liệu tham chiếu có thể tùy biến phản hồi.",
      "Fine-tuning điều chỉnh trọng số bằng dữ liệu huấn luyện bổ sung, khác thêm prompt."
    ],
    "frameworkBox": {
      "title": "Tình huống áp dụng (Ví dụ áp dụng)",
      "items": [
        {
          "label": "Tình huống",
          "desc": "Muốn email đúng mẫu: thử hướng dẫn và template trước khi quyết định fine-tune."
        },
        {
          "label": "Ghi nhớ cốt lõi",
          "desc": "Yêu cầu internet và dữ liệu phụ thuộc cách triển khai; tùy biến trợ lý không đồng nghĩa huấn luyện lại mô hình."
        }
      ]
    },
    "examTrap": "Đừng khẳng định mọi huấn luyện cần internet công cộng hay mọi tùy biến cần fine-tune.",
    "lectureScript": "Chào các bạn. Ở slide số 19, chúng ta cùng tìm hiểu: Internet, dữ liệu và tùy biến. Yêu cầu internet và dữ liệu phụ thuộc cách triển khai; tùy biến trợ lý không đồng nghĩa huấn luyện lại mô hình. Điểm mấu chốt: Cloud thường cần kết nối mạng; mô hình local có thể chạy ngoại tuyến nếu đã có đủ tài nguyên. Ví dụ: Muốn email đúng mẫu: thử hướng dẫn và template trước khi quyết định fine-tune. Lưu ý bẫy đề thi: Đừng khẳng định mọi huấn luyện cần internet công cộng hay mọi tùy biến cần fine-tune.",
    "audioSrc": "/audio/lecture/slide-19.mp3",
    "durationSeconds": 25.4,
    "relatedQuestions": [
      110,
      112,
      114,
      117
    ]
  },
  {
    "id": "slide-20",
    "partNumber": 1,
    "partTitle": "Phần 1: Phương pháp và Phương pháp luận AI tạo sinh",
    "slideNumber": 20,
    "title": "Hệ sinh thái & Trợ lý tùy biến (Custom GPTs)",
    "subtitle": "Tạo Custom GPTs hoặc Google Gems để xây dựng trợ lý AI chuyên môn hóa cho riêng bạn.",
    "keyPoints": [
      "Trợ lý đa năng hàng đầu: OpenAI ChatGPT, Google Gemini, Microsoft Copilot, Anthropic Claude.",
      "Trợ lý chuyên trách tùy biến: Custom GPTs (OpenAI) và Google Gems (Google) cho phép người dùng nạp tài liệu riêng và thiết lập hướng dẫn sư phạm/nghiệp vụ cố định.",
      "Không cần lập trình: Bất kỳ ai cũng có thể tạo Custom GPT bằng ngôn ngữ tự nhiên để hỗ trợ chấm bài, giải toán hay hỗ trợ khách hàng."
    ],
    "frameworkBox": {
      "title": "Thuật ngữ & Định nghĩa cốt lõi (Hệ sinh thái)",
      "items": [
        {
          "label": "Custom GPTs",
          "desc": "Phiên bản ChatGPT được người dùng tùy chỉnh với các chỉ dẫn, tài liệu tri thức và tác vụ chuyên biệt."
        },
        {
          "label": "Google Gems",
          "desc": "Các phiên bản tùy chỉnh của Google Gemini được thiết kế riêng cho các chủ đề và quy trình cụ thể."
        }
      ]
    },
    "examTrap": "Nghĩ rằng Custom GPT bắt buộc phải biết viết mã Python phức tạp mới tạo được.",
    "lectureScript": "Chào các bạn. Ở slide số 20, chúng ta cùng tìm hiểu: Hệ sinh thái & Trợ lý tùy biến (Custom GPTs). Hệ sinh thái AI hiện đại cung cấp các nền tảng đa dạng và cho phép người dùng tùy biến trợ lý riêng (Custom GPTs / Google Gems). Điểm mấu chốt: Trợ lý đa năng hàng đầu: OpenAI ChatGPT, Google Gemini, Microsoft Copilot, Anthropic Claude. Ví dụ: Một giáo viên tạo 'Gia sư Sinh học 10': Nạp toàn bộ sách giáo khoa và ra lệnh 'Chỉ hướng dẫn học sinh tư duy từng bước, không cho ngay đáp án bài tập'. Lưu ý bẫy đề thi: Nghĩ rằng Custom GPT bắt buộc phải biết viết mã Python phức tạp mới tạo được.",
    "audioSrc": "/audio/lecture/slide-20.mp3",
    "durationSeconds": 34.1,
    "relatedQuestions": [
      112,
      117,
      160,
      162
    ]
  },
  {
    "id": "slide-21",
    "partNumber": 1,
    "partTitle": "Phần 1: Phương pháp và Phương pháp luận AI tạo sinh",
    "slideNumber": 21,
    "title": "Công cụ tạo hình ảnh & Thiết kế chuyên dụng",
    "subtitle": "Chọn công cụ tạo ảnh theo nhu cầu: Canva/Adobe Express cho thiết kế nhanh, Stable Diffusion/Adobe Firefly cho tạo ảnh chuyên sâu.",
    "keyPoints": [
      "Stable Diffusion: Mô hình khuếch tán mã nguồn mở chuyên tạo hình ảnh nghệ thuật/chân thực từ văn bản mô tả (text-to-image thuần túy).",
      "Adobe Firefly: Công cụ tạo/chỉnh sửa hình ảnh AI của Adobe, tích hợp sẵn trong Photoshop/Illustrator, huấn luyện trên kho ảnh có bản quyền hợp pháp.",
      "Canva (Magic Media): Nền tảng thiết kế kéo-thả tích hợp AI tạo ảnh, phù hợp cho người không chuyên tạo nhanh banner, áp phích, bài đăng mạng xã hội.",
      "Adobe Express: Công cụ thiết kế nhanh của Adobe, tạo hình ảnh và phông chữ cách điệu, hỗ trợ lên lịch đăng bài mạng xã hội trực tiếp."
    ],
    "frameworkBox": {
      "title": "Thuật ngữ & Định nghĩa cốt lõi (Công cụ sáng tạo)",
      "items": [
        {
          "label": "Stable Diffusion",
          "desc": "Mô hình khuếch tán (diffusion) mã nguồn mở, chuyên tạo hình ảnh chất lượng cao từ mô tả văn bản."
        },
        {
          "label": "Adobe Firefly",
          "desc": "Bộ công cụ AI tạo sinh của Adobe, tích hợp trong hệ sinh thái Creative Cloud, dữ liệu huấn luyện có nguồn gốc bản quyền rõ ràng."
        }
      ]
    },
    "examTrap": "Nghĩ rằng mọi công cụ tạo ảnh AI đều giống nhau — thực tế mỗi công cụ khác nhau về mức độ kiểm soát sáng tạo, nguồn dữ liệu huấn luyện và đối tượng người dùng mục tiêu.",
    "lectureScript": "Chào các bạn. Ở slide số 21, chúng ta cùng tìm hiểu: Công cụ tạo hình ảnh & Thiết kế chuyên dụng. Bên cạnh các chatbot đa năng, có một nhóm công cụ AI chuyên về tạo và thiết kế hình ảnh, mỗi công cụ phù hợp với một nhu cầu khác nhau. Điểm mấu chốt: Stable Diffusion: Mô hình khuếch tán mã nguồn mở chuyên tạo hình ảnh nghệ thuật/chân thực từ văn bản mô tả (text-to-image thuần túy). Ví dụ: Cần một logo nhanh cho câu lạc bộ học sinh, không rành thiết kế: dùng Canva. Cần tạo hàng loạt concept-art nghệ thuật độ phân giải cao: dùng Stable Diffusion. Lưu ý bẫy đề thi: Nghĩ rằng mọi công cụ tạo ảnh AI đều giống nhau — thực tế mỗi công cụ khác nhau về mức độ kiểm soát sáng tạo, nguồn dữ liệu huấn luyện và đối tượng người dùng mục tiêu.",
    "audioSrc": "/audio/lecture/slide-21.mp3",
    "durationSeconds": 38.5,
    "relatedQuestions": [
      90,
      91,
      93,
      96,
      99,
      100,
      102,
      104
    ]
  },
  {
    "id": "slide-22",
    "partNumber": 1,
    "partTitle": "Phần 1: Phương pháp và Phương pháp luận AI tạo sinh",
    "slideNumber": 22,
    "title": "Công cụ hỗ trợ doanh nghiệp và quy trình",
    "subtitle": "Chọn công cụ theo nhiệm vụ, dữ liệu và khả năng tích hợp; không suy ra tác vụ độc quyền chỉ từ tên thương hiệu.",
    "keyPoints": [
      "Phát triển phần mềm có thể dùng trợ lý mã hoặc hệ thống nhiều vai trò.",
      "Thiết kế poster cần công cụ hỗ trợ bố cục/ảnh.",
      "Kiểm tra công cụ thật sự có quyền truy cập tệp, API hay dữ liệu trước khi giao việc.",
      "Tên họ sản phẩm không mô tả đầy đủ mọi phiên bản."
    ],
    "frameworkBox": {
      "title": "Tình huống áp dụng (Ví dụ áp dụng)",
      "items": [
        {
          "label": "Tình huống",
          "desc": "Bài ghép công cụ dùng công dụng tiêu biểu; thực tế cần kiểm tra phiên bản và chức năng."
        },
        {
          "label": "Ghi nhớ cốt lõi",
          "desc": "Chọn công cụ theo nhiệm vụ, dữ liệu và khả năng tích hợp; không suy ra tác vụ độc quyền chỉ từ tên thương hiệu."
        }
      ]
    },
    "examTrap": "Không mặc định MetaGPT là công cụ chuyên mạng xã hội hoặc mọi Copilot đều có cùng tính năng.",
    "lectureScript": "Chào các bạn. Ở slide số 22, chúng ta cùng tìm hiểu: Công cụ hỗ trợ doanh nghiệp và quy trình. Chọn công cụ theo nhiệm vụ, dữ liệu và khả năng tích hợp; không suy ra tác vụ độc quyền chỉ từ tên thương hiệu. Điểm mấu chốt: Phát triển phần mềm có thể dùng trợ lý mã hoặc hệ thống nhiều vai trò. Ví dụ: Bài ghép công cụ dùng công dụng tiêu biểu; thực tế cần kiểm tra phiên bản và chức năng. Lưu ý bẫy đề thi: Không mặc định MetaGPT là công cụ chuyên mạng xã hội hoặc mọi Copilot đều có cùng tính năng.",
    "audioSrc": "/audio/lecture/slide-22.mp3",
    "durationSeconds": 25.9,
    "relatedQuestions": [
      123,
      147,
      157,
      160,
      161
    ]
  },
  {
    "id": "slide-23",
    "partNumber": 1,
    "partTitle": "Phần 1: Phương pháp và Phương pháp luận AI tạo sinh",
    "slideNumber": 23,
    "title": "Tác vụ Doanh nghiệp & Kỹ thuật",
    "subtitle": "AI tạo sinh là trợ lý đắc lực giúp tăng tốc soạn thảo văn bản và giải thích kỹ thuật.",
    "keyPoints": [
      "Soạn thảo kinh doanh: Viết bản nháp đề xuất kinh doanh (Business Proposals), tóm tắt biên bản họp, soạn email chăm sóc khách hàng.",
      "Lập trình & Kỹ thuật: Viết mã nguồn Python, JavaScript, SQL; gỡ lỗi (debugging) và tạo dữ liệu mẫu thử nghiệm.",
      "Hệ thống quản lý học tập (LMS): Giải thích cách các tệp XML được sử dụng để cấu hình dữ liệu khóa học và chuyển giao tài nguyên giữa các nền tảng."
    ],
    "frameworkBox": {
      "title": "Thuật ngữ & Định nghĩa cốt lõi (Ứng dụng doanh nghiệp)",
      "items": [
        {
          "label": "Đề xuất kinh doanh (Business Proposal)",
          "desc": "Văn bản trình bày giải pháp, kế hoạch và chi phí để thuyết phục khách hàng hoặc đối tác."
        },
        {
          "label": "XML (eXtensible Markup Language)",
          "desc": "Ngôn ngữ đánh dấu mở rộng dùng để lưu trữ và truyền tải dữ liệu có cấu trúc."
        }
      ]
    },
    "examTrap": "Gửi thẳng bản nháp do AI viết cho đối tác mà không có bước rà soát, chỉnh sửa số liệu của con người.",
    "lectureScript": "Chào các bạn. Ở slide số 23, chúng ta cùng tìm hiểu: Tác vụ Doanh nghiệp & Kỹ thuật. AI tạo sinh mang lại hiệu suất vượt trội trong soạn thảo tài liệu kinh doanh, sinh mã lập trình và giải thích cấu trúc tệp XML. Điểm mấu chốt: Soạn thảo kinh doanh: Viết bản nháp đề xuất kinh doanh (Business Proposals), tóm tắt biên bản họp, soạn email chăm sóc khách hàng. Ví dụ: Quản trị viên LMS mới vào nghề dùng AI giải thích cấu trúc tệp XML để hiểu rõ cách bài giảng trực tuyến được đóng gói và chia sẻ. Lưu ý bẫy đề thi: Gửi thẳng bản nháp do AI viết cho đối tác mà không có bước rà soát, chỉnh sửa số liệu của con người.",
    "audioSrc": "/audio/lecture/slide-23.mp3",
    "durationSeconds": 33.1,
    "relatedQuestions": [
      90,
      91,
      93,
      94,
      123
    ]
  },
  {
    "id": "slide-24",
    "partNumber": 1,
    "partTitle": "Phần 1: Phương pháp và Phương pháp luận AI tạo sinh",
    "slideNumber": 24,
    "title": "Chọn công cụ theo nhiệm vụ",
    "subtitle": "So sánh đúng chức năng, chất lượng, quyền riêng tư, chi phí và khả năng sử dụng trước khi chọn công cụ.",
    "keyPoints": [
      "Xác định đầu vào và đầu ra cần có.",
      "Cân nhắc dễ dùng, tùy chỉnh, hỗ trợ, cập nhật và giới hạn sử dụng.",
      "Tốc độ, phong cách và tích hợp có thể quan trọng tùy nhiệm vụ.",
      "Kiểm tra output mẫu: ảnh có thể lỗi chi tiết; văn bản có thể sai dữ kiện."
    ],
    "frameworkBox": {
      "title": "Tình huống áp dụng (Ví dụ áp dụng)",
      "items": [
        {
          "label": "Tình huống",
          "desc": "Ma trận giáo dục gợi ý: đúng chức năng 30%, chất lượng 25%, bảo mật 20% trở lên, chi phí 15%, dễ dùng 10%; điều chỉnh theo bối cảnh."
        },
        {
          "label": "Ghi nhớ cốt lõi",
          "desc": "So sánh đúng chức năng, chất lượng, quyền riêng tư, chi phí và khả năng sử dụng trước khi chọn công cụ."
        }
      ]
    },
    "examTrap": "Ba lựa chọn trong một câu thi không phải toàn bộ tiêu chí ra quyết định ngoài thực tế.",
    "lectureScript": "Chào các bạn. Ở slide số 24, chúng ta cùng tìm hiểu: Chọn công cụ theo nhiệm vụ. So sánh đúng chức năng, chất lượng, quyền riêng tư, chi phí và khả năng sử dụng trước khi chọn công cụ. Điểm mấu chốt: Xác định đầu vào và đầu ra cần có. Ví dụ: Ma trận giáo dục gợi ý: đúng chức năng 30%, chất lượng 25%, bảo mật 20% trở lên, chi phí 15%, dễ dùng 10%; điều chỉnh theo bối cảnh. Lưu ý bẫy đề thi: Ba lựa chọn trong một câu thi không phải toàn bộ tiêu chí ra quyết định ngoài thực tế.",
    "audioSrc": "/audio/lecture/slide-24.mp3",
    "durationSeconds": 27.5,
    "relatedQuestions": [
      91,
      96,
      97,
      100,
      104,
      110,
      112,
      114
    ]
  },
  {
    "id": "slide-25",
    "partNumber": 2,
    "partTitle": "Phần 2: Kỹ thuật Prompting & Sáng tạo nội dung",
    "slideNumber": 25,
    "title": "Cấu trúc prompt: vai trò, nhiệm vụ và ngữ cảnh",
    "subtitle": "Prompt rõ giúp AI biết cần làm gì, dùng dữ liệu nào, cho ai và theo tiêu chí nào; không có một số thành phần bắt buộc cho mọi t...",
    "keyPoints": [
      "Mô hình R–T–C–D–F–C: Role, Task, Context, Data, Format, Criteria.",
      "Nêu nguồn đầu vào, đối tượng và ràng buộc quan trọng.",
      "Có thể bắt đầu ngắn rồi bổ sung phần còn thiếu theo output."
    ],
    "frameworkBox": {
      "title": "Tình huống áp dụng (Ví dụ áp dụng)",
      "items": [
        {
          "label": "Tình huống",
          "desc": "Đóng vai giáo viên; tạo phiếu học tập từ đoạn sách này; cho lớp 7; gồm 5 câu và đáp án; không thêm dữ kiện ngoài nguồn."
        },
        {
          "label": "Ghi nhớ cốt lõi",
          "desc": "Prompt rõ giúp AI biết cần làm gì, dùng dữ liệu nào, cho ai và theo tiêu chí nào; không có một số thành phần bắt buộc cho mọi tác vụ."
        }
      ]
    },
    "examTrap": "Persona không bảo đảm kiến thức chuyên môn đúng; prompt dài không mặc nhiên tốt.",
    "lectureScript": "Chào các bạn. Ở slide số 25, chúng ta cùng tìm hiểu: Cấu trúc prompt: vai trò, nhiệm vụ và ngữ cảnh. Prompt rõ giúp AI biết cần làm gì, dùng dữ liệu nào, cho ai và theo tiêu chí nào; không có một số thành phần bắt buộc cho mọi tác vụ. Điểm mấu chốt: Mô hình R–T–C–D–F–C: Role, Task, Context, Data, Format, Criteria. Ví dụ: Đóng vai giáo viên; tạo phiếu học tập từ đoạn sách này; cho lớp 7; gồm 5 câu và đáp án; không thêm dữ kiện ngoài nguồn. Lưu ý bẫy đề thi: Persona không bảo đảm kiến thức chuyên môn đúng; prompt dài không mặc nhiên tốt.",
    "audioSrc": "/audio/lecture/slide-25.mp3",
    "durationSeconds": 29.7,
    "relatedQuestions": [
      14,
      18,
      45,
      74,
      81,
      113,
      140
    ]
  },
  {
    "id": "slide-26",
    "partNumber": 2,
    "partTitle": "Phần 2: Kỹ thuật Prompting & Sáng tạo nội dung",
    "slideNumber": 26,
    "title": "Kỹ thuật Gán vai trò chuyên gia",
    "subtitle": "Cho AI một vai trò để nhận lại câu trả lời mang tầm chuyên gia.",
    "keyPoints": [
      "Thiết lập góc nhìn chuyên môn: 'Bạn là chuyên gia dinh dưỡng thể thao', 'Bạn là kiểm toán viên kỳ cựu'.",
      "Kích hoạt vốn từ chuyên ngành: Gán vai trò giúp mô hình ưu tiên các mẫu ngôn ngữ chuyên nghiệp phù hợp với lĩnh vực đó.",
      "Tránh câu trả lời mơ hồ: Persona rõ ràng giúp AI không trả lời theo kiểu bách khoa toàn thư chung chung."
    ],
    "frameworkBox": {
      "title": "Thuật ngữ & Định nghĩa cốt lõi (Định hình Persona)",
      "items": [
        {
          "label": "Persona (Hình mẫu nhân vật)",
          "desc": "Tính cách, phong cách và chuyên môn giả định mà người dùng yêu cầu AI đóng vai."
        },
        {
          "label": "Role-based Prompting",
          "desc": "Kỹ thuật gán vai trò cụ thể cho AI trước khi giao nhiệm vụ."
        }
      ]
    },
    "examTrap": "Gán hai vai trò mâu thuẫn nhau trong cùng một câu lệnh (ví dụ: vừa là luật sư khắt khe vừa là diễn viên hài hước).",
    "lectureScript": "Chào các bạn. Ở slide số 26, chúng ta cùng tìm hiểu: Kỹ thuật Gán vai trò chuyên gia. Yêu cầu AI đóng vai một chuyên gia cụ thể giúp định hình vốn từ, phong cách tư duy và độ sâu chuyên môn của câu trả lời. Điểm mấu chốt: Thiết lập góc nhìn chuyên môn: 'Bạn là chuyên gia dinh dưỡng thể thao', 'Bạn là kiểm toán viên kỳ cựu'. Ví dụ: Thay vì hỏi 'Nên ăn gì sau khi tập?', hãy gán vai trò: 'Bạn là chuyên gia dinh dưỡng thể thao. Hãy gợi ý thực đơn phục hồi cơ bắp sau buổi chạy 10km cho vận động viên bán chuyên.'. Lưu ý bẫy đề thi: Gán hai vai trò mâu thuẫn nhau trong cùng một câu lệnh (ví dụ: vừa là luật sư khắt khe vừa là diễn viên hài hước).",
    "audioSrc": "/audio/lecture/slide-26.mp3",
    "durationSeconds": 32.4,
    "relatedQuestions": [
      8,
      9,
      11,
      12,
      45,
      53
    ]
  },
  {
    "id": "slide-27",
    "partNumber": 2,
    "partTitle": "Phần 2: Kỹ thuật Prompting & Sáng tạo nội dung",
    "slideNumber": 27,
    "title": "Phân hóa theo Trình độ người đọc",
    "subtitle": "Nói rõ người nghe là ai để AI chọn đúng ngôn ngữ và ví dụ phù hợp.",
    "keyPoints": [
      "Trẻ em tiểu học (Lớp 3): Sử dụng câu chuyện ngụ ngôn, nhân hóa đồ vật, ví dụ sinh động (ví dụ: bài học về sự ra đời của ô tô).",
      "Học sinh lớp 9: Sử dụng các ví dụ thực tế liên quan đến sở thích lứa tuổi (ví dụ: dùng góc nghiêng mái nhà và cần cẩu để giải thích hàm Cosin).",
      "Chuyên gia kỹ thuật: Sử dụng thuật ngữ chuyên ngành chính xác, công thức toán học và dẫn chứng số liệu chặt chẽ."
    ],
    "frameworkBox": {
      "title": "Thuật ngữ & Định nghĩa cốt lõi (Phân hóa đối tượng)",
      "items": [
        {
          "label": "Đối tượng mục tiêu (Target Audience)",
          "desc": "Nhóm người sẽ đọc hoặc tiếp nhận nội dung do AI tạo ra."
        }
      ]
    },
    "examTrap": "Không nêu rõ đối tượng khiến AI giải thích một khái niệm đơn giản bằng văn phong học thuật cao cấp khó hiểu.",
    "lectureScript": "Chào các bạn. Ở slide số 27, chúng ta cùng tìm hiểu: Phân hóa theo Trình độ người đọc. Xác định rõ đối tượng tiếp nhận giúp AI lựa chọn độ phức tạp của ngôn từ, cấu trúc câu và các ví dụ minh họa trực quan phù hợp. Điểm mấu chốt: Trẻ em tiểu học (Lớp 3): Sử dụng câu chuyện ngụ ngôn, nhân hóa đồ vật, ví dụ sinh động (ví dụ: bài học về sự ra đời của ô tô). Ví dụ: Cho học sinh lớp 1: 'Cây xanh dùng ánh nắng mặt trời như chiếc bếp nấu ăn để tạo thức ăn cho lá cây'. Cho sinh viên sinh học: Giải thích chu trình Calvin và phản ứng sáng. Lưu ý bẫy đề thi: Không nêu rõ đối tượng khiến AI giải thích một khái niệm đơn giản bằng văn phong học thuật cao cấp khó hiểu.",
    "audioSrc": "/audio/lecture/slide-27.mp3",
    "durationSeconds": 34.4,
    "relatedQuestions": [
      5,
      33,
      38,
      54,
      56,
      59,
      85,
      101
    ]
  },
  {
    "id": "slide-28",
    "partNumber": 2,
    "partTitle": "Phần 2: Kỹ thuật Prompting & Sáng tạo nội dung",
    "slideNumber": 28,
    "title": "Kỹ thuật Zero-shot Prompting",
    "subtitle": "Zero-shot phù hợp cho các nhiệm vụ thông thường, nhanh gọn và quen thuộc.",
    "keyPoints": [
      "Đặc điểm: Câu lệnh ngắn gọn, đi thẳng vào yêu cầu nhiệm vụ.",
      "Trường hợp sử dụng tối ưu: Các câu hỏi kiến thức phổ thông, tra cứu định nghĩa, tóm tắt đoạn văn đơn giản, dịch câu thông dụng.",
      "Ưu điểm: Nhanh chóng, tiết kiệm token ngữ cảnh, không mất công chuẩn bị dữ liệu mẫu."
    ],
    "frameworkBox": {
      "title": "Thuật ngữ & Định nghĩa cốt lõi (Kỹ thuật cơ bản)",
      "items": [
        {
          "label": "Zero-shot Prompting",
          "desc": "Kỹ thuật yêu cầu mô hình AI thực hiện nhiệm vụ ngay lập tức mà không đưa ra bất kỳ ví dụ mẫu nào."
        }
      ]
    },
    "examTrap": "Sử dụng Zero-shot khi yêu cầu định dạng đầu ra phức tạp hoặc phân loại dữ liệu theo tiêu chuẩn riêng của công ty.",
    "lectureScript": "Chào các bạn. Ở slide số 28, chúng ta cùng tìm hiểu: Kỹ thuật Zero-shot Prompting. Zero-shot Prompting là việc ra lệnh trực tiếp cho AI thực hiện nhiệm vụ mà không cung cấp bất kỳ ví dụ mẫu minh họa nào. Điểm mấu chốt: Đặc điểm: Câu lệnh ngắn gọn, đi thẳng vào yêu cầu nhiệm vụ. Ví dụ: 'Hãy dịch câu sau sang tiếng Đức: Một mocha latte, làm ơn.' -> AI trả về ngay: 'Einen Mokka Latte, bitte.'. Lưu ý bẫy đề thi: Sử dụng Zero-shot khi yêu cầu định dạng đầu ra phức tạp hoặc phân loại dữ liệu theo tiêu chuẩn riêng của công ty.",
    "audioSrc": "/audio/lecture/slide-28.mp3",
    "durationSeconds": 27.2,
    "relatedQuestions": [
      38,
      78,
      144,
      153
    ]
  },
  {
    "id": "slide-29",
    "partNumber": 2,
    "partTitle": "Phần 2: Kỹ thuật Prompting & Sáng tạo nội dung",
    "slideNumber": 29,
    "title": "One-shot và few-shot: đếm ví dụ mẫu",
    "subtitle": "Shot được nhận diện qua ví dụ làm mẫu cho nhiệm vụ, không qua độ dài prompt hoặc số ràng buộc.",
    "keyPoints": [
      "Zero-shot: không đưa ví dụ mẫu.",
      "One-shot: một ví dụ; few-shot: một vài ví dụ theo cách phân loại của bài học.",
      "Ví dụ cần thể hiện kiểu đầu vào và đầu ra muốn AI làm theo.",
      "Một ảnh tham chiếu không tự động chứng minh few-shot."
    ],
    "frameworkBox": {
      "title": "Tình huống áp dụng (Ví dụ áp dụng)",
      "items": [
        {
          "label": "Tình huống",
          "desc": "“Rất tốt → tích cực; rất tệ → tiêu cực; hãy phân loại câu mới” cung cấp mẫu nhiệm vụ."
        },
        {
          "label": "Ghi nhớ cốt lõi",
          "desc": "Shot được nhận diện qua ví dụ làm mẫu cho nhiệm vụ, không qua độ dài prompt hoặc số ràng buộc."
        }
      ]
    },
    "examTrap": "Thêm “số từ 1 đến 10” là ràng buộc phạm vi, không phải một shot.",
    "lectureScript": "Chào các bạn. Ở slide số 29, chúng ta cùng tìm hiểu: One-shot và few-shot: đếm ví dụ mẫu. Shot được nhận diện qua ví dụ làm mẫu cho nhiệm vụ, không qua độ dài prompt hoặc số ràng buộc. Điểm mấu chốt: Zero-shot: không đưa ví dụ mẫu. Ví dụ: “Rất tốt → tích cực; rất tệ → tiêu cực; hãy phân loại câu mới” cung cấp mẫu nhiệm vụ. Lưu ý bẫy đề thi: Thêm “số từ 1 đến 10” là ràng buộc phạm vi, không phải một shot.",
    "audioSrc": "/audio/lecture/slide-29.mp3",
    "durationSeconds": 21.9,
    "relatedQuestions": [
      27,
      30,
      32,
      33,
      92
    ]
  },
  {
    "id": "slide-30",
    "partNumber": 2,
    "partTitle": "Phần 2: Kỹ thuật Prompting & Sáng tạo nội dung",
    "slideNumber": 30,
    "title": "Chain-of-Thought (Chuỗi tư duy CoT)",
    "subtitle": "'Hãy suy nghĩ từng bước' giúp giải quyết chính xác các bài toán logic và số học phức tạp.",
    "keyPoints": [
      "Câu thần chú kích hoạt: Thêm câu lệnh 'Hãy suy nghĩ từng bước' (Let's think step by step).",
      "Nâng cao độ chính xác: Giúp mô hình không đưa ra kết luận vội vàng theo trực giác xác suất đơn thuần.",
      "Minh bạch hóa lập luận: Giúp người dùng nhìn rõ từng bước giải để phát hiện chính xác vị trí sai sót nếu có."
    ],
    "frameworkBox": {
      "title": "Thuật ngữ & Định nghĩa cốt lõi (Tư duy từng bước)",
      "items": [
        {
          "label": "Chain-of-Thought (CoT)",
          "desc": "Kỹ thuật prompt yêu cầu mô hình tạo ra chuỗi các bước suy luận trung gian trước khi trả lời."
        }
      ]
    },
    "examTrap": "Hỏi thẳng đáp số của bài toán logic phức tạp mà không yêu cầu AI giải thích từng bước.",
    "lectureScript": "Chào các bạn. Ở slide số 30, chúng ta cùng tìm hiểu: Chain-of-Thought (Chuỗi tư duy CoT). Kỹ thuật Chain-of-Thought hướng dẫn AI chia nhỏ bài toán và trình bày từng bước suy luận trung gian trước khi đưa ra kết quả cuối. Điểm mấu chốt: Câu thần chú kích hoạt: Thêm câu lệnh 'Hãy suy nghĩ từng bước' (Let's think step by step). Ví dụ: 'Một cửa hàng có 20 quả táo, bán đi một nửa, sau đó nhập thêm 5 quả. Hãy suy nghĩ từng bước và cho biết cửa hàng còn bao nhiêu quả?'. Lưu ý bẫy đề thi: Hỏi thẳng đáp số của bài toán logic phức tạp mà không yêu cầu AI giải thích từng bước.",
    "audioSrc": "/audio/lecture/slide-30.mp3",
    "durationSeconds": 28.5,
    "relatedQuestions": [
      33,
      34,
      36,
      37
    ]
  },
  {
    "id": "slide-31",
    "partNumber": 2,
    "partTitle": "Phần 2: Kỹ thuật Prompting & Sáng tạo nội dung",
    "slideNumber": 31,
    "title": "Quy trình dàn ý, rà soát rồi viết",
    "subtitle": "Làm việc theo bước giúp kiểm soát nội dung; tên kỹ thuật còn phụ thuộc cách tổ chức các lượt tương tác.",
    "keyPoints": [
      "Trong câu 98, IIG chọn CoT theo cách trình bày của bài nền tảng.",
      "Nếu gửi nhiều prompt, lấy dàn ý trước làm input cho lượt sau: prompt chaining.",
      "Nếu đánh giá và sửa một output nhiều lần: iterative refinement.",
      "Giải thích từng bước không phải bằng chứng output đúng."
    ],
    "frameworkBox": {
      "title": "Tình huống áp dụng (Ví dụ áp dụng)",
      "items": [
        {
          "label": "Tình huống",
          "desc": "Lập dàn ý dựa trên nguồn; kiểm tra thiếu ý; viết tóm tắt từ dàn ý đã duyệt."
        },
        {
          "label": "Ghi nhớ cốt lõi",
          "desc": "Làm việc theo bước giúp kiểm soát nội dung; tên kỹ thuật còn phụ thuộc cách tổ chức các lượt tương tác."
        }
      ]
    },
    "examTrap": "Đừng định nghĩa mọi workflow nhiều bước đều là CoT.",
    "lectureScript": "Chào các bạn. Ở slide số 31, chúng ta cùng tìm hiểu: Quy trình dàn ý, rà soát rồi viết. Làm việc theo bước giúp kiểm soát nội dung; tên kỹ thuật còn phụ thuộc cách tổ chức các lượt tương tác. Điểm mấu chốt: Trong câu 98, IIG chọn CoT theo cách trình bày của bài nền tảng. Ví dụ: Lập dàn ý dựa trên nguồn; kiểm tra thiếu ý; viết tóm tắt từ dàn ý đã duyệt. Lưu ý bẫy đề thi: Đừng định nghĩa mọi workflow nhiều bước đều là CoT.",
    "audioSrc": "/audio/lecture/slide-31.mp3",
    "durationSeconds": 23.3,
    "relatedQuestions": [
      11,
      19,
      45,
      61,
      92,
      113,
      135,
      152
    ]
  },
  {
    "id": "slide-32",
    "partNumber": 2,
    "partTitle": "Phần 2: Kỹ thuật Prompting & Sáng tạo nội dung",
    "slideNumber": 32,
    "title": "Prompt Chaining (Xâu chuỗi câu lệnh)",
    "subtitle": "Chia dự án lớn thành chuỗi các prompt nhỏ có kiểm duyệt để đảm bảo chất lượng hoàn hảo.",
    "keyPoints": [
      "Quy trình đa chặng có kiểm soát: Tách bạch các khâu: Thu thập tài liệu -> Lập dàn ý -> Viết chi tiết -> Hiệu đính.",
      "Kiểm soát chất lượng tại từng nút chặn: Con người kiểm tra và sửa đổi dàn ý ở bước 1 trước khi cho AI viết nội dung ở bước 2.",
      "Tránh quá tải: Giúp mô hình tập trung 100% năng lực vào một tác vụ đơn lẻ thay vì làm nhiều việc cùng lúc."
    ],
    "frameworkBox": {
      "title": "Thuật ngữ & Định nghĩa cốt lõi (Xâu chuỗi)",
      "items": [
        {
          "label": "Prompt Chaining",
          "desc": "Kỹ thuật liên kết nhiều câu lệnh tuần tự, lấy kết quả của câu lệnh trước làm đầu vào cho câu lệnh sau."
        }
      ]
    },
    "examTrap": "Nhồi nhét toàn bộ 5 bước vào 1 câu lệnh duy nhất khiến AI làm sơ sài và bỏ sót nhiều yêu cầu quan trọng.",
    "lectureScript": "Chào các bạn. Ở slide số 32, chúng ta cùng tìm hiểu: Prompt Chaining (Xâu chuỗi câu lệnh). Prompt Chaining chia dự án lớn thành nhiều câu lệnh độc lập; kết quả đã được con người kiểm duyệt của bước trước làm đầu vào cho bước sau. Điểm mấu chốt: Quy trình đa chặng có kiểm soát: Tách bạch các khâu: Thu thập tài liệu -> Lập dàn ý -> Viết chi tiết -> Hiệu đính. Ví dụ: Prompt 1: 'Trích xuất 5 luận điểm chính từ bài báo này.' (Bạn kiểm tra & chỉnh sửa). Prompt 2: 'Dựa vào 5 luận điểm đã duyệt, hãy viết một bài thuyết trình 5 slide.'. Lưu ý bẫy đề thi: Nhồi nhét toàn bộ 5 bước vào 1 câu lệnh duy nhất khiến AI làm sơ sài và bỏ sót nhiều yêu cầu quan trọng.",
    "audioSrc": "/audio/lecture/slide-32.mp3",
    "durationSeconds": 33.6,
    "relatedQuestions": [
      43,
      45,
      47,
      51,
      142
    ]
  },
  {
    "id": "slide-33",
    "partNumber": 2,
    "partTitle": "Phần 2: Kỹ thuật Prompting & Sáng tạo nội dung",
    "slideNumber": 33,
    "title": "Dự án 3 bước với Prompt Chaining",
    "subtitle": "Trích xuất ý chính $ ightarrow$ Duyệt dàn ý $ ightarrow$ Soạn chi tiết: Công thức chuẩn cho tài liệu lớn.",
    "keyPoints": [
      "Chặng 1 (Trích xuất): AI đọc tài liệu 30 trang và liệt kê ra 10 quy định quan trọng nhất (Người dùng rà soát).",
      "Chặng 2 (Lập dàn ý): Dựa trên 10 quy định đã duyệt, AI xây dựng cấu trúc 10 slide thuyết trình (Người dùng chỉnh sửa).",
      "Chặng 3 (Soạn thảo chi tiết): Dựa trên dàn ý đã hoàn thiện, AI viết nội dung chi tiết và gợi ý hình ảnh cho từng slide."
    ],
    "frameworkBox": {
      "title": "Thuật ngữ & Định nghĩa cốt lõi (Ứng dụng Xâu chuỗi)",
      "items": [
        {
          "label": "Chốt kiểm soát chất lượng (QA Gate)",
          "desc": "Điểm dừng giữa các bước trong chuỗi prompt để con người rà soát và phê duyệt."
        }
      ]
    },
    "examTrap": "Không dừng lại kiểm tra dàn ý ở bước 2 mà để AI viết thẳng nội dung chi tiết, dẫn đến việc phải làm lại từ đầu nếu dàn ý sai hướng.",
    "lectureScript": "Chào các bạn. Ở slide số 33, chúng ta cùng tìm hiểu: Dự án 3 bước với Prompt Chaining. Ví dụ thực tế áp dụng Prompt Chaining để chuyển đổi cuốn sổ tay nhân viên 30 trang thành bài thuyết trình PowerPoint chuyên nghiệp. Điểm mấu chốt: Chặng 1 (Trích xuất): AI đọc tài liệu 30 trang và liệt kê ra 10 quy định quan trọng nhất (Người dùng rà soát). Ví dụ: Thay vì gõ 'Hãy làm slide từ sổ tay này', hãy dùng chuỗi 3 prompt: Trích xuất ý cốt lõi -> Lập dàn ý slide -> Viết nội dung chi tiết từng slide. Lưu ý bẫy đề thi: Không dừng lại kiểm tra dàn ý ở bước 2 mà để AI viết thẳng nội dung chi tiết, dẫn đến việc phải làm lại từ đầu nếu dàn ý sai hướng.",
    "audioSrc": "/audio/lecture/slide-33.mp3",
    "durationSeconds": 34.3,
    "relatedQuestions": [
      51,
      53,
      54,
      56,
      68
    ]
  },
  {
    "id": "slide-34",
    "partNumber": 2,
    "partTitle": "Phần 2: Kỹ thuật Prompting & Sáng tạo nội dung",
    "slideNumber": 34,
    "title": "Reverse prompting: hai cách dùng trong tài liệu",
    "subtitle": "Guide dùng thiết kế prompt từ đầu ra mong muốn; tài liệu ví dụ còn dùng AI hỏi lại để làm rõ nhu cầu.",
    "keyPoints": [
      "Thiết kế ngược: xác định sản phẩm cuối, tiêu chí rồi nhờ AI đề xuất prompt.",
      "Hỏi làm rõ: để AI thu thập thông tin còn thiếu trước khi viết.",
      "Đọc ngữ cảnh từng câu; không áp một nghĩa cho tất cả ví dụ.",
      "Hỏi AI soạn câu phỏng vấn người khác chưa phải yêu cầu AI hỏi lại chính bạn."
    ],
    "frameworkBox": {
      "title": "Tình huống áp dụng (Ví dụ áp dụng)",
      "items": [
        {
          "label": "Tình huống",
          "desc": "Mục tiêu: email 100 từ cho phụ huynh. Hãy đề xuất prompt phù hợp. Hoặc: hãy hỏi tôi các dữ kiện cần có trước khi soạn CV."
        },
        {
          "label": "Ghi nhớ cốt lõi",
          "desc": "Guide dùng thiết kế prompt từ đầu ra mong muốn; tài liệu ví dụ còn dùng AI hỏi lại để làm rõ nhu cầu."
        }
      ]
    },
    "examTrap": "Khi thi, câu 144 dùng Yes–Yes–No theo IIG; khi thực hành, xác định cách dùng thuật ngữ trong tài liệu.",
    "lectureScript": "Chào các bạn. Ở slide số 34, chúng ta cùng tìm hiểu: Reverse prompting: hai cách dùng trong tài liệu. Guide dùng thiết kế prompt từ đầu ra mong muốn; tài liệu ví dụ còn dùng AI hỏi lại để làm rõ nhu cầu. Điểm mấu chốt: Thiết kế ngược: xác định sản phẩm cuối, tiêu chí rồi nhờ AI đề xuất prompt. Ví dụ: Mục tiêu: email 100 từ cho phụ huynh. Hãy đề xuất prompt phù hợp. Hoặc: hãy hỏi tôi các dữ kiện cần có trước khi soạn CV. Lưu ý bẫy đề thi: Khi thi, câu 144 dùng Yes–Yes–No theo IIG; khi thực hành, xác định cách dùng thuật ngữ trong tài liệu.",
    "audioSrc": "/audio/lecture/slide-34.mp3",
    "durationSeconds": 30.3,
    "relatedQuestions": [
      3,
      13,
      14,
      18,
      19,
      21,
      27,
      32
    ]
  },
  {
    "id": "slide-35",
    "partNumber": 2,
    "partTitle": "Phần 2: Kỹ thuật Prompting & Sáng tạo nội dung",
    "slideNumber": 35,
    "title": "Ứng dụng Reverse Prompting: Viết CV & Du lịch",
    "subtitle": "Phỏng vấn có cấu trúc mang lại bản CV và lịch trình du lịch cá nhân hóa hoàn hảo.",
    "keyPoints": [
      "Viết Sơ yếu lý lịch (CV): AI hỏi lần lượt về mục tiêu nghề nghiệp, kinh nghiệm 3 công ty gần nhất, kỹ năng nổi bật và bằng cấp trước khi tổng hợp thành CV.",
      "Lập lịch trình du lịch: AI hỏi về ngân sách, sở thích ăn uống, phương tiện di chuyển, số lượng thành viên (ví dụ: kỳ nghỉ của Kenneth hoặc chuyến leo núi Kilimanjaro).",
      "Cá nhân hóa tối đa: Sản phẩm cuối cùng hoàn toàn bám sát tình trạng thực tế của người dùng thay vì một mẫu chung chung trên mạng."
    ],
    "frameworkBox": {
      "title": "Thuật ngữ & Định nghĩa cốt lõi (Ứng dụng Nhắc ngược)",
      "items": [
        {
          "label": "Cá nhân hóa (Personalization)",
          "desc": "Quá trình tùy biến nội dung theo đúng đặc điểm và nhu cầu riêng biệt của từng cá nhân."
        }
      ]
    },
    "examTrap": "Tự mình viết một đoạn văn dài dòng lộn xộn thay vì để AI phỏng vấn có cấu trúc.",
    "lectureScript": "Chào các bạn. Ở slide số 35, chúng ta cùng tìm hiểu: Ứng dụng Reverse Prompting: Viết CV & Du lịch. Vận dụng kỹ thuật hỏi ngược để xây dựng Sơ yếu lý lịch (CV) chuyên nghiệp và thiết kế lịch trình du lịch cá nhân hóa. Điểm mấu chốt: Viết Sơ yếu lý lịch (CV): AI hỏi lần lượt về mục tiêu nghề nghiệp, kinh nghiệm 3 công ty gần nhất, kỹ năng nổi bật và bằng cấp trước khi tổng hợp thành CV. Ví dụ: 'Hãy phỏng vấn tôi 5 câu hỏi để viết CV xin việc Marketing Manager. Hãy hỏi từng câu một và chờ tôi trả lời trước khi hỏi câu tiếp theo.'. Lưu ý bẫy đề thi: Tự mình viết một đoạn văn dài dòng lộn xộn thay vì để AI phỏng vấn có cấu trúc.",
    "audioSrc": "/audio/lecture/slide-35.mp3",
    "durationSeconds": 34.0,
    "relatedQuestions": [
      13,
      14,
      19,
      36,
      38,
      58,
      61,
      75
    ]
  },
  {
    "id": "slide-36",
    "partNumber": 2,
    "partTitle": "Phần 2: Kỹ thuật Prompting & Sáng tạo nội dung",
    "slideNumber": 36,
    "title": "Self-consistency: nhiều lần tạo và đối chiếu",
    "subtitle": "Tạo nhiều phương án rồi so sánh/chọn kết quả nhất quán; việc lặp lại tự nó không xác minh sự thật.",
    "keyPoints": [
      "Guide nhấn mạnh chạy lại cùng prompt và đánh giá các kết quả.",
      "Có thể dùng bỏ phiếu nếu câu trả lời có thể so sánh rõ.",
      "Với nội dung sáng tạo, chọn theo tiêu chí thay vì chỉ đếm từ trùng.",
      "Câu 137 theo IIG là self-consistency; trong thực hành thêm bước so sánh các kết quả."
    ],
    "frameworkBox": {
      "title": "Tình huống áp dụng (Ví dụ áp dụng)",
      "items": [
        {
          "label": "Tình huống",
          "desc": "Tạo ba phương án tiêu đề, so với mục tiêu bài, chọn phương án phù hợp và kiểm tra các dữ kiện."
        },
        {
          "label": "Ghi nhớ cốt lõi",
          "desc": "Tạo nhiều phương án rồi so sánh/chọn kết quả nhất quán; việc lặp lại tự nó không xác minh sự thật."
        }
      ]
    },
    "examTrap": "Kết quả đa số vẫn có thể sai; không gọi đây là bảo đảm đúng tuyệt đối.",
    "lectureScript": "Chào các bạn. Ở slide số 36, chúng ta cùng tìm hiểu: Self-consistency: nhiều lần tạo và đối chiếu. Tạo nhiều phương án rồi so sánh/chọn kết quả nhất quán; việc lặp lại tự nó không xác minh sự thật. Điểm mấu chốt: Guide nhấn mạnh chạy lại cùng prompt và đánh giá các kết quả. Ví dụ: Tạo ba phương án tiêu đề, so với mục tiêu bài, chọn phương án phù hợp và kiểm tra các dữ kiện. Lưu ý bẫy đề thi: Kết quả đa số vẫn có thể sai; không gọi đây là bảo đảm đúng tuyệt đối.",
    "audioSrc": "/audio/lecture/slide-36.mp3",
    "durationSeconds": 25.3,
    "relatedQuestions": [
      13,
      18,
      32,
      36,
      64,
      79,
      85,
      87
    ]
  },
  {
    "id": "slide-37",
    "partNumber": 2,
    "partTitle": "Phần 2: Kỹ thuật Prompting & Sáng tạo nội dung",
    "slideNumber": 37,
    "title": "Knowledge generation: mở nền rồi áp dụng",
    "subtitle": "Tạo hoặc làm rõ kiến thức nền trước, rồi dùng kiến thức đó để đi sâu vào nhiệm vụ; phần kiến thức vẫn cần kiểm chứng.",
    "keyPoints": [
      "Guide minh họa hỏi chung rồi đào sâu theo các câu tiếp theo.",
      "Có thể nhờ liệt kê tiêu chí trước khi đánh giá một phương án.",
      "Tách dữ kiện có nguồn khỏi nội dung AI tự đề xuất."
    ],
    "frameworkBox": {
      "title": "Tình huống áp dụng (Ví dụ áp dụng)",
      "items": [
        {
          "label": "Tình huống",
          "desc": "Hỏi lợi ích nhà thông minh; chọn lợi ích phù hợp hộ gia đình; giải thích bằng ví dụ có kiểm chứng."
        },
        {
          "label": "Ghi nhớ cốt lõi",
          "desc": "Tạo hoặc làm rõ kiến thức nền trước, rồi dùng kiến thức đó để đi sâu vào nhiệm vụ; phần kiến thức vẫn cần kiểm chứng."
        }
      ]
    },
    "examTrap": "AI tự sinh nền kiến thức không làm nguồn đó trở thành độc lập hoặc chắc đúng.",
    "lectureScript": "Chào các bạn. Ở slide số 37, chúng ta cùng tìm hiểu: Knowledge generation: mở nền rồi áp dụng. Tạo hoặc làm rõ kiến thức nền trước, rồi dùng kiến thức đó để đi sâu vào nhiệm vụ; phần kiến thức vẫn cần kiểm chứng. Điểm mấu chốt: Guide minh họa hỏi chung rồi đào sâu theo các câu tiếp theo. Ví dụ: Hỏi lợi ích nhà thông minh; chọn lợi ích phù hợp hộ gia đình; giải thích bằng ví dụ có kiểm chứng. Lưu ý bẫy đề thi: AI tự sinh nền kiến thức không làm nguồn đó trở thành độc lập hoặc chắc đúng.",
    "audioSrc": "/audio/lecture/slide-37.mp3",
    "durationSeconds": 24.6,
    "relatedQuestions": [
      68,
      69,
      71,
      72,
      78
    ]
  },
  {
    "id": "slide-38",
    "partNumber": 2,
    "partTitle": "Phần 2: Kỹ thuật Prompting & Sáng tạo nội dung",
    "slideNumber": 38,
    "title": "Bản hướng dẫn phong cách (Style Guide)",
    "subtitle": "Nạp Style Guide để văn bản do AI hiệu đính đạt chuẩn mực xuất bản chuyên nghiệp.",
    "keyPoints": [
      "Nội dung của Style Guide: Quy tắc dùng dấu câu, quy chuẩn viết hoa chức danh, cách xưng hô thương hiệu, từ ngữ cấm sử dụng.",
      "Ứng dụng biên tập sao chép (Copy Editor): Biên tập viên tải lên tài liệu và bản Style Guide của tòa soạn để AI rà soát lỗi chính tả và định dạng.",
      "Đảm bảo tính nhất quán thương hiệu: Giúp hàng trăm bài viết từ nhiều tác giả khác nhau đều có chung một giọng điệu chuẩn mực."
    ],
    "frameworkBox": {
      "title": "Thuật ngữ & Định nghĩa cốt lõi (Chuẩn mực văn bản)",
      "items": [
        {
          "label": "Bản hướng dẫn phong cách (Style Guide)",
          "desc": "Bộ quy tắc văn bản quy định chuẩn mực về ngữ pháp, dấu câu, chính tả, cách viết hoa và giọng điệu của tổ chức."
        }
      ]
    },
    "examTrap": "Yêu cầu AI 'Hãy sửa bài cho hay' mà không cung cấp quy tắc Style Guide cụ thể.",
    "lectureScript": "Chào các bạn. Ở slide số 38, chúng ta cùng tìm hiểu: Bản hướng dẫn phong cách (Style Guide). Cung cấp Bản hướng dẫn phong cách (Style Guide) để AI hiệu đính văn bản tuân thủ đúng các quy chuẩn về dấu câu, ngữ pháp và viết hoa. Điểm mấu chốt: Nội dung của Style Guide: Quy tắc dùng dấu câu, quy chuẩn viết hoa chức danh, cách xưng hô thương hiệu, từ ngữ cấm sử dụng. Ví dụ: Biên tập viên tải lên Style Guide và yêu cầu: 'Rà soát bài báo này, sửa lỗi dấu câu và đảm bảo tất cả tên chức danh đều viết thường theo đúng quy định trong Style Guide đính kèm.'. Lưu ý bẫy đề thi: Yêu cầu AI 'Hãy sửa bài cho hay' mà không cung cấp quy tắc Style Guide cụ thể.",
    "audioSrc": "/audio/lecture/slide-38.mp3",
    "durationSeconds": 33.9,
    "relatedQuestions": [
      5,
      11,
      18,
      19,
      27,
      32,
      45,
      81
    ]
  },
  {
    "id": "slide-39",
    "partNumber": 2,
    "partTitle": "Phần 2: Kỹ thuật Prompting & Sáng tạo nội dung",
    "slideNumber": 39,
    "title": "Bảng thuật ngữ (Glossary) trong Dịch thuật",
    "subtitle": "Đính kèm Glossary để bản dịch chuyên ngành luôn chuẩn xác và đồng nhất.",
    "keyPoints": [
      "Khái niệm Glossary: Danh mục các từ chuyên ngành kèm theo bản dịch chuẩn xác được chỉ định sẵn (ví dụ: 'Inpainting' $ ightarrow$ 'Chỉnh sửa nội suy').",
      "Giải quyết vấn đề bất nhất: Ngăn chặn việc chương 1 dịch một kiểu, chương 5 lại dịch sang một từ đồng nghĩa khác.",
      "Bảo toàn thuật ngữ gốc: Chỉ định rõ những từ ngữ nào bắt buộc phải giữ nguyên tiếng Anh không được dịch."
    ],
    "frameworkBox": {
      "title": "Thuật ngữ & Định nghĩa cốt lõi (Dịch thuật chuyên ngành)",
      "items": [
        {
          "label": "Bảng thuật ngữ (Glossary)",
          "desc": "Danh mục từ vựng chuyên ngành kèm theo định nghĩa hoặc bản dịch chuẩn định sẵn."
        }
      ]
    },
    "examTrap": "Dịch một tài liệu kỹ thuật dài 100 trang mà không nạp Glossary khiến thuật ngữ bị dịch lộn xộn.",
    "lectureScript": "Chào các bạn. Ở slide số 39, chúng ta cùng tìm hiểu: Bảng thuật ngữ (Glossary) trong Dịch thuật. Đính kèm Bảng thuật ngữ (Glossary) giúp AI dịch thuật các từ khóa chuyên ngành kỹ thuật một cách chuẩn xác và thống nhất toàn bộ tài liệu. Điểm mấu chốt: Khái niệm Glossary: Danh mục các từ chuyên ngành kèm theo bản dịch chuẩn xác được chỉ định sẵn (ví dụ: 'Inpainting' $ ightarrow$ 'Chỉnh sửa nội suy'). Ví dụ: Đính kèm bảng: 'Generative AI' $ ightarrow$ 'AI tạo sinh'; 'Prompt' $ ightarrow$ 'Câu lệnh'; 'Transformer' $ ightarrow$ Giữ nguyên không dịch. Lưu ý bẫy đề thi: Dịch một tài liệu kỹ thuật dài 100 trang mà không nạp Glossary khiến thuật ngữ bị dịch lộn xộn.",
    "audioSrc": "/audio/lecture/slide-39.mp3",
    "durationSeconds": 36.7,
    "relatedQuestions": [
      3,
      5,
      9,
      11,
      18,
      19,
      27,
      33
    ]
  },
  {
    "id": "slide-40",
    "partNumber": 2,
    "partTitle": "Phần 2: Kỹ thuật Prompting & Sáng tạo nội dung",
    "slideNumber": 40,
    "title": "Biến đổi Định dạng: Bảng, JSON & XML",
    "subtitle": "Chỉ định rõ tên cột và định dạng Bảng Markdown để trực quan hóa dữ liệu chữ.",
    "keyPoints": [
      "Bảng Markdown (Markdown Table): Biến đoạn văn mô tả số lượng cây rừng thành bảng gồm các cột: Châu lục, Loại cây, Số lượng.",
      "Định dạng JSON / XML: Chuyển đổi thông tin khách hàng hoặc tệp cấu hình sang định dạng có cấu trúc để nạp vào phần mềm.",
      "Bảo toàn số liệu: Chỉ thị rõ ràng yêu cầu AI giữ nguyên các giá trị số học và tên riêng trong quá trình chuyển đổi."
    ],
    "frameworkBox": {
      "title": "Thuật ngữ & Định nghĩa cốt lõi (Biến đổi cấu trúc)",
      "items": [
        {
          "label": "Bảng Markdown (Markdown Table)",
          "desc": "Cấu trúc hiển thị dữ liệu dạng hàng và cột bằng các ký tự gạch nối và gạch đứng."
        },
        {
          "label": "Dữ liệu có cấu trúc (Structured Data)",
          "desc": "Dữ liệu được tổ chức theo định dạng rõ ràng (như JSON, XML, bảng) giúp máy tính dễ xử lý."
        }
      ]
    },
    "examTrap": "Không chỉ định tên các cột khiến AI tự tạo bảng với cấu trúc không đúng mong muốn.",
    "lectureScript": "Chào các bạn. Ở slide số 40, chúng ta cùng tìm hiểu: Biến đổi Định dạng: Bảng, JSON & XML. Kỹ thuật yêu cầu AI chuyển đổi các đoạn văn bản dài thành cấu trúc dữ liệu trực quan như Bảng Markdown, JSON hoặc XML. Điểm mấu chốt: Bảng Markdown (Markdown Table): Biến đoạn văn mô tả số lượng cây rừng thành bảng gồm các cột: Châu lục, Loại cây, Số lượng. Ví dụ: 'Hãy đọc đoạn văn sau về số lượng cây trên các châu lục và chuyển toàn bộ thông tin thành Bảng Markdown gồm 3 cột: Châu lục, Số lượng cây, Tỷ lệ phần trăm.'. Lưu ý bẫy đề thi: Không chỉ định tên các cột khiến AI tự tạo bảng với cấu trúc không đúng mong muốn.",
    "audioSrc": "/audio/lecture/slide-40.mp3",
    "durationSeconds": 31.6,
    "relatedQuestions": [
      21,
      34,
      74,
      79,
      82,
      115,
      125,
      140
    ]
  },
  {
    "id": "slide-41",
    "partNumber": 2,
    "partTitle": "Phần 2: Kỹ thuật Prompting & Sáng tạo nội dung",
    "slideNumber": 41,
    "title": "Grounding và cách xử lý thiếu dữ liệu",
    "subtitle": "Tài liệu nguồn và yêu cầu nói rõ phần chưa biết giúp giảm suy diễn, nhưng không loại bỏ hoàn toàn ảo giác.",
    "keyPoints": [
      "Chỉ định tài liệu và phạm vi cần sử dụng.",
      "Yêu cầu trích vị trí nguồn cho các dữ kiện chính.",
      "Tách phần có chứng cứ với đề xuất/giả định.",
      "Nếu thiếu dữ liệu: hỏi lại hoặc ghi chưa đủ căn cứ."
    ],
    "frameworkBox": {
      "title": "Tình huống áp dụng (Ví dụ áp dụng)",
      "items": [
        {
          "label": "Tình huống",
          "desc": "Dựa vào báo cáo này, nêu ba kết quả; dẫn trang; nếu báo cáo không có thì ghi “chưa có thông tin”."
        },
        {
          "label": "Ghi nhớ cốt lõi",
          "desc": "Tài liệu nguồn và yêu cầu nói rõ phần chưa biết giúp giảm suy diễn, nhưng không loại bỏ hoàn toàn ảo giác."
        }
      ]
    },
    "examTrap": "Không có một prompt đơn lẻ nào bảo đảm AI không bịa.",
    "lectureScript": "Chào các bạn. Ở slide số 41, chúng ta cùng tìm hiểu: Grounding và cách xử lý thiếu dữ liệu. Tài liệu nguồn và yêu cầu nói rõ phần chưa biết giúp giảm suy diễn, nhưng không loại bỏ hoàn toàn ảo giác. Điểm mấu chốt: Chỉ định tài liệu và phạm vi cần sử dụng. Ví dụ: Dựa vào báo cáo này, nêu ba kết quả; dẫn trang; nếu báo cáo không có thì ghi “chưa có thông tin”. Lưu ý bẫy đề thi: Không có một prompt đơn lẻ nào bảo đảm AI không bịa.",
    "audioSrc": "/audio/lecture/slide-41.mp3",
    "durationSeconds": 23.3,
    "relatedQuestions": [
      3,
      11,
      13,
      14,
      18,
      19,
      27,
      32
    ]
  },
  {
    "id": "slide-42",
    "partNumber": 2,
    "partTitle": "Phần 2: Kỹ thuật Prompting & Sáng tạo nội dung",
    "slideNumber": 42,
    "title": "Phân tích Biểu đồ phân tán & Trendline",
    "subtitle": "Dùng đường xu hướng (Trendline) trên biểu đồ để AI phân tích và ước tính chuẩn xác.",
    "keyPoints": [
      "Đường xu hướng (Trendline): Biểu diễn hướng chuyển động trung bình của dữ liệu, giúp nhận biết tương quan thuận hay nghịch.",
      "Ước tính giá trị ngoại suy: Dựa vào độ dốc của đường xu hướng để ước tính giá trị tháng tiếp theo (lợi nhuận ròng, nhiệt độ trái đất).",
      "Yêu cầu rõ ràng: 'Dựa vào đường xu hướng trong biểu đồ phân tán đính kèm, hãy ước tính mức lợi nhuận của tháng thứ 12'."
    ],
    "frameworkBox": {
      "title": "Thuật ngữ & Định nghĩa cốt lõi (Đọc biểu đồ)",
      "items": [
        {
          "label": "Biểu đồ phân tán (Scatter Plot)",
          "desc": "Biểu đồ thể hiện các điểm dữ liệu tọa độ của hai biến số để khảo sát mối tương quan."
        },
        {
          "label": "Đường xu hướng (Trendline)",
          "desc": "Đường kẻ biểu diễn xu hướng biến thiên tổng thể của dữ liệu trên biểu đồ."
        }
      ]
    },
    "examTrap": "Nạp hình ảnh biểu đồ bị mờ hoặc bị cắt mất phần chú thích các trục tọa độ X và Y.",
    "lectureScript": "Chào các bạn. Ở slide số 42, chúng ta cùng tìm hiểu: Phân tích Biểu đồ phân tán & Trendline. Đính kèm hình ảnh biểu đồ phân tán (Scatter plot) có đường xu hướng (Trendline) để AI phân tích tương quan và ước tính dữ liệu. Điểm mấu chốt: Đường xu hướng (Trendline): Biểu diễn hướng chuyển động trung bình của dữ liệu, giúp nhận biết tương quan thuận hay nghịch. Ví dụ: Nạp biểu đồ phân tán lợi nhuận 11 tháng có Trendline đi lên: AI đọc độ dốc đường xu hướng và ước tính doanh thu tháng 12 đạt 150 triệu đồng. Lưu ý bẫy đề thi: Nạp hình ảnh biểu đồ bị mờ hoặc bị cắt mất phần chú thích các trục tọa độ X và Y.",
    "audioSrc": "/audio/lecture/slide-42.mp3",
    "durationSeconds": 32.1,
    "relatedQuestions": [
      5,
      13,
      14,
      21,
      30,
      33,
      34,
      38
    ]
  },
  {
    "id": "slide-43",
    "partNumber": 2,
    "partTitle": "Phần 2: Kỹ thuật Prompting & Sáng tạo nội dung",
    "slideNumber": 43,
    "title": "Thiết kế Prompt Hình ảnh: Chủ thể & Phong cách",
    "subtitle": "Chủ thể rõ nét + Bối cảnh cụ thể + Phong cách nghệ thuật chuẩn = Bức ảnh hoàn hảo.",
    "keyPoints": [
      "Chủ thể trọng tâm (Subject): Mô tả rõ con người, động vật, đồ vật (ví dụ: 'chú chó cứu hộ tại trại động vật', 'máy cắt cỏ điện').",
      "Môi trường & Bối cảnh (Setting): Không gian xung quanh, thời tiết, địa điểm (ví dụ: 'trong khu vườn xanh ngắt đầy hoa rực rỡ và ong').",
      "Phong cách nghệ thuật (Art Style): Đồ họa phẳng tối giản (flat vector minimalist), tranh màu nước, ảnh chụp chân dung thực tế 35mm, render 3D."
    ],
    "frameworkBox": {
      "title": "Thuật ngữ & Định nghĩa cốt lõi (Prompt Ảnh (Phần 1))",
      "items": [
        {
          "label": "Chủ thể (Subject)",
          "desc": "Đối tượng chính xuất hiện trong bức ảnh do AI vẽ."
        },
        {
          "label": "Phong cách nghệ thuật (Art Style)",
          "desc": "Ngôn ngữ thị giác định hình phong cách của bức ảnh (vector, tranh sơn dầu, ảnh chụp thực tế)."
        }
      ]
    },
    "examTrap": "Nhập câu lệnh chung chung 'Vẽ cho tôi một bức tranh đẹp' mà không nêu chủ thể và phong cách cụ thể.",
    "lectureScript": "Chào các bạn. Ở slide số 43, chúng ta cùng tìm hiểu: Thiết kế Prompt Hình ảnh: Chủ thể & Phong cách. Xây dựng prompt tạo ảnh chuyên nghiệp bằng cách mô tả chi tiết Chủ thể, Môi trường bối cảnh và Phong cách nghệ thuật (Art Style). Điểm mấu chốt: Chủ thể trọng tâm (Subject): Mô tả rõ con người, động vật, đồ vật (ví dụ: 'chú chó cứu hộ tại trại động vật', 'máy cắt cỏ điện'). Ví dụ: 'Logo vector phẳng tối giản, máy cắt cỏ điện ở giữa một khu vườn xanh có hoa rực rỡ và ong, phong cách hiện đại, nền trong suốt.'. Lưu ý bẫy đề thi: Nhập câu lệnh chung chung 'Vẽ cho tôi một bức tranh đẹp' mà không nêu chủ thể và phong cách cụ thể.",
    "audioSrc": "/audio/lecture/slide-43.mp3",
    "durationSeconds": 32.6,
    "relatedQuestions": [
      3,
      5,
      8,
      9,
      11,
      12,
      14,
      18
    ]
  },
  {
    "id": "slide-44",
    "partNumber": 2,
    "partTitle": "Phần 2: Kỹ thuật Prompting & Sáng tạo nội dung",
    "slideNumber": 44,
    "title": "Ánh sáng, Bố cục & Negative Prompt",
    "subtitle": "Kiểm soát ánh sáng, góc máy và dùng Negative Prompt để loại bỏ tạp âm hình ảnh.",
    "keyPoints": [
      "Ánh sáng (Lighting): Ánh sáng giờ vàng (golden hour), ánh sáng điện ảnh (cinematic lighting), ánh sáng trường quay mềm (soft studio lighting).",
      "Bố cục & Góc máy (Camera Angle): Chụp cận cảnh (close-up), góc rộng (wide angle), góc nhìn flycam từ trên cao (top-down view).",
      "Tỷ lệ khung hình (Aspect Ratio): Chỉ định rõ tỷ lệ ngang (--ar 16:9) cho video/màn hình hoặc tỷ lệ dọc (--ar 9:16) cho bài đăng điện thoại.",
      "Câu lệnh phủ định (Negative Prompt): Liệt kê các chi tiết cấm xuất hiện: 'no text, no blurry, no extra limbs, no watermark'."
    ],
    "frameworkBox": {
      "title": "Thuật ngữ & Định nghĩa cốt lõi (Prompt Ảnh (Phần 2))",
      "items": [
        {
          "label": "Negative Prompt (Câu lệnh phủ định)",
          "desc": "Danh sách các chi tiết hoặc lỗi mà người dùng yêu cầu AI tuyệt đối không vẽ vào ảnh."
        },
        {
          "label": "Tỷ lệ khung hình (Aspect Ratio)",
          "desc": "Tỷ lệ giữa chiều rộng và chiều cao của bức ảnh."
        }
      ]
    },
    "examTrap": "Kiểm tra tỷ lệ khung hình theo công cụ; chọn tỷ lệ phù hợp nơi sử dụng thay vì dựa vào mặc định.",
    "lectureScript": "Chào các bạn. Ở slide số 44, chúng ta cùng tìm hiểu: Ánh sáng, Bố cục & Negative Prompt. Tinh chỉnh độ chuyên nghiệp của hình ảnh bằng cách thiết lập nguồn sáng, góc máy, tỷ lệ khung hình và câu lệnh phủ định (Negative Prompt). Điểm mấu chốt: Ánh sáng (Lighting): Ánh sáng giờ vàng (golden hour), ánh sáng điện ảnh (cinematic lighting), ánh sáng trường quay mềm (soft studio lighting). Ví dụ: 'Áp phích Nhớ bạn cho chú chó cứu hộ, chụp cận cảnh, ánh sáng studio mềm mại, tỷ lệ 16:9, phong cách chân thực. Negative: no blurry, no text, no distorted paws.'. Lưu ý bẫy đề thi: Kiểm tra tỷ lệ khung hình theo công cụ; chọn tỷ lệ phù hợp nơi sử dụng thay vì dựa vào mặc định.",
    "audioSrc": "/audio/lecture/slide-44.mp3",
    "durationSeconds": 36.2,
    "relatedQuestions": [
      125,
      127,
      130,
      132
    ]
  },
  {
    "id": "slide-45",
    "partNumber": 2,
    "partTitle": "Phần 2: Kỹ thuật Prompting & Sáng tạo nội dung",
    "slideNumber": 45,
    "title": "Tạo, sửa và mô tả ảnh",
    "subtitle": "Tạo ảnh mới, chỉnh sửa ảnh có sẵn và mô tả ảnh là ba nhiệm vụ cần phân biệt khi đọc prompt.",
    "keyPoints": [
      "Tạo: sinh hình từ mô tả.",
      "Sửa: thêm/xóa/thay chi tiết; inpainting sửa vùng trong ảnh, outpainting mở rộng khung.",
      "Mô tả: phân tích nội dung, bố cục, phong cách hoặc metadata có sẵn.",
      "Metadata không nhất thiết suy ra được từ pixel; không đoán ngày/vị trí như dữ kiện thật."
    ],
    "frameworkBox": {
      "title": "Tình huống áp dụng (Ví dụ áp dụng)",
      "items": [
        {
          "label": "Tình huống",
          "desc": "“Nền ảnh này là gì?” là mô tả. “Đổi nền thành xanh” là sửa."
        },
        {
          "label": "Ghi nhớ cốt lõi",
          "desc": "Tạo ảnh mới, chỉnh sửa ảnh có sẵn và mô tả ảnh là ba nhiệm vụ cần phân biệt khi đọc prompt."
        }
      ]
    },
    "examTrap": "Sửa metadata là sửa dữ liệu tệp; không nhất thiết đổi nội dung thị giác.",
    "lectureScript": "Chào các bạn. Ở slide số 45, chúng ta cùng tìm hiểu: Tạo, sửa và mô tả ảnh. Tạo ảnh mới, chỉnh sửa ảnh có sẵn và mô tả ảnh là ba nhiệm vụ cần phân biệt khi đọc prompt. Điểm mấu chốt: Tạo: sinh hình từ mô tả. Ví dụ: “Nền ảnh này là gì?” là mô tả. “Đổi nền thành xanh” là sửa. Lưu ý bẫy đề thi: Sửa metadata là sửa dữ liệu tệp; không nhất thiết đổi nội dung thị giác.",
    "audioSrc": "/audio/lecture/slide-45.mp3",
    "durationSeconds": 19.8,
    "relatedQuestions": [
      132,
      135,
      140,
      142
    ]
  },
  {
    "id": "slide-46",
    "partNumber": 2,
    "partTitle": "Phần 2: Kỹ thuật Prompting & Sáng tạo nội dung",
    "slideNumber": 46,
    "title": "Video: chuyển động, nội suy, avatar và phụ đề",
    "subtitle": "Prompt video cần nêu chuyển động, thời lượng, nhân vật, âm thanh và mục tiêu tiếp cận.",
    "keyPoints": [
      "Ảnh tĩnh → video: chỉ rõ vật hoặc camera chuyển động ra sao.",
      "Nội suy: bổ sung khung hình trung gian cho chuyển tiếp.",
      "Avatar đọc script: nhân vật nào đọc nội dung gì, giọng điệu và khẩu hình/cử chỉ phù hợp.",
      "Phụ đề hỗ trợ xem không cần âm thanh; phải soát lỗi và đồng bộ."
    ],
    "frameworkBox": {
      "title": "Tình huống áp dụng (Ví dụ áp dụng)",
      "items": [
        {
          "label": "Tình huống",
          "desc": "Tạo video 10 giây từ ảnh này; camera lia nhẹ; nhân vật đọc script; thêm phụ đề tiếng Việt."
        },
        {
          "label": "Ghi nhớ cốt lõi",
          "desc": "Prompt video cần nêu chuyển động, thời lượng, nhân vật, âm thanh và mục tiêu tiếp cận."
        }
      ]
    },
    "examTrap": "Chỉ tạo giọng đọc TTS chưa bảo đảm avatar là người đọc; nhiều cảm xúc không phải lúc nào cũng cần.",
    "lectureScript": "Chào các bạn. Ở slide số 46, chúng ta cùng tìm hiểu: Video: chuyển động, nội suy, avatar và phụ đề. Prompt video cần nêu chuyển động, thời lượng, nhân vật, âm thanh và mục tiêu tiếp cận. Điểm mấu chốt: Ảnh tĩnh → video: chỉ rõ vật hoặc camera chuyển động ra sao. Ví dụ: Tạo video 10 giây từ ảnh này; camera lia nhẹ; nhân vật đọc script; thêm phụ đề tiếng Việt. Lưu ý bẫy đề thi: Chỉ tạo giọng đọc TTS chưa bảo đảm avatar là người đọc; nhiều cảm xúc không phải lúc nào cũng cần.",
    "audioSrc": "/audio/lecture/slide-46.mp3",
    "durationSeconds": 26.4,
    "relatedQuestions": [
      59,
      142,
      144,
      151,
      152
    ]
  },
  {
    "id": "slide-47",
    "partNumber": 3,
    "partTitle": "Phần 3: Đánh giá, Xác minh & Phát hiện ảo giác",
    "slideNumber": 47,
    "title": "Xác minh bằng chứng độc lập",
    "subtitle": "AI có thể hỗ trợ tìm lỗi, nhưng kết luận về độ chính xác cần đối chiếu nguồn phù hợp và bằng chứng có thể kiểm tra.",
    "keyPoints": [
      "Dữ kiện lịch sử: kiểm tra tài liệu/nguồn đáng tin.",
      "Thông tin hiện tại: xem nguồn có cập nhật và ngày công bố.",
      "Số liệu: truy bảng gốc, đơn vị, mốc thời gian và phương pháp.",
      "Không lấy lời xác nhận của cùng chatbot làm bằng chứng độc lập."
    ],
    "frameworkBox": {
      "title": "Tình huống áp dụng (Ví dụ áp dụng)",
      "items": [
        {
          "label": "Tình huống",
          "desc": "Nhờ AI chỉ ra điểm cần kiểm tra rồi tự mở báo cáo nguồn để xác minh."
        },
        {
          "label": "Ghi nhớ cốt lõi",
          "desc": "AI có thể hỗ trợ tìm lỗi, nhưng kết luận về độ chính xác cần đối chiếu nguồn phù hợp và bằng chứng có thể kiểm tra."
        }
      ]
    },
    "examTrap": "Không cần cấm AI hỗ trợ rà lỗi; cần phân biệt hỗ trợ với xác minh độc lập.",
    "lectureScript": "Chào các bạn. Ở slide số 47, chúng ta cùng tìm hiểu: Xác minh bằng chứng độc lập. AI có thể hỗ trợ tìm lỗi, nhưng kết luận về độ chính xác cần đối chiếu nguồn phù hợp và bằng chứng có thể kiểm tra. Điểm mấu chốt: Dữ kiện lịch sử: kiểm tra tài liệu/nguồn đáng tin. Ví dụ: Nhờ AI chỉ ra điểm cần kiểm tra rồi tự mở báo cáo nguồn để xác minh. Lưu ý bẫy đề thi: Không cần cấm AI hỗ trợ rà lỗi; cần phân biệt hỗ trợ với xác minh độc lập.",
    "audioSrc": "/audio/lecture/slide-47.mp3",
    "durationSeconds": 24.2,
    "relatedQuestions": [
      16,
      20,
      35,
      70,
      118,
      143,
      159
    ]
  },
  {
    "id": "slide-48",
    "partNumber": 3,
    "partTitle": "Phần 3: Đánh giá, Xác minh & Phát hiện ảo giác",
    "slideNumber": 48,
    "title": "Bẫy tự xác nhận (Self-Confirmation)",
    "subtitle": "Lặp lại nhiều lần không biến điều sai thành sự thật; hãy mở nguồn tài liệu gốc để kiểm chứng.",
    "keyPoints": [
      "Ảo tưởng lặp lại: Nếu mô hình có xu hướng tính toán xác suất nghiêng về một thông tin sai, nó sẽ lặp lại thông tin sai đó ở mọi lần chạy.",
      "Hỏi 'Bạn có chắc chắn không?': Chỉ khiến AI tiếp tục tính toán chuỗi ngôn ngữ xã giao ('Tôi hoàn toàn chắc chắn') chứ không tạo ra bằng chứng thực tế mới.",
      "Lãng phí thời gian: Việc chạy đi chạy lại một prompt không thay thế được 30 giây tra cứu sách báo chính thống."
    ],
    "frameworkBox": {
      "title": "Thuật ngữ & Định nghĩa cốt lõi (Bẫy tự xác nhận)",
      "items": [
        {
          "label": "Bẫy tự xác nhận (Self-Confirmation Fallacy)",
          "desc": "Sai lầm khi tin rằng việc AI lặp lại câu trả lời nhiều lần đồng nghĩa với việc thông tin đó là sự thật khách quan."
        }
      ]
    },
    "examTrap": "Chạy prompt 3 lần thấy ra kết quả y hệt nhau liền vội vàng kết luận thông tin là chính xác 100%.",
    "lectureScript": "Chào các bạn. Ở slide số 48, chúng ta cùng tìm hiểu: Bẫy tự xác nhận (Self-Confirmation). Chạy lại cùng một câu lệnh nhiều lần hoặc hỏi 'AI có chắc không' không chứng minh câu trả lời đúng; AI có thể tự tin lặp lại cùng một sai lầm. Điểm mấu chốt: Ảo tưởng lặp lại: Nếu mô hình có xu hướng tính toán xác suất nghiêng về một thông tin sai, nó sẽ lặp lại thông tin sai đó ở mọi lần chạy. Ví dụ: Bạn hỏi AI: 'Ai là tổng thống thứ 100 của Mỹ?' -> AI bịa ra một cái tên -> Bạn hỏi 'Chắc không?' -> AI trả lời 'Tôi chắc chắn 100%' -> Đây là sự tự tin mù quáng của mô hình xác suất. Lưu ý bẫy đề thi: Chạy prompt 3 lần thấy ra kết quả y hệt nhau liền vội vàng kết luận thông tin là chính xác 100%.",
    "audioSrc": "/audio/lecture/slide-48.mp3",
    "durationSeconds": 37.9,
    "relatedQuestions": [
      7,
      10,
      15,
      16
    ]
  },
  {
    "id": "slide-49",
    "partNumber": 3,
    "partTitle": "Phần 3: Đánh giá, Xác minh & Phát hiện ảo giác",
    "slideNumber": 49,
    "title": "Đối chiếu chéo với Dữ liệu Nhà nước",
    "subtitle": "Ưu tiên dữ liệu Tổng điều tra dân số và báo cáo chính phủ làm mốc tham chiếu chuẩn mực.",
    "keyPoints": [
      "Dữ liệu Tổng điều tra dân số (Census Data): Nguồn chuẩn mực nhất để xác thực quy mô dân số, cơ cấu độ tuổi, tỷ lệ đô thị hóa.",
      "Cổng thông tin bộ ngành & Chính phủ: Dùng để xác thực các văn bản pháp luật, quy chuẩn xây dựng, thông tư thuế và số liệu xuất nhập khẩu.",
      "Báo cáo tổ chức quốc tế: Dữ liệu của Ngân hàng Thế giới (World Bank), Liên Hợp Quốc (UN), Quỹ Tiền tệ Quốc tế (IMF)."
    ],
    "frameworkBox": {
      "title": "Thuật ngữ & Định nghĩa cốt lõi (Nguồn thẩm quyền)",
      "items": [
        {
          "label": "Đối chiếu chéo (Cross-referencing)",
          "desc": "Phương pháp so sánh dữ liệu từ nhiều nguồn độc lập khác nhau để thẩm định tính chân thực."
        },
        {
          "label": "Tổng điều tra dân số (Census Data)",
          "desc": "Dữ liệu thống kê quy mô dân số và nhân khẩu học chính thức do cơ quan nhà nước thực hiện."
        }
      ]
    },
    "examTrap": "Dùng số liệu trên các bài đăng mạng xã hội không rõ nguồn gốc để đối chiếu chéo số liệu AI.",
    "lectureScript": "Chào các bạn. Ở slide số 49, chúng ta cùng tìm hiểu: Đối chiếu chéo với Dữ liệu Nhà nước. Đối chiếu chéo (Cross-referencing) số liệu của AI với các cơ sở dữ liệu quốc gia chính thức, Tổng điều tra dân số và báo cáo chính phủ. Điểm mấu chốt: Dữ liệu Tổng điều tra dân số (Census Data): Nguồn chuẩn mực nhất để xác thực quy mô dân số, cơ cấu độ tuổi, tỷ lệ đô thị hóa. Ví dụ: AI đưa ra báo cáo dân số tỉnh A năm 2025: Mở Cổng thông tin Tổng cục Thống kê để đối chiếu số liệu chính xác từng quận huyện. Lưu ý bẫy đề thi: Dùng số liệu trên các bài đăng mạng xã hội không rõ nguồn gốc để đối chiếu chéo số liệu AI.",
    "audioSrc": "/audio/lecture/slide-49.mp3",
    "durationSeconds": 34.3,
    "relatedQuestions": [
      16,
      23,
      25,
      35,
      98,
      107,
      118,
      131
    ]
  },
  {
    "id": "slide-50",
    "partNumber": 3,
    "partTitle": "Phần 3: Đánh giá, Xác minh & Phát hiện ảo giác",
    "slideNumber": 50,
    "title": "Nguồn học thuật & Trang Fact-checking",
    "subtitle": "Dữ liệu bình duyệt + Trang Fact-checking = Lá chắn bảo vệ sự thật khoa học.",
    "keyPoints": [
      "Cơ sở dữ liệu học thuật bình duyệt: Google Scholar, PubMed (y khoa), IEEE Xplore (kỹ thuật), JSTOR (xã hội nhân văn).",
      "Tổ chức kiểm chứng dữ kiện (Fact-checking): Snopes, Reuters Fact Check, AP Fact Check chuyên điều tra các tin đồn và tuyên bố sai sự thật.",
      "Kiểm tra ngày xuất bản: Đảm bảo nghiên cứu học thuật tham chiếu vẫn còn giá trị áp dụng và chưa bị thay thế bởi các công trình mới hơn."
    ],
    "frameworkBox": {
      "title": "Thuật ngữ & Định nghĩa cốt lõi (Nguồn học thuật)",
      "items": [
        {
          "label": "Bình duyệt (Peer-reviewed)",
          "desc": "Quy trình thẩm định khắt khe bởi hội đồng các nhà khoa học độc lập trước khi bài báo được xuất bản."
        },
        {
          "label": "Tổ chức Fact-checking",
          "desc": "Tổ chức độc lập chuyên điều tra và xác minh tính chân thực của các thông tin công khai."
        }
      ]
    },
    "examTrap": "Tin vào một bài báo khoa học mà không kiểm tra xem tạp chí đó có uy tín và được bình duyệt hay không.",
    "lectureScript": "Chào các bạn. Ở slide số 50, chúng ta cùng tìm hiểu: Nguồn học thuật & Trang Fact-checking. Sử dụng cơ sở dữ liệu học thuật có bình duyệt (Peer-reviewed) và các tổ chức kiểm chứng tin tức độc lập để xác minh thông tin chuyên sâu. Điểm mấu chốt: Cơ sở dữ liệu học thuật bình duyệt: Google Scholar, PubMed (y khoa), IEEE Xplore (kỹ thuật), JSTOR (xã hội nhân văn). Ví dụ: Sử dụng AI để ôn thi lịch sử: Bắt buộc tra cứu cơ sở dữ liệu học thuật và các trang fact-checking uy tín để đối chiếu các mốc thời gian và sự kiện. Lưu ý bẫy đề thi: Tin vào một bài báo khoa học mà không kiểm tra xem tạp chí đó có uy tín và được bình duyệt hay không.",
    "audioSrc": "/audio/lecture/slide-50.mp3",
    "durationSeconds": 35.1,
    "relatedQuestions": [
      16,
      25,
      70,
      98,
      118,
      131,
      137,
      158
    ]
  },
  {
    "id": "slide-51",
    "partNumber": 3,
    "partTitle": "Phần 3: Đánh giá, Xác minh & Phát hiện ảo giác",
    "slideNumber": 51,
    "title": "Tham vấn Chuyên gia có Thẩm quyền",
    "subtitle": "Tham vấn chuyên gia là chốt chặn an toàn và uy tín nhất cho các dự án quan trọng.",
    "keyPoints": [
      "Giá trị của kinh nghiệm thực tế: Chuyên gia có khả năng nhận biết ngay những lỗi sai phi thực tế mà tài liệu viết có thể chưa cập nhật.",
      "Đánh giá tính khả thi: Chuyên gia thẩm định xem các giải pháp kỹ thuật do AI đề xuất có thực sự thi công hoặc áp dụng được trên thực địa hay không.",
      "Xử lý các tình huống nhạy cảm: Các quyết định y khoa, bản án pháp lý và chính sách công bắt buộc phải có sự đánh giá của hội đồng chuyên môn."
    ],
    "frameworkBox": {
      "title": "Thuật ngữ & Định nghĩa cốt lõi (Tham vấn con người)",
      "items": [
        {
          "label": "Tham vấn chuyên gia (Expert Consultation)",
          "desc": "Quá trình trao đổi với người có chuyên môn sâu trong ngành để đánh giá và thẩm định thông tin."
        }
      ]
    },
    "examTrap": "Bỏ qua bước hỏi ý kiến chuyên gia và tự ý áp dụng các hướng dẫn kỹ thuật phức tạp của AI vào thực tế.",
    "lectureScript": "Chào các bạn. Ở slide số 51, chúng ta cùng tìm hiểu: Tham vấn Chuyên gia có Thẩm quyền. Trao đổi và tham vấn trực tiếp với các giáo sư, bác sĩ, kỹ sư hoặc chuyên gia đầu ngành giúp đánh giá thông tin theo chuyên môn; vẫn cần xem bằng chứng và phạm vi năng lực. Điểm mấu chốt: Giá trị của kinh nghiệm thực tế: Chuyên gia có khả năng nhận biết ngay những lỗi sai phi thực tế mà tài liệu viết có thể chưa cập nhật. Ví dụ: Bác sĩ sử dụng AI để tổng hợp tài liệu nghiên cứu mới, nhưng phác đồ điều trị thực tế cho bệnh nhân bắt buộc phải được hội đồng bác sĩ chuyên khoa phê duyệt. Lưu ý bẫy đề thi: Bỏ qua bước hỏi ý kiến chuyên gia và tự ý áp dụng các hướng dẫn kỹ thuật phức tạp của AI vào thực tế.",
    "audioSrc": "/audio/lecture/slide-51.mp3",
    "durationSeconds": 35.3,
    "relatedQuestions": [
      16,
      35,
      41,
      55,
      65,
      70
    ]
  },
  {
    "id": "slide-52",
    "partNumber": 3,
    "partTitle": "Phần 3: Đánh giá, Xác minh & Phát hiện ảo giác",
    "slideNumber": 52,
    "title": "AI Hallucination (Ảo giác) là gì?",
    "subtitle": "Văn phong tự tin không chứng minh sự thật; luôn cảnh giác trước hiện tượng ảo giác AI.",
    "keyPoints": [
      "Bản chất xác suất: Mô hình ghép các từ ngữ có vẻ hợp lý nhất theo quy luật thống kê chứ không tra cứu cơ sở dữ liệu sự thật khách quan.",
      "Độ trôi chảy đánh lừa người dùng: Câu văn được viết rất mượt mà, đúng ngữ pháp, lập luận chặt chẽ khiến người đọc dễ mất cảnh giác.",
      "Phạm vi xuất hiện: Xảy ra ở mọi lĩnh vực từ số liệu khoa học, tên tác giả bài báo, sự kiện lịch sử đến điều khoản luật pháp."
    ],
    "frameworkBox": {
      "title": "Thuật ngữ & Định nghĩa cốt lõi (Bản chất ảo giác)",
      "items": [
        {
          "label": "Ảo giác AI (Hallucination)",
          "desc": "Hiện tượng mô hình AI tạo ra thông tin sai lệch, bịa đặt hoặc phi thực tế nhưng được trình bày với giọng văn tự tin và thuyết phục."
        }
      ]
    },
    "examTrap": "Tin tưởng rằng một câu văn viết hay và trôi chảy thì chắc chắn nội dung bên trong phải đúng sự thật.",
    "lectureScript": "Chào các bạn. Ở slide số 52, chúng ta cùng tìm hiểu: AI Hallucination (Ảo giác) là gì?. Ảo giác (Hallucination) là hiện tượng mô hình AI tự tạo ra thông tin hoàn toàn sai sự thật hoặc bịa đặt nhưng trình bày với văn phong cực kỳ tự tin. Điểm mấu chốt: Bản chất xác suất: Mô hình ghép các từ ngữ có vẻ hợp lý nhất theo quy luật thống kê chứ không tra cứu cơ sở dữ liệu sự thật khách quan. Ví dụ: AI tuyên bố: 'Theo nghiên cứu năm 2024 của Đại học Oxford, 87.4% người uống trà sống thọ trên 100 tuổi' -> Con số 87.4% và nghiên cứu này hoàn toàn do AI tự bịa ra. Lưu ý bẫy đề thi: Tin tưởng rằng một câu văn viết hay và trôi chảy thì chắc chắn nội dung bên trong phải đúng sự thật.",
    "audioSrc": "/audio/lecture/slide-52.mp3",
    "durationSeconds": 40.4,
    "relatedQuestions": [
      65,
      67,
      70,
      77
    ]
  },
  {
    "id": "slide-53",
    "partNumber": 3,
    "partTitle": "Phần 3: Đánh giá, Xác minh & Phát hiện ảo giác",
    "slideNumber": 53,
    "title": "Dấu hiệu nhận diện Trích dẫn & Án lệ Giả",
    "subtitle": "Mọi trích dẫn khoa học và điều luật do AI tạo ra bắt buộc phải được mở kiểm tra thực tế.",
    "keyPoints": [
      "Trích dẫn bài báo khoa học giả: AI bịa ra tên tác giả nổi tiếng ghép với tên bài báo nghe rất kêu, nhưng mã DOI hoặc đường link bấm vào báo lỗi 404.",
      "Bịa đặt án lệ luật pháp: Tự tạo ra tên các vụ tranh chấp, số hiệu hồ sơ tòa án và tên thẩm phán không hề có trong thực tế (rủi ro cực lớn cho ngành luật).",
      "Cách phòng ngừa: Luôn copy mã DOI hoặc số hiệu án lệ và tra cứu trực tiếp trên hệ thống thư viện hoặc cổng tòa án."
    ],
    "frameworkBox": {
      "title": "Thuật ngữ & Định nghĩa cốt lõi (Dấu hiệu ảo giác)",
      "items": [
        {
          "label": "Trích dẫn giả (Fabricated Citation)",
          "desc": "Tài liệu tham khảo, đường link hoặc mã định danh DOI do AI tự tạo ra mà không có thật."
        },
        {
          "label": "Mã định danh số (DOI - Digital Object Identifier)",
          "desc": "Chuỗi ký tự duy nhất dùng để định danh vĩnh viễn một bài báo khoa học trên Internet."
        }
      ]
    },
    "examTrap": "Sao chép nguyên văn danh mục tài liệu tham khảo do AI tạo ra vào bài luận mà không mở kiểm tra từng liên kết.",
    "lectureScript": "Chào các bạn. Ở slide số 53, chúng ta cùng tìm hiểu: Dấu hiệu nhận diện Trích dẫn & Án lệ Giả. Học cách phát hiện các dấu hiệu ảo giác đặc trưng: Mã số DOI giả mạo, đường link URL không tồn tại và các án lệ luật pháp bịa đặt. Điểm mấu chốt: Trích dẫn bài báo khoa học giả: AI bịa ra tên tác giả nổi tiếng ghép với tên bài báo nghe rất kêu, nhưng mã DOI hoặc đường link bấm vào báo lỗi 404. Ví dụ: Một thực tập sinh công ty luật nộp đơn kiện có 3 án lệ do AI trích dẫn -> Ra tòa phát hiện cả 3 án lệ đều không tồn tại -> Tòa án xử phạt luật sư vì vi phạm liêm chính nghề nghiệp. Lưu ý bẫy đề thi: Sao chép nguyên văn danh mục tài liệu tham khảo do AI tạo ra vào bài luận mà không mở kiểm tra từng liên kết.",
    "audioSrc": "/audio/lecture/slide-53.mp3",
    "durationSeconds": 38.5,
    "relatedQuestions": [
      23,
      131,
      137
    ]
  },
  {
    "id": "slide-54",
    "partNumber": 3,
    "partTitle": "Phần 3: Đánh giá, Xác minh & Phát hiện ảo giác",
    "slideNumber": 54,
    "title": "Bám nguồn và kiểm tra trích dẫn",
    "subtitle": "Grounding giảm nguy cơ bịa nhưng nguồn được dẫn vẫn cần kiểm tra có tồn tại và hỗ trợ đúng mệnh đề.",
    "keyPoints": [
      "Mở đúng tài liệu, kiểm tra đoạn/trang.",
      "Đối chiếu tác giả, ngày, số liệu và phạm vi.",
      "Phân biệt câu có chứng cứ với suy luận thêm."
    ],
    "frameworkBox": {
      "title": "Tình huống áp dụng (Ví dụ áp dụng)",
      "items": [
        {
          "label": "Tình huống",
          "desc": "AI dẫn báo cáo trang 12: mở trang 12, kiểm tra con số cùng đơn vị và năm."
        },
        {
          "label": "Ghi nhớ cốt lõi",
          "desc": "Grounding giảm nguy cơ bịa nhưng nguồn được dẫn vẫn cần kiểm tra có tồn tại và hỗ trợ đúng mệnh đề."
        }
      ]
    },
    "examTrap": "Một URL hợp lệ không đồng nghĩa nội dung trang chứng minh kết luận.",
    "lectureScript": "Chào các bạn. Ở slide số 54, chúng ta cùng tìm hiểu: Bám nguồn và kiểm tra trích dẫn. Grounding giảm nguy cơ bịa nhưng nguồn được dẫn vẫn cần kiểm tra có tồn tại và hỗ trợ đúng mệnh đề. Điểm mấu chốt: Mở đúng tài liệu, kiểm tra đoạn/trang. Ví dụ: AI dẫn báo cáo trang 12: mở trang 12, kiểm tra con số cùng đơn vị và năm. Lưu ý bẫy đề thi: Một URL hợp lệ không đồng nghĩa nội dung trang chứng minh kết luận.",
    "audioSrc": "/audio/lecture/slide-54.mp3",
    "durationSeconds": 22.3,
    "relatedQuestions": [
      16,
      35,
      70,
      143,
      159
    ]
  },
  {
    "id": "slide-55",
    "partNumber": 3,
    "partTitle": "Phần 3: Đánh giá, Xác minh & Phát hiện ảo giác",
    "slideNumber": 55,
    "title": "Giảm tính ngẫu nhiên và nêu điều chưa biết",
    "subtitle": "Điều chỉnh tham số và hướng dẫn có thể làm phản hồi ổn định hơn; ổn định không đồng nghĩa đúng.",
    "keyPoints": [
      "Nếu công cụ hỗ trợ, nhiệt độ thấp thường giảm đa dạng lấy mẫu.",
      "Hỏi rõ giả định, dữ kiện thiếu và nguồn.",
      "Kiểm tra phép tính bằng dữ liệu/công cụ thích hợp."
    ],
    "frameworkBox": {
      "title": "Tình huống áp dụng (Ví dụ áp dụng)",
      "items": [
        {
          "label": "Tình huống",
          "desc": "Với bảng doanh số, yêu cầu tính tổng từng cột rồi đối chiếu bảng tính."
        },
        {
          "label": "Ghi nhớ cốt lõi",
          "desc": "Điều chỉnh tham số và hướng dẫn có thể làm phản hồi ổn định hơn; ổn định không đồng nghĩa đúng."
        }
      ]
    },
    "examTrap": "Nhiệt độ thấp không loại được ảo giác hoặc lỗi số học.",
    "lectureScript": "Chào các bạn. Ở slide số 55, chúng ta cùng tìm hiểu: Giảm tính ngẫu nhiên và nêu điều chưa biết. Điều chỉnh tham số và hướng dẫn có thể làm phản hồi ổn định hơn; ổn định không đồng nghĩa đúng. Điểm mấu chốt: Nếu công cụ hỗ trợ, nhiệt độ thấp thường giảm đa dạng lấy mẫu. Ví dụ: Với bảng doanh số, yêu cầu tính tổng từng cột rồi đối chiếu bảng tính. Lưu ý bẫy đề thi: Nhiệt độ thấp không loại được ảo giác hoặc lỗi số học.",
    "audioSrc": "/audio/lecture/slide-55.mp3",
    "durationSeconds": 21.5,
    "relatedQuestions": [
      1,
      2,
      10,
      16,
      20,
      23,
      26,
      35
    ]
  },
  {
    "id": "slide-56",
    "partNumber": 3,
    "partTitle": "Phần 3: Đánh giá, Xác minh & Phát hiện ảo giác",
    "slideNumber": 56,
    "title": "Phản hồi có Mục tiêu (Targeted Feedback)",
    "subtitle": "Phản hồi rõ ràng + Chỉ rõ tiêu chí cần sửa = Tinh chỉnh thành công.",
    "keyPoints": [
      "Chỉ rõ điểm chưa đạt: Nêu chính xác tiêu chí nào cần sửa (độ dài, giọng điệu, mức độ chuyên môn, định dạng hiển thị).",
      "Tránh phản hồi mơ hồ: Những câu như 'Làm lại đi', 'Chưa hay', 'Viết tốt hơn đi' không cung cấp hướng dẫn định lượng cho mô hình.",
      "Cung cấp hướng điều chỉnh: 'Hãy rút ngắn đoạn 2 xuống dưới 50 từ và thay thế các từ ngữ kỹ thuật bằng ví dụ thực tế'."
    ],
    "frameworkBox": {
      "title": "Thuật ngữ & Định nghĩa cốt lõi (Tinh chỉnh lặp (1))",
      "items": [
        {
          "label": "Tinh chỉnh lặp (Iterative Refinement)",
          "desc": "Quy trình cải thiện từng bước kết quả của AI thông qua các lượt phản hồi và điều chỉnh có chủ đích."
        },
        {
          "label": "Phản hồi có mục tiêu (Targeted Feedback)",
          "desc": "Lời nhận xét chỉ rõ tiêu chí và vị trí cụ thể cần điều chỉnh."
        }
      ]
    },
    "examTrap": "Xóa bỏ toàn bộ cuộc hội thoại khi AI mới chỉ làm sai một chi tiết nhỏ có thể sửa được bằng một phản hồi ngắn.",
    "lectureScript": "Chào các bạn. Ở slide số 56, chúng ta cùng tìm hiểu: Phản hồi có Mục tiêu (Targeted Feedback). Quy trình Tinh chỉnh lặp (Iterative Refinement) nâng cao chất lượng kết quả qua từng lượt trao đổi bằng phản hồi cụ thể, rõ ràng. Điểm mấu chốt: Chỉ rõ điểm chưa đạt: Nêu chính xác tiêu chí nào cần sửa (độ dài, giọng điệu, mức độ chuyên môn, định dạng hiển thị). Ví dụ: Thay vì gõ 'Viết lại đi', hãy phản hồi: 'Bài viết đầy đủ thông tin nhưng giọng văn quá trang trọng. Hãy viết lại phần mở đầu với giọng văn thân thiện, hào hứng hơn.'. Lưu ý bẫy đề thi: Xóa bỏ toàn bộ cuộc hội thoại khi AI mới chỉ làm sai một chi tiết nhỏ có thể sửa được bằng một phản hồi ngắn.",
    "audioSrc": "/audio/lecture/slide-56.mp3",
    "durationSeconds": 33.7,
    "relatedQuestions": [
      15,
      20,
      111,
      118,
      122,
      129
    ]
  },
  {
    "id": "slide-57",
    "partNumber": 3,
    "partTitle": "Phần 3: Đánh giá, Xác minh & Phát hiện ảo giác",
    "slideNumber": 57,
    "title": "Bảo toàn Phần tốt & Thêm Tiêu chí Mới",
    "subtitle": "Chỉ thị giữ nguyên phần đã tốt để kết quả tinh chỉnh luôn ổn định và hoàn thiện.",
    "keyPoints": [
      "Bảo toàn kết quả đạt chuẩn: Nêu rõ: 'Hãy giữ nguyên cấu trúc 3 phần và các số liệu doanh thu trong bảng ở câu trả lời trước'.",
      "Bổ sung tiêu chí hoặc ví dụ mới: 'Bổ sung thêm một cột Thời hạn hoàn thành vào bảng trên và thêm 2 hashtag ở cuối bài'.",
      "Kiểm soát sự ổn định: Ngăn chặn hiện tượng AI sửa được lỗi này nhưng lại vô tình làm hỏng các phần khác vốn đã làm rất tốt."
    ],
    "frameworkBox": {
      "title": "Thuật ngữ & Định nghĩa cốt lõi (Tinh chỉnh lặp (2))",
      "items": [
        {
          "label": "Bảo toàn ngữ cảnh (Context Preservation)",
          "desc": "Kỹ thuật yêu cầu mô hình duy trì các phần nội dung đã được người dùng phê duyệt trong các lượt chỉnh sửa tiếp theo."
        }
      ]
    },
    "examTrap": "Không nhắc AI giữ lại phần tốt khiến mô hình tự ý viết lại toàn bộ theo một cấu trúc hoàn toàn mới.",
    "lectureScript": "Chào các bạn. Ở slide số 57, chúng ta cùng tìm hiểu: Bảo toàn Phần tốt & Thêm Tiêu chí Mới. Trong quá trình tinh chỉnh, luôn chỉ thị rõ ràng phần nào của kết quả trước đã đạt yêu cầu cần được giữ nguyên không đổi. Điểm mấu chốt: Bảo toàn kết quả đạt chuẩn: Nêu rõ: 'Hãy giữ nguyên cấu trúc 3 phần và các số liệu doanh thu trong bảng ở câu trả lời trước'. Ví dụ: 'Bảng phân công công việc rất tốt. Hãy giữ nguyên danh sách nhiệm vụ và người phụ trách; chỉ thêm một cột Mức độ ưu tiên (Cao/Trung bình/Thấp) vào bên phải.'. Lưu ý bẫy đề thi: Không nhắc AI giữ lại phần tốt khiến mô hình tự ý viết lại toàn bộ theo một cấu trúc hoàn toàn mới.",
    "audioSrc": "/audio/lecture/slide-57.mp3",
    "durationSeconds": 32.5,
    "relatedQuestions": [
      1,
      15,
      28,
      55,
      65,
      80,
      122,
      133
    ]
  },
  {
    "id": "slide-58",
    "partNumber": 3,
    "partTitle": "Phần 3: Đánh giá, Xác minh & Phát hiện ảo giác",
    "slideNumber": 58,
    "title": "Knowledge Cutoff & Dữ liệu biến động",
    "subtitle": "Với thông tin thời sự và dữ liệu biến động nhanh: Luôn bật tính năng tìm kiếm thời gian thực.",
    "keyPoints": [
      "Điểm chốt dữ liệu (Knowledge Cutoff): Mốc thời gian hoàn tất huấn luyện mô hình; AI độc lập hoàn toàn không biết các sự kiện diễn ra sau ngày này.",
      "Dữ liệu biến động nhanh (Rapidly Changing Data): Giá cổ phiếu, tỷ giá ngoại tệ, thời tiết hôm nay, kết quả bóng đá trực tiếp, tin tức nóng.",
      "Giải pháp thời gian thực: Bắt buộc sử dụng các công cụ AI có tính năng tìm kiếm web (Browse with Bing/Google) hoặc dán trực tiếp tin tức mới vào prompt."
    ],
    "frameworkBox": {
      "title": "Thuật ngữ & Định nghĩa cốt lõi (Thời hạn dữ liệu)",
      "items": [
        {
          "label": "Knowledge Cutoff Date",
          "desc": "Mốc thời gian giới hạn dữ liệu huấn luyện của mô hình ngôn ngữ lớn."
        },
        {
          "label": "Dữ liệu biến động nhanh (Rapidly Changing Data)",
          "desc": "Thông tin thay đổi liên tục theo thời gian thực như giá chứng khoán, tin thời sự."
        }
      ]
    },
    "examTrap": "Dùng một mô hình AI không kết nối Internet để tra cứu giá vàng hoặc tỷ giá USD ngày hôm nay.",
    "lectureScript": "Chào các bạn. Ở slide số 58, chúng ta cùng tìm hiểu: Knowledge Cutoff & Dữ liệu biến động. Hiểu rõ mốc chốt dữ liệu (Knowledge Cutoff Date) và sự cần thiết của tính năng tìm kiếm web thời gian thực đối với các sự kiện hiện tại. Điểm mấu chốt: Điểm chốt dữ liệu (Knowledge Cutoff): Mốc thời gian hoàn tất huấn luyện mô hình; AI độc lập hoàn toàn không biết các sự kiện diễn ra sau ngày này. Ví dụ: Một mô hình offline có cutoff tháng 1/2025 sẽ không thể biết ai vô địch bóng đá tháng 8/2026 nếu không được kích hoạt tính năng tìm kiếm web. Lưu ý bẫy đề thi: Dùng một mô hình AI không kết nối Internet để tra cứu giá vàng hoặc tỷ giá USD ngày hôm nay.",
    "audioSrc": "/audio/lecture/slide-58.mp3",
    "durationSeconds": 37.0,
    "relatedQuestions": [
      7,
      20,
      23,
      26,
      86,
      95,
      111,
      137
    ]
  },
  {
    "id": "slide-59",
    "partNumber": 3,
    "partTitle": "Phần 3: Đánh giá, Xác minh & Phát hiện ảo giác",
    "slideNumber": 59,
    "title": "Xử lý Tin tức Nóng & Tìm kiếm Thời gian thực",
    "subtitle": "Bật tìm kiếm web và luôn mở liên kết nguồn để kiểm tra tính cập nhật của tin tức.",
    "keyPoints": [
      "Kích hoạt tìm kiếm web: Đảm bảo tính năng tìm kiếm (Search / Web Browsing) đã được bật trong giao diện chatbot.",
      "Kiểm tra đường link trích dẫn: Bấm trực tiếp vào các liên kết nguồn do AI đính kèm để xem bài báo gốc được đăng vào ngày nào.",
      "Thẩm định cơ quan báo chí: Đảm bảo thông tin đến từ các hãng thông tấn chính thống (Thông tấn xã, Reuters, AP) thay vì các trang tin đồn."
    ],
    "frameworkBox": {
      "title": "Thuật ngữ & Định nghĩa cốt lõi (Thông tin thời sự)",
      "items": [
        {
          "label": "Tìm kiếm thời gian thực (Real-time Search)",
          "desc": "Tính năng cho phép AI truy vấn Internet trực tiếp để lấy dữ liệu mới nhất tại thời điểm hỏi."
        }
      ]
    },
    "examTrap": "Tin vào bản tóm tắt tin tức thời sự của AI mà không bấm mở đường link nguồn để kiểm tra ngày tháng.",
    "lectureScript": "Chào các bạn. Ở slide số 59, chúng ta cùng tìm hiểu: Xử lý Tin tức Nóng & Tìm kiếm Thời gian thực. Kỹ thuật tra cứu và thẩm định tin tức thời sự bằng AI có kết nối web kết hợp kiểm tra nguồn gốc bài báo. Điểm mấu chốt: Kích hoạt tìm kiếm web: Đảm bảo tính năng tìm kiếm (Search / Web Browsing) đã được bật trong giao diện chatbot. Ví dụ: Hỏi về hội nghị vừa bế mạc tuần trước: AI trả lời kèm 3 đường link báo chính thống; bạn mở liên kết kiểm tra ngày xuất bản để xác nhận số liệu. Lưu ý bẫy đề thi: Tin vào bản tóm tắt tin tức thời sự của AI mà không bấm mở đường link nguồn để kiểm tra ngày tháng.",
    "audioSrc": "/audio/lecture/slide-59.mp3",
    "durationSeconds": 31.3,
    "relatedQuestions": [
      4,
      16,
      70
    ]
  },
  {
    "id": "slide-60",
    "partNumber": 3,
    "partTitle": "Phần 3: Đánh giá, Xác minh & Phát hiện ảo giác",
    "slideNumber": 60,
    "title": "Phân tích Biểu đồ: Đọc trục & Đường xu hướng",
    "subtitle": "Kiểm tra đúng nhãn trục tọa độ và đơn vị tính trước khi tin vào phân tích biểu đồ của AI.",
    "keyPoints": [
      "Kiểm tra đơn vị tính và trục tọa độ: Xác nhận AI đọc đúng đơn vị (triệu USD hay nghìn USD, năm hay tháng) trên trục tung và trục hoành.",
      "Phân tích tương quan: Đánh giá xem AI có nhận định đúng mối quan hệ giữa 2 biến số (tương quan thuận hay tương quan nghịch).",
      "Ước tính từ Trendline: Sử dụng đường xu hướng trung bình để dự báo giá trị tiếp theo một cách khoa học.",
      "Histogram (Biểu đồ tần suất): Thể hiện phân phối/tần suất của một biến số theo từng khoảng giá trị — khác với biểu đồ phân tán (thể hiện mối quan hệ giữa hai biến)."
    ],
    "frameworkBox": {
      "title": "Thuật ngữ & Định nghĩa cốt lõi (Biểu đồ (Trục & Xu hướng))",
      "items": [
        {
          "label": "Trục tọa độ (Coordinate Axes)",
          "desc": "Trục X (hoành độ) và trục Y (tung độ) biểu diễn các chiều biến số và đơn vị đo lường trên biểu đồ."
        },
        {
          "label": "Ngoại suy (Extrapolation)",
          "desc": "Phương pháp ước tính giá trị tương lai nằm ngoài phạm vi các điểm dữ liệu đã quan sát dựa trên đường xu hướng."
        }
      ]
    },
    "examTrap": "Nạp hình ảnh biểu đồ bị mất nhãn trục tọa độ khiến AI suy đoán sai hoàn toàn đơn vị tính.",
    "lectureScript": "Chào các bạn. Ở slide số 60, chúng ta cùng tìm hiểu: Phân tích Biểu đồ: Đọc trục & Đường xu hướng. Khi yêu cầu AI phân tích biểu đồ, cần kiểm tra kỹ đơn vị tính, trục tọa độ X/Y và cách mô hình ngoại suy từ đường xu hướng (Trendline). Điểm mấu chốt: Kiểm tra đơn vị tính và trục tọa độ: Xác nhận AI đọc đúng đơn vị (triệu USD hay nghìn USD, năm hay tháng) trên trục tung và trục hoành. Ví dụ: Nạp biểu đồ cột so sánh: Kiểm tra xem AI có đọc đúng tỷ lệ phần trăm trên trục Y và phân loại đúng các nhóm thực phẩm trên trục X hay không. Lưu ý bẫy đề thi: Nạp hình ảnh biểu đồ bị mất nhãn trục tọa độ khiến AI suy đoán sai hoàn toàn đơn vị tính.",
    "audioSrc": "/audio/lecture/slide-60.mp3",
    "durationSeconds": 36.6,
    "relatedQuestions": [
      4,
      15,
      20,
      25,
      26,
      77,
      80,
      111
    ]
  },
  {
    "id": "slide-61",
    "partNumber": 3,
    "partTitle": "Phần 3: Đánh giá, Xác minh & Phát hiện ảo giác",
    "slideNumber": 61,
    "title": "Nhận diện Điểm ngoại lai (Outliers)",
    "subtitle": "Nhận diện điểm ngoại lai (Outlier) để tránh làm sai lệch xu hướng phân tích tổng thể.",
    "keyPoints": [
      "Khái niệm Điểm ngoại lai: Điểm dữ liệu có giá trị bất thường, tách rời khỏi đám đông dữ liệu hoặc nằm rất xa đường xu hướng.",
      "Nguyên nhân của Outliers: Do sai sót trong khâu thu thập ghi chép dữ liệu, hoặc do một biến cố đặc biệt bất thường xảy ra trong kỳ đó.",
      "Yêu cầu xử lý: Kiểm tra xem AI có nhận diện được điểm ngoại lai và giải thích lý do không nên để điểm dị biệt làm méo mó xu hướng chung hay không."
    ],
    "frameworkBox": {
      "title": "Thuật ngữ & Định nghĩa cốt lõi (Biểu đồ (Điểm ngoại lai))",
      "items": [
        {
          "label": "Điểm ngoại lai (Outlier)",
          "desc": "Điểm dữ liệu có giá trị khác biệt bất thường, lệch xa khỏi phần còn lại của tập dữ liệu."
        }
      ]
    },
    "examTrap": "Để một điểm ngoại lai cá biệt làm sai lệch toàn bộ đường xu hướng dự báo tương lai dài hạn.",
    "lectureScript": "Chào các bạn. Ở slide số 61, chúng ta cùng tìm hiểu: Nhận diện Điểm ngoại lai (Outliers). Kiểm tra khả năng của AI trong việc phát hiện các điểm dữ liệu dị biệt (Outliers) lệch xa khỏi xu hướng chung trên biểu đồ phân tán. Điểm mấu chốt: Khái niệm Điểm ngoại lai: Điểm dữ liệu có giá trị bất thường, tách rời khỏi đám đông dữ liệu hoặc nằm rất xa đường xu hướng. Ví dụ: Trên biểu đồ doanh thu 12 tháng đều ở mức 100 triệu, riêng tháng 7 vọt lên 900 triệu do sự kiện đột xuất: AI nhận diện tháng 7 là điểm ngoại lai (Outlier). Lưu ý bẫy đề thi: Để một điểm ngoại lai cá biệt làm sai lệch toàn bộ đường xu hướng dự báo tương lai dài hạn.",
    "audioSrc": "/audio/lecture/slide-61.mp3",
    "durationSeconds": 33.5,
    "relatedQuestions": [
      20,
      23,
      25,
      26,
      137
    ]
  },
  {
    "id": "slide-62",
    "partNumber": 3,
    "partTitle": "Phần 3: Đánh giá, Xác minh & Phát hiện ảo giác",
    "slideNumber": 62,
    "title": "Dữ liệu, tiền xử lý và mức thiên lệch",
    "subtitle": "Khác nguồn dữ liệu, cách xử lý và mức đại diện có thể làm các mô hình cho kết quả khác nhau.",
    "keyPoints": [
      "Kiểm tra nhóm nào bị thiếu dữ liệu.",
      "Dữ liệu không đầy đủ có thể làm kết quả thiếu cân bằng.",
      "Tokenization là một phần biểu diễn dữ liệu, không phải toàn bộ nguyên nhân bias.",
      "Đánh giá theo nhóm/ngôn ngữ thay vì chỉ điểm trung bình."
    ],
    "frameworkBox": {
      "title": "Tình huống áp dụng (Ví dụ áp dụng)",
      "items": [
        {
          "label": "Tình huống",
          "desc": "Bài tập yêu cầu quan sát thiên lệch giới tính, tuổi và vùng địa lý trong mô tả nghề nghiệp."
        },
        {
          "label": "Ghi nhớ cốt lõi",
          "desc": "Khác nguồn dữ liệu, cách xử lý và mức đại diện có thể làm các mô hình cho kết quả khác nhau."
        }
      ]
    },
    "examTrap": "Không loại địa lý hay dữ liệu thiếu khỏi các nguồn bias chỉ vì không nằm trong khóa chọn hai.",
    "lectureScript": "Chào các bạn. Ở slide số 62, chúng ta cùng tìm hiểu: Dữ liệu, tiền xử lý và mức thiên lệch. Khác nguồn dữ liệu, cách xử lý và mức đại diện có thể làm các mô hình cho kết quả khác nhau. Điểm mấu chốt: Kiểm tra nhóm nào bị thiếu dữ liệu. Ví dụ: Bài tập yêu cầu quan sát thiên lệch giới tính, tuổi và vùng địa lý trong mô tả nghề nghiệp. Lưu ý bẫy đề thi: Không loại địa lý hay dữ liệu thiếu khỏi các nguồn bias chỉ vì không nằm trong khóa chọn hai.",
    "audioSrc": "/audio/lecture/slide-62.mp3",
    "durationSeconds": 23.2,
    "relatedQuestions": [
      26,
      28,
      35,
      41,
      109,
      158
    ]
  },
  {
    "id": "slide-63",
    "partNumber": 3,
    "partTitle": "Phần 3: Đánh giá, Xác minh & Phát hiện ảo giác",
    "slideNumber": 63,
    "title": "Tinh chỉnh và guardrails",
    "subtitle": "Fine-tuning và guardrails có thể làm khác hành vi mô hình; guardrails hỗ trợ an toàn nhưng không bảo đảm trung lập tuyệt đối.",
    "keyPoints": [
      "Cách tinh chỉnh thay đổi phản hồi theo dữ liệu/mục tiêu.",
      "Guardrails có thể lọc hoặc định hướng câu trả lời.",
      "Đánh giá cả hiệu quả bảo vệ lẫn ảnh hưởng tới các nhóm/ngữ cảnh.",
      "Người dùng vẫn phải kiểm tra đầu ra."
    ],
    "frameworkBox": {
      "title": "Tình huống áp dụng (Ví dụ áp dụng)",
      "items": [
        {
          "label": "Tình huống",
          "desc": "Hai công cụ có thể từ chối/diễn đạt khác nhau vì chính sách thiết kế khác nhau."
        },
        {
          "label": "Ghi nhớ cốt lõi",
          "desc": "Fine-tuning và guardrails có thể làm khác hành vi mô hình; guardrails hỗ trợ an toàn nhưng không bảo đảm trung lập tuyệt đối."
        }
      ]
    },
    "examTrap": "Không suy ra mọi guardrail đều gây hại hoặc đều loại sạch bias.",
    "lectureScript": "Chào các bạn. Ở slide số 63, chúng ta cùng tìm hiểu: Tinh chỉnh và guardrails. Fine-tuning và guardrails có thể làm khác hành vi mô hình; guardrails hỗ trợ an toàn nhưng không bảo đảm trung lập tuyệt đối. Điểm mấu chốt: Cách tinh chỉnh thay đổi phản hồi theo dữ liệu/mục tiêu. Ví dụ: Hai công cụ có thể từ chối/diễn đạt khác nhau vì chính sách thiết kế khác nhau. Lưu ý bẫy đề thi: Không suy ra mọi guardrail đều gây hại hoặc đều loại sạch bias.",
    "audioSrc": "/audio/lecture/slide-63.mp3",
    "durationSeconds": 23.5,
    "relatedQuestions": [
      2,
      7,
      10,
      15,
      26,
      158
    ]
  },
  {
    "id": "slide-64",
    "partNumber": 3,
    "partTitle": "Phần 3: Đánh giá, Xác minh & Phát hiện ảo giác",
    "slideNumber": 64,
    "title": "Checklist trước khi dùng nội dung AI",
    "subtitle": "Kiểm tra độ chính xác, quyền riêng tư, thiên lệch, quyền sử dụng và khả năng tiếp cận trước khi chia sẻ.",
    "keyPoints": [
      "Đối chiếu dữ kiện với nguồn; kiểm tra ngày/đơn vị.",
      "Ẩn danh và giảm dữ liệu cá nhân, chú ý khả năng tái nhận diện.",
      "Kiểm tra hình, ngôn ngữ, phụ đề, đối tượng sử dụng.",
      "Ghi nhận AI đã hỗ trợ phần nào và người phê duyệt."
    ],
    "frameworkBox": {
      "title": "Tình huống áp dụng (Ví dụ áp dụng)",
      "items": [
        {
          "label": "Tình huống",
          "desc": "Một slide lớp học cần kiểm tra kiến thức, ảnh đúng, chữ đọc được, nguồn và phù hợp độ tuổi."
        },
        {
          "label": "Ghi nhớ cốt lõi",
          "desc": "Kiểm tra độ chính xác, quyền riêng tư, thiên lệch, quyền sử dụng và khả năng tiếp cận trước khi chia sẻ."
        }
      ]
    },
    "examTrap": "Không coi bản nháp đẹp là sản phẩm đã được duyệt.",
    "lectureScript": "Chào các bạn. Ở slide số 64, chúng ta cùng tìm hiểu: Checklist trước khi dùng nội dung AI. Kiểm tra độ chính xác, quyền riêng tư, thiên lệch, quyền sử dụng và khả năng tiếp cận trước khi chia sẻ. Điểm mấu chốt: Đối chiếu dữ kiện với nguồn; kiểm tra ngày/đơn vị. Ví dụ: Một slide lớp học cần kiểm tra kiến thức, ảnh đúng, chữ đọc được, nguồn và phù hợp độ tuổi. Lưu ý bẫy đề thi: Không coi bản nháp đẹp là sản phẩm đã được duyệt.",
    "audioSrc": "/audio/lecture/slide-64.mp3",
    "durationSeconds": 22.0,
    "relatedQuestions": [
      15,
      20,
      67,
      80,
      88,
      95,
      122,
      131
    ]
  },
  {
    "id": "slide-65",
    "partNumber": 4,
    "partTitle": "Phần 4: Đạo đức, Pháp lý & Trách nhiệm xã hội",
    "slideNumber": 65,
    "title": "Thiên lệch là gì?",
    "subtitle": "Bias là thiên lệch trong dữ liệu, cách mô tả hoặc kết quả có thể dẫn tới thiếu công bằng.",
    "keyPoints": [
      "Kiểm tra nhóm được đại diện và bị bỏ sót.",
      "Không xem output mặc định là trung lập.",
      "So sánh cách mô tả giữa các nhóm."
    ],
    "frameworkBox": {
      "title": "Tình huống áp dụng (Ví dụ áp dụng)",
      "items": [
        {
          "label": "Tình huống",
          "desc": "CEO mặc định là nam có thể phản ánh khuôn mẫu."
        },
        {
          "label": "Ghi nhớ cốt lõi",
          "desc": "Bias là thiên lệch trong dữ liệu, cách mô tả hoặc kết quả có thể dẫn tới thiếu công bằng."
        }
      ]
    },
    "examTrap": "Có trường nhân khẩu học không tự động chứng minh mô hình bị thiên lệch.",
    "lectureScript": "Chào các bạn. Ở slide số 65, chúng ta cùng tìm hiểu: Thiên lệch là gì?. Bias là thiên lệch trong dữ liệu, cách mô tả hoặc kết quả có thể dẫn tới thiếu công bằng. Điểm mấu chốt: Kiểm tra nhóm được đại diện và bị bỏ sót. Ví dụ: CEO mặc định là nam có thể phản ánh khuôn mẫu. Lưu ý bẫy đề thi: Có trường nhân khẩu học không tự động chứng minh mô hình bị thiên lệch.",
    "audioSrc": "/audio/lecture/slide-65.mp3",
    "durationSeconds": 19.1,
    "relatedQuestions": [
      44,
      46,
      66,
      116
    ]
  },
  {
    "id": "slide-66",
    "partNumber": 4,
    "partTitle": "Phần 4: Đạo đức, Pháp lý & Trách nhiệm xã hội",
    "slideNumber": 66,
    "title": "Dữ liệu thiếu và tính đại diện",
    "subtitle": "Dữ liệu không đầy đủ hoặc không đại diện có thể làm output thiên lệch.",
    "keyPoints": [
      "Xem dữ liệu thiếu ở nhóm nào.",
      "Cân nhắc tuổi, quốc tịch, vùng địa lý, ngôn ngữ và khả năng tiếp cận công nghệ.",
      "Không chỉ đánh giá bằng kết quả tổng thể."
    ],
    "frameworkBox": {
      "title": "Tình huống áp dụng (Ví dụ áp dụng)",
      "items": [
        {
          "label": "Tình huống",
          "desc": "Chỉ thu người dùng thành thị có thể bỏ sót nhu cầu nông thôn."
        },
        {
          "label": "Ghi nhớ cốt lõi",
          "desc": "Dữ liệu không đầy đủ hoặc không đại diện có thể làm output thiên lệch."
        }
      ]
    },
    "examTrap": "Không học rằng chỉ tuổi và quốc tịch mới có thể gây bias.",
    "lectureScript": "Chào các bạn. Ở slide số 66, chúng ta cùng tìm hiểu: Dữ liệu thiếu và tính đại diện. Dữ liệu không đầy đủ hoặc không đại diện có thể làm output thiên lệch. Điểm mấu chốt: Xem dữ liệu thiếu ở nhóm nào. Ví dụ: Chỉ thu người dùng thành thị có thể bỏ sót nhu cầu nông thôn. Lưu ý bẫy đề thi: Không học rằng chỉ tuổi và quốc tịch mới có thể gây bias.",
    "audioSrc": "/audio/lecture/slide-66.mp3",
    "durationSeconds": 18.8,
    "relatedQuestions": [
      24,
      31,
      66,
      116,
      119,
      124,
      150,
      156
    ]
  },
  {
    "id": "slide-67",
    "partNumber": 4,
    "partTitle": "Phần 4: Đạo đức, Pháp lý & Trách nhiệm xã hội",
    "slideNumber": 67,
    "title": "Thiên lệch lịch sử",
    "subtitle": "Dữ liệu phản ánh định kiến xã hội có thể làm mô hình tái hiện những khuôn mẫu đó.",
    "keyPoints": [
      "Quan sát ngôn ngữ gắn nghề với giới.",
      "Đánh giá bối cảnh lịch sử và mục đích sử dụng.",
      "Bổ sung ví dụ đa dạng và kiểm tra kết quả."
    ],
    "frameworkBox": {
      "title": "Tình huống áp dụng (Ví dụ áp dụng)",
      "items": [
        {
          "label": "Tình huống",
          "desc": "Dữ liệu nghề nghiệp thiếu nữ kỹ sư có thể tạo mô tả thiếu cân bằng."
        },
        {
          "label": "Ghi nhớ cốt lõi",
          "desc": "Dữ liệu phản ánh định kiến xã hội có thể làm mô hình tái hiện những khuôn mẫu đó."
        }
      ]
    },
    "examTrap": "Dữ liệu quá khứ không mặc nhiên là chuẩn công bằng cho hiện tại.",
    "lectureScript": "Chào các bạn. Ở slide số 67, chúng ta cùng tìm hiểu: Thiên lệch lịch sử. Dữ liệu phản ánh định kiến xã hội có thể làm mô hình tái hiện những khuôn mẫu đó. Điểm mấu chốt: Quan sát ngôn ngữ gắn nghề với giới. Ví dụ: Dữ liệu nghề nghiệp thiếu nữ kỹ sư có thể tạo mô tả thiếu cân bằng. Lưu ý bẫy đề thi: Dữ liệu quá khứ không mặc nhiên là chuẩn công bằng cho hiện tại.",
    "audioSrc": "/audio/lecture/slide-67.mp3",
    "durationSeconds": 18.8,
    "relatedQuestions": [
      44,
      46,
      66,
      116
    ]
  },
  {
    "id": "slide-68",
    "partNumber": 4,
    "partTitle": "Phần 4: Đạo đức, Pháp lý & Trách nhiệm xã hội",
    "slideNumber": 68,
    "title": "Bias qua các giai đoạn",
    "subtitle": "Thiên lệch có thể xuất hiện khi thu thập, gán nhãn/xử lý, học và triển khai.",
    "keyPoints": [
      "Thu thập chỉ ban ngày bỏ sót điều kiện ban đêm.",
      "Nhãn và trọng số có thể ảnh hưởng khác nhau.",
      "Thử nghiệm một địa phương không đại diện mọi nơi."
    ],
    "frameworkBox": {
      "title": "Tình huống áp dụng (Ví dụ áp dụng)",
      "items": [
        {
          "label": "Tình huống",
          "desc": "Xe chỉ thử ở một thành phố có thể gặp tình huống chưa được đánh giá khi triển khai rộng."
        },
        {
          "label": "Ghi nhớ cốt lõi",
          "desc": "Thiên lệch có thể xuất hiện khi thu thập, gán nhãn/xử lý, học và triển khai."
        }
      ]
    },
    "examTrap": "Không đồng nhất gán nhãn, gán trọng số và tokenization.",
    "lectureScript": "Chào các bạn. Ở slide số 68, chúng ta cùng tìm hiểu: Bias qua các giai đoạn. Thiên lệch có thể xuất hiện khi thu thập, gán nhãn/xử lý, học và triển khai. Điểm mấu chốt: Thu thập chỉ ban ngày bỏ sót điều kiện ban đêm. Ví dụ: Xe chỉ thử ở một thành phố có thể gặp tình huống chưa được đánh giá khi triển khai rộng. Lưu ý bẫy đề thi: Không đồng nhất gán nhãn, gán trọng số và tokenization.",
    "audioSrc": "/audio/lecture/slide-68.mp3",
    "durationSeconds": 20.8,
    "relatedQuestions": [
      48,
      49,
      50,
      52,
      66
    ]
  },
  {
    "id": "slide-69",
    "partNumber": 4,
    "partTitle": "Phần 4: Đạo đức, Pháp lý & Trách nhiệm xã hội",
    "slideNumber": 69,
    "title": "Prompt có thể dẫn dắt đầu ra",
    "subtitle": "Yêu cầu một chiều hoặc giả định định kiến có thể đưa bias vào kết quả.",
    "keyPoints": [
      "Không chỉ hỏi lợi ích khi cần đánh giá khách quan.",
      "Tránh mặc định nhóm người có một đặc tính.",
      "Nêu nhiều góc nhìn và bằng chứng."
    ],
    "frameworkBox": {
      "title": "Tình huống áp dụng (Ví dụ áp dụng)",
      "items": [
        {
          "label": "Tình huống",
          "desc": "Hỏi cả ưu/nhược điểm MySQL theo nhu cầu cụ thể thay vì chỉ khen lợi ích."
        },
        {
          "label": "Ghi nhớ cốt lõi",
          "desc": "Yêu cầu một chiều hoặc giả định định kiến có thể đưa bias vào kết quả."
        }
      ]
    },
    "examTrap": "Hỏi về một công nghệ cụ thể không tự nó là vi phạm; xem mục tiêu và cách dẫn dắt.",
    "lectureScript": "Chào các bạn. Ở slide số 69, chúng ta cùng tìm hiểu: Prompt có thể dẫn dắt đầu ra. Yêu cầu một chiều hoặc giả định định kiến có thể đưa bias vào kết quả. Điểm mấu chốt: Không chỉ hỏi lợi ích khi cần đánh giá khách quan. Ví dụ: Hỏi cả ưu/nhược điểm MySQL theo nhu cầu cụ thể thay vì chỉ khen lợi ích. Lưu ý bẫy đề thi: Hỏi về một công nghệ cụ thể không tự nó là vi phạm; xem mục tiêu và cách dẫn dắt.",
    "audioSrc": "/audio/lecture/slide-69.mp3",
    "durationSeconds": 21.8,
    "relatedQuestions": [
      52,
      66,
      84,
      103
    ]
  },
  {
    "id": "slide-70",
    "partNumber": 4,
    "partTitle": "Phần 4: Đạo đức, Pháp lý & Trách nhiệm xã hội",
    "slideNumber": 70,
    "title": "Viết prompt cân bằng",
    "subtitle": "Prompt trung lập giúp giảm định hướng một chiều, nhưng không thay thế dữ liệu và kiểm chứng.",
    "keyPoints": [
      "Nêu tiêu chí so sánh.",
      "Yêu cầu nguồn và giới hạn kết luận.",
      "Kiểm tra nhóm/ý kiến bị bỏ sót."
    ],
    "frameworkBox": {
      "title": "Tình huống áp dụng (Ví dụ áp dụng)",
      "items": [
        {
          "label": "Tình huống",
          "desc": "So sánh hai lựa chọn theo chi phí, quyền riêng tư và tính phù hợp nhiệm vụ."
        },
        {
          "label": "Ghi nhớ cốt lõi",
          "desc": "Prompt trung lập giúp giảm định hướng một chiều, nhưng không thay thế dữ liệu và kiểm chứng."
        }
      ]
    },
    "examTrap": "Không yêu cầu cân bằng giả tạo giữa dữ kiện đúng và thông tin đã bị bác bỏ.",
    "lectureScript": "Chào các bạn. Ở slide số 70, chúng ta cùng tìm hiểu: Viết prompt cân bằng. Prompt trung lập giúp giảm định hướng một chiều, nhưng không thay thế dữ liệu và kiểm chứng. Điểm mấu chốt: Nêu tiêu chí so sánh. Ví dụ: So sánh hai lựa chọn theo chi phí, quyền riêng tư và tính phù hợp nhiệm vụ. Lưu ý bẫy đề thi: Không yêu cầu cân bằng giả tạo giữa dữ kiện đúng và thông tin đã bị bác bỏ.",
    "audioSrc": "/audio/lecture/slide-70.mp3",
    "durationSeconds": 20.3,
    "relatedQuestions": [
      17,
      29,
      44,
      50
    ]
  },
  {
    "id": "slide-71",
    "partNumber": 4,
    "partTitle": "Phần 4: Đạo đức, Pháp lý & Trách nhiệm xã hội",
    "slideNumber": 71,
    "title": "Dữ liệu định danh cá nhân — PII",
    "subtitle": "PII là dữ liệu có thể nhận diện một người, riêng lẻ hoặc kết hợp với dữ liệu khác.",
    "keyPoints": [
      "Tên, email, địa chỉ, tài khoản và hồ sơ đều cần xem xét.",
      "Giảm dữ liệu đưa vào công cụ công cộng.",
      "Thay bằng dữ liệu mô phỏng khi học."
    ],
    "frameworkBox": {
      "title": "Tình huống áp dụng (Ví dụ áp dụng)",
      "items": [
        {
          "label": "Tình huống",
          "desc": "Tên trường, lớp và kết quả hiếm gặp có thể tái nhận diện học sinh dù đã bỏ tên."
        },
        {
          "label": "Ghi nhớ cốt lõi",
          "desc": "PII là dữ liệu có thể nhận diện một người, riêng lẻ hoặc kết hợp với dữ liệu khác."
        }
      ]
    },
    "examTrap": "Che tên chưa đủ đảm bảo ẩn danh.",
    "lectureScript": "Chào các bạn. Ở slide số 71, chúng ta cùng tìm hiểu: Dữ liệu định danh cá nhân — PII. PII là dữ liệu có thể nhận diện một người, riêng lẻ hoặc kết hợp với dữ liệu khác. Điểm mấu chốt: Tên, email, địa chỉ, tài khoản và hồ sơ đều cần xem xét. Ví dụ: Tên trường, lớp và kết quả hiếm gặp có thể tái nhận diện học sinh dù đã bỏ tên. Lưu ý bẫy đề thi: Che tên chưa đủ đảm bảo ẩn danh.",
    "audioSrc": "/audio/lecture/slide-71.mp3",
    "durationSeconds": 22.1,
    "relatedQuestions": [
      24,
      29,
      31,
      42,
      46,
      49,
      52,
      66
    ]
  },
  {
    "id": "slide-72",
    "partNumber": 4,
    "partTitle": "Phần 4: Đạo đức, Pháp lý & Trách nhiệm xã hội",
    "slideNumber": 72,
    "title": "Dữ liệu nhạy cảm và dữ liệu nội bộ",
    "subtitle": "Dữ liệu tài chính, sức khỏe, trẻ em và bí mật nội bộ cần được xử lý theo quyền truy cập và chính sách phù hợp.",
    "keyPoints": [
      "Chỉ dùng công cụ đã được tổ chức phê duyệt.",
      "Không nhập PIN/mật khẩu để nhờ AI phân tích.",
      "Phân loại dữ liệu và giới hạn người truy cập."
    ],
    "frameworkBox": {
      "title": "Tình huống áp dụng (Ví dụ áp dụng)",
      "items": [
        {
          "label": "Tình huống",
          "desc": "Dùng bảng doanh thu giả lập thay vì tài khoản và mã PIN thật."
        },
        {
          "label": "Ghi nhớ cốt lõi",
          "desc": "Dữ liệu tài chính, sức khỏe, trẻ em và bí mật nội bộ cần được xử lý theo quyền truy cập và chính sách phù hợp."
        }
      ]
    },
    "examTrap": "Không mặc định dữ liệu công ty không phải PII thì được công khai.",
    "lectureScript": "Chào các bạn. Ở slide số 72, chúng ta cùng tìm hiểu: Dữ liệu nhạy cảm và dữ liệu nội bộ. Dữ liệu tài chính, sức khỏe, trẻ em và bí mật nội bộ cần được xử lý theo quyền truy cập và chính sách phù hợp. Điểm mấu chốt: Chỉ dùng công cụ đã được tổ chức phê duyệt. Ví dụ: Dùng bảng doanh thu giả lập thay vì tài khoản và mã PIN thật. Lưu ý bẫy đề thi: Không mặc định dữ liệu công ty không phải PII thì được công khai.",
    "audioSrc": "/audio/lecture/slide-72.mp3",
    "durationSeconds": 22.0,
    "relatedQuestions": [
      24,
      29,
      31,
      42,
      46,
      49,
      52,
      66
    ]
  },
  {
    "id": "slide-73",
    "partNumber": 4,
    "partTitle": "Phần 4: Đạo đức, Pháp lý & Trách nhiệm xã hội",
    "slideNumber": 73,
    "title": "Che dữ liệu trước khi chia sẻ",
    "subtitle": "Masking thay dữ liệu nhạy cảm bằng giá trị che/giả để giảm phơi lộ; hiệu quả phụ thuộc cách thực hiện.",
    "keyPoints": [
      "Kiểm tra cả trường trực tiếp và thông tin kết hợp.",
      "Giữ dữ liệu gốc trong môi trường được kiểm soát.",
      "Đánh giá nguy cơ tái nhận diện."
    ],
    "frameworkBox": {
      "title": "Tình huống áp dụng (Ví dụ áp dụng)",
      "items": [
        {
          "label": "Tình huống",
          "desc": "Thay email thật bằng địa chỉ giả trước bài tập."
        },
        {
          "label": "Ghi nhớ cốt lõi",
          "desc": "Masking thay dữ liệu nhạy cảm bằng giá trị che/giả để giảm phơi lộ; hiệu quả phụ thuộc cách thực hiện."
        }
      ]
    },
    "examTrap": "Masking không tự động bảo đảm không thể khôi phục hay suy ra danh tính.",
    "lectureScript": "Chào các bạn. Ở slide số 73, chúng ta cùng tìm hiểu: Che dữ liệu trước khi chia sẻ. Masking thay dữ liệu nhạy cảm bằng giá trị che/giả để giảm phơi lộ; hiệu quả phụ thuộc cách thực hiện. Điểm mấu chốt: Kiểm tra cả trường trực tiếp và thông tin kết hợp. Ví dụ: Thay email thật bằng địa chỉ giả trước bài tập. Lưu ý bẫy đề thi: Masking không tự động bảo đảm không thể khôi phục hay suy ra danh tính.",
    "audioSrc": "/audio/lecture/slide-73.mp3",
    "durationSeconds": 21.3,
    "relatedQuestions": [
      134,
      139,
      141,
      146,
      148
    ]
  },
  {
    "id": "slide-74",
    "partNumber": 4,
    "partTitle": "Phần 4: Đạo đức, Pháp lý & Trách nhiệm xã hội",
    "slideNumber": 74,
    "title": "Token bảo mật khác token ngôn ngữ",
    "subtitle": "Trong bảo mật, tokenization dùng mã đại diện cho giá trị nhạy cảm; trong NLP, tokenization chia dữ liệu thành đơn vị mô hình.",
    "keyPoints": [
      "Tên giả/mã đại diện vẫn có thể nối lại người thật nếu còn bảng ánh xạ.",
      "Bảo vệ bảng ánh xạ và quyền truy cập.",
      "Không coi bút danh là ẩn danh tuyệt đối."
    ],
    "frameworkBox": {
      "title": "Tình huống áp dụng (Ví dụ áp dụng)",
      "items": [
        {
          "label": "Tình huống",
          "desc": "KH001 thay tên khách hàng, bảng ánh xạ nằm riêng."
        },
        {
          "label": "Ghi nhớ cốt lõi",
          "desc": "Trong bảo mật, tokenization dùng mã đại diện cho giá trị nhạy cảm; trong NLP, tokenization chia dữ liệu thành đơn vị mô hình."
        }
      ]
    },
    "examTrap": "Tokenization không đồng nghĩa mã hóa mật mã trong mọi hệ thống.",
    "lectureScript": "Chào các bạn. Ở slide số 74, chúng ta cùng tìm hiểu: Token bảo mật khác token ngôn ngữ. Trong bảo mật, tokenization dùng mã đại diện cho giá trị nhạy cảm; trong NLP, tokenization chia dữ liệu thành đơn vị mô hình. Điểm mấu chốt: Tên giả/mã đại diện vẫn có thể nối lại người thật nếu còn bảng ánh xạ. Ví dụ: KH001 thay tên khách hàng, bảng ánh xạ nằm riêng. Lưu ý bẫy đề thi: Tokenization không đồng nghĩa mã hóa mật mã trong mọi hệ thống.",
    "audioSrc": "/audio/lecture/slide-74.mp3",
    "durationSeconds": 25.3,
    "relatedQuestions": [
      66,
      120,
      124
    ]
  },
  {
    "id": "slide-75",
    "partNumber": 4,
    "partTitle": "Phần 4: Đạo đức, Pháp lý & Trách nhiệm xã hội",
    "slideNumber": 75,
    "title": "Opt-out và chính sách dữ liệu",
    "subtitle": "Khả năng từ chối dùng dữ liệu huấn luyện phụ thuộc nhà cung cấp, dịch vụ và thiết lập.",
    "keyPoints": [
      "Đọc chính sách lưu dữ liệu, chia sẻ và huấn luyện.",
      "Kiểm tra tùy chọn nếu có, không suy từ nhãn “AI”.",
      "Phân biệt ngữ cảnh hội thoại, lịch sử và dữ liệu huấn luyện."
    ],
    "frameworkBox": {
      "title": "Tình huống áp dụng (Ví dụ áp dụng)",
      "items": [
        {
          "label": "Tình huống",
          "desc": "Bài tập yêu cầu mở cài đặt riêng tư rồi ghi lại các lựa chọn thực tế."
        },
        {
          "label": "Ghi nhớ cốt lõi",
          "desc": "Khả năng từ chối dùng dữ liệu huấn luyện phụ thuộc nhà cung cấp, dịch vụ và thiết lập."
        }
      ]
    },
    "examTrap": "Không hứa công cụ quên dữ liệu sau phiên hoặc nối IP với PIN theo một quy tắc chung.",
    "lectureScript": "Chào các bạn. Ở slide số 75, chúng ta cùng tìm hiểu: Opt-out và chính sách dữ liệu. Khả năng từ chối dùng dữ liệu huấn luyện phụ thuộc nhà cung cấp, dịch vụ và thiết lập. Điểm mấu chốt: Đọc chính sách lưu dữ liệu, chia sẻ và huấn luyện. Ví dụ: Bài tập yêu cầu mở cài đặt riêng tư rồi ghi lại các lựa chọn thực tế. Lưu ý bẫy đề thi: Không hứa công cụ quên dữ liệu sau phiên hoặc nối IP với PIN theo một quy tắc chung.",
    "audioSrc": "/audio/lecture/slide-75.mp3",
    "durationSeconds": 22.3,
    "relatedQuestions": [
      24,
      31,
      42,
      66,
      149,
      164
    ]
  },
  {
    "id": "slide-76",
    "partNumber": 4,
    "partTitle": "Phần 4: Đạo đức, Pháp lý & Trách nhiệm xã hội",
    "slideNumber": 76,
    "title": "Quyền sử dụng nội dung",
    "subtitle": "Có thể có rủi ro bản quyền khi sao chép hoặc sử dụng nội dung thiếu quyền; cần kiểm tra giấy phép và bối cảnh.",
    "keyPoints": [
      "Ưu tiên nội dung tự tạo hoặc có giấy phép phù hợp.",
      "Công khai trên web không đồng nghĩa miễn quyền sử dụng.",
      "Ghi nguồn không luôn thay thế xin phép."
    ],
    "frameworkBox": {
      "title": "Tình huống áp dụng (Ví dụ áp dụng)",
      "items": [
        {
          "label": "Tình huống",
          "desc": "Kiểm tra giấy phép ảnh trước khi đưa vào quảng cáo."
        },
        {
          "label": "Ghi nhớ cốt lõi",
          "desc": "Có thể có rủi ro bản quyền khi sao chép hoặc sử dụng nội dung thiếu quyền; cần kiểm tra giấy phép và bối cảnh."
        }
      ]
    },
    "examTrap": "Không suy ra mọi phong cách tương tự đều là vi phạm, hoặc AI tạo thì tự động không có rủi ro.",
    "lectureScript": "Chào các bạn. Ở slide số 76, chúng ta cùng tìm hiểu: Quyền sử dụng nội dung. Có thể có rủi ro bản quyền khi sao chép hoặc sử dụng nội dung thiếu quyền; cần kiểm tra giấy phép và bối cảnh. Điểm mấu chốt: Ưu tiên nội dung tự tạo hoặc có giấy phép phù hợp. Ví dụ: Kiểm tra giấy phép ảnh trước khi đưa vào quảng cáo. Lưu ý bẫy đề thi: Không suy ra mọi phong cách tương tự đều là vi phạm, hoặc AI tạo thì tự động không có rủi ro.",
    "audioSrc": "/audio/lecture/slide-76.mp3",
    "durationSeconds": 22.2,
    "relatedQuestions": [
      24,
      31,
      39,
      42,
      103,
      119,
      124,
      134
    ]
  },
  {
    "id": "slide-77",
    "partNumber": 4,
    "partTitle": "Phần 4: Đạo đức, Pháp lý & Trách nhiệm xã hội",
    "slideNumber": 77,
    "title": "Nhãn hiệu và khả năng gây nhầm lẫn",
    "subtitle": "Logo/tên thương hiệu tương tự có thể tạo rủi ro nhãn hiệu; không chỉ kiểm tra ảnh có đẹp hay không.",
    "keyPoints": [
      "Xem quyền đối với logo và phạm vi sử dụng.",
      "Tránh làm người xem hiểu nhầm nguồn gốc/liên kết.",
      "Đưa trường hợp chưa rõ cho người có thẩm quyền."
    ],
    "frameworkBox": {
      "title": "Tình huống áp dụng (Ví dụ áp dụng)",
      "items": [
        {
          "label": "Tình huống",
          "desc": "Logo quảng cáo giống thương hiệu đã có cần rà quyền sử dụng."
        },
        {
          "label": "Ghi nhớ cốt lõi",
          "desc": "Logo/tên thương hiệu tương tự có thể tạo rủi ro nhãn hiệu; không chỉ kiểm tra ảnh có đẹp hay không."
        }
      ]
    },
    "examTrap": "Một bài ghép quyền chỉ là nhận diện nguy cơ, không phải phán quyết pháp lý.",
    "lectureScript": "Chào các bạn. Ở slide số 77, chúng ta cùng tìm hiểu: Nhãn hiệu và khả năng gây nhầm lẫn. Logo/tên thương hiệu tương tự có thể tạo rủi ro nhãn hiệu; không chỉ kiểm tra ảnh có đẹp hay không. Điểm mấu chốt: Xem quyền đối với logo và phạm vi sử dụng. Ví dụ: Logo quảng cáo giống thương hiệu đã có cần rà quyền sử dụng. Lưu ý bẫy đề thi: Một bài ghép quyền chỉ là nhận diện nguy cơ, không phải phán quyết pháp lý.",
    "audioSrc": "/audio/lecture/slide-77.mp3",
    "durationSeconds": 22.2,
    "relatedQuestions": [
      17,
      24,
      29,
      44,
      120
    ]
  },
  {
    "id": "slide-78",
    "partNumber": 4,
    "partTitle": "Phần 4: Đạo đức, Pháp lý & Trách nhiệm xã hội",
    "slideNumber": 78,
    "title": "Sáng chế: tách người phát minh, đơn nộp và bảo hộ",
    "subtitle": "Việc dùng AI hỗ trợ thiết kế không tự xác định ai là người phát minh hoặc có đủ điều kiện bảo hộ.",
    "keyPoints": [
      "Phân biệt người phát minh với chủ sở hữu quyền.",
      "Nộp đơn khác được cấp bằng.",
      "Ghi lại đóng góp của con người và cần kiểm tra quy định áp dụng."
    ],
    "frameworkBox": {
      "title": "Tình huống áp dụng (Ví dụ áp dụng)",
      "items": [
        {
          "label": "Tình huống",
          "desc": "Câu 54 chưa nêu đủ đóng góp con người để chọn riêng một cách dùng AI."
        },
        {
          "label": "Ghi nhớ cốt lõi",
          "desc": "Việc dùng AI hỗ trợ thiết kế không tự xác định ai là người phát minh hoặc có đủ điều kiện bảo hộ."
        }
      ]
    },
    "examTrap": "Không học rằng mọi sản phẩm AI thiết kế lại đều đủ điều kiện nộp/được cấp bằng.",
    "lectureScript": "Chào các bạn. Ở slide số 78, chúng ta cùng tìm hiểu: Sáng chế: tách người phát minh, đơn nộp và bảo hộ. Việc dùng AI hỗ trợ thiết kế không tự xác định ai là người phát minh hoặc có đủ điều kiện bảo hộ. Điểm mấu chốt: Phân biệt người phát minh với chủ sở hữu quyền. Ví dụ: Câu 54 chưa nêu đủ đóng góp con người để chọn riêng một cách dùng AI. Lưu ý bẫy đề thi: Không học rằng mọi sản phẩm AI thiết kế lại đều đủ điều kiện nộp/được cấp bằng.",
    "audioSrc": "/audio/lecture/slide-78.mp3",
    "durationSeconds": 23.7,
    "relatedQuestions": [
      24,
      49,
      50,
      52,
      66
    ]
  },
  {
    "id": "slide-79",
    "partNumber": 4,
    "partTitle": "Phần 4: Đạo đức, Pháp lý & Trách nhiệm xã hội",
    "slideNumber": 79,
    "title": "Kiểm tra rủi ro theo bối cảnh",
    "subtitle": "Nghĩa vụ phụ thuộc nơi áp dụng, dữ liệu, nội dung và mục đích; tài liệu nền tảng không thay thế kết luận pháp lý cụ thể.",
    "keyPoints": [
      "Xem quyền sở hữu trí tuệ.",
      "Xem dữ liệu cá nhân, phân biệt đối xử và hợp đồng khi liên quan.",
      "Xác định người phê duyệt trước khi sử dụng."
    ],
    "frameworkBox": {
      "title": "Tình huống áp dụng (Ví dụ áp dụng)",
      "items": [
        {
          "label": "Tình huống",
          "desc": "Một hệ thống tuyển dụng cần xem dữ liệu và công bằng, ngoài quyền dùng phần mềm."
        },
        {
          "label": "Ghi nhớ cốt lõi",
          "desc": "Nghĩa vụ phụ thuộc nơi áp dụng, dữ liệu, nội dung và mục đích; tài liệu nền tảng không thay thế kết luận pháp lý cụ thể."
        }
      ]
    },
    "examTrap": "Không áp một danh sách luật cố định cho mọi doanh nghiệp/quốc gia.",
    "lectureScript": "Chào các bạn. Ở slide số 79, chúng ta cùng tìm hiểu: Kiểm tra rủi ro theo bối cảnh. Nghĩa vụ phụ thuộc nơi áp dụng, dữ liệu, nội dung và mục đích; tài liệu nền tảng không thay thế kết luận pháp lý cụ thể. Điểm mấu chốt: Xem quyền sở hữu trí tuệ. Ví dụ: Một hệ thống tuyển dụng cần xem dữ liệu và công bằng, ngoài quyền dùng phần mềm. Lưu ý bẫy đề thi: Không áp một danh sách luật cố định cho mọi doanh nghiệp/quốc gia.",
    "audioSrc": "/audio/lecture/slide-79.mp3",
    "durationSeconds": 21.8,
    "relatedQuestions": [
      22,
      24,
      44,
      46,
      49,
      50,
      66,
      116
    ]
  },
  {
    "id": "slide-80",
    "partNumber": 4,
    "partTitle": "Phần 4: Đạo đức, Pháp lý & Trách nhiệm xã hội",
    "slideNumber": 80,
    "title": "Thu thập nguồn và ghi nhận quy trình",
    "subtitle": "Kiểm tra quyền sử dụng nguồn và ghi rõ cách dùng AI để có thể giải trình.",
    "keyPoints": [
      "Xác định tài liệu tự tạo, mở, công khai hay phải xin phép.",
      "Đọc điều khoản sử dụng theo mục đích.",
      "Lưu nguồn, phiên bản và phần đã chỉnh sửa."
    ],
    "frameworkBox": {
      "title": "Tình huống áp dụng (Ví dụ áp dụng)",
      "items": [
        {
          "label": "Tình huống",
          "desc": "Lập bảng tên ảnh, nguồn, giấy phép và mục đích trước khi xuất bản."
        },
        {
          "label": "Ghi nhớ cốt lõi",
          "desc": "Kiểm tra quyền sử dụng nguồn và ghi rõ cách dùng AI để có thể giải trình."
        }
      ]
    },
    "examTrap": "Không coi mọi thứ tìm thấy trên internet là dữ liệu mở.",
    "lectureScript": "Chào các bạn. Ở slide số 80, chúng ta cùng tìm hiểu: Thu thập nguồn và ghi nhận quy trình. Kiểm tra quyền sử dụng nguồn và ghi rõ cách dùng AI để có thể giải trình. Điểm mấu chốt: Xác định tài liệu tự tạo, mở, công khai hay phải xin phép. Ví dụ: Lập bảng tên ảnh, nguồn, giấy phép và mục đích trước khi xuất bản. Lưu ý bẫy đề thi: Không coi mọi thứ tìm thấy trên internet là dữ liệu mở.",
    "audioSrc": "/audio/lecture/slide-80.mp3",
    "durationSeconds": 21.2,
    "relatedQuestions": [
      46,
      52,
      66,
      116,
      148
    ]
  },
  {
    "id": "slide-81",
    "partNumber": 4,
    "partTitle": "Phần 4: Đạo đức, Pháp lý & Trách nhiệm xã hội",
    "slideNumber": 81,
    "title": "Thông tin sai có thể gây hại danh dự",
    "subtitle": "Nội dung AI sai về người/tổ chức có thể gây thiệt hại và rủi ro pháp lý tùy quy định, bối cảnh.",
    "keyPoints": [
      "Kiểm tra cáo buộc trước khi chia sẻ.",
      "Không biến suy đoán thành dữ kiện.",
      "Sửa hoặc gỡ thông tin sai qua quy trình phù hợp."
    ],
    "frameworkBox": {
      "title": "Tình huống áp dụng (Ví dụ áp dụng)",
      "items": [
        {
          "label": "Tình huống",
          "desc": "AI bịa một cáo buộc: cần đối chiếu nguồn, không đăng lại ngay."
        },
        {
          "label": "Ghi nhớ cốt lõi",
          "desc": "Nội dung AI sai về người/tổ chức có thể gây thiệt hại và rủi ro pháp lý tùy quy định, bối cảnh."
        }
      ]
    },
    "examTrap": "Không khẳng định mọi thông tin sai đều cấu thành cùng một tội danh ở mọi nơi.",
    "lectureScript": "Chào các bạn. Ở slide số 81, chúng ta cùng tìm hiểu: Thông tin sai có thể gây hại danh dự. Nội dung AI sai về người/tổ chức có thể gây thiệt hại và rủi ro pháp lý tùy quy định, bối cảnh. Điểm mấu chốt: Kiểm tra cáo buộc trước khi chia sẻ. Ví dụ: AI bịa một cáo buộc: cần đối chiếu nguồn, không đăng lại ngay. Lưu ý bẫy đề thi: Không khẳng định mọi thông tin sai đều cấu thành cùng một tội danh ở mọi nơi.",
    "audioSrc": "/audio/lecture/slide-81.mp3",
    "durationSeconds": 22.0,
    "relatedQuestions": [
      31,
      48,
      66,
      103
    ]
  },
  {
    "id": "slide-82",
    "partNumber": 4,
    "partTitle": "Phần 4: Đạo đức, Pháp lý & Trách nhiệm xã hội",
    "slideNumber": 82,
    "title": "Mạo danh, bắt nạt và rủi ro danh tính",
    "subtitle": "AI có thể khuếch đại mạo danh, quấy rối và rò rỉ dữ liệu; cần phòng ngừa và xử lý có trách nhiệm.",
    "keyPoints": [
      "Giảm phơi lộ PII.",
      "Kiểm tra nguồn yêu cầu nhạy cảm qua kênh độc lập.",
      "Ghi nhận sự cố và báo người phụ trách."
    ],
    "frameworkBox": {
      "title": "Tình huống áp dụng (Ví dụ áp dụng)",
      "items": [
        {
          "label": "Tình huống",
          "desc": "Giọng nói giống cấp quản lý không đủ để xác nhận yêu cầu chuyển tiền."
        },
        {
          "label": "Ghi nhớ cốt lõi",
          "desc": "AI có thể khuếch đại mạo danh, quấy rối và rò rỉ dữ liệu; cần phòng ngừa và xử lý có trách nhiệm."
        }
      ]
    },
    "examTrap": "Trách nhiệm cụ thể phụ thuộc hành vi và quy định, không tự quy hết cho một bên.",
    "lectureScript": "Chào các bạn. Ở slide số 82, chúng ta cùng tìm hiểu: Mạo danh, bắt nạt và rủi ro danh tính. AI có thể khuếch đại mạo danh, quấy rối và rò rỉ dữ liệu; cần phòng ngừa và xử lý có trách nhiệm. Điểm mấu chốt: Giảm phơi lộ PII. Ví dụ: Giọng nói giống cấp quản lý không đủ để xác nhận yêu cầu chuyển tiền. Lưu ý bẫy đề thi: Trách nhiệm cụ thể phụ thuộc hành vi và quy định, không tự quy hết cho một bên.",
    "audioSrc": "/audio/lecture/slide-82.mp3",
    "durationSeconds": 21.7,
    "relatedQuestions": [
      31,
      124,
      156
    ]
  },
  {
    "id": "slide-83",
    "partNumber": 4,
    "partTitle": "Phần 4: Đạo đức, Pháp lý & Trách nhiệm xã hội",
    "slideNumber": 83,
    "title": "Deepfake, minh bạch và gắn nhãn",
    "subtitle": "Nội dung mô phỏng người thật cần được xử lý minh bạch; yêu cầu gắn nhãn phụ thuộc bối cảnh, nền tảng và quy định.",
    "keyPoints": [
      "Không làm người xem hiểu nhầm nội dung là sự kiện thật.",
      "Xem quyền hình ảnh/giọng nói.",
      "Ghi nhận nội dung đã tạo/chỉnh bằng AI khi phù hợp."
    ],
    "frameworkBox": {
      "title": "Tình huống áp dụng (Ví dụ áp dụng)",
      "items": [
        {
          "label": "Tình huống",
          "desc": "Avatar giáo viên ảo cần tránh gây hiểu nhầm là ghi hình người thật."
        },
        {
          "label": "Ghi nhớ cốt lõi",
          "desc": "Nội dung mô phỏng người thật cần được xử lý minh bạch; yêu cầu gắn nhãn phụ thuộc bối cảnh, nền tảng và quy định."
        }
      ]
    },
    "examTrap": "Watermark không chứng minh nội dung đúng và không là nghĩa vụ giống nhau trong mọi tình huống.",
    "lectureScript": "Chào các bạn. Ở slide số 83, chúng ta cùng tìm hiểu: Deepfake, minh bạch và gắn nhãn. Nội dung mô phỏng người thật cần được xử lý minh bạch; yêu cầu gắn nhãn phụ thuộc bối cảnh, nền tảng và quy định. Điểm mấu chốt: Không làm người xem hiểu nhầm nội dung là sự kiện thật. Ví dụ: Avatar giáo viên ảo cần tránh gây hiểu nhầm là ghi hình người thật. Lưu ý bẫy đề thi: Watermark không chứng minh nội dung đúng và không là nghĩa vụ giống nhau trong mọi tình huống.",
    "audioSrc": "/audio/lecture/slide-83.mp3",
    "durationSeconds": 23.1,
    "relatedQuestions": [
      24,
      139,
      141,
      146,
      148,
      149
    ]
  },
  {
    "id": "slide-84",
    "partNumber": 4,
    "partTitle": "Phần 4: Đạo đức, Pháp lý & Trách nhiệm xã hội",
    "slideNumber": 84,
    "title": "Con người rà soát và phê duyệt",
    "subtitle": "Người sử dụng vẫn có trách nhiệm kiểm tra và quyết định cách dùng output; phân chia trách nhiệm thực tế còn tùy bối cảnh.",
    "keyPoints": [
      "Xác định người duyệt nội dung.",
      "Kiểm tra kiến thức, nguồn, dữ liệu và ảnh hưởng tới người khác.",
      "Minh bạch phần AI hỗ trợ trong công việc/học tập."
    ],
    "frameworkBox": {
      "title": "Tình huống áp dụng (Ví dụ áp dụng)",
      "items": [
        {
          "label": "Tình huống",
          "desc": "Giáo viên kiểm tra đáp án và độ tuổi trước khi phát phiếu học tập AI."
        },
        {
          "label": "Ghi nhớ cốt lõi",
          "desc": "Người sử dụng vẫn có trách nhiệm kiểm tra và quyết định cách dùng output; phân chia trách nhiệm thực tế còn tùy bối cảnh."
        }
      ]
    },
    "examTrap": "Không dùng AI như lý do miễn trách nhiệm, cũng không khẳng định chỉ một bên luôn chịu mọi trách nhiệm.",
    "lectureScript": "Chào các bạn. Ở slide số 84, chúng ta cùng tìm hiểu: Con người rà soát và phê duyệt. Người sử dụng vẫn có trách nhiệm kiểm tra và quyết định cách dùng output; phân chia trách nhiệm thực tế còn tùy bối cảnh. Điểm mấu chốt: Xác định người duyệt nội dung. Ví dụ: Giáo viên kiểm tra đáp án và độ tuổi trước khi phát phiếu học tập AI. Lưu ý bẫy đề thi: Không dùng AI như lý do miễn trách nhiệm, cũng không khẳng định chỉ một bên luôn chịu mọi trách nhiệm.",
    "audioSrc": "/audio/lecture/slide-84.mp3",
    "durationSeconds": 23.1,
    "relatedQuestions": [
      149,
      150,
      156,
      164
    ]
  },
  {
    "id": "slide-85",
    "partNumber": 4,
    "partTitle": "Phần 4: Đạo đức, Pháp lý & Trách nhiệm xã hội",
    "slideNumber": 85,
    "title": "Tác động xã hội và khoảng cách số",
    "subtitle": "AI hỗ trợ học tập, sáng tạo và giao tiếp, đồng thời có thể làm tăng phụ thuộc và bất bình đẳng tiếp cận.",
    "keyPoints": [
      "Lợi ích: tóm tắt, dịch thuật, tạo học liệu.",
      "Rủi ro: thông tin sai, giảm tương tác, thay đổi công việc.",
      "Xem khả năng tiếp cận công nghệ giữa các nhóm."
    ],
    "frameworkBox": {
      "title": "Tình huống áp dụng (Ví dụ áp dụng)",
      "items": [
        {
          "label": "Tình huống",
          "desc": "Kết hợp AI soạn nháp với thảo luận nhóm thay vì giao toàn bộ suy nghĩ cho AI."
        },
        {
          "label": "Ghi nhớ cốt lõi",
          "desc": "AI hỗ trợ học tập, sáng tạo và giao tiếp, đồng thời có thể làm tăng phụ thuộc và bất bình đẳng tiếp cận."
        }
      ]
    },
    "examTrap": "Không coi AI luôn thay thế mọi công việc hay luôn mang lại lợi ích ngang nhau cho mọi người.",
    "lectureScript": "Chào các bạn. Ở slide số 85, chúng ta cùng tìm hiểu: Tác động xã hội và khoảng cách số. AI hỗ trợ học tập, sáng tạo và giao tiếp, đồng thời có thể làm tăng phụ thuộc và bất bình đẳng tiếp cận. Điểm mấu chốt: Lợi ích: tóm tắt, dịch thuật, tạo học liệu. Ví dụ: Kết hợp AI soạn nháp với thảo luận nhóm thay vì giao toàn bộ suy nghĩ cho AI. Lưu ý bẫy đề thi: Không coi AI luôn thay thế mọi công việc hay luôn mang lại lợi ích ngang nhau cho mọi người.",
    "audioSrc": "/audio/lecture/slide-85.mp3",
    "durationSeconds": 24.1,
    "relatedQuestions": [
      29,
      44,
      141
    ]
  }
];

export function getSlideById(id: string): LectureSlide | undefined {
  return LECTURE_SLIDES.find(s => s.id === id);
}

export function getSlidesByPart(partNumber: number): LectureSlide[] {
  return LECTURE_SLIDES.filter(s => s.partNumber === partNumber);
}
