export type GradeLevel = 'Lớp 3' | 'Lớp 4' | 'Lớp 5';

export type BookSeries = 'Kết nối tri thức' | 'Chân trời sáng tạo' | 'Cánh Diều' | 'Khác';

export type LessonDuration = '35 phút' | '2 tiết (70 phút)' | 'Tùy chỉnh';

export type ClassLevel = 'Cần hỗ trợ' | 'Trung bình' | 'Khá' | 'Không đồng đều';

export interface DeviceSetup {
  projector: boolean;
  teacherPc: boolean;
  studentPc: boolean;
  noPersonalDevice: boolean;
  hasInternet: boolean;
  noInternet: boolean;
}

export interface LessonPlanActivity {
  id: string;
  name: string;
  phase: 'Khởi động' | 'Khám phá' | 'Luyện tập' | 'Vận dụng';
  timeMinutes: number;
  teacherAction: string;
  studentAction: string;
  product: string;
  assessment: string;
  digitalCompetencyCode?: string;
  aiCompetency?: string;
}

export interface LessonPlan {
  id: string;
  grade: GradeLevel;
  title: string;
  bookSeries: BookSeries;
  duration: LessonDuration;
  studentCount: number;
  classLevel: ClassLevel;
  devices: DeviceSetup;
  sourceRestricted: boolean;
  objectives: {
    knowledge: string[];
    ictCompetence: string[];
    qualities: string[];
  };
  tools: {
    teacher: string[];
    student: string[];
  };
  activities: LessonPlanActivity[];
  notes?: string;
  createdAt: string;
}

export interface SlideItem {
  id: string;
  slideNumber: number;
  title: string;
  subtitle?: string;
  bulletPoints: string[];
  imagePrompt: string;
  interactiveActivity?: string;
  teacherNote?: string;
}

export interface PowerPointDeck {
  id: string;
  grade: GradeLevel;
  lessonTitle: string;
  style: 'Cute Education' | 'Computer Science' | 'Notebook' | 'Pastel' | 'Technology';
  slides: SlideItem[];
  createdAt: string;
}

export type GameType =
  | 'crossword'
  | 'fishing'
  | 'spin_wheel'
  | 'golden_bell'
  | 'speed_quiz'
  | 'car_racing'
  | 'rocket_race'
  | 'matching'
  | 'memory_card'
  | 'treasure_hunt';

export interface GameQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  hint?: string;
  icon?: string;
}

export interface GameItem {
  id: string;
  title: string;
  grade: GradeLevel;
  lessonTitle: string;
  gameType: GameType;
  difficulty: 'Dễ' | 'Vừa' | 'Thử thách';
  questions: GameQuestion[];
  timePerQuestionSeconds: number;
  createdAt: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  level: 'Nhận biết' | 'Thông hiểu' | 'Vận dụng';
}

export interface QuizAssessment {
  id: string;
  title: string;
  grade: GradeLevel;
  lessonTitle: string;
  questions: QuizQuestion[];
  qualityScore?: number;
  createdAt: string;
}

export interface WorksheetExercise {
  id: string;
  type: 'multiple_choice' | 'fill_in_blank' | 'matching' | 'practice_task' | 'reflection';
  title: string;
  instruction: string;
  content: string;
  answerAreaLines: number;
  illustrationSuggestion?: string;
}

export interface Worksheet {
  id: string;
  schoolName: string;
  grade: GradeLevel;
  lessonTitle: string;
  studentType: 'Phiếu cá nhân' | 'Phiếu nhóm' | 'Phiếu thực hành' | 'Phiếu củng cố' | 'Phiếu vận dụng';
  exercises: WorksheetExercise[];
  bonusStarChallenge?: string;
  createdAt: string;
}

export interface StudentScoreRecord {
  id: string;
  studentCode: string;
  fullName?: string;
  score: number;
  wrongQuestionIds: string[];
  notes?: string;
}

export interface ClassAnalysisReport {
  grade: GradeLevel;
  className: string;
  testTitle: string;
  totalStudents: number;
  averageScore: number;
  excellentPercent: number;
  goodPercent: number;
  averagePercent: number;
  needsSupportPercent: number;
  hardestQuestions: {
    questionText: string;
    failCount: number;
    errorRate: number;
    recommendedReview: string;
  }[];
  weakKnowledgeAreas: string[];
  supportPlan: string[];
}

export interface TeacherComment {
  id: string;
  grade: GradeLevel;
  achievementLevel: 'Hoàn thành tốt' | 'Hoàn thành' | 'Cần cố gắng';
  strengths: string[];
  improvementAreas: string[];
  attitude: string;
  practicalSkill: string;
  generatedComment: string;
}

export interface DigitalCompetencyIntegration {
  id: string;
  grade: GradeLevel;
  lessonTitle: string;
  activityName: string;
  frameworkCode: string; // e.g. "NLa.3.1"
  frameworkDescription: string;
  isAppropriate: boolean;
  suitabilityReason: string;
  recommendedPedagogicalStep: string;
  aiIntegrationAdvice: string;
}

export interface VideoScript {
  id: string;
  grade: GradeLevel;
  title: string;
  durationMinutes: number;
  style: 'Cute Educational' | 'Technology' | 'Cartoon' | 'Notebook';
  idea: string;
  storyboard: {
    sceneNumber: number;
    visual: string;
    voiceover: string;
    onScreenText: string;
    durationSeconds: number;
    imagePrompt: string;
  }[];
}

export interface TeachingPackage {
  id: string;
  grade: GradeLevel;
  lessonTitle: string;
  bookSeries: BookSeries;
  duration: LessonDuration;
  lessonPlan: LessonPlan;
  pptDeck: PowerPointDeck;
  game: GameItem;
  quiz: QuizAssessment;
  worksheet: Worksheet;
  digitalCompetency: DigitalCompetencyIntegration;
  videoScript: VideoScript;
  rubric: {
    criteria: string;
    excellent: string;
    good: string;
    needsHelp: string;
  }[];
  qualityScore: number;
  createdAt: string;
}

export interface PromptTemplate {
  id: string;
  category: 'Giáo án' | 'PowerPoint' | 'Trò chơi' | 'Câu hỏi' | 'Video' | 'Năng lực số' | 'Đánh giá';
  title: string;
  description: string;
  template: string;
  isFavorite?: boolean;
}

export interface CurriculumLesson {
  id: string; // Stable ID: G3-T1-L01, G4-T5-L10, G5-T5-L08A, G5-T5-L08B...
  grade: GradeLevel;
  gradeNumber: 3 | 4 | 5;
  topicNumber: number; // 1 to 6
  topicTitle: string; // "Chủ đề 1. Máy tính và em"
  topicIcon: string;
  lessonNumber: number; // 1 to 16
  variant?: 'A' | 'B'; // For Grade 5: 8A, 8B, 9A, 9B
  lessonNumberDisplay: string; // "Bài 1", "Bài 8A", "Bài 8B", etc.
  title: string; // E.g. "Thông tin và quyết định"
  fullDisplayTitle: string; // E.g. "Bài 1. Thông tin và quyết định"
  bookSeries: BookSeries;
  objectivesSummary: string;
  recommendedDuration: string;
  hardwareRequirements: string;
}

export interface CurriculumTopic {
  topicNumber: number;
  title: string;
  icon: string;
  grade: GradeLevel;
  lessons: CurriculumLesson[];
}

export interface GradeCurriculum {
  grade: GradeLevel;
  gradeNumber: 3 | 4 | 5;
  totalTopics: number; // 6
  totalNumberedLessons: number; // 16
  topics: CurriculumTopic[];
}

export interface CurriculumValidationReport {
  passed: boolean;
  timestamp: string;
  grades: {
    grade: GradeLevel;
    topicCount: number;
    numberedLessonCount: number;
    hasProperVariants?: boolean;
    hasOutOfBoundLessons: boolean;
    passed: boolean;
    errors: string[];
  }[];
}
