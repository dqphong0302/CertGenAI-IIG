'use client';

import { useMemo, useState } from 'react';
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Copy,
  Flame,
  Layers,
  Printer,
  Scale,
  Search,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Terminal,
  Workflow,
  Zap,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface ExamTrap {
  id: number;
  title: string;
  trap: string;
  solution: string;
  badge?: string;
}

interface Architecture {
  name: string;
  category: string;
  mechanism: string;
  applications: string;
  note?: string;
}

interface PromptTechnique {
  name: string;
  desc: string;
  example: string;
}

interface GlossaryItem {
  en: string;
  vi: string;
  desc: string;
}

const EXAM_TRAPS: ExamTrap[] = [
  {
    id: 1,
    title: 'Phát hiện gian lận ngân hàng / Bán hàng bất thường',
    trap: 'Nhầm tưởng bài toán phân tích/phát hiện bất thường này là do Generative AI thực hiện.',
    solution:
      "Đây là Predictive AI (AI dự báo / phân tích), KHÔNG PHẢI Generative AI. Chỉ có 'thêm ngôi nhà vào ảnh theo mô tả' mới là GenAI!",
    badge: 'Bẫy phân loại',
  },
  {
    id: 2,
    title: 'Triển khai AI gia sư đa môn học từ ChatGPT',
    trap: 'Chọn mô hình dựa trên khuếch tán (diffusion) hoặc huấn luyện lại toàn bộ mô hình.',
    solution:
      'ChatGPT vốn dùng Mô hình Transformer mặc định. Cách tối ưu là giữ nguyên mô hình nền tảng và bổ sung hướng dẫn cụ thể cho từng môn học.',
    badge: 'Kiến trúc',
  },
  {
    id: 3,
    title: 'Giải thích quang hợp cho học sinh tiểu học',
    trap: "Chọn 'Đơn giản hóa bài giải' hoặc 'Giải thích ngắn gọn hơn' (quá mơ hồ).",
    solution:
      "Chọn 'Viết lại cho đối tượng mục tiêu là trẻ nhỏ / học sinh tiểu học'. Chỉ rõ đối tượng mục tiêu (Audience) giúp AI tự điều chỉnh từ vựng và độ khó phù hợp nhất.",
    badge: 'Đối tượng',
  },
  {
    id: 4,
    title: 'Đồng nhất ngữ pháp nhiều bài viết trong tạp chí',
    trap: "Chọn 'Bảng thuật ngữ (Glossary)' hoặc 'Một vai trò (Role)'.",
    solution:
      "Phải chọn 'Bản hướng dẫn sử dụng phong cách trình bày (Style Guide)' để kiểm soát ngữ pháp, chính tả, viết hoa và cách dùng từ nhất quán.",
    badge: 'Phong cách',
  },
  {
    id: 5,
    title: 'Dịch bài viết công nghệ sang nhiều thứ tiếng không sai nghĩa',
    trap: 'Chọn Style Guide hoặc Template mẫu.',
    solution:
      "Phải thêm 'Bảng thuật ngữ (Glossary)' vào câu lệnh để đảm bảo từ chuyên môn kỹ thuật được dịch chuẩn xác theo đúng ngữ cảnh trong từng ngôn ngữ.",
    badge: 'Dịch thuật',
  },
  {
    id: 6,
    title: 'Quy trình: Tạo dàn ý → Xem lại dàn ý → Viết bản tóm tắt',
    trap: 'Chọn Tinh chỉnh lặp lại (Iterative refinement) hoặc Phân tách (Decomposition).',
    solution:
      'Đáp án chuẩn là Chain-of-Thought (Tư duy chuỗi) — khái niệm hóa dàn ý, duyệt lại từng phần, rồi tổng hợp thành đoạn văn hoàn chỉnh.',
    badge: 'Kỹ thuật',
  },
  {
    id: 7,
    title: 'Chia nhỏ nhiệm vụ, lấy đầu ra prompt này làm đầu vào prompt sau',
    trap: 'Nhầm lẫn với Chain-of-Thought hoặc Few-shot.',
    solution:
      'Đây là định nghĩa chính xác của Prompt Chaining (Xâu chuỗi câu lệnh).',
    badge: 'Xâu chuỗi',
  },
  {
    id: 8,
    title: 'Đưa ví dụ Hỏi - Đáp pha trộn màu đỏ và xanh dương rồi hỏi câu mới',
    trap: 'Chọn Self-consistency hoặc Zero-shot.',
    solution:
      'Đáp án là Few-shot Prompting vì người dùng đã cung cấp cặp mẫu hoàn chỉnh (câu hỏi + câu trả lời mẫu) trước câu hỏi thực tế.',
    badge: 'Few-shot',
  },
  {
    id: 9,
    title: 'Câu lệnh cấu hình hệ thống tệp XML cho LMS',
    trap: "Sử dụng từ viết tắt 'LMS' trong câu lệnh.",
    solution:
      "Phải viết rõ ràng: 'hệ thống quản lý học tập' (Learning Management System) vì viết tắt LMS có thể bị AI hiểu nhầm sang Lightning Message Service.",
    badge: 'Viết tắt',
  },
  {
    id: 10,
    title: 'Đăng ký bằng sáng chế (Patent) cho thuật toán do AI sáng tạo',
    trap: 'Nghĩ rằng AI có thể đứng tên bằng sáng chế nếu thuật toán có tính mới.',
    solution:
      'Theo phán quyết của Tòa án Tối cao Vương quốc Anh, AI không phải là thể nhân (con người) nên không thể là nhà phát minh. Bằng sáng chế chỉ cấp cho con người.',
    badge: 'Pháp lý',
  },
  {
    id: 11,
    title: 'Sửa mặt kỹ thuật bài luận tiếng Anh đã đạt nội dung',
    trap: 'Yêu cầu AI viết lại toàn bộ bài hoặc đưa ra đề xuất lập luận.',
    solution:
      "Chỉ chọn: 'Phân tích tài liệu đã tải lên. Đưa ra đề xuất về ngữ pháp, dấu câu, chính tả và viết hoa'. Giữ nguyên nội dung tác giả đã ưng ý.",
    badge: 'Phản hồi',
  },
  {
    id: 12,
    title: 'Logo dịch vụ cắt cỏ thân thiện môi trường thu hút khách sinh thái',
    trap: "Nhắc chung chung như 'làm cho đẹp hơn' hoặc 'thêm nhiều chi tiết hơn'.",
    solution:
      "Bổ sung yếu tố sinh thái cụ thể: 'Thêm một khu vườn với cỏ xanh, hoa đầy màu sắc và ong' để tạo liên tưởng trực quan tới môi trường sống tự nhiên.",
    badge: 'Hình ảnh',
  },
  {
    id: 13,
    title: 'Tạo bài đăng mạng xã hội cùng phong cách trong cùng 1 luồng chat',
    trap: 'Chụp ảnh màn hình các bài trước hoặc tải bài của người khác lên.',
    solution:
      "Chỉ cần yêu cầu: 'Vui lòng chỉnh sửa bài đăng để nó trông giống với các bài trước đã tạo'. Vì dùng cùng một luồng chat nên AI đã lưu sẵn ngữ cảnh.",
    badge: 'Ngữ cảnh',
  },
  {
    id: 14,
    title: 'Tạo tác phẩm mới kết hợp phong cách Shakespeare & H.G. Wells',
    trap: 'Chọn mạng CNN hoặc mô hình khuếch tán (Diffusion).',
    solution:
      'Tạo mô hình nhẹ dựa trên kiến trúc Transformer, được huấn luyện từ toàn bộ các tác phẩm văn bản của hai tác giả.',
    badge: 'Mô hình',
  },
  {
    id: 15,
    title: 'Mở rộng khung ảnh ra cảnh xung quanh vs Sửa chi tiết bên trong',
    trap: 'Nhầm lẫn giữa Inpainting và Outpainting.',
    solution:
      'Mở rộng khung viền ra bên ngoài ảnh = Outpainting. Chỉnh sửa hoặc thay thế chi tiết bên trong vùng chọn của ảnh = Inpainting.',
    badge: 'Thao tác ảnh',
  },
];

const ARCHITECTURES: Architecture[] = [
  {
    name: '1. Transformer (Bộ chuyển đổi & Tự chú ý)',
    category: 'Văn bản, Code, Dịch thuật',
    mechanism:
      'Cơ chế Self-Attention (Tự chú ý) cho phép tính toán mối liên hệ giữa mọi từ trong chuỗi mà không phụ thuộc khoảng cách. Dự đoán token tiếp theo theo xác suất.',
    applications:
      'ChatGPT, Claude, Gemini, BERT, GitHub Copilot. Ứng dụng tóm tắt, hội thoại, dịch ngôn ngữ, viết mã nguồn.',
    note: 'ChatGPT dùng Transformer mặc định, KHÔNG PHẢI Diffusion!',
  },
  {
    name: '2. Diffusion Models (Mô hình Khuếch tán)',
    category: 'Hình ảnh nghệ thuật & Thiết kế',
    mechanism:
      'Quá trình 2 chiều: Thêm nhiễu Gaussian tuần hoàn vào ảnh cho đến khi thành nhiễu trắng, sau đó huấn luyện mạng nơ-ron khử nhiễu (Denoising) từng bước để tạo ảnh từ văn bản.',
    applications:
      'Stable Diffusion, Midjourney, DALL-E 3, Adobe Firefly. Chuyên vẽ tranh, thiết kế đồ họa, hình ảnh phong cảnh.',
    note: 'Chuyên cho Text-to-Image, không dùng cho bài toán văn bản thuần túy.',
  },
  {
    name: '3. GAN (Generative Adversarial Networks)',
    category: 'Avatar người ảo, Deepfake, Đối nghịch',
    mechanism:
      'Hai mạng cạnh tranh đối đầu: Generator (Bộ sinh) tạo dữ liệu giả; Discriminator (Bộ phân biệt) thẩm định thật/giả. Cả 2 cùng nâng cao chất lượng qua các vòng lặp.',
    applications:
      'Tạo avatar người ảo chân thực, hoán đổi khuôn mặt (Face-swap), tái tạo độ phân giải ảnh siêu nét (Super-resolution).',
    note: 'Điểm nhận diện: Có 2 mạng đối đầu nhau (Sinh vs Phân biệt).',
  },
  {
    name: '4. VAE (Variational Autoencoders)',
    category: 'Biến đổi nét mặt mượt mà',
    mechanism:
      'Mã hóa dữ liệu đầu vào thành phân phối xác suất trong không gian tiềm ẩn liên tục (Latent space), sau đó giải mã để tái tạo dữ liệu mới với các đặc trưng mong muốn.',
    applications:
      'Biến đổi mượt mà biểu cảm diện mạo (từ buồn sang cười, thay đổi góc nhìn khuôn mặt, đổi kiểu tóc).',
    note: 'Điểm nhận diện: Không gian tiềm ẩn liên tục (Continuous latent space).',
  },
];

const PROMPT_TECHNIQUES: PromptTechnique[] = [
  {
    name: 'Zero-shot Prompting',
    desc: 'Ra lệnh trực tiếp cho AI thực hiện nhiệm vụ mà không cung cấp bất kỳ ví dụ mẫu nào trước đó.',
    example: 'Dịch câu sau sang tiếng Pháp: Xin chào, hẹn gặp lại.',
  },
  {
    name: 'Few-shot Prompting',
    desc: 'Cung cấp một vài cặp ví dụ mẫu (Hỏi - Đáp hoặc Input - Output) trước khi đưa ra câu hỏi thực sự cần AI xử lý.',
    example:
      'Hỏi: Đỏ + Xanh dương = ? Đáp: Tím... Hỏi: 2 Đỏ + 1 Xanh dương = ? Đáp: Đỏ tím.',
  },
  {
    name: 'Chain-of-Thought (CoT - Tư duy chuỗi)',
    desc: "Yêu cầu AI phân tích và trình bày từng bước suy luận trung gian ('Hãy suy nghĩ từng bước...') trước khi đưa ra kết luận.",
    example:
      'Lập dàn ý đề xuất kinh doanh → xem lại dàn ý → viết đoạn tóm tắt vận hành.',
  },
  {
    name: 'Prompt Chaining (Xâu chuỗi câu lệnh)',
    desc: 'Chia bài toán lớn thành chuỗi các bước tuần tự; kết quả đầu ra của prompt trước trở thành dữ liệu đầu vào cho prompt tiếp theo.',
    example:
      'Prompt 1: Trích xuất các ý chính từ biên bản họp → Prompt 2: Soạn email thông báo giao việc từ các ý chính đó.',
  },
  {
    name: 'Reverse Prompting (Hỏi ngược)',
    desc: 'Yêu cầu AI đóng vai người phỏng vấn để chủ động đặt câu hỏi ngược lại cho người dùng nhằm thu thập đủ thông tin trước khi tạo nội dung.',
    example:
      'Tôi cần bạn viết CV xin việc. Hãy đặt cho tôi 5 câu hỏi để hiểu rõ năng lực của tôi trước khi soạn thảo.',
  },
  {
    name: 'Self-Consistency (Nhất quán tự thân)',
    desc: 'Cho AI sinh nhiều chuỗi suy luận độc lập cho cùng một vấn đề, sau đó chọn câu trả lời xuất hiện với số phiếu cao nhất.',
    example:
      'Dùng để giải các bài toán xác suất hoặc suy luận phức tạp cần độ tin cậy tuyệt đối.',
  },
  {
    name: 'Generate Knowledge (Tạo tri thức trước)',
    desc: 'Yêu cầu AI sản sinh ra các kiến thức nền tảng và tiêu chuẩn liên quan trước khi bắt đầu giải quyết bài toán cốt lõi.',
    example:
      'Liệt kê các tiêu chuẩn một bài thuyết trình chuyên nghiệp trước khi đánh giá slide của tôi.',
  },
];

const GLOSSARY_ITEMS: GlossaryItem[] = [
  {
    en: 'Generative AI',
    vi: 'AI tạo sinh',
    desc: 'Tạo ra nội dung mới (chữ, ảnh, tiếng, video, code) dựa trên học phân phối xác suất từ dữ liệu lớn.',
  },
  {
    en: 'Predictive AI',
    vi: 'AI dự báo / phân tích',
    desc: 'Phân loại hoặc dự đoán dựa trên nhãn lịch sử (ví dụ: phát hiện giao dịch gian lận ngân hàng).',
  },
  {
    en: 'Discriminative AI',
    vi: 'AI phân biệt',
    desc: 'Học ranh giới phân loại giữa các nhóm dữ liệu (thật/giả, spam/không spam) thay vì tạo nội dung mới.',
  },
  {
    en: 'Self-Attention',
    vi: 'Tự chú ý',
    desc: 'Cơ chế then chốt của Transformer tính toán trọng số liên kết giữa mọi token trong câu văn.',
  },
  {
    en: 'Diffusion Model',
    vi: 'Mô hình khuếch tán',
    desc: 'Khử nhiễu tuần hoàn để tạo ảnh từ mô tả văn bản (Stable Diffusion, Midjourney).',
  },
  {
    en: 'GAN',
    vi: 'Mạng đối nghịch tạo sinh',
    desc: 'Generator và Discriminator đối đầu nhau, chuyên tạo avatar người ảo chân thực.',
  },
  {
    en: 'VAE',
    vi: 'Bộ tự mã hóa biến phân',
    desc: 'Mã hóa vào không gian tiềm ẩn liên tục, giúp biến đổi mượt mà biểu cảm diện mạo.',
  },
  {
    en: 'Token',
    vi: 'Đơn vị từ vựng cơ bản',
    desc: 'Mẩu từ vựng nhỏ mô hình xử lý (1 token ≈ 0.75 từ tiếng Anh hoặc 1-2 âm tiết tiếng Việt).',
  },
  {
    en: 'Context Window',
    vi: 'Cửa sổ ngữ cảnh',
    desc: 'Giới hạn bộ nhớ token tối đa trong một phiên làm việc. Vượt quá sẽ dẫn đến quên yêu cầu ban đầu.',
  },
  {
    en: 'Temperature',
    vi: 'Nhiệt độ sinh',
    desc: '0.0: Logic, xác định, ít lỗi (toán, y tế); 0.7 - 1.0+: Ngẫu nhiên, phong phú, sáng tạo (thơ văn).',
  },
  {
    en: 'Zero-shot Prompting',
    vi: 'Lệnh không ví dụ mẫu',
    desc: 'Yêu cầu AI thực hiện nhiệm vụ ngay mà không kèm bất kỳ ví dụ mẫu nào.',
  },
  {
    en: 'Few-shot Prompting',
    vi: 'Lệnh kèm ví dụ mẫu',
    desc: 'Cung cấp một vài cặp Hỏi - Đáp mẫu để AI học khuôn mẫu định dạng trước khi trả lời.',
  },
  {
    en: 'Chain-of-Thought (CoT)',
    vi: 'Tư duy chuỗi',
    desc: 'Bắt buộc AI trình bày từng bước suy luận trung gian trước khi chốt kết quả cuối.',
  },
  {
    en: 'Prompt Chaining',
    vi: 'Xâu chuỗi câu lệnh',
    desc: 'Chia nhỏ nhiệm vụ, lấy đầu ra của bước trước làm đầu vào của bước kế tiếp.',
  },
  {
    en: 'Reverse Prompting',
    vi: 'Hỏi ngược',
    desc: 'AI đặt câu hỏi phỏng vấn lại người dùng để làm rõ thông tin trước khi tạo sản phẩm.',
  },
  {
    en: 'Style Guide',
    vi: 'Bản hướng dẫn phong cách',
    desc: 'Tài liệu quy định chuẩn mực ngữ pháp, chính tả, cách dùng từ đồng nhất cho toàn bộ ấn phẩm.',
  },
  {
    en: 'Glossary',
    vi: 'Bảng thuật ngữ',
    desc: 'Danh sách dịch thuật ngữ chuyên ngành chuẩn, đảm bảo tính nhất quán và chính xác theo ngữ cảnh.',
  },
  {
    en: 'Inpainting',
    vi: 'Chỉnh sửa nội vùng',
    desc: 'Thay thế hoặc chỉnh sửa một chi tiết bên trong vùng chọn của bức ảnh đã có.',
  },
  {
    en: 'Outpainting',
    vi: 'Mở rộng ngoại cảnh',
    desc: 'Mở rộng khung viền bức ảnh ra bên ngoài ranh giới cảnh gốc ban đầu.',
  },
  {
    en: 'Negative Prompt',
    vi: 'Câu lệnh phủ định',
    desc: 'Danh sách các chi tiết bị cấm xuất hiện trong ảnh kết quả (no blur, no watermark).',
  },
  {
    en: 'Hallucination',
    vi: 'Ảo giác AI',
    desc: 'AI bịa đặt thông tin sai lệch, trích dẫn học thuật hoặc án lệ không có thật với giọng văn tự tin.',
  },
  {
    en: 'Self-Confirmation Bias',
    vi: 'Bẫy tự xác nhận',
    desc: 'Lỗi hỏi lại chính AI xem nó có đúng không; nguyên tắc đúng là phải xác minh độc lập nguồn ngoài.',
  },
  {
    en: 'Grounding',
    vi: 'Ràng buộc thực tế',
    desc: "Ràng buộc AI chỉ trả lời dựa trên tài liệu được cung cấp và bắt buộc nói 'không biết' nếu thiếu tin.",
  },
  {
    en: 'Knowledge Cutoff',
    vi: 'Mốc ngắt tri thức',
    desc: 'Thời điểm kết thúc cập nhật dữ liệu huấn luyện của mô hình AI.',
  },
  {
    en: 'Historical Bias',
    vi: 'Thiên kiến lịch sử',
    desc: 'Dữ liệu huấn luyện phản ánh định kiến xã hội bất bình đẳng trong quá khứ.',
  },
  {
    en: 'Representation Bias',
    vi: 'Thiên kiến biểu diễn',
    desc: 'Tập dữ liệu thiếu mẫu của một nhóm đối tượng cụ thể (người khuyết tật, người già).',
  },
  {
    en: 'Labeling Bias',
    vi: 'Thiên kiến gán nhãn',
    desc: 'Người tham gia dán nhãn đưa định kiến chủ quan của mình vào tiêu chí phân loại.',
  },
  {
    en: 'Static Data Masking',
    vi: 'Mặt nạ dữ liệu tĩnh',
    desc: 'Che giấu thông tin định danh cá nhân (PII) bằng ký tự đại diện (XXX-XX-1234).',
  },
  {
    en: 'Tokenization (Bảo mật)',
    vi: 'Mã hóa token',
    desc: 'Thay thế dữ liệu nhạy cảm bằng chuỗi token ngẫu nhiên không thể giải mã nếu không có khóa bí mật.',
  },
  {
    en: 'Pseudonymization',
    vi: 'Tạo bí danh',
    desc: 'Thay thế thông tin nhận dạng bằng tên giả hoặc mã ký hiệu.',
  },
  {
    en: 'Human-in-the-loop',
    vi: 'Con người giám sát',
    desc: 'Nguyên tắc con người luôn kiểm soát và chịu trách nhiệm pháp lý tối hậu với đầu ra AI.',
  },
];

export function TheoryCramSheet({
  onStartExam,
  onStartPractice,
}: {
  onStartExam?: () => void;
  onStartPractice?: () => void;
}) {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);
  const [completedSections, setCompletedSections] = useState<
    Record<string, boolean>
  >(() => {
    if (typeof window === 'undefined') return {};
    try {
      const saved = localStorage.getItem('certgenai:cram:checklist');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleSectionComplete = (key: string) => {
    setCompletedSections((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      try {
        localStorage.setItem('certgenai:cram:checklist', JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const completedCount = useMemo(
    () => Object.values(completedSections).filter(Boolean).length,
    [completedSections],
  );

  const handlePrint = () => {
    window.print();
  };

  const handleCopyMarkdown = async () => {
    const text = document.getElementById('cram-sheet-content')?.innerText || '';
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const normalizedQuery = searchQuery.toLowerCase().trim();

  const filteredTraps = useMemo(() => {
    if (!normalizedQuery) return EXAM_TRAPS;
    return EXAM_TRAPS.filter(
      (item) =>
        item.title.toLowerCase().includes(normalizedQuery) ||
        item.trap.toLowerCase().includes(normalizedQuery) ||
        item.solution.toLowerCase().includes(normalizedQuery) ||
        (item.badge && item.badge.toLowerCase().includes(normalizedQuery)),
    );
  }, [normalizedQuery]);

  const filteredGlossary = useMemo(() => {
    if (!normalizedQuery) return GLOSSARY_ITEMS;
    return GLOSSARY_ITEMS.filter(
      (item) =>
        item.en.toLowerCase().includes(normalizedQuery) ||
        item.vi.toLowerCase().includes(normalizedQuery) ||
        item.desc.toLowerCase().includes(normalizedQuery),
    );
  }, [normalizedQuery]);

  const matchesSearch = (text: string) => {
    if (!normalizedQuery) return true;
    return text.toLowerCase().includes(normalizedQuery);
  };

  return (
    <div className="relative animate-in fade-in duration-300">
      {/* Top Banner / Actions */}
      <div className="mb-6 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent p-5 sm:p-6 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Badge className="border-amber-500/30 bg-amber-500/20 text-amber-800 dark:text-amber-300 font-bold">
                <Zap size={13} className="mr-1 fill-current" /> ÔN TẬP CẤP TỐC
                TRƯỚC GIỜ THI
              </Badge>
              <span className="text-xs text-muted-foreground">
                Chuẩn Certiport / IIG
              </span>
            </div>
            <h2 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
              Cẩm Nang Lý Thuyết Tóm Tắt 1 Trang
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Tổng hợp toàn bộ trọng tâm 4 khối kiến thức thi, 15 bẫy trắc
              nghiệm điểm liệt, bảng đối chiếu và thuật ngữ cốt lõi. Đọc kỹ
              trong 15-20 phút để nắm chắc 700+/1000 điểm.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopyMarkdown}
              className="text-xs gap-1.5"
              title="Sao chép nội dung tóm tắt"
            >
              <Copy size={14} />
              {copied ? 'Đã chép!' : 'Chép ghi chú'}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrint}
              className="text-xs gap-1.5"
              title="In trang hoặc lưu PDF"
            >
              <Printer size={14} />
              In / Lưu PDF
            </Button>
            {onStartExam && (
              <Button
                size="sm"
                onClick={onStartExam}
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs gap-1 shadow-sm"
              >
                Thi thử ngay <ArrowRight size={14} />
              </Button>
            )}
          </div>
        </div>

        {/* Quick progress counter */}
        <div className="mt-4 pt-3 border-t border-border/50 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground">
              Tiến độ ôn tập cấp tốc:
            </span>
            <span className="rounded-full bg-amber-500/20 px-2 py-0.5 font-bold text-amber-700 dark:text-amber-300">
              {completedCount} / 6 khối trọng tâm đã đánh dấu
            </span>
          </div>
          <span className="text-muted-foreground italic">
            Mẹo: Nhấn vào các ô [✓ Đã nắm] ở từng phần để theo dõi mức độ tự
            tin.
          </span>
        </div>
      </div>

      {/* Sticky Search and Filter Controls */}
      <div className="sticky top-20 z-30 mb-6 rounded-xl border border-border/80 bg-background/95 p-3 backdrop-blur-md shadow-sm space-y-3">
        <div className="relative">
          <Search
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            id="cram-search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm nhanh: CoT, Diffusion, Inpainting, Glossary, Style Guide, Bias, PII, LMS, 700..."
            className="pl-9.5 pr-20 text-sm bg-card"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-muted-foreground hover:text-foreground"
            >
              Xóa lọc
            </button>
          )}
        </div>

        {/* Topic navigation pills */}
        <div className="flex flex-wrap gap-1.5 overflow-x-auto pb-1 text-xs">
          {[
            { id: 'all', label: 'Tất cả kiến thức' },
            { id: 'strategy', label: '0. Chiến lược thi', badge: '700/1000' },
            { id: 'methods', label: '1. Bản chất & Phương pháp', badge: '25%' },
            { id: 'prompting', label: '2. Kỹ thuật Prompt', badge: '30%' },
            {
              id: 'verification',
              label: '3. Xác minh & Đánh giá',
              badge: '25%',
            },
            { id: 'responsible', label: '4. Đạo đức & Pháp lý', badge: '20%' },
            { id: 'traps', label: '⚠️ 15 Bẫy đề thi kinh điển', badge: 'Hot' },
            {
              id: 'glossary',
              label: '📖 Bảng tra cứu thuật ngữ',
              badge: '31 từ',
            },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 font-medium transition-all shrink-0',
                activeTab === tab.id
                  ? 'bg-primary text-primary-foreground font-bold shadow-xs'
                  : 'bg-muted/70 text-muted-foreground hover:bg-muted hover:text-foreground',
              )}
            >
              <span>{tab.label}</span>
              {tab.badge && (
                <span
                  className={cn(
                    'rounded px-1 py-0.2 text-[10px] font-bold uppercase',
                    activeTab === tab.id
                      ? 'bg-primary-foreground/20 text-primary-foreground'
                      : 'bg-card text-foreground/80',
                  )}
                >
                  {tab.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div id="cram-sheet-content" className="space-y-8 text-foreground/90">
        {/* ========================================================= */}
        {/* SECTION 0: CHIẾN THUẬT PHÒNG THI */}
        {/* ========================================================= */}
        {(activeTab === 'all' || activeTab === 'strategy') &&
          matchesSearch(
            'chiến thuật phòng thi certiport iig điểm số 700 1000 50 phút',
          ) && (
            <section
              id="section-strategy"
              className="scroll-mt-36 rounded-2xl border border-border bg-card p-5 sm:p-7 shadow-xs"
            >
              <div className="flex items-center justify-between border-b border-border/60 pb-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="grid size-8 place-items-center rounded-lg bg-primary/10 text-primary font-black">
                    0
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-foreground">
                    Chiến Thuật Phòng Thi & Thang Điểm Chuẩn IIG
                  </h3>
                </div>
                <button
                  onClick={() => toggleSectionComplete('strategy')}
                  className={cn(
                    'flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md border transition-all',
                    completedSections['strategy']
                      ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                      : 'border-border text-muted-foreground hover:border-foreground/40',
                  )}
                >
                  <CheckCircle2 size={14} />
                  {completedSections['strategy']
                    ? 'Đã nắm vững'
                    : 'Đánh dấu đã nắm'}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="rounded-xl border border-border/70 bg-muted/30 p-4 space-y-1">
                  <span className="text-[11px] font-bold text-muted-foreground uppercase">
                    Quy mô đề thi
                  </span>
                  <p className="text-2xl font-black text-foreground">
                    50 câu / 50 phút
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Trung bình đúng 1 phút / câu. Gặp câu khó hãy gắn cờ (Flag)
                    và làm tiếp, không sa lầy quá 90 giây.
                  </p>
                </div>
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4 space-y-1">
                  <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase">
                    Điểm đỗ chuẩn
                  </span>
                  <p className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
                    700 / 1000 điểm
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Tương đương đúng tối thiểu <b>35 / 50 câu</b> (đạt 70%). Mỗi
                    câu tương đương 20 điểm.
                  </p>
                </div>
                <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 space-y-1">
                  <span className="text-[11px] font-bold text-amber-700 dark:text-amber-400 uppercase">
                    Nguyên tắc vàng
                  </span>
                  <p className="text-2xl font-black text-amber-700 dark:text-amber-400">
                    KHÔNG BỎ TRỐNG
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Bài thi <b>không trừ điểm</b> câu trả lời sai. Phải chọn đủ
                    100% câu hỏi trước khi bấm kết thúc bài thi.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-border/80 bg-muted/20 p-4">
                <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                  5 Dạng câu hỏi chính trong phòng thi IIG
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-primary">
                      • 1. Multiple Choice:
                    </span>{' '}
                    Chọn 1 đáp án đúng duy nhất.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-primary">
                      • 2. Multiple Response:
                    </span>{' '}
                    Chọn 2 hoặc 3 đáp án đúng (đọc kỹ đề yêu cầu chọn mấy).
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-primary">
                      • 3. Matching (Ghép cặp):
                    </span>{' '}
                    Nối khái niệm với định nghĩa tương ứng.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-primary">
                      • 4. Yes/No Matrix:
                    </span>{' '}
                    Bảng ma trận xác định Đúng/Sai hoặc Có/Không cho từng phát
                    biểu.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-primary">
                      • 5. Sequence (Thứ tự):
                    </span>{' '}
                    Sắp xếp các bước thực hiện theo đúng trình tự logic (vd: quy
                    trình xâu chuỗi prompt).
                  </li>
                </ul>
              </div>
            </section>
          )}

        {/* ========================================================= */}
        {/* SECTION 1: BẢN CHẤT & PHƯƠNG PHÁP AI TẠO SINH (METHODS) */}
        {/* ========================================================= */}
        {(activeTab === 'all' || activeTab === 'methods') &&
          matchesSearch(
            'phương pháp bản chất ai tạo sinh transformer diffusion gan vae predictive token gpu vram methods',
          ) && (
            <section
              id="section-methods"
              className="scroll-mt-36 rounded-2xl border border-border bg-card p-5 sm:p-7 shadow-xs"
            >
              <div className="flex items-center justify-between border-b border-border/60 pb-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="grid size-8 place-items-center rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 font-black">
                    1
                  </span>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-foreground">
                      Khối 1: Bản Chất, Kiến Trúc & Phương Pháp AI Tạo Sinh
                      (Methods)
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Chiếm khoảng 25% tổng số câu hỏi bài thi
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => toggleSectionComplete('methods')}
                  className={cn(
                    'flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md border transition-all',
                    completedSections['methods']
                      ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                      : 'border-border text-muted-foreground hover:border-foreground/40',
                  )}
                >
                  <CheckCircle2 size={14} />
                  {completedSections['methods']
                    ? 'Đã nắm vững'
                    : 'Đánh dấu đã nắm'}
                </button>
              </div>

              {/* Core Distinction Table */}
              <div className="mb-6 space-y-3">
                <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
                  <Flame size={16} className="text-amber-500" />
                  Bảng Phân Biệt Sống Còn: Generative AI vs Predictive /
                  Discriminative AI
                </h4>
                <div className="overflow-x-auto rounded-xl border border-border">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-muted/70 text-foreground border-b border-border">
                        <th className="p-3 font-bold w-1/4">Tiêu chí</th>
                        <th className="p-3 font-bold w-3/8 text-primary">
                          AI Tạo Sinh (Generative AI)
                        </th>
                        <th className="p-3 font-bold w-3/8 text-muted-foreground">
                          AI Phân Tích / Dự Báo (Predictive AI)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr className="bg-card">
                        <td className="p-3 font-semibold text-foreground">
                          Mục tiêu cốt lõi
                        </td>
                        <td className="p-3 text-primary font-medium">
                          Học phân phối xác suất để <b>TẠO RA NỘI DUNG MỚI</b>{' '}
                          chưa từng tồn tại
                        </td>
                        <td className="p-3 text-muted-foreground">
                          Phân tích dữ liệu lịch sử để <b>PHÂN LOẠI</b> hoặc{' '}
                          <b>DỰ ĐOÁN XU HƯỚNG</b>
                        </td>
                      </tr>
                      <tr className="bg-muted/20">
                        <td className="p-3 font-semibold text-foreground">
                          Ví dụ đề thi THẬT
                        </td>
                        <td className="p-3 text-foreground leading-relaxed">
                          ✓ Tự viết bài thơ mới, viết kịch bản
                          <br />✓{' '}
                          <b>Thêm ngôi nhà vào ảnh sau khi được mô tả</b>
                          <br />✓ Tự sinh mã Python tính tổng hai số
                          <br />✓ Tạo giọng nói thuyết minh nhân tạo
                        </td>
                        <td className="p-3 text-muted-foreground leading-relaxed">
                          ❌ Phân loại email (Spam / Không spam)
                          <br />❌ <b>Phát hiện giao dịch gian lận ngân hàng</b>
                          <br />❌{' '}
                          <b>Phát hiện bất thường trong mô hình bán hàng</b>
                          <br />❌{' '}
                          <b>Phân loại cảm xúc (Tích cực / Tiêu cực)</b>
                        </td>
                      </tr>
                      <tr className="bg-card">
                        <td className="p-3 font-semibold text-foreground">
                          Tính xác suất
                        </td>
                        <td className="p-3 text-foreground">
                          Cùng 1 câu lệnh có thể sinh nhiều đáp án đa dạng khác
                          nhau tùy thiết lập
                        </td>
                        <td className="p-3 text-muted-foreground">
                          Cho ra kết quả nhãn xác định hoặc xác suất lớp phân
                          loại cụ thể
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 4 Core Architectures Grid */}
              <div className="mb-6 space-y-3">
                <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
                  <Layers size={16} className="text-blue-500" />4 Kiến Trúc Mô
                  Hình Sinh Cốt Lõi (Phải Nhớ Từng Đặc Trưng)
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs">
                  {ARCHITECTURES.map((arch) => (
                    <div
                      key={arch.name}
                      className="rounded-xl border border-border bg-card p-4 space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <b className="text-sm text-foreground font-bold">
                          {arch.name}
                        </b>
                        <Badge variant="outline" className="text-[10px]">
                          {arch.category}
                        </Badge>
                      </div>
                      <p className="text-foreground/80 leading-relaxed">
                        <b>Cơ chế then chốt:</b> {arch.mechanism}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        <b>Ứng dụng:</b> {arch.applications}
                      </p>
                      {arch.note && (
                        <p className="text-amber-700 dark:text-amber-400 font-medium italic">
                          ⚡ {arch.note}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Token, Context & Parameters */}
              <div className="rounded-xl border border-border/70 bg-muted/20 p-4 space-y-3">
                <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">
                  Khái niệm phần cứng & Tham số sinh quan trọng
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                  <div className="bg-card p-3 rounded-lg border border-border">
                    <b className="text-primary block mb-1">
                      Token & Context Window
                    </b>
                    <p className="text-muted-foreground leading-relaxed">
                      1 token ≈ 0.75 từ tiếng Anh. Context window là giới hạn bộ
                      nhớ ngữ cảnh trong phiên làm việc. Vượt quá giới hạn sẽ
                      dẫn đến hiện tượng quên chỉ dẫn ban đầu.
                    </p>
                  </div>
                  <div className="bg-card p-3 rounded-lg border border-border">
                    <b className="text-primary block mb-1">
                      Temperature (Nhiệt độ)
                    </b>
                    <p className="text-muted-foreground leading-relaxed">
                      <b>Thấp (0.0 - 0.2):</b> Rất xác định, logic, ít lỗi (dùng
                      cho y tế, toán học, tài chính, kiểm toán).
                      <br />
                      <b>Cao (0.7 - 1.0+):</b> Tăng tính bất ngờ, phong phú,
                      sáng tạo (dùng cho thơ, kịch bản).
                    </p>
                  </div>
                  <div className="bg-card p-3 rounded-lg border border-border">
                    <b className="text-primary block mb-1">GPU & VRAM</b>
                    <p className="text-muted-foreground leading-relaxed">
                      AI tạo sinh yêu cầu GPU chuyên dụng với dung lượng{' '}
                      <b>VRAM cao</b> để nạp toàn bộ hàng tỷ tham số mô hình vào
                      bộ nhớ khi huấn luyện và suy luận (Inference).
                    </p>
                  </div>
                  <div className="bg-card p-3 rounded-lg border border-border">
                    <b className="text-primary block mb-1">
                      Training vs Fine-tuning
                    </b>
                    <p className="text-muted-foreground leading-relaxed">
                      <b>Pre-training:</b> Học tổng quát từ lượng dữ liệu khổng
                      lồ (rất tốn kém).
                      <br />
                      <b>Fine-tuning:</b> Tinh chỉnh mô hình nền tảng bằng dữ
                      liệu chuyên ngành hẹp (luật, y khoa).
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}

        {/* ========================================================= */}
        {/* SECTION 2: KỸ THUẬT VIẾT PROMPT (PROMPTING) */}
        {/* ========================================================= */}
        {(activeTab === 'all' || activeTab === 'prompting') &&
          matchesSearch(
            'kỹ thuật viết câu lệnh prompt prompting zero-shot few-shot cot chain-of-thought chaining reverse style guide glossary inpainting outpainting',
          ) && (
            <section
              id="section-prompting"
              className="scroll-mt-36 rounded-2xl border border-border bg-card p-5 sm:p-7 shadow-xs"
            >
              <div className="flex items-center justify-between border-b border-border/60 pb-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="grid size-8 place-items-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-black">
                    2
                  </span>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-foreground">
                      Khối 2: Nghệ Thuật & Kỹ Thuật Viết Prompt (Prompting)
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Chiếm khoảng 30% tổng số câu hỏi bài thi (Tỷ trọng cao
                      nhất)
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => toggleSectionComplete('prompting')}
                  className={cn(
                    'flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md border transition-all',
                    completedSections['prompting']
                      ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                      : 'border-border text-muted-foreground hover:border-foreground/40',
                  )}
                >
                  <CheckCircle2 size={14} />
                  {completedSections['prompting']
                    ? 'Đã nắm vững'
                    : 'Đánh dấu đã nắm'}
                </button>
              </div>

              {/* Formula 5 elements */}
              <div className="mb-6 rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4.5">
                <h4 className="text-sm font-bold text-emerald-700 dark:text-emerald-300 flex items-center gap-2 mb-2">
                  <Sparkles size={16} />
                  Công Thức 5 Thành Tố Cốt Lõi Của Một Prompt Chuẩn Mực
                </h4>
                <p className="text-xs text-foreground/80 leading-relaxed mb-3">
                  Khi đề thi hỏi yếu tố còn thiếu để câu lệnh đạt kết quả chính
                  xác nhất, hãy đối chiếu với 5 thành tố này:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs">
                  <div className="rounded-lg bg-card p-2.5 border border-border">
                    <span className="block font-bold text-primary">
                      1. Role
                    </span>
                    <span className="text-[11px] text-muted-foreground">
                      Vai trò chuyên gia
                    </span>
                  </div>
                  <div className="rounded-lg bg-card p-2.5 border border-border">
                    <span className="block font-bold text-primary">
                      2. Task
                    </span>
                    <span className="text-[11px] text-muted-foreground">
                      Nhiệm vụ cụ thể
                    </span>
                  </div>
                  <div className="rounded-lg bg-card p-2.5 border border-border">
                    <span className="block font-bold text-primary">
                      3. Context
                    </span>
                    <span className="text-[11px] text-muted-foreground">
                      Bối cảnh & Tình huống
                    </span>
                  </div>
                  <div className="rounded-lg bg-card p-2.5 border border-border">
                    <span className="block font-bold text-primary">
                      4. Constraints
                    </span>
                    <span className="text-[11px] text-muted-foreground">
                      Ràng buộc & Tiêu chí
                    </span>
                  </div>
                  <div className="rounded-lg bg-card p-2.5 border border-border col-span-2 sm:col-span-1">
                    <span className="block font-bold text-primary">
                      5. Format
                    </span>
                    <span className="text-[11px] text-muted-foreground">
                      Định dạng đầu ra
                    </span>
                  </div>
                </div>
              </div>

              {/* Prompting Techniques Master Comparison */}
              <div className="mb-6 space-y-3">
                <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
                  <Workflow size={16} className="text-primary" />
                  Bảng Đối Chiếu 7 Kỹ Thuật Prompting Hay Ra Thi Nhất
                </h4>
                <div className="overflow-x-auto rounded-xl border border-border">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-muted/70 text-foreground border-b border-border">
                        <th className="p-3 font-bold w-1/4">Kỹ thuật</th>
                        <th className="p-3 font-bold w-2/5">
                          Đặc trưng nhận diện trong đề
                        </th>
                        <th className="p-3 font-bold w-1/3">
                          Tình huống thực tế / Câu hỏi IIG
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {PROMPT_TECHNIQUES.map((tech) => (
                        <tr
                          key={tech.name}
                          className="hover:bg-muted/10 transition-colors"
                        >
                          <td className="p-3 font-bold text-primary">
                            {tech.name}
                          </td>
                          <td className="p-3 text-muted-foreground leading-relaxed">
                            {tech.desc}
                          </td>
                          <td className="p-3 text-foreground/80 leading-relaxed">
                            {tech.example}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Prompt Tuning & Image Operations */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="rounded-xl border border-border bg-muted/20 p-4 space-y-2.5">
                  <h5 className="font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                    <Terminal size={14} className="text-primary" />
                    Kiểm Soát Văn Phong & Dịch Thuật
                  </h5>
                  <ul className="space-y-2 text-foreground/80">
                    <li>
                      <b className="text-primary">
                        Bản hướng dẫn phong cách (Style Guide):
                      </b>{' '}
                      Đảm bảo tính nhất quán về ngữ pháp, quy tắc chính tả, và
                      cách lựa chọn từ ngữ giữa nhiều bài báo/ấn phẩm khác nhau.
                    </li>
                    <li>
                      <b className="text-primary">Bảng thuật ngữ (Glossary):</b>{' '}
                      Đảm bảo các từ chuyên môn kỹ thuật được dịch chính xác
                      theo đúng ngữ cảnh trong từng ngôn ngữ khác nhau.
                    </li>
                    <li>
                      <b className="text-primary">
                        Đối tượng mục tiêu (Audience):
                      </b>{' '}
                      Khi bài giải thích quá phức tạp (ví dụ về quang hợp), cách
                      tinh chỉnh chuẩn nhất là chỉ định trực tiếp đối tượng:{' '}
                      <i>
                        Viết lại cho đối tượng mục tiêu là học sinh tiểu học
                      </i>
                      .
                    </li>
                    <li>
                      <b className="text-primary">Tránh từ viết tắt mơ hồ:</b>{' '}
                      Ví dụ không viết &apos;cấu hình LMS&apos; mà phải ghi rõ{' '}
                      <i>cấu hình các hệ thống quản lý học tập</i> vì LMS có thể
                      là Lightning Message Service.
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-border bg-muted/20 p-4 space-y-2.5">
                  <h5 className="font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles size={14} className="text-primary" />
                    Prompting Hình Ảnh & Đa Phương Tiện
                  </h5>
                  <ul className="space-y-2 text-foreground/80">
                    <li>
                      <b className="text-primary">
                        Inpainting (Chỉnh sửa nội vùng):
                      </b>{' '}
                      Sửa đổi hoặc thay thế một chi tiết cụ thể <b>bên trong</b>{' '}
                      bức ảnh có sẵn (ví dụ đổi áo của nhân vật, xóa một đồ vật
                      trên bàn).
                    </li>
                    <li>
                      <b className="text-primary">
                        Outpainting (Mở rộng ngoại cảnh):
                      </b>{' '}
                      Mở rộng khung viền bức ảnh <b>ra bên ngoài</b> ranh giới
                      gốc để bổ sung cảnh quan xung quanh.
                    </li>
                    <li>
                      <b className="text-primary">Negative Prompt:</b> Khai báo
                      những yếu tố <b>tuyệt đối không được xuất hiện</b> trong
                      ảnh kết quả (ví dụ: no watermark, no blur, no extra
                      fingers).
                    </li>
                    <li>
                      <b className="text-primary">Prompt phong cách ảnh:</b>{' '}
                      Luôn chỉ định cụ thể phong cách nghệ thuật (cổ điển, màu
                      sắc rực rỡ, ánh sáng điện ảnh) thay vì chỉ mô tả chủ thể.
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          )}

        {/* ========================================================= */}
        {/* SECTION 3: ĐÁNH GIÁ, XÁC MINH & TINH CHỈNH (VERIFICATION) */}
        {/* ========================================================= */}
        {(activeTab === 'all' || activeTab === 'verification') &&
          matchesSearch(
            'xác minh đánh giá ảo giác hallucination grounding feedback kiểm chứng self-confirmation verification',
          ) && (
            <section
              id="section-verification"
              className="scroll-mt-36 rounded-2xl border border-border bg-card p-5 sm:p-7 shadow-xs"
            >
              <div className="flex items-center justify-between border-b border-border/60 pb-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="grid size-8 place-items-center rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 font-black">
                    3
                  </span>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-foreground">
                      Khối 3: Đánh Giá, Xác Minh & Tinh Chỉnh Kết Quả
                      (Verification)
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Chiếm khoảng 25% tổng số câu hỏi bài thi
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => toggleSectionComplete('verification')}
                  className={cn(
                    'flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md border transition-all',
                    completedSections['verification']
                      ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                      : 'border-border text-muted-foreground hover:border-foreground/40',
                  )}
                >
                  <CheckCircle2 size={14} />
                  {completedSections['verification']
                    ? 'Đã nắm vững'
                    : 'Đánh dấu đã nắm'}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-xs">
                <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-4 space-y-2">
                  <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold text-sm">
                    <AlertTriangle size={16} />
                    Hiện Tượng Ảo Giác (AI Hallucination)
                  </div>
                  <p className="text-foreground/85 leading-relaxed">
                    <b>Bản chất:</b> AI bịa đặt các dữ kiện, số liệu thống kê,
                    trích dẫn bài báo khoa học hoặc{' '}
                    <b>án lệ pháp lý không có thật</b> nhưng trình bày với giọng
                    văn tự tin, thuyết phục.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <b>Nguyên nhân:</b> Mô hình ngôn ngữ chỉ dự đoán token tiếp
                    theo theo xác suất, không có cơ chế tự kiểm chứng chân lý
                    khách quan.
                  </p>
                  <p className="text-amber-700 dark:text-amber-400 font-medium">
                    ⚠️ <b>Bài học án lệ:</b> Luật sư dùng trích dẫn án lệ do
                    ChatGPT sinh ra mà không kiểm tra lại đã bị tòa án xử phạt
                    nặng vì các vụ án đó hoàn toàn là bịa đặt.
                  </p>
                </div>

                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-4 space-y-2">
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-sm">
                    <ShieldCheck size={16} />
                    Nguyên Tắc Xác Minh Độc Lập (Independent Verification)
                  </div>
                  <p className="text-foreground/85 leading-relaxed">
                    <b>Bẫy tự xác nhận (Self-Confirmation Bias):</b> Tuyệt đối{' '}
                    <b>KHÔNG hỏi lại chính AI</b> câu trả lời vừa rồi có chắc
                    chắn đúng không. AI thường sẽ tự bào chữa hoặc tiếp tục đồng
                    tình sai lệch.
                  </p>
                  <p className="text-foreground/85 leading-relaxed">
                    <b>Biện pháp chuẩn:</b> Phải{' '}
                    <b>đối chiếu chéo (Cross-verification)</b> với các nguồn dữ
                    liệu bên ngoài có thẩm quyền (cổng thông tin chính phủ, sách
                    giáo khoa chuẩn, cơ sở dữ liệu chuyên ngành).
                  </p>
                  <p className="text-blue-700 dark:text-blue-400 font-medium">
                    ✓ Khi cần kiểm tra số liệu dân số thành phố → Tra cứu trực
                    tiếp niên giám thống kê nhà nước.
                  </p>
                </div>
              </div>

              {/* Grounding & Targeted Refinement */}
              <div className="rounded-xl border border-border/80 bg-muted/20 p-4 space-y-3 text-xs">
                <h4 className="font-bold text-foreground uppercase tracking-wider">
                  Các Kỹ Thuật Giảm Thiểu Sai Sót Khi Tinh Chỉnh
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="rounded-lg bg-card p-3 border border-border space-y-1">
                    <b className="text-primary block">Kỹ thuật Grounding</b>
                    <p className="text-muted-foreground leading-relaxed">
                      Đính kèm tài liệu tham chiếu và yêu cầu rõ:{' '}
                      <i>
                        Chỉ trả lời dựa trên tài liệu này; nếu tài liệu không đề
                        cập, hãy trả lời &apos;Tôi không biết&apos;
                      </i>
                      .
                    </p>
                  </div>
                  <div className="rounded-lg bg-card p-3 border border-border space-y-1">
                    <b className="text-primary block">Phản hồi có mục tiêu</b>
                    <p className="text-muted-foreground leading-relaxed">
                      Bảo toàn nội dung đạt yêu cầu, chỉ yêu cầu sửa đúng phần
                      cần:{' '}
                      <i>
                        Phân tích tài liệu đã tải lên. Đưa ra đề xuất về ngữ
                        pháp, dấu câu, chính tả và viết hoa
                      </i>
                      .
                    </p>
                  </div>
                  <div className="rounded-lg bg-card p-3 border border-border space-y-1">
                    <b className="text-primary block">Knowledge Cutoff</b>
                    <p className="text-muted-foreground leading-relaxed">
                      Mô hình không biết thông tin xảy ra sau ngày kết thúc đào
                      tạo. Với tin tức nóng hay kết quả thể thao tối qua, phải
                      dùng công cụ tìm kiếm thời gian thực.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}

        {/* ========================================================= */}
        {/* SECTION 4: AI CÓ TRÁCH NHIỆM & ĐẠO ĐỨC/PHÁP LÝ (RESPONSIBLE) */}
        {/* ========================================================= */}
        {(activeTab === 'all' || activeTab === 'responsible') &&
          matchesSearch(
            'đạo đức pháp lý bản quyền sở hữu trí tuệ bias thiên kiến pii masking deepfake tòa án anh responsible',
          ) && (
            <section
              id="section-responsible"
              className="scroll-mt-36 rounded-2xl border border-border bg-card p-5 sm:p-7 shadow-xs"
            >
              <div className="flex items-center justify-between border-b border-border/60 pb-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="grid size-8 place-items-center rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 font-black">
                    4
                  </span>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-foreground">
                      Khối 4: Sử Dụng AI Có Trách Nhiệm, Đạo Đức & Pháp Lý
                      (Responsible AI)
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Chiếm khoảng 20% tổng số câu hỏi bài thi
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => toggleSectionComplete('responsible')}
                  className={cn(
                    'flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md border transition-all',
                    completedSections['responsible']
                      ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                      : 'border-border text-muted-foreground hover:border-foreground/40',
                  )}
                >
                  <CheckCircle2 size={14} />
                  {completedSections['responsible']
                    ? 'Đã nắm vững'
                    : 'Đánh dấu đã nắm'}
                </button>
              </div>

              {/* Bias Types */}
              <div className="mb-6 space-y-3">
                <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
                  <ShieldAlert size={16} className="text-amber-500" />3 Dạng
                  Thiên Kiến (Bias) Thường Gặp Trong Đề Thi
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="rounded-xl border border-border bg-card p-3.5 space-y-1.5">
                    <b className="text-primary block text-sm">
                      1. Thiên kiến Lịch sử (Historical Bias)
                    </b>
                    <p className="text-muted-foreground leading-relaxed">
                      Dữ liệu huấn luyện phản ánh định kiến bất bình đẳng trong
                      quá khứ của xã hội. Ví dụ: dịch đại từ nghề nghiệp mặc
                      định bác sĩ là nam, y tá/giáo viên là nữ.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-3.5 space-y-1.5">
                    <b className="text-primary block text-sm">
                      2. Thiên kiến Biểu diễn (Representation Bias)
                    </b>
                    <p className="text-muted-foreground leading-relaxed">
                      Tập dữ liệu <b>thiếu hụt mẫu đại diện</b> của một nhóm
                      người cụ thể. Ví dụ: camera xe tự hành thiếu dữ liệu người
                      ngồi xe lăn, trẻ em qua đường, hoặc người khuyết tật.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-3.5 space-y-1.5">
                    <b className="text-primary block text-sm">
                      3. Thiên kiến Gán nhãn (Labeling Bias)
                    </b>
                    <p className="text-muted-foreground leading-relaxed">
                      Những người tham gia dán nhãn dữ liệu đưa định kiến chủ
                      quan của bản thân vào các tiêu chí phân loại.
                    </p>
                  </div>
                </div>
              </div>

              {/* Security, PII & Intellectual Property */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="rounded-xl border border-border bg-muted/20 p-4 space-y-2.5">
                  <h5 className="font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-emerald-500" />
                    Bảo Vệ Dữ Liệu Riêng Tư & PII
                  </h5>
                  <ul className="space-y-2 text-foreground/80">
                    <li>
                      <b className="text-primary">
                        PII (Personally Identifiable Information):
                      </b>{' '}
                      Số CCCD, số thẻ ngân hàng, hồ sơ y tế bệnh án, địa chỉ nhà
                      riêng.
                    </li>
                    <li>
                      <b className="text-primary">
                        Mặt nạ dữ liệu tĩnh (Static Data Masking):
                      </b>{' '}
                      Che giấu dữ liệu nhạy cảm bằng ký tự đại diện (ví dụ:
                      chuyển 123-45-6789 thành XXX-XX-6789) trước khi đưa vào
                      tập huấn luyện.
                    </li>
                    <li>
                      <b className="text-primary">
                        Tokenization (Mã hóa token):
                      </b>{' '}
                      Thay thế dữ liệu nhạy cảm bằng mã định danh ngẫu nhiên,
                      không thể giải mã ngược nếu không có khóa bí mật lưu ở máy
                      chủ bảo mật.
                    </li>
                    <li>
                      <b className="text-primary">Chính sách Opt-out:</b> Quyền
                      yêu cầu nhà cung cấp AI không sử dụng dữ liệu trò chuyện
                      của người dùng để đào tạo các phiên bản mô hình tiếp theo.
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-border bg-muted/20 p-4 space-y-2.5">
                  <h5 className="font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                    <Scale size={14} className="text-amber-500" />
                    Sở Hữu Trí Tuệ & Phán Quyết Pháp Lý
                  </h5>
                  <ul className="space-y-2 text-foreground/80">
                    <li>
                      <b className="text-primary">
                        Phán quyết Tòa án Tối cao Vương quốc Anh:
                      </b>{' '}
                      AI <b>KHÔNG THỂ</b> được công nhận là nhà phát minh để
                      đứng tên bằng sáng chế (Patent); chỉ có con người mới được
                      cấp bằng sáng chế.
                    </li>
                    <li>
                      <b className="text-primary">
                        Vi phạm bản quyền vs Phong cách:
                      </b>{' '}
                      Bắt chước phong cách (style) nói chung không vi phạm;
                      nhưng sao chép nguyên văn lời bài hát, đoạn nhạc, hoặc
                      tranh vẽ gốc là <b>vi phạm bản quyền (Copyright)</b>.
                    </li>
                    <li>
                      <b className="text-primary">
                        Quyền thương hiệu (Trademark):
                      </b>{' '}
                      Tự ý đưa logo, nhãn hiệu đã đăng ký của công ty khác vào
                      ảnh do AI tạo ra là vi phạm nhãn hiệu.
                    </li>
                    <li>
                      <b className="text-primary">
                        Deepfake & Thủy vân (Watermark):
                      </b>{' '}
                      Nghĩa vụ bắt buộc gắn watermark hoặc nhãn nhận diện kỹ
                      thuật số để thông báo nội dung do AI tạo ra, chống phỉ
                      báng và can thiệp bầu cử.
                    </li>
                    <li>
                      <b className="text-primary">
                        Human-in-the-loop (Con người kiểm soát):
                      </b>{' '}
                      Con người luôn là bên chịu trách nhiệm pháp lý cuối cùng
                      đối với quyết định và sản phẩm do AI sinh ra.
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          )}

        {/* ========================================================= */}
        {/* SECTION 5: 15 BẪY ĐỀ THI KINH ĐIỂN (EXAM TRAPS) */}
        {/* ========================================================= */}
        {(activeTab === 'all' || activeTab === 'traps') && (
          <section
            id="section-traps"
            className="scroll-mt-36 rounded-2xl border-2 border-amber-500/40 bg-card p-5 sm:p-7 shadow-sm"
          >
            <div className="flex items-center justify-between border-b border-border/60 pb-3 mb-4">
              <div className="flex items-center gap-2.5">
                <span className="grid size-8 place-items-center rounded-lg bg-amber-500 text-stone-950 font-black">
                  ⚠️
                </span>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-foreground">
                    15 Bẫy Trắc Nghiệm IIG &ldquo;Kinh Điển&rdquo; — Đọc Kỹ Để
                    Tránh Mất Điểm
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Những câu hỏi có tỷ lệ thí sinh chọn nhầm cao nhất trong
                    ngân hàng đề IIG
                  </p>
                </div>
              </div>
              <button
                onClick={() => toggleSectionComplete('traps')}
                className={cn(
                  'flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md border transition-all',
                  completedSections['traps']
                    ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                    : 'border-border text-muted-foreground hover:border-foreground/40',
                )}
              >
                <CheckCircle2 size={14} />
                {completedSections['traps'] ? 'Đã nắm vững' : 'Đánh dấu đã nắm'}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs">
              {filteredTraps.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl border border-border bg-muted/20 p-3.5 space-y-1.5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-amber-700 dark:text-amber-400">
                      {item.id}. {item.title}
                    </span>
                    {item.badge && (
                      <Badge
                        variant="outline"
                        className="text-[10px] shrink-0 border-amber-500/30"
                      >
                        {item.badge}
                      </Badge>
                    )}
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    <b>Bẫy thường gặp:</b> {item.trap}
                  </p>
                  <p className="text-emerald-700 dark:text-emerald-400 font-medium leading-relaxed">
                    <b>Chốt đáp án chuẩn:</b> {item.solution}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ========================================================= */}
        {/* SECTION 6: BẢNG TRA CỨU THUẬT NGỮ CỐT LÕI (GLOSSARY) */}
        {/* ========================================================= */}
        {(activeTab === 'all' || activeTab === 'glossary') && (
          <section
            id="section-glossary"
            className="scroll-mt-36 rounded-2xl border border-border bg-card p-5 sm:p-7 shadow-xs"
          >
            <div className="flex items-center justify-between border-b border-border/60 pb-3 mb-4">
              <div className="flex items-center gap-2.5">
                <span className="grid size-8 place-items-center rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 font-black">
                  📖
                </span>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-foreground">
                    Bảng Tra Cứu Thuật Ngữ Cốt Lõi (Song Ngữ Anh - Việt)
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Các từ khóa thường xuyên xuất hiện ở các câu hỏi nối cặp
                    (Matching) và định nghĩa
                  </p>
                </div>
              </div>
              <button
                onClick={() => toggleSectionComplete('glossary')}
                className={cn(
                  'flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md border transition-all',
                  completedSections['glossary']
                    ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                    : 'border-border text-muted-foreground hover:border-foreground/40',
                )}
              >
                <CheckCircle2 size={14} />
                {completedSections['glossary']
                  ? 'Đã nắm vững'
                  : 'Đánh dấu đã nắm'}
              </button>
            </div>

            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-muted/70 text-foreground border-b border-border">
                    <th className="p-3 font-bold w-1/4">Thuật ngữ tiếng Anh</th>
                    <th className="p-3 font-bold w-1/4 text-primary">
                      Nghĩa tiếng Việt
                    </th>
                    <th className="p-3 font-bold w-1/2">
                      Định nghĩa ngắn & Ngữ cảnh bài thi
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filteredGlossary.map((item) => (
                    <tr
                      key={item.en}
                      className="hover:bg-muted/10 transition-colors"
                    >
                      <td className="p-3 font-bold">{item.en}</td>
                      <td className="p-3 font-medium text-primary">
                        {item.vi}
                      </td>
                      <td className="p-3 text-muted-foreground leading-relaxed">
                        {item.desc}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}
      </div>

      {/* Floating Bottom Quick Action */}
      <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          Đã xem kỹ lý thuyết? Hãy kiểm tra lại bằng 1 bài thi thử 50 câu để
          biết chắc mình đã đạt trên 700 điểm.
        </p>
        <div className="flex items-center gap-2.5">
          {onStartPractice && (
            <Button
              variant="outline"
              size="sm"
              onClick={onStartPractice}
              className="text-xs"
            >
              Luyện theo chủ đề
            </Button>
          )}
          {onStartExam && (
            <Button
              size="sm"
              onClick={onStartExam}
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs gap-1.5 shadow-sm"
            >
              Bắt đầu thi thử (50 phút) <ArrowRight size={14} />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
