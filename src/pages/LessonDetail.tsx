
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Volume2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { mockLessons } from '@/data/mockData';
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
      <section className="pt-28 pb-12 bg-linggo-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2 flex-wrap">
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
              <h1 className="text-3xl md:text-4xl font-bold mb-3">{lesson.title}</h1>
              <p className="text-lg text-gray-600 max-w-2xl">
                {lesson.description}
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={() => handleSpeak(lesson.title)}>
                <Volume2 className="mr-2 h-4 w-4" />
                Listen
              </Button>
              <Button asChild>
                <Link to={`/practice/${lesson.id}`}>
                  Start Practice
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Lesson Content */}
      <section className="py-12 bg-white flex-grow">
        <div className="container mx-auto px-4 max-w-4xl">
          {lesson.content.sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-12">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => handleSpeak(section.text)}
                  disabled={isSpeaking}
                >
                  <Volume2 className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-gray-700 mb-6">{section.text}</p>
              
              {section.examples && section.examples.length > 0 && (
                <div className="bg-linggo-light rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Examples</h3>
                  <div className="space-y-4">
                    {section.examples.map((example, index) => (
                      <Card 
                        key={index} 
                        className={`border-none shadow-sm transition-colors ${
                          activeExampleIndex === index ? 'bg-linggo-primary/5 border-linggo-primary' : ''
                        }`}
                      >
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-1">
                            <p className="font-medium">{example.english}</p>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="ml-2"
                              onClick={() => handleSpeak(example.english, index)}
                              disabled={isSpeaking}
                            >
                              <Volume2 className="h-4 w-4" />
                            </Button>
                          </div>
                          <p className="text-gray-600 text-sm">{example.indonesian}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          
          <Separator className="my-8" />
          
          <div className="flex justify-between items-center">
            <Button variant="outline" asChild>
              <Link to="/lessons">Back to Lessons</Link>
            </Button>
            <Button asChild>
              <Link to={`/practice/${lesson.id}`}>Practice This Lesson</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default LessonDetail;
