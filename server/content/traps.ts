// 16 câu dễ nhầm giữa khóa IIG và cách hiểu theo tài liệu gốc.

import type { TrapQuestion } from '@/shared/learning';

export const TRAP_QUESTION_IDS = [
  '5zqzj0ixt64w-9jih3ywy1nqb', // 89
  '4usnijdzhcrr-my2zs1hsca8p', // 126
  'jiotm2r8a0db-gtnh3160urhu', // 92
  'q56pjb1hp4l8-ot2hsxkb2lwl', // 140
  'rsfeiascu7va-d01x5w1hirdo', // 144
  '522j61hdta48-19jc1vybcopy', // 51
  '362h223q9op2-nzsx5kmva45', // 45
  '3jxlusm2fw33-96w4m9jpopoq', // 14
  '6w7lvumch3xi-bfw9a1f2nl3x', // 13
  'jaad4hx3idzc-vdc86uo40kte', // 54
  'w1gk19nm9rv4-uvj8qrfxgy52', // 96
  '2pq8nx7gok6q-5wjrvjye2ws', // 100
  'av51q2djr5c8-eicnmvns5y3i', // 102
  '7g9asz2nem88-vjb1154oap24', // 104
  '88f102m5n4fl-3m5it1gtna4g', // 117
  'lfynr4o3diqw-1dsrankvcm2', // 161
];

export const TRAP_QUESTIONS: TrapQuestion[] = [
  {
    number: 89,
    id: '5zqzj0ixt64w-9jih3ywy1nqb',
    title: 'Gán nhãn tự động cho mô hình hình ảnh (Text-to-Image Training)',
    prompt: 'Đối với mỗi tuyên bố về cách các mô hình hình ảnh được đào tạo trong AI tạo sinh, hãy cho biết Yes nếu câu lệnh đó đúng và No nếu nó sai:\n1. Được đào tạo trên các cặp văn bản-hình ảnh được gán nhãn thủ công.\n2. Được đào tạo trên các cặp văn bản-hình ảnh được gắn thẻ bằng công nghệ máy học tự động.\n3. Chỉ được đào tạo bằng cách sử dụng bộ dữ liệu hình ảnh.',
    optionsSummary: 'Dòng 1: Gán nhãn thủ công | Dòng 2: Gắn thẻ bằng máy học tự động | Dòng 3: Chỉ dùng ảnh thuần túy',
    iigAnswer: 'Khóa cũ máy chấm IIG: Yes – No – No (Chấm dòng 2 là No)',
    realAnswer: 'Khóa chuẩn kỹ thuật: Yes – Yes – No (Dòng 2 bắt buộc là YES)',
    category: 'corrected',
    categoryLabel: '🔴 IIG Sai kiến thức (Đã đính chính)',
    badgeVariant: 'destructive',
    explanation: 'Việc IIG chấm dòng 2 là "No" là sai lệch kiến thức cơ bản về Computer Vision & AI hiện đại. Các tập dữ liệu huấn luyện text-to-image hàng tỷ mẫu (như LAION-5B, COCO-Captions) bắt buộc phải sử dụng các mô hình thị giác - ngôn ngữ tự động (như BLIP, CLIP, Florence) để sinh chú thích (synthetic captions). Không thể có đủ nhân lực gán nhãn thủ công cho hàng tỷ bức ảnh. Dòng 3 là No vì mô hình text-to-image bắt buộc phải có văn bản đi kèm.',
    examTip: 'Đi thi nếu hệ thống IIG dùng khóa cũ thì dòng 2 là No; nhưng trong ứng dụng ôn tập này đã cập nhật khóa chuẩn Yes – Yes – No kèm ghi chú rõ ràng.',
    sourceRef: 'Nghiên cứu BLIP (Li et al., 2022); Teacher Guide tr. 39; Practice Exercises tr. 18'
  },
  {
    number: 126,
    id: '4usnijdzhcrr-my2zs1hsca8p',
    title: 'Phân biệt "Mô tả ảnh" (Describe) vs "Tạo/Sửa ảnh" (Edit/Create)',
    prompt: 'Đối với mỗi lời nhắc AI tạo sinh, hãy cho biết Yes nếu lời nhắc có hiệu quả trong việc mô tả nội dung của hình ảnh và No nếu không:\n1. Nền của hình ảnh này là gì?\n2. Tạo nền màu xanh lá cây cho hình ảnh của máy ảnh.\n3. Xây dựng một hình ảnh tương tự bằng cách sử dụng nền của hình ảnh này.',
    optionsSummary: 'Dòng 1: Nền ảnh này là gì? | Dòng 2: Tạo nền màu xanh lá... | Dòng 3: Xây dựng ảnh tương tự...',
    iigAnswer: 'Khóa cũ IIG: No – Yes – No (Chấm dòng 1 No, dòng 2 Yes)',
    realAnswer: 'Khóa chuẩn: Yes – No – No (Dòng 1 Yes, Dòng 2 No, Dòng 3 No)',
    category: 'corrected',
    categoryLabel: '🔴 IIG Sai bản dịch (Đã đính chính)',
    badgeVariant: 'destructive',
    explanation: 'Theo chuẩn Pearson Objective 2.3 (Teacher Guide tr. 101), nhiệm vụ xử lý ảnh chia rõ thành 4 nhóm: Tạo ảnh (Create), Đổi phong cách (Art style), Chỉnh sửa (Edit/Transform), và Mô tả ảnh (Describe image). Dòng 1 hỏi "Nền ảnh này là gì?" chính là yêu cầu AI mô tả chi tiết ảnh hiện có (Describe) -> YES. Dòng 2 "Tạo nền màu xanh..." là lệnh chỉnh sửa ảnh (Edit/Transform) -> NO. Dòng 3 là tạo biến thể ảnh mới -> NO.',
    examTip: 'Nhớ quy tắc phân biệt: "Hỏi để biết chi tiết ảnh" = Mô tả (Yes); "Ra lệnh tô màu, đổi nền, tạo mới" = Chỉnh sửa/Tạo mới (No). Khóa chuẩn: Yes – No – No.',
    sourceRef: 'Teacher Guide: Objective 2.3 & Bài 9 (trang 101)'
  },
  {
    number: 92,
    id: 'jiotm2r8a0db-gtnh3160urhu',
    title: 'Bẫy số Shot: Nhầm mức độ chi tiết prompt với số lượng Shot',
    prompt: 'Sử dụng kéo và thả, khớp từng lời nhắc ban đầu với loại mà nó đại diện:\n- Zero-shot\n- One-shot\n- Few-shot\nVới 3 lời nhắc:\n1. "Viết mã sẽ tạo ra một số ngẫu nhiên."\n2. "Viết mã sẽ tạo ra một số ngẫu nhiên từ 1 đến 10."\n3. "Viết mã sẽ tạo ra một số ngẫu nhiên giữa hai số ngẫu nhiên được tạo trước đó."',
    optionsSummary: 'Ghép 3 câu lệnh tạo số với Zero-shot, One-shot, Few-shot',
    iigAnswer: 'Lệnh 1 -> Zero-shot | Lệnh 2 -> One-shot | Lệnh 3 -> Few-shot',
    realAnswer: 'Thực tế kỹ thuật: Cả 3 câu lệnh trên 100% đều là Zero-shot!',
    category: 'logic_error',
    categoryLabel: '❌ Sai kiến thức cơ bản (Shot)',
    badgeVariant: 'destructive',
    explanation: 'Đây là lỗi kiến thức nghiêm trọng nhất của người ra đề Pearson/IIG. Trong NLP và Prompt Engineering (Brown et al., 2020), "Shot" là số cặp ví dụ mẫu (Input -> Output Demonstration). Cả 3 prompt này KHÔNG hề có bất kỳ ví dụ mẫu nào; việc thêm khoảng "1 đến 10" hay "giữa 2 số trước đó" chỉ là thêm ràng buộc (constraints). Tuy nhiên, người ra đề đã nhầm lẫn ngây ngô: càng nhiều chi tiết thì số shot càng tăng!',
    examTip: 'ĐI THI BẮT BUỘC CHỌN THEO Ý ĐỀ THI: Ngắn nhất = Zero-shot; Có 1 khoảng (1-10) = One-shot; Có 2 số trước đó = Few-shot để máy tính chấm tròn điểm!',
    sourceRef: 'Nghiên cứu gốc GPT-3 (Brown et al., NeurIPS 2020); Teacher Guide tr. 138, 141'
  },
  {
    number: 140,
    id: 'q56pjb1hp4l8-ot2hsxkb2lwl',
    title: 'Bẫy số Shot trong câu lệnh tạo hình ảnh sân bóng chày',
    prompt: 'Phân loại từng câu lệnh dùng để tạo hình ảnh về sân bóng chày là Zero-shot hay Few-shot:\n1. Hãy tạo một hình ảnh về sân bóng chày.\n2. Hãy tạo một hình ảnh về sân vận động bóng chày.\n3. Hãy tạo một hình ảnh về những người đang chơi bóng rổ, sau đó tạo một hình ảnh về sân bóng chày nơi mọi người đang chơi bóng chày.\n4. Sử dụng hình ảnh này của một sân vận động bóng chày hạng nhỏ làm điểm khởi đầu, hãy tạo một hình ảnh về sân vận động nơi mọi người đang chơi bóng chày.',
    optionsSummary: '4 câu lệnh tạo ảnh sân bóng chày phân loại Zero-shot hay Few-shot',
    iigAnswer: 'Dòng 1: Zero-shot | Dòng 2: Zero-shot | Dòng 3: Few-shot | Dòng 4: Few-shot',
    realAnswer: 'Thực tế kỹ thuật: Dòng 1, 2, 3 là Zero-shot (Dòng 3 là Chain/Multi-turn prompt). Dòng 4 là Image-to-Image / Reference Image.',
    category: 'logic_error',
    categoryLabel: '❌ Sai định nghĩa Few-shot trong Computer Vision',
    badgeVariant: 'destructive',
    explanation: 'Tương tự Câu 92, người ra đề coi câu ngắn là Zero-shot (Dòng 1, 2); câu có chuỗi 2 bước bóng rổ -> bóng chày là Few-shot (Dòng 3); câu đính kèm 1 ảnh mẫu là Few-shot (Dòng 4). Thực tế, 1 ảnh tham chiếu gọi là Image conditioning / Image-to-Image, còn Few-shot tạo ảnh chuẩn phải cung cấp nhiều cặp (text prompt -> ảnh tương ứng).',
    examTip: 'Đi thi nhớ quy ước của IIG: 2 câu đầu ngắn chỉ có text = Zero-shot; 2 câu sau dài có chuỗi hành động hoặc ảnh đính kèm = Few-shot.',
    sourceRef: 'Teacher Guide: Bài 13; Practice Exercises tr. 86'
  },
  {
    number: 144,
    id: 'rsfeiascu7va-d01x5w1hirdo',
    title: 'Hiểu sai kỹ thuật Reverse Prompting',
    prompt: 'Chọn Yes nếu câu lệnh sử dụng kỹ thuật đảo ngược kết quả (reverse prompting) và No nếu không:\n1. Tôi đang phỏng vấn ai đó cho vị trí thiết kế đồ họa. Tôi nên bắt đầu với ba câu hỏi phỏng vấn nào?\n2. Nếu tôi muốn cải thiện các cuộc họp nhóm của mình, bạn sẽ đưa ra những lời khuyên cụ thể nào?\n3. Hệ thống cơ sở dữ liệu nào sẽ tốt nhất để sử dụng cho dữ liệu yêu cầu một lượng lớn phân tích thống kê?',
    optionsSummary: 'Dòng 1: Hỏi câu phỏng vấn | Dòng 2: Xin lời khuyên họp nhóm | Dòng 3: Hỏi chọn cơ sở dữ liệu',
    iigAnswer: 'Khóa IIG: Yes – Yes – No',
    realAnswer: 'Thực tế kỹ thuật: Cả 3 câu đều là câu hỏi tư vấn / xin ý kiến thông thường (Consulting Prompt), không có cơ chế Reverse Prompting chuẩn.',
    category: 'logic_error',
    categoryLabel: '❌ Hiểu sai định nghĩa Reverse Prompting',
    badgeVariant: 'destructive',
    explanation: 'Tài liệu tham khảo chính thức ("Ví dụ về kỹ thuật các câu lệnh Gen AI.docx") định nghĩa rõ 2 dạng Reverse Prompting: (1) Đưa ra mục tiêu và bảo AI đóng vai người phỏng vấn để hỏi lại người dùng; hoặc (2) Đưa ra kết quả đầu ra và bảo AI suy ngược ra prompt đã tạo ra nó. Dòng 1 và 2 người dùng hỏi AI câu hỏi/lời khuyên, AI không hề hỏi ngược lại người dùng. Nhưng người ra đề suy diễn rằng "muốn đạt kết quả phỏng vấn/họp nhóm nên hỏi xin bước làm từ AI = reverse". Dòng 3 chỉ hỏi công cụ kỹ thuật nên là No.',
    examTip: 'Đi thi nhớ công thức của IIG: 2 câu đầu hỏi AI cách làm / câu hỏi phỏng vấn = YES; Câu cuối hỏi so sánh công nghệ cơ sở dữ liệu = NO.',
    sourceRef: 'Ví dụ về kỹ thuật các câu lệnh Gen AI.docx (trang 1-2); Teacher Guide tr. 140'
  },
  {
    number: 51,
    id: '522j61hdta48-19jc1vybcopy',
    title: 'Lỗi đề thi thiếu phương án đúng thứ 2 trong tác vụ Tóm tắt',
    prompt: 'Hai câu lệnh (prompts) nào sau đây yêu cầu AI tóm tắt nội dung có sẵn? (Chọn hai)\nA. Những điều thú vị nào bạn có thể làm trong kỳ nghỉ hai tuần ở Miami?\nB. Tóm tắt cốt truyện của tác phẩm "Chúa tể những chiếc nhẫn" của Tolkien trong 500 từ.\nC. Viết một bài thơ về chú thỏ phép thuật mặc áo gi-lê đỏ.\nD. Tạo chương trình Python hỏi ngày sinh của bạn và cho biết bạn bao nhiêu tuổi.',
    optionsSummary: 'A. Nghỉ ở Miami | B. Tóm tắt Chúa tể những chiếc nhẫn | C. Viết thơ chú thỏ | D. Code Python',
    iigAnswer: 'Khóa IIG: Chọn A và B',
    realAnswer: 'Thực tế kỹ thuật: Chỉ có B là câu lệnh tóm tắt. A là câu lệnh tạo ý tưởng / gợi ý lịch trình (Ideation), không phải tóm tắt!',
    category: 'logic_error',
    categoryLabel: '⚠️ Lỗi đề thi thiếu phương án đúng',
    badgeVariant: 'warning',
    explanation: 'Theo Pearson Objective 2.1 (Teacher Guide tr. 89), tác vụ văn bản chia làm 3 nhóm độc lập: Thu thập nội dung, Tóm tắt (Summarize), và Sáng tạo ý tưởng (Generate ideas). Tác vụ tóm tắt bắt buộc phải có nội dung nguồn có sẵn để rút gọn. Câu B rõ ràng là tóm tắt. Câu A hỏi "làm gì ở Miami" là yêu cầu AI sáng tạo ý tưởng mới. Tuy nhiên vì đề ép "Chọn hai" và loại trừ C (viết thơ) và D (viết code), IIG buộc phải chấm A & B.',
    examTip: 'Đi thi gặp câu này bắt buộc đánh A và B dù biết rõ A là tạo ý tưởng, không phải tóm tắt!',
    sourceRef: 'Teacher Guide: Objective 2.1 (Bài 7, tr. 89-90)'
  },
  {
    number: 45,
    id: '362h223q9op2-nzsx5kmva45',
    title: 'Lỗi dịch thuật tiếng Anh sang tiếng Việt ngô nghê trong ghép mảnh Prompt',
    prompt: 'Bạn đang thực hiện chiến dịch marketing... ghép các đoạn prompt với loại "prompt category" tương ứng:\n1. "Bạn là một quản lý marketing cấp cao có kinh nghiệm..."\n2. "Các thông điệp cần được cá nhân hóa và nên mô phỏng giọng điệu của một người bạn..."\n3. "Hãy tạo một thông điệp gửi đến khách hàng dựa trên cách họ có thể yêu thích sản phẩm mới..."\n4. "Chúng ta cần tạo email cho từng cá nhân trong danh sách [liên kết bảng tính]..."',
    optionsSummary: 'Ghép 4 đoạn prompt với 4 nhãn phân loại',
    iigAnswer: 'Đoạn 1 -> Vai trò mà AI cần nhập vai | Đoạn 2 -> "Người gắn bó lâu dài và ví dụ" | Đoạn 3 -> "Toàn bộ nội dung của prompt" | Đoạn 4 -> Dữ liệu đầu vào (danh sách khách hàng)',
    realAnswer: 'Thực tế chuẩn: Đoạn 1 là Role/Persona; Đoạn 2 là Style/Tone & Examples; Đoạn 3 là Task/Instruction; Đoạn 4 là Context/Data Input.',
    category: 'translation_error',
    categoryLabel: '📝 Lỗi dịch thuật vụng về',
    badgeVariant: 'warning',
    explanation: 'Bản dịch tiếng Việt của đề thi dịch thuật ngữ máy móc không kiểm duyệt. Thuật ngữ gốc tiếng Anh có lẽ là "Persona / Long-standing relationship & Tone" bị dịch thành "Người gắn bó lâu dài và ví dụ". Nhãn "Task" (Nhiệm vụ) lại bị dịch thành "Toàn bộ nội dung của prompt".',
    examTip: 'Đi thi chỉ cần nhớ mẹo: "Bạn là quản lý..." -> Vai trò; "Mô phỏng giọng điệu..." -> Nhãn có chữ "Người gắn bó lâu dài..."; "Hãy tạo thông điệp..." -> Nhãn "Toàn bộ nội dung..."; "[liên kết bảng tính]" -> Dữ liệu đầu vào.',
    sourceRef: 'Teacher Guide: Bài 11 (Objective 3.1, tr. 120, 129)'
  },
  {
    number: 14,
    id: '3jxlusm2fw33-96w4m9jpopoq',
    title: 'Gán ghép dữ kiện chủ quan về bảo mật mã PIN & phiên ChatGPT',
    prompt: 'Với tư cách là quản trị viên trung tâm khảo thí... Chọn câu trả lời đúng cho mỗi câu hỏi:\n1. ChatGPT sẽ ghi nhớ tài khoản và mã PIN của thành viên trong bao lâu?\n2. ChatGPT có thể liên kết địa chỉ IP của bạn với dữ liệu này trong phiên sau không?\n3. Điều gì sẽ xảy ra nếu mã PIN của người dự thi bị xâm phạm do tấn công mạng trong phiên ChatGPT?',
    optionsSummary: 'Câu hỏi về thời gian nhớ PIN, liên kết IP và trách nhiệm pháp lý khi bị hack',
    iigAnswer: 'Dòng 1: Nó ghi nhớ trong toàn bộ phiên của bạn | Dòng 2: Có | Dòng 3: Bạn và công ty của bạn phải chịu trách nhiệm',
    realAnswer: 'Thực tế kỹ thuật: Thời hạn lưu trữ phụ thuộc vào cài đặt Data Controls / retention log 30 ngày của OpenAI; IP được log ở tầng mạng chứ không tự động nối mã PIN giữa các session nặc danh.',
    category: 'translation_error',
    categoryLabel: '⚠️ Áp đặt phương án chủ quan',
    badgeVariant: 'warning',
    explanation: 'Giáo trình bảo mật dữ liệu Pearson (Objective 4.3) nhấn mạnh việc không bao giờ tải PII và mã PIN lên công cụ AI công cộng. Khóa IIG gán câu trả lời mang tính suy diễn đơn giản hóa cho kỳ thi.',
    examTip: 'Đi thi chọn đúng bộ ba đáp án: "Ghi nhớ trong toàn bộ phiên" - "Có" - "Bạn và công ty chịu trách nhiệm".',
    sourceRef: 'Teacher Guide: Objective 4.3 (Bài 17, tr. 174, 176); Practice Exercises tr. 41'
  },
  {
    number: 13,
    id: '6w7lvumch3xi-bfw9a1f2nl3x',
    title: 'Công cụ AI phân vai phát triển phần mềm: MetaGPT vs Copilot',
    prompt: 'Bạn làm việc trong một nhóm phần mềm, đang triển khai ứng dụng tự động hóa quy trình vay (3 tác vụ riêng lẻ: nhập lịch sử tín dụng, tính điểm, gửi tin nhắn). Công cụ AI nào sẽ phù hợp để hỗ trợ quá trình phát triển ứng dụng một cách hợp tác bằng cách đảm nhận các vai trò?\nA. Meta GPT | B. Microsoft Copilot | C. Stable Diffusion | D. Adobe Firefly',
    optionsSummary: 'Chọn công cụ AI hỗ trợ phát triển phần mềm bằng cách đảm nhận các vai trò',
    iigAnswer: 'Khóa IIG: B. Microsoft Copilot',
    realAnswer: 'Thực tế công nghệ AI: A. MetaGPT mới là công cụ sinh ra để đảm nhận các vai trò (Product Manager, Architect, Engineer) cùng lập trình.',
    category: 'syllabus_bias',
    categoryLabel: '📌 Áp đặt giáo trình Pearson',
    badgeVariant: 'purple',
    explanation: 'Cụm từ "đảm nhận các vai trò một cách hợp tác" (collaboratively taking on roles) chính là định nghĩa và tôn chỉ thiết kế của framework mã nguồn mở MetaGPT. Tuy nhiên trong đề cương ôn thi của Pearson Certiport, Microsoft Copilot là công cụ đối tác chiến lược được đưa vào làm đáp án chuẩn cho tác vụ lập trình doanh nghiệp.',
    examTip: 'Đi thi PHẢI CHỌN MICROSOFT COPILOT (phương án B) để được điểm, đừng chọn MetaGPT!',
    sourceRef: 'Teacher Guide: tr. 54, 63 (Danh mục công cụ phổ biến)'
  },
  {
    number: 54,
    id: 'jaad4hx3idzc-vdc86uo40kte',
    title: 'Quyền sở hữu trí tuệ và bằng sáng chế do AI tạo ra (Phán quyết DABUS)',
    prompt: 'Tòa án Tối cao Vương quốc Anh đã phán quyết rằng AI không thể là người phát minh duy nhất trong các đơn xin cấp bằng sáng chế. Vậy việc sử dụng AI tạo sinh theo cách nào dưới đây sẽ cho phép bạn nộp đơn xin cấp bằng sáng chế?\nA. Dùng AI tạo bản kế hoạch từ mẫu trống có sẵn.\nB. Dùng AI để thiết kế lại sản phẩm hiện có nhằm tạo ra sản phẩm mới.\nC. Dùng AI để sửa lỗi trong bản thiết kế hiện tại của bạn.\nD. Dùng AI tạo bản kế hoạch cho sản phẩm mới chưa từng sản xuất.',
    optionsSummary: '4 cách dùng AI để được nộp đơn xin cấp bằng sáng chế',
    iigAnswer: 'Khóa IIG: B. Sử dụng AI để thiết kế lại sản phẩm hiện có nhằm tạo ra sản phẩm mới',
    realAnswer: 'Thực tế pháp lý: Luật bằng sáng chế đòi hỏi con người phải có đóng góp sáng tạo đáng kể (human inventive contribution). Cả 4 phương án đều chưa làm rõ tỷ lệ đóng góp của con người.',
    category: 'syllabus_bias',
    categoryLabel: '📌 Áp đặt tình huống hẹp',
    badgeVariant: 'purple',
    explanation: 'Phán quyết quốc tế DABUS khẳng định AI chỉ là công cụ, không thể là người phát minh độc lập. Đáp án B được chọn vì theo logic người ra đề, con người lấy sản phẩm có sẵn đưa vào AI để thiết kế lại thì con người vẫn là chủ thể khởi xướng quá trình phát minh.',
    examTip: 'Đi thi chọn phương án B (Thiết kế lại sản phẩm hiện có nhằm tạo ra sản phẩm mới).',
    sourceRef: 'Teacher Guide: Objective 4.2 (Bài 16, tr. 166-167)'
  },
  {
    number: 96,
    id: 'w1gk19nm9rv4-uvj8qrfxgy52',
    title: 'Ghép công cụ AI với nhiệm vụ: MetaGPT, Adobe Express, Claude',
    prompt: 'Ghép mỗi công cụ AI với một nhiệm vụ mà công cụ đó thực hiện:\n- Meta GPT\n- Adobe Express\n- Claude\nVới 3 nhiệm vụ:\n1. Tạo nhiều bài đăng trên mạng xã hội, dựa trên một số thông tin đầu vào.\n2. Tạo tài liệu thiết kế đồ họa, bao gồm tờ rơi, biểu ngữ và hình ảnh mạng xã hội.\n3. Tạo tài liệu kỹ thuật dựa trên thông tin Giao diện Lập trình Ứng dụng (API).',
    optionsSummary: 'Ghép MetaGPT, Adobe Express, Claude với 3 nhiệm vụ',
    iigAnswer: 'MetaGPT -> Mạng xã hội | Adobe Express -> Thiết kế đồ họa | Claude -> Tài liệu API',
    realAnswer: 'Thực tế: Adobe Express (Đồ họa) và Claude (Tài liệu API) rất chuẩn xác. Việc ghép MetaGPT với "Bài đăng mạng xã hội" là phương pháp loại trừ cưỡng ép của đề.',
    category: 'syllabus_bias',
    categoryLabel: '📌 Ghép theo phép loại trừ',
    badgeVariant: 'purple',
    explanation: 'Adobe Express rõ ràng là công cụ thiết kế đồ họa. Claude với cửa sổ ngữ cảnh lớn thường dùng xử lý tài liệu kỹ thuật API. Còn lại MetaGPT bị ghép vào tạo bài đăng mạng xã hội dù MetaGPT thực chất là framework đa tác tử cho phần mềm.',
    examTip: 'Cứ ghép Adobe Express vào đồ họa, Claude vào tài liệu kỹ thuật, còn lại MetaGPT đưa vào mạng xã hội.',
    sourceRef: 'Teacher Guide: Bài 5 & Bài 6 (tr. 54, 63)'
  },
  {
    number: 100,
    id: '2pq8nx7gok6q-5wjrvjye2ws',
    title: 'Đánh đồng AI truyền thống với AI tạo sinh trong ứng dụng độc lập',
    prompt: 'Những tình huống nào là ví dụ về mô hình AI tạo sinh thực hiện các nhiệm vụ cho con người trong các ứng dụng độc lập? (Chọn hai)\nA. Gửi lời nhắc cho ai đó dựa trên lịch cá nhân trong Outlook.\nB. Nhận được câu trả lời cho câu hỏi nghiên cứu bằng cách sử dụng Siri.\nC. Hiển thị nhu cầu nhân sự dựa trên xu hướng lưu lượng khách ghé thăm.\nD. Đề xuất một đơn thuốc cho ai đó dựa trên kết quả xét nghiệm.',
    optionsSummary: 'A. Outlook nhắc lịch | B. Siri trả lời câu hỏi | C. Dự báo nhân sự | D. Kê đơn thuốc',
    iigAnswer: 'Khóa IIG: Chọn A và B',
    realAnswer: 'Thực tế kỹ thuật: Outlook nhắc lịch là thuật toán quy tắc (Rule-based/Calendar logic); Siri trả lời là Voice Assistant / Web Search truyền thống, không phải mô hình GenAI độc lập.',
    category: 'syllabus_bias',
    categoryLabel: '📌 Đánh đồng thuật toán truyền thống với GenAI',
    badgeVariant: 'purple',
    explanation: 'Giáo trình Pearson xếp Outlook và Siri vào ví dụ ứng dụng độc lập phổ biến hỗ trợ công việc con người để đối chiếu với bài toán chuyên dụng (y tế, nhân sự). Người ra đề không phân biệt rạch ròi giữa AI tạo sinh (GenAI sinh nội dung mới) với trợ lý tự động hóa thông thường.',
    examTip: 'Đi thi bắt buộc chọn A (Outlook nhắc lịch) và B (Siri trả lời nghiên cứu).',
    sourceRef: 'Teacher Guide: Bài 6 (tr. 63, 65)'
  },
  {
    number: 102,
    id: 'av51q2djr5c8-eicnmvns5y3i',
    title: 'Hạn chế của AI tạo sinh: Giới hạn trần dữ liệu bị coi là sai',
    prompt: 'Một đội thể thao chuyên nghiệp muốn biết những hạn chế của AI tạo sinh cho mục đích tiếp thị. Một số hạn chế của AI tạo sinh là gì? (Chọn hai)\nA. Đầu ra không phải lúc nào cũng đáng tin cậy.\nB. Có sự thiếu hụt các tiêu chuẩn chung về cách thức sử dụng AI.\nC. Lượng dữ liệu được nhập vào một mô hình có giới hạn trần.\nD. Lượng dữ liệu được xuất ra từ một mô hình có giới hạn trần.',
    optionsSummary: 'A. Không đáng tin | B. Thiếu tiêu chuẩn chung | C. Giới hạn trần đầu vào | D. Giới hạn trần đầu ra',
    iigAnswer: 'Khóa IIG: Chọn A và B',
    realAnswer: 'Thực tế công nghệ: Cả C và D (Context Window & Max Output Tokens) đều là hạn chế kỹ thuật cực kỳ lớn và hiển nhiên của mọi mô hình GenAI!',
    category: 'syllabus_bias',
    categoryLabel: '📌 Chỉ bám câu chữ giáo trình Certiport',
    badgeVariant: 'purple',
    explanation: 'Trong thực tế, mô hình nào cũng có trần context window (ví dụ 8k, 32k, 128k tokens) và max generation tokens. Tuy nhiên, người ra đề chỉ bốc nguyên văn mục tiêu khảo thí Objective 1.6 trong sách: "Unreliable output" (A) và "Lack of common standards" (B) để làm đáp án đúng, coi C và D là câu nhiễu.',
    examTip: 'Đi thi TUYỆT ĐỐI KHÔNG CHỌN C và D! Phải chọn A (Đầu ra không đáng tin cậy) và B (Thiếu tiêu chuẩn chung).',
    sourceRef: 'Teacher Guide: Objective 1.6 (Bài 4, tr. 70-71)'
  },
  {
    number: 104,
    id: '7g9asz2nem88-vjb1154oap24',
    title: 'Nhiệm vụ tận dụng AI hiệu quả: Loại bỏ năng lực sáng tạo nghệ thuật gốc',
    prompt: 'Đối với những nhiệm vụ nào trong cuộc sống mà người ta có thể tận dụng AI tạo sinh để thực hiện chúng hiệu quả hơn? (Chọn hai)\nA. Lập danh sách thực phẩm cần mua từ một công thức nấu ăn.\nB. Tạo một bản tóm tắt của một lượng lớn văn bản.\nC. Giúp hỗ trợ tinh thần.\nD. Giúp tạo ra một tác phẩm nghệ thuật gốc.',
    optionsSummary: 'A. Lập danh sách mua sắm | B. Tóm tắt văn bản | C. Hỗ trợ tinh thần | D. Tạo nghệ thuật gốc',
    iigAnswer: 'Khóa IIG: Chọn A và B',
    realAnswer: 'Thực tế: D (Tạo tác phẩm nghệ thuật gốc) là một trong những ứng dụng nổi bật và phổ biến nhất của Generative AI (Midjourney, DALL-E, Stable Diffusion).',
    category: 'syllabus_bias',
    categoryLabel: '📌 Giới hạn theo bài tập văn bản',
    badgeVariant: 'purple',
    explanation: 'Giáo trình Pearson tập trung vào các kỹ năng văn phòng và xử lý tài liệu cơ bản (Objective 2.1), nên ưu tiên A (rút trích cấu trúc) và B (tóm tắt). Phương án D bị người ra đề xem là vấn đề tranh cãi bản quyền/sáng tạo nghệ thuật nên không được chọn.',
    examTip: 'Đi thi chọn A (Lập danh sách thực phẩm) và B (Tóm tắt văn bản).',
    sourceRef: 'Teacher Guide: Bài 1 & Bài 7 (tr. 31, 63)'
  },
  {
    number: 117,
    id: '88f102m5n4fl-3m5it1gtna4g',
    title: 'Danh mục tạo ra thiên lệch (Bias): Loại bỏ vị trí địa lý',
    prompt: 'Danh mục nào sau đây khi được sử dụng để thu thập dữ liệu có thể tạo ra sự thiên lệch (hay thành kiến) trong đầu ra của AI tạo sinh? (Chọn hai)\nA. Giới tính\nB. Chủng tộc\nC. Vị trí địa lý\nD. Dữ liệu thống kê',
    optionsSummary: 'A. Giới tính | B. Chủng tộc | C. Vị trí địa lý | D. Dữ liệu thống kê',
    iigAnswer: 'Khóa IIG: Chọn A (Giới tính) và B (Chủng tộc)',
    realAnswer: 'Thực tế Machine Learning: C. Vị trí địa lý (Geographic bias) là một trong những nguyên nhân hàng đầu gây thiên lệch mô hình AI toàn cầu!',
    category: 'syllabus_bias',
    categoryLabel: '📌 Chỉ chọn 2 yếu tố nhân khẩu học hẹp',
    badgeVariant: 'purple',
    explanation: 'Ngay trong tài liệu thực hành (Practice Exercises Bài 1, tr. 94) cũng nêu rõ thiên lệch địa lý. Tuy nhiên trong câu hỏi thi trắc nghiệm này, IIG chỉ cho phép chọn 2 đáp án và khóa được chốt cố định là Giới tính & Chủng tộc theo cặp từ khóa cốt lõi của Objective 4.1.',
    examTip: 'Đi thi chọn Giới tính (Gender) và Chủng tộc (Race). Bỏ qua Vị trí địa lý.',
    sourceRef: 'Teacher Guide: Objective 4.1 (Bài 15, tr. 157); Practice Exercises tr. 94'
  },
  {
    number: 161,
    id: 'lfynr4o3diqw-1dsrankvcm2',
    title: 'Đặc điểm dữ liệu gây Bias: Loại bỏ "Dữ liệu không đầy đủ"',
    prompt: 'Những đặc điểm nào của dữ liệu có thể khiến mô hình AI tạo sinh bị thiên lệch (bias)? (Chọn 2)\nA. Độ tuổi\nB. Quốc tịch\nC. Khả năng sử dụng công nghệ\nD. Dữ liệu không đầy đủ',
    optionsSummary: 'A. Độ tuổi | B. Quốc tịch | C. Tiếp cận công nghệ | D. Dữ liệu không đầy đủ',
    iigAnswer: 'Khóa IIG: Chọn A (Độ tuổi) và B (Quốc tịch)',
    realAnswer: 'Thực tế khoa học dữ liệu: D. Dữ liệu không đầy đủ / mất cân bằng mẫu (Incomplete/Imbalanced data) là NGUYÊN NHÂN GỐC RỄ gây ra Bias!',
    category: 'syllabus_bias',
    categoryLabel: '📌 Nhầm lẫn giữa thuộc tính bảo vệ và nguyên nhân kỹ thuật',
    badgeVariant: 'purple',
    explanation: 'Người ra đề đã nhầm lẫn giữa "Thuộc tính nhân khẩu học nhạy cảm" (Tuổi, Quốc tịch, Giới tính) với "Đặc điểm của tập dữ liệu". Trong toán học và ML, chính việc dữ liệu bị thiếu hụt hoặc không đầy đủ mới dẫn đến mô hình bị thiên lệch. Nhưng vì câu hỏi thi đóng khung theo danh sách nhân khẩu học của Pearson, khóa chỉ công nhận A & B.',
    examTip: 'Đi thi chỉ chọn Độ tuổi (Age) và Quốc tịch (Nationality).',
    sourceRef: 'Teacher Guide: Objective 4.1 (tr. 157); Practice Exercises tr. 94'
  }
];
