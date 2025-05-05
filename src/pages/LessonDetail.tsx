
import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Info, BookOpen, Mic, MessageCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { mockLessons } from '@/data/mockData';
import { conversationScenarios } from '@/data/conversationScenarios';
import { CEFR_LEVELS, PATHWAYS } from '@/types/lesson';
import LessonNavigation from '@/components/LessonNavigation';
import LessonSkillFocus from '@/components/LessonSkillFocus';
import CefrLevelExplainer from '@/components/CefrLevelExplainer';
import WritingAnalysis from '@/components/WritingAnalysis';
import LessonStageList from '@/components/LessonStageList';
import LessonStageContent from '@/components/LessonStageContent';
import LessonQuiz from '@/components/LessonQuiz';
import PracticalTest from '@/components/PracticalTest';
import { getLessonStageData } from '@/data/lessonStagesData';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/providers/AuthProvider';

// Define mock skills for demonstration
const mockSkills = {
  'l1': [
    { type: 'grammar', focus: 8 },
    { type: 'vocabulary', focus: 7 },
    { type: 'speaking', focus: 5 },
    { type: 'listening', focus: 4 }
  ],
  'l2': [
    { type: 'speaking', focus: 9 },
    { type: 'listening', focus: 8 },
    { type: 'vocabulary', focus: 6 }
  ],
  'l3': [
    { type: 'reading', focus: 9 },
    { type: 'writing', focus: 8 },
    { type: 'grammar', focus: 7 }
  ],
  'l4': [
    { type: 'listening', focus: 8 },
    { type: 'speaking', focus: 7 },
    { type: 'vocabulary', focus: 6 }
  ],
  'l5': [
    { type: 'writing', focus: 9 },
    { type: 'grammar', focus: 8 },
    { type: 'vocabulary', focus: 7 }
  ]
} as {[key: string]: any[]};

// Default skills if none are mapped
const defaultSkills = [
  { type: 'grammar', focus: 6 },
  { type: 'vocabulary', focus: 6 },
  { type: 'speaking', focus: 5 }
];

// Define mock writing prompts
const mockWritingPrompts = {
  'l1': {
    topic: 'My Daily Routine',
    instructions: 'Write about your typical day using simple present tense verbs.'
  },
  'l2': {
    topic: 'A Recent Trip',
    instructions: 'Describe a place you visited recently using past tense.'
  },
  'l3': {
    topic: 'The Benefits of Learning English',
    instructions: 'Write a persuasive paragraph about why learning English is important.'
  },
  'l4': {
    topic: 'Technology in Education',
    instructions: 'Discuss how technology has changed education in recent years.'
  },
  'l5': {
    topic: 'Environmental Challenges',
    instructions: 'Write an academic paragraph about environmental issues facing your country.'
  }
};

const LessonDetail = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const [lesson, setLesson] = useState(mockLessons.find(l => l.id === lessonId));
  const [showCefrExplainer, setShowCefrExplainer] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('stages');
  const { user } = useAuth();
  const { toast } = useToast();
  
  // Stage-based learning states
  const [currentStageId, setCurrentStageId] = useState<string>('');
  const [completedStages, setCompletedStages] = useState<string[]>([]);
  const [currentView, setCurrentView] = useState<'list' | 'stage' | 'quiz' | 'final-test'>('list');
  const [currentQuizId, setCurrentQuizId] = useState<string>('');
  const [hasCompletedLesson, setHasCompletedLesson] = useState(false);
  
  // Get stages data for current lesson
  const stagesData = lessonId ? getLessonStageData(lessonId) : getLessonStageData('default');

  // Handle Quiz for conversation scenarios
  const hasConversationScenarios = conversationScenarios.some(scenario => scenario.lessonId === lessonId);
  const hasWritingPrompt = lessonId && mockWritingPrompts[lessonId as keyof typeof mockWritingPrompts];
  
  useEffect(() => {
    if (!lesson) {
      // If lesson not found, could redirect or show error
      console.error('Lesson not found');
    }
    
    // Scroll to top when lesson loads
    window.scrollTo(0, 0);
    
    // Set initial stage if available
    if (stagesData.stages.length > 0 && !currentStageId) {
      setCurrentStageId(stagesData.stages[0].id);
    }
    
    // Load progress from local storage
    const savedProgress = localStorage.getItem(`lesson_progress_${lessonId}`);
    if (savedProgress) {
      try {
        const progress = JSON.parse(savedProgress);
        setCompletedStages(progress.completedStages || []);
        setHasCompletedLesson(progress.completed || false);
        
        // If user has started but not completed, go to last incomplete stage
        if (!progress.completed && progress.completedStages && progress.completedStages.length > 0) {
          // Find first uncompleted stage
          for (const stage of stagesData.stages) {
            if (!progress.completedStages.includes(stage.id)) {
              setCurrentStageId(stage.id);
              break;
            }
          }
        }
      } catch (e) {
        console.error('Error parsing saved progress:', e);
      }
    }
  }, [lesson, lessonId, stagesData, currentStageId]);
  
  const handleStageSelect = (stageId: string) => {
    setCurrentStageId(stageId);
    setCurrentView('stage');
  };
  
  const handleQuizSelect = (quizId: string) => {
    // Check if the previous stage is completed
    const quizStageId = quizId.split('-quiz')[0];
    
    if (!completedStages.includes(quizStageId)) {
      toast({
        title: "Stage not completed",
        description: "You need to complete the previous stage before taking this quiz",
        variant: "destructive"
      });
      return;
    }
    
    setCurrentQuizId(quizId);
    setCurrentView('quiz');
  };
  
  const handleFinalTestSelect = () => {
    // Check if all stages are completed
    const allStagesCompleted = stagesData.stages.every(stage => 
      completedStages.includes(stage.id) && stagesData.quizzes.every(quiz => 
        completedStages.includes(quiz.id)
      )
    );
    
    if (!allStagesCompleted) {
      toast({
        title: "Stages not completed",
        description: "You need to complete all stages and quizzes before taking the final test",
        variant: "destructive"
      });
      return;
    }
    
    setCurrentView('final-test');
  };
  
  const handleStageComplete = (stageId: string) => {
    if (!completedStages.includes(stageId)) {
      const newCompletedStages = [...completedStages, stageId];
      setCompletedStages(newCompletedStages);
      
      // Save progress to local storage
      localStorage.setItem(`lesson_progress_${lessonId}`, JSON.stringify({
        completedStages: newCompletedStages,
        completed: hasCompletedLesson
      }));
      
      // Find next stage or quiz
      const stageIndex = stagesData.stages.findIndex(s => s.id === stageId);
      const nextStage = stagesData.stages[stageIndex + 1];
      const currentStageQuiz = stagesData.quizzes.find(q => q.id.includes(stageId));
      
      if (currentStageQuiz) {
        // If there's a quiz for this stage, show it next
        setCurrentQuizId(currentStageQuiz.id);
        setCurrentView('quiz');
        
        toast({
          title: "Stage completed!",
          description: "Now let's test your understanding with a quiz",
        });
      } else if (nextStage) {
        // If there's a next stage, show it
        setCurrentStageId(nextStage.id);
        
        toast({
          title: "Stage completed!",
          description: "Moving to the next stage",
        });
      } else {
        // If this was the last stage, return to list view
        setCurrentView('list');
        
        toast({
          title: "Stage completed!",
          description: "You've completed all content stages",
        });
      }
    }
  };
  
  const handleQuizComplete = (score: number, passed: boolean) => {
    if (passed && currentQuizId) {
      // Add quiz to completed stages
      const newCompletedStages = [...completedStages, currentQuizId];
      setCompletedStages(newCompletedStages);
      
      // Save progress to local storage
      localStorage.setItem(`lesson_progress_${lessonId}`, JSON.stringify({
        completedStages: newCompletedStages,
        completed: hasCompletedLesson
      }));
      
      // Find stage ID from quiz ID (assumes format 'stageId-quiz')
      const stageId = currentQuizId.split('-quiz')[0];
      const stageIndex = stagesData.stages.findIndex(s => s.id === stageId);
      const nextStage = stagesData.stages[stageIndex + 1];
      
      setTimeout(() => {
        if (nextStage) {
          // If there's a next stage, show it
          setCurrentStageId(nextStage.id);
          setCurrentView('stage');
          
          toast({
            title: "Quiz passed!",
            description: "Moving to the next stage",
          });
        } else {
          // If this was the last quiz, return to list view
          setCurrentView('list');
          
          toast({
            title: "Quiz passed!",
            description: "You've completed all quizzes. Ready for the final test?",
          });
        }
      }, 3000);
    }
  };
  
  const handleFinalTestComplete = (score: number, passed: boolean) => {
    if (passed) {
      setHasCompletedLesson(true);
      
      // Save progress to local storage
      localStorage.setItem(`lesson_progress_${lessonId}`, JSON.stringify({
        completedStages,
        completed: true
      }));
      
      toast({
        title: "Congratulations!",
        description: "You've successfully completed this lesson!",
      });
      
      // Return to the list view after a delay
      setTimeout(() => {
        setCurrentView('list');
      }, 3000);
    }
  };
  
  const handleActivityClick = (activityType: string) => {
    if (!user) {
      toast({
        title: "Login Required",
        description: "Please login to access this learning activity",
        variant: "destructive"
      });
      return false;
    }
    return true;
  };
  
  if (!lesson) {
    return <Navigate to="/lessons" replace />;
  }
  
  const lessonSkills = mockSkills[lesson.id] || defaultSkills;
  const cefrLevel = CEFR_LEVELS[lesson.cefrLevel];
  const pathwayInfo = PATHWAYS[lesson.path];
  const writingPrompt = mockWritingPrompts[lesson.id as keyof typeof mockWritingPrompts];
  
  // Find current stage and quiz
  const currentStage = stagesData.stages.find(stage => stage.id === currentStageId);
  const currentQuiz = stagesData.quizzes.find(quiz => quiz.id === currentQuizId);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Lesson Header */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 relative overflow-hidden bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center mb-6 text-sm">
            <Link to="/lessons" className="text-gray-600 hover:text-purple-700 flex items-center">
              <ArrowLeft className="mr-1 h-3 w-3" /> Back to Lessons
            </Link>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="w-full md:max-w-2xl">
              <div className="inline-block px-4 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
                English Lesson
              </div>
              <div className="flex items-center gap-2 sm:gap-3 mb-3 flex-wrap">
                <Badge className={cefrLevel.color}>
                  CEFR {lesson.cefrLevel} - {CEFR_LEVELS[lesson.cefrLevel].label}
                </Badge>
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-gray-500 hover:text-purple-700" 
                  onClick={() => setShowCefrExplainer(!showCefrExplainer)}
                >
                  <Info className="h-4 w-4" />
                </Button>
                
                <Badge className={pathwayInfo.color}>
                  {pathwayInfo.label}
                </Badge>
                <Badge variant="outline">{lesson.duration}</Badge>
                
                {hasCompletedLesson && (
                  <Badge className="bg-green-100 text-green-800">
                    Completed
                  </Badge>
                )}
              </div>
              
              {showCefrExplainer && (
                <div className="mb-6">
                  <CefrLevelExplainer level={lesson.cefrLevel as any} expanded={true} />
                </div>
              )}
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
                  {lesson.title}
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl">
                {lesson.description}
              </p>
              
              {/* Skill Focus Section */}
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Skill Focus:</h3>
                <LessonSkillFocus skills={lessonSkills as any} />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Lesson Content Tabs */}
      <section className="py-10 sm:py-12 md:py-16 bg-white flex-grow">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="stages" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 mb-8">
              <TabsTrigger value="stages" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span>Lesson Stages</span>
              </TabsTrigger>
              
              {hasConversationScenarios && (
                <TabsTrigger value="conversation" className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>Conversation</span>
                </TabsTrigger>
              )}
              
              {hasWritingPrompt && (
                <TabsTrigger value="writing" className="flex items-center gap-2">
                  <Mic className="h-4 w-4" />
                  <span>Writing Practice</span>
                </TabsTrigger>
              )}
            </TabsList>
            
            <TabsContent value="stages" className="mt-0">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Left sidebar - stages list */}
                <div className="w-full md:w-1/3">
                  <Card className="p-4">
                    <LessonStageList 
                      stages={stagesData.stages}
                      quizzes={stagesData.quizzes}
                      finalTest={stagesData.finalTest}
                      completedStages={completedStages}
                      currentStageId={
                        currentView === 'stage' ? currentStageId : 
                        currentView === 'quiz' ? currentQuizId : 
                        currentView === 'final-test' ? 'final-test' : 
                        currentStageId
                      }
                      onSelectStage={handleStageSelect}
                      onSelectQuiz={handleQuizSelect}
                      onSelectFinalTest={handleFinalTestSelect}
                    />
                  </Card>
                </div>
                
                {/* Right content area - stage content, quiz, or test */}
                <div className="w-full md:w-2/3">
                  {currentView === 'list' && (
                    <div className="text-center py-8">
                      <h2 className="text-xl font-semibold mb-4">Select a stage from the menu to begin</h2>
                      <p className="text-gray-600 mb-6">Work through each stage and pass the quizzes to complete the lesson.</p>
                      
                      {stagesData.stages.length > 0 && (
                        <Button onClick={() => handleStageSelect(stagesData.stages[0].id)}>
                          Start with {stagesData.stages[0].title}
                        </Button>
                      )}
                    </div>
                  )}
                  
                  {currentView === 'stage' && currentStage && (
                    <LessonStageContent 
                      stage={currentStage}
                      onComplete={handleStageComplete}
                    />
                  )}
                  
                  {currentView === 'quiz' && currentQuiz && (
                    <LessonQuiz 
                      quiz={currentQuiz}
                      onComplete={handleQuizComplete}
                    />
                  )}
                  
                  {currentView === 'final-test' && (
                    <PracticalTest 
                      test={stagesData.finalTest}
                      onComplete={handleFinalTestComplete}
                    />
                  )}
                </div>
              </div>
            </TabsContent>
            
            {hasConversationScenarios && (
              <TabsContent value="conversation" className="mt-0">
                <div className="text-center py-10">
                  <h3 className="text-xl font-semibold mb-4">Conversation Practice</h3>
                  <p className="text-gray-600 mb-6">Practice your English conversation skills with our AI conversation partner.</p>
                  <Button 
                    asChild 
                    className="bg-indigo-500 hover:bg-indigo-600 shadow-sm"
                    onClick={() => handleActivityClick('conversation')}
                  >
                    <Link to={user ? `/conversation/${lesson.id}` : "/auth"}>
                      <MessageCircle className="mr-2 h-4 w-4" /> 
                      <span>Start Conversation Practice</span>
                    </Link>
                  </Button>
                </div>
              </TabsContent>
            )}
            
            {hasWritingPrompt && (
              <TabsContent value="writing" className="mt-0">
                {user ? (
                  <WritingAnalysis 
                    topic={writingPrompt.topic} 
                    level={lesson.cefrLevel}
                    instructions={writingPrompt.instructions}
                  />
                ) : (
                  <div className="text-center py-10">
                    <h3 className="text-xl font-semibold mb-4">Login Required</h3>
                    <p className="text-gray-600 mb-6">Please log in to access the writing practice feature.</p>
                    <Button asChild>
                      <Link to="/auth">Login or Register</Link>
                    </Button>
                  </div>
                )}
              </TabsContent>
            )}
          </Tabs>
          
          <Separator className="my-8 sm:my-12" />
          
          {/* Lesson Navigation */}
          <LessonNavigation currentLessonId={lesson.id} />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default LessonDetail;
