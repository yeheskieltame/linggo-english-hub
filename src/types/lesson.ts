
export interface LessonTag {
  name: string;
  color: string;
}

export interface LessonSkill {
  type: 'reading' | 'writing' | 'speaking' | 'listening' | 'grammar' | 'vocabulary';
  focus: number; // 1-10 scale to show how much this lesson focuses on this skill
}

export interface LessonProgress {
  completed: boolean;
  score?: number;
  lastAccessed?: Date;
}

export interface RelatedLesson {
  id: string;
  title: string;
  type: 'prerequisite' | 'next' | 'remedial' | 'supplementary';
}

export interface LessonPathway {
  id: 'general' | 'business' | 'academic';
  label: string;
  description: string;
  color: string;
}

export interface CefrLevel {
  id: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  label: string;
  description: string;
  color: string;
}

export interface LessonVideoContent {
  youtubeId: string;
  title: string;
  description?: string;
  timestamps?: {
    time: string;
    label: string;
  }[];
}

export interface WritingPrompt {
  topic: string;
  instructions?: string;
  minWords?: number;
  maxWords?: number;
  level: string;
}

// New interfaces for staged learning
export interface LessonStage {
  id: string;
  title: string;
  description?: string;
  content: string;
  videoId?: string;
  imageUrl?: string;
  examples?: {
    english: string;
    indonesian: string;
  }[];
}

export interface LessonQuiz {
  id: string;
  title: string;
  description?: string;
  questions: QuizQuestion[];
  requiredScore: number; // Minimum score to pass (0-100)
  skillType: LessonSkill['type']; // Which skill this quiz tests
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}

export interface PracticalTest {
  id: string;
  title: string;
  description: string;
  type: LessonSkill['type'];
  prompt: string;
  criteria?: string[];
  minScore: number; // Minimum score to pass (0-100)
}

export interface LessonStructure {
  stages: LessonStage[];
  stageQuizzes: LessonQuiz[];
  finalTest: PracticalTest;
}

export const CEFR_LEVELS: {[key: string]: CefrLevel} = {
  'A1': {
    id: 'A1',
    label: 'Beginner',
    description: 'Can understand and use familiar everyday expressions and very basic phrases.',
    color: 'bg-slate-100 text-slate-800'
  },
  'A2': {
    id: 'A2',
    label: 'Elementary',
    description: 'Can understand sentences and frequently used expressions related to areas of most immediate relevance.',
    color: 'bg-slate-200 text-slate-800'
  },
  'B1': {
    id: 'B1',
    label: 'Intermediate',
    description: 'Can deal with most situations likely to arise while traveling in an area where the language is spoken.',
    color: 'bg-yellow-100 text-yellow-800'
  },
  'B2': {
    id: 'B2',
    label: 'Upper Intermediate',
    description: 'Can interact with a degree of fluency and spontaneity that makes regular interaction with native speakers quite possible.',
    color: 'bg-orange-100 text-orange-800'
  },
  'C1': {
    id: 'C1',
    label: 'Advanced',
    description: 'Can express ideas fluently and spontaneously without much obvious searching for expressions.',
    color: 'bg-red-100 text-red-800'
  },
  'C2': {
    id: 'C2',
    label: 'Proficiency',
    description: 'Can express themselves spontaneously, very fluently and precisely, differentiating finer shades of meaning.',
    color: 'bg-pink-100 text-pink-800'
  }
};

export const PATHWAYS: {[key: string]: LessonPathway} = {
  'general': {
    id: 'general',
    label: 'General English',
    description: 'Everyday communication and common situations',
    color: 'bg-green-50 text-green-700'
  },
  'business': {
    id: 'business',
    label: 'Business English',
    description: 'Professional communication in workplace settings',
    color: 'bg-blue-50 text-blue-700'
  },
  'academic': {
    id: 'academic',
    label: 'Academic English',
    description: 'Research, study, and academic discussion',
    color: 'bg-violet-50 text-violet-700'
  }
};

export const SKILL_COLORS: {[key: string]: string} = {
  'reading': 'bg-blue-100 text-blue-800',
  'writing': 'bg-green-100 text-green-800',
  'speaking': 'bg-purple-100 text-purple-800',
  'listening': 'bg-amber-100 text-amber-800',
  'grammar': 'bg-red-100 text-red-800',
  'vocabulary': 'bg-indigo-100 text-indigo-800'
};
