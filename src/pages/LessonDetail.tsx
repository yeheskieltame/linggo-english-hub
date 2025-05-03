
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Volume2, BookOpen, Mic, MessageCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { mockLessons, practiceSentences } from '@/data/mockData';
import { conversationScenarios } from '@/data/conversationScenarios';
import { speakText } from '@/services/textToSpeech';

const LevelsColor = {
  beginner: 'bg-green-100 text-green-800',
  intermediate: 'bg-blue-100 text-blue-800',
  advanced: 'bg-purple-100 text-purple-800',
};

const CefrBadgeColor = {
  'A1': 'bg-slate-100 text-slate-800',
  'A2': 'bg-slate-200 text-slate-800',
  'B1': 'bg-yellow-100 text-yellow-800',
  'B2': 'bg-orange-100 text-orange-800',
  'C1': 'bg-red-100 text-red-800',
  'C2': 'bg-pink-100 text-pink-800',
};

const PathsColor = {
  general: 'bg-green-50 text-green-700',
  business: 'bg-blue-50 text-blue-700',
  academic: 'bg-violet-50 text-violet-700',
};

const LessonDetail = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const [lesson, setLesson] = useState(mockLessons.find(l => l.id === lessonId));
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [activeExampleIndex, setActiveExampleIndex] = useState<number | null>(null);
  
  // Check if this lesson has practice exercises and conversation scenarios
  const hasPracticeExercises = practiceSentences.some(sentence => sentence.lessonId === lessonId);
  const hasConversationScenarios = conversationScenarios.some(scenario => scenario.lessonId === lessonId);
  
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
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Lesson Header */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 relative overflow-hidden bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="w-full md:max-w-2xl">
              <div className="inline-block px-4 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
                English Lesson
              </div>
              <div className="flex items-center gap-2 sm:gap-3 mb-3 flex-wrap">
                <Badge className={LevelsColor[lesson.level]}>
                  {lesson.level.charAt(0).toUpperCase() + lesson.level.slice(1)}
                </Badge>
                <Badge className={CefrBadgeColor[lesson.cefrLevel]}>
                  CEFR {lesson.cefrLevel}
                </Badge>
                <Badge className={PathsColor[lesson.path]}>
                  {lesson.path === 'general' ? 'General English' : 
                   lesson.path === 'business' ? 'Business English' : 
                   'Academic English'}
                </Badge>
                <Badge variant="outline">{lesson.duration}</Badge>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
                  {lesson.title}
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl">
                {lesson.description}
              </p>
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
              <Button 
                asChild 
                className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto"
                size="sm"
              >
                <Link to={`/practice/${lesson.id}`}>
                  <Mic className="mr-2 h-4 w-4" />
                  <span className="sm:inline">Speaking Practice</span>
                </Link>
              </Button>
              {hasConversationScenarios && (
                <Button 
                  asChild 
                  className="bg-blue-500 hover:bg-blue-600 w-full sm:w-auto"
                  size="sm"
                >
                  <Link to={`/conversation/${lesson.id}`}>
                    <MessageCircle className="mr-2 h-4 w-4" />
                    <span className="sm:inline">Conversation</span>
                  </Link>
                </Button>
              )}
            </div>
          </div>
          
          {/* Main Lesson Image */}
          <div className="mt-8 overflow-hidden rounded-lg shadow-lg">
            <img 
              src={lesson.content.sections[0].imageUrl || 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80'} 
              alt={lesson.title}
              className="w-full h-auto max-h-[250px] sm:max-h-[350px] md:max-h-[400px] object-cover rounded-lg hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>
      
      {/* Lesson Content */}
      <section className="py-10 sm:py-12 md:py-16 bg-white flex-grow">
        <div className="container mx-auto px-4 max-w-4xl">
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
          
          <Separator className="my-8 sm:my-12" />
          
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Button 
              variant="outline" 
              asChild 
              className="border-purple-300 text-purple-700 hover:bg-purple-50 w-full sm:w-auto"
              size="sm"
            >
              <Link to="/lessons">
                <BookOpen className="mr-2 h-4 w-4" /> 
                <span className="sm:inline">Back to Lessons</span>
              </Link>
            </Button>
            
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
              {hasPracticeExercises ? (
                <Button 
                  asChild 
                  className="bg-purple-600 hover:bg-purple-700 shadow-sm w-full sm:w-auto"
                  size="sm"
                >
                  <Link to={`/practice/${lesson.id}`}>
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
                  className="bg-blue-500 hover:bg-blue-600 shadow-sm w-full sm:w-auto"
                  size="sm"
                >
                  <Link to={`/conversation/${lesson.id}`}>
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
