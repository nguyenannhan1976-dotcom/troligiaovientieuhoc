import {
  GradeLevel,
  BookSeries,
  TeachingPackage,
  PromptTemplate,
  CurriculumLesson,
  CurriculumTopic,
  GradeCurriculum,
  CurriculumValidationReport,
} from '../types';

// =====================================================================
// CENTRAL CURRICULUM DATABASE - SINGLE SOURCE OF TRUTH (GDPT 2018)
// Bộ sách: Kết nối tri thức với cuộc sống
// =====================================================================

export const GRADE_3_TOPICS: CurriculumTopic[] = [
  {
    topicNumber: 1,
    title: 'Chủ đề 1. Máy tính và em',
    icon: '💻',
    grade: 'Lớp 3',
    lessons: [
      {
        id: 'G3-T1-L01',
        grade: 'Lớp 3',
        gradeNumber: 3,
        topicNumber: 1,
        topicTitle: 'Chủ đề 1. Máy tính và em',
        topicIcon: '💻',
        lessonNumber: 1,
        lessonNumberDisplay: 'Bài 1',
        title: 'Thông tin và quyết định',
        fullDisplayTitle: 'Bài 1. Thông tin và quyết định',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Nhận biết được thông tin thu nhận từ các giác quan và cách thông tin giúp con người đưa ra quyết định.',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Máy chiếu, Tranh ảnh minh họa tình huống',
      },
      {
        id: 'G3-T1-L02',
        grade: 'Lớp 3',
        gradeNumber: 3,
        topicNumber: 1,
        topicTitle: 'Chủ đề 1. Máy tính và em',
        topicIcon: '💻',
        lessonNumber: 2,
        lessonNumberDisplay: 'Bài 2',
        title: 'Xử lí thông tin',
        fullDisplayTitle: 'Bài 2. Xử lí thông tin',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Nêu được ví dụ về thông tin vào, quá trình xử lý và thông tin ra trong đời sống hằng ngày.',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Máy chiếu, Thẻ bài tập tình huống',
      },
      {
        id: 'G3-T1-L03',
        grade: 'Lớp 3',
        gradeNumber: 3,
        topicNumber: 1,
        topicTitle: 'Chủ đề 1. Máy tính và em',
        topicIcon: '💻',
        lessonNumber: 3,
        lessonNumberDisplay: 'Bài 3',
        title: 'Máy tính và em',
        fullDisplayTitle: 'Bài 3. Máy tính và em',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Nhận biết và gọi đúng tên 4 bộ phận cơ bản của máy tính: Thân máy, Màn hình, Bàn phím, Chuột.',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Máy chiếu, Máy tính để bàn và laptop mô hình',
      },
      {
        id: 'G3-T1-L04',
        grade: 'Lớp 3',
        gradeNumber: 3,
        topicNumber: 1,
        topicTitle: 'Chủ đề 1. Máy tính và em',
        topicIcon: '💻',
        lessonNumber: 4,
        lessonNumberDisplay: 'Bài 4',
        title: 'Làm việc với máy tính',
        fullDisplayTitle: 'Bài 4. Làm việc với máy tính',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Biết cách bật, tắt máy tính đúng quy trình, tư thế ngồi chuẩn và quy tắc an toàn điện trong phòng máy.',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Phòng máy học sinh, quy tắc an toàn',
      },
      {
        id: 'G3-T1-L05',
        grade: 'Lớp 3',
        gradeNumber: 3,
        topicNumber: 1,
        topicTitle: 'Chủ đề 1. Máy tính và em',
        topicIcon: '💻',
        lessonNumber: 5,
        lessonNumberDisplay: 'Bài 5',
        title: 'Sử dụng bàn phím',
        fullDisplayTitle: 'Bài 5. Sử dụng bàn phím',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Nhận biết các khu vực bàn phím, hàng phím cơ sở, hai phím có gờ F và J, quy tắc đặt ngón tay.',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Phòng máy vi tính, phần mềm luyện gõ phím',
      },
    ],
  },
  {
    topicNumber: 2,
    title: 'Chủ đề 2. Mạng máy tính và Internet',
    icon: '🌐',
    grade: 'Lớp 3',
    lessons: [
      {
        id: 'G3-T2-L06',
        grade: 'Lớp 3',
        gradeNumber: 3,
        topicNumber: 2,
        topicTitle: 'Chủ đề 2. Mạng máy tính và Internet',
        topicIcon: '🌐',
        lessonNumber: 6,
        lessonNumberDisplay: 'Bài 6',
        title: 'Khám phá thông tin trên Internet',
        fullDisplayTitle: 'Bài 6. Khám phá thông tin trên Internet',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Nhận biết Internet là kho thông tin khổng lồ, biết xem tranh ảnh, video học tập an toàn trên trang web.',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Máy tính có kết nối Internet, trình duyệt web',
      },
    ],
  },
  {
    topicNumber: 3,
    title: 'Chủ đề 3. Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
    icon: '📂',
    grade: 'Lớp 3',
    lessons: [
      {
        id: 'G3-T3-L07',
        grade: 'Lớp 3',
        gradeNumber: 3,
        topicNumber: 3,
        topicTitle: 'Chủ đề 3. Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
        topicIcon: '📂',
        lessonNumber: 7,
        lessonNumberDisplay: 'Bài 7',
        title: 'Sắp xếp để dễ tìm',
        fullDisplayTitle: 'Bài 7. Sắp xếp để dễ tìm',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Giải thích được vì sao cần sắp xếp đồ vật, tài liệu ngăn nắp và liên hệ với cách lưu trữ trong máy tính.',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Tranh ảnh góc học tập, đồ dùng minh họa',
      },
      {
        id: 'G3-T3-L08',
        grade: 'Lớp 3',
        gradeNumber: 3,
        topicNumber: 3,
        topicTitle: 'Chủ đề 3. Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
        topicIcon: '📂',
        lessonNumber: 8,
        lessonNumberDisplay: 'Bài 8',
        title: 'Sơ đồ hình cây. Tổ chức thông tin trong máy tính',
        fullDisplayTitle: 'Bài 8. Sơ đồ hình cây. Tổ chức thông tin trong máy tính',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Hiểu được sơ đồ hình cây, nhận biết được tệp và thư mục trong máy tính được sắp xếp dạng phân cấp.',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Mô hình cây gia phả hoặc sơ đồ cây minh họa',
      },
      {
        id: 'G3-T3-L09',
        grade: 'Lớp 3',
        gradeNumber: 3,
        topicNumber: 3,
        topicTitle: 'Chủ đề 3. Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
        topicIcon: '📂',
        lessonNumber: 9,
        lessonNumberDisplay: 'Bài 9',
        title: 'Thực hành với tệp và thư mục trong máy tính',
        fullDisplayTitle: 'Bài 9. Thực hành với tệp và thư mục trong máy tính',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Biết mở xem các tệp hình ảnh, tệp văn bản trong các thư mục có sẵn, phân biệt được biểu tượng tệp và thư mục.',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Phòng máy học sinh, thư mục mẫu bài tập',
      },
    ],
  },
  {
    topicNumber: 4,
    title: 'Chủ đề 4. Đạo đức, pháp luật và văn hoá trong môi trường số',
    icon: '🛡️',
    grade: 'Lớp 3',
    lessons: [
      {
        id: 'G3-T4-L10',
        grade: 'Lớp 3',
        gradeNumber: 3,
        topicNumber: 4,
        topicTitle: 'Chủ đề 4. Đạo đức, pháp luật và văn hoá trong môi trường số',
        topicIcon: '🛡️',
        lessonNumber: 10,
        lessonNumberDisplay: 'Bài 10',
        title: 'Bảo vệ thông tin khi dùng máy tính',
        fullDisplayTitle: 'Bài 10. Bảo vệ thông tin khi dùng máy tính',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Biết bảo vệ thông tin cá nhân (họ tên, địa chỉ, mật khẩu) và không tự ý xem đồ dùng, máy tính của người khác.',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Máy chiếu, video tình huống bảo vệ mật khẩu',
      },
    ],
  },
  {
    topicNumber: 5,
    title: 'Chủ đề 5. Ứng dụng tin học',
    icon: '🎨',
    grade: 'Lớp 3',
    lessons: [
      {
        id: 'G3-T5-L11',
        grade: 'Lớp 3',
        gradeNumber: 3,
        topicNumber: 5,
        topicTitle: 'Chủ đề 5. Ứng dụng tin học',
        topicIcon: '🎨',
        lessonNumber: 11,
        lessonNumberDisplay: 'Bài 11',
        title: 'Bài trình chiếu của em',
        fullDisplayTitle: 'Bài 11. Bài trình chiếu của em',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Làm quen với phần mềm trình chiếu (PowerPoint), biết mở trang chiếu và xem bài thuyết trình đơn giản.',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Máy tính có cài PowerPoint / Google Slides',
      },
      {
        id: 'G3-T5-L12',
        grade: 'Lớp 3',
        gradeNumber: 3,
        topicNumber: 5,
        topicTitle: 'Chủ đề 5. Ứng dụng tin học',
        topicIcon: '🎨',
        lessonNumber: 12,
        lessonNumberDisplay: 'Bài 12',
        title: 'Tìm hiểu về thế giới tự nhiên',
        fullDisplayTitle: 'Bài 12. Tìm hiểu về thế giới tự nhiên',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Sử dụng phần mềm học tập khám phá các loài động thực vật, rèn luyện kỹ năng quan sát và tương tác số.',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Phần mềm mô phỏng thế giới tự nhiên',
      },
      {
        id: 'G3-T5-L13',
        grade: 'Lớp 3',
        gradeNumber: 3,
        topicNumber: 5,
        topicTitle: 'Chủ đề 5. Ứng dụng tin học',
        topicIcon: '🎨',
        lessonNumber: 13,
        lessonNumberDisplay: 'Bài 13',
        title: 'Luyện tập sử dụng chuột',
        fullDisplayTitle: 'Bài 13. Luyện tập sử dụng chuột',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Thực hiện thành thạo các thao tác cầm chuột: di chuyển chuột, nháy chuột, nháy đúp, kéo thả chuột.',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Phòng máy học sinh, phần mềm luyện chuột Basic Mouse Skills',
      },
    ],
  },
  {
    topicNumber: 6,
    title: 'Chủ đề 6. Giải quyết vấn đề với sự trợ giúp của máy tính',
    icon: '🤖',
    grade: 'Lớp 3',
    lessons: [
      {
        id: 'G3-T6-L14',
        grade: 'Lớp 3',
        gradeNumber: 3,
        topicNumber: 6,
        topicTitle: 'Chủ đề 6. Giải quyết vấn đề với sự trợ giúp của máy tính',
        topicIcon: '🤖',
        lessonNumber: 14,
        lessonNumberDisplay: 'Bài 14',
        title: 'Em thực hiện công việc như thế nào?',
        fullDisplayTitle: 'Bài 14. Em thực hiện công việc như thế nào?',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Chia một công việc quen thuộc thành các bước nhỏ thực hiện tuần tự để đạt kết quả mong muốn.',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Tranh quy trình làm việc (đánh răng, gấp áo)',
      },
      {
        id: 'G3-T6-L15',
        grade: 'Lớp 3',
        gradeNumber: 3,
        topicNumber: 6,
        topicTitle: 'Chủ đề 6. Giải quyết vấn đề với sự trợ giúp của máy tính',
        topicIcon: '🤖',
        lessonNumber: 15,
        lessonNumberDisplay: 'Bài 15',
        title: 'Công việc được thực hiện theo điều kiện',
        fullDisplayTitle: 'Bài 15. Công việc được thực hiện theo điều kiện',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Nhận biết được các công việc thực hiện phụ thuộc vào điều kiện (Nếu... thì...) trong thực tế.',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Thẻ bài tình huống điều kiện thời tiết',
      },
      {
        id: 'G3-T6-L16',
        grade: 'Lớp 3',
        gradeNumber: 3,
        topicNumber: 6,
        topicTitle: 'Chủ đề 6. Giải quyết vấn đề với sự trợ giúp của máy tính',
        topicIcon: '🤖',
        lessonNumber: 16,
        lessonNumberDisplay: 'Bài 16',
        title: 'Công việc của em và sự trợ giúp của máy tính',
        fullDisplayTitle: 'Bài 16. Công việc của em và sự trợ giúp của máy tính',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Nêu được ví dụ máy tính giúp con người giải quyết công việc nhanh chóng, chính xác hơn.',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Máy chiếu, video minh họa ứng dụng máy tính',
      },
    ],
  },
];

export const GRADE_4_TOPICS: CurriculumTopic[] = [
  {
    topicNumber: 1,
    title: 'Chủ đề 1. Máy tính và em',
    icon: '💻',
    grade: 'Lớp 4',
    lessons: [
      {
        id: 'G4-T1-L01',
        grade: 'Lớp 4',
        gradeNumber: 4,
        topicNumber: 1,
        topicTitle: 'Chủ đề 1. Máy tính và em',
        topicIcon: '💻',
        lessonNumber: 1,
        lessonNumberDisplay: 'Bài 1',
        title: 'Phần cứng và phần mềm máy tính',
        fullDisplayTitle: 'Bài 1. Phần cứng và phần mềm máy tính',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Phân biệt được phần cứng (thiết bị sờ thấy được) và phần mềm (chương trình cài đặt chạy trên máy).',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Thiết bị phần cứng mẫu (chuột, bàn phím, USB) và phần mềm',
      },
      {
        id: 'G4-T1-L02',
        grade: 'Lớp 4',
        gradeNumber: 4,
        topicNumber: 1,
        topicTitle: 'Chủ đề 1. Máy tính và em',
        topicIcon: '💻',
        lessonNumber: 2,
        lessonNumberDisplay: 'Bài 2',
        title: 'Gõ bàn phím đúng cách',
        fullDisplayTitle: 'Bài 2. Gõ bàn phím đúng cách',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Đặt ngón tay đúng các hàng phím, rèn luyện kỹ năng gõ 10 ngón tay với các phím hàng trên và hàng dưới.',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Phòng máy vi tính, phần mềm RapidTyping / Mario Teaches Typing',
      },
    ],
  },
  {
    topicNumber: 2,
    title: 'Chủ đề 2. Mạng máy tính và Internet',
    icon: '🌐',
    grade: 'Lớp 4',
    lessons: [
      {
        id: 'G4-T2-L03',
        grade: 'Lớp 4',
        gradeNumber: 4,
        topicNumber: 2,
        topicTitle: 'Chủ đề 2. Mạng máy tính và Internet',
        topicIcon: '🌐',
        lessonNumber: 3,
        lessonNumberDisplay: 'Bài 3',
        title: 'Thông tin trên trang web',
        fullDisplayTitle: 'Bài 3. Thông tin trên trang web',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Nhận biết các dạng thông tin chính trên trang web (văn bản, hình ảnh, âm thanh, siêu liên kết).',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Máy tính nối mạng Internet, trình duyệt Chrome/Edge',
      },
    ],
  },
  {
    topicNumber: 3,
    title: 'Chủ đề 3. Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
    icon: '📂',
    grade: 'Lớp 4',
    lessons: [
      {
        id: 'G4-T3-L04',
        grade: 'Lớp 4',
        gradeNumber: 4,
        topicNumber: 3,
        topicTitle: 'Chủ đề 3. Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
        topicIcon: '📂',
        lessonNumber: 4,
        lessonNumberDisplay: 'Bài 4',
        title: 'Tìm kiếm thông tin trên Internet',
        fullDisplayTitle: 'Bài 4. Tìm kiếm thông tin trên Internet',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Sử dụng máy tìm kiếm (Google), nhập từ khóa tìm kiếm tài liệu học tập theo chủ đề an toàn.',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Phòng máy có Internet, bảng từ khóa gợi ý',
      },
      {
        id: 'G4-T3-L05',
        grade: 'Lớp 4',
        gradeNumber: 4,
        topicNumber: 3,
        topicTitle: 'Chủ đề 3. Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
        topicIcon: '📂',
        lessonNumber: 5,
        lessonNumberDisplay: 'Bài 5',
        title: 'Thao tác với tệp và thư mục',
        fullDisplayTitle: 'Bài 5. Thao tác với tệp và thư mục',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Thực hiện tạo thư mục mới, đổi tên thư mục, sao chép và xóa tệp, thư mục đúng quy trình.',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Phòng máy vi tính, ổ đĩa bài tập học sinh',
      },
    ],
  },
  {
    topicNumber: 4,
    title: 'Chủ đề 4. Đạo đức, pháp luật và văn hoá trong môi trường số',
    icon: '🛡️',
    grade: 'Lớp 4',
    lessons: [
      {
        id: 'G4-T4-L06',
        grade: 'Lớp 4',
        gradeNumber: 4,
        topicNumber: 4,
        topicTitle: 'Chủ đề 4. Đạo đức, pháp luật và văn hoá trong môi trường số',
        topicIcon: '🛡️',
        lessonNumber: 6,
        lessonNumberDisplay: 'Bài 6',
        title: 'Sử dụng phần mềm khi được phép',
        fullDisplayTitle: 'Bài 6. Sử dụng phần mềm khi được phép',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Hiểu khái niệm bản quyền phần mềm, có ý thức xin phép và sử dụng các phần mềm miễn phí hợp pháp.',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Máy chiếu, tranh biếm họa bản quyền số',
      },
    ],
  },
  {
    topicNumber: 5,
    title: 'Chủ đề 5. Ứng dụng tin học',
    icon: '🎨',
    grade: 'Lớp 4',
    lessons: [
      {
        id: 'G4-T5-L07',
        grade: 'Lớp 4',
        gradeNumber: 4,
        topicNumber: 5,
        topicTitle: 'Chủ đề 5. Ứng dụng tin học',
        topicIcon: '🎨',
        lessonNumber: 7,
        lessonNumberDisplay: 'Bài 7',
        title: 'Tạo bài trình chiếu',
        fullDisplayTitle: 'Bài 7. Tạo bài trình chiếu',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Tạo tệp trình chiếu mới, thêm trang chiếu (New Slide) và gõ tiêu đề nội dung đơn giản.',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Phòng máy cài PowerPoint',
      },
      {
        id: 'G4-T5-L08',
        grade: 'Lớp 4',
        gradeNumber: 4,
        topicNumber: 5,
        topicTitle: 'Chủ đề 5. Ứng dụng tin học',
        topicIcon: '🎨',
        lessonNumber: 8,
        lessonNumberDisplay: 'Bài 8',
        title: 'Định dạng văn bản trên trang chiếu',
        fullDisplayTitle: 'Bài 8. Định dạng văn bản trên trang chiếu',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Thay đổi phông chữ, cỡ chữ, màu chữ và kiểu chữ (đậm, nghiêng, gạch chân) trên trang chiếu.',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Phòng máy cài PowerPoint',
      },
      {
        id: 'G4-T5-L09',
        grade: 'Lớp 4',
        gradeNumber: 4,
        topicNumber: 5,
        topicTitle: 'Chủ đề 5. Ứng dụng tin học',
        topicIcon: '🎨',
        lessonNumber: 9,
        lessonNumberDisplay: 'Bài 9',
        title: 'Hiệu ứng chuyển trang',
        fullDisplayTitle: 'Bài 9. Hiệu ứng chuyển trang',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Thiết lập hiệu ứng chuyển tiếp giữa các trang chiếu (Transitions) sinh động và phù hợp.',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Phòng máy có PowerPoint',
      },
      {
        id: 'G4-T5-L10',
        grade: 'Lớp 4',
        gradeNumber: 4,
        topicNumber: 5,
        topicTitle: 'Chủ đề 5. Ứng dụng tin học',
        topicIcon: '🎨',
        lessonNumber: 10,
        lessonNumberDisplay: 'Bài 10',
        title: 'Phần mềm soạn thảo văn bản',
        fullDisplayTitle: 'Bài 10. Phần mềm soạn thảo văn bản',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Khởi động phần mềm Word, gõ văn bản tiếng Việt có dấu theo kiểu gõ Telex/Vni.',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Phòng máy cài Word và phần mềm gõ tiếng Việt Unikey',
      },
      {
        id: 'G4-T5-L11',
        grade: 'Lớp 4',
        gradeNumber: 4,
        topicNumber: 5,
        topicTitle: 'Chủ đề 5. Ứng dụng tin học',
        topicIcon: '🎨',
        lessonNumber: 11,
        lessonNumberDisplay: 'Bài 11',
        title: 'Chỉnh sửa văn bản',
        fullDisplayTitle: 'Bài 11. Chỉnh sửa văn bản',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Chọn phần văn bản, sao chép (Copy), di chuyển (Cut) và dán (Paste) đoạn văn bản gọn gàng.',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Phòng máy có Microsoft Word',
      },
      {
        id: 'G4-T5-L12',
        grade: 'Lớp 4',
        gradeNumber: 4,
        topicNumber: 5,
        topicTitle: 'Chủ đề 5. Ứng dụng tin học',
        topicIcon: '🎨',
        lessonNumber: 12,
        lessonNumberDisplay: 'Bài 12',
        title: 'Thực hành đa phương tiện',
        fullDisplayTitle: 'Bài 12. Thực hành đa phương tiện',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Chèn hình ảnh vào văn bản hoặc trang chiếu, thay đổi kích thước và vị trí của hình ảnh minh họa.',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Phòng máy có sẵn thư mục hình ảnh thiên nhiên, động vật',
      },
    ],
  },
  {
    topicNumber: 6,
    title: 'Chủ đề 6. Giải quyết vấn đề với sự trợ giúp của máy tính',
    icon: '🤖',
    grade: 'Lớp 4',
    lessons: [
      {
        id: 'G4-T6-L13',
        grade: 'Lớp 4',
        gradeNumber: 4,
        topicNumber: 6,
        topicTitle: 'Chủ đề 6. Giải quyết vấn đề với sự trợ giúp của máy tính',
        topicIcon: '🤖',
        lessonNumber: 13,
        lessonNumberDisplay: 'Bài 13',
        title: 'Chơi với máy tính',
        fullDisplayTitle: 'Bài 13. Chơi với máy tính',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Làm quen với các trò chơi tư duy logic, rèn luyện phản xạ tính toán và điều khiển nhân vật trên máy.',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Phần mềm trò chơi tư duy logic tiểu học',
      },
      {
        id: 'G4-T6-L14',
        grade: 'Lớp 4',
        gradeNumber: 4,
        topicNumber: 6,
        topicTitle: 'Chủ đề 6. Giải quyết vấn đề với sự trợ giúp của máy tính',
        topicIcon: '🤖',
        lessonNumber: 14,
        lessonNumberDisplay: 'Bài 14',
        title: 'Khám phá môi trường lập trình trực quan',
        fullDisplayTitle: 'Bài 14. Khám phá môi trường lập trình trực quan',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Làm quen giao diện Scratch, khu vực sân khấu, khu vực nhân vật và các khối lệnh kéo thả màu sắc.',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Phòng máy cài Scratch 3.0',
      },
      {
        id: 'G4-T6-L15',
        grade: 'Lớp 4',
        gradeNumber: 4,
        topicNumber: 6,
        topicTitle: 'Chủ đề 6. Giải quyết vấn đề với sự trợ giúp của máy tính',
        topicIcon: '🤖',
        lessonNumber: 15,
        lessonNumberDisplay: 'Bài 15',
        title: 'Tạo chương trình máy tính để diễn tả ý tưởng',
        fullDisplayTitle: 'Bài 15. Tạo chương trình máy tính để diễn tả ý tưởng',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Lắp ghép các khối lệnh di chuyển (Move), xoay hướng (Turn) và đổi màu nhân vật theo kịch bản đơn giản.',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Phòng máy cài Scratch 3.0',
      },
      {
        id: 'G4-T6-L16',
        grade: 'Lớp 4',
        gradeNumber: 4,
        topicNumber: 6,
        topicTitle: 'Chủ đề 6. Giải quyết vấn đề với sự trợ giúp của máy tính',
        topicIcon: '🤖',
        lessonNumber: 16,
        lessonNumberDisplay: 'Bài 16',
        title: 'Chương trình của em',
        fullDisplayTitle: 'Bài 16. Chương trình của em',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Hoàn thiện một sản phẩm hoạt hình ngắn trên Scratch, lưu tệp vào máy và tự tin chia sẻ cùng bạn bè.',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Phòng máy có Scratch 3.0',
      },
    ],
  },
];

export const GRADE_5_TOPICS: CurriculumTopic[] = [
  {
    topicNumber: 1,
    title: 'Chủ đề 1. Máy tính và em',
    icon: '💻',
    grade: 'Lớp 5',
    lessons: [
      {
        id: 'G5-T1-L01',
        grade: 'Lớp 5',
        gradeNumber: 5,
        topicNumber: 1,
        topicTitle: 'Chủ đề 1. Máy tính và em',
        topicIcon: '💻',
        lessonNumber: 1,
        lessonNumberDisplay: 'Bài 1',
        title: 'Em có thể làm gì với máy tính?',
        fullDisplayTitle: 'Bài 1. Em có thể làm gì với máy tính?',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Trình bày được những khả năng vượt trội của máy tính trong học tập, giao tiếp, nghiên cứu và sáng tạo nghệ thuật.',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Máy chiếu, video tài liệu công nghệ',
      },
    ],
  },
  {
    topicNumber: 2,
    title: 'Chủ đề 2. Mạng máy tính và Internet',
    icon: '🌐',
    grade: 'Lớp 5',
    lessons: [
      {
        id: 'G5-T2-L02',
        grade: 'Lớp 5',
        gradeNumber: 5,
        topicNumber: 2,
        topicTitle: 'Chủ đề 2. Mạng máy tính và Internet',
        topicIcon: '🌐',
        lessonNumber: 2,
        lessonNumberDisplay: 'Bài 2',
        title: 'Tìm kiếm thông tin trên website',
        fullDisplayTitle: 'Bài 2. Tìm kiếm thông tin trên website',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Sử dụng các công cụ tìm kiếm nâng cao, kết hợp từ khóa chính xác để tìm nguồn dữ liệu đáng tin cậy.',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Phòng máy kết nối Internet',
      },
    ],
  },
  {
    topicNumber: 3,
    title: 'Chủ đề 3. Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
    icon: '📂',
    grade: 'Lớp 5',
    lessons: [
      {
        id: 'G5-T3-L03',
        grade: 'Lớp 5',
        gradeNumber: 5,
        topicNumber: 3,
        topicTitle: 'Chủ đề 3. Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
        topicIcon: '📂',
        lessonNumber: 3,
        lessonNumberDisplay: 'Bài 3',
        title: 'Tìm kiếm thông tin trong giải quyết vấn đề',
        fullDisplayTitle: 'Bài 3. Tìm kiếm thông tin trong giải quyết vấn đề',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Xác định thông tin cần tìm, chọn lọc và đánh giá thông tin thu thập được để giải quyết một nhiệm vụ học tập.',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Máy chiếu, phiếu nhiệm vụ dự án nhỏ',
      },
      {
        id: 'G5-T3-L04',
        grade: 'Lớp 5',
        gradeNumber: 5,
        topicNumber: 3,
        topicTitle: 'Chủ đề 3. Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
        topicIcon: '📂',
        lessonNumber: 4,
        lessonNumberDisplay: 'Bài 4',
        title: 'Cây thư mục',
        fullDisplayTitle: 'Bài 4. Cây thư mục',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Thiết kế và xây dựng cây thư mục nhiều cấp khoa học để phân loại tài liệu các môn học lớp 5.',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Phòng máy học sinh',
      },
    ],
  },
  {
    topicNumber: 4,
    title: 'Chủ đề 4. Đạo đức, pháp luật và văn hoá trong môi trường số',
    icon: '🛡️',
    grade: 'Lớp 5',
    lessons: [
      {
        id: 'G5-T4-L05',
        grade: 'Lớp 5',
        gradeNumber: 5,
        topicNumber: 4,
        topicTitle: 'Chủ đề 4. Đạo đức, pháp luật và văn hoá trong môi trường số',
        topicIcon: '🛡️',
        lessonNumber: 5,
        lessonNumberDisplay: 'Bài 5',
        title: 'Bản quyền nội dung thông tin',
        fullDisplayTitle: 'Bài 5. Bản quyền nội dung thông tin',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Hiểu quyền tác giả đối với hình ảnh, văn bản, video trên mạng và biết cách trích dẫn nguồn gốc đàng hoàng.',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Máy chiếu, tình huống tranh chấp bản quyền minh họa',
      },
    ],
  },
  {
    topicNumber: 5,
    title: 'Chủ đề 5. Ứng dụng tin học',
    icon: '🎨',
    grade: 'Lớp 5',
    lessons: [
      {
        id: 'G5-T5-L06',
        grade: 'Lớp 5',
        gradeNumber: 5,
        topicNumber: 5,
        topicTitle: 'Chủ đề 5. Ứng dụng tin học',
        topicIcon: '🎨',
        lessonNumber: 6,
        lessonNumberDisplay: 'Bài 6',
        title: 'Định dạng kí tự và bố trí hình ảnh trong văn bản',
        fullDisplayTitle: 'Bài 6. Định dạng kí tự và bố trí hình ảnh trong văn bản',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Căn lề đoạn văn bản, thay đổi khoảng cách dòng và chọn chế độ bao quanh chữ quanh hình ảnh (Wrap Text).',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Phòng máy cài Word',
      },
      {
        id: 'G5-T5-L07',
        grade: 'Lớp 5',
        gradeNumber: 5,
        topicNumber: 5,
        topicTitle: 'Chủ đề 5. Ứng dụng tin học',
        topicIcon: '🎨',
        lessonNumber: 7,
        lessonNumberDisplay: 'Bài 7',
        title: 'Thực hành soạn thảo văn bản',
        fullDisplayTitle: 'Bài 7. Thực hành soạn thảo văn bản',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Tạo một bài báo tường, tờ rơi hoặc thiệp chúc mừng hoàn chỉnh kết hợp chữ nghệ thuật và hình ảnh sinh động.',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Phòng máy cài Word',
      },
      // Variant 8A
      {
        id: 'G5-T5-L08A',
        grade: 'Lớp 5',
        gradeNumber: 5,
        topicNumber: 5,
        topicTitle: 'Chủ đề 5. Ứng dụng tin học',
        topicIcon: '🎨',
        lessonNumber: 8,
        variant: 'A',
        lessonNumberDisplay: 'Bài 8A',
        title: 'Làm quen với phần mềm đồ hoạ',
        fullDisplayTitle: 'Bài 8A. Làm quen với phần mềm đồ hoạ',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Làm quen công cụ vẽ hình học, cọ vẽ, bảng màu trong phần mềm đồ họa Paint / Inkscape cơ bản.',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Phòng máy có cài Paint hoặc phần mềm vẽ đồ họa',
      },
      // Variant 8B
      {
        id: 'G5-T5-L08B',
        grade: 'Lớp 5',
        gradeNumber: 5,
        topicNumber: 5,
        topicTitle: 'Chủ đề 5. Ứng dụng tin học',
        topicIcon: '🎨',
        lessonNumber: 8,
        variant: 'B',
        lessonNumberDisplay: 'Bài 8B',
        title: 'Làm sản phẩm thủ công theo video hướng dẫn',
        fullDisplayTitle: 'Bài 8B. Làm sản phẩm thủ công theo video hướng dẫn',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Xem video trực tuyến từng bước, tạm dừng và làm theo các thao tác gấp giấy, đồ chơi thủ công an toàn.',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Máy tính xem video, giấy màu, kéo thủ công',
      },
      // Variant 9A
      {
        id: 'G5-T5-L09A',
        grade: 'Lớp 5',
        gradeNumber: 5,
        topicNumber: 5,
        topicTitle: 'Chủ đề 5. Ứng dụng tin học',
        topicIcon: '🎨',
        lessonNumber: 9,
        variant: 'A',
        lessonNumberDisplay: 'Bài 9A',
        title: 'Sử dụng phần mềm đồ hoạ tạo sản phẩm số',
        fullDisplayTitle: 'Bài 9A. Sử dụng phần mềm đồ hoạ tạo sản phẩm số',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Vẽ một bức tranh kỹ thuật số hoàn chỉnh về trường lớp hoặc gia đình, tô màu và lưu tệp ảnh PNG/JPG.',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Phòng máy cài phần mềm đồ họa Paint',
      },
      // Variant 9B
      {
        id: 'G5-T5-L09B',
        grade: 'Lớp 5',
        gradeNumber: 5,
        topicNumber: 5,
        topicTitle: 'Chủ đề 5. Ứng dụng tin học',
        topicIcon: '🎨',
        lessonNumber: 9,
        variant: 'B',
        lessonNumberDisplay: 'Bài 9B',
        title: 'Thực hành tạo đồ dùng gia đình theo video hướng dẫn',
        fullDisplayTitle: 'Bài 9B. Thực hành tạo đồ dùng gia đình theo video hướng dẫn',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Sử dụng công nghệ số tìm kiếm video hướng dẫn tái chế đồ dùng trong gia đình thành vật dụng hữu ích.',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Máy tính có Internet, vật liệu tái chế',
      },
    ],
  },
  {
    topicNumber: 6,
    title: 'Chủ đề 6. Giải quyết vấn đề với sự trợ giúp của máy tính',
    icon: '🤖',
    grade: 'Lớp 5',
    lessons: [
      {
        id: 'G5-T6-L10',
        grade: 'Lớp 5',
        gradeNumber: 5,
        topicNumber: 6,
        topicTitle: 'Chủ đề 6. Giải quyết vấn đề với sự trợ giúp của máy tính',
        topicIcon: '🤖',
        lessonNumber: 10,
        lessonNumberDisplay: 'Bài 10',
        title: 'Cấu trúc tuần tự',
        fullDisplayTitle: 'Bài 10. Cấu trúc tuần tự',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Hiểu cấu trúc điều khiển tuần tự: các lệnh được thực hiện lần lượt từ trên xuống dưới trong Scratch.',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Phòng máy cài Scratch 3.0',
      },
      {
        id: 'G5-T6-L11',
        grade: 'Lớp 5',
        gradeNumber: 5,
        topicNumber: 6,
        topicTitle: 'Chủ đề 6. Giải quyết vấn đề với sự trợ giúp của máy tính',
        topicIcon: '🤖',
        lessonNumber: 11,
        lessonNumberDisplay: 'Bài 11',
        title: 'Cấu trúc lặp',
        fullDisplayTitle: 'Bài 11. Cấu trúc lặp',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Nhận biết các hành động lặp lại trong đời sống và làm quen khối lệnh Repeat (lặp số lần xác định) trong Scratch.',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Phòng máy cài Scratch 3.0',
      },
      {
        id: 'G5-T6-L12',
        grade: 'Lớp 5',
        gradeNumber: 5,
        topicNumber: 6,
        topicTitle: 'Chủ đề 6. Giải quyết vấn đề với sự trợ giúp của máy tính',
        topicIcon: '🤖',
        lessonNumber: 12,
        lessonNumberDisplay: 'Bài 12',
        title: 'Thực hành sử dụng lệnh lặp',
        fullDisplayTitle: 'Bài 12. Thực hành sử dụng lệnh lặp',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Lập trình vẽ các hình đa giác đều (hình vuông, tam giác đều) hoặc hoạt hình bước đi bằng khối lệnh lặp.',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Phòng máy cài Scratch 3.0',
      },
      {
        id: 'G5-T6-L13',
        grade: 'Lớp 5',
        gradeNumber: 5,
        topicNumber: 6,
        topicTitle: 'Chủ đề 6. Giải quyết vấn đề với sự trợ giúp của máy tính',
        topicIcon: '🤖',
        lessonNumber: 13,
        lessonNumberDisplay: 'Bài 13',
        title: 'Cấu trúc rẽ nhánh',
        fullDisplayTitle: 'Bài 13. Cấu trúc rẽ nhánh',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Sử dụng khối lệnh điều kiện If... then và If... then... else để điều khiển nhân vật phản xạ khi chạm biên hoặc chướng ngại vật.',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Phòng máy cài Scratch 3.0',
      },
      {
        id: 'G5-T6-L14',
        grade: 'Lớp 5',
        gradeNumber: 5,
        topicNumber: 6,
        topicTitle: 'Chủ đề 6. Giải quyết vấn đề với sự trợ giúp của máy tính',
        topicIcon: '🤖',
        lessonNumber: 14,
        lessonNumberDisplay: 'Bài 14',
        title: 'Sử dụng biến trong chương trình',
        fullDisplayTitle: 'Bài 14. Sử dụng biến trong chương trình',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Hiểu khái niệm biến (Variable) dùng để lưu trữ dữ liệu thay đổi như Điểm số (Score), Thời gian đếm ngược.',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Phòng máy cài Scratch 3.0',
      },
      {
        id: 'G5-T6-L15',
        grade: 'Lớp 5',
        gradeNumber: 5,
        topicNumber: 6,
        topicTitle: 'Chủ đề 6. Giải quyết vấn đề với sự trợ giúp của máy tính',
        topicIcon: '🤖',
        lessonNumber: 15,
        lessonNumberDisplay: 'Bài 15',
        title: 'Sử dụng biểu thức trong chương trình',
        fullDisplayTitle: 'Bài 15. Sử dụng biểu thức trong chương trình',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Sử dụng các phép toán số học (+, -, *, /) và phép so sánh (>, <, =) trong các khối lệnh Operators của Scratch.',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Phòng máy cài Scratch 3.0',
      },
      {
        id: 'G5-T6-L16',
        grade: 'Lớp 5',
        gradeNumber: 5,
        topicNumber: 6,
        topicTitle: 'Chủ đề 6. Giải quyết vấn đề với sự trợ giúp của máy tính',
        topicIcon: '🤖',
        lessonNumber: 16,
        lessonNumberDisplay: 'Bài 16',
        title: 'Từ kịch bản đến chương trình',
        fullDisplayTitle: 'Bài 16. Từ kịch bản đến chương trình',
        bookSeries: 'Kết nối tri thức',
        objectivesSummary: 'Xây dựng kịch bản hoàn chỉnh cho một trò chơi nhỏ (Mèo bắt chuột / Hứng táo rơi) và chuyển thành mã lệnh Scratch.',
        recommendedDuration: '35 phút',
        hardwareRequirements: 'Phòng máy cài Scratch 3.0',
      },
    ],
  },
];

// Flat list of all curriculum lessons across all 3 grades
export const ALL_CURRICULUM_LESSONS: CurriculumLesson[] = [
  ...GRADE_3_TOPICS.flatMap((t) => t.lessons),
  ...GRADE_4_TOPICS.flatMap((t) => t.lessons),
  ...GRADE_5_TOPICS.flatMap((t) => t.lessons),
];

// For backward compatibility
export const CURRICULUM_LESSONS = ALL_CURRICULUM_LESSONS;

// Centralized Curriculum Map by Grade
export const CURRICULUM_BY_GRADE: Record<GradeLevel, GradeCurriculum> = {
  'Lớp 3': {
    grade: 'Lớp 3',
    gradeNumber: 3,
    totalTopics: 6,
    totalNumberedLessons: 16,
    topics: GRADE_3_TOPICS,
  },
  'Lớp 4': {
    grade: 'Lớp 4',
    gradeNumber: 4,
    totalTopics: 6,
    totalNumberedLessons: 16,
    topics: GRADE_4_TOPICS,
  },
  'Lớp 5': {
    grade: 'Lớp 5',
    gradeNumber: 5,
    totalTopics: 6,
    totalNumberedLessons: 16,
    topics: GRADE_5_TOPICS,
  },
};

// =====================================================================
// CURRICULUM QUERY & HELPER UTILITIES
// =====================================================================

export function getCurriculumByGrade(grade: GradeLevel): GradeCurriculum {
  return CURRICULUM_BY_GRADE[grade] || CURRICULUM_BY_GRADE['Lớp 3'];
}

export function getLessonsForGrade(grade: GradeLevel): CurriculumLesson[] {
  return getCurriculumByGrade(grade).topics.flatMap((t) => t.lessons);
}

export function getLessonById(id: string): CurriculumLesson | undefined {
  return ALL_CURRICULUM_LESSONS.find((l) => l.id === id);
}

export function findLessonByTitleOrNumber(grade: GradeLevel, searchStr: string): CurriculumLesson {
  const lessons = getLessonsForGrade(grade);
  if (!searchStr) return lessons[0];
  const cleanSearch = searchStr.trim().toLowerCase();

  // Try exact ID
  const byId = lessons.find((l) => l.id.toLowerCase() === cleanSearch);
  if (byId) return byId;

  // Try exact full display title (e.g. "Bài 5. Sử dụng bàn phím")
  const byFullTitle = lessons.find((l) => l.fullDisplayTitle.toLowerCase() === cleanSearch);
  if (byFullTitle) return byFullTitle;

  // Try exact title (e.g. "Sử dụng bàn phím")
  const byTitle = lessons.find((l) => l.title.toLowerCase() === cleanSearch);
  if (byTitle) return byTitle;

  // Try lessonNumberDisplay (e.g. "Bài 5", "Bài 8a", "Bài 8b")
  const byDisplay = lessons.find((l) => l.lessonNumberDisplay.toLowerCase() === cleanSearch);
  if (byDisplay) return byDisplay;

  // Try number extraction (e.g. "bài 5" or "5")
  const numMatch = cleanSearch.match(/(?:bài\s*)?(\d+)/i);
  if (numMatch) {
    const num = parseInt(numMatch[1], 10);
    // For grade 5 variants 8 or 9, pick 8A or 9A by default
    const byNum = lessons.find((l) => l.lessonNumber === num);
    if (byNum) return byNum;
  }

  // Try partial title match
  const byPartial = lessons.find(
    (l) => l.title.toLowerCase().includes(cleanSearch) || cleanSearch.includes(l.title.toLowerCase())
  );
  if (byPartial) return byPartial;

  // Default to lesson 1
  return lessons[0];
}

export function searchCurriculumLessons(query: string, grade?: GradeLevel): CurriculumLesson[] {
  const pool = grade ? getLessonsForGrade(grade) : ALL_CURRICULUM_LESSONS;
  if (!query.trim()) return pool;

  const q = query.trim().toLowerCase();
  return pool.filter(
    (l) =>
      l.title.toLowerCase().includes(q) ||
      l.fullDisplayTitle.toLowerCase().includes(q) ||
      l.lessonNumberDisplay.toLowerCase().includes(q) ||
      l.topicTitle.toLowerCase().includes(q) ||
      l.objectivesSummary.toLowerCase().includes(q)
  );
}

// =====================================================================
// CURRICULUM VALIDATION SYSTEM (#X & #XI)
// =====================================================================

export function validateCurriculum(): CurriculumValidationReport {
  const grades: GradeLevel[] = ['Lớp 3', 'Lớp 4', 'Lớp 5'];
  const gradeReports = grades.map((grade) => {
    const curr = CURRICULUM_BY_GRADE[grade];
    const errors: string[] = [];

    // Check 1: Topic count === 6
    if (curr.topics.length !== 6) {
      errors.push(`Số chủ đề sai: có ${curr.topics.length} (yêu cầu đúng 6)`);
    }

    // Check 2: Numbered lesson count === 16 (distinct numbers 1..16)
    const allLessons = curr.topics.flatMap((t) => t.lessons);
    const uniqueLessonNumbers = new Set(allLessons.map((l) => l.lessonNumber));

    if (uniqueLessonNumbers.size !== 16) {
      errors.push(`Số lượng bài được đánh số sai: có ${uniqueLessonNumbers.size} (yêu cầu đúng 16)`);
    }

    // Check 3: Check for out-of-bound lessons (no 17, 18, 19, 20)
    const hasOutOfBound = allLessons.some((l) => l.lessonNumber > 16 || l.lessonNumber < 1);
    if (hasOutOfBound) {
      errors.push(`Có bài học vượt quá 16 hoặc nhỏ hơn 1`);
    }

    // Check 4: Specific Grade 5 variant checks (8A, 8B, 9A, 9B)
    let hasProperVariants = true;
    if (grade === 'Lớp 5') {
      const lesson8A = allLessons.find((l) => l.lessonNumberDisplay === 'Bài 8A');
      const lesson8B = allLessons.find((l) => l.lessonNumberDisplay === 'Bài 8B');
      const lesson9A = allLessons.find((l) => l.lessonNumberDisplay === 'Bài 9A');
      const lesson9B = allLessons.find((l) => l.lessonNumberDisplay === 'Bài 9B');

      if (!lesson8A || !lesson8B || !lesson9A || !lesson9B) {
        hasProperVariants = false;
        errors.push(`Lớp 5 thiếu các biến thể Bài 8A/8B hoặc 9A/9B`);
      }
    }

    return {
      grade,
      topicCount: curr.topics.length,
      numberedLessonCount: uniqueLessonNumbers.size,
      hasProperVariants,
      hasOutOfBoundLessons: hasOutOfBound,
      passed: errors.length === 0,
      errors,
    };
  });

  const passed = gradeReports.every((g) => g.passed);

  return {
    passed,
    timestamp: new Date().toISOString(),
    grades: gradeReports,
  };
}

// Khung năng lực số môn Tin học Tiểu học GDPT 2018
export const DIGITAL_COMPETENCY_FRAMEWORK = [
  {
    code: 'NLa',
    name: 'Sử dụng và quản lý các phương tiện công nghệ thông tin và truyền thông',
    subcodes: [
      { code: 'NLa.1', desc: 'Nhận biết và sử dụng đúng quy trình các bộ phận máy tính' },
      { code: 'NLa.2', desc: 'Thao tác chuột và gõ bàn phím đúng cách, an toàn' },
      { code: 'NLa.3', desc: 'Tổ chức lưu trữ và tìm kiếm tệp, thư mục khoa học' },
    ],
  },
  {
    code: 'NLb',
    name: 'Ứng xử phù hợp trong môi trường số',
    subcodes: [
      { code: 'NLb.1', desc: 'Bảo vệ thông tin cá nhân và tài khoản phòng máy' },
      { code: 'NLb.2', desc: 'Giao tiếp lịch sự, không phát tán nội dung xấu' },
      { code: 'NLb.3', desc: 'Tôn trọng quyền tác giả và tài sản trí tuệ' },
    ],
  },
  {
    code: 'NLc',
    name: 'Thu thập, lưu trữ, xử lý và truyền đạt thông tin',
    subcodes: [
      { code: 'NLc.1', desc: 'Tìm kiếm thông tin phục vụ học tập theo chủ đề' },
      { code: 'NLc.2', desc: 'Trình bày thông tin bằng bảng biểu, tranh vẽ và văn bản' },
    ],
  },
  {
    code: 'NLd',
    name: 'Ứng dụng công nghệ thông tin và truyền thông trong học và tự học',
    subcodes: [
      { code: 'NLd.1', desc: 'Sử dụng phần mềm trò chơi học tập rèn luyện kỹ năng' },
      { code: 'NLd.2', desc: 'Tạo sản phẩm số đơn giản (thiệp chúc mừng, bài vẽ, slide)' },
    ],
  },
  {
    code: 'NLe',
    name: 'Hợp tác trong môi trường số',
    subcodes: [
      { code: 'NLe.1', desc: 'Làm việc nhóm đôi trên cùng một máy vi tính' },
      { code: 'NLe.2', desc: 'Chia sẻ sản phẩm số cho bạn bè và thầy cô cùng nhận xét' },
    ],
  },
];

// Complete ready-to-use demo package: "Bài 5. Sử dụng bàn phím" (Lớp 3)
export const DEMO_TEACHING_PACKAGE_L3: TeachingPackage = {
  id: 'pkg-lop3-banphim',
  grade: 'Lớp 3',
  lessonTitle: 'Bài 5. Sử dụng bàn phím',
  bookSeries: 'Kết nối tri thức',
  duration: '35 phút',
  qualityScore: 95,
  createdAt: '2026-10-15',
  lessonPlan: {
    id: 'lp-k3-banphim',
    grade: 'Lớp 3',
    title: 'Bài 5. Sử dụng bàn phím',
    bookSeries: 'Kết nối tri thức',
    duration: '35 phút',
    studentCount: 32,
    classLevel: 'Trung bình',
    devices: {
      projector: true,
      teacherPc: true,
      studentPc: true,
      noPersonalDevice: false,
      hasInternet: true,
      noInternet: false,
    },
    sourceRestricted: true,
    objectives: {
      knowledge: [
        'Chỉ ra được khu vực chính của bàn phím và các hàng phím cơ bản.',
        'Xác định được hàng phím cơ sở và hai phím có gờ đặc biệt: F và J.',
        'Biết đặt 8 ngón tay đúng vị trí xuất phát trên hàng phím cơ sở.',
      ],
      ictCompetence: [
        'NLa.1: Sử dụng bàn phím đúng tư thế, không đập mạnh lên phím.',
        'NLa.2: Đặt các ngón tay chuẩn xác trên hai phím mốc F và J.',
        'NLd.1: Rèn luyện kỹ năng gõ phím thông qua phần mềm luyện tập vui nhộn.',
      ],
      qualities: [
        'Chăm chỉ: Kiên trì luyện tập ngón tay đúng vị trí.',
        'Trách nhiệm: Giữ gìn bàn phím sạch sẽ, không ấn phím bừa bãi.',
      ],
    },
    tools: {
      teacher: ['Máy chiếu', 'Bàn phím thật khổ lớn hoặc mô hình vẽ', 'Bài giảng điện tử Canva/PowerPoint', 'Trò chơi Bắt bướm gõ phím'],
      student: ['SGK Tin học 3', 'Phòng máy vi tính (mỗi máy 2 em luân phiên)', 'Phiếu học tập in màu hình bàn phím'],
    },
    activities: [
      {
        id: 'act-1',
        name: 'Khởi động: Thử tài tinh mắt cùng Robot Chip',
        phase: 'Khởi động',
        timeMinutes: 5,
        teacherAction: 'Chiếu hình ảnh 2 chú mèo đang gõ máy tính, hỏi: "Theo các con, bạn mèo nào đang ngồi gõ phím đúng tư thế và lưng thẳng?". Giới thiệu nhân vật Robot Chip dẫn dắt vào bài mới.',
        studentAction: 'Quan sát tranh, hào hứng giơ tay chọn đáp án và bắt chước ngồi thẳng lưng, hai chân chạm đất.',
        product: 'Tư thế ngồi học chuẩn và tâm thế sẵn sàng khám phá.',
        assessment: 'Khen ngợi học sinh có tư thế ngồi đẹp nhất lớp.',
        digitalCompetencyCode: 'NLa.1',
        aiCompetency: 'Robot Chip tương tác ảo khích lệ tinh thần học tập.',
      },
      {
        id: 'act-2',
        name: 'Khám phá: Giải mã bí mật Hàng phím Cơ sở & Hai phím F - J',
        phase: 'Khám phá',
        timeMinutes: 12,
        teacherAction: 'Hướng dẫn học sinh sờ nhẹ lên phím F và phím J. Đặt câu hỏi: "Các con có cảm thấy điểm gì đặc biệt dưới đầu ngón tay không?". Giới thiệu khái niệm "Hàng phím cơ sở" và "Căn cứ địa của 8 ngón tay".',
        studentAction: 'Dùng ngón trỏ hai bàn tay sờ tìm gờ nổi trên phím F và J. Thốt lên ngạc nhiên khi tìm thấy gờ nhỏ. Đọc to tên các hàng phím theo hướng dẫn.',
        product: 'Học sinh chỉ đúng vị trí 2 phím có gờ và các phím thuộc hàng phím cơ sở (A, S, D, F, G, H, J, K, L, ;).',
        assessment: 'Quan sát trực tiếp thao tác sờ gờ của từng dãy bàn.',
        digitalCompetencyCode: 'NLa.2',
        aiCompetency: 'Không cần tích hợp AI phức tạp ở pha này để tập trung giác quan xúc giác.',
      },
      {
        id: 'act-3',
        name: 'Luyện tập: Thử thách "Những ngón tay múa trên phím"',
        phase: 'Luyện tập',
        timeMinutes: 13,
        teacherAction: 'Yêu cầu mở phần mềm gõ phím hoặc mở Notepad gõ các chuỗi ký tự mẫu: "fff jjj fjfj aass ddfj". Đi từng máy hỗ trợ học sinh thao tác chậm.',
        studentAction: 'Học sinh ngồi theo cặp: 1 bạn gõ 3 phút, 1 bạn ngồi bên làm trọng tài nhắc nhở không nhìn bàn phím. Sau đó đổi vai.',
        product: 'Đoạn văn bản ngắn các ký tự hàng cơ sở trên màn hình máy tính.',
        assessment: 'Đánh giá qua thang sao (3 sao: gõ đúng ngón + không nhìn phím; 2 sao: gõ đúng ký tự).',
        digitalCompetencyCode: 'NLe.1',
        aiCompetency: 'AI gợi ý chuỗi ký tự vừa sức cho học sinh còn lúng túng.',
      },
      {
        id: 'act-4',
        name: 'Vận dụng: Trò chơi tiếp sức "Về đúng ngôi nhà"',
        phase: 'Vận dụng',
        timeMinutes: 5,
        teacherAction: 'Tổ chức trò chơi nhanh trên màn hình tương tác: Kéo thẻ tên ngón tay vào đúng phím tương ứng trên hàng cơ sở.',
        studentAction: 'Đại diện các tổ lên kéo ghép nhanh, cả lớp cùng reo hò cổ vũ.',
        product: 'Bảng ghép hoàn chỉnh 8 ngón tay về đúng ngôi nhà phím.',
        assessment: 'Nhận xét chung tiết học, tặng sao khen ngợi cho cả lớp.',
        digitalCompetencyCode: 'NLd.1',
      },
    ],
    createdAt: '2026-10-15',
  },
  pptDeck: {
    id: 'ppt-k3-banphim',
    grade: 'Lớp 3',
    lessonTitle: 'Bài 5. Sử dụng bàn phím',
    style: 'Cute Education',
    createdAt: '2026-10-15',
    slides: [
      {
        id: 's1',
        slideNumber: 1,
        title: 'BÀI 5. SỬ DỤNG BÀN PHÍM',
        subtitle: 'Môn Tin học Lớp 3 - Tiết 5',
        bulletPoints: ['Chào mừng các bạn nhỏ đến với phòng Tin học!', 'Hôm nay chúng mình sẽ cùng Robot Chip khám phá bàn phím nhé.'],
        imagePrompt: 'Một chú robot hoạt hình dễ thương màu xanh pastel đang vẫy tay chào bên cạnh chiếc máy tính tiểu học.',
        interactiveActivity: 'Khởi động vỗ tay theo nhịp điệu công nghệ.',
        teacherNote: 'Bật nhạc nhẹ vui tươi lúc học sinh ổn định chỗ ngồi.',
      },
      {
        id: 's2',
        slideNumber: 2,
        title: 'Bàn Phím Máy Tính Dùng Để Làm Gì?',
        bulletPoints: [
          'Bàn phím giúp em gửi thông tin vào máy tính.',
          'Em có thể gõ chữ cái, gõ số và gõ các ký hiệu.',
          'Bàn phím có rất nhiều phím, nhưng đừng lo, chúng mình học từng nhóm một!',
        ],
        imagePrompt: 'Hình vẽ minh họa bàn phím máy tính với các nút phím sắc màu pastel sinh động.',
        interactiveActivity: 'Hỏi nhanh: Bạn nào đã từng thấy bố mẹ gõ bàn phím giơ tay nào?',
      },
      {
        id: 's3',
        slideNumber: 3,
        title: 'Khám Phá Khu Vực Chính Của Bàn Phím',
        bulletPoints: [
          'Hàng phím số (ở trên cùng)',
          'Hàng phím trên (bắt đầu bằng Q, W, E, R...)',
          'Hàng phím cơ sở (NGÔI NHÀ QUAN TRỌNG NHẤT!)',
          'Hàng phím dưới (bắt đầu bằng Z, X, C...)',
          'Hàng phím chứa phím Cách (Spacebar dài nhất)',
        ],
        imagePrompt: 'Sơ đồ bàn phím tô màu 5 dải màu pastel phân biệt rõ ràng 5 hàng phím.',
        interactiveActivity: 'Trò chơi chỉ nhanh: Giáo viên nói tên hàng, học sinh chỉ tay vào bàn phím trước mặt.',
      },
      {
        id: 's4',
        slideNumber: 4,
        title: 'Bí Mật Của Hai Phím Có Gờ: F và J',
        bulletPoints: [
          'Tại sao phím F và phím J lại có một gờ nhô lên bé xíu?',
          '👉 Đó là biển chỉ đường cho hai ngón trỏ của em đấy!',
          'Ngón trỏ trái luôn ở phím F.',
          'Ngón trỏ phải luôn ở phím J.',
          'Nhờ hai gờ này, em không cần nhìn mà vẫn tìm đúng vị trí.',
        ],
        imagePrompt: 'Phóng to hai phím F và J với hình hai ngón tay chạm nhẹ vào gờ nổi phản quang.',
        interactiveActivity: 'Nhắm mắt lại và sờ tìm phím F, J trong 5 giây!',
      },
      {
        id: 's5',
        slideNumber: 5,
        title: 'Tư Thế Ngồi Chuẩn Của Nhà Lập Trình Nhí',
        bulletPoints: [
          'Lưng thẳng, ngực không tì vào bàn.',
          'Mắt cách màn hình khoảng 50cm - 80cm.',
          'Hai bàn tay thả lỏng tự nhiên trên bàn phím.',
          'Ánh sáng phòng học đầy đủ, không chói mắt.',
        ],
        imagePrompt: 'Hình vẽ cậu bé tiểu học ngồi đúng tư thế với thước đo khoảng cách dễ thương.',
      },
      {
        id: 's6',
        slideNumber: 6,
        title: 'Tổng Kết & Tuyên Dương',
        bulletPoints: [
          'Hôm nay em đã biết 5 hàng phím cơ bản.',
          'Em đã tìm thấy phím có gờ F và J.',
          'Về nhà hãy nhắc người thân ngồi thẳng lưng khi làm việc máy tính nhé!',
        ],
        imagePrompt: 'Robot Chip trao cúp vàng lấp lánh cho cả lớp.',
        interactiveActivity: 'Bình chọn Đôi bạn cùng tiến gõ phím chuẩn nhất buổi học.',
      },
    ],
  },
  game: {
    id: 'game-k3-banphim',
    title: 'Giải Cứu Bàn Phím Cùng Robot Chip',
    grade: 'Lớp 3',
    lessonTitle: 'Bài 5. Sử dụng bàn phím',
    gameType: 'crossword',
    difficulty: 'Vừa',
    timePerQuestionSeconds: 20,
    createdAt: '2026-10-15',
    questions: [
      {
        id: 'gq1',
        question: 'Hai phím nào trên hàng cơ sở có gờ nổi giúp em định vị ngón tay?',
        options: ['Phím A và Phím L', 'Phím F và Phím J', 'Phím G và Phím H', 'Phím C và Phím M'],
        correctAnswerIndex: 1,
        explanation: 'Chính xác! Phím F và J có gờ nổi để ngón trỏ trái và phải luôn tự tìm về đúng vị trí.',
        hint: 'Nằm ở hàng phím cơ sở, do hai ngón trỏ phụ trách!',
        icon: '⌨️',
      },
      {
        id: 'gq2',
        question: 'Phím dài nhất trên bàn phím máy tính là phím nào?',
        options: ['Phím Enter', 'Phím Shift', 'Phím Cách (Spacebar)', 'Phím Caps Lock'],
        correctAnswerIndex: 2,
        explanation: 'Rất giỏi! Phím Cách nằm ở hàng dưới cùng, dài nhất và do ngón cái phụ trách.',
        hint: 'Dùng để tạo dấu cách giữa các từ.',
        icon: '📏',
      },
      {
        id: 'gq3',
        question: 'Khi gõ phím, hai ngón tay cái có nhiệm vụ gõ phím nào?',
        options: ['Phím Cách', 'Phím Enter', 'Phím F và J', 'Phím Delete'],
        correctAnswerIndex: 0,
        explanation: 'Đúng rồi! Hai ngón cái đặt hờ trên phím Cách để tạo khoảng trắng khi cần.',
        hint: 'Nằm ngay cạnh nhau ở hàng dưới cùng.',
        icon: '👍',
      },
      {
        id: 'gq4',
        question: 'Hàng phím nào được gọi là "ngôi nhà" của các ngón tay xuất phát?',
        options: ['Hàng phím số', 'Hàng phím trên', 'Hàng phím cơ sở', 'Hàng phím dưới'],
        correctAnswerIndex: 2,
        explanation: 'Chuẩn xác! Hàng phím cơ sở là nơi đặt 8 ngón tay trước khi bắt đầu gõ.',
        hint: 'Chứa các phím A, S, D, F, G, H, J, K, L',
        icon: '🏠',
      },
      {
        id: 'gq5',
        question: 'Tư thế nào sau đây là ĐÚNG khi ngồi học máy tính?',
        options: ['Cúi gập sát mắt vào màn hình', 'Lưng thẳng, mắt cách màn hình 50-80 cm', 'Ngồi vắt chân lên ghế', 'Tì ngực sát vào cạnh bàn'],
        correctAnswerIndex: 1,
        explanation: 'Tuyệt vời! Lưng thẳng và giữ khoảng cách bảo vệ mắt và cột sống của em.',
        hint: 'Bảo vệ đôi mắt và lưng không bị mỏi.',
        icon: '🪑',
      },
    ],
  },
  quiz: {
    id: 'quiz-k3-banphim',
    title: 'Bài kiểm tra 15 phút: Sử dụng bàn phím',
    grade: 'Lớp 3',
    lessonTitle: 'Bài 5. Sử dụng bàn phím',
    qualityScore: 96,
    createdAt: '2026-10-15',
    questions: [
      {
        id: 'q1',
        question: 'Bàn phím máy tính là thiết bị dùng để làm gì?',
        options: {
          A: 'Nhập thông tin (chữ, số, ký hiệu) vào máy tính',
          B: 'Hiển thị hình ảnh và video ra ngoài',
          C: 'Phát ra âm thanh bài hát',
          D: 'In tài liệu ra giấy',
        },
        correctAnswer: 'A',
        explanation: 'Bàn phím là thiết bị vào cơ bản dùng để nhập dữ liệu ký tự vào máy tính.',
        level: 'Nhận biết',
      },
      {
        id: 'q2',
        question: 'Hàng phím nào sau đây chứa hai phím F và J?',
        options: {
          A: 'Hàng phím số',
          B: 'Hàng phím trên',
          C: 'Hàng phím cơ sở',
          D: 'Hàng phím dưới',
        },
        correctAnswer: 'C',
        explanation: 'Phím F và J nằm ở hàng phím cơ sở (ASDFGHJKL;).',
        level: 'Nhận biết',
      },
      {
        id: 'q3',
        question: 'Bạn An muốn đặt ngón tay đúng quy tắc để bắt đầu gõ phím. An cần đặt ngón trỏ của bàn tay trái vào phím nào?',
        options: {
          A: 'Phím J',
          B: 'Phím F',
          C: 'Phím A',
          D: 'Phím Cách',
        },
        correctAnswer: 'B',
        explanation: 'Ngón trỏ tay trái đặt vào phím F (có gờ), ngón trỏ tay phải đặt vào phím J (có gờ).',
        level: 'Thông hiểu',
      },
      {
        id: 'q4',
        question: 'Tại sao khi ngồi gõ máy tính, em không nên nhìn chăm chú vào bàn phím?',
        options: {
          A: 'Vì nhìn bàn phím sẽ làm bàn phím nhanh mờ chữ',
          B: 'Vì tập không nhìn bàn phím giúp em gõ nhanh hơn và mắt nhìn theo dõi văn bản trên màn hình',
          C: 'Vì máy tính sẽ không nhận phím nếu em nhìn',
          D: 'Vì nhìn bàn phím sẽ gây chói mắt',
        },
        correctAnswer: 'B',
        explanation: 'Luyện gõ mười ngón không nhìn phím giúp tăng tốc độ gõ và kiểm soát lỗi chính tả ngay trên màn hình.',
        level: 'Thông hiểu',
      },
      {
        id: 'q5',
        question: 'Trong giờ thực hành, bạn Bình dùng tay đập mạnh liên tục vào bàn phím vì máy chạy chậm. Hành động của bạn Bình:',
        options: {
          A: 'Rất đúng vì làm máy chạy nhanh hơn',
          B: 'Sai, vì có thể làm gãy vỡ phím và hỏng thiết bị chung của nhà trường',
          C: 'Không ảnh hưởng gì vì bàn phím rất bền',
          D: 'Là cách tốt để báo cho thầy cô biết',
        },
        correctAnswer: 'B',
        explanation: 'Học sinh cần có ý thức giữ gìn tài sản chung, thao tác nhẹ nhàng và báo giáo viên khi máy tính gặp sự cố.',
        level: 'Vận dụng',
      },
    ],
  },
  worksheet: {
    id: 'ws-k3-banphim',
    schoolName: 'TRƯỜNG TIỂU HỌC KIM ĐỒNG',
    grade: 'Lớp 3',
    lessonTitle: 'Bài 5. Sử dụng bàn phím',
    studentType: 'Phiếu thực hành',
    bonusStarChallenge: '⭐ Thử thách siêu sao: Hãy nhắm mắt và đặt 8 ngón tay vào đúng hàng phím cơ sở mà không cần nhìn!',
    createdAt: '2026-10-15',
    exercises: [
      {
        id: 'ex1',
        type: 'matching',
        title: 'Bài 1: Nối ngón tay với phím xuất phát tương ứng',
        instruction: 'Em hãy dùng bút nối ngón tay ở cột bên trái với phím tương ứng ở cột bên phải:',
        content: '1. Ngón trỏ tay trái  ----->  [ Phím F ]\n2. Ngón trỏ tay phải  ----->  [ Phím J ]\n3. Hai ngón tay cái   ----->  [ Phím Cách (Spacebar) ]\n4. Ngón út tay trái   ----->  [ Phím A ]',
        answerAreaLines: 4,
        illustrationSuggestion: 'Hình vẽ bàn tay trái và bàn tay phải màu pastel có đánh dấu chữ cái trên từng đầu ngón tay.',
      },
      {
        id: 'ex2',
        type: 'fill_in_blank',
        title: 'Bài 2: Điền từ còn thiếu vào chỗ trống',
        instruction: 'Chọn các từ: (gờ nổi, hàng cơ sở, thẳng lưng, 50-80cm) điền vào chỗ trống thích hợp:',
        content: 'a) Hai phím F và J có ............................ giúp em nhận biết mà không cần nhìn.\nb) Hàng phím ............................ là nơi xuất phát của 8 ngón tay.\nc) Khi ngồi học Tin học, em cần ngồi ............................ và mắt cách màn hình ............................',
        answerAreaLines: 3,
      },
      {
        id: 'ex3',
        type: 'practice_task',
        title: 'Bài 3: Nhật ký thực hành trên máy vi tính',
        instruction: 'Sau khi hoàn thành bài tập trên phần mềm luyện phím, hãy tự ghi nhận kết quả của em:',
        content: '- Tên bạn cùng thực hành với em: ...................................................\n- Số ngôi sao em đạt được: ⭐ ⭐ ⭐\n- Thầy/Cô đã khen em về điều gì: ...................................................',
        answerAreaLines: 3,
      },
    ],
  },
  digitalCompetency: {
    id: 'dc-k3-banphim',
    grade: 'Lớp 3',
    lessonTitle: 'Bài 5. Sử dụng bàn phím',
    activityName: 'Luyện tập gõ hàng cơ sở trên phần mềm',
    frameworkCode: 'NLa.2',
    frameworkDescription: 'Thao tác chuột và gõ bàn phím đúng cách, an toàn và có thói quen bảo vệ sức khỏe khi sử dụng thiết bị số.',
    isAppropriate: true,
    suitabilityReason: 'Hoạt động luyện gõ phím trực tiếp rèn luyện kỹ năng vận động tinh và định hướng không gian trên thiết bị nhập liệu cơ bản nhất của máy tính.',
    recommendedPedagogicalStep: 'Cho học sinh tập đặt ngón tay 3 lần trước khi bật máy tính để hình thành phản xạ cơ học tự nhiên.',
    aiIntegrationAdvice: 'Sử dụng AI avatar (như Robot Chip) đưa ra lời chúc mừng ngộ nghĩnh khi học sinh hoàn thành chuỗi ký tự mà không sai lỗi.',
  },
  videoScript: {
    id: 'vid-k3-banphim',
    grade: 'Lớp 3',
    title: 'Robot Chip Dạy Bé Gõ Bàn Phím Siêu Tốc',
    durationMinutes: 2,
    style: 'Cute Educational',
    idea: 'Robot Chip bay vào phòng máy vi tính và phát hiện một bí mật kỳ lạ trên hai phím F và J, từ đó giải thích quy tắc 10 ngón cho học sinh.',
    storyboard: [
      {
        sceneNumber: 1,
        visual: 'Toàn cảnh phòng máy tính tiểu học sáng sủa, Robot Chip bay lượn từ từ đáp xuống cạnh bàn phím.',
        voiceover: 'Xin chào các bạn nhỏ lớp 3! Mình là Robot Chip đây. Hôm nay đố các bạn biết trên bàn phím có hai chiếc phím đặc biệt mang phép màu gì nhé!',
        onScreenText: 'Xin chào các bạn! Mình là Robot Chip 🤖',
        durationSeconds: 20,
        imagePrompt: 'Cute cartoon friendly robot hovering next to a colorful computer keyboard in a bright primary classroom.',
      },
      {
        sceneNumber: 2,
        visual: 'Ống kính zoom cận cảnh ngón tay bé chạm vào gờ nhỏ nhô lên của phím F và phím J.',
        voiceover: 'Hãy dùng ngón trỏ sờ thử xem nào! Oa, có một đường gờ nhỏ xíu đúng không? Đây chính là vạch xuất phát để các ngón tay không bị lạc đường đấy!',
        onScreenText: 'Phím F & Phím J có gờ nổi kỳ diệu!',
        durationSeconds: 35,
        imagePrompt: 'Close up illustration of index finger touching raised bumps on F and J computer keys, pastel arrows.',
      },
      {
        sceneNumber: 3,
        visual: 'Màn hình hiển thị 8 ngón tay tương ứng 8 màu sắc rực rỡ đậu nhẹ nhàng lên hàng phím cơ sở.',
        voiceover: 'Ngón tay trỏ trái ở F, ngón trỏ phải ở J. Các ngón còn lại xếp ngay ngắn bên cạnh. Hai ngón cái đặt hờ trên phím Cách dài nhất!',
        onScreenText: 'Hàng cơ sở: Ngôi nhà của 8 ngón tay!',
        durationSeconds: 40,
        imagePrompt: 'Eight colorful cartoon hands sitting on home row keys A S D F J K L with musical notes floating around.',
      },
      {
        sceneNumber: 4,
        visual: 'Robot Chip vẫy tay chào và biến thành ngôi sao lấp lánh điểm 10.',
        voiceover: 'Nhớ ngồi thẳng lưng và cười thật tươi khi học Tin học nhé. Hẹn gặp lại các bạn ở tiết học sau!',
        onScreenText: 'Chúc các bạn luyện phím thật vui! ⭐',
        durationSeconds: 25,
        imagePrompt: 'Happy robot chip giving a big thumbs up with gold stars and cheerful confetti in pastel background.',
      },
    ],
  },
  rubric: [
    {
      criteria: '1. Nhận biết khu vực chính & hàng phím cơ sở',
      excellent: 'Chỉ chính xác và nhanh chóng 5 hàng phím, chỉ ngay lập tức 2 phím có gờ F và J.',
      good: 'Chỉ được các hàng phím nhưng cần gợi ý nhỏ để phân biệt hàng phím trên và dưới.',
      needsHelp: 'Chưa nhớ tên các hàng phím, cần bạn hoặc cô giáo chỉ giúp.',
    },
    {
      criteria: '2. Tư thế ngồi học & đặt tay',
      excellent: 'Ngồi thẳng lưng suốt tiết học, đặt đúng 8 ngón tay lên hàng phím cơ sở không cần nhắc.',
      good: 'Đặt đúng ngón tay nhưng thỉnh thoảng còn cúi sát mắt vào màn hình.',
      needsHelp: 'Dùng 1 ngón trỏ "mổ cò", ngồi nghiêng vẹo người.',
    },
    {
      criteria: '3. Ý thức giữ gìn thiết bị',
      excellent: 'Thao tác nhẹ nhàng, không ấn phím mạnh, lau dọn khu vực máy tính sạch sẽ sau giờ học.',
      good: 'Thao tác nhẹ nhàng, còn để quên phiếu học tập trên bàn máy.',
      needsHelp: 'Ấn mạnh phím, đùa nghịch dây chuột hoặc bàn phím.',
    },
  ],
};

export const PROMPT_TEMPLATES: PromptTemplate[] = [
  {
    id: 'pr-1',
    category: 'Giáo án',
    title: 'Soạn giáo án Tin học GDPT 2018 chuẩn 4 hoạt động',
    description: 'Tạo kế hoạch bài dạy chuẩn theo Công văn 2345/BGDĐT dành cho tiểu học.',
    template: `Đóng vai trò: Chuyên gia sư phạm Tin học Tiểu học.
Khối lớp: [Khối 3/4/5]
Bài học: [Tên bài]
Thời lượng: 35 phút
Bộ sách: [Kết nối tri thức / Chân trời / Cánh Diều]
Thiết bị phòng máy: [Có máy chiếu, 1 máy tính/2 học sinh]
Yêu cầu: Soạn giáo án gồm:
I. Yêu cầu cần đạt (Kiến thức, Năng lực Tin học NLa/NLb/NLc, Phẩm chất)
II. Đồ dùng dạy học
III. Tiến trình dạy học gồm 4 hoạt động (Khởi động, Khám phá, Luyện tập, Vận dụng) với bảng [Hoạt động GV | Hoạt động HS | Sản phẩm | Đánh giá | Mã NL số].`,
  },
  {
    id: 'pr-2',
    category: 'Trò chơi',
    title: 'Thiết kế trò chơi khởi động 5 phút vui nhộn',
    description: 'Tạo trò chơi tương tác nhanh giúp học sinh hào hứng ngay đầu tiết học.',
    template: `Hãy thiết kế 1 trò chơi khởi động 5 phút cho bài học: "[Tên bài]" - Tin học lớp [3/4/5].
Phong cách: Cute Educational, dùng nhân vật Robot Chip.
Yêu cầu:
- Tên trò chơi bắt tai, hấp dẫn
- Luật chơi đơn giản, học sinh tiểu học hiểu ngay sau 30 giây
- 4 câu đố vui trắc nghiệm kích thích tư duy
- Phần thưởng tinh thần (Huy hiệu nhí)`,
  },
  {
    id: 'pr-3',
    category: 'Câu hỏi',
    title: 'Tạo 10 câu trắc nghiệm 3 mức độ nhận thức',
    description: 'Ra đề trắc nghiệm chuẩn có đáp án và giải thích sư phạm chi tiết.',
    template: `Tạo 10 câu hỏi trắc nghiệm 4 lựa chọn (A, B, C, D) cho bài học: "[Tên bài]" - Tin học lớp [3/4/5].
Tỷ lệ: 5 câu Nhận biết, 3 câu Thông hiểu, 2 câu Vận dụng thực tế phòng máy.
Mỗi câu phải có:
- Nội dung câu hỏi trong sáng, ngắn gọn
- 4 đáp án A, B, C, D (chỉ duy nhất 1 đáp án đúng, không gây nhầm lẫn)
- Đáp án đúng và lời giải thích ngắn gọn, dễ hiểu cho học sinh tiểu học.`,
  },
  {
    id: 'pr-4',
    category: 'PowerPoint',
    title: 'Kịch bản Slide trình chiếu 6-8 trang phong cách Cute',
    description: 'Gợi ý bố cục từng slide, hoạt động tương tác và prompt hình ảnh minh họa.',
    template: `Tạo cấu trúc trình chiếu PowerPoint 7 slide cho bài: "[Tên bài]" - Khối [3/4/5].
Phong cách: Cute Pastel Education.
Mỗi slide gồm:
1. Tiêu đề slide
2. 2-3 gạch đầu dòng cô đọng (ít chữ, nhiều hình)
3. Gợi ý prompt tạo ảnh hoạt hình minh họa
4. Hoạt động tương tác tại chỗ cho học sinh
5. Lời nhắn cho giáo viên (Teacher Note).`,
  },
  {
    id: 'pr-5',
    category: 'Đánh giá',
    title: 'Tạo nhận xét học bạ theo Thông tư 27 khích lệ',
    description: 'Viết nhận xét tích cực, tôn trọng, không dán nhãn, chuẩn sư phạm tiểu học.',
    template: `Viết 5 câu nhận xét học bạ môn Tin học cho học sinh lớp [3/4/5]:
- Mức đạt: [Hoàn thành tốt / Hoàn thành]
- Điểm mạnh: [Thao tác chuột nhanh, sáng tạo, nhiệt tình hỗ trợ bạn]
- Điểm cần cải thiện: [Cần rèn luyện gõ đúng quy tắc 10 ngón]
Ngôn từ ấm áp, khích lệ, chuẩn mực sư phạm tiểu học, không so sánh hay chê bai.`,
  },
  {
    id: 'pr-6',
    category: 'Năng lực số',
    title: 'Thẩm định tính phù hợp của Năng lực số',
    description: 'Kiểm tra xem hoạt động có nên gán mã chỉ báo năng lực số hay không.',
    template: `Phân tích hoạt động sau trong bài dạy Tin học:
Hoạt động: "[Mô tả hoạt động]"
Khối lớp: [3/4/5]
Câu hỏi thẩm định:
1. Hoạt động này có thực sự phát triển năng lực số không? Hay chỉ là thao tác lặp lại?
2. Nếu phù hợp, gán mã chỉ báo nào trong GDPT 2018 (NLa, NLb, NLc, NLd, NLe)?
3. Nếu gượng ép, ghi rõ "KHÔNG CẦN TÍCH HỢP" và lý do.`,
  },
];
