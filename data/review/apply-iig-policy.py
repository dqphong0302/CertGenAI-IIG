"""Apply the user's chosen IIG grading policy; retain the earlier audit as history."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
review = ROOT / 'data/review'
before = {q['id']: q for q in json.loads((review / 'before-2026-10-17.json').read_text())}
archive = review / 'before-accept-iig-2026-10-17.json'
files = sorted((ROOT / 'data/source/chunks').glob('*.json'))
current = [q for f in files for q in json.loads(f.read_text())]
if not archive.exists():
    archive.write_text(json.dumps(current, ensure_ascii=False, indent=2) + '\n')
audited = {q['id']: q for q in json.loads(archive.read_text())}

notes = {
13: 'Trong tình huống đề, IIG chọn Microsoft Copilot để hỗ trợ cộng tác phát triển ứng dụng. Ghi nhớ lựa chọn này cho câu hỏi cố định. Khi chọn công cụ thực tế, cần kiểm tra chức năng và khả năng tích hợp của từng sản phẩm.',
14: 'Làm bài theo từng dòng của khóa IIG bên trên. Bài học thực hành là không đưa số tài khoản hoặc mã PIN vào công cụ chưa được phê duyệt. Thời hạn lưu dữ liệu, liên kết phiên và trách nhiệm khi xảy ra sự cố phải được kiểm tra trong chính sách áp dụng; không suy ra một quy định chung từ tình huống bài thi.',
45: 'Ghép các đoạn đúng theo nhãn IIG: đoạn chỉ định quản lý marketing định hướng vai trò; đoạn giọng điệu minh họa phong cách; yêu cầu soạn thông điệp là nội dung nhiệm vụ; bảng tính cung cấp dữ liệu. Khi tự viết prompt, dùng các thành phần vai trò, nhiệm vụ, ngữ cảnh, dữ liệu và phong cách theo nhu cầu.',
51: 'Khóa IIG hướng đến yêu cầu rút gọn cốt truyện trong giới hạn 500 từ. Phân biệt tóm tắt nội dung có sẵn với yêu cầu viết thơ hay sinh mã mới. Khi ôn câu cố định, chọn đúng phương án đã ghi trong khóa.',
54: 'IIG chọn tình huống dùng AI hỗ trợ cải tiến thiết kế sản phẩm có sẵn, nhấn mạnh đóng góp của con người. Trong thực tế, khả năng nộp đơn hoặc được cấp bằng còn phụ thuộc đóng góp phát minh, tính mới và các điều kiện pháp luật; dùng AI cải tiến sản phẩm không tự bảo đảm đủ điều kiện.',
89: 'Theo IIG, ba dòng là Yes–No–No. Ghi nhớ dòng 1 về gắn thẻ thủ công và dòng 3 về yêu cầu của dữ liệu huấn luyện trong ngữ cảnh đề. Phần lý thuyết phân biệt thao tác gán nhãn với huấn luyện: gán nhãn có thể có sự hỗ trợ tự động, và không phải mọi quy trình đều giống nhau.',
92: 'Để làm câu ghép cố định này, dùng đúng các cặp trong khóa IIG bên trên. Khi tự viết prompt, nhận diện zero-shot/one-shot/few-shot theo số ví dụ mẫu minh họa nhiệm vụ; số ràng buộc, phạm vi số hoặc số bước xử lý không phải số shot.',
96: 'Dùng các cặp công cụ–nhiệm vụ theo khóa IIG để ôn câu hỏi này. Ngoài bài thi, tên công cụ chưa đủ xác định tính năng: hãy kiểm tra phiên bản và khả năng tạo bài đăng, thiết kế đồ họa hoặc xử lý tài liệu kỹ thuật của sản phẩm đang dùng.',
100: 'IIG phân loại các tình huống theo khóa bên trên. Mục tiêu ôn tập là phân biệt tạo phản hồi/nội dung, dự đoán nhu cầu và đề xuất phương án. Trong thực tế một trợ lý có thể phối hợp truy xuất, dự báo và tạo sinh; tên ứng dụng không tự xác định toàn bộ kiến trúc.',
102: 'IIG chọn tính không đáng tin cậy của đầu ra và việc chưa có tiêu chuẩn chung là hai hạn chế trọng tâm trong câu này. Lý thuyết sử dụng thực tế vẫn cần xem giới hạn ngữ cảnh, độ dài đầu ra và hạn mức của công cụ; không suy ra mô hình có dung lượng vô hạn.',
104: 'IIG chọn lập danh sách thực phẩm từ công thức và tóm tắt văn bản là hai ví dụ cần nhớ cho câu hỏi này. Đây là hai ứng dụng rõ ràng để ôn tập. Lý thuyết tổng quát vẫn bao gồm khả năng tạo nội dung sáng tạo và yêu cầu con người kiểm tra đầu ra.',
117: 'Khóa IIG chọn hai yếu tố nhân khẩu học nêu ở trên. Học ví dụ về sự đại diện của các nhóm trong dữ liệu. Khi thực hành, cần kiểm tra thêm địa lý, ngôn ngữ và chất lượng dữ liệu vì các yếu tố này cũng có thể ảnh hưởng độ công bằng.',
126: 'Theo IIG, ba dòng là No–Yes–No. Trong cách dùng của câu ôn này, ghi nhớ prompt mô tả cụ thể hình muốn tạo: máy ảnh có nền xanh. Ở bài học xử lý ảnh, vẫn phân biệt hỏi nội dung ảnh hiện có, chỉnh sửa ảnh và tạo ảnh mới để chọn công cụ đúng mục tiêu.',
140: 'Ghi nhớ các dòng zero-shot/few-shot đúng theo khóa IIG cho câu cố định. Trong bài học kỹ thuật, ví dụ mẫu phải thể hiện cách thực hiện nhiệm vụ; ảnh tham chiếu hoặc nhiều yêu cầu liên tiếp cần được xét theo ngữ cảnh thay vì chỉ đếm số câu.',
144: 'Theo IIG, câu này dùng Yes–Yes–No. Cách học trong bài là bắt đầu từ mục tiêu muốn đạt rồi yêu cầu AI đề xuất cách thực hiện. Các tài liệu thực hành còn dùng reverse prompting để AI hỏi người dùng nhằm làm rõ yêu cầu; hãy đọc mô tả kỹ thuật trong từng tài liệu.',
153: 'IIG chọn suy ngược câu lệnh ban đầu từ kết quả AI. Khi học cùng câu 38 và 144, ghi nhớ cách dùng thuật ngữ theo từng tình huống: suy ngược từ đầu ra, thiết kế từ mục tiêu hoặc để AI hỏi làm rõ trước khi viết.',
161: 'Khóa IIG chọn độ tuổi và quốc tịch. Hai ví dụ giúp nhận diện dữ liệu thiếu đại diện giữa các nhóm. Khi xây dựng hoặc đánh giá hệ thống thực tế, vẫn cần kiểm tra dữ liệu thiếu, địa lý, ngôn ngữ và khả năng tiếp cận công nghệ.',
}

def answer(q):
    i = q['interaction']
    if i['kind'] == 'single': return next(o['id'] for o in i['options'] if o.get('correct'))
    if i['kind'] == 'multiple': return [o['id'] for o in i['options'] if o.get('correct')]
    if i['kind'] == 'matrix': return {r['id']: next(o['id'] for o in r['options'] if o.get('correct')) for r in i['rows']}
    if i['kind'] == 'matching': return {r['id']: r['answerId'] for r in i['rows']}
    return {o['id']: str(o['order']) for o in i['items']}

for file in files:
    questions = json.loads(file.read_text())
    for q in questions:
        old = audited[q['id']]
        r = old['review']
        q['interaction'] = before[q['id']]['interaction']
        key = answer(q)
        body = old['explanation']
        if '\n\nKết luận rà soát:' in body:
            body = body.split('\n\nKết luận rà soát:', 1)[1].split('\n', 1)[-1]
        body = body.split('\n\nCăn cứ:', 1)[0].strip()
        body = body.replace('Không yêu cầu khóa này là cách diễn đạt hoặc lựa chọn duy nhất đúng trong mọi bối cảnh.', '').strip()
        q['explanation'] = 'Đáp án theo khóa IIG:\n' + r['officialAnswerText'] + '\n\nGiải thích ôn tập:\n' + notes.get(q['number'], body)
        q['review'] = {
            'date': '2026-10-17', 'status': 'accepted-iig', 'label': 'Đáp án IIG',
            'conclusion': 'Dùng khóa IIG để chấm theo lựa chọn của người học.',
            'officialSourceNumber': r['officialSourceNumber'],
            'officialAnswerText': r['officialAnswerText'],
            'validatedAnswer': key, 'gradingBasis': 'iig-key',
            'references': [
                {'title': 'Bộ câu hỏi IIG', 'url': 'https://mos.iigvietnam.edu.vn/GENAI_Question/'},
                {'title': 'Đọc lý thuyết trong Teacher Guide', 'url': '/references/teacher-guide.pdf#page=' + str({'methods': 27, 'prompting': 116, 'verification': 145, 'responsible': 154}[q['topic']])},
            ],
        }
    file.write_text(json.dumps(questions, ensure_ascii=False, indent=2) + '\n')
(review / 'grading-policy.json').write_text(json.dumps({
    'date': '2026-10-17', 'policy': 'iig-key', 'total': 164,
    'instruction': 'Chấp nhận đáp án IIG; giữ nguyên đề và lựa chọn.',
    'sourceRegister': 'iig-source-key-register-2026-10-17.json',
    'restoredQuestions': [89, 126], 'historicalAudit': archive.name,
}, ensure_ascii=False, indent=2) + '\n')
print('Applied IIG grading policy to 164 questions; earlier audit archived.')
