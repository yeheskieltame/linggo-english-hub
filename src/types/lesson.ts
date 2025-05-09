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

export interface BaseQuizQuestion {
  id: string;
  question: string;
  type: 'multiple-choice' | 'fill-in-blank' | 'matching' | 'listening' | 'speaking' | 'drag-drop' | 'ordering' | 'image-selection';
  explanation?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  points?: number;
}

export interface MultipleChoiceQuestion extends BaseQuizQuestion {
  type: 'multiple-choice';
  options: string[];
  correctAnswer: string;
  imageUrl?: string;
}

export interface FillInBlankQuestion extends BaseQuizQuestion {
  type: 'fill-in-blank';
  text: string; // Text with blanks marked as [blank1], [blank2], etc.
  answers: Record<string, string>; // e.g., { "blank1": "correct answer" }
}

export interface MatchingQuestion extends BaseQuizQuestion {
  type: 'matching';
  pairs: Array<{
    left: string;
    right: string;
  }>;
}

export interface ListeningQuestion extends BaseQuizQuestion {
  type: 'listening';
  audioUrl: string;
  options: string[];
  correctAnswer: string;
  transcription?: string; // Optional transcription for review
}

export interface SpeakingQuestion extends BaseQuizQuestion {
  type: 'speaking';
  prompt: string;
  expectedPhrases: string[]; // Key phrases that should be included
  sampleAnswer?: string; // Example of a good answer
}

export interface DragDropQuestion extends BaseQuizQuestion {
  type: 'drag-drop';
  items: string[]; // Items to be dragged
  targets: string[]; // Targets where items should be dropped
  correctPairings: Record<string, string>; // Maps items to correct targets
  imageUrl?: string; // Optional background image
}

export interface OrderingQuestion extends BaseQuizQuestion {
  type: 'ordering';
  items: string[]; // Items to be ordered
  correctOrder: number[]; // Correct order of items (indices)
  context?: string; // Context for ordering (e.g. "Order these events chronologically")
}

export interface ImageSelectionQuestion extends BaseQuizQuestion {
  type: 'image-selection';
  imageUrl: string;
  options: string[];
  correctAnswer: string;
  description?: string; // Additional context for the image
}

export type QuizQuestion = 
  | MultipleChoiceQuestion 
  | FillInBlankQuestion 
  | MatchingQuestion 
  | ListeningQuestion 
  | SpeakingQuestion
  | DragDropQuestion
  | OrderingQuestion
  | ImageSelectionQuestion;

export interface PracticalTest {
  id: string;
  title: string;
  description: string;
  type: LessonSkill['type'];
  prompt: string;
  criteria?: string[];
  minScore: number; // Minimum score to pass (0-100)
  sections?: PracticalTestSection[]; // For comprehensive tests with multiple sections
}

export interface PracticalTestSection {
  id: string;
  title: string;
  type: 'listening' | 'speaking' | 'writing' | 'reading' | 'grammar' | 'vocabulary';
  description?: string;
  prompt: string;
  audioUrl?: string; // For listening sections
  imageUrl?: string; // For visual prompts
  text?: string; // For reading sections - text that user needs to read
  hiddenText?: string; // For listening sections - text that will be read by TTS
  criteria?: string[];
  weight: number; // Weight of this section in the overall score (0-100)
}

export interface LessonStructure {
  stages: LessonStage[];
  quizzes: LessonQuiz[];
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
