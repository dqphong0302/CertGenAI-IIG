import type { Topic } from '@/lib/quiz';

export type TheorySource = { title: string; url: string; note: string };
export type TheorySlide = {
  title: string;
  label: string;
  summary: string;
  bullets: string[];
  sources: TheorySource[];
  examNote?: string;
  example?: { title: string; content: string };
  terms?: Array<{ term: string; definition: string }>;
  pitfalls?: string[];
  check?: {
    question: string;
    options: string[];
    answer: number;
    explanation: string;
  };
  takeaway: string;
};

export const THEORY_UPDATED = '17/10/2026';
export const THEORY_MODULES: Record<
  Topic,
  { description: string; slides: TheorySlide[] }
> = {
  methods: {
    description:
      'Bản chất AI tạo sinh, dữ liệu và mô hình; phân biệt dùng công cụ, huấn luyện và chọn tài nguyên theo nhiệm vụ.',
    slides: [
      {
        label: 'Bản chất',
        title: 'AI tạo sinh tạo ra điều gì?',
        summary:
          'AI tạo sinh học quy luật từ dữ liệu để tạo nội dung theo yêu cầu; nội dung không mặc nhiên đúng hoặc độc nhất.',
        bullets: [
          'Đầu ra có thể là văn bản, ảnh, âm thanh, video hoặc mã.',
          'Có thể tạo phản hồi mới từ kiến thức và ngữ cảnh; cũng có nguy cơ lặp lại dữ liệu đã học.',
          'Phân biệt tạo nội dung với dự đoán một nhãn hoặc truy xuất nguồn.',
        ],
        example: {
          title: 'Ví dụ áp dụng',
          content:
            'Viết email giới thiệu sản phẩm theo dữ liệu được cung cấp là tạo sinh.',
        },
        pitfalls: [
          'Không học rằng mọi output đều chưa từng tồn tại hoặc tự động có bản quyền.',
        ],
        check: {
          question: 'Điều nào đúng về output tạo sinh?',
          options: [
            'Có thể tạo nội dung mới nhưng vẫn cần kiểm tra.',
            'Luôn độc nhất và chính xác.',
          ],
          answer: 0,
          explanation:
            'Có thể tạo nội dung mới nhưng vẫn cần kiểm tra. AI tạo sinh học quy luật từ dữ liệu để tạo nội dung theo yêu cầu; nội dung không mặc nhiên đúng hoặc độc nhất.',
        },
        takeaway:
          'AI tạo sinh học quy luật từ dữ liệu để tạo nội dung theo yêu cầu; nội dung không mặc nhiên đúng hoặc độc nhất.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 27–34',
            url: '/references/teacher-guide.pdf#page=27',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
        examNote:
          'Câu 104: chọn hai ứng dụng theo IIG là lập danh sách thực phẩm từ công thức và tóm tắt văn bản. Bài học tổng quát vẫn bao gồm tạo nội dung sáng tạo.',
      },
      {
        label: 'Phân biệt',
        title: 'AI tạo sinh vs AI phân tích/dự báo',
        summary:
          'AI phân tích/dự báo (Predictive AI) chuyên phân loại và dự đoán xu hướng từ dữ liệu cũ, trong khi AI tạo sinh tạo ra nội dung mới.',
        bullets: [
          'AI phân tích/dự báo: Phân loại email (Spam / Không spam), chấm điểm tín dụng, dự đoán giá nhà dựa trên diện tích.',
          'AI tạo sinh: Tự viết một email bán hàng mới, soạn thảo hợp đồng vay vốn, vẽ thiết kế mẫu nhà 3D.',
          'Kết hợp trong thực tế: AI phân tích tìm ra khách hàng tiềm năng, sau đó AI tạo sinh tự động viết thư chào hàng cá nhân hóa.',
          'AI phân biệt (Discriminative AI): Chuyên phân loại dữ liệu vào các nhóm có sẵn (ví dụ nhận diện email spam) — không tạo ra nội dung mới như AI tạo sinh.',
        ],
        terms: [
          {
            term: 'AI dự báo (Predictive AI)',
            definition:
              'Hệ thống AI chuyên phân tích dữ liệu lịch sử để phân loại hoặc dự đoán các kết quả trong tương lai.',
          },
          {
            term: 'AI phân biệt (Discriminative AI)',
            definition:
              'Hệ thống AI học ranh giới phân loại giữa các nhóm dữ liệu (ví dụ: thật/giả, spam/không spam) thay vì tạo nội dung mới — thường đóng vai trò bộ phân loại, khác với AI tạo sinh.',
          },
        ],
        example: {
          title: 'Tình huống đối chiếu',
          content:
            'Phát hiện đánh giá của khách hàng là hài lòng hay thất vọng: AI phân tích. Viết thư phản hồi xin lỗi và bồi thường cho khách: AI tạo sinh.',
        },
        pitfalls: [
          'Phân biệt mục tiêu bài toán phân loại với tạo nội dung; mô hình tạo sinh vẫn có thể được dùng để phân loại bằng prompt.',
        ],
        check: {
          question:
            'Tác vụ nào sau đây là ứng dụng của AI dự báo (Predictive AI) thay vì AI tạo sinh?',
          options: [
            'Dự đoán xác suất một giao dịch ngân hàng là gian lận dựa trên lịch sử chi tiêu',
            'Viết một kịch bản phim khoa học viễn tưởng mới',
            'Vẽ hình ảnh minh họa cho cuốn sách thiếu nhi',
            'Tạo giọng nói thuyết minh nhân tạo từ văn bản',
          ],
          answer: 0,
          explanation:
            'Dự đoán gian lận là bài toán phân loại và dự báo dựa trên dữ liệu lịch sử, thuộc phạm vi của Predictive AI.',
        },
        takeaway:
          'Predictive AI xếp loại và dự đoán; Generative AI sáng tạo nội dung mới.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 27–34',
            url: '/references/teacher-guide.pdf#page=27',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
        examNote:
          'Câu 100: dùng các cặp theo IIG. Trong thực tế một sản phẩm có thể kết hợp tạo sinh, truy xuất, dự báo và đề xuất.',
      },
      {
        label: 'Phân biệt',
        title: 'AI tạo sinh và công cụ tìm kiếm',
        summary:
          'Tìm kiếm ưu tiên truy xuất nguồn; AI tạo sinh ưu tiên tổng hợp phản hồi. Hai chức năng có thể kết hợp trong một sản phẩm.',
        bullets: [
          'Tìm kiếm giúp tới trang, báo cáo và tài liệu có sẵn.',
          'AI có thể viết bản nháp, giải thích và tóm tắt.',
          'Cả hai có thể nhận câu hỏi tự nhiên; không phân biệt bằng số câu trả lời hoặc cách gõ từ khóa.',
        ],
        example: {
          title: 'Ví dụ áp dụng',
          content:
            'Cần số liệu mới: tìm báo cáo gốc; cần email: nhờ AI soạn và kiểm tra dữ kiện.',
        },
        pitfalls: [
          'Đừng học rằng công cụ tìm kiếm chỉ nhận cụm từ, hoặc AI không bao giờ dẫn nguồn.',
        ],
        check: {
          question: 'Nên phân biệt chủ yếu theo điều gì?',
          options: [
            'Tác vụ truy xuất nguồn hay tạo/tổng hợp nội dung.',
            'Một bên chỉ nhận câu hỏi, bên kia chỉ nhận từ khóa.',
          ],
          answer: 0,
          explanation:
            'Tác vụ truy xuất nguồn hay tạo/tổng hợp nội dung. Tìm kiếm ưu tiên truy xuất nguồn; AI tạo sinh ưu tiên tổng hợp phản hồi. Hai chức năng có thể kết hợp trong một sản phẩm.',
        },
        takeaway:
          'Tìm kiếm ưu tiên truy xuất nguồn; AI tạo sinh ưu tiên tổng hợp phản hồi. Hai chức năng có thể kết hợp trong một sản phẩm.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 27–34',
            url: '/references/teacher-guide.pdf#page=27',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Kiến trúc LLM',
        title: 'Kiến trúc Transformer & Cơ chế Tự chú ý',
        summary:
          'Transformer là kiến trúc mạng nơ-ron nền tảng cho hầu hết các mô hình ngôn ngữ lớn (LLM), sử dụng cơ chế Attention để hiểu ngữ cảnh toàn diện.',
        bullets: [
          'Cơ chế Tự chú ý (Self-Attention): Cho phép mô hình tính toán mối liên hệ giữa mọi từ trong câu mà không bị giới hạn thứ tự trước sau.',
          'Xử lý song song (Parallel Processing): Khắc phục nhược điểm xử lý tuần tự của mạng RNN cũ, giúp huấn luyện nhanh trên dữ liệu khổng lồ.',
          'Ứng dụng cốt lõi: Nền tảng của các mô hình GPT (OpenAI), Claude (Anthropic), Gemini (Google), Llama (Meta).',
        ],
        terms: [
          {
            term: 'Transformer',
            definition:
              'Kiến trúc mạng nơ-ron đột phá ra mắt năm 2017, sử dụng cơ chế Attention để xử lý ngôn ngữ song song.',
          },
          {
            term: 'Self-Attention (Tự chú ý)',
            definition:
              'Cơ chế toán học giúp mô hình xác định mức độ quan trọng và liên kết giữa các từ trong cùng một câu.',
          },
        ],
        example: {
          title: 'Giải quyết sự mơ hồ của đại từ',
          content:
            "Trong câu 'Con chó không qua đường vì nó quá mệt', cơ chế Self-Attention giúp mô hình xác định từ 'nó' đang chỉ 'con chó' chứ không phải 'con đường'.",
        },
        pitfalls: [
          'Nghĩ rằng Transformer chỉ dùng để dịch thuật từng từ một theo từ điển.',
        ],
        check: {
          question:
            'Cơ chế toán học cốt lõi nào trong kiến trúc Transformer giúp mô hình hiểu mối liên kết giữa các từ trong một câu văn dài?',
          options: [
            'Cơ chế Tự chú ý (Self-Attention)',
            'Cơ chế nén ảnh JPEG',
            'Cơ chế quét virus máy tính',
            'Cơ chế làm mát bằng chất lỏng',
          ],
          answer: 0,
          explanation:
            'Self-Attention là cơ chế trung tâm của Transformer, cho phép mô hình tính toán trọng số liên kết ngữ nghĩa giữa các từ trong ngữ cảnh.',
        },
        takeaway:
          'Transformer và Self-Attention là trái tim của các mô hình ngôn ngữ lớn hiện đại.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 43–50',
            url: '/references/teacher-guide.pdf#page=43',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Kiến trúc Ảnh',
        title: 'Mô hình Khuếch tán (Diffusion Models)',
        summary:
          'Mô hình khuếch tán tạo hình ảnh chất lượng cao bằng cách học cách loại bỏ nhiễu ngẫu nhiên từng bước từ một khung hình mờ đục.',
        bullets: [
          'Quá trình thêm nhiễu (Forward Process): Thêm dần nhiễu ngẫu nhiên Gaussian vào ảnh thật cho đến khi ảnh trở thành nhiễu hạt hoàn toàn.',
          'Quá trình khử nhiễu (Reverse Denoising): Mô hình học cách đoán và loại bỏ từng lớp nhiễu để phục hồi lại hình ảnh sắc nét theo câu lệnh prompt.',
          'Ứng dụng hàng đầu: Midjourney, Stable Diffusion, DALL-E 3, Adobe Firefly.',
        ],
        terms: [
          {
            term: 'Diffusion Model (Mô hình khuếch tán)',
            definition:
              'Họ mô hình tạo dữ liệu bằng cách học cách khử nhiễu ngẫu nhiên từng bước (denoising).',
          },
          {
            term: 'Khử nhiễu (Denoising)',
            definition:
              'Quá trình loại bỏ tạp âm ngẫu nhiên để tái tạo lại các chi tiết hình ảnh rõ nét.',
          },
        ],
        example: {
          title: 'Tạo tranh phong cảnh',
          content:
            "Khi bạn nhập prompt 'Một ngọn núi tuyết lúc bình minh', mô hình bắt đầu từ một mảng nhiễu hạt xám và qua 30-50 bước khử nhiễu để hiện rõ đỉnh núi tuyết rực rỡ.",
        },
        pitfalls: [
          'Lầm tưởng mô hình AI tạo ảnh bằng cách cắt ghép các mảnh ảnh tìm thấy trên Google Images.',
        ],
        check: {
          question:
            'Họ mô hình AI nào tạo ảnh bằng cách biến đổi một khung hình chứa đầy nhiễu hạt ngẫu nhiên thành hình ảnh rõ nét thông qua quy trình khử nhiễu?',
          options: [
            'Mô hình khuếch tán (Diffusion Models)',
            'Mạng nơ-ron truyền thẳng đơn giản',
            'Hệ thống cơ sở dữ liệu quan hệ',
            'Bộ nhớ đệm trình duyệt',
          ],
          answer: 0,
          explanation:
            'Diffusion Models hoạt động dựa trên nguyên lý tiêm nhiễu và khử nhiễu ngược (reverse denoising) để sinh hình ảnh.',
        },
        takeaway:
          'Diffusion Model tạo hình ảnh bằng cách khử nhiễu từng bước từ một bức tranh hạt ngẫu nhiên.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 43–50',
            url: '/references/teacher-guide.pdf#page=43',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Kiến trúc Đối kháng',
        title: 'Mạng đối nghịch tạo sinh (GAN)',
        summary:
          'GAN bao gồm hai mạng nơ-ron cạnh tranh đối kháng trực tiếp với nhau: Mạng tạo sinh (Generator) và Mạng phân biệt (Discriminator).',
        bullets: [
          "Mạng tạo sinh (Generator): Đóng vai 'kẻ làm giả', cố gắng tạo ra các mẫu ảnh giả sao cho giống thật nhất.",
          "Mạng phân biệt (Discriminator): Đóng vai 'chuyên gia giám định', cố gắng phát hiện xem mẫu ảnh là thật hay do Generator làm giả.",
          'Kết quả huấn luyện: Qua hàng nghìn vòng đấu trí, Generator học được cách tạo ra hình ảnh khuôn mặt hoặc phong cảnh chân thực đến mức mắt người không phân biệt được.',
        ],
        terms: [
          {
            term: 'GAN (Generative Adversarial Network)',
            definition:
              'Kiến trúc mạng AI gồm 2 thành phần đối kháng nhau để liên tục nâng cao độ chân thực của mẫu tạo ra.',
          },
          {
            term: 'Generator',
            definition: 'Mạng nơ-ron có nhiệm vụ tạo ra dữ liệu giả.',
          },
          {
            term: 'Discriminator',
            definition:
              'Mạng nơ-ron có nhiệm vụ phân biệt dữ liệu thật từ tập huấn luyện với dữ liệu giả do Generator tạo.',
          },
        ],
        example: {
          title: 'Tạo avatar người ảo',
          content:
            "Trang web 'ThisPersonDoesNotExist' sử dụng StyleGAN để tạo ra hàng triệu bức ảnh chân dung người ảo vô cùng chân thực mà người đó không có thật.",
        },
        pitfalls: [
          'Nhầm lẫn vai trò của Generator (tạo mẫu) và Discriminator (đánh giá/giám định).',
        ],
        check: {
          question:
            'Trong kiến trúc Mạng đối nghịch tạo sinh (GAN), thành phần nào có nhiệm vụ phát hiện xem một bức ảnh là ảnh thật hay ảnh giả do AI tạo ra?',
          options: [
            'Mạng phân biệt (Discriminator)',
            'Mạng tạo sinh (Generator)',
            'Cửa sổ ngữ cảnh (Context Window)',
            'Bộ mã hóa Token',
          ],
          answer: 0,
          explanation:
            'Discriminator đóng vai trò người giám định, liên tục kiểm tra và phân biệt giữa ảnh thật từ dữ liệu và ảnh giả từ Generator.',
        },
        takeaway:
          'GAN = Generator (Tạo giả) đấu với Discriminator (Bắt bài) để cùng tiến bộ.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 43–50',
            url: '/references/teacher-guide.pdf#page=43',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Kiến trúc Không gian ẩn',
        title: 'Bộ tự mã hóa biến phân (VAE)',
        summary:
          'VAE nén dữ liệu đầu vào vào một không gian ẩn xác suất (Latent Space) và giải mã để tạo ra các biến thể mới mượt mà.',
        bullets: [
          'Bộ mã hóa (Encoder): Nén bức ảnh hoặc âm thanh thành một vector biểu diễn trong không gian ẩn nhiều chiều.',
          'Không gian ẩn liên tục (Continuous Latent Space): Sắp xếp các đặc trưng tương đồng nằm gần nhau, cho phép chuyển đổi mượt mà giữa các kiểu mẫu.',
          'Bộ giải mã (Decoder): Nhận điểm dữ liệu từ không gian ẩn và tái tạo lại thành nội dung hoàn chỉnh mới.',
        ],
        terms: [
          {
            term: 'VAE (Variational Autoencoder)',
            definition:
              'Mô hình tạo sinh nén dữ liệu vào phân phối xác suất trong không gian ẩn để sinh dữ liệu mới.',
          },
          {
            term: 'Không gian ẩn (Latent Space)',
            definition:
              'Không gian toán học trừu tượng biểu diễn các đặc trưng cốt lõi của dữ liệu.',
          },
        ],
        example: {
          title: 'Biến đổi nét mặt',
          content:
            'Sử dụng VAE để điều chỉnh độ dài mái tóc hoặc độ cười trên khuôn mặt bằng cách di chuyển nhẹ vị trí tọa độ trong không gian ẩn.',
        },
        pitfalls: [
          'Nghĩ rằng VAE chỉ là công cụ nén file ZIP thông thường không có khả năng sinh dữ liệu mới.',
        ],
        check: {
          question:
            'Thành phần nào trong mô hình VAE đóng vai trò là không gian biểu diễn toán học chứa các đặc trưng nén của dữ liệu?',
          options: [
            'Không gian ẩn (Latent Space)',
            'Ổ cứng thể rắn SSD',
            'Dây cáp mạng quang',
            'Màn hình hiển thị',
          ],
          answer: 0,
          explanation:
            'Không gian ẩn (Latent Space) là nơi VAE mã hóa và biểu diễn các đặc trưng xác suất của dữ liệu trước khi giải mã.',
        },
        takeaway:
          'VAE nén dữ liệu vào không gian ẩn xác suất rồi giải mã để tạo các biến thể mới.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 43–50',
            url: '/references/teacher-guide.pdf#page=43',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Vòng đời AI (1 & 2)',
        title: 'Thu thập, tiền xử lý và gán nhãn',
        summary:
          'Thu thập, làm sạch, mã hóa và gán nhãn là các thao tác khác nhau trong chuẩn bị dữ liệu.',
        bullets: [
          'Thu thập: nguồn dữ liệu, quyền sử dụng và mức đại diện.',
          'Tiền xử lý: làm sạch, chuẩn hóa, chia token hoặc xử lý định dạng.',
          'Gán nhãn: tạo mô tả/nhãn; gán trọng số là thao tác khác, dù cùng ảnh hưởng quá trình học.',
          'Cặp ảnh–văn bản có thể có nhãn thủ công hoặc tự động; phải kiểm soát chất lượng.',
        ],
        example: {
          title: 'Ví dụ áp dụng',
          content:
            'Ảnh kèm mô tả “chó trắng trên cỏ” giúp mô hình học liên hệ từ–ảnh.',
        },
        pitfalls: [
          'Mô hình không phải loại nào cũng bắt buộc có nhãn thủ công; không đồng nhất gán trọng số với gán nhãn.',
        ],
        check: {
          question: 'Gán mô tả cho ảnh là thao tác gì?',
          options: [
            'Gán nhãn dữ liệu.',
            'Tự động đồng nghĩa với triển khai mô hình.',
          ],
          answer: 0,
          explanation:
            'Gán nhãn dữ liệu. Thu thập, làm sạch, mã hóa và gán nhãn là các thao tác khác nhau trong chuẩn bị dữ liệu.',
        },
        takeaway:
          'Thu thập, làm sạch, mã hóa và gán nhãn là các thao tác khác nhau trong chuẩn bị dữ liệu.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 35–42',
            url: '/references/teacher-guide.pdf#page=35',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
        examNote:
          'Câu 89 theo IIG: Yes–No–No. Ghi nhớ khóa này khi thi; kiến thức thực hành vẫn phân biệt gán nhãn thủ công và hỗ trợ gán nhãn tự động.',
      },
      {
        label: 'Vòng đời AI (3 & 4)',
        title: 'Huấn luyện và suy luận',
        summary:
          'Huấn luyện điều chỉnh mô hình từ dữ liệu; suy luận dùng mô hình đã học để tạo đầu ra.',
        bullets: [
          'Huấn luyện lớn có thể tốn nhiều GPU, điện và dữ liệu.',
          'Triển khai cung cấp mô hình cho người dùng hoặc ứng dụng.',
          'Suy luận cũng cần tài nguyên; mức yêu cầu tùy mô hình và tải.',
          'Không phải mọi tác vụ đều cần siêu máy tính ở máy người dùng.',
        ],
        example: {
          title: 'Ví dụ áp dụng',
          content:
            'Dùng một mô hình có sẵn tạo đoạn văn là suy luận, không phải huấn luyện lại.',
        },
        pitfalls: [
          'Đừng gộp yêu cầu phần cứng của huấn luyện lớn với dùng dịch vụ đám mây.',
        ],
        check: {
          question: 'Tạo ảnh bằng mô hình đã huấn luyện thuộc giai đoạn nào?',
          options: ['Suy luận.', 'Luôn là thu thập dữ liệu huấn luyện mới.'],
          answer: 0,
          explanation:
            'Suy luận. Huấn luyện điều chỉnh mô hình từ dữ liệu; suy luận dùng mô hình đã học để tạo đầu ra.',
        },
        takeaway:
          'Huấn luyện điều chỉnh mô hình từ dữ liệu; suy luận dùng mô hình đã học để tạo đầu ra.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 35–42',
            url: '/references/teacher-guide.pdf#page=35',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Phương thức Văn bản & Ảnh',
        title: 'Phương thức Text-to-Text & Text-to-Image',
        summary:
          'Hai phương thức ứng dụng phổ biến nhất của AI tạo sinh trong công việc văn phòng và thiết kế sáng tạo.',
        bullets: [
          'Text-to-Text: Đầu vào là văn bản, đầu ra là văn bản mới (soạn email, tóm tắt báo cáo, dịch thuật, viết mã nguồn, trả lời câu hỏi).',
          'Text-to-Image: Đầu vào là câu lệnh mô tả bằng chữ, đầu ra là hình ảnh mới (logo, tranh nghệ thuật, ảnh chụp sản phẩm, sơ đồ kiến trúc).',
          'Image-to-Image: Đầu vào là ảnh gốc kèm câu lệnh điều chỉnh, đầu ra là ảnh đã được chuyển đổi phong cách hoặc bổ sung chi tiết.',
        ],
        terms: [
          {
            term: 'Text-to-Text',
            definition:
              'Tác vụ nhận đầu vào là văn bản và sinh ra kết quả đầu ra là văn bản.',
          },
          {
            term: 'Text-to-Image',
            definition:
              'Tác vụ nhận đầu vào là văn bản mô tả và sinh ra kết quả là hình ảnh minh họa.',
          },
        ],
        example: {
          title: 'Ứng dụng tiếp thị',
          content:
            "Nhập yêu cầu 'Viết bài quảng cáo cà phê': Text-to-Text. Nhập yêu cầu 'Vẽ một tách cà phê bốc khói trên bàn gỗ lúc sáng sớm': Text-to-Image.",
        },
        pitfalls: [
          'Kỳ vọng công cụ Text-to-Text thuần túy có thể tự render trực tiếp file ảnh độ phân giải cao.',
        ],
        check: {
          question:
            'Một nhà thiết kế nhập đoạn văn bản mô tả logo và nhận lại một bức ảnh minh họa định dạng PNG. Đây là dạng chuyển đổi dữ liệu nào?',
          options: [
            'Text-to-image',
            'Audio-to-text',
            'Text-to-audio',
            'Video-to-text',
          ],
          answer: 0,
          explanation:
            'Đầu vào là câu lệnh chữ (Text) và đầu ra là hình ảnh (Image), do đó đây là tác vụ Text-to-image.',
        },
        takeaway:
          'Text-to-Text phục vụ câu chữ và logic; Text-to-Image phục vụ hình ảnh và đồ họa.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 51–59',
            url: '/references/teacher-guide.pdf#page=51',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Xử lý văn bản',
        title: 'Ba kiểu Tóm tắt: Trích xuất, Trừu tượng & Theo truy vấn',
        summary:
          'AI tạo sinh có thể tóm tắt văn bản theo 3 cách khác nhau tùy vào mục tiêu: giữ nguyên câu gốc, diễn giải lại, hoặc chỉ trả lời đúng trọng tâm câu hỏi.',
        bullets: [
          'Tóm tắt Trích xuất (Extractive): Lấy nguyên văn các câu quan trọng nhất từ tài liệu gốc, ghép lại thành bản tóm tắt — không tạo câu chữ mới.',
          'Tóm tắt Trừu tượng (Abstractive): Đọc hiểu toàn bộ nội dung rồi diễn giải lại bằng câu chữ hoàn toàn mới, súc tích và tự nhiên hơn.',
          'Tóm tắt Theo truy vấn (Query-based): Chỉ trả lời đúng phần thông tin liên quan đến một câu hỏi cụ thể, bỏ qua phần còn lại của tài liệu.',
        ],
        terms: [
          {
            term: 'Tóm tắt Trích xuất (Extractive Summarization)',
            definition:
              'Kỹ thuật chọn và ghép nguyên văn những câu quan trọng nhất từ văn bản gốc.',
          },
          {
            term: 'Tóm tắt Trừu tượng (Abstractive Summarization)',
            definition:
              'Kỹ thuật viết lại nội dung bằng ngôn từ mới, giữ đúng ý nghĩa nhưng không sao chép nguyên câu.',
          },
        ],
        example: {
          title: 'So sánh 3 kiểu tóm tắt',
          content:
            "Với một báo cáo tài chính dài 10 trang: Trích xuất = ghép 5 câu quan trọng nhất nguyên văn; Trừu tượng = viết lại thành 1 đoạn văn mới tóm lược ý chính; Theo truy vấn = chỉ trả lời 'Lợi nhuận quý 3 là bao nhiêu?'",
        },
        pitfalls: [
          'Nhầm lẫn Tóm tắt Trích xuất với Tóm tắt Trừu tượng vì cả hai đều làm ngắn gọn văn bản — điểm khác biệt là có tạo câu chữ MỚI hay không.',
        ],
        check: {
          question:
            'Một AI đọc toàn bộ hợp đồng rồi viết lại bằng 3 câu hoàn toàn mới, diễn đạt lại ý chính bằng lời văn của chính nó. Đây là kiểu tóm tắt nào?',
          options: [
            'Tóm tắt Trích xuất (Extractive)',
            'Tóm tắt Trừu tượng (Abstractive)',
            'Tóm tắt Theo truy vấn (Query-based)',
            'Tóm tắt Ngẫu nhiên',
          ],
          answer: 1,
          explanation:
            'Vì AI tạo ra câu chữ hoàn toàn mới thay vì lấy nguyên văn câu gốc, đây là tóm tắt Trừu tượng (Abstractive).',
        },
        takeaway:
          'Trích xuất = lấy nguyên câu gốc; Trừu tượng = viết lại bằng lời mới; Theo truy vấn = chỉ trả lời đúng câu hỏi.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 51–59',
            url: '/references/teacher-guide.pdf#page=51',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
        examNote:
          'Câu 51: IIG chọn tóm tắt cốt truyện trong 500 từ. Nhớ mục tiêu rút gọn nội dung có sẵn.',
      },
      {
        label: 'Phương thức Âm thanh',
        title: 'Phương thức Âm thanh & Giọng nói (TTS & ASR)',
        summary:
          'Chuyển đổi hai chiều giữa văn bản chữ viết và âm thanh giọng nói phục vụ lồng tiếng, trợ lý ảo và bóc băng ghi âm.',
        bullets: [
          'Text-to-Audio (TTS - Text to Speech): Chuyển kịch bản chữ thành giọng đọc tự nhiên, lồng tiếng video, tạo hiệu ứng âm thanh hoặc sáng tác bài hát (ElevenLabs, Suno).',
          'Audio-to-Text (ASR - Nhận dạng giọng nói): Nghe file âm thanh/giọng nói và tự động chuyển đổi thành văn bản, tạo phụ đề video (OpenAI Whisper).',
          'Tương tác hai chiều: Người dùng nói chuyện với AI bằng giọng nói (Voice Mode) kết hợp cả ASR (để nghe) và TTS (để trả lời bằng giọng nói).',
        ],
        terms: [
          {
            term: 'Text-to-Speech (TTS)',
            definition:
              'Công nghệ tổng hợp tiếng nói nhân tạo từ văn bản chữ viết.',
          },
          {
            term: 'Automatic Speech Recognition (ASR)',
            definition:
              'Công nghệ nhận diện và chuyển đổi giọng nói thành văn bản chữ viết.',
          },
        ],
        example: {
          title: 'Lồng tiếng kịch bản',
          content:
            'Một đạo diễn muốn nghe thử giọng đọc diễn viên cho kịch bản hoạt hình: Dùng công cụ Text-to-Audio (TTS).',
        },
        pitfalls: [
          'Chọn nhầm Audio-to-Text khi mục đích là tạo ra giọng nói thuyết minh từ bài viết có sẵn.',
        ],
        check: {
          question:
            'Công nghệ nào được sử dụng để tự động nghe và chuyển đổi đoạn ghi âm cuộc họp thành văn bản biên bản cuộc họp?',
          options: [
            'Audio-to-Text (ASR)',
            'Text-to-Audio (TTS)',
            'Text-to-Image',
            'Image-to-Video',
          ],
          answer: 0,
          explanation:
            'Audio-to-Text (ASR) nhận đầu vào là âm thanh giọng nói và chuyển đổi thành văn bản chữ viết.',
        },
        takeaway:
          'TTS biến chữ thành tiếng nói; ASR biến tiếng nói thành chữ viết.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 51–59',
            url: '/references/teacher-guide.pdf#page=51',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Phương thức Video',
        title: 'Phương thức Video đa phương tiện',
        summary:
          'Tạo video hoạt cảnh từ kịch bản văn bản hoặc biến một bức ảnh tĩnh thành đoạn clip chuyển động chân thực.',
        bullets: [
          'Text-to-Video: Nhập kịch bản mô tả phân cảnh và các chuyển động để AI tạo đoạn video hoàn chỉnh (Sora, Runway, Kling).',
          'Image-to-Video: Nạp một bức ảnh tĩnh và yêu cầu AI làm chuyển động các chi tiết (nước chảy, mây bay, nhân vật cử động) và điều khiển góc quay camera.',
          'Kiểm soát chuyển động: Sử dụng các tham số điều khiển lia máy (pan), phóng to/thu nhỏ (zoom), góc nghiêng (tilt) và chuyển động chậm (slow-motion).',
        ],
        terms: [
          {
            term: 'Image-to-Video',
            definition:
              'Tác vụ tạo video chuyển động từ một hình ảnh tĩnh đầu vào.',
          },
          {
            term: 'Điều khiển camera (Camera Motion)',
            definition:
              'Các chỉ dẫn thiết lập hướng di chuyển của góc nhìn trong video do AI tạo.',
          },
        ],
        example: {
          title: 'Hoạt hóa ảnh chụp',
          content:
            'Nạp ảnh chụp đỉnh núi Everest và yêu cầu AI tạo video 5 giây góc nhìn flycam bay lượn quanh đỉnh núi: Đây là tác vụ Image-to-Video.',
        },
        pitfalls: [
          'Thiếu mô tả chuyển động có thể khiến video không đúng ý; kết quả còn tùy công cụ và thiết lập.',
        ],
        check: {
          question:
            'Tác vụ nào sau đây nhận một bức ảnh tĩnh của sản phẩm và tạo ra đoạn video ngắn xoay 360 độ quanh sản phẩm đó?',
          options: [
            'Image-to-video',
            'Text-to-text',
            'Audio-to-text',
            'Speech-to-speech',
          ],
          answer: 0,
          explanation:
            'Image-to-video nhận đầu vào là ảnh tĩnh và sinh ra kết quả là video chuyển động tương ứng.',
        },
        takeaway:
          'Image-to-Video thổi hồn chuyển động và góc quay điện ảnh vào những bức ảnh tĩnh.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 51–59',
            url: '/references/teacher-guide.pdf#page=51',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Mô hình chuyên biệt',
        title: 'Mô hình chuyên biệt: OCR & Talking-head',
        summary:
          'Ngoài các phương thức Văn bản/Ảnh/Âm thanh/Video tổng quát, còn có các mô hình AI chuyên biệt cho một tác vụ duy nhất như đọc chữ trong ảnh hay tạo video người nói.',
        bullets: [
          'OCR (Optical Character Recognition — Nhận dạng ký tự quang học): Đầu vào là Hình ảnh chứa chữ viết, đầu ra là Văn bản được trích xuất.',
          'Talking-head (Khuôn mặt người đang nói): Đầu vào là Âm thanh (hoặc văn bản chuyển giọng nói), đầu ra là Video khuôn mặt chuyển động khớp khẩu hình theo lời nói.',
          "Cả hai đều là mô hình 'một nhiệm vụ - một chức năng' (task-specific), khác với các mô hình đa năng như ChatGPT.",
        ],
        terms: [
          {
            term: 'OCR (Nhận dạng ký tự quang học)',
            definition:
              'Công nghệ AI chuyển đổi chữ viết trong hình ảnh/tài liệu quét thành văn bản có thể chỉnh sửa được.',
          },
          {
            term: 'Talking-head (Mô hình khuôn mặt nói)',
            definition:
              'Mô hình AI tạo video khuôn mặt nhân vật cử động môi khớp với âm thanh hoặc văn bản đầu vào.',
          },
        ],
        example: {
          title: 'Ứng dụng thực tế',
          content:
            'Quét hóa đơn giấy để trích xuất số tiền và ngày tháng thành dữ liệu số: dùng OCR. Tạo video đại diện ảo đọc kịch bản bằng nhiều giọng khác nhau: dùng Talking-head.',
        },
        pitfalls: [
          "Nhầm OCR với Text-to-Image vì cả hai đều liên quan đến 'hình ảnh' — OCR đi từ Ảnh ra Văn bản (ngược chiều), không phải tạo ảnh mới.",
        ],
        check: {
          question:
            'Một ứng dụng nhận ảnh chụp danh thiếp và trả về tên, số điện thoại dạng văn bản có thể copy được. Đây là loại mô hình nào?',
          options: [
            'Talking-head',
            'Text-to-Image',
            'OCR (Nhận dạng ký tự quang học)',
            'Diffusion Model',
          ],
          answer: 2,
          explanation:
            'Chuyển đổi chữ trong ảnh thành văn bản là chức năng đặc trưng của OCR.',
        },
        takeaway:
          'OCR: Ảnh chữ → Văn bản. Talking-head: Âm thanh/Văn bản → Video khuôn mặt nói.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 51–59',
            url: '/references/teacher-guide.pdf#page=51',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Cơ chế xử lý',
        title: 'Token và tokenization trong mô hình ngôn ngữ',
        summary:
          'Token là đơn vị mô hình xử lý; có thể là phần từ, từ, ký tự hoặc ký hiệu, tùy bộ mã hóa.',
        bullets: [
          'Số token không bằng số từ trong mọi ngôn ngữ.',
          'Giới hạn ngữ cảnh và đầu ra thường tính bằng token.',
          'Tokenization trong NLP khác với thay PII bằng mã đại diện trong bảo mật.',
        ],
        example: {
          title: 'Ví dụ áp dụng',
          content:
            'Một từ dài có thể bị chia thành nhiều token; nên dùng bộ đếm của mô hình khi cần ước tính.',
        },
        pitfalls: [
          'Không áp dụng tỷ lệ token/từ cố định cho mọi mô hình hoặc tiếng Việt.',
        ],
        check: {
          question: 'Có thể xem một token luôn bằng một từ không?',
          options: [
            'Không, tùy văn bản và bộ mã hóa.',
            'Có, kể cả mọi ngôn ngữ.',
          ],
          answer: 0,
          explanation:
            'Không, tùy văn bản và bộ mã hóa. Token là đơn vị mô hình xử lý; có thể là phần từ, từ, ký tự hoặc ký hiệu, tùy bộ mã hóa.',
        },
        takeaway:
          'Token là đơn vị mô hình xử lý; có thể là phần từ, từ, ký tự hoặc ký hiệu, tùy bộ mã hóa.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 43–50',
            url: '/references/teacher-guide.pdf#page=43',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Giới hạn bộ nhớ',
        title: 'Cửa sổ ngữ cảnh (Context Window)',
        summary:
          'Cửa sổ ngữ cảnh là giới hạn lượng token tối đa mà mô hình có thể ghi nhớ và xử lý đồng thời trong một lượt tương tác.',
        bullets: [
          'Bao gồm cả đầu vào và đầu ra: Tổng số token của câu lệnh prompt + tài liệu đính kèm + câu trả lời của AI phải nằm trong giới hạn này.',
          'Hiện tượng tràn ngữ cảnh: Khi cuộc trò chuyện quá dài vượt qua Context Window, AI sẽ quên các yêu cầu và thông tin đã cung cấp ở phần đầu.',
          'Giải pháp quản lý: Tóm tắt lại nội dung định kỳ hoặc chia nhỏ tài liệu lớn thành nhiều phần trước khi nạp vào AI.',
        ],
        terms: [
          {
            term: 'Cửa sổ ngữ cảnh (Context Window)',
            definition:
              'Số lượng token tối đa mà mô hình AI có thể duy trì trong bộ nhớ làm việc cùng lúc.',
          },
        ],
        example: {
          title: 'Quên yêu cầu ban đầu',
          content:
            'Sau khi trao đổi 50 tin nhắn dài, bạn thấy AI không còn xưng hô theo đúng vai trò bạn đã yêu cầu ở tin nhắn số 1: Do cuộc trò chuyện đã vượt quá Context Window.',
        },
        pitfalls: [
          'Nạp tài liệu dài hàng nghìn trang vào một mô hình có cửa sổ ngữ cảnh nhỏ mà không kiểm tra giới hạn.',
        ],
        check: {
          question:
            'Hiện tượng gì xảy ra khi độ dài cuộc trò chuyện của bạn vượt quá dung lượng Cửa sổ ngữ cảnh (Context Window) của mô hình?',
          options: [
            'Mô hình sẽ bắt đầu quên hoặc bỏ qua các thông tin và chỉ thị ở phần đầu cuộc trò chuyện',
            'Máy tính của bạn sẽ bị tắt nguồn',
            'Chatbot sẽ tự động chuyển sang giao diện màu đen',
            'Tài khoản của bạn bị xóa vĩnh viễn',
          ],
          answer: 0,
          explanation:
            'Khi vượt quá Context Window, các token ở phần đầu sẽ bị trượt ra khỏi bộ nhớ làm việc của mô hình.',
        },
        takeaway:
          'Giữ cuộc trò chuyện tập trung để tránh hiện tượng tràn cửa sổ ngữ cảnh.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 43–50',
            url: '/references/teacher-guide.pdf#page=43',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Xác suất & Tham số',
        title: 'Next-Token Prediction & Tham số Nhiệt độ',
        summary:
          'Mô hình ngôn ngữ tự hồi quy dự đoán token tiếp theo; Temperature điều chỉnh độ ngẫu nhiên khi chọn token, không bảo đảm sáng tạo hay chính xác.',
        bullets: [
          'Next-Token Prediction: Tại mỗi bước, mô hình tính xác suất cho hàng nghìn từ tiếp theo và chọn từ phù hợp nhất.',
          'Nhiệt độ thấp (Temperature ~ 0 đến 0.2): AI chọn các từ có xác suất cao nhất; câu trả lời mang tính tất định, chính xác, ít biến đổi (phù hợp cho lập trình, dữ liệu tài chính).',
          'Nhiệt độ cao (Temperature ~ 0.7 đến 1.0): AI chọn cả các từ có xác suất thấp hơn; câu trả lời giàu trí tưởng tượng, phong phú, đa dạng (phù hợp viết văn, sáng tạo ý tưởng).',
        ],
        terms: [
          {
            term: 'Next-Token Prediction',
            definition:
              'Cơ chế dự đoán từ hoặc token kế tiếp dựa trên toàn bộ chuỗi từ trước đó.',
          },
          {
            term: 'Nhiệt độ (Temperature)',
            definition:
              'Tham số điều chỉnh mức độ ngẫu nhiên và sáng tạo của mô hình AI.',
          },
        ],
        example: {
          title: 'Thiết lập cho công việc',
          content:
            'Viết code Python giải thuật toán: Đặt Temperature = 0. Viết 10 ý tưởng kịch bản quảng cáo hài hước: Đặt Temperature = 0.9.',
        },
        pitfalls: [
          'Để nhiệt độ cao khi yêu cầu AI tính toán số liệu kế toán hoặc trích xuất số liệu hợp đồng.',
        ],
        check: {
          question:
            'Khi bạn cần AI trích xuất dữ liệu tài chính chính xác tuyệt đối và nhất quán giữa các lần chạy, bạn nên thiết lập tham số Nhiệt độ (Temperature) như thế nào?',
          options: [
            'Hạ thấp nhiệt độ về mức gần bằng 0 (Low Temperature)',
            'Tăng nhiệt độ lên mức tối đa 2.0',
            'Tắt kết nối Internet',
            'Gõ câu lệnh bằng chữ in hoa',
          ],
          answer: 0,
          explanation:
            'Nhiệt độ thấp (gần 0) giúp mô hình chọn các token có xác suất cao nhất, đảm bảo tính tất định và chính xác cao.',
        },
        takeaway:
          'Nhiệt độ thấp cho tính chính xác; Nhiệt độ cao cho sự sáng tạo.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 43–50',
            url: '/references/teacher-guide.pdf#page=43',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Phần cứng AI',
        title: 'GPU, bộ nhớ và tài nguyên chạy mô hình',
        summary:
          'GPU hỗ trợ tính toán song song; bộ nhớ, nguồn điện và tải công việc cũng quyết định khả năng chạy mô hình.',
        bullets: [
          'Huấn luyện mô hình lớn thường cần GPU mạnh và nhiều năng lượng.',
          'VRAM/RAM cần đủ chứa mô hình và dữ liệu; nguồn điện cần đủ tải.',
          'Dùng cloud không đồng nghĩa máy khách phải có GPU cao cấp.',
          'Chọn phần cứng theo mô hình và tốc độ mục tiêu.',
        ],
        example: {
          title: 'Ví dụ áp dụng',
          content:
            'Máy nhẹ vẫn có thể truy cập dịch vụ AI chạy trên máy chủ từ xa.',
        },
        pitfalls: [
          'Không có một cặp linh kiện luôn quan trọng nhất cho mọi cách triển khai.',
        ],
        check: {
          question: 'Máy khách dùng AI cloud có luôn cần GPU cao cấp không?',
          options: [
            'Không; tác vụ tính toán chính có thể chạy ở máy chủ.',
            'Có, nếu không thì không thể dùng AI.',
          ],
          answer: 0,
          explanation:
            'Không; tác vụ tính toán chính có thể chạy ở máy chủ. GPU hỗ trợ tính toán song song; bộ nhớ, nguồn điện và tải công việc cũng quyết định khả năng chạy mô hình.',
        },
        takeaway:
          'GPU hỗ trợ tính toán song song; bộ nhớ, nguồn điện và tải công việc cũng quyết định khả năng chạy mô hình.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 35–42',
            url: '/references/teacher-guide.pdf#page=35',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
          {
            title: 'Bài tập tài nguyên — trang PDF 41',
            url: '/references/practice-exercises.pdf#page=41',
            note: 'Tách dùng AI với huấn luyện/vận hành lớn.',
          },
        ],
      },
      {
        label: 'Môi trường & Tinh chỉnh',
        title: 'Internet, dữ liệu và tùy biến',
        summary:
          'Yêu cầu internet và dữ liệu phụ thuộc cách triển khai; tùy biến trợ lý không đồng nghĩa huấn luyện lại mô hình.',
        bullets: [
          'Cloud thường cần kết nối mạng; mô hình local có thể chạy ngoại tuyến nếu đã có đủ tài nguyên.',
          'Hướng dẫn, template và tài liệu tham chiếu có thể tùy biến phản hồi.',
          'Fine-tuning điều chỉnh trọng số bằng dữ liệu huấn luyện bổ sung, khác thêm prompt.',
        ],
        example: {
          title: 'Ví dụ áp dụng',
          content:
            'Muốn email đúng mẫu: thử hướng dẫn và template trước khi quyết định fine-tune.',
        },
        pitfalls: [
          'Đừng khẳng định mọi huấn luyện cần internet công cộng hay mọi tùy biến cần fine-tune.',
        ],
        check: {
          question:
            'Đưa template vào prompt có phải tự động fine-tuning không?',
          options: [
            'Không; đó là thêm bối cảnh/hướng dẫn.',
            'Có; mọi prompt đều thay trọng số mô hình.',
          ],
          answer: 0,
          explanation:
            'Không; đó là thêm bối cảnh/hướng dẫn. Yêu cầu internet và dữ liệu phụ thuộc cách triển khai; tùy biến trợ lý không đồng nghĩa huấn luyện lại mô hình.',
        },
        takeaway:
          'Yêu cầu internet và dữ liệu phụ thuộc cách triển khai; tùy biến trợ lý không đồng nghĩa huấn luyện lại mô hình.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 69–78',
            url: '/references/teacher-guide.pdf#page=69',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
          {
            title: 'Bài tập tài nguyên — trang PDF 41',
            url: '/references/practice-exercises.pdf#page=41',
            note: 'Tách dùng AI với huấn luyện/vận hành lớn.',
          },
        ],
        examNote:
          'Câu 102: IIG chọn đầu ra không đáng tin cậy và chưa có tiêu chuẩn chung. Khi dùng công cụ, vẫn kiểm tra giới hạn ngữ cảnh và đầu ra.',
      },
      {
        label: 'Hệ sinh thái',
        title: 'Hệ sinh thái & Trợ lý tùy biến (Custom GPTs)',
        summary:
          'Hệ sinh thái AI hiện đại cung cấp các nền tảng đa dạng và cho phép người dùng tùy biến trợ lý riêng (Custom GPTs / Google Gems).',
        bullets: [
          'Trợ lý đa năng hàng đầu: OpenAI ChatGPT, Google Gemini, Microsoft Copilot, Anthropic Claude.',
          'Trợ lý chuyên trách tùy biến: Custom GPTs (OpenAI) và Google Gems (Google) cho phép người dùng nạp tài liệu riêng và thiết lập hướng dẫn sư phạm/nghiệp vụ cố định.',
          'Không cần lập trình: Bất kỳ ai cũng có thể tạo Custom GPT bằng ngôn ngữ tự nhiên để hỗ trợ chấm bài, giải toán hay hỗ trợ khách hàng.',
        ],
        terms: [
          {
            term: 'Custom GPTs',
            definition:
              'Phiên bản ChatGPT được người dùng tùy chỉnh với các chỉ dẫn, tài liệu tri thức và tác vụ chuyên biệt.',
          },
          {
            term: 'Google Gems',
            definition:
              'Các phiên bản tùy chỉnh của Google Gemini được thiết kế riêng cho các chủ đề và quy trình cụ thể.',
          },
        ],
        example: {
          title: 'Gia sư Sinh học',
          content:
            "Một giáo viên tạo 'Gia sư Sinh học 10': Nạp toàn bộ sách giáo khoa và ra lệnh 'Chỉ hướng dẫn học sinh tư duy từng bước, không cho ngay đáp án bài tập'.",
        },
        pitfalls: [
          'Nghĩ rằng Custom GPT bắt buộc phải biết viết mã Python phức tạp mới tạo được.',
        ],
        check: {
          question:
            'Tính năng nào cho phép người dùng tạo một trợ lý AI riêng với các tài liệu tài liệu và hướng dẫn chuyên biệt cho một môn học mà không cần lập trình?',
          options: [
            'Custom GPTs hoặc Google Gems',
            'Bảng điều khiển Control Panel của Windows',
            'Trình soạn thảo văn bản Notepad',
            'Phần mềm dọn rác máy tính',
          ],
          answer: 0,
          explanation:
            'Custom GPTs và Google Gems được thiết kế để mọi người dùng đều có thể tạo trợ lý AI chuyên trách theo nhu cầu riêng.',
        },
        takeaway:
          'Tạo Custom GPTs hoặc Google Gems để xây dựng trợ lý AI chuyên môn hóa cho riêng bạn.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 60–68',
            url: '/references/teacher-guide.pdf#page=60',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Công cụ sáng tạo',
        title: 'Công cụ tạo hình ảnh & Thiết kế chuyên dụng',
        summary:
          'Bên cạnh các chatbot đa năng, có một nhóm công cụ AI chuyên về tạo và thiết kế hình ảnh, mỗi công cụ phù hợp với một nhu cầu khác nhau.',
        bullets: [
          'Stable Diffusion: Mô hình khuếch tán mã nguồn mở chuyên tạo hình ảnh nghệ thuật/chân thực từ văn bản mô tả (text-to-image thuần túy).',
          'Adobe Firefly: Công cụ tạo/chỉnh sửa hình ảnh AI của Adobe, tích hợp sẵn trong Photoshop/Illustrator, huấn luyện trên kho ảnh có bản quyền hợp pháp.',
          'Canva (Magic Media): Nền tảng thiết kế kéo-thả tích hợp AI tạo ảnh, phù hợp cho người không chuyên tạo nhanh banner, áp phích, bài đăng mạng xã hội.',
          'Adobe Express: Công cụ thiết kế nhanh của Adobe, tạo hình ảnh và phông chữ cách điệu, hỗ trợ lên lịch đăng bài mạng xã hội trực tiếp.',
        ],
        terms: [
          {
            term: 'Stable Diffusion',
            definition:
              'Mô hình khuếch tán (diffusion) mã nguồn mở, chuyên tạo hình ảnh chất lượng cao từ mô tả văn bản.',
          },
          {
            term: 'Adobe Firefly',
            definition:
              'Bộ công cụ AI tạo sinh của Adobe, tích hợp trong hệ sinh thái Creative Cloud, dữ liệu huấn luyện có nguồn gốc bản quyền rõ ràng.',
          },
        ],
        example: {
          title: 'Chọn đúng công cụ',
          content:
            'Cần một logo nhanh cho câu lạc bộ học sinh, không rành thiết kế: dùng Canva. Cần tạo hàng loạt concept-art nghệ thuật độ phân giải cao: dùng Stable Diffusion.',
        },
        pitfalls: [
          'Nghĩ rằng mọi công cụ tạo ảnh AI đều giống nhau — thực tế mỗi công cụ khác nhau về mức độ kiểm soát sáng tạo, nguồn dữ liệu huấn luyện và đối tượng người dùng mục tiêu.',
        ],
        check: {
          question:
            'Một câu lạc bộ học sinh cần nhanh chóng tạo một banner quảng cáo sự kiện mà không ai trong nhóm biết thiết kế chuyên nghiệp. Công cụ nào phù hợp nhất?',
          options: [
            'Stable Diffusion',
            'Canva',
            'Kiến trúc Transformer',
            'VAE',
          ],
          answer: 1,
          explanation:
            'Canva được thiết kế cho người không chuyên, thao tác kéo-thả đơn giản, rất phù hợp để tạo banner nhanh.',
        },
        takeaway:
          'Chọn công cụ tạo ảnh theo nhu cầu: Canva/Adobe Express cho thiết kế nhanh, Stable Diffusion/Adobe Firefly cho tạo ảnh chuyên sâu.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 97–105',
            url: '/references/teacher-guide.pdf#page=97',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Nền tảng doanh nghiệp',
        title: 'Công cụ hỗ trợ doanh nghiệp và quy trình',
        summary:
          'Chọn công cụ theo nhiệm vụ, dữ liệu và khả năng tích hợp; không suy ra tác vụ độc quyền chỉ từ tên thương hiệu.',
        bullets: [
          'Phát triển phần mềm có thể dùng trợ lý mã hoặc hệ thống nhiều vai trò.',
          'Thiết kế poster cần công cụ hỗ trợ bố cục/ảnh.',
          'Kiểm tra công cụ thật sự có quyền truy cập tệp, API hay dữ liệu trước khi giao việc.',
          'Tên họ sản phẩm không mô tả đầy đủ mọi phiên bản.',
        ],
        example: {
          title: 'Ví dụ áp dụng',
          content:
            'Bài ghép công cụ dùng công dụng tiêu biểu; thực tế cần kiểm tra phiên bản và chức năng.',
        },
        pitfalls: [
          'Không mặc định MetaGPT là công cụ chuyên mạng xã hội hoặc mọi Copilot đều có cùng tính năng.',
        ],
        check: {
          question: 'Cần kiểm tra gì trước khi giao phân tích bảng tính?',
          options: [
            'Công cụ có hỗ trợ đọc tệp và được phép truy cập dữ liệu.',
            'Chỉ cần tên sản phẩm có chữ AI.',
          ],
          answer: 0,
          explanation:
            'Công cụ có hỗ trợ đọc tệp và được phép truy cập dữ liệu. Chọn công cụ theo nhiệm vụ, dữ liệu và khả năng tích hợp; không suy ra tác vụ độc quyền chỉ từ tên thương hiệu.',
        },
        takeaway:
          'Chọn công cụ theo nhiệm vụ, dữ liệu và khả năng tích hợp; không suy ra tác vụ độc quyền chỉ từ tên thương hiệu.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 51–68',
            url: '/references/teacher-guide.pdf#page=51',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
        examNote:
          'Câu 13 theo IIG: Microsoft Copilot. Câu 96: ghi nhớ các cặp công cụ–nhiệm vụ trong khóa. Khi áp dụng, kiểm tra tính năng sản phẩm đang dùng.',
      },
      {
        label: 'Ứng dụng doanh nghiệp',
        title: 'Tác vụ Doanh nghiệp & Kỹ thuật',
        summary:
          'AI tạo sinh mang lại hiệu suất vượt trội trong soạn thảo tài liệu kinh doanh, sinh mã lập trình và giải thích cấu trúc tệp XML.',
        bullets: [
          'Soạn thảo kinh doanh: Viết bản nháp đề xuất kinh doanh (Business Proposals), tóm tắt biên bản họp, soạn email chăm sóc khách hàng.',
          'Lập trình & Kỹ thuật: Viết mã nguồn Python, JavaScript, SQL; gỡ lỗi (debugging) và tạo dữ liệu mẫu thử nghiệm.',
          'Hệ thống quản lý học tập (LMS): Giải thích cách các tệp XML được sử dụng để cấu hình dữ liệu khóa học và chuyển giao tài nguyên giữa các nền tảng.',
        ],
        terms: [
          {
            term: 'Đề xuất kinh doanh (Business Proposal)',
            definition:
              'Văn bản trình bày giải pháp, kế hoạch và chi phí để thuyết phục khách hàng hoặc đối tác.',
          },
          {
            term: 'XML (eXtensible Markup Language)',
            definition:
              'Ngôn ngữ đánh dấu mở rộng dùng để lưu trữ và truyền tải dữ liệu có cấu trúc.',
          },
        ],
        example: {
          title: 'Giải thích tệp XML trong LMS',
          content:
            'Quản trị viên LMS mới vào nghề dùng AI giải thích cấu trúc tệp XML để hiểu rõ cách bài giảng trực tuyến được đóng gói và chia sẻ.',
        },
        pitfalls: [
          'Gửi thẳng bản nháp do AI viết cho đối tác mà không có bước rà soát, chỉnh sửa số liệu của con người.',
        ],
        check: {
          question:
            'Trong môi trường giáo dục trực tuyến (LMS), AI tạo sinh có thể hỗ trợ quản trị viên mới bằng cách nào?',
          options: [
            'Tạo tài liệu hướng dẫn và giải thích cách các tệp XML được dùng để cấu hình dữ liệu khóa học',
            'Tự động thay thế giáo viên đứng lớp hoàn toàn',
            'Tắt máy chủ khi có sự cố mạng',
            'Tự động in tất cả tài liệu ra giấy',
          ],
          answer: 0,
          explanation:
            'AI tạo sinh rất xuất sắc trong việc giải thích các khái niệm kỹ thuật và định dạng dữ liệu có cấu trúc như XML.',
        },
        takeaway:
          'AI tạo sinh là trợ lý đắc lực giúp tăng tốc soạn thảo văn bản và giải thích kỹ thuật.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 51–68',
            url: '/references/teacher-guide.pdf#page=51',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Nhận diện lỗi & Tiêu chí',
        title: 'Chọn công cụ theo nhiệm vụ',
        summary:
          'So sánh đúng chức năng, chất lượng, quyền riêng tư, chi phí và khả năng sử dụng trước khi chọn công cụ.',
        bullets: [
          'Xác định đầu vào và đầu ra cần có.',
          'Cân nhắc dễ dùng, tùy chỉnh, hỗ trợ, cập nhật và giới hạn sử dụng.',
          'Tốc độ, phong cách và tích hợp có thể quan trọng tùy nhiệm vụ.',
          'Kiểm tra output mẫu: ảnh có thể lỗi chi tiết; văn bản có thể sai dữ kiện.',
        ],
        example: {
          title: 'Ví dụ áp dụng',
          content:
            'Ma trận giáo dục gợi ý: đúng chức năng 30%, chất lượng 25%, bảo mật 20% trở lên, chi phí 15%, dễ dùng 10%; điều chỉnh theo bối cảnh.',
        },
        pitfalls: [
          'Ba lựa chọn trong một câu thi không phải toàn bộ tiêu chí ra quyết định ngoài thực tế.',
        ],
        check: {
          question: 'Bước đầu khi chọn công cụ là gì?',
          options: [
            'Xác định nhiệm vụ và loại input/output.',
            'Chỉ tìm công cụ tạo ảnh đẹp nhất.',
          ],
          answer: 0,
          explanation:
            'Xác định nhiệm vụ và loại input/output. So sánh đúng chức năng, chất lượng, quyền riêng tư, chi phí và khả năng sử dụng trước khi chọn công cụ.',
        },
        takeaway:
          'So sánh đúng chức năng, chất lượng, quyền riêng tư, chi phí và khả năng sử dụng trước khi chọn công cụ.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 60–68',
            url: '/references/teacher-guide.pdf#page=60',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
    ],
  },
  prompting: {
    description:
      'Viết và tinh chỉnh prompt; phân biệt ví dụ mẫu, chuỗi prompt, hỏi làm rõ, nội dung ảnh và video.',
    slides: [
      {
        label: 'Cấu trúc',
        title: 'Cấu trúc prompt: vai trò, nhiệm vụ và ngữ cảnh',
        summary:
          'Prompt rõ giúp AI biết cần làm gì, dùng dữ liệu nào, cho ai và theo tiêu chí nào; không có một số thành phần bắt buộc cho mọi tác vụ.',
        bullets: [
          'Mô hình R–T–C–D–F–C: Role, Task, Context, Data, Format, Criteria.',
          'Nêu nguồn đầu vào, đối tượng và ràng buộc quan trọng.',
          'Có thể bắt đầu ngắn rồi bổ sung phần còn thiếu theo output.',
        ],
        example: {
          title: 'Ví dụ áp dụng',
          content:
            'Đóng vai giáo viên; tạo phiếu học tập từ đoạn sách này; cho lớp 7; gồm 5 câu và đáp án; không thêm dữ kiện ngoài nguồn.',
        },
        pitfalls: [
          'Persona không bảo đảm kiến thức chuyên môn đúng; prompt dài không mặc nhiên tốt.',
        ],
        check: {
          question: 'Vai trò trong prompt có tác dụng gì?',
          options: [
            'Định hướng góc nhìn và cách diễn đạt.',
            'Bảo đảm AI không thể sai.',
          ],
          answer: 0,
          explanation:
            'Định hướng góc nhìn và cách diễn đạt. Prompt rõ giúp AI biết cần làm gì, dùng dữ liệu nào, cho ai và theo tiêu chí nào; không có một số thành phần bắt buộc cho mọi tác vụ.',
        },
        takeaway:
          'Prompt rõ giúp AI biết cần làm gì, dùng dữ liệu nào, cho ai và theo tiêu chí nào; không có một số thành phần bắt buộc cho mọi tác vụ.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 79–86',
            url: '/references/teacher-guide.pdf#page=79',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
        examNote:
          'Câu 45: ghép các phần theo nhãn IIG. Phân biệt vai trò, phong cách, nhiệm vụ và dữ liệu khi tự soạn prompt.',
      },
      {
        label: 'Định hình Persona',
        title: 'Kỹ thuật Gán vai trò chuyên gia',
        summary:
          'Yêu cầu AI đóng vai một chuyên gia cụ thể giúp định hình vốn từ, phong cách tư duy và độ sâu chuyên môn của câu trả lời.',
        bullets: [
          "Thiết lập góc nhìn chuyên môn: 'Bạn là chuyên gia dinh dưỡng thể thao', 'Bạn là kiểm toán viên kỳ cựu'.",
          'Kích hoạt vốn từ chuyên ngành: Gán vai trò giúp mô hình ưu tiên các mẫu ngôn ngữ chuyên nghiệp phù hợp với lĩnh vực đó.',
          'Tránh câu trả lời mơ hồ: Persona rõ ràng giúp AI không trả lời theo kiểu bách khoa toàn thư chung chung.',
        ],
        terms: [
          {
            term: 'Persona (Hình mẫu nhân vật)',
            definition:
              'Tính cách, phong cách và chuyên môn giả định mà người dùng yêu cầu AI đóng vai.',
          },
          {
            term: 'Role-based Prompting',
            definition:
              'Kỹ thuật gán vai trò cụ thể cho AI trước khi giao nhiệm vụ.',
          },
        ],
        example: {
          title: 'Tư vấn dinh dưỡng',
          content:
            "Thay vì hỏi 'Nên ăn gì sau khi tập?', hãy gán vai trò: 'Bạn là chuyên gia dinh dưỡng thể thao. Hãy gợi ý thực đơn phục hồi cơ bắp sau buổi chạy 10km cho vận động viên bán chuyên.'",
        },
        pitfalls: [
          'Gán hai vai trò mâu thuẫn nhau trong cùng một câu lệnh (ví dụ: vừa là luật sư khắt khe vừa là diễn viên hài hước).',
        ],
        check: {
          question:
            'Lợi ích lớn nhất của việc gán vai trò (Persona) cho AI trong câu lệnh prompt là gì?',
          options: [
            'Định hình góc nhìn chuyên môn, phong cách tư duy và vốn từ chuyên sâu cho câu trả lời',
            'Giúp AI chạy nhanh gấp đôi',
            'Giúp máy tính không bị nóng',
            'Tự động xóa lịch sử trò chuyện',
          ],
          answer: 0,
          explanation:
            'Gán vai trò giúp mô hình kích hoạt đúng vùng tri thức và áp dụng văn phong của chuyên gia tương ứng.',
        },
        takeaway:
          'Cho AI một vai trò để nhận lại câu trả lời mang tầm chuyên gia.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 116–124',
            url: '/references/teacher-guide.pdf#page=116',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Phân hóa đối tượng',
        title: 'Phân hóa theo Trình độ người đọc',
        summary:
          'Xác định rõ đối tượng tiếp nhận giúp AI lựa chọn độ phức tạp của ngôn từ, cấu trúc câu và các ví dụ minh họa trực quan phù hợp.',
        bullets: [
          'Trẻ em tiểu học (Lớp 3): Sử dụng câu chuyện ngụ ngôn, nhân hóa đồ vật, ví dụ sinh động (ví dụ: bài học về sự ra đời của ô tô).',
          'Học sinh lớp 9: Sử dụng các ví dụ thực tế liên quan đến sở thích lứa tuổi (ví dụ: dùng góc nghiêng mái nhà và cần cẩu để giải thích hàm Cosin).',
          'Chuyên gia kỹ thuật: Sử dụng thuật ngữ chuyên ngành chính xác, công thức toán học và dẫn chứng số liệu chặt chẽ.',
        ],
        terms: [
          {
            term: 'Đối tượng mục tiêu (Target Audience)',
            definition:
              'Nhóm người sẽ đọc hoặc tiếp nhận nội dung do AI tạo ra.',
          },
        ],
        example: {
          title: 'Giải thích hiện tượng quang hợp',
          content:
            "Cho học sinh lớp 1: 'Cây xanh dùng ánh nắng mặt trời như chiếc bếp nấu ăn để tạo thức ăn cho lá cây'. Cho sinh viên sinh học: Giải thích chu trình Calvin và phản ứng sáng.",
        },
        pitfalls: [
          'Không nêu rõ đối tượng khiến AI giải thích một khái niệm đơn giản bằng văn phong học thuật cao cấp khó hiểu.',
        ],
        check: {
          question:
            'Để tạo một bài giảng về sự phát minh ra ô tô cho học sinh lớp 3, kỹ thuật prompt nào sau đây là phù hợp nhất?',
          options: [
            'Chỉ định rõ đối tượng là học sinh lớp 3 và yêu cầu dùng ngôn từ đơn giản, kể chuyện sinh động',
            'Yêu cầu AI viết bằng mã giả Python',
            'Yêu cầu AI trích dẫn các tài liệu kỹ thuật bằng tiếng Đức',
            'Chạy câu lệnh nhiều lần để văn bản dài ra',
          ],
          answer: 0,
          explanation:
            'Chỉ định rõ đối tượng mục tiêu giúp AI tự động điều chỉnh độ khó của từ vựng và sử dụng hình thức kể chuyện gần gũi.',
        },
        takeaway:
          'Nói rõ người nghe là ai để AI chọn đúng ngôn ngữ và ví dụ phù hợp.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 116–124',
            url: '/references/teacher-guide.pdf#page=116',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Kỹ thuật cơ bản',
        title: 'Kỹ thuật Zero-shot Prompting',
        summary:
          'Zero-shot Prompting là việc ra lệnh trực tiếp cho AI thực hiện nhiệm vụ mà không cung cấp bất kỳ ví dụ mẫu minh họa nào.',
        bullets: [
          'Đặc điểm: Câu lệnh ngắn gọn, đi thẳng vào yêu cầu nhiệm vụ.',
          'Trường hợp sử dụng tối ưu: Các câu hỏi kiến thức phổ thông, tra cứu định nghĩa, tóm tắt đoạn văn đơn giản, dịch câu thông dụng.',
          'Ưu điểm: Nhanh chóng, tiết kiệm token ngữ cảnh, không mất công chuẩn bị dữ liệu mẫu.',
        ],
        terms: [
          {
            term: 'Zero-shot Prompting',
            definition:
              'Kỹ thuật yêu cầu mô hình AI thực hiện nhiệm vụ ngay lập tức mà không đưa ra bất kỳ ví dụ mẫu nào.',
          },
        ],
        example: {
          title: 'Dịch menu cà phê tại Đức',
          content:
            "'Hãy dịch câu sau sang tiếng Đức: Một mocha latte, làm ơn.' -> AI trả về ngay: 'Einen Mokka Latte, bitte.'",
        },
        pitfalls: [
          'Sử dụng Zero-shot khi yêu cầu định dạng đầu ra phức tạp hoặc phân loại dữ liệu theo tiêu chuẩn riêng của công ty.',
        ],
        check: {
          question:
            "Khi bạn nhập câu lệnh 'Tóm tắt bài báo sau thành 3 ý chính' mà không kèm theo bất kỳ bài mẫu nào, bạn đang sử dụng kỹ thuật gì?",
          options: [
            'Zero-shot Prompting',
            'Few-shot Prompting',
            'Fine-tuning',
            'Reverse Prompting',
          ],
          answer: 0,
          explanation:
            'Zero-shot là kỹ thuật ra lệnh trực tiếp cho mô hình mà không cần cung cấp các ví dụ mẫu minh họa trước.',
        },
        takeaway:
          'Zero-shot phù hợp cho các nhiệm vụ thông thường, nhanh gọn và quen thuộc.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 135–144',
            url: '/references/teacher-guide.pdf#page=135',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Kỹ thuật mẫu',
        title: 'One-shot và few-shot: đếm ví dụ mẫu',
        summary:
          'Shot được nhận diện qua ví dụ làm mẫu cho nhiệm vụ, không qua độ dài prompt hoặc số ràng buộc.',
        bullets: [
          'Zero-shot: không đưa ví dụ mẫu.',
          'One-shot: một ví dụ; few-shot: một vài ví dụ theo cách phân loại của bài học.',
          'Ví dụ cần thể hiện kiểu đầu vào và đầu ra muốn AI làm theo.',
          'Một ảnh tham chiếu không tự động chứng minh few-shot.',
        ],
        example: {
          title: 'Ví dụ áp dụng',
          content:
            '“Rất tốt → tích cực; rất tệ → tiêu cực; hãy phân loại câu mới” cung cấp mẫu nhiệm vụ.',
        },
        pitfalls: [
          'Thêm “số từ 1 đến 10” là ràng buộc phạm vi, không phải một shot.',
        ],
        check: {
          question:
            'Prompt “Viết mã Python sinh số từ 1 đến 10” có một ví dụ làm mẫu không?',
          options: [
            'Không; chỉ có yêu cầu và giới hạn phạm vi.',
            'Có; vì có một khoảng số.',
          ],
          answer: 0,
          explanation:
            'Không; chỉ có yêu cầu và giới hạn phạm vi. Shot được nhận diện qua ví dụ làm mẫu cho nhiệm vụ, không qua độ dài prompt hoặc số ràng buộc.',
        },
        takeaway:
          'Shot được nhận diện qua ví dụ làm mẫu cho nhiệm vụ, không qua độ dài prompt hoặc số ràng buộc.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 135–144',
            url: '/references/teacher-guide.pdf#page=135',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
        examNote:
          'Câu 92 và 140: dùng các cặp/nhãn IIG khi làm câu hỏi cố định. Khi học kỹ thuật, đếm ví dụ mẫu minh họa nhiệm vụ để nhận diện shot.',
      },
      {
        label: 'Tư duy từng bước',
        title: 'Chain-of-Thought (Chuỗi tư duy CoT)',
        summary:
          'Kỹ thuật Chain-of-Thought hướng dẫn AI chia nhỏ bài toán và trình bày từng bước suy luận trung gian trước khi đưa ra kết quả cuối.',
        bullets: [
          "Câu thần chú kích hoạt: Thêm câu lệnh 'Hãy suy nghĩ từng bước' (Let's think step by step).",
          'Nâng cao độ chính xác: Giúp mô hình không đưa ra kết luận vội vàng theo trực giác xác suất đơn thuần.',
          'Minh bạch hóa lập luận: Giúp người dùng nhìn rõ từng bước giải để phát hiện chính xác vị trí sai sót nếu có.',
        ],
        terms: [
          {
            term: 'Chain-of-Thought (CoT)',
            definition:
              'Kỹ thuật prompt yêu cầu mô hình tạo ra chuỗi các bước suy luận trung gian trước khi trả lời.',
          },
        ],
        example: {
          title: 'Kích hoạt CoT',
          content:
            "'Một cửa hàng có 20 quả táo, bán đi một nửa, sau đó nhập thêm 5 quả. Hãy suy nghĩ từng bước và cho biết cửa hàng còn bao nhiêu quả?'",
        },
        pitfalls: [
          'Hỏi thẳng đáp số của bài toán logic phức tạp mà không yêu cầu AI giải thích từng bước.',
        ],
        check: {
          question:
            'Cụm từ nào sau đây trong câu lệnh giúp kích hoạt khả năng suy luận từng bước (Chain-of-Thought) của mô hình AI?',
          options: [
            "'Hãy suy nghĩ từng bước' (Let's think step by step)",
            "'Hãy trả lời thật nhanh trong 1 giây'",
            "'Hãy dùng phông chữ màu xanh'",
            "'Hãy đóng tab trình duyệt'",
          ],
          answer: 0,
          explanation:
            "Câu lệnh 'Hãy suy nghĩ từng bước' kích hoạt chuỗi suy luận logic trung gian (CoT), giúp tăng độ chính xác của câu trả lời.",
        },
        takeaway:
          "'Hãy suy nghĩ từng bước' giúp giải quyết chính xác các bài toán logic và số học phức tạp.",
        sources: [
          {
            title: 'Teacher Guide — trang PDF 135–144',
            url: '/references/teacher-guide.pdf#page=135',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Ứng dụng CoT',
        title: 'Quy trình dàn ý, rà soát rồi viết',
        summary:
          'Làm việc theo bước giúp kiểm soát nội dung; tên kỹ thuật còn phụ thuộc cách tổ chức các lượt tương tác.',
        bullets: [
          'Trong câu 98, IIG chọn CoT theo cách trình bày của bài nền tảng.',
          'Nếu gửi nhiều prompt, lấy dàn ý trước làm input cho lượt sau: prompt chaining.',
          'Nếu đánh giá và sửa một output nhiều lần: iterative refinement.',
          'Giải thích từng bước không phải bằng chứng output đúng.',
        ],
        example: {
          title: 'Ví dụ áp dụng',
          content:
            'Lập dàn ý dựa trên nguồn; kiểm tra thiếu ý; viết tóm tắt từ dàn ý đã duyệt.',
        },
        pitfalls: ['Đừng định nghĩa mọi workflow nhiều bước đều là CoT.'],
        check: {
          question: 'Nếu mỗi bước là một prompt dùng output trước, đó là gì?',
          options: ['Prompt chaining.', 'Few-shot chỉ vì có ba bước.'],
          answer: 0,
          explanation:
            'Prompt chaining. Làm việc theo bước giúp kiểm soát nội dung; tên kỹ thuật còn phụ thuộc cách tổ chức các lượt tương tác.',
        },
        takeaway:
          'Làm việc theo bước giúp kiểm soát nội dung; tên kỹ thuật còn phụ thuộc cách tổ chức các lượt tương tác.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 135–144',
            url: '/references/teacher-guide.pdf#page=135',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Xâu chuỗi',
        title: 'Prompt Chaining (Xâu chuỗi câu lệnh)',
        summary:
          'Prompt Chaining chia dự án lớn thành nhiều câu lệnh độc lập; kết quả đã được con người kiểm duyệt của bước trước làm đầu vào cho bước sau.',
        bullets: [
          'Quy trình đa chặng có kiểm soát: Tách bạch các khâu: Thu thập tài liệu -> Lập dàn ý -> Viết chi tiết -> Hiệu đính.',
          'Kiểm soát chất lượng tại từng nút chặn: Con người kiểm tra và sửa đổi dàn ý ở bước 1 trước khi cho AI viết nội dung ở bước 2.',
          'Tránh quá tải: Giúp mô hình tập trung 100% năng lực vào một tác vụ đơn lẻ thay vì làm nhiều việc cùng lúc.',
        ],
        terms: [
          {
            term: 'Prompt Chaining',
            definition:
              'Kỹ thuật liên kết nhiều câu lệnh tuần tự, lấy kết quả của câu lệnh trước làm đầu vào cho câu lệnh sau.',
          },
        ],
        example: {
          title: 'Quy trình 2 bước',
          content:
            "Prompt 1: 'Trích xuất 5 luận điểm chính từ bài báo này.' (Bạn kiểm tra & chỉnh sửa). Prompt 2: 'Dựa vào 5 luận điểm đã duyệt, hãy viết một bài thuyết trình 5 slide.'",
        },
        pitfalls: [
          'Nhồi nhét toàn bộ 5 bước vào 1 câu lệnh duy nhất khiến AI làm sơ sài và bỏ sót nhiều yêu cầu quan trọng.',
        ],
        check: {
          question:
            'Phương pháp chia một tác vụ lớn thành chuỗi các câu lệnh tuần tự có sự kiểm tra của con người giữa các chặng được gọi là gì?',
          options: [
            'Prompt Chaining (Xâu chuỗi câu lệnh)',
            'Zero-shot Prompting',
            'Mô hình khuếch tán Diffusion',
            'Mã hóa dữ liệu tĩnh',
          ],
          answer: 0,
          explanation:
            'Prompt Chaining liên kết các câu lệnh theo chuỗi, giúp con người kiểm soát chất lượng ở từng giai đoạn.',
        },
        takeaway:
          'Chia dự án lớn thành chuỗi các prompt nhỏ có kiểm duyệt để đảm bảo chất lượng hoàn hảo.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 135–144',
            url: '/references/teacher-guide.pdf#page=135',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Ứng dụng Xâu chuỗi',
        title: 'Dự án 3 bước với Prompt Chaining',
        summary:
          'Ví dụ thực tế áp dụng Prompt Chaining để chuyển đổi cuốn sổ tay nhân viên 30 trang thành bài thuyết trình PowerPoint chuyên nghiệp.',
        bullets: [
          'Chặng 1 (Trích xuất): AI đọc tài liệu 30 trang và liệt kê ra 10 quy định quan trọng nhất (Người dùng rà soát).',
          'Chặng 2 (Lập dàn ý): Dựa trên 10 quy định đã duyệt, AI xây dựng cấu trúc 10 slide thuyết trình (Người dùng chỉnh sửa).',
          'Chặng 3 (Soạn thảo chi tiết): Dựa trên dàn ý đã hoàn thiện, AI viết nội dung chi tiết và gợi ý hình ảnh cho từng slide.',
        ],
        terms: [
          {
            term: 'Chốt kiểm soát chất lượng (QA Gate)',
            definition:
              'Điểm dừng giữa các bước trong chuỗi prompt để con người rà soát và phê duyệt.',
          },
        ],
        example: {
          title: 'Chuyển đổi sổ tay nhân viên',
          content:
            "Thay vì gõ 'Hãy làm slide từ sổ tay này', hãy dùng chuỗi 3 prompt: Trích xuất ý cốt lõi -> Lập dàn ý slide -> Viết nội dung chi tiết từng slide.",
        },
        pitfalls: [
          'Không dừng lại kiểm tra dàn ý ở bước 2 mà để AI viết thẳng nội dung chi tiết, dẫn đến việc phải làm lại từ đầu nếu dàn ý sai hướng.',
        ],
        check: {
          question:
            'Khi chuyển đổi một cuốn sổ tay nhân viên dày 30 trang thành slide thuyết trình, cách tiếp cận nào đảm bảo kết quả chính xác nhất?',
          options: [
            'Sử dụng Prompt Chaining qua 3 bước: Trích xuất ý chính -> Lập dàn ý -> Soạn chi tiết từng slide',
            'Copy toàn bộ 30 trang vào một câu lệnh duy nhất và yêu cầu tạo slide ngay',
            'Chỉ đọc trang bìa của cuốn sổ tay',
            'Chụp ảnh cuốn sổ tay và không nhập chữ',
          ],
          answer: 0,
          explanation:
            'Prompt Chaining 3 bước giúp kiểm duyệt dàn ý trước khi soạn thảo chi tiết, đảm bảo bài thuyết trình bám sát tài liệu gốc.',
        },
        takeaway:
          'Trích xuất ý chính $\rightarrow$ Duyệt dàn ý $\rightarrow$ Soạn chi tiết: Công thức chuẩn cho tài liệu lớn.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 135–144',
            url: '/references/teacher-guide.pdf#page=135',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Nhắc ngược',
        title: 'Reverse prompting: hai cách dùng trong tài liệu',
        summary:
          'Guide dùng thiết kế prompt từ đầu ra mong muốn; tài liệu ví dụ còn dùng AI hỏi lại để làm rõ nhu cầu.',
        bullets: [
          'Thiết kế ngược: xác định sản phẩm cuối, tiêu chí rồi nhờ AI đề xuất prompt.',
          'Hỏi làm rõ: để AI thu thập thông tin còn thiếu trước khi viết.',
          'Đọc ngữ cảnh từng câu; không áp một nghĩa cho tất cả ví dụ.',
          'Hỏi AI soạn câu phỏng vấn người khác chưa phải yêu cầu AI hỏi lại chính bạn.',
        ],
        example: {
          title: 'Ví dụ áp dụng',
          content:
            'Mục tiêu: email 100 từ cho phụ huynh. Hãy đề xuất prompt phù hợp. Hoặc: hãy hỏi tôi các dữ kiện cần có trước khi soạn CV.',
        },
        pitfalls: [
          'Khi thi, câu 144 dùng Yes–Yes–No theo IIG; khi thực hành, xác định cách dùng thuật ngữ trong tài liệu.',
        ],
        check: {
          question: 'Ví dụ nào thể hiện AI hỏi làm rõ?',
          options: [
            'Hỏi tôi thông tin cần thiết trước khi viết CV.',
            'Chỉ liệt kê ba câu hỏi phỏng vấn ứng viên khác.',
          ],
          answer: 0,
          explanation:
            'Hỏi tôi thông tin cần thiết trước khi viết CV. Guide dùng thiết kế prompt từ đầu ra mong muốn; tài liệu ví dụ còn dùng AI hỏi lại để làm rõ nhu cầu.',
        },
        takeaway:
          'Guide dùng thiết kế prompt từ đầu ra mong muốn; tài liệu ví dụ còn dùng AI hỏi lại để làm rõ nhu cầu.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 135–144',
            url: '/references/teacher-guide.pdf#page=135',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
          {
            title: 'Ví dụ kỹ thuật prompt (DOCX)',
            url: '/references/prompt-techniques.docx',
            note: 'Đối chiếu cách dùng thuật ngữ trong thực hành.',
          },
          {
            title: 'Ví dụ giáo dục — trang PDF 12',
            url: '/references/education-examples.pdf#page=12',
            note: 'Phân biệt self-consistency và hỏi làm rõ.',
          },
        ],
        examNote:
          'Câu 144 theo IIG: Yes–Yes–No. Tài liệu có hai cách dùng reverse prompting; đọc mục tiêu của từng ví dụ.',
      },
      {
        label: 'Ứng dụng Nhắc ngược',
        title: 'Ứng dụng Reverse Prompting: Viết CV & Du lịch',
        summary:
          'Vận dụng kỹ thuật hỏi ngược để xây dựng Sơ yếu lý lịch (CV) chuyên nghiệp và thiết kế lịch trình du lịch cá nhân hóa.',
        bullets: [
          'Viết Sơ yếu lý lịch (CV): AI hỏi lần lượt về mục tiêu nghề nghiệp, kinh nghiệm 3 công ty gần nhất, kỹ năng nổi bật và bằng cấp trước khi tổng hợp thành CV.',
          'Lập lịch trình du lịch: AI hỏi về ngân sách, sở thích ăn uống, phương tiện di chuyển, số lượng thành viên (ví dụ: kỳ nghỉ của Kenneth hoặc chuyến leo núi Kilimanjaro).',
          'Cá nhân hóa tối đa: Sản phẩm cuối cùng hoàn toàn bám sát tình trạng thực tế của người dùng thay vì một mẫu chung chung trên mạng.',
        ],
        terms: [
          {
            term: 'Cá nhân hóa (Personalization)',
            definition:
              'Quá trình tùy biến nội dung theo đúng đặc điểm và nhu cầu riêng biệt của từng cá nhân.',
          },
        ],
        example: {
          title: 'Phỏng vấn viết CV',
          content:
            "'Hãy phỏng vấn tôi 5 câu hỏi để viết CV xin việc Marketing Manager. Hãy hỏi từng câu một và chờ tôi trả lời trước khi hỏi câu tiếp theo.'",
        },
        pitfalls: [
          'Tự mình viết một đoạn văn dài dòng lộn xộn thay vì để AI phỏng vấn có cấu trúc.',
        ],
        check: {
          question:
            'Tại sao sử dụng Reverse Prompting lại giúp tạo ra bản CV xin việc chất lượng hơn so với một câu lệnh Zero-shot thông thường?',
          options: [
            'Vì AI sẽ chủ động hỏi để thu thập đầy đủ các thành tích và kỹ năng nổi bật mà người dùng có thể quên nêu ra',
            'Vì AI sẽ tự động bịa thêm các giải thưởng quốc tế',
            'Vì câu lệnh này giúp giảm tiền điện',
            'Vì AI sẽ gửi CV trực tiếp cho nhà tuyển dụng',
          ],
          answer: 0,
          explanation:
            'Quy trình phỏng vấn của Reverse Prompting giúp khai thác đầy đủ các chi tiết kinh nghiệm quan trọng mà người dùng có thể vô tình bỏ sót.',
        },
        takeaway:
          'Phỏng vấn có cấu trúc mang lại bản CV và lịch trình du lịch cá nhân hóa hoàn hảo.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 135–144',
            url: '/references/teacher-guide.pdf#page=135',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
          {
            title: 'Ví dụ kỹ thuật prompt (DOCX)',
            url: '/references/prompt-techniques.docx',
            note: 'Đối chiếu cách dùng thuật ngữ trong thực hành.',
          },
          {
            title: 'Ví dụ giáo dục — trang PDF 12',
            url: '/references/education-examples.pdf#page=12',
            note: 'Phân biệt self-consistency và hỏi làm rõ.',
          },
        ],
      },
      {
        label: 'Tự nhất quán',
        title: 'Self-consistency: nhiều lần tạo và đối chiếu',
        summary:
          'Tạo nhiều phương án rồi so sánh/chọn kết quả nhất quán; việc lặp lại tự nó không xác minh sự thật.',
        bullets: [
          'Guide nhấn mạnh chạy lại cùng prompt và đánh giá các kết quả.',
          'Có thể dùng bỏ phiếu nếu câu trả lời có thể so sánh rõ.',
          'Với nội dung sáng tạo, chọn theo tiêu chí thay vì chỉ đếm từ trùng.',
          'Câu 137 theo IIG là self-consistency; trong thực hành thêm bước so sánh các kết quả.',
        ],
        example: {
          title: 'Ví dụ áp dụng',
          content:
            'Tạo ba phương án tiêu đề, so với mục tiêu bài, chọn phương án phù hợp và kiểm tra các dữ kiện.',
        },
        pitfalls: [
          'Kết quả đa số vẫn có thể sai; không gọi đây là bảo đảm đúng tuyệt đối.',
        ],
        check: {
          question: 'Cần thêm gì sau khi tạo nhiều kết quả?',
          options: [
            'So sánh/đánh giá và kiểm chứng phần dữ kiện.',
            'Chỉ chọn ngẫu nhiên rồi coi là đúng.',
          ],
          answer: 0,
          explanation:
            'So sánh/đánh giá và kiểm chứng phần dữ kiện. Tạo nhiều phương án rồi so sánh/chọn kết quả nhất quán; việc lặp lại tự nó không xác minh sự thật.',
        },
        takeaway:
          'Tạo nhiều phương án rồi so sánh/chọn kết quả nhất quán; việc lặp lại tự nó không xác minh sự thật.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 135–144',
            url: '/references/teacher-guide.pdf#page=135',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
          {
            title: 'Ví dụ kỹ thuật prompt (DOCX)',
            url: '/references/prompt-techniques.docx',
            note: 'Đối chiếu cách dùng thuật ngữ trong thực hành.',
          },
          {
            title: 'Ví dụ giáo dục — trang PDF 12',
            url: '/references/education-examples.pdf#page=12',
            note: 'Phân biệt self-consistency và hỏi làm rõ.',
          },
        ],
      },
      {
        label: 'Tạo tri thức nền',
        title: 'Knowledge generation: mở nền rồi áp dụng',
        summary:
          'Tạo hoặc làm rõ kiến thức nền trước, rồi dùng kiến thức đó để đi sâu vào nhiệm vụ; phần kiến thức vẫn cần kiểm chứng.',
        bullets: [
          'Guide minh họa hỏi chung rồi đào sâu theo các câu tiếp theo.',
          'Có thể nhờ liệt kê tiêu chí trước khi đánh giá một phương án.',
          'Tách dữ kiện có nguồn khỏi nội dung AI tự đề xuất.',
        ],
        example: {
          title: 'Ví dụ áp dụng',
          content:
            'Hỏi lợi ích nhà thông minh; chọn lợi ích phù hợp hộ gia đình; giải thích bằng ví dụ có kiểm chứng.',
        },
        pitfalls: [
          'AI tự sinh nền kiến thức không làm nguồn đó trở thành độc lập hoặc chắc đúng.',
        ],
        check: {
          question: 'Có thể dùng ngay mọi kiến thức AI tự tạo không?',
          options: [
            'Cần kiểm tra trước khi dùng làm căn cứ.',
            'Có, vì đã sinh ở bước trước.',
          ],
          answer: 0,
          explanation:
            'Cần kiểm tra trước khi dùng làm căn cứ. Tạo hoặc làm rõ kiến thức nền trước, rồi dùng kiến thức đó để đi sâu vào nhiệm vụ; phần kiến thức vẫn cần kiểm chứng.',
        },
        takeaway:
          'Tạo hoặc làm rõ kiến thức nền trước, rồi dùng kiến thức đó để đi sâu vào nhiệm vụ; phần kiến thức vẫn cần kiểm chứng.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 135–144',
            url: '/references/teacher-guide.pdf#page=135',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
          {
            title: 'Ví dụ kỹ thuật prompt (DOCX)',
            url: '/references/prompt-techniques.docx',
            note: 'Đối chiếu cách dùng thuật ngữ trong thực hành.',
          },
          {
            title: 'Ví dụ giáo dục — trang PDF 12',
            url: '/references/education-examples.pdf#page=12',
            note: 'Phân biệt self-consistency và hỏi làm rõ.',
          },
        ],
      },
      {
        label: 'Chuẩn mực văn bản',
        title: 'Bản hướng dẫn phong cách (Style Guide)',
        summary:
          'Cung cấp Bản hướng dẫn phong cách (Style Guide) để AI hiệu đính văn bản tuân thủ đúng các quy chuẩn về dấu câu, ngữ pháp và viết hoa.',
        bullets: [
          'Nội dung của Style Guide: Quy tắc dùng dấu câu, quy chuẩn viết hoa chức danh, cách xưng hô thương hiệu, từ ngữ cấm sử dụng.',
          'Ứng dụng biên tập sao chép (Copy Editor): Biên tập viên tải lên tài liệu và bản Style Guide của tòa soạn để AI rà soát lỗi chính tả và định dạng.',
          'Đảm bảo tính nhất quán thương hiệu: Giúp hàng trăm bài viết từ nhiều tác giả khác nhau đều có chung một giọng điệu chuẩn mực.',
        ],
        terms: [
          {
            term: 'Bản hướng dẫn phong cách (Style Guide)',
            definition:
              'Bộ quy tắc văn bản quy định chuẩn mực về ngữ pháp, dấu câu, chính tả, cách viết hoa và giọng điệu của tổ chức.',
          },
        ],
        example: {
          title: 'Hiệu đính bài viết tòa soạn',
          content:
            "Biên tập viên tải lên Style Guide và yêu cầu: 'Rà soát bài báo này, sửa lỗi dấu câu và đảm bảo tất cả tên chức danh đều viết thường theo đúng quy định trong Style Guide đính kèm.'",
        },
        pitfalls: [
          "Yêu cầu AI 'Hãy sửa bài cho hay' mà không cung cấp quy tắc Style Guide cụ thể.",
        ],
        check: {
          question:
            'Một biên tập viên muốn AI kiểm tra và sửa lỗi bài viết theo đúng quy chuẩn dấu câu và viết hoa của cơ quan mình thì nên cung cấp tài liệu gì trong prompt?',
          options: [
            'Bản hướng dẫn phong cách trình bày (Style Guide)',
            'Bản báo cáo thuế năm trước',
            'Sơ đồ hệ thống mạng nội bộ',
            'Hóa đơn tiền nước',
          ],
          answer: 0,
          explanation:
            'Style Guide chứa toàn bộ các quy chuẩn về chính tả, dấu câu, cách viết hoa mà AI cần tuân theo khi hiệu đính.',
        },
        takeaway:
          'Nạp Style Guide để văn bản do AI hiệu đính đạt chuẩn mực xuất bản chuyên nghiệp.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 125–134',
            url: '/references/teacher-guide.pdf#page=125',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Dịch thuật chuyên ngành',
        title: 'Bảng thuật ngữ (Glossary) trong Dịch thuật',
        summary:
          'Đính kèm Bảng thuật ngữ (Glossary) giúp AI dịch thuật các từ khóa chuyên ngành kỹ thuật một cách chuẩn xác và thống nhất toàn bộ tài liệu.',
        bullets: [
          "Khái niệm Glossary: Danh mục các từ chuyên ngành kèm theo bản dịch chuẩn xác được chỉ định sẵn (ví dụ: 'Inpainting' $\rightarrow$ 'Chỉnh sửa nội suy').",
          'Giải quyết vấn đề bất nhất: Ngăn chặn việc chương 1 dịch một kiểu, chương 5 lại dịch sang một từ đồng nghĩa khác.',
          'Bảo toàn thuật ngữ gốc: Chỉ định rõ những từ ngữ nào bắt buộc phải giữ nguyên tiếng Anh không được dịch.',
        ],
        terms: [
          {
            term: 'Bảng thuật ngữ (Glossary)',
            definition:
              'Danh mục từ vựng chuyên ngành kèm theo định nghĩa hoặc bản dịch chuẩn định sẵn.',
          },
        ],
        example: {
          title: 'Dịch sách Trí tuệ nhân tạo',
          content:
            "Đính kèm bảng: 'Generative AI' $\rightarrow$ 'AI tạo sinh'; 'Prompt' $\rightarrow$ 'Câu lệnh'; 'Transformer' $\rightarrow$ Giữ nguyên không dịch.",
        },
        pitfalls: [
          'Dịch một tài liệu kỹ thuật dài 100 trang mà không nạp Glossary khiến thuật ngữ bị dịch lộn xộn.',
        ],
        check: {
          question:
            'Khi sử dụng AI để dịch một cuốn sách kỹ thuật sang tiếng Việt, tài liệu nào đính kèm giúp đảm bảo các thuật ngữ chuyên ngành được dịch đồng nhất trong tất cả các chương?',
          options: [
            'Bảng thuật ngữ (Glossary)',
            'Bản sao kê ngân hàng',
            'Danh bạ điện thoại',
            'Ảnh chụp bìa sách',
          ],
          answer: 0,
          explanation:
            'Bảng thuật ngữ (Glossary) cung cấp bản dịch chuẩn cho các từ khóa chuyên ngành, đảm bảo tính thống nhất trong toàn bộ tác phẩm.',
        },
        takeaway:
          'Đính kèm Glossary để bản dịch chuyên ngành luôn chuẩn xác và đồng nhất.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 125–134',
            url: '/references/teacher-guide.pdf#page=125',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Biến đổi cấu trúc',
        title: 'Biến đổi Định dạng: Bảng, JSON & XML',
        summary:
          'Kỹ thuật yêu cầu AI chuyển đổi các đoạn văn bản dài thành cấu trúc dữ liệu trực quan như Bảng Markdown, JSON hoặc XML.',
        bullets: [
          'Bảng Markdown (Markdown Table): Biến đoạn văn mô tả số lượng cây rừng thành bảng gồm các cột: Châu lục, Loại cây, Số lượng.',
          'Định dạng JSON / XML: Chuyển đổi thông tin khách hàng hoặc tệp cấu hình sang định dạng có cấu trúc để nạp vào phần mềm.',
          'Bảo toàn số liệu: Chỉ thị rõ ràng yêu cầu AI giữ nguyên các giá trị số học và tên riêng trong quá trình chuyển đổi.',
        ],
        terms: [
          {
            term: 'Bảng Markdown (Markdown Table)',
            definition:
              'Cấu trúc hiển thị dữ liệu dạng hàng và cột bằng các ký tự gạch nối và gạch đứng.',
          },
          {
            term: 'Dữ liệu có cấu trúc (Structured Data)',
            definition:
              'Dữ liệu được tổ chức theo định dạng rõ ràng (như JSON, XML, bảng) giúp máy tính dễ xử lý.',
          },
        ],
        example: {
          title: 'Chuyển văn bản thành bảng',
          content:
            "'Hãy đọc đoạn văn sau về số lượng cây trên các châu lục và chuyển toàn bộ thông tin thành Bảng Markdown gồm 3 cột: Châu lục, Số lượng cây, Tỷ lệ phần trăm.'",
        },
        pitfalls: [
          'Không chỉ định tên các cột khiến AI tự tạo bảng với cấu trúc không đúng mong muốn.',
        ],
        check: {
          question:
            'Để chuyển một đoạn văn bản mô tả số lượng cây rừng trên thế giới thành dạng bảng dễ đọc nhất, bạn nên yêu cầu định dạng đầu ra nào?',
          options: [
            'Bảng Markdown (Markdown Table) với các cột cụ thể',
            'Một bài thơ lục bát',
            'Một tệp âm thanh MP3',
            'Một đoạn video ngắn',
          ],
          answer: 0,
          explanation:
            'Yêu cầu định dạng Bảng Markdown giúp tổ chức các dữ liệu số liệu thành hàng và cột trực quan, rõ ràng.',
        },
        takeaway:
          'Chỉ định rõ tên cột và định dạng Bảng Markdown để trực quan hóa dữ liệu chữ.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 87–96',
            url: '/references/teacher-guide.pdf#page=87',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Neo dữ liệu thực tế',
        title: 'Grounding và cách xử lý thiếu dữ liệu',
        summary:
          'Tài liệu nguồn và yêu cầu nói rõ phần chưa biết giúp giảm suy diễn, nhưng không loại bỏ hoàn toàn ảo giác.',
        bullets: [
          'Chỉ định tài liệu và phạm vi cần sử dụng.',
          'Yêu cầu trích vị trí nguồn cho các dữ kiện chính.',
          'Tách phần có chứng cứ với đề xuất/giả định.',
          'Nếu thiếu dữ liệu: hỏi lại hoặc ghi chưa đủ căn cứ.',
        ],
        example: {
          title: 'Ví dụ áp dụng',
          content:
            'Dựa vào báo cáo này, nêu ba kết quả; dẫn trang; nếu báo cáo không có thì ghi “chưa có thông tin”.',
        },
        pitfalls: ['Không có một prompt đơn lẻ nào bảo đảm AI không bịa.'],
        check: {
          question: 'Grounding có thay thế bước kiểm chứng không?',
          options: [
            'Không; vẫn phải kiểm tra cách AI dùng nguồn.',
            'Có; trích dẫn được tạo ra luôn đúng.',
          ],
          answer: 0,
          explanation:
            'Không; vẫn phải kiểm tra cách AI dùng nguồn. Tài liệu nguồn và yêu cầu nói rõ phần chưa biết giúp giảm suy diễn, nhưng không loại bỏ hoàn toàn ảo giác.',
        },
        takeaway:
          'Tài liệu nguồn và yêu cầu nói rõ phần chưa biết giúp giảm suy diễn, nhưng không loại bỏ hoàn toàn ảo giác.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 145–153',
            url: '/references/teacher-guide.pdf#page=145',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Đọc biểu đồ',
        title: 'Phân tích Biểu đồ phân tán & Trendline',
        summary:
          'Đính kèm hình ảnh biểu đồ phân tán (Scatter plot) có đường xu hướng (Trendline) để AI phân tích tương quan và ước tính dữ liệu.',
        bullets: [
          'Đường xu hướng (Trendline): Biểu diễn hướng chuyển động trung bình của dữ liệu, giúp nhận biết tương quan thuận hay nghịch.',
          'Ước tính giá trị ngoại suy: Dựa vào độ dốc của đường xu hướng để ước tính giá trị tháng tiếp theo (lợi nhuận ròng, nhiệt độ trái đất).',
          "Yêu cầu rõ ràng: 'Dựa vào đường xu hướng trong biểu đồ phân tán đính kèm, hãy ước tính mức lợi nhuận của tháng thứ 12'.",
        ],
        terms: [
          {
            term: 'Biểu đồ phân tán (Scatter Plot)',
            definition:
              'Biểu đồ thể hiện các điểm dữ liệu tọa độ của hai biến số để khảo sát mối tương quan.',
          },
          {
            term: 'Đường xu hướng (Trendline)',
            definition:
              'Đường kẻ biểu diễn xu hướng biến thiên tổng thể của dữ liệu trên biểu đồ.',
          },
        ],
        example: {
          title: 'Ước tính lợi nhuận tháng 12',
          content:
            'Nạp biểu đồ phân tán lợi nhuận 11 tháng có Trendline đi lên: AI đọc độ dốc đường xu hướng và ước tính doanh thu tháng 12 đạt 150 triệu đồng.',
        },
        pitfalls: [
          'Nạp hình ảnh biểu đồ bị mờ hoặc bị cắt mất phần chú thích các trục tọa độ X và Y.',
        ],
        check: {
          question:
            'Thành phần nào trên biểu đồ phân tán giúp AI ước tính xu hướng biến thiên và ngoại suy giá trị tương lai của một chỉ số?',
          options: [
            'Đường xu hướng (Trend line)',
            'Màu sắc khung viền biểu đồ',
            'Phông chữ tiêu đề',
            'Kích thước tệp tin ảnh',
          ],
          answer: 0,
          explanation:
            'Đường xu hướng (Trendline) tổng hợp chiều hướng chuyển động của dữ liệu, giúp AI nhận định tương quan và ngoại suy giá trị.',
        },
        takeaway:
          'Dùng đường xu hướng (Trendline) trên biểu đồ để AI phân tích và ước tính chuẩn xác.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 87–96',
            url: '/references/teacher-guide.pdf#page=87',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Prompt Ảnh (Phần 1)',
        title: 'Thiết kế Prompt Hình ảnh: Chủ thể & Phong cách',
        summary:
          'Xây dựng prompt tạo ảnh chuyên nghiệp bằng cách mô tả chi tiết Chủ thể, Môi trường bối cảnh và Phong cách nghệ thuật (Art Style).',
        bullets: [
          "Chủ thể trọng tâm (Subject): Mô tả rõ con người, động vật, đồ vật (ví dụ: 'chú chó cứu hộ tại trại động vật', 'máy cắt cỏ điện').",
          "Môi trường & Bối cảnh (Setting): Không gian xung quanh, thời tiết, địa điểm (ví dụ: 'trong khu vườn xanh ngắt đầy hoa rực rỡ và ong').",
          'Phong cách nghệ thuật (Art Style): Đồ họa phẳng tối giản (flat vector minimalist), tranh màu nước, ảnh chụp chân dung thực tế 35mm, render 3D.',
        ],
        terms: [
          {
            term: 'Chủ thể (Subject)',
            definition: 'Đối tượng chính xuất hiện trong bức ảnh do AI vẽ.',
          },
          {
            term: 'Phong cách nghệ thuật (Art Style)',
            definition:
              'Ngôn ngữ thị giác định hình phong cách của bức ảnh (vector, tranh sơn dầu, ảnh chụp thực tế).',
          },
        ],
        example: {
          title: 'Logo dịch vụ cắt cỏ',
          content:
            "'Logo vector phẳng tối giản, máy cắt cỏ điện ở giữa một khu vườn xanh có hoa rực rỡ và ong, phong cách hiện đại, nền trong suốt.'",
        },
        pitfalls: [
          "Nhập câu lệnh chung chung 'Vẽ cho tôi một bức tranh đẹp' mà không nêu chủ thể và phong cách cụ thể.",
        ],
        check: {
          question:
            'Yếu tố nào trong câu lệnh tạo ảnh giúp AI hiểu rằng bạn muốn một biểu tượng đồ họa phẳng thay vì một bức ảnh chụp phong cảnh ngoài đời thực?',
          options: [
            "Chỉ định phong cách nghệ thuật (Art Style) như 'flat vector minimalist logo'",
            'Nhập độ phân giải màn hình máy tính',
            'Yêu cầu tạo ảnh trong 1 giây',
            'Gõ câu lệnh bằng tiếng Latinh',
          ],
          answer: 0,
          explanation:
            'Chỉ định phong cách nghệ thuật (Art Style) là yếu tố quyết định ngôn ngữ hình ảnh (đồ họa phẳng hay ảnh chụp).',
        },
        takeaway:
          'Chủ thể rõ nét + Bối cảnh cụ thể + Phong cách nghệ thuật chuẩn = Bức ảnh hoàn hảo.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 97–105',
            url: '/references/teacher-guide.pdf#page=97',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Prompt Ảnh (Phần 2)',
        title: 'Ánh sáng, Bố cục & Negative Prompt',
        summary:
          'Tinh chỉnh độ chuyên nghiệp của hình ảnh bằng cách thiết lập nguồn sáng, góc máy, tỷ lệ khung hình và câu lệnh phủ định (Negative Prompt).',
        bullets: [
          'Ánh sáng (Lighting): Ánh sáng giờ vàng (golden hour), ánh sáng điện ảnh (cinematic lighting), ánh sáng trường quay mềm (soft studio lighting).',
          'Bố cục & Góc máy (Camera Angle): Chụp cận cảnh (close-up), góc rộng (wide angle), góc nhìn flycam từ trên cao (top-down view).',
          'Tỷ lệ khung hình (Aspect Ratio): Chỉ định rõ tỷ lệ ngang (--ar 16:9) cho video/màn hình hoặc tỷ lệ dọc (--ar 9:16) cho bài đăng điện thoại.',
          "Câu lệnh phủ định (Negative Prompt): Liệt kê các chi tiết cấm xuất hiện: 'no text, no blurry, no extra limbs, no watermark'.",
        ],
        terms: [
          {
            term: 'Negative Prompt (Câu lệnh phủ định)',
            definition:
              'Danh sách các chi tiết hoặc lỗi mà người dùng yêu cầu AI tuyệt đối không vẽ vào ảnh.',
          },
          {
            term: 'Tỷ lệ khung hình (Aspect Ratio)',
            definition: 'Tỷ lệ giữa chiều rộng và chiều cao của bức ảnh.',
          },
        ],
        example: {
          title: 'Áp phích thú cưng chất lượng cao',
          content:
            "'Áp phích Nhớ bạn cho chú chó cứu hộ, chụp cận cảnh, ánh sáng studio mềm mại, tỷ lệ 16:9, phong cách chân thực. Negative: no blurry, no text, no distorted paws.'",
        },
        pitfalls: [
          'Kiểm tra tỷ lệ khung hình theo công cụ; chọn tỷ lệ phù hợp nơi sử dụng thay vì dựa vào mặc định.',
        ],
        check: {
          question:
            'Tính năng nào trong các công cụ tạo ảnh AI cho phép người dùng chỉ định những chi tiết KHÔNG ĐƯỢC PHÉP xuất hiện trong bức ảnh?',
          options: [
            'Negative Prompt (Câu lệnh phủ định)',
            'Zero-shot Prompting',
            'Mã hóa Token',
            'Khử nhiễu Denoising',
          ],
          answer: 0,
          explanation:
            'Negative Prompt là nơi người dùng liệt kê các yếu tố không mong muốn (như chữ viết, mờ nhòe, dị vật) để AI loại trừ.',
        },
        takeaway:
          'Kiểm soát ánh sáng, góc máy và dùng Negative Prompt để loại bỏ tạp âm hình ảnh.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 97–105',
            url: '/references/teacher-guide.pdf#page=97',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Chỉnh sửa ảnh nâng cao',
        title: 'Tạo, sửa và mô tả ảnh',
        summary:
          'Tạo ảnh mới, chỉnh sửa ảnh có sẵn và mô tả ảnh là ba nhiệm vụ cần phân biệt khi đọc prompt.',
        bullets: [
          'Tạo: sinh hình từ mô tả.',
          'Sửa: thêm/xóa/thay chi tiết; inpainting sửa vùng trong ảnh, outpainting mở rộng khung.',
          'Mô tả: phân tích nội dung, bố cục, phong cách hoặc metadata có sẵn.',
          'Metadata không nhất thiết suy ra được từ pixel; không đoán ngày/vị trí như dữ kiện thật.',
        ],
        example: {
          title: 'Ví dụ áp dụng',
          content:
            '“Nền ảnh này là gì?” là mô tả. “Đổi nền thành xanh” là sửa.',
        },
        pitfalls: [
          'Sửa metadata là sửa dữ liệu tệp; không nhất thiết đổi nội dung thị giác.',
        ],
        check: {
          question: '“Tạo nền xanh cho ảnh” thuộc nhiệm vụ nào?',
          options: ['Chỉnh sửa/tạo nội dung ảnh.', 'Chỉ mô tả ảnh đang có.'],
          answer: 0,
          explanation:
            'Chỉnh sửa/tạo nội dung ảnh. Tạo ảnh mới, chỉnh sửa ảnh có sẵn và mô tả ảnh là ba nhiệm vụ cần phân biệt khi đọc prompt.',
        },
        takeaway:
          'Tạo ảnh mới, chỉnh sửa ảnh có sẵn và mô tả ảnh là ba nhiệm vụ cần phân biệt khi đọc prompt.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 97–105',
            url: '/references/teacher-guide.pdf#page=97',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
        examNote:
          'Câu 126 theo IIG: No–Yes–No; ghi nhớ prompt máy ảnh có nền xanh. Ở phần thực hành, phân biệt mô tả ảnh hiện có với yêu cầu tạo hoặc sửa ảnh.',
      },
      {
        label: 'Hoạt ảnh & Video',
        title: 'Video: chuyển động, nội suy, avatar và phụ đề',
        summary:
          'Prompt video cần nêu chuyển động, thời lượng, nhân vật, âm thanh và mục tiêu tiếp cận.',
        bullets: [
          'Ảnh tĩnh → video: chỉ rõ vật hoặc camera chuyển động ra sao.',
          'Nội suy: bổ sung khung hình trung gian cho chuyển tiếp.',
          'Avatar đọc script: nhân vật nào đọc nội dung gì, giọng điệu và khẩu hình/cử chỉ phù hợp.',
          'Phụ đề hỗ trợ xem không cần âm thanh; phải soát lỗi và đồng bộ.',
        ],
        example: {
          title: 'Ví dụ áp dụng',
          content:
            'Tạo video 10 giây từ ảnh này; camera lia nhẹ; nhân vật đọc script; thêm phụ đề tiếng Việt.',
        },
        pitfalls: [
          'Chỉ tạo giọng đọc TTS chưa bảo đảm avatar là người đọc; nhiều cảm xúc không phải lúc nào cũng cần.',
        ],
        check: {
          question: 'Để người xem không nghe vẫn theo dõi, nên bổ sung gì?',
          options: ['Phụ đề đã kiểm tra.', 'Chỉ tăng âm lượng video.'],
          answer: 0,
          explanation:
            'Phụ đề đã kiểm tra. Prompt video cần nêu chuyển động, thời lượng, nhân vật, âm thanh và mục tiêu tiếp cận.',
        },
        takeaway:
          'Prompt video cần nêu chuyển động, thời lượng, nhân vật, âm thanh và mục tiêu tiếp cận.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 106–115',
            url: '/references/teacher-guide.pdf#page=106',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
    ],
  },
  verification: {
    description:
      'Đối chiếu lịch sử, thông tin hiện tại và số liệu; kiểm tra nguồn, bias và chất lượng trước khi sử dụng.',
    slides: [
      {
        label: 'Nguyên tắc vàng',
        title: 'Xác minh bằng chứng độc lập',
        summary:
          'AI có thể hỗ trợ tìm lỗi, nhưng kết luận về độ chính xác cần đối chiếu nguồn phù hợp và bằng chứng có thể kiểm tra.',
        bullets: [
          'Dữ kiện lịch sử: kiểm tra tài liệu/nguồn đáng tin.',
          'Thông tin hiện tại: xem nguồn có cập nhật và ngày công bố.',
          'Số liệu: truy bảng gốc, đơn vị, mốc thời gian và phương pháp.',
          'Không lấy lời xác nhận của cùng chatbot làm bằng chứng độc lập.',
        ],
        example: {
          title: 'Ví dụ áp dụng',
          content:
            'Nhờ AI chỉ ra điểm cần kiểm tra rồi tự mở báo cáo nguồn để xác minh.',
        },
        pitfalls: [
          'Không cần cấm AI hỗ trợ rà lỗi; cần phân biệt hỗ trợ với xác minh độc lập.',
        ],
        check: {
          question: 'AI nói “tôi chắc chắn” có đủ chứng minh không?',
          options: [
            'Không, cần căn cứ ngoài lời khẳng định đó.',
            'Có, nếu viết với giọng tự tin.',
          ],
          answer: 0,
          explanation:
            'Không, cần căn cứ ngoài lời khẳng định đó. AI có thể hỗ trợ tìm lỗi, nhưng kết luận về độ chính xác cần đối chiếu nguồn phù hợp và bằng chứng có thể kiểm tra.',
        },
        takeaway:
          'AI có thể hỗ trợ tìm lỗi, nhưng kết luận về độ chính xác cần đối chiếu nguồn phù hợp và bằng chứng có thể kiểm tra.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 145–153',
            url: '/references/teacher-guide.pdf#page=145',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Bẫy tự xác nhận',
        title: 'Bẫy tự xác nhận (Self-Confirmation)',
        summary:
          "Chạy lại cùng một câu lệnh nhiều lần hoặc hỏi 'AI có chắc không' không chứng minh câu trả lời đúng; AI có thể tự tin lặp lại cùng một sai lầm.",
        bullets: [
          'Ảo tưởng lặp lại: Nếu mô hình có xu hướng tính toán xác suất nghiêng về một thông tin sai, nó sẽ lặp lại thông tin sai đó ở mọi lần chạy.',
          "Hỏi 'Bạn có chắc chắn không?': Chỉ khiến AI tiếp tục tính toán chuỗi ngôn ngữ xã giao ('Tôi hoàn toàn chắc chắn') chứ không tạo ra bằng chứng thực tế mới.",
          'Lãng phí thời gian: Việc chạy đi chạy lại một prompt không thay thế được 30 giây tra cứu sách báo chính thống.',
        ],
        terms: [
          {
            term: 'Bẫy tự xác nhận (Self-Confirmation Fallacy)',
            definition:
              'Sai lầm khi tin rằng việc AI lặp lại câu trả lời nhiều lần đồng nghĩa với việc thông tin đó là sự thật khách quan.',
          },
        ],
        example: {
          title: 'Hỏi lại AI',
          content:
            "Bạn hỏi AI: 'Ai là tổng thống thứ 100 của Mỹ?' -> AI bịa ra một cái tên -> Bạn hỏi 'Chắc không?' -> AI trả lời 'Tôi chắc chắn 100%' -> Đây là sự tự tin mù quáng của mô hình xác suất.",
        },
        pitfalls: [
          'Chạy prompt 3 lần thấy ra kết quả y hệt nhau liền vội vàng kết luận thông tin là chính xác 100%.',
        ],
        check: {
          question:
            'Hành động nào sau đây KHÔNG PHẢI là phương pháp hợp lệ để kiểm chứng tính đúng đắn của dữ liệu do AI tạo ra?',
          options: [
            'Chạy lại cùng một câu lệnh 3 lần trên cùng một chatbot và kiểm tra xem kết quả có giống nhau không',
            'Tra cứu số liệu trên niên giám thống kê chính thức',
            'Đối chiếu với bài báo khoa học có bình duyệt',
            'Hỏi ý kiến của chuyên gia đầu ngành',
          ],
          answer: 0,
          explanation:
            'Chạy lại cùng một prompt chỉ kiểm tra tính tất định của thuật toán, không chứng minh được tính đúng đắn của dữ kiện trong thực tế.',
        },
        takeaway:
          'Lặp lại nhiều lần không biến điều sai thành sự thật; hãy mở nguồn tài liệu gốc để kiểm chứng.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 145–153',
            url: '/references/teacher-guide.pdf#page=145',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Nguồn thẩm quyền',
        title: 'Đối chiếu chéo với Dữ liệu Nhà nước',
        summary:
          'Đối chiếu chéo (Cross-referencing) số liệu của AI với các cơ sở dữ liệu quốc gia chính thức, Tổng điều tra dân số và báo cáo chính phủ.',
        bullets: [
          'Dữ liệu Tổng điều tra dân số (Census Data): Nguồn chuẩn mực nhất để xác thực quy mô dân số, cơ cấu độ tuổi, tỷ lệ đô thị hóa.',
          'Cổng thông tin bộ ngành & Chính phủ: Dùng để xác thực các văn bản pháp luật, quy chuẩn xây dựng, thông tư thuế và số liệu xuất nhập khẩu.',
          'Báo cáo tổ chức quốc tế: Dữ liệu của Ngân hàng Thế giới (World Bank), Liên Hợp Quốc (UN), Quỹ Tiền tệ Quốc tế (IMF).',
        ],
        terms: [
          {
            term: 'Đối chiếu chéo (Cross-referencing)',
            definition:
              'Phương pháp so sánh dữ liệu từ nhiều nguồn độc lập khác nhau để thẩm định tính chân thực.',
          },
          {
            term: 'Tổng điều tra dân số (Census Data)',
            definition:
              'Dữ liệu thống kê quy mô dân số và nhân khẩu học chính thức do cơ quan nhà nước thực hiện.',
          },
        ],
        example: {
          title: 'Kiểm tra số liệu dân số thành phố',
          content:
            'AI đưa ra báo cáo dân số tỉnh A năm 2025: Mở Cổng thông tin Tổng cục Thống kê để đối chiếu số liệu chính xác từng quận huyện.',
        },
        pitfalls: [
          'Dùng số liệu trên các bài đăng mạng xã hội không rõ nguồn gốc để đối chiếu chéo số liệu AI.',
        ],
        check: {
          question:
            'Nguồn tài liệu nào sau đây là thẩm quyền và chuẩn xác nhất để kiểm chứng số liệu nhân khẩu học và dân số do AI đưa ra?',
          options: [
            'Dữ liệu Tổng điều tra dân số (Census Data) của cơ quan thống kê quốc gia',
            'Diễn đàn mạng xã hội ẩn danh',
            'Blog cá nhân chưa được kiểm duyệt',
            'Một chatbot AI khác',
          ],
          answer: 0,
          explanation:
            'Dữ liệu Tổng điều tra dân số chính thức là nguồn tham chiếu chuẩn mực và có giá trị pháp lý cao nhất.',
        },
        takeaway:
          'Ưu tiên dữ liệu Tổng điều tra dân số và báo cáo chính phủ làm mốc tham chiếu chuẩn mực.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 145–153',
            url: '/references/teacher-guide.pdf#page=145',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Nguồn học thuật',
        title: 'Nguồn học thuật & Trang Fact-checking',
        summary:
          'Sử dụng cơ sở dữ liệu học thuật có bình duyệt (Peer-reviewed) và các tổ chức kiểm chứng tin tức độc lập để xác minh thông tin chuyên sâu.',
        bullets: [
          'Cơ sở dữ liệu học thuật bình duyệt: Google Scholar, PubMed (y khoa), IEEE Xplore (kỹ thuật), JSTOR (xã hội nhân văn).',
          'Tổ chức kiểm chứng dữ kiện (Fact-checking): Snopes, Reuters Fact Check, AP Fact Check chuyên điều tra các tin đồn và tuyên bố sai sự thật.',
          'Kiểm tra ngày xuất bản: Đảm bảo nghiên cứu học thuật tham chiếu vẫn còn giá trị áp dụng và chưa bị thay thế bởi các công trình mới hơn.',
        ],
        terms: [
          {
            term: 'Bình duyệt (Peer-reviewed)',
            definition:
              'Quy trình thẩm định khắt khe bởi hội đồng các nhà khoa học độc lập trước khi bài báo được xuất bản.',
          },
          {
            term: 'Tổ chức Fact-checking',
            definition:
              'Tổ chức độc lập chuyên điều tra và xác minh tính chân thực của các thông tin công khai.',
          },
        ],
        example: {
          title: 'Ôn tập thi lịch sử thế giới',
          content:
            'Sử dụng AI để ôn thi lịch sử: Bắt buộc tra cứu cơ sở dữ liệu học thuật và các trang fact-checking uy tín để đối chiếu các mốc thời gian và sự kiện.',
        },
        pitfalls: [
          'Tin vào một bài báo khoa học mà không kiểm tra xem tạp chí đó có uy tín và được bình duyệt hay không.',
        ],
        check: {
          question:
            'Hai nguồn dữ liệu nào sau đây giúp một nhà nghiên cứu xác thực tốt nhất các dữ kiện khoa học do AI cung cấp?',
          options: [
            'Cơ sở dữ liệu học thuật có bình duyệt và các trang kiểm tra dữ kiện (Fact-checking) uy tín',
            'Các video ngắn giải trí trên mạng xã hội',
            'Các trang web quảng cáo sản phẩm',
            'Phần bình luận của các diễn đàn game',
          ],
          answer: 0,
          explanation:
            'Cơ sở dữ liệu học thuật bình duyệt và các trang fact-checking là những nguồn bằng chứng khoa học vững chắc nhất.',
        },
        takeaway:
          'Dữ liệu bình duyệt + Trang Fact-checking = Lá chắn bảo vệ sự thật khoa học.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 145–153',
            url: '/references/teacher-guide.pdf#page=145',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Tham vấn con người',
        title: 'Tham vấn Chuyên gia có Thẩm quyền',
        summary:
          'Trao đổi và tham vấn trực tiếp với các giáo sư, bác sĩ, kỹ sư hoặc chuyên gia đầu ngành giúp đánh giá thông tin theo chuyên môn; vẫn cần xem bằng chứng và phạm vi năng lực.',
        bullets: [
          'Giá trị của kinh nghiệm thực tế: Chuyên gia có khả năng nhận biết ngay những lỗi sai phi thực tế mà tài liệu viết có thể chưa cập nhật.',
          'Đánh giá tính khả thi: Chuyên gia thẩm định xem các giải pháp kỹ thuật do AI đề xuất có thực sự thi công hoặc áp dụng được trên thực địa hay không.',
          'Xử lý các tình huống nhạy cảm: Các quyết định y khoa, bản án pháp lý và chính sách công bắt buộc phải có sự đánh giá của hội đồng chuyên môn.',
        ],
        terms: [
          {
            term: 'Tham vấn chuyên gia (Expert Consultation)',
            definition:
              'Quá trình trao đổi với người có chuyên môn sâu trong ngành để đánh giá và thẩm định thông tin.',
          },
        ],
        example: {
          title: 'Thẩm định phác đồ điều trị',
          content:
            'Bác sĩ sử dụng AI để tổng hợp tài liệu nghiên cứu mới, nhưng phác đồ điều trị thực tế cho bệnh nhân bắt buộc phải được hội đồng bác sĩ chuyên khoa phê duyệt.',
        },
        pitfalls: [
          'Bỏ qua bước hỏi ý kiến chuyên gia và tự ý áp dụng các hướng dẫn kỹ thuật phức tạp của AI vào thực tế.',
        ],
        check: {
          question:
            'Khi nghiên cứu một đề tài lịch sử phức tạp bằng AI, hành động nào sau đây mang lại độ tin cậy cao nhất cho bài nghiên cứu?',
          options: [
            'Đối chiếu kết quả với tài liệu gốc và tham vấn ý kiến của chuyên gia sử học',
            'Tự suy đoán đáp án theo cảm tính cá nhân',
            'Đăng câu hỏi lên nhóm mạng xã hội để bình chọn',
            'Chạy lại câu lệnh 10 lần',
          ],
          answer: 0,
          explanation:
            'Đối chiếu tài liệu gốc kết hợp tham vấn chuyên gia là phương pháp xác thực chuẩn mực và đáng tin cậy nhất.',
        },
        takeaway:
          'Tham vấn chuyên gia là chốt chặn an toàn và uy tín nhất cho các dự án quan trọng.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 145–153',
            url: '/references/teacher-guide.pdf#page=145',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Bản chất ảo giác',
        title: 'AI Hallucination (Ảo giác) là gì?',
        summary:
          'Ảo giác (Hallucination) là hiện tượng mô hình AI tự tạo ra thông tin hoàn toàn sai sự thật hoặc bịa đặt nhưng trình bày với văn phong cực kỳ tự tin.',
        bullets: [
          'Bản chất xác suất: Mô hình ghép các từ ngữ có vẻ hợp lý nhất theo quy luật thống kê chứ không tra cứu cơ sở dữ liệu sự thật khách quan.',
          'Độ trôi chảy đánh lừa người dùng: Câu văn được viết rất mượt mà, đúng ngữ pháp, lập luận chặt chẽ khiến người đọc dễ mất cảnh giác.',
          'Phạm vi xuất hiện: Xảy ra ở mọi lĩnh vực từ số liệu khoa học, tên tác giả bài báo, sự kiện lịch sử đến điều khoản luật pháp.',
        ],
        terms: [
          {
            term: 'Ảo giác AI (Hallucination)',
            definition:
              'Hiện tượng mô hình AI tạo ra thông tin sai lệch, bịa đặt hoặc phi thực tế nhưng được trình bày với giọng văn tự tin và thuyết phục.',
          },
        ],
        example: {
          title: 'Ảo giác số liệu',
          content:
            "AI tuyên bố: 'Theo nghiên cứu năm 2024 của Đại học Oxford, 87.4% người uống trà sống thọ trên 100 tuổi' -> Con số 87.4% và nghiên cứu này hoàn toàn do AI tự bịa ra.",
        },
        pitfalls: [
          'Tin tưởng rằng một câu văn viết hay và trôi chảy thì chắc chắn nội dung bên trong phải đúng sự thật.',
        ],
        check: {
          question:
            'Thuật ngữ kỹ thuật nào chỉ hiện tượng mô hình AI tự bịa ra các dữ kiện hoặc thông tin sai lệch nhưng trình bày với giọng văn vô cùng tự tin?',
          options: [
            'Ảo giác (Hallucination)',
            'Che dấu dữ liệu tĩnh (Static Data Masking)',
            'Tokenization',
            'Tăng tốc phần cứng GPU',
          ],
          answer: 0,
          explanation:
            'Ảo giác (Hallucination) là thuật ngữ chỉ việc AI tự tạo ra các thông tin sai sự thật hoặc trích dẫn bịa đặt.',
        },
        takeaway:
          'Văn phong tự tin không chứng minh sự thật; luôn cảnh giác trước hiện tượng ảo giác AI.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 145–153',
            url: '/references/teacher-guide.pdf#page=145',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Dấu hiệu ảo giác',
        title: 'Dấu hiệu nhận diện Trích dẫn & Án lệ Giả',
        summary:
          'Học cách phát hiện các dấu hiệu ảo giác đặc trưng: Mã số DOI giả mạo, đường link URL không tồn tại và các án lệ luật pháp bịa đặt.',
        bullets: [
          'Trích dẫn bài báo khoa học giả: AI bịa ra tên tác giả nổi tiếng ghép với tên bài báo nghe rất kêu, nhưng mã DOI hoặc đường link bấm vào báo lỗi 404.',
          'Bịa đặt án lệ luật pháp: Tự tạo ra tên các vụ tranh chấp, số hiệu hồ sơ tòa án và tên thẩm phán không hề có trong thực tế (rủi ro cực lớn cho ngành luật).',
          'Cách phòng ngừa: Luôn copy mã DOI hoặc số hiệu án lệ và tra cứu trực tiếp trên hệ thống thư viện hoặc cổng tòa án.',
        ],
        terms: [
          {
            term: 'Trích dẫn giả (Fabricated Citation)',
            definition:
              'Tài liệu tham khảo, đường link hoặc mã định danh DOI do AI tự tạo ra mà không có thật.',
          },
          {
            term: 'Mã định danh số (DOI - Digital Object Identifier)',
            definition:
              'Chuỗi ký tự duy nhất dùng để định danh vĩnh viễn một bài báo khoa học trên Internet.',
          },
        ],
        example: {
          title: 'Bài học từ luật sư',
          content:
            'Một thực tập sinh công ty luật nộp đơn kiện có 3 án lệ do AI trích dẫn -> Ra tòa phát hiện cả 3 án lệ đều không tồn tại -> Tòa án xử phạt luật sư vì vi phạm liêm chính nghề nghiệp.',
        },
        pitfalls: [
          'Sao chép nguyên văn danh mục tài liệu tham khảo do AI tạo ra vào bài luận mà không mở kiểm tra từng liên kết.',
        ],
        check: {
          question:
            'Dấu hiệu nhận diện điển hình nhất của một tài liệu tham khảo khoa học bị ảo giác (Hallucination) do AI tạo ra là gì?',
          options: [
            'Tên bài báo và tác giả nghe rất thuyết phục nhưng mã DOI hoặc đường link tra cứu không hề tồn tại trong thực tế',
            'Tài liệu được viết bằng tiếng Anh',
            'Tài liệu có độ dài dưới 1 trang',
            'Tài liệu có ngày xuất bản trong quá khứ',
          ],
          answer: 0,
          explanation:
            'Trích dẫn giả thường có tên nghe rất khoa học nhưng mã định danh DOI hoặc liên kết hoàn toàn không tồn tại.',
        },
        takeaway:
          'Mọi trích dẫn khoa học và điều luật do AI tạo ra bắt buộc phải được mở kiểm tra thực tế.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 145–153',
            url: '/references/teacher-guide.pdf#page=145',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Chống ảo giác (1)',
        title: 'Bám nguồn và kiểm tra trích dẫn',
        summary:
          'Grounding giảm nguy cơ bịa nhưng nguồn được dẫn vẫn cần kiểm tra có tồn tại và hỗ trợ đúng mệnh đề.',
        bullets: [
          'Mở đúng tài liệu, kiểm tra đoạn/trang.',
          'Đối chiếu tác giả, ngày, số liệu và phạm vi.',
          'Phân biệt câu có chứng cứ với suy luận thêm.',
        ],
        example: {
          title: 'Ví dụ áp dụng',
          content:
            'AI dẫn báo cáo trang 12: mở trang 12, kiểm tra con số cùng đơn vị và năm.',
        },
        pitfalls: [
          'Một URL hợp lệ không đồng nghĩa nội dung trang chứng minh kết luận.',
        ],
        check: {
          question: 'Có đường dẫn thì có thể bỏ bước đối chiếu không?',
          options: [
            'Không; cần đọc đoạn hỗ trợ.',
            'Có; URL luôn là chứng cứ đầy đủ.',
          ],
          answer: 0,
          explanation:
            'Không; cần đọc đoạn hỗ trợ. Grounding giảm nguy cơ bịa nhưng nguồn được dẫn vẫn cần kiểm tra có tồn tại và hỗ trợ đúng mệnh đề.',
        },
        takeaway:
          'Grounding giảm nguy cơ bịa nhưng nguồn được dẫn vẫn cần kiểm tra có tồn tại và hỗ trợ đúng mệnh đề.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 145–153',
            url: '/references/teacher-guide.pdf#page=145',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Chống ảo giác (2)',
        title: 'Giảm tính ngẫu nhiên và nêu điều chưa biết',
        summary:
          'Điều chỉnh tham số và hướng dẫn có thể làm phản hồi ổn định hơn; ổn định không đồng nghĩa đúng.',
        bullets: [
          'Nếu công cụ hỗ trợ, nhiệt độ thấp thường giảm đa dạng lấy mẫu.',
          'Hỏi rõ giả định, dữ kiện thiếu và nguồn.',
          'Kiểm tra phép tính bằng dữ liệu/công cụ thích hợp.',
        ],
        example: {
          title: 'Ví dụ áp dụng',
          content:
            'Với bảng doanh số, yêu cầu tính tổng từng cột rồi đối chiếu bảng tính.',
        },
        pitfalls: ['Nhiệt độ thấp không loại được ảo giác hoặc lỗi số học.'],
        check: {
          question: 'Output giống nhau qua nhiều lần có chắc đúng không?',
          options: [
            'Không; sai lầm có thể lặp lại.',
            'Có; sự ổn định chứng minh dữ kiện.',
          ],
          answer: 0,
          explanation:
            'Không; sai lầm có thể lặp lại. Điều chỉnh tham số và hướng dẫn có thể làm phản hồi ổn định hơn; ổn định không đồng nghĩa đúng.',
        },
        takeaway:
          'Điều chỉnh tham số và hướng dẫn có thể làm phản hồi ổn định hơn; ổn định không đồng nghĩa đúng.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 145–153',
            url: '/references/teacher-guide.pdf#page=145',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Tinh chỉnh lặp (1)',
        title: 'Phản hồi có Mục tiêu (Targeted Feedback)',
        summary:
          'Quy trình Tinh chỉnh lặp (Iterative Refinement) nâng cao chất lượng kết quả qua từng lượt trao đổi bằng phản hồi cụ thể, rõ ràng.',
        bullets: [
          'Chỉ rõ điểm chưa đạt: Nêu chính xác tiêu chí nào cần sửa (độ dài, giọng điệu, mức độ chuyên môn, định dạng hiển thị).',
          "Tránh phản hồi mơ hồ: Những câu như 'Làm lại đi', 'Chưa hay', 'Viết tốt hơn đi' không cung cấp hướng dẫn định lượng cho mô hình.",
          "Cung cấp hướng điều chỉnh: 'Hãy rút ngắn đoạn 2 xuống dưới 50 từ và thay thế các từ ngữ kỹ thuật bằng ví dụ thực tế'.",
        ],
        terms: [
          {
            term: 'Tinh chỉnh lặp (Iterative Refinement)',
            definition:
              'Quy trình cải thiện từng bước kết quả của AI thông qua các lượt phản hồi và điều chỉnh có chủ đích.',
          },
          {
            term: 'Phản hồi có mục tiêu (Targeted Feedback)',
            definition:
              'Lời nhận xét chỉ rõ tiêu chí và vị trí cụ thể cần điều chỉnh.',
          },
        ],
        example: {
          title: 'Sửa bài viết mạng xã hội',
          content:
            "Thay vì gõ 'Viết lại đi', hãy phản hồi: 'Bài viết đầy đủ thông tin nhưng giọng văn quá trang trọng. Hãy viết lại phần mở đầu với giọng văn thân thiện, hào hứng hơn.'",
        },
        pitfalls: [
          'Xóa bỏ toàn bộ cuộc hội thoại khi AI mới chỉ làm sai một chi tiết nhỏ có thể sửa được bằng một phản hồi ngắn.',
        ],
        check: {
          question:
            'Khi bài viết do AI tạo ra đã đúng nội dung nhưng phong cách quá khô khan, cách phản hồi nào sau đây mang lại hiệu quả tinh chỉnh cao nhất?',
          options: [
            'Nêu rõ phần nội dung cần giữ nguyên và chỉ ra cụ thể phong cách giọng điệu cần điều chỉnh cho thân thiện hơn',
            "Gõ một chữ 'Sai' và bấm gửi",
            'Xóa toàn bộ ứng dụng',
            'Tắt máy tính và không dùng AI nữa',
          ],
          answer: 0,
          explanation:
            'Phản hồi có mục tiêu nêu rõ điểm giữ nguyên và điểm cần sửa giúp mô hình căn chỉnh chính xác theo kỳ vọng.',
        },
        takeaway:
          'Phản hồi rõ ràng + Chỉ rõ tiêu chí cần sửa = Tinh chỉnh thành công.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 116–124',
            url: '/references/teacher-guide.pdf#page=116',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Tinh chỉnh lặp (2)',
        title: 'Bảo toàn Phần tốt & Thêm Tiêu chí Mới',
        summary:
          'Trong quá trình tinh chỉnh, luôn chỉ thị rõ ràng phần nào của kết quả trước đã đạt yêu cầu cần được giữ nguyên không đổi.',
        bullets: [
          "Bảo toàn kết quả đạt chuẩn: Nêu rõ: 'Hãy giữ nguyên cấu trúc 3 phần và các số liệu doanh thu trong bảng ở câu trả lời trước'.",
          "Bổ sung tiêu chí hoặc ví dụ mới: 'Bổ sung thêm một cột Thời hạn hoàn thành vào bảng trên và thêm 2 hashtag ở cuối bài'.",
          'Kiểm soát sự ổn định: Ngăn chặn hiện tượng AI sửa được lỗi này nhưng lại vô tình làm hỏng các phần khác vốn đã làm rất tốt.',
        ],
        terms: [
          {
            term: 'Bảo toàn ngữ cảnh (Context Preservation)',
            definition:
              'Kỹ thuật yêu cầu mô hình duy trì các phần nội dung đã được người dùng phê duyệt trong các lượt chỉnh sửa tiếp theo.',
          },
        ],
        example: {
          title: 'Tinh chỉnh bảng kế hoạch',
          content:
            "'Bảng phân công công việc rất tốt. Hãy giữ nguyên danh sách nhiệm vụ và người phụ trách; chỉ thêm một cột Mức độ ưu tiên (Cao/Trung bình/Thấp) vào bên phải.'",
        },
        pitfalls: [
          'Không nhắc AI giữ lại phần tốt khiến mô hình tự ý viết lại toàn bộ theo một cấu trúc hoàn toàn mới.',
        ],
        check: {
          question:
            'Để tránh việc AI thay đổi mất các số liệu chính xác đã tạo ở lượt trước khi yêu cầu bổ sung thông tin mới, bạn nên làm gì?',
          options: [
            'Chỉ định rõ ràng trong câu lệnh yêu cầu giữ nguyên các số liệu và cấu trúc đã đạt yêu cầu ở lượt trước',
            'Chỉ gõ câu lệnh mới mà không nhắc gì đến nội dung cũ',
            'Tải lại trang web từ đầu',
            'Yêu cầu AI viết bằng tiếng nước ngoài',
          ],
          answer: 0,
          explanation:
            'Yêu cầu giữ nguyên các phần đã đạt giúp mô hình bảo toàn kết quả tốt và chỉ tập trung sửa đúng phần cần bổ sung.',
        },
        takeaway:
          'Chỉ thị giữ nguyên phần đã tốt để kết quả tinh chỉnh luôn ổn định và hoàn thiện.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 116–124',
            url: '/references/teacher-guide.pdf#page=116',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Thời hạn dữ liệu',
        title: 'Knowledge Cutoff & Dữ liệu biến động',
        summary:
          'Hiểu rõ mốc chốt dữ liệu (Knowledge Cutoff Date) và sự cần thiết của tính năng tìm kiếm web thời gian thực đối với các sự kiện hiện tại.',
        bullets: [
          'Điểm chốt dữ liệu (Knowledge Cutoff): Mốc thời gian hoàn tất huấn luyện mô hình; AI độc lập hoàn toàn không biết các sự kiện diễn ra sau ngày này.',
          'Dữ liệu biến động nhanh (Rapidly Changing Data): Giá cổ phiếu, tỷ giá ngoại tệ, thời tiết hôm nay, kết quả bóng đá trực tiếp, tin tức nóng.',
          'Giải pháp thời gian thực: Bắt buộc sử dụng các công cụ AI có tính năng tìm kiếm web (Browse with Bing/Google) hoặc dán trực tiếp tin tức mới vào prompt.',
        ],
        terms: [
          {
            term: 'Knowledge Cutoff Date',
            definition:
              'Mốc thời gian giới hạn dữ liệu huấn luyện của mô hình ngôn ngữ lớn.',
          },
          {
            term: 'Dữ liệu biến động nhanh (Rapidly Changing Data)',
            definition:
              'Thông tin thay đổi liên tục theo thời gian thực như giá chứng khoán, tin thời sự.',
          },
        ],
        example: {
          title: 'Hỏi về sự kiện thể thao tối qua',
          content:
            'Một mô hình offline có cutoff tháng 1/2025 sẽ không thể biết ai vô địch bóng đá tháng 8/2026 nếu không được kích hoạt tính năng tìm kiếm web.',
        },
        pitfalls: [
          'Dùng một mô hình AI không kết nối Internet để tra cứu giá vàng hoặc tỷ giá USD ngày hôm nay.',
        ],
        check: {
          question:
            'Tại sao một mô hình ngôn ngữ lớn độc lập (không kết nối mạng) không thể cung cấp chính xác kết quả bầu cử vừa diễn ra ngày hôm qua?',
          options: [
            'Do mô hình bị giới hạn bởi điểm chốt dữ liệu huấn luyện (Knowledge Cutoff Date)',
            'Do mô hình chỉ hoạt động trên hệ điều hành cũ',
            'Do câu hỏi của người dùng quá ngắn',
            'Do bàn phím máy tính bị lỗi',
          ],
          answer: 0,
          explanation:
            'Mô hình độc lập không có dữ liệu về các sự kiện diễn ra sau mốc chốt dữ liệu (Knowledge Cutoff) của nó.',
        },
        takeaway:
          'Với thông tin thời sự và dữ liệu biến động nhanh: Luôn bật tính năng tìm kiếm thời gian thực.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 69–78',
            url: '/references/teacher-guide.pdf#page=69',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Thông tin thời sự',
        title: 'Xử lý Tin tức Nóng & Tìm kiếm Thời gian thực',
        summary:
          'Kỹ thuật tra cứu và thẩm định tin tức thời sự bằng AI có kết nối web kết hợp kiểm tra nguồn gốc bài báo.',
        bullets: [
          'Kích hoạt tìm kiếm web: Đảm bảo tính năng tìm kiếm (Search / Web Browsing) đã được bật trong giao diện chatbot.',
          'Kiểm tra đường link trích dẫn: Bấm trực tiếp vào các liên kết nguồn do AI đính kèm để xem bài báo gốc được đăng vào ngày nào.',
          'Thẩm định cơ quan báo chí: Đảm bảo thông tin đến từ các hãng thông tấn chính thống (Thông tấn xã, Reuters, AP) thay vì các trang tin đồn.',
        ],
        terms: [
          {
            term: 'Tìm kiếm thời gian thực (Real-time Search)',
            definition:
              'Tính năng cho phép AI truy vấn Internet trực tiếp để lấy dữ liệu mới nhất tại thời điểm hỏi.',
          },
        ],
        example: {
          title: 'Tra cứu hội nghị quốc tế',
          content:
            'Hỏi về hội nghị vừa bế mạc tuần trước: AI trả lời kèm 3 đường link báo chính thống; bạn mở liên kết kiểm tra ngày xuất bản để xác nhận số liệu.',
        },
        pitfalls: [
          'Tin vào bản tóm tắt tin tức thời sự của AI mà không bấm mở đường link nguồn để kiểm tra ngày tháng.',
        ],
        check: {
          question:
            'Khi sử dụng chatbot AI có kết nối web để tổng hợp thông tin về một chính sách mới ban hành tuần trước, bước xác minh bắt buộc là gì?',
          options: [
            'Bấm vào các đường link bài báo do AI trích dẫn để kiểm tra ngày xuất bản và tính chính thống của nguồn tin',
            'Chỉ đọc câu trả lời đầu tiên và tắt máy',
            'Chụp ảnh màn hình gửi cho bạn bè',
            'Đổi tên tài khoản chatbot',
          ],
          answer: 0,
          explanation:
            'Kiểm tra trực tiếp các đường link nguồn trích dẫn là cách duy nhất để đảm bảo thông tin thời sự được cập nhật đúng và chính xác.',
        },
        takeaway:
          'Bật tìm kiếm web và luôn mở liên kết nguồn để kiểm tra tính cập nhật của tin tức.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 69–78',
            url: '/references/teacher-guide.pdf#page=69',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Biểu đồ (Trục & Xu hướng)',
        title: 'Phân tích Biểu đồ: Đọc trục & Đường xu hướng',
        summary:
          'Khi yêu cầu AI phân tích biểu đồ, cần kiểm tra kỹ đơn vị tính, trục tọa độ X/Y và cách mô hình ngoại suy từ đường xu hướng (Trendline).',
        bullets: [
          'Kiểm tra đơn vị tính và trục tọa độ: Xác nhận AI đọc đúng đơn vị (triệu USD hay nghìn USD, năm hay tháng) trên trục tung và trục hoành.',
          'Phân tích tương quan: Đánh giá xem AI có nhận định đúng mối quan hệ giữa 2 biến số (tương quan thuận hay tương quan nghịch).',
          'Ước tính từ Trendline: Sử dụng đường xu hướng trung bình để dự báo giá trị tiếp theo một cách khoa học.',
          'Histogram (Biểu đồ tần suất): Thể hiện phân phối/tần suất của một biến số theo từng khoảng giá trị — khác với biểu đồ phân tán (thể hiện mối quan hệ giữa hai biến).',
        ],
        terms: [
          {
            term: 'Trục tọa độ (Coordinate Axes)',
            definition:
              'Trục X (hoành độ) và trục Y (tung độ) biểu diễn các chiều biến số và đơn vị đo lường trên biểu đồ.',
          },
          {
            term: 'Ngoại suy (Extrapolation)',
            definition:
              'Phương pháp ước tính giá trị tương lai nằm ngoài phạm vi các điểm dữ liệu đã quan sát dựa trên đường xu hướng.',
          },
        ],
        example: {
          title: 'Biểu đồ tiêu thụ chất béo và tim mạch',
          content:
            'Nạp biểu đồ cột so sánh: Kiểm tra xem AI có đọc đúng tỷ lệ phần trăm trên trục Y và phân loại đúng các nhóm thực phẩm trên trục X hay không.',
        },
        pitfalls: [
          'Nạp hình ảnh biểu đồ bị mất nhãn trục tọa độ khiến AI suy đoán sai hoàn toàn đơn vị tính.',
        ],
        check: {
          question:
            'Bước kiểm tra đầu tiên khi yêu cầu AI đọc và phân tích số liệu từ một hình ảnh biểu đồ là gì?',
          options: [
            'Kiểm tra xem AI có đọc đúng đơn vị tính, giá trị các trục tọa độ X/Y và tiêu đề biểu đồ hay không',
            'Yêu cầu AI vẽ lại biểu đồ bằng màu hồng',
            'Tăng độ sáng màn hình lên 100%',
            'In biểu đồ ra giấy',
          ],
          answer: 0,
          explanation:
            'Đơn vị tính và giá trị các trục tọa độ là cơ sở nền tảng quyết định tính chính xác của toàn bộ phân tích số liệu.',
        },
        takeaway:
          'Kiểm tra đúng nhãn trục tọa độ và đơn vị tính trước khi tin vào phân tích biểu đồ của AI.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 145–153',
            url: '/references/teacher-guide.pdf#page=145',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Biểu đồ (Điểm ngoại lai)',
        title: 'Nhận diện Điểm ngoại lai (Outliers)',
        summary:
          'Kiểm tra khả năng của AI trong việc phát hiện các điểm dữ liệu dị biệt (Outliers) lệch xa khỏi xu hướng chung trên biểu đồ phân tán.',
        bullets: [
          'Khái niệm Điểm ngoại lai: Điểm dữ liệu có giá trị bất thường, tách rời khỏi đám đông dữ liệu hoặc nằm rất xa đường xu hướng.',
          'Nguyên nhân của Outliers: Do sai sót trong khâu thu thập ghi chép dữ liệu, hoặc do một biến cố đặc biệt bất thường xảy ra trong kỳ đó.',
          'Yêu cầu xử lý: Kiểm tra xem AI có nhận diện được điểm ngoại lai và giải thích lý do không nên để điểm dị biệt làm méo mó xu hướng chung hay không.',
        ],
        terms: [
          {
            term: 'Điểm ngoại lai (Outlier)',
            definition:
              'Điểm dữ liệu có giá trị khác biệt bất thường, lệch xa khỏi phần còn lại của tập dữ liệu.',
          },
        ],
        example: {
          title: 'Phát hiện doanh thu bất thường',
          content:
            'Trên biểu đồ doanh thu 12 tháng đều ở mức 100 triệu, riêng tháng 7 vọt lên 900 triệu do sự kiện đột xuất: AI nhận diện tháng 7 là điểm ngoại lai (Outlier).',
        },
        pitfalls: [
          'Để một điểm ngoại lai cá biệt làm sai lệch toàn bộ đường xu hướng dự báo tương lai dài hạn.',
        ],
        check: {
          question:
            'Thuật ngữ nào chỉ một điểm dữ liệu trên biểu đồ phân tán có giá trị khác biệt bất thường và nằm lệch xa khỏi đường xu hướng chung?',
          options: [
            'Điểm ngoại lai (Outlier)',
            'Cửa sổ ngữ cảnh (Context Window)',
            'Mã hóa Token',
            'Lia máy quay (Panning)',
          ],
          answer: 0,
          explanation:
            'Điểm ngoại lai (Outlier) là giá trị bất thường nằm tách biệt khỏi đám đông dữ liệu trên biểu đồ.',
        },
        takeaway:
          'Nhận diện điểm ngoại lai (Outlier) để tránh làm sai lệch xu hướng phân tích tổng thể.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 145–153',
            url: '/references/teacher-guide.pdf#page=145',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Sai lệch mô hình (1)',
        title: 'Dữ liệu, tiền xử lý và mức thiên lệch',
        summary:
          'Khác nguồn dữ liệu, cách xử lý và mức đại diện có thể làm các mô hình cho kết quả khác nhau.',
        bullets: [
          'Kiểm tra nhóm nào bị thiếu dữ liệu.',
          'Dữ liệu không đầy đủ có thể làm kết quả thiếu cân bằng.',
          'Tokenization là một phần biểu diễn dữ liệu, không phải toàn bộ nguyên nhân bias.',
          'Đánh giá theo nhóm/ngôn ngữ thay vì chỉ điểm trung bình.',
        ],
        example: {
          title: 'Ví dụ áp dụng',
          content:
            'Bài tập yêu cầu quan sát thiên lệch giới tính, tuổi và vùng địa lý trong mô tả nghề nghiệp.',
        },
        pitfalls: [
          'Không loại địa lý hay dữ liệu thiếu khỏi các nguồn bias chỉ vì không nằm trong khóa chọn hai.',
        ],
        check: {
          question:
            'Thiếu dữ liệu của một nhóm có thể ảnh hưởng công bằng không?',
          options: [
            'Có, do thiếu đại diện.',
            'Không, chỉ giới tính mới gây bias.',
          ],
          answer: 0,
          explanation:
            'Có, do thiếu đại diện. Khác nguồn dữ liệu, cách xử lý và mức đại diện có thể làm các mô hình cho kết quả khác nhau.',
        },
        takeaway:
          'Khác nguồn dữ liệu, cách xử lý và mức đại diện có thể làm các mô hình cho kết quả khác nhau.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 154–163',
            url: '/references/teacher-guide.pdf#page=154',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Sai lệch mô hình (2)',
        title: 'Tinh chỉnh và guardrails',
        summary:
          'Fine-tuning và guardrails có thể làm khác hành vi mô hình; guardrails hỗ trợ an toàn nhưng không bảo đảm trung lập tuyệt đối.',
        bullets: [
          'Cách tinh chỉnh thay đổi phản hồi theo dữ liệu/mục tiêu.',
          'Guardrails có thể lọc hoặc định hướng câu trả lời.',
          'Đánh giá cả hiệu quả bảo vệ lẫn ảnh hưởng tới các nhóm/ngữ cảnh.',
          'Người dùng vẫn phải kiểm tra đầu ra.',
        ],
        example: {
          title: 'Ví dụ áp dụng',
          content:
            'Hai công cụ có thể từ chối/diễn đạt khác nhau vì chính sách thiết kế khác nhau.',
        },
        pitfalls: [
          'Không suy ra mọi guardrail đều gây hại hoặc đều loại sạch bias.',
        ],
        check: {
          question: 'Có guardrails nghĩa là hết bias?',
          options: ['Không; vẫn cần đánh giá.', 'Có; không cần kiểm tra nữa.'],
          answer: 0,
          explanation:
            'Không; vẫn cần đánh giá. Fine-tuning và guardrails có thể làm khác hành vi mô hình; guardrails hỗ trợ an toàn nhưng không bảo đảm trung lập tuyệt đối.',
        },
        takeaway:
          'Fine-tuning và guardrails có thể làm khác hành vi mô hình; guardrails hỗ trợ an toàn nhưng không bảo đảm trung lập tuyệt đối.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 154–163',
            url: '/references/teacher-guide.pdf#page=154',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Checklist 5 bước',
        title: 'Checklist trước khi dùng nội dung AI',
        summary:
          'Kiểm tra độ chính xác, quyền riêng tư, thiên lệch, quyền sử dụng và khả năng tiếp cận trước khi chia sẻ.',
        bullets: [
          'Đối chiếu dữ kiện với nguồn; kiểm tra ngày/đơn vị.',
          'Ẩn danh và giảm dữ liệu cá nhân, chú ý khả năng tái nhận diện.',
          'Kiểm tra hình, ngôn ngữ, phụ đề, đối tượng sử dụng.',
          'Ghi nhận AI đã hỗ trợ phần nào và người phê duyệt.',
        ],
        example: {
          title: 'Ví dụ áp dụng',
          content:
            'Một slide lớp học cần kiểm tra kiến thức, ảnh đúng, chữ đọc được, nguồn và phù hợp độ tuổi.',
        },
        pitfalls: ['Không coi bản nháp đẹp là sản phẩm đã được duyệt.'],
        check: {
          question: 'Bước cuối trước khi công bố là gì?',
          options: [
            'Con người rà soát theo tiêu chí sử dụng.',
            'Để AI tự xác nhận mọi tiêu chí đã đúng.',
          ],
          answer: 0,
          explanation:
            'Con người rà soát theo tiêu chí sử dụng. Kiểm tra độ chính xác, quyền riêng tư, thiên lệch, quyền sử dụng và khả năng tiếp cận trước khi chia sẻ.',
        },
        takeaway:
          'Kiểm tra độ chính xác, quyền riêng tư, thiên lệch, quyền sử dụng và khả năng tiếp cận trước khi chia sẻ.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 145–153',
            url: '/references/teacher-guide.pdf#page=145',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
    ],
  },
  responsible: {
    description:
      'Quyền riêng tư, sở hữu trí tuệ, thiên lệch, rủi ro và trách nhiệm; tránh các kết luận pháp lý tuyệt đối.',
    slides: [
      {
        label: 'Bản chất thiên kiến',
        title: 'Thiên lệch là gì?',
        summary:
          'Bias là thiên lệch trong dữ liệu, cách mô tả hoặc kết quả có thể dẫn tới thiếu công bằng.',
        bullets: [
          'Kiểm tra nhóm được đại diện và bị bỏ sót.',
          'Không xem output mặc định là trung lập.',
          'So sánh cách mô tả giữa các nhóm.',
        ],
        example: {
          title: 'Ví dụ áp dụng',
          content: 'CEO mặc định là nam có thể phản ánh khuôn mẫu.',
        },
        pitfalls: [
          'Có trường nhân khẩu học không tự động chứng minh mô hình bị thiên lệch.',
        ],
        check: {
          question: 'Khi áp dụng nội dung này, cách hiểu nào phù hợp?',
          options: [
            'Bias là thiên lệch trong dữ liệu, cách mô tả hoặc kết quả có thể dẫn tới thiếu công bằng.',
            'Có thể bỏ kiểm chứng vì công cụ AI đã bảo đảm mọi trường hợp.',
          ],
          answer: 0,
          explanation:
            'Bias là thiên lệch trong dữ liệu, cách mô tả hoặc kết quả có thể dẫn tới thiếu công bằng. Bias là thiên lệch trong dữ liệu, cách mô tả hoặc kết quả có thể dẫn tới thiếu công bằng.',
        },
        takeaway:
          'Bias là thiên lệch trong dữ liệu, cách mô tả hoặc kết quả có thể dẫn tới thiếu công bằng.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 154–163',
            url: '/references/teacher-guide.pdf#page=154',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
          {
            title: 'Bài tập thiên lệch — trang PDF 94',
            url: '/references/practice-exercises.pdf#page=94',
            note: 'Có ví dụ vùng địa lý, tuổi và giới.',
          },
        ],
        examNote:
          'Câu 117 và 161: chọn các yếu tố nhân khẩu học theo khóa IIG. Trong thực tế, đánh giá thêm dữ liệu thiếu, địa lý và ngôn ngữ.',
      },
      {
        label: 'Nguồn gốc Bias (1)',
        title: 'Dữ liệu thiếu và tính đại diện',
        summary:
          'Dữ liệu không đầy đủ hoặc không đại diện có thể làm output thiên lệch.',
        bullets: [
          'Xem dữ liệu thiếu ở nhóm nào.',
          'Cân nhắc tuổi, quốc tịch, vùng địa lý, ngôn ngữ và khả năng tiếp cận công nghệ.',
          'Không chỉ đánh giá bằng kết quả tổng thể.',
        ],
        example: {
          title: 'Ví dụ áp dụng',
          content:
            'Chỉ thu người dùng thành thị có thể bỏ sót nhu cầu nông thôn.',
        },
        pitfalls: ['Không học rằng chỉ tuổi và quốc tịch mới có thể gây bias.'],
        check: {
          question: 'Khi áp dụng nội dung này, cách hiểu nào phù hợp?',
          options: [
            'Dữ liệu không đầy đủ hoặc không đại diện có thể làm output thiên lệch.',
            'Có thể bỏ kiểm chứng vì công cụ AI đã bảo đảm mọi trường hợp.',
          ],
          answer: 0,
          explanation:
            'Dữ liệu không đầy đủ hoặc không đại diện có thể làm output thiên lệch. Dữ liệu không đầy đủ hoặc không đại diện có thể làm output thiên lệch.',
        },
        takeaway:
          'Dữ liệu không đầy đủ hoặc không đại diện có thể làm output thiên lệch.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 154–163',
            url: '/references/teacher-guide.pdf#page=154',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
          {
            title: 'Bài tập thiên lệch — trang PDF 94',
            url: '/references/practice-exercises.pdf#page=94',
            note: 'Có ví dụ vùng địa lý, tuổi và giới.',
          },
        ],
      },
      {
        label: 'Nguồn gốc Bias (2)',
        title: 'Thiên lệch lịch sử',
        summary:
          'Dữ liệu phản ánh định kiến xã hội có thể làm mô hình tái hiện những khuôn mẫu đó.',
        bullets: [
          'Quan sát ngôn ngữ gắn nghề với giới.',
          'Đánh giá bối cảnh lịch sử và mục đích sử dụng.',
          'Bổ sung ví dụ đa dạng và kiểm tra kết quả.',
        ],
        example: {
          title: 'Ví dụ áp dụng',
          content:
            'Dữ liệu nghề nghiệp thiếu nữ kỹ sư có thể tạo mô tả thiếu cân bằng.',
        },
        pitfalls: [
          'Dữ liệu quá khứ không mặc nhiên là chuẩn công bằng cho hiện tại.',
        ],
        check: {
          question: 'Khi áp dụng nội dung này, cách hiểu nào phù hợp?',
          options: [
            'Dữ liệu phản ánh định kiến xã hội có thể làm mô hình tái hiện những khuôn mẫu đó.',
            'Có thể bỏ kiểm chứng vì công cụ AI đã bảo đảm mọi trường hợp.',
          ],
          answer: 0,
          explanation:
            'Dữ liệu phản ánh định kiến xã hội có thể làm mô hình tái hiện những khuôn mẫu đó. Dữ liệu phản ánh định kiến xã hội có thể làm mô hình tái hiện những khuôn mẫu đó.',
        },
        takeaway:
          'Dữ liệu phản ánh định kiến xã hội có thể làm mô hình tái hiện những khuôn mẫu đó.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 154–163',
            url: '/references/teacher-guide.pdf#page=154',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
          {
            title: 'Bài tập thiên lệch — trang PDF 94',
            url: '/references/practice-exercises.pdf#page=94',
            note: 'Có ví dụ vùng địa lý, tuổi và giới.',
          },
        ],
      },
      {
        label: 'Nguồn gốc Bias (3)',
        title: 'Bias qua các giai đoạn',
        summary:
          'Thiên lệch có thể xuất hiện khi thu thập, gán nhãn/xử lý, học và triển khai.',
        bullets: [
          'Thu thập chỉ ban ngày bỏ sót điều kiện ban đêm.',
          'Nhãn và trọng số có thể ảnh hưởng khác nhau.',
          'Thử nghiệm một địa phương không đại diện mọi nơi.',
        ],
        example: {
          title: 'Ví dụ áp dụng',
          content:
            'Xe chỉ thử ở một thành phố có thể gặp tình huống chưa được đánh giá khi triển khai rộng.',
        },
        pitfalls: ['Không đồng nhất gán nhãn, gán trọng số và tokenization.'],
        check: {
          question: 'Khi áp dụng nội dung này, cách hiểu nào phù hợp?',
          options: [
            'Thiên lệch có thể xuất hiện khi thu thập, gán nhãn/xử lý, học và triển khai.',
            'Có thể bỏ kiểm chứng vì công cụ AI đã bảo đảm mọi trường hợp.',
          ],
          answer: 0,
          explanation:
            'Thiên lệch có thể xuất hiện khi thu thập, gán nhãn/xử lý, học và triển khai. Thiên lệch có thể xuất hiện khi thu thập, gán nhãn/xử lý, học và triển khai.',
        },
        takeaway:
          'Thiên lệch có thể xuất hiện khi thu thập, gán nhãn/xử lý, học và triển khai.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 154–163',
            url: '/references/teacher-guide.pdf#page=154',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
          {
            title: 'Bài tập thiên lệch — trang PDF 94',
            url: '/references/practice-exercises.pdf#page=94',
            note: 'Có ví dụ vùng địa lý, tuổi và giới.',
          },
        ],
      },
      {
        label: 'Prompt thiên vị',
        title: 'Prompt có thể dẫn dắt đầu ra',
        summary:
          'Yêu cầu một chiều hoặc giả định định kiến có thể đưa bias vào kết quả.',
        bullets: [
          'Không chỉ hỏi lợi ích khi cần đánh giá khách quan.',
          'Tránh mặc định nhóm người có một đặc tính.',
          'Nêu nhiều góc nhìn và bằng chứng.',
        ],
        example: {
          title: 'Ví dụ áp dụng',
          content:
            'Hỏi cả ưu/nhược điểm MySQL theo nhu cầu cụ thể thay vì chỉ khen lợi ích.',
        },
        pitfalls: [
          'Hỏi về một công nghệ cụ thể không tự nó là vi phạm; xem mục tiêu và cách dẫn dắt.',
        ],
        check: {
          question: 'Khi áp dụng nội dung này, cách hiểu nào phù hợp?',
          options: [
            'Yêu cầu một chiều hoặc giả định định kiến có thể đưa bias vào kết quả.',
            'Có thể bỏ kiểm chứng vì công cụ AI đã bảo đảm mọi trường hợp.',
          ],
          answer: 0,
          explanation:
            'Yêu cầu một chiều hoặc giả định định kiến có thể đưa bias vào kết quả. Yêu cầu một chiều hoặc giả định định kiến có thể đưa bias vào kết quả.',
        },
        takeaway:
          'Yêu cầu một chiều hoặc giả định định kiến có thể đưa bias vào kết quả.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 154–163',
            url: '/references/teacher-guide.pdf#page=154',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
          {
            title: 'Bài tập thiên lệch — trang PDF 94',
            url: '/references/practice-exercises.pdf#page=94',
            note: 'Có ví dụ vùng địa lý, tuổi và giới.',
          },
        ],
      },
      {
        label: 'Prompt khách quan',
        title: 'Viết prompt cân bằng',
        summary:
          'Prompt trung lập giúp giảm định hướng một chiều, nhưng không thay thế dữ liệu và kiểm chứng.',
        bullets: [
          'Nêu tiêu chí so sánh.',
          'Yêu cầu nguồn và giới hạn kết luận.',
          'Kiểm tra nhóm/ý kiến bị bỏ sót.',
        ],
        example: {
          title: 'Ví dụ áp dụng',
          content:
            'So sánh hai lựa chọn theo chi phí, quyền riêng tư và tính phù hợp nhiệm vụ.',
        },
        pitfalls: [
          'Không yêu cầu cân bằng giả tạo giữa dữ kiện đúng và thông tin đã bị bác bỏ.',
        ],
        check: {
          question: 'Khi áp dụng nội dung này, cách hiểu nào phù hợp?',
          options: [
            'Prompt trung lập giúp giảm định hướng một chiều, nhưng không thay thế dữ liệu và kiểm chứng.',
            'Có thể bỏ kiểm chứng vì công cụ AI đã bảo đảm mọi trường hợp.',
          ],
          answer: 0,
          explanation:
            'Prompt trung lập giúp giảm định hướng một chiều, nhưng không thay thế dữ liệu và kiểm chứng. Prompt trung lập giúp giảm định hướng một chiều, nhưng không thay thế dữ liệu và kiểm chứng.',
        },
        takeaway:
          'Prompt trung lập giúp giảm định hướng một chiều, nhưng không thay thế dữ liệu và kiểm chứng.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 154–163',
            url: '/references/teacher-guide.pdf#page=154',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
          {
            title: 'Bài tập thiên lệch — trang PDF 94',
            url: '/references/practice-exercises.pdf#page=94',
            note: 'Có ví dụ vùng địa lý, tuổi và giới.',
          },
        ],
      },
      {
        label: 'Bảo vệ PII',
        title: 'Dữ liệu định danh cá nhân — PII',
        summary:
          'PII là dữ liệu có thể nhận diện một người, riêng lẻ hoặc kết hợp với dữ liệu khác.',
        bullets: [
          'Tên, email, địa chỉ, tài khoản và hồ sơ đều cần xem xét.',
          'Giảm dữ liệu đưa vào công cụ công cộng.',
          'Thay bằng dữ liệu mô phỏng khi học.',
        ],
        example: {
          title: 'Ví dụ áp dụng',
          content:
            'Tên trường, lớp và kết quả hiếm gặp có thể tái nhận diện học sinh dù đã bỏ tên.',
        },
        pitfalls: ['Che tên chưa đủ đảm bảo ẩn danh.'],
        check: {
          question: 'Khi áp dụng nội dung này, cách hiểu nào phù hợp?',
          options: [
            'PII là dữ liệu có thể nhận diện một người, riêng lẻ hoặc kết hợp với dữ liệu khác.',
            'Có thể bỏ kiểm chứng vì công cụ AI đã bảo đảm mọi trường hợp.',
          ],
          answer: 0,
          explanation:
            'PII là dữ liệu có thể nhận diện một người, riêng lẻ hoặc kết hợp với dữ liệu khác. PII là dữ liệu có thể nhận diện một người, riêng lẻ hoặc kết hợp với dữ liệu khác.',
        },
        takeaway:
          'PII là dữ liệu có thể nhận diện một người, riêng lẻ hoặc kết hợp với dữ liệu khác.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 173–181',
            url: '/references/teacher-guide.pdf#page=173',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
        examNote:
          'Câu 14: chấm theo từng dòng IIG. Khi sử dụng thực tế, không nhập mã PIN và dữ liệu nhạy cảm vào công cụ chưa được phê duyệt; đọc chính sách áp dụng.',
      },
      {
        label: 'Dữ liệu nhạy cảm',
        title: 'Dữ liệu nhạy cảm và dữ liệu nội bộ',
        summary:
          'Dữ liệu tài chính, sức khỏe, trẻ em và bí mật nội bộ cần được xử lý theo quyền truy cập và chính sách phù hợp.',
        bullets: [
          'Chỉ dùng công cụ đã được tổ chức phê duyệt.',
          'Không nhập PIN/mật khẩu để nhờ AI phân tích.',
          'Phân loại dữ liệu và giới hạn người truy cập.',
        ],
        example: {
          title: 'Ví dụ áp dụng',
          content:
            'Dùng bảng doanh thu giả lập thay vì tài khoản và mã PIN thật.',
        },
        pitfalls: [
          'Không mặc định dữ liệu công ty không phải PII thì được công khai.',
        ],
        check: {
          question: 'Khi áp dụng nội dung này, cách hiểu nào phù hợp?',
          options: [
            'Dữ liệu tài chính, sức khỏe, trẻ em và bí mật nội bộ cần được xử lý theo quyền truy cập và chính sách phù hợp.',
            'Có thể bỏ kiểm chứng vì công cụ AI đã bảo đảm mọi trường hợp.',
          ],
          answer: 0,
          explanation:
            'Dữ liệu tài chính, sức khỏe, trẻ em và bí mật nội bộ cần được xử lý theo quyền truy cập và chính sách phù hợp. Dữ liệu tài chính, sức khỏe, trẻ em và bí mật nội bộ cần được xử lý theo quyền truy cập và chính sách phù hợp.',
        },
        takeaway:
          'Dữ liệu tài chính, sức khỏe, trẻ em và bí mật nội bộ cần được xử lý theo quyền truy cập và chính sách phù hợp.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 173–181',
            url: '/references/teacher-guide.pdf#page=173',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Che dấu dữ liệu tĩnh',
        title: 'Che dữ liệu trước khi chia sẻ',
        summary:
          'Masking thay dữ liệu nhạy cảm bằng giá trị che/giả để giảm phơi lộ; hiệu quả phụ thuộc cách thực hiện.',
        bullets: [
          'Kiểm tra cả trường trực tiếp và thông tin kết hợp.',
          'Giữ dữ liệu gốc trong môi trường được kiểm soát.',
          'Đánh giá nguy cơ tái nhận diện.',
        ],
        example: {
          title: 'Ví dụ áp dụng',
          content: 'Thay email thật bằng địa chỉ giả trước bài tập.',
        },
        pitfalls: [
          'Masking không tự động bảo đảm không thể khôi phục hay suy ra danh tính.',
        ],
        check: {
          question: 'Khi áp dụng nội dung này, cách hiểu nào phù hợp?',
          options: [
            'Masking thay dữ liệu nhạy cảm bằng giá trị che/giả để giảm phơi lộ; hiệu quả phụ thuộc cách thực hiện.',
            'Có thể bỏ kiểm chứng vì công cụ AI đã bảo đảm mọi trường hợp.',
          ],
          answer: 0,
          explanation:
            'Masking thay dữ liệu nhạy cảm bằng giá trị che/giả để giảm phơi lộ; hiệu quả phụ thuộc cách thực hiện. Masking thay dữ liệu nhạy cảm bằng giá trị che/giả để giảm phơi lộ; hiệu quả phụ thuộc cách thực hiện.',
        },
        takeaway:
          'Masking thay dữ liệu nhạy cảm bằng giá trị che/giả để giảm phơi lộ; hiệu quả phụ thuộc cách thực hiện.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 173–181',
            url: '/references/teacher-guide.pdf#page=173',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Phân biệt kỹ thuật',
        title: 'Token bảo mật khác token ngôn ngữ',
        summary:
          'Trong bảo mật, tokenization dùng mã đại diện cho giá trị nhạy cảm; trong NLP, tokenization chia dữ liệu thành đơn vị mô hình.',
        bullets: [
          'Tên giả/mã đại diện vẫn có thể nối lại người thật nếu còn bảng ánh xạ.',
          'Bảo vệ bảng ánh xạ và quyền truy cập.',
          'Không coi bút danh là ẩn danh tuyệt đối.',
        ],
        example: {
          title: 'Ví dụ áp dụng',
          content: 'KH001 thay tên khách hàng, bảng ánh xạ nằm riêng.',
        },
        pitfalls: [
          'Tokenization không đồng nghĩa mã hóa mật mã trong mọi hệ thống.',
        ],
        check: {
          question: 'Khi áp dụng nội dung này, cách hiểu nào phù hợp?',
          options: [
            'Trong bảo mật, tokenization dùng mã đại diện cho giá trị nhạy cảm; trong NLP, tokenization chia dữ liệu thành đơn vị mô hình.',
            'Có thể bỏ kiểm chứng vì công cụ AI đã bảo đảm mọi trường hợp.',
          ],
          answer: 0,
          explanation:
            'Trong bảo mật, tokenization dùng mã đại diện cho giá trị nhạy cảm; trong NLP, tokenization chia dữ liệu thành đơn vị mô hình. Trong bảo mật, tokenization dùng mã đại diện cho giá trị nhạy cảm; trong NLP, tokenization chia dữ liệu thành đơn vị mô hình.',
        },
        takeaway:
          'Trong bảo mật, tokenization dùng mã đại diện cho giá trị nhạy cảm; trong NLP, tokenization chia dữ liệu thành đơn vị mô hình.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 173–181',
            url: '/references/teacher-guide.pdf#page=173',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Quản trị dữ liệu',
        title: 'Opt-out và chính sách dữ liệu',
        summary:
          'Khả năng từ chối dùng dữ liệu huấn luyện phụ thuộc nhà cung cấp, dịch vụ và thiết lập.',
        bullets: [
          'Đọc chính sách lưu dữ liệu, chia sẻ và huấn luyện.',
          'Kiểm tra tùy chọn nếu có, không suy từ nhãn “AI”.',
          'Phân biệt ngữ cảnh hội thoại, lịch sử và dữ liệu huấn luyện.',
        ],
        example: {
          title: 'Ví dụ áp dụng',
          content:
            'Bài tập yêu cầu mở cài đặt riêng tư rồi ghi lại các lựa chọn thực tế.',
        },
        pitfalls: [
          'Không hứa công cụ quên dữ liệu sau phiên hoặc nối IP với PIN theo một quy tắc chung.',
        ],
        check: {
          question: 'Khi áp dụng nội dung này, cách hiểu nào phù hợp?',
          options: [
            'Khả năng từ chối dùng dữ liệu huấn luyện phụ thuộc nhà cung cấp, dịch vụ và thiết lập.',
            'Có thể bỏ kiểm chứng vì công cụ AI đã bảo đảm mọi trường hợp.',
          ],
          answer: 0,
          explanation:
            'Khả năng từ chối dùng dữ liệu huấn luyện phụ thuộc nhà cung cấp, dịch vụ và thiết lập. Khả năng từ chối dùng dữ liệu huấn luyện phụ thuộc nhà cung cấp, dịch vụ và thiết lập.',
        },
        takeaway:
          'Khả năng từ chối dùng dữ liệu huấn luyện phụ thuộc nhà cung cấp, dịch vụ và thiết lập.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 173–181',
            url: '/references/teacher-guide.pdf#page=173',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Bản quyền (Copyright)',
        title: 'Quyền sử dụng nội dung',
        summary:
          'Có thể có rủi ro bản quyền khi sao chép hoặc sử dụng nội dung thiếu quyền; cần kiểm tra giấy phép và bối cảnh.',
        bullets: [
          'Ưu tiên nội dung tự tạo hoặc có giấy phép phù hợp.',
          'Công khai trên web không đồng nghĩa miễn quyền sử dụng.',
          'Ghi nguồn không luôn thay thế xin phép.',
        ],
        example: {
          title: 'Ví dụ áp dụng',
          content: 'Kiểm tra giấy phép ảnh trước khi đưa vào quảng cáo.',
        },
        pitfalls: [
          'Không suy ra mọi phong cách tương tự đều là vi phạm, hoặc AI tạo thì tự động không có rủi ro.',
        ],
        check: {
          question: 'Khi áp dụng nội dung này, cách hiểu nào phù hợp?',
          options: [
            'Có thể có rủi ro bản quyền khi sao chép hoặc sử dụng nội dung thiếu quyền; cần kiểm tra giấy phép và bối cảnh.',
            'Có thể bỏ kiểm chứng vì công cụ AI đã bảo đảm mọi trường hợp.',
          ],
          answer: 0,
          explanation:
            'Có thể có rủi ro bản quyền khi sao chép hoặc sử dụng nội dung thiếu quyền; cần kiểm tra giấy phép và bối cảnh. Có thể có rủi ro bản quyền khi sao chép hoặc sử dụng nội dung thiếu quyền; cần kiểm tra giấy phép và bối cảnh.',
        },
        takeaway:
          'Có thể có rủi ro bản quyền khi sao chép hoặc sử dụng nội dung thiếu quyền; cần kiểm tra giấy phép và bối cảnh.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 164–172',
            url: '/references/teacher-guide.pdf#page=164',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Nhãn hiệu (Trademark)',
        title: 'Nhãn hiệu và khả năng gây nhầm lẫn',
        summary:
          'Logo/tên thương hiệu tương tự có thể tạo rủi ro nhãn hiệu; không chỉ kiểm tra ảnh có đẹp hay không.',
        bullets: [
          'Xem quyền đối với logo và phạm vi sử dụng.',
          'Tránh làm người xem hiểu nhầm nguồn gốc/liên kết.',
          'Đưa trường hợp chưa rõ cho người có thẩm quyền.',
        ],
        example: {
          title: 'Ví dụ áp dụng',
          content:
            'Logo quảng cáo giống thương hiệu đã có cần rà quyền sử dụng.',
        },
        pitfalls: [
          'Một bài ghép quyền chỉ là nhận diện nguy cơ, không phải phán quyết pháp lý.',
        ],
        check: {
          question: 'Khi áp dụng nội dung này, cách hiểu nào phù hợp?',
          options: [
            'Logo/tên thương hiệu tương tự có thể tạo rủi ro nhãn hiệu; không chỉ kiểm tra ảnh có đẹp hay không.',
            'Có thể bỏ kiểm chứng vì công cụ AI đã bảo đảm mọi trường hợp.',
          ],
          answer: 0,
          explanation:
            'Logo/tên thương hiệu tương tự có thể tạo rủi ro nhãn hiệu; không chỉ kiểm tra ảnh có đẹp hay không. Logo/tên thương hiệu tương tự có thể tạo rủi ro nhãn hiệu; không chỉ kiểm tra ảnh có đẹp hay không.',
        },
        takeaway:
          'Logo/tên thương hiệu tương tự có thể tạo rủi ro nhãn hiệu; không chỉ kiểm tra ảnh có đẹp hay không.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 164–172',
            url: '/references/teacher-guide.pdf#page=164',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Sáng chế (Patent)',
        title: 'Sáng chế: tách người phát minh, đơn nộp và bảo hộ',
        summary:
          'Việc dùng AI hỗ trợ thiết kế không tự xác định ai là người phát minh hoặc có đủ điều kiện bảo hộ.',
        bullets: [
          'Phân biệt người phát minh với chủ sở hữu quyền.',
          'Nộp đơn khác được cấp bằng.',
          'Ghi lại đóng góp của con người và cần kiểm tra quy định áp dụng.',
        ],
        example: {
          title: 'Ví dụ áp dụng',
          content:
            'Câu 54 chưa nêu đủ đóng góp con người để chọn riêng một cách dùng AI.',
        },
        pitfalls: [
          'Không học rằng mọi sản phẩm AI thiết kế lại đều đủ điều kiện nộp/được cấp bằng.',
        ],
        check: {
          question: 'Khi áp dụng nội dung này, cách hiểu nào phù hợp?',
          options: [
            'Việc dùng AI hỗ trợ thiết kế không tự xác định ai là người phát minh hoặc có đủ điều kiện bảo hộ.',
            'Có thể bỏ kiểm chứng vì công cụ AI đã bảo đảm mọi trường hợp.',
          ],
          answer: 0,
          explanation:
            'Việc dùng AI hỗ trợ thiết kế không tự xác định ai là người phát minh hoặc có đủ điều kiện bảo hộ. Việc dùng AI hỗ trợ thiết kế không tự xác định ai là người phát minh hoặc có đủ điều kiện bảo hộ.',
        },
        takeaway:
          'Việc dùng AI hỗ trợ thiết kế không tự xác định ai là người phát minh hoặc có đủ điều kiện bảo hộ.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 164–172',
            url: '/references/teacher-guide.pdf#page=164',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
        examNote:
          'Câu 54: IIG chọn tình huống AI hỗ trợ cải tiến thiết kế có sẵn. Không suy ra chỉ việc dùng AI cải tiến là tự đủ mọi điều kiện cấp bằng.',
      },
      {
        label: 'Khung pháp lý',
        title: 'Kiểm tra rủi ro theo bối cảnh',
        summary:
          'Nghĩa vụ phụ thuộc nơi áp dụng, dữ liệu, nội dung và mục đích; tài liệu nền tảng không thay thế kết luận pháp lý cụ thể.',
        bullets: [
          'Xem quyền sở hữu trí tuệ.',
          'Xem dữ liệu cá nhân, phân biệt đối xử và hợp đồng khi liên quan.',
          'Xác định người phê duyệt trước khi sử dụng.',
        ],
        example: {
          title: 'Ví dụ áp dụng',
          content:
            'Một hệ thống tuyển dụng cần xem dữ liệu và công bằng, ngoài quyền dùng phần mềm.',
        },
        pitfalls: [
          'Không áp một danh sách luật cố định cho mọi doanh nghiệp/quốc gia.',
        ],
        check: {
          question: 'Khi áp dụng nội dung này, cách hiểu nào phù hợp?',
          options: [
            'Nghĩa vụ phụ thuộc nơi áp dụng, dữ liệu, nội dung và mục đích; tài liệu nền tảng không thay thế kết luận pháp lý cụ thể.',
            'Có thể bỏ kiểm chứng vì công cụ AI đã bảo đảm mọi trường hợp.',
          ],
          answer: 0,
          explanation:
            'Nghĩa vụ phụ thuộc nơi áp dụng, dữ liệu, nội dung và mục đích; tài liệu nền tảng không thay thế kết luận pháp lý cụ thể. Nghĩa vụ phụ thuộc nơi áp dụng, dữ liệu, nội dung và mục đích; tài liệu nền tảng không thay thế kết luận pháp lý cụ thể.',
        },
        takeaway:
          'Nghĩa vụ phụ thuộc nơi áp dụng, dữ liệu, nội dung và mục đích; tài liệu nền tảng không thay thế kết luận pháp lý cụ thể.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 164–172',
            url: '/references/teacher-guide.pdf#page=164',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Thu thập web (Scraping)',
        title: 'Thu thập nguồn và ghi nhận quy trình',
        summary:
          'Kiểm tra quyền sử dụng nguồn và ghi rõ cách dùng AI để có thể giải trình.',
        bullets: [
          'Xác định tài liệu tự tạo, mở, công khai hay phải xin phép.',
          'Đọc điều khoản sử dụng theo mục đích.',
          'Lưu nguồn, phiên bản và phần đã chỉnh sửa.',
        ],
        example: {
          title: 'Ví dụ áp dụng',
          content:
            'Lập bảng tên ảnh, nguồn, giấy phép và mục đích trước khi xuất bản.',
        },
        pitfalls: ['Không coi mọi thứ tìm thấy trên internet là dữ liệu mở.'],
        check: {
          question: 'Khi áp dụng nội dung này, cách hiểu nào phù hợp?',
          options: [
            'Kiểm tra quyền sử dụng nguồn và ghi rõ cách dùng AI để có thể giải trình.',
            'Có thể bỏ kiểm chứng vì công cụ AI đã bảo đảm mọi trường hợp.',
          ],
          answer: 0,
          explanation:
            'Kiểm tra quyền sử dụng nguồn và ghi rõ cách dùng AI để có thể giải trình. Kiểm tra quyền sử dụng nguồn và ghi rõ cách dùng AI để có thể giải trình.',
        },
        takeaway:
          'Kiểm tra quyền sử dụng nguồn và ghi rõ cách dùng AI để có thể giải trình.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 164–172',
            url: '/references/teacher-guide.pdf#page=164',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Tội danh Phỉ báng',
        title: 'Thông tin sai có thể gây hại danh dự',
        summary:
          'Nội dung AI sai về người/tổ chức có thể gây thiệt hại và rủi ro pháp lý tùy quy định, bối cảnh.',
        bullets: [
          'Kiểm tra cáo buộc trước khi chia sẻ.',
          'Không biến suy đoán thành dữ kiện.',
          'Sửa hoặc gỡ thông tin sai qua quy trình phù hợp.',
        ],
        example: {
          title: 'Ví dụ áp dụng',
          content:
            'AI bịa một cáo buộc: cần đối chiếu nguồn, không đăng lại ngay.',
        },
        pitfalls: [
          'Không khẳng định mọi thông tin sai đều cấu thành cùng một tội danh ở mọi nơi.',
        ],
        check: {
          question: 'Khi áp dụng nội dung này, cách hiểu nào phù hợp?',
          options: [
            'Nội dung AI sai về người/tổ chức có thể gây thiệt hại và rủi ro pháp lý tùy quy định, bối cảnh.',
            'Có thể bỏ kiểm chứng vì công cụ AI đã bảo đảm mọi trường hợp.',
          ],
          answer: 0,
          explanation:
            'Nội dung AI sai về người/tổ chức có thể gây thiệt hại và rủi ro pháp lý tùy quy định, bối cảnh. Nội dung AI sai về người/tổ chức có thể gây thiệt hại và rủi ro pháp lý tùy quy định, bối cảnh.',
        },
        takeaway:
          'Nội dung AI sai về người/tổ chức có thể gây thiệt hại và rủi ro pháp lý tùy quy định, bối cảnh.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 182–190',
            url: '/references/teacher-guide.pdf#page=182',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Hành vi gây hại',
        title: 'Mạo danh, bắt nạt và rủi ro danh tính',
        summary:
          'AI có thể khuếch đại mạo danh, quấy rối và rò rỉ dữ liệu; cần phòng ngừa và xử lý có trách nhiệm.',
        bullets: [
          'Giảm phơi lộ PII.',
          'Kiểm tra nguồn yêu cầu nhạy cảm qua kênh độc lập.',
          'Ghi nhận sự cố và báo người phụ trách.',
        ],
        example: {
          title: 'Ví dụ áp dụng',
          content:
            'Giọng nói giống cấp quản lý không đủ để xác nhận yêu cầu chuyển tiền.',
        },
        pitfalls: [
          'Trách nhiệm cụ thể phụ thuộc hành vi và quy định, không tự quy hết cho một bên.',
        ],
        check: {
          question: 'Khi áp dụng nội dung này, cách hiểu nào phù hợp?',
          options: [
            'AI có thể khuếch đại mạo danh, quấy rối và rò rỉ dữ liệu; cần phòng ngừa và xử lý có trách nhiệm.',
            'Có thể bỏ kiểm chứng vì công cụ AI đã bảo đảm mọi trường hợp.',
          ],
          answer: 0,
          explanation:
            'AI có thể khuếch đại mạo danh, quấy rối và rò rỉ dữ liệu; cần phòng ngừa và xử lý có trách nhiệm. AI có thể khuếch đại mạo danh, quấy rối và rò rỉ dữ liệu; cần phòng ngừa và xử lý có trách nhiệm.',
        },
        takeaway:
          'AI có thể khuếch đại mạo danh, quấy rối và rò rỉ dữ liệu; cần phòng ngừa và xử lý có trách nhiệm.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 182–190',
            url: '/references/teacher-guide.pdf#page=182',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Deepfake & Gắn nhãn',
        title: 'Deepfake, minh bạch và gắn nhãn',
        summary:
          'Nội dung mô phỏng người thật cần được xử lý minh bạch; yêu cầu gắn nhãn phụ thuộc bối cảnh, nền tảng và quy định.',
        bullets: [
          'Không làm người xem hiểu nhầm nội dung là sự kiện thật.',
          'Xem quyền hình ảnh/giọng nói.',
          'Ghi nhận nội dung đã tạo/chỉnh bằng AI khi phù hợp.',
        ],
        example: {
          title: 'Ví dụ áp dụng',
          content:
            'Avatar giáo viên ảo cần tránh gây hiểu nhầm là ghi hình người thật.',
        },
        pitfalls: [
          'Watermark không chứng minh nội dung đúng và không là nghĩa vụ giống nhau trong mọi tình huống.',
        ],
        check: {
          question: 'Khi áp dụng nội dung này, cách hiểu nào phù hợp?',
          options: [
            'Nội dung mô phỏng người thật cần được xử lý minh bạch; yêu cầu gắn nhãn phụ thuộc bối cảnh, nền tảng và quy định.',
            'Có thể bỏ kiểm chứng vì công cụ AI đã bảo đảm mọi trường hợp.',
          ],
          answer: 0,
          explanation:
            'Nội dung mô phỏng người thật cần được xử lý minh bạch; yêu cầu gắn nhãn phụ thuộc bối cảnh, nền tảng và quy định. Nội dung mô phỏng người thật cần được xử lý minh bạch; yêu cầu gắn nhãn phụ thuộc bối cảnh, nền tảng và quy định.',
        },
        takeaway:
          'Nội dung mô phỏng người thật cần được xử lý minh bạch; yêu cầu gắn nhãn phụ thuộc bối cảnh, nền tảng và quy định.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 182–190',
            url: '/references/teacher-guide.pdf#page=182',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Giám sát con người',
        title: 'Con người rà soát và phê duyệt',
        summary:
          'Người sử dụng vẫn có trách nhiệm kiểm tra và quyết định cách dùng output; phân chia trách nhiệm thực tế còn tùy bối cảnh.',
        bullets: [
          'Xác định người duyệt nội dung.',
          'Kiểm tra kiến thức, nguồn, dữ liệu và ảnh hưởng tới người khác.',
          'Minh bạch phần AI hỗ trợ trong công việc/học tập.',
        ],
        example: {
          title: 'Ví dụ áp dụng',
          content:
            'Giáo viên kiểm tra đáp án và độ tuổi trước khi phát phiếu học tập AI.',
        },
        pitfalls: [
          'Không dùng AI như lý do miễn trách nhiệm, cũng không khẳng định chỉ một bên luôn chịu mọi trách nhiệm.',
        ],
        check: {
          question: 'Khi áp dụng nội dung này, cách hiểu nào phù hợp?',
          options: [
            'Người sử dụng vẫn có trách nhiệm kiểm tra và quyết định cách dùng output; phân chia trách nhiệm thực tế còn tùy bối cảnh.',
            'Có thể bỏ kiểm chứng vì công cụ AI đã bảo đảm mọi trường hợp.',
          ],
          answer: 0,
          explanation:
            'Người sử dụng vẫn có trách nhiệm kiểm tra và quyết định cách dùng output; phân chia trách nhiệm thực tế còn tùy bối cảnh. Người sử dụng vẫn có trách nhiệm kiểm tra và quyết định cách dùng output; phân chia trách nhiệm thực tế còn tùy bối cảnh.',
        },
        takeaway:
          'Người sử dụng vẫn có trách nhiệm kiểm tra và quyết định cách dùng output; phân chia trách nhiệm thực tế còn tùy bối cảnh.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 182–190',
            url: '/references/teacher-guide.pdf#page=182',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
      {
        label: 'Tác động xã hội',
        title: 'Tác động xã hội và khoảng cách số',
        summary:
          'AI hỗ trợ học tập, sáng tạo và giao tiếp, đồng thời có thể làm tăng phụ thuộc và bất bình đẳng tiếp cận.',
        bullets: [
          'Lợi ích: tóm tắt, dịch thuật, tạo học liệu.',
          'Rủi ro: thông tin sai, giảm tương tác, thay đổi công việc.',
          'Xem khả năng tiếp cận công nghệ giữa các nhóm.',
        ],
        example: {
          title: 'Ví dụ áp dụng',
          content:
            'Kết hợp AI soạn nháp với thảo luận nhóm thay vì giao toàn bộ suy nghĩ cho AI.',
        },
        pitfalls: [
          'Không coi AI luôn thay thế mọi công việc hay luôn mang lại lợi ích ngang nhau cho mọi người.',
        ],
        check: {
          question: 'Khi áp dụng nội dung này, cách hiểu nào phù hợp?',
          options: [
            'AI hỗ trợ học tập, sáng tạo và giao tiếp, đồng thời có thể làm tăng phụ thuộc và bất bình đẳng tiếp cận.',
            'Có thể bỏ kiểm chứng vì công cụ AI đã bảo đảm mọi trường hợp.',
          ],
          answer: 0,
          explanation:
            'AI hỗ trợ học tập, sáng tạo và giao tiếp, đồng thời có thể làm tăng phụ thuộc và bất bình đẳng tiếp cận. AI hỗ trợ học tập, sáng tạo và giao tiếp, đồng thời có thể làm tăng phụ thuộc và bất bình đẳng tiếp cận.',
        },
        takeaway:
          'AI hỗ trợ học tập, sáng tạo và giao tiếp, đồng thời có thể làm tăng phụ thuộc và bất bình đẳng tiếp cận.',
        sources: [
          {
            title: 'Teacher Guide — trang PDF 191–198',
            url: '/references/teacher-guide.pdf#page=191',
            note: 'Đọc phần bài học liên quan; các ví dụ trên slide là diễn giải để tự học.',
          },
        ],
      },
    ],
  },
};

export const THEORY_TOTAL = Object.values(THEORY_MODULES).reduce(
  (sum, module) => sum + module.slides.length,
  0,
);
