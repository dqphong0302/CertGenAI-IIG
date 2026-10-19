// Sổ tay Lý thuyết 19 Bài học Chuẩn Pearson Certiport Generative AI Foundation
// Trích xuất trực tiếp từ Giáo trình Tài liệu Giáo viên (Teacher Guide), Practice Exercises và Prompting Techniques

import type {
  CurriculumDomain,
  CurriculumLesson,
} from '@/shared/learning';

export const DOMAINS_INFO: CurriculumDomain[] = [
  {
    number: 1,
    name: 'Domain 1 – Các phương pháp và phương pháp luận của AI tạo sinh',
    shortName: 'Phương pháp & Mô hình',
    color: 'emerald',
    lessonRange: 'Bài 1 – Bài 6',
    description: 'Bản chất GenAI, phân biệt với Search Engine và AI dự đoán, vòng đời dữ liệu huấn luyện, mô hình nền tảng và giới hạn kỹ thuật.'
  },
  {
    number: 2,
    name: 'Domain 2 – Tạo nội dung bằng AI tạo sinh',
    shortName: 'Tạo nội dung',
    color: 'blue',
    lessonRange: 'Bài 7 – Bài 10',
    description: 'Cấu trúc câu lệnh căn bản, chuyển đổi định dạng/giọng điệu nội dung, kỹ thuật tạo ảnh và video có kiểm soát.'
  },
  {
    number: 3,
    name: 'Domain 3 – Kỹ thuật đặt câu lệnh',
    shortName: 'Kỹ thuật Prompting',
    color: 'amber',
    lessonRange: 'Bài 11 – Bài 13',
    description: 'Quy trình tinh chỉnh câu lệnh lặp lại, cung cấp dữ liệu bối cảnh (In-context) và 8 kỹ thuật prompting chuyên sâu (Few-shot, CoT, Self-consistency, Reverse...)'
  },
  {
    number: 4,
    name: 'Domain 4 – Đạo đức, Luật pháp và Trách nhiệm xã hội',
    shortName: 'Đạo đức, Pháp lý & An toàn',
    color: 'rose',
    lessonRange: 'Bài 14 – Bài 19',
    description: 'Xác minh sự thật chống ảo giác, giảm thiểu thiên vị (Bias), bản quyền & sở hữu trí tuệ, bảo mật PII, quản trị rủi ro Deepfake và tác động môi trường/xã hội.'
  }
];

export const CURRICULUM_LESSONS: CurriculumLesson[] = [
  {
    "id": "lesson-01",
    "number": 1,
    "domainNumber": 1,
    "domainName": "Domain 1 – Các phương pháp và phương pháp luận của AI tạo sinh",
    "title": "Bài 1. Định nghĩa AI tạo sinh",
    "duration": "45 phút",
    "examWeight": "Rất cao",
    "pearsonObjectives": [
      "Định nghĩa Generative AI",
      "So sánh và đối chiếu Generative AI với AI dự đoán, AI phân biệt, AI phân tích, AI thống kê",
      "So sánh và đối chiếu Generative AI với các công cụ tìm kiếm."
    ],
    "summary": "Đây là bài học “mở khóa nhận thức”. Nếu người học không hiểu đúng bài này, các bài sau rất dễ bị học lệch theo kiểu: Vì vậy, giáo viên cần xem Bài 1 là bài xây nền khái niệm, không phải bài chạy theo thao tác công cụ.",
    "keyKnowledge": [
      "Generative AI là loại AI có thể tạo ra nội dung mới, thay vì chỉ sắp xếp, phân loại hoặc dự đoán dữ liệu.",
      "Không phải mọi công cụ AI đều là Generative AI.",
      "Search engine chủ yếu giúp người dùng tìm và truy xuất thông tin đã có; Generative AI thường tạo ra phản hồi mới dựa trên mô hình đã được huấn luyện.",
      "Generative AI có thể rất hữu ích trong học tập, nghề nghiệp và đời sống, đúng như tinh thần của chứng chỉ Pearson – Certiport, nhưng đầu ra của nó vẫn cần được đánh giá và kiểm chứng khi cần thiết."
    ],
    "commonPitfalls": [
      "“Có AI” đồng nghĩa với “là Gen AI”.",
      "ChatGPT, Gemini, Copilot chỉ là “Google mới”.",
      "AI tạo sinh luôn đúng vì trả lời rất mạch lạc.",
      "Nếu AI trả lời trực tiếp thì không cần kiểm tra nguồn nữa. IIG Vietnam                               Generative AI Teacher Guide                                       1 === PDF PAGE 28 === Bài này cần gieo được cho học viên 3 nhận thức quan trọng:",
      "Gen AI tạo ra nội dung mới.",
      "Search engine tìm ra nguồn thông tin đã có."
    ],
    "distractorTraps": [
      "Hỏi tình huống rồi buộc chọn xem đây là “tạo sinh”, “dự đoán”, “phân loại” hay “phân tích”.",
      "Hỏi xem công cụ nào phù hợp hơn cho một nhu cầu cụ thể.",
      "Dùng một mô tả gần giống giữa search engine và Gen AI để đánh lừa người học.",
      "Không nên chỉ cho học viên học thuộc định nghĩa.",
      "Cần luyện dạng: ⬧  So sánh, ⬧  Đối chiếu, ⬧  Nhận diện tình huống, ⬧  Chọn công cụ phù hợp."
    ],
    "examTips": [
      "Generate = tạo",
      "Retrieve = tìm/truy xuất",
      "Predict = dự đoán",
      "Discriminate = phân biệt/phân loại"
    ],
    "keyTerms": [
      {
        "term": "Generative AI",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Predictive AI",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Discriminative AI",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Analytical AI",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Statistical AI",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Search engine",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Generate",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Retrieve",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      }
    ],
    "prompts": {
      "basic": [
        "“Generative AI là gì?”",
        "“Hãy giải thích Generative AI bằng ngôn ngữ đơn giản.”",
        "“Hãy cho ví dụ về công cụ Generative AI.”"
      ],
      "advanced": [
        "“Hãy giải thích Generative AI cho học sinh lớp 8 bằng 3 ý ngắn và 2 ví dụ thực tế.”",
        "“Hãy so sánh Generative AI với công cụ tìm kiếm trong bảng gồm mục đích, đầu ra, ưu điểm và hạn chế.”",
        "“Hãy phân biệt Generative AI với predictive AI bằng ngôn ngữ đơn giản.”"
      ],
      "avoid": [
        "“AI là gì?” → quá rộng",
        "“ChatGPT có tốt hơn Google không?” → dễ kéo sang tranh luận cảm tính",
        "Prompt yêu cầu thông tin hiện hành mà không đi kèm bước kiểm chứng"
      ]
    },
    "relatedQuestionNumbers": [
      1,
      2,
      7,
      90,
      94,
      97,
      112,
      138,
      157
    ]
  },
  {
    "id": "lesson-02",
    "number": 2,
    "domainNumber": 1,
    "domainName": "Domain 1 – Các phương pháp và phương pháp luận của AI tạo sinh",
    "title": "Bài 2. Các quy trình của AI tạo sinh",
    "duration": "45 phút",
    "examWeight": "Rất cao",
    "pearsonObjectives": [
      "1.2 Giải thích các quy trình cơ bản mà Generative AI sử dụng để tạo ra đầu ra",
      "Hiểu rằng mỗi mô hình được đào tạo khác nhau",
      "LLMs cần lượng dữ liệu khổng lồ",
      "LLMs được huấn luyện đến mức có thể mang khuynh hướng/quan điểm",
      "Mô hình hình ảnh được huấn luyện từ các cặp văn bản–hình ảnh được gắn thẻ",
      "Việc huấn luyện mô hình tiêu tốn nhiều năng lượng và yêu cầu GPU mạnh mẽ."
    ],
    "summary": "Nếu Bài 1 giúp người học hiểu Generative AI là gì, thì Bài 2 giúp trả lời câu hỏi cốt lõi tiếp theo: AI tạo sinh làm thế nào để tạo ra đầu ra? Đây là bài rất quan trọng vì nếu không hiểu quy trình nền tảng:",
    "keyKnowledge": [
      "Mỗi mô hình AI tạo sinh được huấn luyện khác nhau.",
      "Mô hình văn bản và mô hình hình ảnh có quy trình và dữ liệu huấn luyện khác nhau.",
      "LLMs cần lượng dữ liệu cực lớn để tạo ra đầu ra có vẻ “thông minh”. IIG Vietnam                               Generative AI Teacher Guide                                       9 === PDF PAGE 36 ===",
      "Dữ liệu huấn luyện ảnh hưởng trực tiếp đến chất lượng, góc nhìn và khuynh hướng đầu ra của mô hình.",
      "Việc huấn luyện mô hình là một hoạt động đòi hỏi chi phí tính toán và phần cứng rất lớn."
    ],
    "commonPitfalls": [
      "Nghĩ rằng mọi mô hình AI đều học giống nhau.",
      "Nghĩ rằng AI “biết” vì nó thông minh như con người, thay vì hiểu rằng nó học từ dữ liệu.",
      "Không hiểu vì sao dữ liệu nhiều lại quan trọng.",
      "Không thấy mối liên hệ giữa dữ liệu huấn luyện và rủi ro thiên lệch/sai lệch.",
      "Tưởng CPU cũng đủ cho huấn luyện mô hình lớn như GPU. Bài này cần giúp học viên nắm được 3 ý quan trọng:",
      "AI tạo sinh phải được huấn luyện mới có thể tạo đầu ra."
    ],
    "distractorTraps": [
      "Câu hỏi so sánh mô hình văn bản và mô hình hình ảnh",
      "Câu hỏi hỏi vì sao LLM cần lượng dữ liệu lớn",
      "Câu hỏi về vai trò của GPU",
      "Câu hỏi hỏi ảnh hưởng của dữ liệu huấn luyện đến đầu ra AI",
      "Không chỉ dạy “mô hình này là gì”, mà phải dạy “mô hình này được huấn luyện ra sao”.",
      "Cần làm rõ rằng “data” trong AI không phải một chi tiết phụ, mà là nền móng của cả hệ thống."
    ],
    "examTips": [
      "Text model học từ rất nhiều văn bản",
      "Image model học từ cặp mô tả – hình ảnh",
      "Dữ liệu càng lớn, mô hình càng có nhiều mẫu để học",
      "Huấn luyện lớn → cần GPU mạnh"
    ],
    "keyTerms": [
      {
        "term": "Training",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "LLMs",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Dataset",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Text model",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Image model",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Labeling",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Data amounts",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Bias / opinions / viewpoints",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      }
    ],
    "prompts": {
      "basic": [
        "“LLM là gì?”",
        "“Hãy giải thích vì sao mô hình AI cần dữ liệu huấn luyện.”",
        "“Mô hình tạo ảnh được huấn luyện như thế nào?”"
      ],
      "advanced": [
        "“Hãy giải thích LLM cho học sinh THCS bằng 3 ý ngắn và 1 ví dụ đời thường.”",
        "“Hãy so sánh mô hình văn bản và mô hình hình ảnh trong bảng gồm: dữ liệu huấn luyện, đầu ra, ví dụ công cụ.”",
        "“Hãy giải thích vì sao GPU phù hợp hơn CPU cho huấn luyện mô hình AI bằng ngôn ngữ đơn giản.”"
      ],
      "avoid": [
        "Prompt quá kỹ thuật như hỏi sâu về kiến trúc mô hình khi chưa cần",
        "Prompt khiến học viên lẫn giữa học liệu nền tảng và kiến thức nghiên cứu chuyên sâu",
        "Prompt yêu cầu AI “khẳng định chắc chắn” các vấn đề đang được đơn giản hóa cho mục đích giáo dục"
      ]
    },
    "relatedQuestionNumbers": [
      21,
      23,
      24,
      25,
      89
    ]
  },
  {
    "id": "lesson-03",
    "number": 3,
    "domainNumber": 1,
    "domainName": "Domain 1 – Các phương pháp và phương pháp luận của AI tạo sinh",
    "title": "Bài 3. Các loại mô hình và thuật ngữ",
    "duration": "45 phút",
    "examWeight": "Cao",
    "pearsonObjectives": [
      "1.3 Nhận biết các loại mô hình và thuật ngữ liên quan đến Generative AI",
      "Nhận biết các khái niệm: neural networks, deep learning, tokenization, diffusion, GANs, VAEs, multimodal outputs."
    ],
    "summary": "Nếu: đọc, hiểu và không bị mơ hồ khi gặp các khái niệm thường xuyên xuất hiện trong tài liệu, trong công cụ AI, trong đề thi, hoặc trong truyền thông về Gen AI.",
    "keyKnowledge": [
      "Neural networks là nền tảng rất quan trọng của AI hiện đại và Generative AI.",
      "Tokenization là bước rất quan trọng để mô hình ngôn ngữ “xử lý” văn bản.",
      "Diffusion, GANs và VAEs là các hướng tiếp cận nổi bật trong tạo hình ảnh hoặc dữ liệu mới. IIG Vietnam                               Generative AI Teacher Guide                                      17 === PDF PAGE 44 ===",
      "Multimodal output cho thấy AI không chỉ làm việc với một loại dữ liệu, mà có thể kết hợp văn bản, hình ảnh, âm thanh và hơn thế nữa.",
      "Mục tiêu của bài là nhận biết và hiểu đúng thuật ngữ, không phải đi sâu vào toán học hay thuật toán."
    ],
    "commonPitfalls": [
      "Neural networks = AI tạo sinh",
      "Tokenization = dịch từ",
      "Diffusion, GANs và VAEs là “ba tên gọi của cùng một thứ”",
      "Multimodal nghĩa là “nhiều mô hình”, thay vì “nhiều dạng dữ liệu/đầu ra”",
      "Nghĩ rằng phải hiểu sâu kỹ thuật mới học được bài này Bài này cần giúp học viên nắm được 3 điều:",
      "Generative AI có một nền thuật ngữ riêng mà người học cần làm quen."
    ],
    "distractorTraps": [
      "Hỏi thuật ngữ nào liên quan đến chia nhỏ văn bản để mô hình xử lý",
      "Hỏi thuật ngữ nào liên quan đến tạo ảnh",
      "Hỏi multimodal output là gì",
      "Hỏi neural networks có vai trò gì",
      "Dùng mô tả ngắn rồi yêu cầu chọn đúng thuật ngữ",
      "Không cần cho học viên học giải thích quá dài."
    ],
    "examTips": [
      "Neural Networks = mạng nơ-ron",
      "Deep Learning = học sâu dựa trên nhiều lớp",
      "Tokenization = chia nhỏ văn bản để xử lý",
      "Diffusion = từ nhiễu ra hình",
      "Multimodal = nhiều dạng dữ liệu/đầu ra"
    ],
    "keyTerms": [
      {
        "term": "Neural networks",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Deep learning",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Tokenization",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Diffusion",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "GANs",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "VAEs",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Multimodal",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Output",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      }
    ],
    "prompts": {
      "basic": [
        "“Neural network là gì?”",
        "“Tokenization là gì?”",
        "“Multimodal output là gì?”"
      ],
      "advanced": [
        "“Hãy giải thích Neural Networks cho học sinh THCS bằng một ví dụ đời thường.”",
        "“Hãy so sánh Diffusion, GANs và VAEs trong bảng rất ngắn, dễ hiểu cho người mới họ"
      ],
      "avoid": [
        "Prompt yêu cầu giải thích quá sâu về toán học của Neural Networks",
        "Prompt khiến AI trả lời ở mức nghiên cứu chuyên sâu, vượt nhu cầu của chứng chỉ",
        "Prompt quá rộng như “hãy dạy em toàn bộ về Diffusion Models”"
      ]
    },
    "relatedQuestionNumbers": [
      91,
      123,
      162
    ]
  },
  {
    "id": "lesson-04",
    "number": 4,
    "domainNumber": 1,
    "domainName": "Domain 1 – Các phương pháp và phương pháp luận của AI tạo sinh",
    "title": "Bài 4. Các loại đầu vào, đầu ra, AI tạo sinh và nhiệm vụ",
    "duration": "45 phút",
    "examWeight": "Cao",
    "pearsonObjectives": [
      "1.3 Nhận dạng các loại đầu vào và đầu ra được sử dụng trong kịch bản Generative AI",
      "1.4 Nhận ra rằng các mô hình Generative AI có thể được tùy chỉnh để thực hiện các tác vụ cá nhân",
      "1.5 Chọn một công cụ thích hợp để thực hiện một nhiệm vụ cụ thể."
    ],
    "summary": "Nếu: thì Bài 4 là bài bắt đầu đưa người học vào tư duy sử dụng AI theo tác vụ thực tế. Đây là lúc học viên cần hiểu: Bài này rất quan trọng vì nó giúp người học chuyển từ “hiểu AI về mặt khái niệm” sang “dùng AI đúng công việc”.",
    "keyKnowledge": [
      "Generative AI không chỉ làm việc với văn bản; nó có thể nhận và sinh ra nhiều loại dữ liệu khác nhau.",
      "Một nhiệm vụ AI luôn nên được nhìn qua 3 câu hỏi: IIG Vietnam                               Generative AI Teacher Guide                                      25 === PDF PAGE 52 === ⬧  Đầu vào là gì, ⬧  Đầu ra mong muốn là gì, ⬧  Công cụ nào phù hợp nhất.",
      "Có thể dùng nhiều loại đầu vào để cải thiện chất lượng đầu ra, nhưng cần hiểu rõ mục đích của từng loại đầu vào.",
      "Công cụ AI khác nhau hỗ trợ khả năng khác nhau; lựa chọn công cụ là một kỹ năng quan trọng.",
      "Chọn công cụ không chỉ dựa vào “nổi tiếng”, mà nên dựa vào: ⬧  Mục đích, ⬧  Tính năng, ⬧  Dễ dùng, ⬧  Chi phí, ⬧  Cập nhật, ⬧  Bảo mật, ⬧  Chất lượng, ⬧  Khả năng tùy chỉnh."
    ],
    "commonPitfalls": [
      "Tưởng AI tạo sinh chỉ xử lý văn bản.",
      "Tưởng input càng nhiều thì output luôn tốt hơn.",
      "Tưởng công cụ nào nổi tiếng thì làm việc gì cũng tốt.",
      "Nhầm giữa “đa phương thức” với “đa công cụ”.",
      "Chọn công cụ theo thói quen mà không xét loại nhiệm vụ. Bài này cần giúp học viên nắm chắc 3 điều:",
      "Input khác nhau sẽ dẫn đến cách dùng AI khác nhau."
    ],
    "distractorTraps": [
      "Hỏi loại input/output phù hợp cho một tình huống",
      "Hỏi công cụ nào phù hợp hơn cho một tác vụ",
      "Hỏi yếu tố nào cần cân nhắc khi chọn công cụ",
      "Hỏi đầu vào nào có thể kết hợp để tối ưu hóa output",
      "Dạy theo logic tình huống → loại input → loại output → công cụ",
      "Không dạy rời rạc kiểu “đọc tên công cụ”"
    ],
    "examTips": [
      "Input = thứ mình đưa vào",
      "Output = thứ AI tạo ra",
      "Task quyết định Tool",
      "Không có công cụ tốt nhất cho mọi việc"
    ],
    "keyTerms": [
      {
        "term": "Input",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Output",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Text",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Image",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Audio",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Video",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Multimodal",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Task",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      }
    ],
    "prompts": {
      "basic": [
        "“Hãy cho em ví dụ về các loại đầu vào của Generative AI.”",
        "“Đầu ra phổ biến của Generative AI gồm những gì?”",
        "“Công cụ AI nào phù hợp để tạo hình ảnh?”"
      ],
      "advanced": [
        "“Hãy phân biệt các loại đầu vào của Generative AI bằng bảng gồm: loại input, ví dụ, đầu ra thường gặp.”",
        "“Hãy giúp em chọn công cụ phù hợp cho các nhiệm vụ sau: viết email, tạo poster, tóm tắt âm thanh.” 30                                        Generative AI Teacher Guide                            IIG Vietnam === PDF PAGE 57 ===",
        "“Hãy giải thích vì sao cùng là AI nhưng không phải công cụ nào cũng phù hợp cho mọi loại đầu ra.”"
      ],
      "avoid": [
        "Prompt quá chung như: “công cụ AI nào tốt nhất?”",
        "Prompt không nêu rõ nhiệm vụ, khiến AI trả lời mơ hồ",
        "Prompt quên nhắc tới yếu tố privacy hoặc chi phí khi đang bàn về công cụ dùng thật"
      ]
    },
    "relatedQuestionNumbers": [
      93,
      99,
      110,
      121,
      147,
      163
    ]
  },
  {
    "id": "lesson-05",
    "number": 5,
    "domainNumber": 1,
    "domainName": "Domain 1 – Các phương pháp và phương pháp luận của AI tạo sinh",
    "title": "Bài 5. Chọn một công cụ cho một nhiệm vụ",
    "duration": "45 phút",
    "examWeight": "Trung bình",
    "pearsonObjectives": [
      "1.4 Nhận ra rằng các mô hình Generative AI có thể được tùy chỉnh để thực hiện các tác vụ cá nhân",
      "1.5 Chọn một công cụ thích hợp để thực hiện một nhiệm vụ cụ thể."
    ],
    "summary": "Nếu: thực tế: không chỉ biết AI làm được gì, mà biết chọn đúng công cụ cho đúng việc. Đây là một bước rất quan trọng vì trong thực tế:",
    "keyKnowledge": [
      "Mỗi công cụ AI có điểm mạnh riêng và không công cụ nào là tối ưu cho mọi nhiệm vụ.",
      "Việc chọn công cụ phải dựa trên nhiệm vụ thực tế, không chỉ dựa trên mức độ nổi tiếng.",
      "Khi chọn công cụ, người dùng cần nhìn đồng thời nhiều yếu tố: ⬧  Mục tiêu, ⬧  Chất lượng đầu ra, ⬧  Ease of use, ⬧  Chi phí, ⬧   Privacy, ⬧   Security, ⬧  Khả năng tùy chỉnh.",
      "Các mô hình/công cụ tùy chỉnh như Custom GPT, Gems, Copilots cho thấy AI có thể được cấu hình để phù hợp với nhu cầu cá nhân hoặc tổ chức."
    ],
    "commonPitfalls": [
      "Nghĩ rằng công cụ nào “hot” nhất thì tốt nhất cho mọi việc.",
      "Chọn công cụ theo thói quen cá nhân thay vì theo tác vụ.",
      "Đánh giá công cụ chỉ dựa trên giá tiền hoặc giao diện đẹp.",
      "Không cân nhắc privacy/bảo mật khi dùng cho dữ liệu thật.",
      "Tưởng công cụ tùy chỉnh là phải biết lập trình rất sâu mới dùng được. Bài này cần giúp học viên nắm chắc 3 điều:",
      "Nhiệm vụ quyết định công cụ."
    ],
    "distractorTraps": [
      "Cho một nhiệm vụ và bắt chọn công cụ phù hợp nhất",
      "Hỏi tiêu chí nào nên cân nhắc khi chọn công cụ",
      "Hỏi vì sao trong môi trường doanh nghiệp nên ưu tiên công cụ có khả năng tùy chỉnh",
      "Hỏi công cụ nào phù hợp với tạo ảnh, văn bản, âm thanh hoặc video",
      "Dạy bằng tình huống cụ thể, không dạy theo kiểu liệt kê tên ứng dụng.",
      "Nên cho học viên tập chọn công cụ có lý do. IIG Vietnam                               Generative AI Teacher Guide                                      35 === PDF PAGE 62 ==="
    ],
    "examTips": [
      "Task first, tool second",
      "No best tool for everything 40                                        Generative AI Teacher Guide                            IIG Vietnam === PDF PAGE 67 ===",
      "Privacy and security matter",
      "Customization = công cụ có thể điều chỉnh cho nhu cầu riêng"
    ],
    "keyTerms": [
      {
        "term": "Tool selection",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Purpose",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Functionality",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Ease of use",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Cost",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Updates and support",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Data privacy",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Security",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      }
    ],
    "prompts": {
      "basic": [
        "“Công cụ AI nào phù hợp để tạo poster?”",
        "“Công cụ nào phù hợp để tóm tắt văn bản?”",
        "“Làm sao để chọn công cụ AI phù hợp?”"
      ],
      "advanced": [
        "“Hãy giúp em chọn công cụ AI phù hợp cho nhiệm vụ soạn email tiếng Anh chuyên nghiệp, và giải thích theo 4 tiêu chí: chất lượng, dễ dùng, bảo mật, chi phí.”",
        "“Hãy so sánh Canva AI, ChatGPT và Grammarly cho nhiệm vụ tạo poster sự kiện học đường.”",
        "“Hãy cho em checklist 6 tiêu chí để chọn công cụ Generative AI cho môi trường doanh nghiệp.”"
      ],
      "avoid": [
        "“Công cụ AI nào tốt nhất?” → quá rộng, thiếu bối cảnh",
        "“Cho em công cụ miễn phí tốt nhất cho mọi việc” → dễ dẫn tới câu trả lời thiếu thực tế",
        "Prompt không nêu nhiệm vụ rõ ràng, khiến đầu ra AI mơ hồ và khó dùng"
      ]
    },
    "relatedQuestionNumbers": [
      114
    ],
    "pedagogicalFramework": {
      "name": "Ma trận tiêu chí chọn công cụ AI (Tool Selection Matrix)",
      "description": "Bộ 5 tiêu chí lượng hóa hỗ trợ quyết định chọn công cụ AI theo thực tiễn triển khai trường học và doanh nghiệp:",
      "matrix": [
        {
          "criterion": "Phù hợp chức năng (Task Alignment)",
          "weight": "30%",
          "note": "Công cụ có xử lý đúng dạng input (text/ảnh/code/tệp) và tạo đúng định dạng output yêu cầu không"
        },
        {
          "criterion": "Chất lượng & Độ tin cậy (Output Quality)",
          "weight": "25%",
          "note": "Độ chính xác dữ kiện, khả năng bám sát tài liệu (grounding), hạn chế ảo giác"
        },
        {
          "criterion": "Bảo mật & Quyền riêng tư (Data Privacy)",
          "weight": "20%",
          "note": "Có tùy chọn opt-out không dùng dữ liệu để huấn luyện lại, cam kết bảo vệ PII"
        },
        {
          "criterion": "Chi phí & Bản quyền (Cost & IP Terms)",
          "weight": "15%",
          "note": "Gói miễn phí vs thương mại, quyền sở hữu sản phẩm tạo ra theo điều khoản TOS"
        },
        {
          "criterion": "Dễ sử dụng & Tích hợp (Usability & Integrations)",
          "weight": "10%",
          "note": "Giao diện thân thiện, hỗ trợ tiếng Việt, tích hợp vào Office/Google Workspace"
        }
      ]
    }
  },
  {
    "id": "lesson-06",
    "number": 6,
    "domainNumber": 1,
    "domainName": "Domain 1 – Các phương pháp và phương pháp luận của AI tạo sinh",
    "title": "Bài 6. Những hạn chế của AI tạo sinh",
    "duration": "45 phút",
    "examWeight": "Rất cao",
    "pearsonObjectives": [
      "1.6 Mô tả những hạn chế của Generative AI, gồm 7 ý chính đúng với cấu trúc bài học trong Student Book."
    ],
    "summary": "Nếu các bài trước chủ yếu giúp người học: hoàn hảo. Đây là bài chốt cuối Domain 1 nên có ý nghĩa bản lề:",
    "keyKnowledge": [
      "Đầu ra AI có thể trôi chảy nhưng vẫn sai.",
      "AI có thể đưa ra nội dung: ⬧   Sai sự thật, ⬧   Lỗi thời, ⬧  Có thành kiến, ⬧  Hoặc “nghe hợp lý” nhưng không có căn cứ rõ ràng.",
      "AI không phải lúc nào cũng nhất quán; cùng một câu hỏi có thể cho các đầu ra khác nhau.",
      "Dữ liệu hội thoại có thể bị dùng cho huấn luyện nếu người dùng không quản lý quyền riêng tư phù hợp.",
      "Không có một tiêu chuẩn chung áp dụng cho tất cả công cụ AI, nên người dùng phải hiểu rõ công cụ mình đang dùng.",
      "AI thay đổi rất nhanh; kỹ năng dùng AI phải luôn đi kèm khả năng cập nhật liên tục."
    ],
    "commonPitfalls": [
      "AI viết rất tự tin nên chắc là đúng.",
      "Nếu AI sai thì chỉ là do prompt chưa đủ tốt.",
      "Công cụ AI nào cũng xử lý quyền riêng tư giống nhau.",
      "Câu trả lời của AI hôm nay sẽ luôn giống ngày mai.",
      "Nếu một công cụ AI rất phổ biến thì chắc nó đã có tiêu chuẩn hoàn chỉnh và an toàn tuyệt đối. Bài này cần giúp người học nắm chắc 3 điều:",
      "AI mạnh nhưng không tuyệt đối đáng tin."
    ],
    "distractorTraps": [
      "Hỏi hạn chế nào liên quan đến độ chính xác đầu ra 44                                        Generative AI Teacher Guide                            IIG Vietnam === PDF PAGE 71 ===",
      "Hỏi hạn chế nào liên quan đến Privacy",
      "Hỏi vì sao AI có thể cho ra hai câu trả lời khác nhau",
      "Hỏi vì sao công việc dùng AI hôm nay có thể nhanh chóng lỗi thời",
      "Hỏi đâu là hệ quả của việc thiếu tiêu chuẩn chung",
      "Không chỉ dạy “AI có hạn chế”, mà phải dạy AI hạn chế ở những điểm cụ thể nào."
    ],
    "examTips": [
      "Unreliable ≠ always wrong, but not always safe to trust",
      "Bias = thiên lệch",
      "Misinformation = thông tin sai/lệch",
      "Hallucination = bịa ra một cách rất tự tin",
      "Consistency issue = cùng câu hỏi, có thể ra khác nhau"
    ],
    "keyTerms": [
      {
        "term": "Unreliable output",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Bias",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Misinformation",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Hallucination",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Processing power",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Internet access",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Privacy settings",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Standards",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      }
    ],
    "prompts": {
      "basic": [
        "“Những hạn chế của Generative AI là gì?”",
        "“Vì sao đầu ra AI có thể không đáng tin?”",
        "“Hallucination là gì?”"
      ],
      "advanced": [
        "“Hãy giải thích 7 hạn chế chính của Generative AI bằng ngôn ngữ đơn giản cho người mới họ"
      ],
      "avoid": [
        "“AI có luôn đúng không?” → quá chung",
        "“Có thể tin AI bao nhiêu phần trăm?” → dễ dẫn tới câu trả lời giả chính xác",
        "Prompt đưa dữ liệu thật, tài liệu thật hoặc thông tin nhạy cảm vào AI công cộng để “thử xem có an toàn không”"
      ]
    },
    "relatedQuestionNumbers": [
      4,
      18,
      19,
      102,
      145,
      160
    ]
  },
  {
    "id": "lesson-07",
    "number": 7,
    "domainNumber": 2,
    "domainName": "Domain 2 – Tạo nội dung bằng AI tạo sinh",
    "title": "Bài 7. Xác định câu lệnh (Prompt)",
    "duration": "45 phút",
    "examWeight": "Rất cao",
    "pearsonObjectives": [
      "2.1 Xác định lời nhắc thích hợp để gợi ra thông tin văn bản 1) Thu thập nội dung 2) Tóm tắt 3)  Sáng tạo nội dung và ý tưởng."
    ],
    "summary": "Nếu Domain 1 giúp người học hiểu: dùng Gen AI: biết xác định mình cần hỏi AI điều gì, theo kiểu nào, để nhận đúng loại đầu ra mong muốn. Đây là một bài nền tảng rất quan trọng vì nhiều người dùng AI chưa hiệu quả không phải vì công cụ kém, mà",
    "keyKnowledge": [
      "Prompt là cách người dùng diễn đạt yêu cầu với AI.",
      "Trước khi viết prompt, người dùng phải xác định mục tiêu của mình là gì.",
      "Trong Bài 7, prompt văn bản được chia thành 3 nhóm cơ bản: ⬧  Thu thập nội dung, ⬧  Tóm tắt, ⬧  Sáng tạo nội dung và ý tưởng.",
      "Cùng một chủ đề, nhưng nếu mục tiêu khác nhau thì prompt cũng phải khác nhau.",
      "Prompt mơ hồ thường dẫn đến đầu ra chung chung; prompt rõ mục tiêu giúp đầu ra hữu ích hơn."
    ],
    "commonPitfalls": [
      "Tưởng prompt chỉ là “gõ đại điều mình muốn”.",
      "Không phân biệt prompt hỏi để lấy thông tin với prompt yêu cầu AI tạo nội dung.",
      "Dùng một kiểu prompt cho mọi nhiệm vụ.",
      "Nghĩ rằng AI sẽ tự hiểu bối cảnh và mục tiêu dù mình không nói rõ. Bài này cần giúp người học nắm chắc 3 điều:",
      "Prompt tốt bắt đầu từ mục tiêu rõ.",
      "Thu thập – tóm tắt – sáng tạo là ba hướng prompt khác nhau."
    ],
    "distractorTraps": [
      "Đưa một tình huống rồi yêu cầu xác định prompt phù hợp nhất",
      "Hỏi prompt nào phù hợp để tóm tắt thay vì tạo nội dung mới",
      "Hỏi prompt nào thuộc nhóm thu thập nội dung",
      "Cho 2 prompt gần giống nhau và yêu cầu chọn prompt rõ mục tiêu hơn",
      "Không nên dạy prompt theo kiểu “thuộc mẫu câu” ngay từ đầu.",
      "Cần giúp học viên nhận ra: ⬧  Prompt này dùng để làm gì, ⬧  Khác mục tiêu thì phải đổi prompt."
    ],
    "examTips": [
      "Gather = lấy thông tin",
      "Summarize = rút gọn, hệ thống lại",
      "Create = tạo ý tưởng hoặc nội dung mới",
      "Prompt tốt = rõ mục tiêu"
    ],
    "keyTerms": [
      {
        "term": "Prompt",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Gather content",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Summarize",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Create content",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Generate ideas",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Text prompt",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Output",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      }
    ],
    "prompts": {
      "basic": [
        "“Hãy cho em 5 ý chính về năng lượng tái tạo.”",
        "“Hãy tóm tắt đoạn văn này thành 3 ý.”",
        "“Hãy gợi ý 5 ý tưởng cho poster về bảo vệ môi trường.”"
      ],
      "advanced": [
        "“Hãy cho em 5 ý chính về lợi ích của năng lượng tái tạo đối với học sinh THCS.”",
        "“Hãy tóm tắt đoạn văn này thành 4 gạch đầu dòng ngắn, dễ hiểu.”",
        "“Hãy gợi ý 5 slogan ngắn, dễ nhớ cho chiến dịch bảo vệ môi trường trong trường họ"
      ],
      "avoid": [
        "“Nói về AI.”",
        "“Viết cho em cái gì đó hay hay.”",
        "“Tóm tắt đi.” Những prompt này đều quá mơ hồ, thiếu mục tiêu rõ ràng."
      ]
    },
    "relatedQuestionNumbers": [
      9,
      34,
      47,
      56,
      58,
      64,
      69,
      72,
      85,
      132,
      135
    ],
    "pedagogicalFramework": {
      "name": "Cấu trúc câu lệnh chuẩn R-T-C-D-F-C",
      "description": "Khung câu lệnh toàn diện 6 thành phần giúp AI tạo sinh đạt độ chính xác và chất lượng đầu ra tối đa:",
      "steps": [
        "R - Role (Vai trò): Định vị chuyên gia cho AI (VD: Bạn là chuyên gia sư phạm THCS...)",
        "T - Task (Nhiệm vụ): Động từ hành động cụ thể (VD: Hãy soạn ma trận đề kiểm tra 15 phút...)",
        "C - Context (Bối cảnh): Đối tượng mục tiêu & mục đích (VD: Dành cho học sinh đại trà...)",
        "D - Data (Dữ liệu đầu vào): Văn bản nguồn, số liệu, đoạn trích đính kèm",
        "F - Format (Định dạng): Bảng biểu Markdown, JSON, danh sách 5 ý, giới hạn số từ",
        "C - Constraints (Ràng buộc): Chỉ lấy thông tin từ dữ liệu cung cấp, không suy diễn ngoài nguồn"
      ]
    }
  },
  {
    "id": "lesson-08",
    "number": 8,
    "domainNumber": 2,
    "domainName": "Domain 2 – Tạo nội dung bằng AI tạo sinh",
    "title": "Bài 8. Câu lệnh để chuyển đổi nội dung",
    "duration": "45 phút",
    "examWeight": "Cao",
    "pearsonObjectives": [
      "2.2 Xác định lời nhắc thích hợp để chuyển đổi nội dung, gồm 6 hướng đúng với cấu trúc Student Book."
    ],
    "summary": "Nếu Bài 7 giúp người học hiểu 3 mục tiêu nền của prompt văn bản: không chỉ lấy nội dung từ AI, mà dùng AI để biến đổi nội dung theo nhu cầu. Đây là bài rất quan trọng vì trong thực tế, người dùng AI thường không chỉ hỏi:",
    "keyKnowledge": [
      "Prompt không chỉ để “xin nội dung mới”, mà còn để biến đổi nội dung đang có.",
      "Trong Bài 8, người học cần hiểu 6 hướng chuyển đổi nội dung cơ bản theo đúng exam objectives và Student Book.",
      "Muốn chuyển đổi tốt, prompt phải nói rõ: ⬧  Chuyển đổi cái gì, ⬧  Thành dạng gì, ⬧  Cho ai, ⬧  Ở mức độ nào, ⬧  Theo phong cách nào nếu cần.",
      "AI có thể hỗ trợ rất tốt ở các tác vụ chuyển đổi, nhưng: ⬧  Không phải lúc nào cũng chính xác tuyệt đối, ⬧  Đặc biệt với dịch thuật, số liệu, biểu đồ hoặc nội dung chuyên môn."
    ],
    "commonPitfalls": [
      "Tưởng prompt chuyển đổi chỉ là “viết lại”.",
      "Không phân biệt giữa: ⬧  Tóm tắt, ⬧  Chỉnh sửa, ⬧  Đổi định dạng, ⬧  Cá nhân hóa.",
      "Tưởng AI tự hiểu cần đổi sang dạng nào dù mình không nói rõ.",
      "Dùng prompt quá chung nên đầu ra đổi chưa đúng yêu cầu. Bài này cần giúp người học nắm chắc 3 điều:",
      "AI có thể giúp biến đổi nội dung theo nhiều hướng.",
      "Mỗi hướng chuyển đổi cần prompt rõ mục tiêu."
    ],
    "distractorTraps": [
      "Hỏi prompt nào phù hợp để đổi đoạn văn thành bảng",
      "Hỏi prompt nào phù hợp để chỉnh sửa văn bản",
      "Hỏi prompt nào phù hợp để trực quan hóa nội dung 62                                        Generative AI Teacher Guide                            IIG Vietnam === PDF PAGE 89 ===",
      "Hỏi prompt nào dùng để dịch hoặc cá nhân hóa",
      "Cho các prompt gần giống nhau và yêu cầu chọn prompt đáp ứng mục tiêu chuyển đổi chính xác hơn",
      "Dạy bằng tình huống thực tế, không chỉ liệt kê 6 nhóm."
    ],
    "examTips": [
      "Reformat = đổi cách trình bày",
      "Edit/Proofread = sửa và soát lỗi",
      "Visualize = làm trực quan hơn",
      "Convert = đổi sang loại phương tiện khác",
      "Translate = đổi ngôn ngữ",
      "Personalize = điều chỉnh theo người nhận"
    ],
    "keyTerms": [
      {
        "term": "Reformat content",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Edit",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Proofread",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Visualize",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Convert content",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Translate",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Personalize",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Adapt content",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      }
    ],
    "prompts": {
      "basic": [
        "“Hãy chuyển nội dung này thành bảng.”",
        "“Hãy sửa lỗi chính tả và ngữ pháp trong đoạn này.”",
        "“Hãy tạo một hình minh họa cho nội dung này.”"
      ],
      "advanced": [
        "“Hãy trình bày nội dung sau dưới dạng bảng gồm 3 cột: khái niệm, ví dụ, ứng dụng.”",
        "“Hãy soát lỗi và viết lại email này theo phong cách chuyên nghiệp, lịch sự.”",
        "“Hãy đề xuất ý tưởng infographic đơn giản cho nội dung sau, gồm tiêu đề, 3 phần chính và hình minh họa gợi ý.”"
      ],
      "avoid": [
        "“Làm lại đoạn này.”",
        "“Viết hay hơn.”",
        "“Dịch đi.”"
      ]
    },
    "relatedQuestionNumbers": [
      8,
      33,
      125,
      154
    ]
  },
  {
    "id": "lesson-09",
    "number": 9,
    "domainNumber": 2,
    "domainName": "Domain 2 – Tạo nội dung bằng AI tạo sinh",
    "title": "Bài 9. Câu lệnh liên quan đến hình ảnh",
    "duration": "45 phút",
    "examWeight": "Rất cao",
    "pearsonObjectives": [
      "2.3 Xác định lời nhắc thích hợp cho hình ảnh, gồm:  Tạo image prompts,  Khám phá art styles,   Edit/transform images,   Describe images."
    ],
    "summary": "Nếu: dẫn của Gen AI: dùng prompt để làm việc với hình ảnh. Đây là bài có tính ứng dụng rất cao vì trong thực tế, người dùng AI hiện nay thường cần:",
    "keyKnowledge": [
      "Prompt hình ảnh phải rõ đối tượng, bối cảnh và chi tiết mong muốn.",
      "Trong Bài 9, người học cần nắm 4 nhóm prompt hình ảnh: ⬧  Tạo hình ảnh, ⬧  Khám phá phong cách nghệ thuật, ⬧  Chỉnh sửa/chuyển đổi hình ảnh, ⬧  Mô tả hình ảnh.",
      "Prompt hình ảnh thường cần refinement nhiều hơn prompt văn bản vì kết quả hình ảnh dễ lệch ý nếu mô tả chưa đủ rõ.",
      "Cần nhấn mạnh yếu tố: ⬧  Mục đích sử dụng hình ảnh, ⬧  Nguồn gốc, ⬧  Pháp lý, ⬧   Trách nhiệm khi dùng hình ảnh AI trong học tập/công việc."
    ],
    "commonPitfalls": [
      "Tưởng chỉ cần mô tả thật ngắn là AI sẽ “tự hiểu”.",
      "Không phân biệt giữa: ⬧  Tạo hình ảnh mới, ⬧  Chỉnh sửa ảnh cũ, ⬧  Mô tả ảnh có sẵn.",
      "Tưởng “khám phá phong cách nghệ thuật” chỉ là thêm từ “đẹp” hoặc “nghệ thuật”.",
      "Không để ý yếu tố pháp lý hoặc bản quyền khi dùng hình ảnh AI. Bài này cần giúp người học nắm chắc 3 điều:",
      "Prompt hình ảnh hiệu quả phải rõ và cụ thể.",
      "Tạo ảnh, chỉnh ảnh, mô tả ảnh là ba mục tiêu khác nhau."
    ],
    "distractorTraps": [
      "Hỏi prompt nào phù hợp để tạo ảnh mới",
      "Hỏi prompt nào phù hợp để đổi phong cách nghệ thuật",
      "Hỏi prompt nào thuộc nhóm chỉnh sửa ảnh",
      "Hỏi prompt nào dùng để mô tả ảnh",
      "Cho hai prompt tương tự nhau và yêu cầu chọn prompt cụ thể hơn",
      "Dạy bằng ví dụ trực quan càng nhiều càng tốt."
    ],
    "examTips": [
      "Create = tạo mới",
      "Art style = phong cách nghệ thuật",
      "Edit/Transform = sửa/chuyển đổi ảnh có sẵn",
      "Describe = mô tả ảnh",
      "Prompt hình ảnh tốt = rõ đối tượng + bối cảnh + phong cách + chi tiết"
    ],
    "keyTerms": [
      {
        "term": "Image prompt",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Create image",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Art style",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Edit image",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Transform image",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Describe image",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Visual details",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Metadata 72                                        Generative AI Teacher Guide                            IIG Vietnam",
        "meaning": "== PDF PAGE 99 ==="
      }
    ],
    "prompts": {
      "basic": [
        "“Tạo hình ảnh một thư viện trường học.”",
        "“Tạo hình ảnh về bảo vệ môi trường.”",
        "“Mô tả nội dung của bức ảnh này.”"
      ],
      "advanced": [
        "“Tạo hình ảnh một thư viện trường học hiện đại, ánh sáng tự nhiên, có học sinh đang đọc sách, phong cách minh họa giáo dụ"
      ],
      "avoid": [
        "“Tạo ảnh đẹp.”",
        "“Làm cái này nghệ thuật hơn.”",
        "“Sửa ảnh đi.”"
      ]
    },
    "relatedQuestionNumbers": [
      5,
      11,
      12,
      36,
      41,
      53,
      61,
      68,
      71,
      73,
      74,
      101,
      107,
      126,
      130,
      151,
      152
    ]
  },
  {
    "id": "lesson-10",
    "number": 10,
    "domainNumber": 2,
    "domainName": "Domain 2 – Tạo nội dung bằng AI tạo sinh",
    "title": "Bài 10. Câu lệnh liên quan đến video",
    "duration": "45 phút",
    "examWeight": "Cao",
    "pearsonObjectives": [],
    "summary": "Nếu: từ ảnh tĩnh sang nội dung có chuyển động, có lời nói, có phụ đề và có cấu trúc trình bày gần với sản phẩm số hoàn chỉnh hơn.",
    "keyKnowledge": [
      "Prompt video khác prompt ảnh ở chỗ phải mô tả được sự thay đổi theo thời gian.",
      "Trong Bài 10, học viên cần nắm 7 nhóm thao tác liên quan đến video theo đúng Student Book.",
      "Prompt video tốt thường cần nói rõ: ⬧  Nguồn đầu vào là gì, ⬧  Video dài bao lâu, ⬧  Vật thể/nhân vật chuyển động ra sao, ⬧  Có âm thanh hay không, ⬧  Giữ nguyên phần nào, ⬧  Sửa phần nào, ⬧  Phụ đề cho ai nếu cần.",
      "AI có thể hỗ trợ video rất nhanh, nhưng output dễ có giới hạn về: ⬧  Độ mượt, ⬧  Độ chân thực, ⬧  Kiểm soát chi tiết, ⬧  Và độ ổn định giữa các khung hình."
    ],
    "commonPitfalls": [
      "Tưởng prompt video chỉ là prompt ảnh dài hơn.",
      "Không phân biệt giữa: ⬧  Tạo video từ ảnh, ⬧  Tạo video từ câu lệnh, ⬧  Tạo nhân vật đọc kịch bản, ⬧  Chỉnh sửa video có sẵn.",
      "Không nói rõ thời lượng và chuyển động nên video ra không đúng ý.",
      "Tưởng video AI lúc nào cũng mượt và đủ dùng cho sản phẩm chuyên nghiệp. Bài này cần giúp người học nắm chắc 3 điều:",
      "Prompt video phải mô tả được thời gian và chuyển động.",
      "Tạo video, chỉnh video, làm avatar video và thêm phụ đề là các mục tiêu khác nhau."
    ],
    "distractorTraps": [
      "Hỏi prompt nào phù hợp để thêm chuyển động vào ảnh",
      "Hỏi prompt nào dùng để tạo nhân vật đọc kịch bản",
      "Hỏi prompt nào phù hợp để thêm/xóa đối tượng",
      "Hỏi prompt nào dùng để phụ đề hóa nội dung",
      "Hỏi đâu là giới hạn thực tế của video AI",
      "Dạy bằng tình huống và workflow nhỏ, không dạy như một bài kỹ thuật dựng video."
    ],
    "examTips": [
      "Motion = thêm chuyển động",
      "Interpolation = làm mượt chuyển động",
      "Colorization = tô màu",
      "Avatar = nhân vật đọc nội dung",
      "Captions = phụ đề",
      "Prompt video tốt = rõ thời gian + rõ chuyển động + rõ đối tượng"
    ],
    "keyTerms": [
      {
        "term": "Video prompt IIG Vietnam                               Generative AI Teacher Guide                                      81",
        "meaning": "== PDF PAGE 108 ==="
      },
      {
        "term": "Motion",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Interpolation",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Colorization",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Avatar",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Script",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Edit video",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Add/remove objects",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      }
    ],
    "prompts": {
      "basic": [
        "“Tạo video từ ảnh này.”",
        "“Tạo video ngắn về lớp học tương lai.”",
        "“Tạo nhân vật đọc đoạn script này.”"
      ],
      "advanced": [
        "“Tạo video 5 giây từ hình ảnh này, con thuyền di chuyển nhẹ qua lại trên mặt nước, không có âm thanh.”",
        "“Tạo video 8 giây từ ảnh lớp học này, máy quay giữ nguyên góc nhìn, học sinh cử động nhẹ, không zoom, không có âm thanh.”",
        "“Tạo avatar giáo viên ảo đọc đoạn script 30 giây này, giọng thân thiện, rõ ràng, phù hợp học sinh THCS.”"
      ],
      "avoid": [
        "“Tạo video đẹp.”",
        "“Làm cho nó sinh động hơn.”",
        "“Cho nhân vật đọc bài này.”"
      ]
    },
    "relatedQuestionNumbers": [
      6,
      27,
      40,
      42,
      57,
      59,
      63,
      76,
      79,
      87
    ]
  },
  {
    "id": "lesson-11",
    "number": 11,
    "domainNumber": 3,
    "domainName": "Domain 3 – Kỹ thuật đặt câu lệnh",
    "title": "Bài 11. Cải thiện câu lệnh (Prompt Refinement)",
    "duration": "45 phút",
    "examWeight": "Cao",
    "pearsonObjectives": [
      "3.1 Với prompt ban đầu và đầu ra của nó, đánh giá cách cải thiện prompt để gợi ra đầu ra được nhắm mục tiêu hơn, theo 4 trục: 1)  Nội dung 2)  Phong cách 3)  Tính cách/Nhân vật 4) Ngữ cảnh."
    ],
    "summary": "Nếu Domain 2 giúp người học biết: dùng AI thực tế: Prompt đầu tiên hiếm khi là prompt tốt nhất. Muốn đầu ra đúng hơn, rõ hơn và sát nhu cầu hơn, người",
    "keyKnowledge": [
      "Domain 3 bắt đầu bằng việc cải thiện câu lệnh, không phải học thêm “mẹo”, mà là học cách sửa prompt một cách có hệ thống. Student Book của Bài 11 chỉ ra đúng 4 trục refinement: nội dung, phong cách, nhân vật, ngữ cảnh.",
      "Exam objectives làm rõ từng trục: ⬧  Với nội dung, prompt cần đủ cụ thể, rõ ràng, không rút gọn và không giả định AI tự biết; ⬧  Với phong cách, cần nêu style và tone; ⬧  Với nhân vật, có thể cho AI một persona/role; ⬧  Với ngữ cảnh, AI phải được cung cấp bối cảnh vì nó không thể tự suy ra tự nhiên như con người.",
      "Prompt tốt hơn không nhất thiết là prompt dài nhất; điều quan trọng là đúng thông tin cần thêm.",
      "Khi output chưa đúng, người dùng nên nghĩ theo câu hỏi: ⬧   Thiếu gì về nội dung? ⬧   Thiếu gì về phong cách? ⬧  Có nên giao vai trò rõ hơn cho ai không? ⬧  Có thiếu bối cảnh không?"
    ],
    "commonPitfalls": [
      "Tưởng refinement chỉ là “viết prompt dài hơn”.",
      "Không phân biệt giữa thêm chi tiết nội dung và thêm phong cách trình bày.",
      "Nghĩ rằng persona/role chỉ là mẹo nâng cao, không cần thiết.",
      "Quên bối cảnh nên AI trả lời đúng chủ đề nhưng sai mục đích. Bài này cần giúp người học nắm chắc 3 điều:",
      "Prompt đầu tiên thường mới là bản nháp đầu tiên.",
      "Muốn output tốt hơn, phải biết sửa đúng chỗ."
    ],
    "distractorTraps": [
      "Cho prompt ban đầu và hỏi nên sửa theo hướng nào để output đúng hơn.",
      "Cho hai prompt gần giống nhau và hỏi prompt nào rõ hơn.",
      "Hỏi yếu tố nào còn thiếu: nội dung, phong cách, nhân vật hay ngữ cảnh.",
      "Hỏi vì sao AI trả lời chưa đúng dù prompt nghe có vẻ “đủ ngắn gọn”.",
      "Không dạy refinement như kỹ thuật rời rạc; phải dạy theo cặp: ⬧  Prompt ban đầu, IIG Vietnam                               Generative AI Teacher Guide                                      91 === PDF PAGE 118 === ⬧  Output nhận được, ⬧  Cách sửa prompt.",
      "Nên cho học viên nhìn thấy rõ “trước – sau” để hiểu refinement là sửa có mục tiêu, không phải thêm chữ ngẫu nhiên."
    ],
    "examTips": [
      "Content = nói rõ cần gì",
      "Style = nói rõ viết như thế nào",
      "Role = nói rõ AI đóng vai ai",
      "Context = nói rõ dùng trong hoàn cảnh nào"
    ],
    "keyTerms": [
      {
        "term": "Prompt refinement",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Specificity",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Clarity",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Style",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Tone",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Persona",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Role",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Context",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      }
    ],
    "prompts": {
      "basic": [
        "“Viết về AI trong giáo dục.”",
        "“Giải thích blockchain.”",
        "“Viết lời giới thiệu cho thư viện.”"
      ],
      "advanced": [
        "Khi output chưa đúng, người dùng nên nghĩ theo câu hỏi: ⬧   Thiếu gì về nội dung? ⬧   Thiếu gì về phong cách? ⬧  Có nên giao vai trò rõ hơn cho ai không? ⬧  Có thiếu bối cảnh không?",
        "Tưởng refinement chỉ là “viết prompt dài hơn”.",
        "Không phân biệt giữa thêm chi tiết nội dung và thêm phong cách trình bày."
      ],
      "avoid": [
        "“Viết hay hơn.”",
        "“Làm rõ hơn.”",
        "“Giải thích dễ hiểu.”"
      ]
    },
    "relatedQuestionNumbers": [
      43,
      113
    ]
  },
  {
    "id": "lesson-12",
    "number": 12,
    "domainNumber": 3,
    "domainName": "Domain 3 – Kỹ thuật đặt câu lệnh",
    "title": "Bài 12. Thêm đầu vào vào câu lệnh",
    "duration": "45 phút",
    "examWeight": "Cao",
    "pearsonObjectives": [
      "3.2 Với prompt ban đầu và đầu ra của nó, xác định các đầu vào bổ sung có thể dùng để gợi ra đầu ra nhắm mục tiêu hơn: 1)  Ví dụ (few-shot prompting) 2)  Bảng thuật ngữ để dịch 3) Bản mẫu 4)  Tài liệu dùng cho nghiên cứu 5)  Cuộc trò chuyện trước đó trong cùng một chủ đề."
    ],
    "summary": "Nếu Bài 11 dạy người học cách cải thiện prompt bằng cách sửa nội dung prompt, thì Bài 12 dạy một năng lực refinement còn thực tế hơn: đôi khi prompt chưa tốt không phải vì viết chưa hay, mà vì AI chưa được cho đủ đầu vào.",
    "keyKnowledge": [
      "Bài 12 là bước tiếp theo rất logic của Domain 3: ⬧   Bài 11: sửa prompt ⬧   Bài 12: thêm input để prompt mạnh hơn.",
      "Student Book xác định 5 loại đầu vào bổ sung cốt lõi: ⬧   Few-shot, ⬧   Glossary, ⬧   Template, ⬧   Reference materials, ⬧   Previous conversations.",
      "Exam objectives 3.2 cũng nêu đúng 5 hướng này.",
      "Khi output chưa đạt, người dùng nên nghĩ: ⬧  Có cần cho ví dụ không? ⬧  Có cần cho bảng thuật ngữ không? ⬧  Có cần mẫu đầu ra không? ⬧  Có cần tài liệu tham chiếu không? ⬧  Có cần nhắc lại hoặc dùng ngữ cảnh từ hội thoại trước không?"
    ],
    "commonPitfalls": [
      "Tưởng refinement chỉ là “viết lại prompt dài hơn”.",
      "Không biết khi nào nên dùng few-shot, khi nào nên dùng template.",
      "Không thấy giá trị của glossary trong dịch thuật.",
      "Quên rằng hội thoại trước đó có thể là một “nguồn đầu vào” rất hữu ích. Bài này cần giúp người học nắm chắc 3 điều:",
      "Không phải lúc nào prompt yếu cũng cần sửa bằng câu chữ; đôi khi cần thêm dữ liệu đầu vào.",
      "Ví dụ, mẫu, thuật ngữ, tài liệu tham chiếu và lịch sử hội thoại đều là “đầu vào bổ sung” quan trọng."
    ],
    "distractorTraps": [
      "Cho output chưa tốt và hỏi nên thêm loại đầu vào nào 100                                       Generative AI Teacher Guide                            IIG Vietnam === PDF PAGE 127 ===",
      "Hỏi few-shot khác template ở điểm nào",
      "Hỏi glossary phù hợp nhất với loại nhiệm vụ nào",
      "Hỏi khi nào nên thêm tài liệu tham chiếu",
      "Hỏi previous conversation giúp ích gì",
      "Nên dạy theo logic: ⬧   Output đang yếu ở đâu, ⬧  Thêm loại input nào sẽ cải thiện tốt nhất."
    ],
    "examTips": [
      "Few-shot = cho ví dụ mẫu",
      "Glossary = cho thuật ngữ chuẩn",
      "Template = cho khuôn mẫu đầu ra",
      "Reference = cho nguồn bám theo",
      "Previous conversation = cho lại bối cảnh đã có"
    ],
    "keyTerms": [
      {
        "term": "Few",
        "meaning": "shot prompting"
      },
      {
        "term": "Examples",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Glossary",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Template",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Reference materials",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Previous conversation",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Additional inputs",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      }
    ],
    "prompts": {
      "basic": [
        "“Hãy phân tích cảm xúc của bình luận này.”",
        "“Hãy dịch đoạn này sang tiếng Anh.”",
        "“Hãy viết email xin nghỉ học.”"
      ],
      "advanced": [
        "Few-shot: “Hãy phân tích cảm xúc của các bình luận sau. Ví dụ: ⬧   ‘Sản phẩm này rất tốt.’ → Tích cực ⬧   ‘Sản phẩm này quá tệ.’ → Tiêu cực Bây giờ hãy phân tích câu sau: …”",
        "Glossary: “Hãy dịch đoạn sau sang tiếng Anh. Dùng các thuật ngữ sau: ⬧  Năng lượng tái tạo = renewable energy ⬧  Quyền riêng tư dữ liệu = data privacy”",
        "Template: “Hãy viết email theo mẫu sau: 1)  Lời chào 2) Mục đích 3)  Nội dung chính 4)  Lời cảm ơn và kết”"
      ],
      "avoid": [
        "“Hãy làm giống như lần trước.” → quá mơ hồ nếu ngữ cảnh không rõ",
        "“Dịch cho chuẩn.” → thiếu glossary khi có thuật ngữ chuyên môn",
        "“Viết theo mẫu.” → nhưng không cung cấp mẫu"
      ]
    },
    "relatedQuestionNumbers": [
      3,
      37,
      75,
      105,
      106,
      142
    ]
  },
  {
    "id": "lesson-13",
    "number": 13,
    "domainNumber": 3,
    "domainName": "Domain 3 – Kỹ thuật đặt câu lệnh",
    "title": "Bài 13. Các kỹ thuật câu lệnh phổ biến",
    "duration": "45 phút",
    "examWeight": "Rất cao",
    "pearsonObjectives": [
      "3.3 Nhận biết các kỹ thuật prompt phổ biến: Zero-Shot, Few-Shot, Chain Of Thought, Self-Consistency, Knowledge Generation, Prompt Chaining",
      "3.4 Sử dụng các kỹ thuật reverse prompting để đạt kết quả."
    ],
    "summary": "Nếu: thì Bài 13 là lúc người học bắt đầu hiểu các kỹ thuật prompt có tên gọi rõ ràng, được dùng lặp lại trong nhiều bối cảnh khác nhau. Student Book mô tả đây là bài giúp học viên phân biệt các kỹ thuật gợi ý phổ biến và biết",
    "keyKnowledge": [
      "Student Book của Bài 13 nêu rất rõ 6 kỹ thuật prompt phổ biến: ⬧   Zero-shot: hỏi trực tiếp, không kèm ví dụ, ⬧   Few-shot: đưa ví dụ mẫu, ⬧  Chain of thought: yêu cầu ai trình bày theo từng bước, ⬧   Self-consistency: thử nhiều lần rồi so sánh để tìm kết quả nhất quán, ⬧  Knowledge generation: hỏi câu hỏi chung trước rồi khai thác sâu hơn, ⬧  Prompt chaining: đặt câu hỏi nối tiếp, mỗi câu dựa trên kết quả trước.",
      "Exam Objectives 3.3 xác nhận đúng các kỹ thuật này, còn 3.4 bổ sung thêm reverse prompting.",
      "Người học cần hiểu: ⬧  Kỹ thuật nào phù hợp với nhiệm vụ đơn giản, ⬧  Kỹ thuật nào phù hợp với nhiệm vụ nhiều bước, ⬧  Kỹ thuật nào giúp output ổn định hơn, ⬧  Kỹ thuật nào giúp đi từ mục tiêu cuối cùng trở lại prompt tốt hơn."
    ],
    "commonPitfalls": [
      "Tưởng zero-shot luôn là cách nhanh nhất và đủ cho mọi việc.",
      "Không phân biệt few-shot với template đã học ở Bài 12.",
      "Nhầm chain of thought với prompt chaining.",
      "Không thấy giá trị của self-consistency trong việc kiểm tra độ ổn định.",
      "Tưởng reverse prompting là kỹ thuật quá khó hoặc chỉ dành cho chuyên gia. Bài này cần giúp người học nắm chắc 3 điều:",
      "Có nhiều kỹ thuật prompt khác nhau, và mỗi kỹ thuật phù hợp với một kiểu nhiệm vụ."
    ],
    "distractorTraps": [
      "Hỏi kỹ thuật nào phù hợp với yêu cầu không kèm ví dụ",
      "Hỏi kỹ thuật nào phù hợp khi cần AI học từ ví dụ",
      "Hỏi kỹ thuật nào phù hợp khi cần suy luận theo từng bước 110                                       Generative AI Teacher Guide                            IIG Vietnam === PDF PAGE 137 ===",
      "Hỏi kỹ thuật nào phù hợp khi cần kết quả ổn định hơn",
      "Hỏi kỹ thuật nào phù hợp khi muốn bắt đầu từ mục tiêu cuối cùng",
      "Dạy theo cấu trúc: ⬧  Kỹ thuật là gì, ⬧  Dùng khi nào, ⬧  Ví dụ nào, ⬧  Dễ nhầm với kỹ thuật nào."
    ],
    "examTips": [
      "Zero-shot = không ví dụ",
      "Few-shot = có ví dụ",
      "Chain of thought = suy nghĩ theo bước",
      "Self-consistency = so sánh nhiều lần",
      "Knowledge generation = hỏi nền trước, đào sâu sau",
      "Prompt chaining = nối nhiều prompt theo chuỗi"
    ],
    "keyTerms": [
      {
        "term": "Zero",
        "meaning": "shot"
      },
      {
        "term": "Few",
        "meaning": "shot"
      },
      {
        "term": "Chain of thought",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Self",
        "meaning": "consistency"
      },
      {
        "term": "Knowledge generation",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Prompt chaining",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Reverse prompting",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      }
    ],
    "prompts": {
      "basic": [
        "Zero-shot: “Hãy tóm tắt lợi ích của thiết bị nhà thông minh.”",
        "Few-shot: “Ví dụ: ⬧   ‘Thiết bị này rất tốt’ → Tích cực ⬧   ‘Thiết bị này quá tệ’ → Tiêu cực ⬧  Hãy phân tích câu sau…”",
        "Chain of thought: “Hãy giải thích từng bước vì sao giải pháp này phù hợp.”"
      ],
      "advanced": [
        "Zero-shot tốt hơn: “Hãy tóm tắt 4 lợi ích chính của thiết bị nhà thông minh trong gia đình bằng ngôn ngữ đơn giản.”",
        "Chain of thought tốt hơn: “Hãy phân tích từng bước để chọn công cụ AI phù hợp cho việc tạo poster tuyên truyền.” IIG Vietnam                               Generative AI Teacher Guide                                      115 === PDF PAGE 142 ===",
        "Prompt chaining tốt hơn: “Bước 1: Gợi ý 5 slogan về an toàn số. Bước 2: Từ slogan tốt nhất, tạo dàn ý poster. Bước 3: Từ dàn ý đó, viết nội dung 80 từ.”"
      ],
      "avoid": [
        "“Làm cho tốt hơn.”",
        "“Viết lại bằng kỹ thuật nâng cao.”",
        "“Dùng chain gì đó đi.” Các prompt này thiếu rõ mục tiêu, nên không giúp học viên thực sự hiểu kỹ thuật nào đang được sử dụng."
      ]
    },
    "relatedQuestionNumbers": [
      38,
      60,
      78,
      92,
      98,
      115,
      137,
      140,
      144,
      153
    ],
    "pedagogicalFramework": {
      "name": "Hệ thống 8 kỹ thuật Prompting cốt lõi (Core Prompting Techniques)",
      "description": "Các kỹ thuật điều khiển mô hình AI từ căn bản đến nâng cao được Pearson Certiport khảo sát:",
      "steps": [
        "Zero-shot: Đưa ra yêu cầu trực tiếp không có ví dụ mẫu (áp dụng cho tác vụ quen thuộc)",
        "Few-shot / One-shot: Cung cấp 1 hoặc vài cặp ví dụ (Input -> Output) làm mẫu phong cách hoặc cấu trúc",
        "Chain-of-Thought (CoT - Chuỗi tư duy): Yêu cầu AI tư duy từng bước logic (\"Hãy phân tích từng bước:\") trước khi kết luận",
        "Self-consistency (Tự nhất quán): Tạo nhiều phương án độc lập -> so sánh đối chiếu -> chọn câu trả lời nhất quán nhất",
        "Reverse Prompting (Câu lệnh đảo ngược): AI phỏng vấn người dùng để thu thập thông tin còn thiếu trước khi làm; hoặc suy ra prompt từ sản phẩm mẫu",
        "Knowledge Generation (Khai thác kiến thức): Yêu cầu AI tạo kiến thức nền và tiêu chí trước, sau đó dùng kiến thức đó giải quyết vấn đề",
        "Role / Persona Prompting: Gán vai chuyên môn định hướng văn phong và chiều sâu lập luận",
        "Grounding / Source-bounded: Ràng buộc AI bám sát dữ liệu nguồn để triệt tiêu ảo giác"
      ]
    }
  },
  {
    "id": "lesson-14",
    "number": 14,
    "domainNumber": 4,
    "domainName": "Domain 4 – Đạo đức, Luật pháp và Trách nhiệm xã hội",
    "title": "Bài 14. Xác minh độ chính xác",
    "duration": "45 phút",
    "examWeight": "Rất cao",
    "pearsonObjectives": [],
    "summary": "Nếu: Domain 3: không chỉ làm cho AI trả lời tốt hơn, mà còn phải biết kiểm tra câu trả lời đó có đáng tin hay không.",
    "keyKnowledge": [
      "Student Book xác định rất rõ 3 nhóm cần xác minh: ⬧  Thông tin lịch sử, ⬧  Thông tin hiện tại, ⬧  Dữ liệu số liệu.",
      "AI có thể trả lời trôi chảy nhưng vẫn: ⬧   Thiếu cập nhật, ⬧   Thiếu nguồn, ⬧   Thiếu căn cứ, ⬧  Hoặc sai số liệu.",
      "Xác minh độ chính xác là một kỹ năng đi cùng với mọi kỹ năng prompt trước đó.",
      "Với thông tin hiện tại và thông tin mới, người dùng phải ưu tiên nguồn thời gian thực. Student Book đưa ví dụ rất rõ về việc hỏi AI các mẫu iPhone mới nhất nhưng vẫn cần kiểm tra lại trên website Apple hoặc báo công nghệ uy tín."
    ],
    "commonPitfalls": [
      "Tưởng output AI viết mạch lạc thì chắc chắn đúng.",
      "Tưởng thông tin lịch sử là luôn ổn định nên không cần kiểm tra.",
      "Không phân biệt giữa: ⬧  Thông tin “có vẻ kiến thức chung”, ⬧  Thông tin “cần nguồn gốc rõ ràng”.",
      "Không thấy số liệu là nhóm nội dung cần kiểm tra kỹ nhất.",
      "Dùng lại nguyên output AI cho bài tập, bài thuyết trình hoặc báo cáo mà không đối chiếu. Bài này cần giúp người học nắm chắc 3 điều:",
      "AI có thể hỗ trợ rất nhanh, nhưng không phải lúc nào cũng đủ tin cậy để dùng ngay."
    ],
    "distractorTraps": [
      "Hỏi loại nội dung nào cần kiểm tra bằng nguồn thời gian thực 120                                       Generative AI Teacher Guide                            IIG Vietnam === PDF PAGE 147 ===",
      "Hỏi nên xác minh thông tin AI bằng loại nguồn nào",
      "Hỏi vì sao thông tin AI về sự kiện gần đây có thể sai",
      "Hỏi vì sao số liệu thống kê cần kiểm tra đặc biệt kỹ",
      "Hỏi “câu trả lời nghe hợp lý” có đủ để dùng chưa",
      "Dạy theo cấu trúc: ⬧  AI trả lời gì, ⬧  Nguy cơ sai ở đâu, ⬧  Kiểm tra bằng nguồn nào, ⬧  Khi nào có thể dùng, ⬧  Khi nào không nên dùng ngay."
    ],
    "examTips": [
      "Historical facts = vẫn có thể sai, vẫn nên kiểm tra khi dùng chính thức",
      "Current information = luôn ưu tiên nguồn thời gian thực",
      "Numerical data = luôn hỏi nguồn, năm và dữ liệu gốc",
      "AI output useful ≠ AI output verified"
    ],
    "keyTerms": [
      {
        "term": "Verify accuracy",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Historical facts",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Current information",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Numerical data",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Official sources",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Real",
        "meaning": "time sources"
      },
      {
        "term": "Trusted media",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Original data",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      }
    ],
    "prompts": {
      "basic": [
        "“Hãy cho em biết sản phẩm mới nhất của Apple.”",
        "“Hãy nêu mốc chính của sự kiện lịch sử này.”",
        "“Hãy cho em số liệu dân số hiện nay của quốc gia này.”"
      ],
      "advanced": [
        "“Hãy nêu thông tin sản phẩm Apple mới nhất và chỉ rõ phần nào cần kiểm tra lại bằng website chính thứ"
      ],
      "avoid": [
        "“Cho em thông tin mới nhất đi.”",
        "“Số này đúng không?”",
        "“Hãy cho em vài con số để làm slide.” Những prompt này quá mơ hồ hoặc thiếu yêu cầu về xác minh, nguồn và thời điểm dữ liệu."
      ]
    },
    "relatedQuestionNumbers": [
      15,
      16,
      17,
      26,
      28,
      30,
      31,
      32,
      35,
      50,
      55,
      80,
      83,
      86,
      88,
      95,
      100,
      104,
      111,
      118,
      122,
      128,
      129,
      131,
      143,
      155,
      159,
      164
    ],
    "pedagogicalFramework": {
      "name": "Quy trình kiểm chứng 4 bước (Fact-checking Rubric)",
      "description": "Quy trình chuẩn hóa để phát hiện và ngăn chặn ảo giác (hallucinations):",
      "steps": [
        "Bước 1 - Phân tách mệnh đề: Tách bài viết thành từng câu khẳng định dữ kiện độc lập",
        "Bước 2 - Đánh dấu điểm rủi ro: Số liệu thống kê, trích dẫn pháp luật, sự kiện thời sự, trích dẫn tên tác giả/năm",
        "Bước 3 - Tham chiếu chéo độc lập: Mở văn bản gốc, báo cáo chính thống (không hỏi lại cùng chatbot)",
        "Bước 4 - Phê duyệt con người (Human-in-the-loop): Chỉnh sửa và chịu trách nhiệm cuối cùng"
      ]
    }
  },
  {
    "id": "lesson-15",
    "number": 15,
    "domainNumber": 4,
    "domainName": "Domain 4 – Đạo đức, Luật pháp và Trách nhiệm xã hội",
    "title": "Bài 15. Xác định tiềm năng cho sự thiên vị (Bias)",
    "duration": "45 phút",
    "examWeight": "Rất cao",
    "pearsonObjectives": [
      "4.1 Xác định khả năng sai lệch trong đầu ra Generative AI, với 6 ý bám rất sát cấu trúc của Student Book."
    ],
    "summary": "Nếu Bài 14 giúp người học hiểu rằng AI có thể sai, thì Bài 15 giúp người học đi thêm một bước quan trọng hơn: AI không chỉ có thể sai, mà còn có thể thiên lệch. Đây là một bước chuyển rất quan trọng của Domain 4, vì nhiều đầu ra AI:",
    "keyKnowledge": [
      "Student Book xác định 6 nguồn/góc nhìn quan trọng về thiên lệch: ⬧  Dữ liệu huấn luyện, ⬧  Sự khác nhau giữa mô hình, ⬧   Guardrails, ⬧  Prompt của người dùng, ⬧  Các dạng thiên lệch phổ biến, ⬧  Và sự lan truyền thiên lệch qua ai.",
      "Exam Objectives 4.1 xác nhận đúng 6 hướng này và mở rộng danh mục các loại thiên lệch phổ biến.",
      "Thiên lệch không phải lúc nào cũng dễ nhìn thấy; nhiều output AI có thể “rất trôi chảy” nhưng vẫn nghiêng về một khuôn mẫu nào đó.",
      "Prompt của người dùng cũng có thể vô tình cài thiên lệch vào output.",
      "Guardrails giúp giảm rủi ro, nhưng không có nghĩa là AI hoàn toàn trung lập hoặc hoàn toàn không thiên lệch."
    ],
    "commonPitfalls": [
      "Tưởng AI là máy nên mặc định khách quan.",
      "Chỉ nghĩ bias đến từ dữ liệu, mà quên rằng prompt và guardrails cũng có thể tác động.",
      "Không nhận ra thiên lệch khi nó được trình bày dưới dạng hình ảnh hoặc mô tả “rất bình thường”.",
      "Tưởng chỉ các chủ đề lớn như chính trị hay chủng tộc mới có bias; thực tế, giới tính, tuổi tác, nghề nghiệp, tình trạng kinh tế cũng rất dễ xuất hiện thiên lệch. Bài này cần giúp người học nắm chắc 3 điều:",
      "AI có thể học và phản chiếu thiên lệch từ dữ liệu và hệ thống của nó.",
      "Người dùng cũng có thể vô tình tạo thêm thiên lệch qua prompt."
    ],
    "distractorTraps": [
      "Hỏi bias có thể đến từ đâu IIG Vietnam                               Generative AI Teacher Guide                                     129 === PDF PAGE 156 ==="
    ],
    "examTips": [
      "Bias in data = AI học từ dữ liệu thiên lệch",
      "Bias across models = mô hình khác nhau, thiên lệch khác nhau",
      "Guardrails help, but do not guarantee neutrality",
      "Prompt bias = người dùng cũng có thể đưa bias vào",
      "Bias can spread = output thiên lệch có thể bị khuếch đại"
    ],
    "keyTerms": [
      {
        "term": "Bias",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Training data bias",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Model bias",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Guardrails",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Prompt bias",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Gender bias",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Racial bias",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Age bias",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      }
    ],
    "prompts": {
      "basic": [
        "“Tạo ảnh một CEO đang điều hành cuộc họp.”",
        "“Mô tả một người lao động thành công.”",
        "“Viết đoạn giới thiệu về người lớn tuổi sử dụng công nghệ.”"
      ],
      "advanced": [
        "“Tạo ảnh một CEO nữ đang điều hành cuộc họp.”",
        "“Tạo ảnh một nhóm lãnh đạo đa dạng về giới tính và độ tuổi đang thảo luận trong cuộc họp.”",
        "“Hãy viết đoạn giới thiệu trung lập, tôn trọng và không rập khuôn về người lớn tuổi sử dụng công nghệ.”"
      ],
      "avoid": [
        "“Tạo ảnh một CEO điển hình.”",
        "“Mô tả người nghèo.”",
        "“Viết về công việc phù hợp cho phụ nữ.”"
      ]
    },
    "relatedQuestionNumbers": [
      51,
      52,
      62,
      66,
      70,
      77,
      109,
      116,
      117,
      158,
      161
    ]
  },
  {
    "id": "lesson-16",
    "number": 16,
    "domainNumber": 4,
    "domainName": "Domain 4 – Đạo đức, Luật pháp và Trách nhiệm xã hội",
    "title": "Bài 16. Hệ quả pháp lý tiềm ẩn",
    "duration": "45 phút",
    "examWeight": "Rất cao",
    "pearsonObjectives": [
      "4.2 Xác định các tác động pháp lý tiềm ẩn của việc sử dụng Generative AI: 1) Tôn trọng quyền sở hữu trí tuệ 2) Xác định các tác động pháp lý của việc sử dụng nội dung được tạo không phù hợp 3) Minh bạch – ghi lại quy trình sử dụng AI trong môi trường chuyên nghiệp."
    ],
    "summary": "Nếu Bài 15 giúp người học hiểu AI có thể thiên lệch, thì Bài 16 giúp người học đi tiếp một bước rất quan trọng: AI không chỉ tạo ra rủi ro đạo đức, mà còn có thể dẫn đến rủi ro pháp lý. Student Book nhấn mạnh rất rõ rằng khi dùng AI tạo sinh, người học và người dùng cần đặc biệt quan tâm đến:",
    "keyKnowledge": [
      "Student Book xác định 3 trục pháp lý nền tảng của Bài 16: ⬧  Quyền sở hữu trí tuệ, ⬧  Hệ quả pháp lý của việc dùng sai nội dung AI, ⬧  Minh bạch trong sử dụng dữ liệu AI.",
      "CCS OD Gen AI Foundations - VN cũng xác nhận đúng các trục này ở mục 4.2.",
      "Luật pháp liên quan đến AI còn đang thay đổi, nên Student Book nhấn mạnh nguyên tắc an toàn: ⬧  Không dùng dữ liệu có bản quyền khi chưa được phép, ⬧  Ưu tiên dữ liệu công khai, miễn phí hoặc tự tạo, ⬧  Khi cần phải xin phép chủ sở hữu.",
      "Dù nội dung do AI hỗ trợ tạo ra, người dùng vẫn là người chịu trách nhiệm khi sử dụng output đó trong môi trường thực tế."
    ],
    "commonPitfalls": [
      "Tưởng AI tạo ra thì mặc định không dính bản quyền.",
      "Nghĩ rằng “chỉ dùng cho học tập” thì không cần quan tâm pháp lý.",
      "Nhầm giữa “AI tạo mới” và “AI sử dụng lại tác phẩm có bản quyền”.",
      "Không thấy minh bạch là một phần quan trọng của sử dụng AI có trách nhiệm.",
      "Tưởng trách nhiệm pháp lý nằm ở công cụ AI, không nằm ở người sử dụng. Bài này cần giúp người học nắm chắc 3 điều:",
      "AI không làm mất đi trách nhiệm pháp lý của người dùng."
    ],
    "distractorTraps": [
      "Hỏi nội dung nào có nguy cơ vi phạm quyền sở hữu trí tuệ",
      "Hỏi hệ quả pháp lý đến từ đâu khi dùng output AI sai",
      "Hỏi tại sao cần minh bạch việc sử dụng AI",
      "Hỏi khi nào nên dùng dữ liệu công khai, khi nào cần xin phép",
      "Hỏi ai chịu trách nhiệm khi output AI được dùng sai mục đích",
      "Dạy theo tình huống rất cụ thể: 138                                       Generative AI Teacher Guide                            IIG Vietnam === PDF PAGE 165 === ⬧  Lấy bài báo có bản quyền để huấn luyện, ⬧  Lấy ảnh website để làm quảng cáo, ⬧  Dùng output ai mà không kiểm tra tính hợp pháp, ⬧  Dùng AI mà không ghi nhận quy trình trong môi trường chuyên nghiệp."
    ],
    "examTips": [
      "IP must still be respected",
      "AI-generated ≠ legally risk-free",
      "Transparency matters in professional settings",
      "The user remains responsible"
    ],
    "keyTerms": [
      {
        "term": "Intellectual Property (IP)",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Copyright",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Trademark",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Legal implications",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Transparency",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Documentation",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Licensed content",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Public data",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      }
    ],
    "prompts": {
      "basic": [
        "“Hãy tạo quảng cáo cho một ngôi nhà thông minh.”",
        "“Hãy tóm tắt bài báo này bằng AI.”",
        "“Hãy tạo một hình minh họa cho sản phẩm.”"
      ],
      "advanced": [
        "“Hãy tạo nội dung quảng cáo cho nhà thông minh, chỉ sử dụng mô tả do tôi cung cấp và không dựa trên hình ảnh có bản quyền từ nguồn ngoài.” 142                                       Generative AI Teacher Guide                            IIG Vietnam === PDF PAGE 169 ===",
        "“Hãy tóm tắt tài liệu sau và giữ nguyên các thuật ngữ gốc, đồng thời ghi chú rằng đây là bản tóm tắt do AI hỗ trợ.”",
        "“Hãy đề xuất một hình minh họa mới cho sản phẩm bằng AI, tránh sử dụng lại hình ảnh có bản quyền hoặc nhận diện thương hiệu của bên thứ ba.”"
      ],
      "avoid": [
        "“Lấy nội dung từ bài báo nổi tiếng này rồi viết lại cho tôi.”",
        "“Dùng ảnh trên website kia để tạo quảng cáo.”",
        "“Tạo bản giống hệt phong cách của mẫu thiết kế đó.”"
      ]
    },
    "relatedQuestionNumbers": [
      10,
      22,
      45,
      54,
      96,
      108,
      127,
      150
    ]
  },
  {
    "id": "lesson-17",
    "number": 17,
    "domainNumber": 4,
    "domainName": "Domain 4 – Đạo đức, Luật pháp và Trách nhiệm xã hội",
    "title": "Bài 17. Sự quan trọng của quyền riêng tư dữ liệu",
    "duration": "45 phút",
    "examWeight": "Rất cao",
    "pearsonObjectives": [],
    "summary": "Nếu Bài 16 giúp người học nhận ra rủi ro pháp lý khi dùng AI, thì Bài 17 giúp người học đi sâu vào một nền tảng quan trọng không kém: dữ liệu. Trọng tâm của bài này không còn là “nội dung AI có bản quyền hay không”, mà là “dữ liệu nào đang bị đưa vào AI, ai có thể bị ảnh hưởng, và hậu quả là gì nếu dữ liệu đó bị lộ",
    "keyKnowledge": [
      "Student Book của Bài 17 xác định rất rõ 5 trục chính:",
      "Thông tin cá nhân trong huấn luyện AI,",
      "Dữ liệu định danh cá nhân và nguy cơ đánh cắp danh tính,",
      "Hệ quả pháp lý và tài chính,",
      "Doanh nghiệp bảo vệ dữ liệu thế nào,",
      "Kiểm soát dữ liệu dùng để huấn luyện mô hình."
    ],
    "commonPitfalls": [
      "Tưởng dữ liệu cá nhân chỉ là số CMND/CCCD hoặc số tài khoản.",
      "Không nhận ra email khách hàng, lịch sử mua hàng, địa chỉ, số điện thoại, tài liệu nội bộ cũng có thể là dữ liệu nhạy cảm.",
      "Nghĩ rằng “chỉ hỏi AI cho nhanh” thì không sao.",
      "Tưởng rủi ro chỉ thuộc về cá nhân, mà quên rằng tổ chức/doanh nghiệp cũng có rủi ro rất lớn nếu dữ liệu bị rò rỉ vào mô hình AI công khai. Bài này cần giúp người học nắm chắc 3 điều:",
      "Dữ liệu cá nhân và dữ liệu nội bộ không được đưa vào AI một cách tùy tiện.",
      "PII và dữ liệu nhạy cảm có thể dẫn đến đánh cắp danh tính và hậu quả pháp lý/tài chính thực sự."
    ],
    "distractorTraps": [
      "Hỏi dữ liệu nào không nên nhập vào AI",
      "Hỏi PII là gì",
      "Hỏi vì sao đánh cắp danh tính là rủi ro nghiêm trọng",
      "Hỏi doanh nghiệp bảo vệ dữ liệu bằng cách nào",
      "Hỏi dữ liệu dùng để huấn luyện mô hình cần được kiểm soát ra sao IIG Vietnam                               Generative AI Teacher Guide                                     147 === PDF PAGE 174 ===",
      "Dạy theo tình huống thật: ⬧  Nhập email khách hàng vào chatbot, ⬧  Dán báo cáo doanh thu nội bộ vào ai, ⬧  Chia sẻ tài liệu có dữ liệu người dùng, ⬧  Để AI xử lý dữ liệu nhạy cảm mà không có phê duyệt."
    ],
    "examTips": [
      "Personal data matters",
      "PII can identify a person",
      "Identity theft is a real legal and financial risk",
      "Company policies exist to stop data leakage",
      "Not all data should be used for training"
    ],
    "keyTerms": [
      {
        "term": "Data privacy",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Personal data",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Company data",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Identity theft",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Civil liability",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Criminal liability",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Internal policy",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Public AI models",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      }
    ],
    "prompts": {
      "basic": [
        "“Hãy cho em biết thông tin nào là dữ liệu cá nhân.”",
        "“Hãy giải thích PII là gì.”",
        "“Hãy phân loại dữ liệu nào an toàn để dùng cho AI.” IIG Vietnam                               Generative AI Teacher Guide                                     151 === PDF PAGE 178 ==="
      ],
      "advanced": [
        "“Hãy giải thích PII bằng ngôn ngữ đơn giản cho học sinh/sinh viên mới học về AI.”",
        "“Hãy phân loại các dữ liệu sau thành 3 nhóm: an toàn để dùng cho AI công cộng, nhạy cảm, cấm dùng; đồng thời giải thích lý do cho từng nhóm.”",
        "“Hãy giúp em lập checklist 6 nguyên tắc bảo vệ dữ liệu khi dùng AI trong môi trường doanh nghiệp.”"
      ],
      "avoid": [
        "“Dán danh sách email này vào rồi phân tích giúp tôi.”",
        "“Tóm tắt hợp đồng khách hàng này cho nhanh.”",
        "“Cho AI học luôn từ dữ liệu nội bộ này.”"
      ]
    },
    "relatedQuestionNumbers": [
      13,
      14,
      49,
      81,
      82,
      119,
      124,
      134,
      146,
      149,
      156
    ],
    "pedagogicalFramework": {
      "name": "Ma trận phân loại dữ liệu & An toàn bảo mật",
      "description": "Phân biệt rạch ròi các cấp độ thông tin trước khi đưa vào công cụ AI:",
      "steps": [
        "PII (Thông tin định danh cá nhân): Tên, số CCCD, SĐT, email, địa chỉ -> Tuyệt đối không nhập vào AI công cộng",
        "Data Masking (Che dữ liệu): Thay thế thông tin nhạy cảm bằng dữ liệu giả lập (VD: Học sinh A, Công ty X)",
        "Tokenization trong An ninh: Dùng token đại diện thay thế dữ liệu nhạy cảm (khác với Tokenization trong NLP chia từ)",
        "Opt-out Training: Tắt tính năng cho phép nhà cung cấp AI dùng dữ liệu người dùng để huấn luyện mô hình"
      ]
    }
  },
  {
    "id": "lesson-18",
    "number": 18,
    "domainNumber": 4,
    "domainName": "Domain 4 – Đạo đức, Luật pháp và Trách nhiệm xã hội",
    "title": "Bài 18. Rủi ro của AI tạo sinh",
    "duration": "45 phút",
    "examWeight": "Cao",
    "pearsonObjectives": [],
    "summary": "Nếu: thì Bài 18 là lúc người học nhìn tổng hợp hơn về rủi ro của Generative AI trong thực tế sử dụng. Đây là bài học rất quan trọng vì nó chuyển người học từ nhận thức rời rạc về từng vấn đề sang tư duy quản trị rủi ro:",
    "keyKnowledge": [
      "Student Book của Bài 18 xác định rất rõ 4 nhóm rủi ro: ⬧  Phát tán thông tin sai lệch, ⬧  Chịu trách nhiệm với nội dung tạo ra, ⬧  Rủi ro đánh cắp danh tính khi dùng ai, ⬧  Chính sách giảm rủi ro.",
      "Bài này cần được dạy như một bài “quản trị rủi ro AI ở mức nền tảng”, không phải chỉ là bài cảnh báo chung chung.",
      "Người học cần thấy rằng: ⬧  AI có thể tạo nội dung rất nhanh, ⬧  AI có thể khiến rủi ro lan rộng hơn, ⬧  Nhưng con người vẫn là bên quyết định dùng, chia sẻ và chịu trách nhiệm với output đó.",
      "Chính sách giảm rủi ro là một phần của sử dụng AI có trách nhiệm, đặc biệt trong môi trường doanh nghiệp hoặc tổ chức."
    ],
    "commonPitfalls": [
      "Tưởng rủi ro AI chỉ xuất hiện khi AI “trả lời sai”.",
      "Không nhận ra thông tin sai lệch có thể do AI khuếch đại nhanh hơn, không chỉ do AI “tự nghĩ ra”.",
      "Tưởng nội dung do AI tạo ra thì trách nhiệm thuộc về AI.",
      "Không thấy mối liên hệ giữa Bài 17 về dữ liệu và rủi ro đánh cắp danh tính trong Bài 18.",
      "Xem chính sách giảm rủi ro là việc của doanh nghiệp lớn, không liên quan đến cá nhân hoặc lớp học. Bài này cần giúp người học nắm chắc 3 điều:",
      "AI có thể làm rủi ro lan nhanh hơn nếu người dùng thiếu kiểm soát."
    ],
    "distractorTraps": [
      "Hỏi AI có thể làm lan truyền thông tin sai lệch như thế nào",
      "Hỏi ai chịu trách nhiệm khi một nội dung AI gây hại hoặc gây hiểu nhầm",
      "Hỏi rủi ro đánh cắp danh tính liên quan đến AI ra sao",
      "Hỏi chính sách giảm rủi ro cần nhắm vào vấn đề gì",
      "Hỏi rủi ro nào thuộc về công cụ và rủi ro nào thuộc về cách dùng",
      "Dạy theo cấu trúc: ⬧  Rủi ro là gì, ⬧  Ai bị ảnh hưởng, ⬧  Rủi ro xảy ra như thế nào, ⬧  Và giảm rủi ro bằng cách nào. 156                                       Generative AI Teacher Guide                            IIG Vietnam === PDF PAGE 183 ==="
    ],
    "examTips": [
      "Misinformation can spread faster with AI",
      "The user is still responsible",
      "Identity risk grows when data is misused",
      "Risk mitigation needs rules, not just good intentions"
    ],
    "keyTerms": [
      {
        "term": "Misinformation",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Responsibility",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Identity theft",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Risk mitigation",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Internal policy",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Safe AI use",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      }
    ],
    "prompts": {
      "basic": [
        "“Hãy viết một bài giới thiệu sản phẩm này.”",
        "“Hãy tạo một thông báo cho khách hàng.”",
        "“Hãy tóm tắt thông tin này cho nhanh.”"
      ],
      "advanced": [
        "“Hãy viết một bài giới thiệu sản phẩm dựa chỉ trên các thông tin đã được tôi xác minh, không thêm dữ liệu mới và đánh dấu những phần cần kiểm tra lại trước khi công bố.”",
        "“Hãy tạo một thông báo cho khách hàng nhưng không sử dụng dữ liệu cá nhân thật và giữ nội dung ở mức mô phỏng.”",
        "“Hãy giúp tôi xây một checklist 6 bước để kiểm tra rủi ro trước khi công bố nội dung do AI hỗ trợ tạo ra.”"
      ],
      "avoid": [
        "“Viết cho hấp dẫn là được, không cần kiểm tra lại.”",
        "“Dùng dữ liệu khách hàng thật để cá nhân hóa nội dung nhanh hơn.”",
        "“Tạo thông báo rồi đăng luôn.”"
      ]
    },
    "relatedQuestionNumbers": [
      39,
      44,
      46,
      84,
      103,
      133,
      136,
      148
    ]
  },
  {
    "id": "lesson-19",
    "number": 19,
    "domainNumber": 4,
    "domainName": "Domain 4 – Đạo đức, Luật pháp và Trách nhiệm xã hội",
    "title": "Bài 19. Tác động xã hội của AI tạo sinh",
    "duration": "45 phút",
    "examWeight": "Cao",
    "pearsonObjectives": [],
    "summary": "Nếu: thì Bài 19 là bước cuối để người học nhìn Generative AI ở bình diện rộng nhất: AI không chỉ là công cụ kỹ thuật, mà là một lực tác động xã hội.",
    "keyKnowledge": [
      "Student Book xác định 3 trục rõ ràng của Bài 19: ⬧  Tác động tiêu cực, ⬧  Tác động tích cực, ⬧  Nguyên tắc sử dụng ai có trách nhiệm.",
      "Ở phần tiêu cực, sách nêu cụ thể 5 nhóm tác động: ⬧  Giảm tương tác con người, ⬧  Phụ thuộc quá mức, ⬧  Lan truyền thông tin sai lệch, ⬧  Lo ngại thay thế công việc, ⬧   Bất bình đẳng trong tiếp cận công nghệ.",
      "Bài này không nên dạy theo hướng “AI tốt” hoặc “AI xấu”, mà phải dạy theo hướng: ⬧  AI có lợi ích, ⬧  AI có rủi ro, ⬧  Và con người cần học cách dùng AI có trách nhiệm.",
      "Đây là bài khép lại toàn bộ khóa học, nên giáo viên cần giúp học viên nhìn thấy mối liên hệ giữa tất cả các bài trước: ⬧   Prompt, ⬧   Bias, ⬧  Pháp lý, ⬧  Dữ liệu, ⬧  Rủi ro, ⬧  Và tác động xã hội."
    ],
    "commonPitfalls": [
      "Nghĩ rằng tác động xã hội của AI chỉ là câu chuyện “việc làm bị thay thế”.",
      "Chỉ nhìn thấy mặt tích cực vì AI tiện lợi và hữu ích.",
      "Hoặc ngược lại, chỉ nhìn thấy mặt tiêu cực và coi AI như mối đe dọa.",
      "Không nhận ra rằng phụ thuộc quá mức vào AI cũng là một tác động xã hội đáng kể.",
      "Không thấy việc sử dụng AI có trách nhiệm là giải pháp cân bằng, chứ không chỉ là một khẩu hiệu đạo đức. Bài này cần giúp người học nắm chắc 3 điều:",
      "AI tạo sinh có tác động xã hội hai chiều: vừa mở ra cơ hội, vừa tạo ra rủi ro."
    ],
    "distractorTraps": [
      "Hỏi đâu là tác động tiêu cực của AI tạo sinh",
      "Hỏi đâu là tác động tích cực",
      "Hỏi vì sao phụ thuộc vào AI có thể là vấn đề",
      "Hỏi bất bình đẳng trong tiếp cận công nghệ liên quan gì đến AI",
      "Hỏi nguyên tắc sử dụng AI có trách nhiệm nên bao gồm những gì",
      "Dạy theo cặp đối chiếu: ⬧  Cùng một công nghệ có thể tạo lợi ích gì, ⬧  Và kéo theo rủi ro gì."
    ],
    "examTips": [
      "Negative impact = what society may lose or suffer",
      "Positive impact = what society may gain",
      "Responsible use = how humans keep AI useful and safe",
      "The key is balance, not extremes"
    ],
    "keyTerms": [
      {
        "term": "Social impact",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Negative impact",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Positive impact",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Human interaction IIG Vietnam                               Generative AI Teacher Guide                                     165",
        "meaning": "== PDF PAGE 192 ==="
      },
      {
        "term": "Overdependence",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Misinformation",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Job displacement",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      },
      {
        "term": "Digital divide",
        "meaning": "Thuật ngữ trọng tâm bài thi Certiport"
      }
    ],
    "prompts": {
      "basic": [
        "“Hãy cho em biết tác động tiêu cực của AI tạo sinh.”",
        "“Hãy cho em biết tác động tích cực của AI tạo sinh.”",
        "“Thế nào là sử dụng AI có trách nhiệm?”"
      ],
      "advanced": [
        "“Hãy lập bảng gồm 3 cột: tác động tiêu cực của AI tạo sinh, ví dụ minh họa, cách giảm tác động đó.”",
        "“Hãy nêu 5 tác động tích cực của AI tạo sinh trong học tập và công việc, dùng ngôn ngữ đơn giản.”",
        "“Hãy giúp em xây 6 nguyên tắc sử dụng AI có trách nhiệm cho học sinh/sinh viên.”"
      ],
      "avoid": [
        "“AI tốt hay xấu?”",
        "“AI có phá hủy xã hội không?”",
        "“AI có thay thế con người không?” Những prompt này quá cực đoan, quá rộng hoặc dễ dẫn đến câu trả lời thiếu cân bằng."
      ]
    },
    "relatedQuestionNumbers": [
      20,
      29,
      48,
      65,
      67,
      120,
      139,
      141
    ]
  }
];
