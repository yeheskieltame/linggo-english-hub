import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Volume2, BookOpen, Mic, MessageCircle, Headphones, BookOpenText, ArrowLeft, Star, Info, Edit, List, Youtube } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { mockLessons, practiceSentences } from '@/data/mockData';
import { conversationScenarios } from '@/data/conversationScenarios';
import { listeningActivities } from '@/data/listeningActivities';
import { readingActivities } from '@/data/readingActivities';
import { speakText } from '@/services/textToSpeech';
import { CEFR_LEVELS, PATHWAYS } from '@/types/lesson';
import LessonNavigation from '@/components/LessonNavigation';
import LessonSkillFocus from '@/components/LessonSkillFocus';
import CefrLevelExplainer from '@/components/CefrLevelExplainer';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import WritingAnalysis from '@/components/WritingAnalysis';
import { useAuth } from '@/providers/AuthProvider';
import { useToast } from '@/hooks/use-toast';

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

// Define mock YouTube video IDs
const mockYouTubeVideoIds = {
  'l1': 'GrPkuk1ezyo', // Basic English Grammar
  'l2': 'BPEqG9cZP8o', // Common English Phrases
  'l3': 'bPlO19Z4RWk', // Advanced Reading Comprehension
  'l4': 'u9CPQ5RQN9g', // Listening Skills 
  'l5': 'WbJFRr0cw7s'  // Academic Writing
};

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
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [activeExampleIndex, setActiveExampleIndex] = useState<number | null>(null);
  const [showCefrExplainer, setShowCefrExplainer] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('content');
  const { user } = useAuth();
  const { toast } = useToast();
  
  // Check if this lesson has different types of activities
  const hasPracticeExercises = practiceSentences.some(sentence => sentence.lessonId === lessonId);
  const hasConversationScenarios = conversationScenarios.some(scenario => scenario.lessonId === lessonId);
  const hasListeningActivities = listeningActivities.some(activity => activity.lessonId === lessonId);
  const hasReadingActivities = readingActivities.some(activity => activity.lessonId === lessonId);
  const hasYouTubeVideo = lessonId && mockYouTubeVideoIds[lessonId as keyof typeof mockYouTubeVideoIds];
  const hasWritingPrompt = lessonId && mockWritingPrompts[lessonId as keyof typeof mockWritingPrompts];
  
  // Get the first activity ID of each type for this lesson
  const firstListeningActivityId = hasListeningActivities 
    ? listeningActivities.find(activity => activity.lessonId === lessonId)?.id 
    : null;
  const firstReadingActivityId = hasReadingActivities 
    ? readingActivities.find(activity => activity.lessonId === lessonId)?.id 
    : null;
  
  useEffect(() => {
    if (!lesson) {
      // If lesson not found, could redirect or show error
      console.error('Lesson not found');
    }
    
    // Scroll to top when lesson loads
    window.scrollTo(0, 0);
  }, [lesson]);
  
  const handleSpeak = async (text: string, index?: number) => {
    if (isSpeaking) return;
    
    try {
      setIsSpeaking(true);
      if (index !== undefined) {
        setActiveExampleIndex(index);
      }
      
      await speakText(text);
    } catch (error) {
      console.error('Error speaking text:', error);
    } finally {
      setIsSpeaking(false);
      setActiveExampleIndex(null);
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
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Lesson not found</h2>
            <Link to="/lessons">
              <Button>Back to Lessons</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  const lessonSkills = mockSkills[lesson.id] || defaultSkills;
  const cefrLevel = CEFR_LEVELS[lesson.cefrLevel];
  const pathwayInfo = PATHWAYS[lesson.path];
  const youtubeVideoId = mockYouTubeVideoIds[lesson.id as keyof typeof mockYouTubeVideoIds];
  const writingPrompt = mockWritingPrompts[lesson.id as keyof typeof mockWritingPrompts];
  
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
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        variant="ghost" 
                        className="p-0 h-auto text-gray-500 hover:text-purple-700" 
                        onClick={() => setShowCefrExplainer(!showCefrExplainer)}
                      >
                        <Info className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Click to learn more about this CEFR level</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                
                <Badge className={pathwayInfo.color}>
                  {pathwayInfo.label}
                </Badge>
                <Badge variant="outline">{lesson.duration}</Badge>
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
            <div className="flex flex-wrap gap-2 sm:gap-3 mt-2 md:mt-0 md:flex-col md:items-start lg:flex-row">
              <Button 
                variant="outline" 
                onClick={() => handleSpeak(lesson.title)} 
                className="border-purple-300 text-purple-700 hover:bg-purple-50 w-full sm:w-auto"
                size="sm"
                title="Listen to lesson title"
              >
                <Volume2 className="mr-2 h-4 w-4" />
                <span className="sm:inline">Listen</span>
              </Button>
              
              {hasListeningActivities && (
                <Button 
                  asChild 
                  className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto"
                  size="sm"
                  onClick={() => handleActivityClick('listening')}
                >
                  <Link to={user ? `/listening/${firstListeningActivityId}` : "/auth"}>
                    <Headphones className="mr-2 h-4 w-4" />
                    <span className="sm:inline">Listening Practice</span>
                  </Link>
                </Button>
              )}
              
              {hasReadingActivities && (
                <Button 
                  asChild 
                  className="bg-emerald-600 hover:bg-emerald-700 w-full sm:w-auto"
                  size="sm"
                  onClick={() => handleActivityClick('reading')}
                >
                  <Link to={user ? `/reading/${firstReadingActivityId}` : "/auth"}>
                    <BookOpenText className="mr-2 h-4 w-4" />
                    <span className="sm:inline">Reading Practice</span>
                  </Link>
                </Button>
              )}
              
              <Button 
                asChild 
                className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto"
                size="sm"
                onClick={() => handleActivityClick('speaking')}
              >
                <Link to={user ? `/practice/${lesson.id}` : "/auth"}>
                  <Mic className="mr-2 h-4 w-4" />
                  <span className="sm:inline">Speaking Practice</span>
                </Link>
              </Button>
              
              {hasWritingPrompt && (
                <Button 
                  className="bg-orange-500 hover:bg-orange-600 w-full sm:w-auto"
                  size="sm"
                  onClick={() => {
                    if (handleActivityClick('writing')) {
                      setActiveTab('writing');
                    }
                  }}
                >
                  <Edit className="mr-2 h-4 w-4" />
                  <span className="sm:inline">Writing Practice</span>
                </Button>
              )}
              
              {hasConversationScenarios && (
                <Button 
                  asChild 
                  className="bg-indigo-500 hover:bg-indigo-600 w-full sm:w-auto"
                  size="sm"
                  onClick={() => handleActivityClick('conversation')}
                >
                  <Link to={user ? `/conversation/${lesson.id}` : "/auth"}>
                    <MessageCircle className="mr-2 h-4 w-4" />
                    <span className="sm:inline">Conversation</span>
                  </Link>
                </Button>
              )}
            </div>
          </div>
          
          {/* Main Lesson Content */}
          <div className="mt-8">
            {hasYouTubeVideo ? (
              <YouTubeEmbed 
                videoId={youtubeVideoId || ''} 
                title={lesson.title}
                className="w-full max-w-4xl mx-auto shadow-lg"
              />
            ) : (
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={lesson.content.sections[0].imageUrl || 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80'} 
                  alt={lesson.title}
                  className="w-full h-auto max-h-[250px] sm:max-h-[350px] md:max-h-[400px] object-cover rounded-lg hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Lesson Content Tabs */}
      <section className="py-10 sm:py-12 md:py-16 bg-white flex-grow">
        <div className="container mx-auto px-4 max-w-4xl">
          <Tabs defaultValue="content" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 mb-8">
              <TabsTrigger value="content" className="flex items-center gap-2">
                <BookOpenText className="h-4 w-4" />
                <span>Lesson Content</span>
              </TabsTrigger>
              
              {hasYouTubeVideo && (
                <TabsTrigger value="video" className="flex items-center gap-2">
                  <Youtube className="h-4 w-4" />
                  <span>Video</span>
                </TabsTrigger>
              )}
              
              {hasWritingPrompt && user && (
                <TabsTrigger value="writing" className="flex items-center gap-2">
                  <Edit className="h-4 w-4" />
                  <span>Writing Practice</span>
                </TabsTrigger>
              )}
            </TabsList>
            
            <TabsContent value="content" className="mt-0">
              {lesson.content.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-12 md:mb-16">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4 text-purple-700">{section.title}</h2>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleSpeak(section.text)}
                      disabled={isSpeaking}
                      className="text-purple-600 hover:bg-purple-50 mb-4"
                      title="Listen to this section"
                    >
                      <Volume2 className="h-4 w-4" />
                      <span className="sr-only">Listen</span>
                    </Button>
                  </div>
                  
                  {section.imageUrl && (
                    <div className="mb-6 overflow-hidden rounded-lg shadow-md">
                      <img 
                        src={section.imageUrl} 
                        alt={section.title} 
                        className="w-full h-auto object-cover rounded-lg hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  
                  <p className="text-gray-700 mb-8 text-base sm:text-lg leading-relaxed">{section.text}</p>
                  
                  {section.examples && section.examples.length > 0 && (
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-4 sm:p-6 md:p-8 shadow-sm">
                      <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-purple-700">Examples</h3>
                      <div className="space-y-4">
                        {section.examples.map((example, index) => (
                          <Card 
                            key={index} 
                            className={`border-none shadow-sm transition-all hover:shadow-md ${
                              activeExampleIndex === index ? 'bg-purple-50 border-l-4 border-purple-400' : 'bg-white'
                            }`}
                          >
                            <CardContent className="p-3 sm:p-5">
                              <div className="flex justify-between items-start mb-2 gap-2">
                                <p className="font-medium text-gray-800 text-sm sm:text-base flex-1">{example.english}</p>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="ml-1 text-purple-600 hover:bg-purple-50 flex-shrink-0"
                                  onClick={() => handleSpeak(example.english, index)}
                                  disabled={isSpeaking}
                                  title="Listen to example"
                                >
                                  <Volume2 className="h-4 w-4" />
                                  <span className="sr-only">Listen</span>
                                </Button>
                              </div>
                              <p className="text-gray-600 text-sm sm:text-base">{example.indonesian}</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </TabsContent>
            
            {hasYouTubeVideo && (
              <TabsContent value="video" className="mt-0">
                <div className="mb-8">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 text-purple-700">Video Lesson: {lesson.title}</h2>
                  <p className="text-gray-700 mb-6">Watch this video tutorial to learn more about {lesson.title.toLowerCase()}.</p>
                  
                  <YouTubeEmbed 
                    videoId={youtubeVideoId || ''} 
                    title={lesson.title}
                    className="w-full shadow-lg"
                  />
                  
                  <div className="mt-8 p-6 bg-purple-50 rounded-xl">
                    <h3 className="text-lg font-semibold mb-3 text-purple-700">Video Notes</h3>
                    <p className="text-gray-700 mb-4">This video covers the main concepts of {lesson.title.toLowerCase()}, including:</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      {lesson.content.sections.map((section, index) => (
                        <li key={index}>{section.title}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
            )}
            
            {hasWritingPrompt && (
              <TabsContent value="writing" className="mt-0">
                {user ? (
                  <WritingAnalysis 
                    topic={writingPrompt?.topic || 'General Writing Practice'} 
                    level={lesson.cefrLevel}
                    instructions={writingPrompt?.instructions}
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
          
          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <Button 
              variant="outline" 
              asChild 
              className="border-purple-300 text-purple-700 hover:bg-purple-50 w-full sm:w-auto"
              size="sm"
            >
              <Link to="/lessons">
                <List className="mr-2 h-4 w-4" /> 
                <span className="sm:inline">Back to Lessons</span>
              </Link>
            </Button>
            
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
              {hasListeningActivities ? (
                <Button 
                  asChild 
                  className="bg-blue-600 hover:bg-blue-700 shadow-sm w-full sm:w-auto"
                  size="sm"
                  onClick={() => handleActivityClick('listening')}
                >
                  <Link to={user ? `/listening/${firstListeningActivityId}` : "/auth"}>
                    <Headphones className="mr-2 h-4 w-4" /> 
                    <span className="sm:inline">Listening Practice</span>
                  </Link>
                </Button>
              ) : null}
              
              {hasReadingActivities ? (
                <Button 
                  asChild 
                  className="bg-emerald-600 hover:bg-emerald-700 shadow-sm w-full sm:w-auto"
                  size="sm"
                  onClick={() => handleActivityClick('reading')}
                >
                  <Link to={user ? `/reading/${firstReadingActivityId}` : "/auth"}>
                    <BookOpenText className="mr-2 h-4 w-4" /> 
                    <span className="sm:inline">Reading Practice</span>
                  </Link>
                </Button>
              ) : null}
              
              {hasPracticeExercises ? (
                <Button 
                  asChild 
                  className="bg-purple-600 hover:bg-purple-700 shadow-sm w-full sm:w-auto"
                  size="sm"
                  onClick={() => handleActivityClick('speaking')}
                >
                  <Link to={user ? `/practice/${lesson.id}` : "/auth"}>
                    <Mic className="mr-2 h-4 w-4" /> 
                    <span className="sm:inline">Speaking Practice</span>
                  </Link>
                </Button>
              ) : (
                <Button 
                  disabled 
                  className="shadow-sm w-full sm:w-auto"
                  size="sm"
                >
                  <Mic className="mr-2 h-4 w-4" /> 
                  <span className="sm:inline">No Speaking Practice</span>
                </Button>
              )}
              
              {hasConversationScenarios ? (
                <Button 
                  asChild 
                  className="bg-indigo-500 hover:bg-indigo-600 shadow-sm w-full sm:w-auto"
                  size="sm"
                  onClick={() => handleActivityClick('conversation')}
                >
                  <Link to={user ? `/conversation/${lesson.id}` : "/auth"}>
                    <MessageCircle className="mr-2 h-4 w-4" /> 
                    <span className="sm:inline">Conversation</span>
                  </Link>
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default LessonDetail;
