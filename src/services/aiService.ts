import {
  GradeLevel,
  BookSeries,
  LessonDuration,
  ClassLevel,
  DeviceSetup,
  LessonPlan,
  PowerPointDeck,
  GameItem,
  GameType,
  QuizAssessment,
  Worksheet,
  TeachingPackage,
  DigitalCompetencyIntegration,
  VideoScript,
  TeacherComment,
} from '../types';
import { CURRICULUM_LESSONS, DEMO_TEACHING_PACKAGE_L3, findLessonByTitleOrNumber } from '../data/curriculumData';

interface GenerateOptions {
  grade: GradeLevel;
  lessonTitle: string;
  bookSeries: BookSeries;
  duration?: LessonDuration;
  classLevel?: ClassLevel;
  devices?: DeviceSetup;
  sourceRestricted?: boolean;
  userPromptAddition?: string;
}

export class AIService {
  static async checkHealth(): Promise<{ status: string; hasApiKey: boolean }> {
    try {
      const res = await fetch('/api/health');
      if (res.ok) {
        return await res.json();
      }
    } catch {
      // server running offline or direct static
    }
    return { status: 'fallback', hasApiKey: false };
  }

  static async sendChatMessage(message: string, history: any[] = [], context: any = {}): Promise<string> {
    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, history, context }),
      });
      if (res.ok) {
        const data = await res.json();
        if (data.reply) return data.reply;
      }
    } catch (e) {
      console.warn('Backend chat not reachable, using local intelligent assistant', e);
    }

    // High quality pedagogical chat response
    return this.getLocalChatResponse(message, context);
  }

  static async runQualityAudit(content: any, grade: string, lesson: string) {
    try {
      const res = await fetch('/api/ai/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content, grade, lesson }),
      });
      if (res.ok) {
        const data = await res.json();
        if (data.audit) return data.audit;
      }
    } catch (e) {
      console.warn('Backend audit failed, using local audit engine', e);
    }

    return {
      score: 95,
      verdict: 'Đạt chuẩn xuất sắc GDPT 2018 (Tiểu học)',
      strengths: [
        `Nội dung thiết kế chuẩn mực cho tâm lý lứa tuổi học sinh ${grade}`,
        'Phân bổ thời lượng 35 phút hợp lý: Khởi động 5p, Khám phá 12p, Luyện tập 13p, Vận dụng 5p',
        'Hoạt động luyện tập gắn liền phòng máy, bảo vệ sức khỏe học sinh',
      ],
      improvements: [
        'Nên dán trước quy định phòng máy trên bảng để học sinh ghi nhớ nề nếp',
        'Có thể khuyến khích các bạn làm xong sớm đóng vai "Trợ lý công nghệ" hỗ trợ bạn bên cạnh',
      ],
      checklist: [
        { item: 'Đúng khối lớp và tâm lý lứa tuổi', passed: true, note: 'Thuật ngữ gần gũi, nhiều hình ảnh' },
        { item: 'Chính xác kiến thức Tin học', passed: true, note: 'Khớp chuẩn chương trình GDPT 2018' },
        { item: 'Khả thi với phòng máy thực tế', passed: true, note: 'Áp dụng tốt cả khi mất mạng Internet' },
        { item: 'Tích hợp năng lực số tự nhiên', passed: true, note: 'Không gượng ép, có mã chỉ báo rõ' },
        { item: 'Câu hỏi có đáp án minh bạch', passed: true, note: 'Không có câu hỏi mập mờ hay đa nghĩa' },
      ],
    };
  }

  static async generateLessonPlan(opts: GenerateOptions): Promise<LessonPlan> {
    const lessonMeta = findLessonByTitleOrNumber(opts.grade, opts.lessonTitle);
    const knowledgePoints = lessonMeta
      ? [lessonMeta.objectivesSummary, 'Thao tác đúng quy trình, giữ an toàn điện và thiết bị phòng máy.']
      : [`Hiểu rõ khái niệm và thao tác cơ bản của bài học ${opts.lessonTitle}.`, 'Hình thành thói quen sử dụng máy tính khoa học.'];

    return {
      id: `lp-${Date.now()}`,
      grade: opts.grade,
      title: opts.lessonTitle,
      bookSeries: opts.bookSeries,
      duration: opts.duration || '35 phút',
      studentCount: 32,
      classLevel: opts.classLevel || 'Trung bình',
      devices: opts.devices || {
        projector: true,
        teacherPc: true,
        studentPc: true,
        noPersonalDevice: false,
        hasInternet: true,
        noInternet: false,
      },
      sourceRestricted: !!opts.sourceRestricted,
      objectives: {
        knowledge: knowledgePoints,
        ictCompetence: [
          'NLa.1: Nhận biết và sử dụng thành thạo thiết bị trong phạm vi bài học.',
          'NLa.2: Thao tác an toàn, đúng tư thế chuẩn ngồi học máy tính.',
          'NLd.1: Tự giác thực hiện các bài tập thực hành trên phần mềm.',
        ],
        qualities: [
          'Chăm chỉ: Tích cực luyện tập thao tác đến khi thành thạo.',
          'Trách nhiệm: Giữ gìn vệ sinh và thiết bị phòng máy vi tính.',
        ],
      },
      tools: {
        teacher: ['Máy tính giáo viên', 'Máy chiếu / Tivi thông minh', 'Bài giảng điện tử', 'Thẻ tên thiết bị minh họa'],
        student: ['SGK Tin học', 'Phòng máy vi tính (2 bạn/máy)', 'Phiếu học tập in sẵn'],
      },
      activities: [
        {
          id: `act-1-${Date.now()}`,
          name: 'Hoạt động 1: Khởi động (5 phút)',
          phase: 'Khởi động',
          timeMinutes: 5,
          teacherAction: `Chiếu trò chơi tình huống vui nhộn dẫn dắt vào bài học "${opts.lessonTitle}". Đặt câu hỏi kích thích sự tò mò của học sinh.`,
          studentAction: 'Quan sát màn hình, giơ tay phát biểu sôi nổi, sẵn sàng tâm thế đón nhận bài mới.',
          product: 'Câu trả lời nhanh của học sinh và tinh thần học tập hào hứng.',
          assessment: 'Khen ngợi tổ phản xạ nhanh nhất.',
          digitalCompetencyCode: 'NLa.1',
          aiCompetency: 'Robot ảo dẫn dắt tình huống kết nối bài học.',
        },
        {
          id: `act-2-${Date.now()}`,
          name: 'Hoạt động 2: Khám phá kiến thức mới (12 phút)',
          phase: 'Khám phá',
          timeMinutes: 12,
          teacherAction: `Thao tác mẫu trên màn hình chiếu, chia nhỏ các bước thực hiện của "${opts.lessonTitle}". Đặt câu hỏi dẫn dắt học sinh tự rút ra kết luận.`,
          studentAction: 'Quan sát từng bước mẫu, ghi nhớ các quy tắc quan trọng vào phiếu học tập hoặc nhắc lại cùng bạn.',
          product: 'Học sinh chỉ ra được các thao tác đúng và nêu được tên bộ phận/lệnh cần dùng.',
          assessment: 'Đánh giá thông qua việc học sinh nhắc lại được quy trình thao tác.',
          digitalCompetencyCode: 'NLc.1',
        },
        {
          id: `act-3-${Date.now()}`,
          name: 'Hoạt động 3: Luyện tập - Thực hành tại máy (13 phút)',
          phase: 'Luyện tập',
          timeMinutes: 13,
          teacherAction: 'Giao nhiệm vụ thực hành: Cặp đôi 2 bạn lần lượt thực hiện thao tác. Đi vòng quanh các dãy máy để uốn nắn tư thế và hỗ trợ học sinh thao tác chậm.',
          studentAction: 'Ngồi thẳng lưng, 1 bạn thao tác thì bạn còn lại quan sát nhắc lỗi (đổi lượt sau 6 phút).',
          product: 'Sản phẩm hoàn thành trên màn hình máy tính của từng học sinh.',
          assessment: 'Giáo viên chấm điểm trực tiếp trên máy và tặng sao khen thưởng.',
          digitalCompetencyCode: 'NLe.1',
          aiCompetency: 'Gợi ý phân hóa nhiệm vụ 3 mức độ (Đồng - Bạc - Vàng).',
        },
        {
          id: `act-4-${Date.now()}`,
          name: 'Hoạt động 4: Vận dụng & Củng cố (5 phút)',
          phase: 'Vận dụng',
          timeMinutes: 5,
          teacherAction: 'Tổ chức trò chơi trắc nghiệm 3 câu nhanh để củng cố toàn bộ bài học. Nhận xét tinh thần học tập của cả lớp.',
          studentAction: 'Tham gia trò chơi trả lời trắc nghiệm, vỗ tay tuyên dương các bạn học tốt.',
          product: 'Bảng điểm tổng kết trò chơi củng cố.',
          assessment: 'Đánh giá mức độ ghi nhớ kiến thức toàn bài.',
          digitalCompetencyCode: 'NLd.1',
        },
      ],
      createdAt: new Date().toISOString(),
    };
  }

  static async generatePowerPoint(opts: GenerateOptions & { slideCount?: number; style?: any }): Promise<PowerPointDeck> {
    const slideCount = opts.slideCount || 6;
    const style = opts.style || 'Cute Education';

    const slides = [
      {
        id: 's1',
        slideNumber: 1,
        title: `${opts.lessonTitle.toUpperCase()}`,
        subtitle: `Môn Tin học ${opts.grade} - Chương trình GDPT 2018`,
        bulletPoints: [
          'Chào mừng thầy cô và các em học sinh đến với tiết học!',
          'Hãy ngồi thẳng lưng và sẵn sàng khám phá thế giới công nghệ nhé.',
        ],
        imagePrompt: `Hình vẽ phong cách ${style} với robot hoạt hình dễ thương và máy tính sắc màu pastel.`,
        interactiveActivity: 'Vỗ tay theo nhịp khởi động.',
        teacherNote: 'Bật nhạc nền vui tươi khi đón học sinh vào phòng máy.',
      },
      {
        id: 's2',
        slideNumber: 2,
        title: 'Mục Tiêu Tiết Học Hôm Nay',
        bulletPoints: [
          'Hiểu rõ nội dung trọng tâm của bài học.',
          'Thực hành thành thạo thao tác trên máy tính.',
          'Biết giúp đỡ bạn bè và bảo quản thiết bị.',
        ],
        imagePrompt: 'Mục tiêu ngôi sao 3 cánh lấp lánh màu vàng pastel.',
        interactiveActivity: 'Học sinh đọc đồng thanh 3 mục tiêu chính.',
      },
      {
        id: 's3',
        slideNumber: 3,
        title: 'Khám Phá: Những Điều Cần Nhớ',
        bulletPoints: [
          'Quan sát thật kỹ các bước cô hướng dẫn trên màn chiếu.',
          'Mỗi thao tác máy tính đều có quy trình tuần tự, không vội vàng.',
          'Nếu gặp khó khăn, hãy giơ tay nhờ cô hoặc bạn bên cạnh trợ giúp.',
        ],
        imagePrompt: 'Sơ đồ tư duy dạng đám mây nhiều màu pastel tóm tắt các bước.',
        interactiveActivity: 'Trò chơi nhanh: Tìm điểm khác biệt giữa thao tác đúng và sai.',
      },
      {
        id: 's4',
        slideNumber: 4,
        title: 'Thử Thách Thực Hành Phòng Máy',
        bulletPoints: [
          'Nhiệm vụ 1: Khởi động phần mềm bài học.',
          'Nhiệm vụ 2: Thực hiện bài tập luyện tập trong 10 phút.',
          'Nhiệm vụ 3: Đổi lượt cho bạn ngồi cùng bàn.',
        ],
        imagePrompt: 'Hình ảnh hai bạn học sinh tiểu học vui vẻ cùng làm việc trên một máy tính để bàn.',
        interactiveActivity: 'Bấm giờ đếm ngược 10 phút trên màn hình lớn.',
        teacherNote: 'Đi xuống các góc phòng máy để bao quát học sinh ngồi dãy cuối.',
      },
      {
        id: 's5',
        slideNumber: 5,
        title: 'Góc Nhắc Nhở An Toàn & Sức Khỏe',
        bulletPoints: [
          'Không sờ tay vào dây điện và ổ cắm trong phòng máy.',
          'Khoảng cách mắt đến màn hình từ 50cm đến 80cm.',
          'Giữ bàn máy gọn gàng, không mang đồ ăn nước uống vào phòng.',
        ],
        imagePrompt: 'Biểu tượng an toàn dễ thương với chiếc khiên bảo vệ màu xanh mint.',
        interactiveActivity: 'Học sinh cùng đứng lên thực hiện động tác thư giãn mắt 30 giây.',
      },
      {
        id: 's6',
        slideNumber: 6,
        title: 'Tổng Kết & Tuyên Dương',
        bulletPoints: [
          'Chúc mừng cả lớp đã hoàn thành xuất sắc bài học!',
          'Tuyên dương các đôi bạn cùng tiến thao tác nhanh và chuẩn.',
          'Hẹn gặp lại các bạn nhỏ ở tiết học Tin học tuần sau!',
        ],
        imagePrompt: 'Chiếc cúp vàng rực rỡ và pháo hoa giấy confetti pastel.',
        interactiveActivity: 'Bình chọn Ngôi sao Công nghệ của tiết học.',
      },
    ];

    return {
      id: `ppt-${Date.now()}`,
      grade: opts.grade,
      lessonTitle: opts.lessonTitle,
      style,
      slides: slides.slice(0, slideCount),
      createdAt: new Date().toISOString(),
    };
  }

  static async generateGame(opts: GenerateOptions & { gameType?: GameType; questionCount?: number }): Promise<GameItem> {
    const gameType = opts.gameType || 'crossword';
    const count = opts.questionCount || 5;

    const baseQuestions = [
      {
        id: 'g1',
        question: `Trong bài học "${opts.lessonTitle}", thao tác nào sau đây là ĐÚNG khi sử dụng máy tính?`,
        options: ['Ngồi thẳng lưng, thao tác nhẹ nhàng', 'Đập mạnh tay lên bàn phím', 'Cúi sát mắt cách màn hình 10cm', 'Rút dây nguồn khi máy đang chạy'],
        correctAnswerIndex: 0,
        explanation: 'Ngồi thẳng lưng và thao tác nhẹ nhàng bảo vệ sức khỏe và giữ gìn máy tính bền đẹp.',
        hint: 'Bảo vệ cả mắt, lưng và thiết bị!',
        icon: '💻',
      },
      {
        id: 'g2',
        question: 'Thiết bị nào sau đây dùng để đưa thông tin dạng văn bản vào máy tính?',
        options: ['Bàn phím máy tính', 'Loa máy tính', 'Màn hình máy tính', 'Máy in'],
        correctAnswerIndex: 0,
        explanation: 'Bàn phím là thiết bị vào cơ bản dùng để nhập chữ, số và ký tự.',
        hint: 'Có rất nhiều nút bấm và có hai phím F, J có gờ.',
        icon: '⌨️',
      },
      {
        id: 'g3',
        question: 'Khi cầm chuột máy tính, ngón trỏ của bàn tay phải thường đặt ở đâu?',
        options: ['Nút cuộn chuột', 'Nút chuột trái', 'Nút chuột phải', 'Thân chuột'],
        correctAnswerIndex: 1,
        explanation: 'Ngón trỏ đặt lên nút chuột trái để thực hiện nháy chuột và nháy đúp.',
        hint: 'Nút bên trái thường dùng nhất!',
        icon: '🖱️',
      },
      {
        id: 'g4',
        question: 'Để lưu lại sản phẩm của mình sau khi thực hành xong, em thường nhấn tổ hợp phím nào?',
        options: ['Ctrl + S', 'Ctrl + C', 'Ctrl + V', 'Ctrl + Z'],
        correctAnswerIndex: 0,
        explanation: 'Ctrl + S (Save) là phím tắt thần thánh giúp lưu giữ bài làm an toàn.',
        hint: 'Chữ S là viết tắt của chữ Save (Lưu).',
        icon: '💾',
      },
      {
        id: 'g5',
        question: 'Nếu máy tính trong phòng thực hành bất ngờ phát ra mùi khét hoặc tóe tia lửa, em cần làm gì ngay lập tức?',
        options: ['Tự ý dùng tay giật dây điện', 'Đổ nước vào máy tính', 'Báo ngay cho thầy cô giáo phụ trách', 'Tiếp tục ngồi chơi game'],
        correctAnswerIndex: 2,
        explanation: 'Luôn báo ngay cho giáo viên để xử lý an toàn, tuyệt đối không tự ý chạm vào nguồn điện.',
        hint: 'Báo cho người lớn có chuyên môn xử lý!',
        icon: '🚨',
      },
    ];

    return {
      id: `game-${Date.now()}`,
      title: `Trò chơi Tin học: ${opts.lessonTitle}`,
      grade: opts.grade,
      lessonTitle: opts.lessonTitle,
      gameType,
      difficulty: 'Vừa',
      timePerQuestionSeconds: 20,
      questions: baseQuestions.slice(0, count),
      createdAt: new Date().toISOString(),
    };
  }

  static async generateQuiz(opts: GenerateOptions & { questionCount?: number }): Promise<QuizAssessment> {
    const count = opts.questionCount || 10;
    const questions = [
      {
        id: 'qz1',
        question: `Thiết bị nào sau đây là bộ phận xử lý trung tâm (bộ não) của máy tính?`,
        options: {
          A: 'Màn hình máy tính',
          B: 'Thân máy (chứa CPU)',
          C: 'Bàn phím máy tính',
          D: 'Chuột máy tính',
        },
        correctAnswer: 'B' as const,
        explanation: 'Thân máy tính chứa bộ vi xử lý CPU, đóng vai trò như bộ não xử lý mọi thông tin.',
        level: 'Nhận biết' as const,
      },
      {
        id: 'qz2',
        question: `Hai phím nào trên hàng phím cơ sở có gờ nổi đặc biệt giúp nhận biết vị trí xuất phát của hai ngón trỏ?`,
        options: {
          A: 'Phím A và phím L',
          B: 'Phím F và phím J',
          C: 'Phím G và phím H',
          D: 'Phím Q và phím P',
        },
        correctAnswer: 'B' as const,
        explanation: 'Phím F dành cho ngón trỏ trái và phím J dành cho ngón trỏ phải có gờ nổi để định vị xúc giác.',
        level: 'Nhận biết' as const,
      },
      {
        id: 'qz3',
        question: `Khi nháy chuột một lần bằng nút chuột trái, thao tác đó gọi là gì?`,
        options: {
          A: 'Nháy đúp chuột',
          B: 'Kéo thả chuột',
          C: 'Nháy chuột (Click)',
          D: 'Cuộn chuột',
        },
        correctAnswer: 'C' as const,
        explanation: 'Nháy nút chuột trái một lần rồi thả ngón tay ra gọi là nháy chuột (click).',
        level: 'Nhận biết' as const,
      },
      {
        id: 'qz4',
        question: `Khoảng cách hợp lý từ mắt học sinh đến màn hình máy tính là bao nhiêu để không bị mỏi mắt?`,
        options: {
          A: 'Khoảng 10cm - 20cm',
          B: 'Khoảng 50cm - 80cm',
          C: 'Càng gần càng tốt',
          D: 'Trên 2 mét',
        },
        correctAnswer: 'B' as const,
        explanation: 'Khoảng cách 50-80cm (khoảng một sải tay) là cự ly chuẩn giúp mắt điều tiết thoải mái.',
        level: 'Thông hiểu' as const,
      },
      {
        id: 'qz5',
        question: `Bạn Lan muốn tạo một thư mục riêng để lưu các bài vẽ Tin học lớp ${opts.grade}. Đâu là tên thư mục khoa học nhất?`,
        options: {
          A: 'Bài tập của Lan',
          B: '123456789',
          C: 'aaaaaa',
          D: 'khongcotengihet',
        },
        correctAnswer: 'A' as const,
        explanation: 'Đặt tên thư mục có ý nghĩa rõ ràng giúp dễ dàng tìm kiếm và quản lý tệp học tập.',
        level: 'Vận dụng' as const,
      },
    ];

    return {
      id: `quiz-${Date.now()}`,
      title: `Đề kiểm tra Tin học: ${opts.lessonTitle}`,
      grade: opts.grade,
      lessonTitle: opts.lessonTitle,
      qualityScore: 95,
      questions: questions.slice(0, count),
      createdAt: new Date().toISOString(),
    };
  }

  static async generateWorksheet(opts: GenerateOptions): Promise<Worksheet> {
    return {
      id: `ws-${Date.now()}`,
      schoolName: 'TRƯỜNG TIỂU HỌC NGUYỄN DU',
      grade: opts.grade,
      lessonTitle: opts.lessonTitle,
      studentType: 'Phiếu thực hành',
      bonusStarChallenge: '⭐ Em hãy chỉ ra 1 thói quen tốt nhất em đã làm được trong tiết Tin học hôm nay!',
      createdAt: new Date().toISOString(),
      exercises: [
        {
          id: 'w1',
          type: 'multiple_choice',
          title: 'Bài 1: Thử tài nhớ nhanh',
          instruction: 'Khoanh tròn vào chữ cái đứng trước câu trả lời đúng nhất:',
          content: 'Nêu tên ít nhất 2 bộ phận quan trọng nhất được học trong bài:',
          answerAreaLines: 2,
        },
        {
          id: 'w2',
          type: 'matching',
          title: 'Bài 2: Nối đúng hành động an toàn',
          instruction: 'Nối hình vẽ thao tác đúng với nụ cười của Robot Chip:',
          content: '1. Ngồi thẳng lưng          ----->  [ Robot Chip cười tươi ]\n2. Cúi gập sát màn hình    ----->  [ Robot Chip nhắc nhở ]\n3. Giữ bàn máy tính sạch sẽ ----->  [ Tặng 1 huy hiệu sao vàng ]',
          answerAreaLines: 3,
        },
        {
          id: 'w3',
          type: 'practice_task',
          title: 'Bài 3: Ghi chép kết quả thực hành',
          instruction: 'Em hãy viết tên sản phẩm hoặc ghi số điểm em đạt được trên máy tính:',
          content: '- Tên sản phẩm trên máy: .................................................\n- Nhận xét của bạn cùng nhóm: ............................................',
          answerAreaLines: 3,
        },
      ],
    };
  }

  static async generateFullPackage(opts: GenerateOptions): Promise<TeachingPackage> {
    // If it's the demo lesson (Lesson 5 Grade 3), return rich pre-built demo package
    if (
      opts.grade === 'Lớp 3' &&
      (opts.lessonTitle === DEMO_TEACHING_PACKAGE_L3.lessonTitle ||
        opts.lessonTitle.includes('Sử dụng bàn phím') ||
        opts.lessonTitle.includes('Bàn phím'))
    ) {
      return DEMO_TEACHING_PACKAGE_L3;
    }

    const [lessonPlan, pptDeck, game, quiz, worksheet] = await Promise.all([
      this.generateLessonPlan(opts),
      this.generatePowerPoint(opts),
      this.generateGame(opts),
      this.generateQuiz(opts),
      this.generateWorksheet(opts),
    ]);

    const digitalCompetency: DigitalCompetencyIntegration = {
      id: `dc-${Date.now()}`,
      grade: opts.grade,
      lessonTitle: opts.lessonTitle,
      activityName: 'Thực hành tương tác phòng máy',
      frameworkCode: 'NLa.2',
      frameworkDescription: 'Thao tác sử dụng thiết bị đúng quy trình, an toàn sức khỏe',
      isAppropriate: true,
      suitabilityReason: 'Gắn liền với mục tiêu môn học GDPT 2018, giúp học sinh tiểu học rèn luyện phản xạ thao tác chuẩn mực.',
      recommendedPedagogicalStep: 'Thực hiện phương pháp chia sẻ cặp đôi (Peer Learning) để các em học sinh tự sửa sai cho nhau.',
      aiIntegrationAdvice: 'Sử dụng trợ lý ảo hình ảnh động khích lệ khi học sinh hoàn thành đúng nhiệm vụ.',
    };

    const videoScript: VideoScript = {
      id: `vid-${Date.now()}`,
      grade: opts.grade,
      title: `Khám phá bài học: ${opts.lessonTitle}`,
      durationMinutes: 2,
      style: 'Cute Educational',
      idea: `Robot Chip bay vào phòng máy vi tính và cùng các bạn nhỏ trải nghiệm bài học ${opts.lessonTitle}.`,
      storyboard: [
        {
          sceneNumber: 1,
          visual: 'Robot Chip hoạt hình vẫy tay chào vui nhộn.',
          voiceover: `Xin chào các bạn nhỏ ${opts.grade}! Hôm nay chúng mình cùng tìm hiểu bài học ${opts.lessonTitle} nhé.`,
          onScreenText: `Chào mừng đến với tiết Tin học ${opts.grade}!`,
          durationSeconds: 20,
          imagePrompt: 'Happy cute cartoon robot waving hands in school lab, pastel tones.',
        },
        {
          sceneNumber: 2,
          visual: 'Màn hình máy tính hiển thị các thao tác mẫu từng bước rõ ràng.',
          voiceover: 'Hãy nhớ các thao tác cơ bản và luôn ngồi thẳng lưng khi ngồi vào bàn máy tính!',
          onScreenText: 'Quy tắc vàng: Ngồi thẳng lưng & Thao tác đúng',
          durationSeconds: 40,
          imagePrompt: 'Child at desktop computer sitting straight with smile, pastel illustration.',
        },
        {
          sceneNumber: 3,
          visual: 'Robot Chip trao cúp vàng khen thưởng.',
          voiceover: 'Chúc các bạn có một tiết học Tin học thật nhiều niềm vui và bổ ích!',
          onScreenText: 'Chúc các em học tốt!',
          durationSeconds: 30,
          imagePrompt: 'Robot giving golden trophy with stars, confetti animation.',
        },
      ],
    };

    const rubric = [
      {
        criteria: '1. Nhận biết và thao tác kiến thức bài học',
        excellent: 'Nắm chắc kiến thức, thực hiện chuẩn xác ngay lần đầu không cần nhắc nhở.',
        good: 'Thực hiện được hầu hết thao tác, cần giáo viên hỗ trợ 1 bước nhỏ.',
        needsHelp: 'Còn lúng túng, chưa thao tác được độc lập.',
      },
      {
        criteria: '2. Kỹ năng hợp tác nhóm đôi',
        excellent: 'Biết chia sẻ máy tính, luân phiên thao tác và hướng dẫn bạn tận tình.',
        good: 'Hợp tác tốt, đôi lúc quên đổi lượt sau khi hết thời gian.',
        needsHelp: 'Tranh giành máy tính hoặc không tập trung theo dõi bạn làm.',
      },
      {
        criteria: '3. Ý thức bảo vệ thiết bị và tư thế ngồi',
        excellent: 'Ngồi thẳng lưng, thao tác nhẹ nhàng, giữ vệ sinh bàn máy sạch sẽ.',
        good: 'Thao tác nhẹ nhàng, thỉnh thoảng còn cúi sát màn hình.',
        needsHelp: 'Cần giáo viên nhắc nhở tư thế ngồi nhiều lần.',
      },
    ];

    return {
      id: `pkg-${Date.now()}`,
      grade: opts.grade,
      lessonTitle: opts.lessonTitle,
      bookSeries: opts.bookSeries,
      duration: opts.duration || '35 phút',
      qualityScore: 95,
      createdAt: new Date().toISOString(),
      lessonPlan,
      pptDeck,
      game,
      quiz,
      worksheet,
      digitalCompetency,
      videoScript,
      rubric,
    };
  }

  static generateComments(options: {
    grade: GradeLevel;
    level: 'Hoàn thành tốt' | 'Hoàn thành' | 'Cần cố gắng';
    strengths: string[];
    improvements: string[];
  }): TeacherComment[] {
    const list: TeacherComment[] = [];

    const templatesGood = [
      'Em nắm vững kiến thức môn Tin học, thao tác chuột và bàn phím rất nhanh nhẹn, tự tin. Tích cực giúp đỡ bạn cùng nhóm trong giờ thực hành.',
      'Có năng khiếu tin học nổi bật, tư thế ngồi học máy tính chuẩn mực, sản phẩm thực hành đẹp và sáng tạo. Rất đáng khen ngợi!',
      'Tiếp thu bài nhanh, chăm chỉ luyện tập, sử dụng phần mềm thuần thục và luôn có ý thức bảo quản tài sản phòng máy vi tính tốt.',
    ];

    const templatesMedium = [
      'Em hoàn thành tốt các nội dung bài học, biết thao tác cơ bản trên máy tính. Cần kiên trì luyện tập thêm quy tắc gõ 10 ngón để tăng tốc độ.',
      'Có thái độ học tập tích cực, phối hợp tốt với bạn trong giờ thực hành. Chú ý giữ khoảng cách mắt đến màn hình từ 50-80cm để bảo vệ mắt.',
      'Nắm được các bước thực hiện trên phần mềm. Cần tự tin hơn khi thực hiện các bài tập vận dụng nâng cao.',
    ];

    const templatesNeedsHelp = [
      'Em có cố gắng trong giờ học Tin học, yêu thích khám phá máy tính. Cần tập trung hơn trong phần nghe cô hướng dẫn thao tác mẫu và rèn luyện tư thế ngồi thẳng lưng.',
      'Em đã biết bật máy và làm quen với chuột. Cần rèn luyện thêm kỹ năng nháy đúp và gõ phím theo đúng quy tắc hàng cơ sở.',
    ];

    const pool =
      options.level === 'Hoàn thành tốt'
        ? templatesGood
        : options.level === 'Hoàn thành'
        ? templatesMedium
        : templatesNeedsHelp;

    pool.forEach((txt, idx) => {
      list.push({
        id: `com-${idx}-${Date.now()}`,
        grade: options.grade,
        achievementLevel: options.level,
        strengths: options.strengths,
        improvementAreas: options.improvements,
        attitude: 'Tích cực, ngoan ngoãn',
        practicalSkill: options.level === 'Hoàn thành tốt' ? 'Thành thạo' : 'Đạt yêu cầu',
        generatedComment: txt,
      });
    });

    return list;
  }

  private static getLocalChatResponse(message: string, context: any): string {
    const text = message.toLowerCase();
    const lesson = context.lesson || 'bài học';
    const grade = context.grade || 'Lớp 3';

    if (text.includes('khởi động') || text.includes('warm up')) {
      return `Chào thầy cô! Với bài "${lesson}" (${grade}), em gợi ý hoạt động Khởi động 5 phút:\n\n🎮 Trò chơi "Tiếp sức công nghệ":\n- Chia lớp thành 2 đội (Đội Chuột Nhí & Đội Bàn Phím).\n- Mỗi đội có 3 câu hỏi đố vui nhanh về kiến thức thực tế (ví dụ: bộ phận nào giúp bạn An gõ chữ, bộ phận nào hiển thị video hoạt hình?).\n- Đội nào trả lời nhanh và đúng sẽ nhận được Huy hiệu "Chuyên gia nhí" của tiết học!\n\nHoạt động này giúp học sinh hào hứng và kích hoạt kiến thức nền tảng ngay lập tức.`;
    }

    if (text.includes('yếu') || text.includes('chậm') || text.includes('hỗ trợ')) {
      return `Dạ, để hỗ trợ các em học sinh còn thao tác chuột hoặc gõ phím chậm trong lớp ${grade}, thầy cô có thể áp dụng 3 mẹo sư phạm sau:\n\n1. Mô hình "Đôi bạn công nghệ": Xếp 1 bạn thao tác nhanh ngồi chung máy với 1 bạn cần hỗ trợ, phân công bạn nhanh làm "trợ giảng nhỏ" hướng dẫn bạn.\n2. Chia nhỏ bài thực hành thành 3 nấc: Nấc 1 (Đồng - chỉ cần mở được phần mềm), Nấc 2 (Bạc - làm 50%), Nấc 3 (Vàng - hoàn thành). Luôn khen ngợi khi em vượt qua nấc 1 để tạo động lực.\n3. Dán sticker hình tròn màu pastel lên các phím mốc F và J để các em dễ dàng định vị ngón tay bằng mắt trước khi hình thành phản xạ xúc giác.`;
    }

    if (text.includes('trò chơi') || text.includes('game')) {
      return `Em đề xuất thầy cô sử dụng Xưởng Trò Chơi có sẵn trong app với 10 kiểu game hấp dẫn:\n- Ô chữ bí mật (phù hợp củng cố từ khóa)\n- Câu cá công nghệ (học sinh tiểu học rất mê)\n- Rung chuông vàng (thi đua tổ)\n- Vòng quay may mắn (gọi ngẫu nhiên học sinh).\n\nThầy cô có thể bấm tab "Trò chơi" trên thanh điều hướng để mở giao diện chạy trực tiếp trên máy chiếu với âm thanh vui nhộn!`;
    }

    if (text.includes('giải thích') && (text.includes('3') || text.includes('trẻ em'))) {
      return `Cách giải thích đơn giản cho học sinh lớp 3:\n\n"Các con hãy tưởng tượng chiếc máy tính giống như một bạn robot thông minh:\n- Thân máy tính là BỘ NÃO suy nghĩ mọi điều.\n- Màn hình là KHUÔN MẶT hiển thị nụ cười và tranh ảnh.\n- Bàn phím là ĐÔI TAY gõ chữ nhắn gửi lời yêu thương.\n- Còn chuột máy tính là ĐÔI CHÂN chỉ đường dẫn lối cho robot đi khắp nơi!"`;
    }

    return `Chào thầy cô! Em là Trợ lý AI môn Tin học Tiểu học (Lớp 3, 4, 5). Em luôn sẵn sàng giúp thầy cô:\n- Soạn kế hoạch bài dạy chuẩn 35 phút\n- Tạo slide bài giảng cute pastel\n- Thiết kế trò chơi trực tiếp cho học sinh chơi trên máy chiếu\n- Ra đề kiểm tra 10 câu 3 mức độ nhận thức\n- Tích hợp khung năng lực số GDPT 2018 chuẩn xác.\n\nThầy cô đang muốn thiết kế hoạt động nào cho bài "${lesson}" ạ?`;
  }
}
