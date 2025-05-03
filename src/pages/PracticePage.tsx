
import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Volume2, Mic, Loader2, Book, ArrowLeft, Info } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { practiceSentences, mockLessons } from '@/data/mockData';
import { practicePrompts, PracticePrompt } from '@/data/practicePrompts';
import { speakText } from '@/services/textToSpeech';
import { startSpeechRecognition } from '@/services/speechRecognition';
import { analyzeSpeechWithLLM } from '@/services/llmService';

interface FeedbackResult {
  score: number;
  feedback: string;
  detailedFeedback?: { word: string; issue: string }[];
}

const CefrBadgeColor = {
  'A1': 'bg-slate-100 text-slate-800',
  'A2': 'bg-slate-200 text-slate-800',
  'B1': 'bg-yellow-100 text-yellow-800',
  'B2': 'bg-orange-100 text-orange-800',
  'C1': 'bg-red-100 text-red-800',
  'C2': 'bg-pink-100 text-pink-800',
};

const SkillFocusColors = {
  'pronunciation': 'bg-emerald-100 text-emerald-800',
  'fluency': 'bg-blue-100 text-blue-800',
  'vocabulary': 'bg-violet-100 text-violet-800',
  'grammar': 'bg-amber-100 text-amber-800',
};

const LevelsColor = {
  beginner: 'bg-green-100 text-green-800',
  intermediate: 'bg-blue-100 text-blue-800',
  advanced: 'bg-purple-100 text-purple-800',
};

const PathsColor = {
  general: 'bg-green-50 text-green-700',
  business: 'bg-blue-50 text-blue-700',
  academic: 'bg-violet-50 text-violet-700',
};

const PracticePage = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [feedback, setFeedback] = useState<FeedbackResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [practiceMode, setPracticeMode] = useState<'sentence' | 'prompt'>('sentence');
  const recognitionRef = useRef<any>(null);
  
  // Filter practice sentences based on lessonId
  const lessonSentences = lessonId 
    ? practiceSentences.filter(sentence => sentence.lessonId === lessonId)
    : practiceSentences;
  
  // Filter practice prompts based on lessonId
  const lessonPrompts = lessonId
    ? practicePrompts.filter(prompt => prompt.lessonId === lessonId)
    : practicePrompts;
  
  // Find the current lesson if lessonId is provided
  const currentLesson = lessonId ? mockLessons.find(lesson => lesson.id === lessonId) : null;
  
  // Get the current item to practice based on mode
  const currentSentence = lessonSentences.length > currentIndex 
    ? lessonSentences[currentIndex] 
    : lessonSentences[0];
    
  const currentPrompt = lessonPrompts.length > currentIndex
    ? lessonPrompts[currentIndex]
    : lessonPrompts[0];
  
  // Determine if we have content to practice
  const hasSentences = lessonSentences.length > 0;
  const hasPrompts = lessonPrompts.length > 0;
  
  // Set default practice mode based on available content
  useEffect(() => {
    if (hasPrompts) {
      setPracticeMode('prompt');
    } else if (hasSentences) {
      setPracticeMode('sentence');
    }
  }, [lessonId, hasPrompts, hasSentences]);
  
  useEffect(() => {
    // Reset state when moving to a new item
    setTranscript('');
    setFeedback(null);
  }, [currentIndex, practiceMode]);

  useEffect(() => {
    // Reset current index when lessonId changes
    setCurrentIndex(0);
    setTranscript('');
    setFeedback(null);
  }, [lessonId]);
  
  const handlePlayAudio = async () => {
    if (isSpeaking) return;
    
    try {
      setIsSpeaking(true);
      if (practiceMode === 'sentence') {
        await speakText(currentSentence.english);
      } else if (practiceMode === 'prompt' && currentPrompt.example) {
        await speakText(currentPrompt.example);
      }
    } catch (error) {
      console.error('Error playing audio:', error);
    } finally {
      setIsSpeaking(false);
    }
  };
  
  const handleStartListening = async () => {
    try {
      setIsListening(true);
      setTranscript('');
      
      const recognition = await startSpeechRecognition();
      recognitionRef.current = recognition;
      
      recognition.onResult((result) => {
        setTranscript(result.transcript);
      });
      
      recognition.onEnd(() => {
        setIsListening(false);
        if (transcript) {
          handleSubmitSpeech();
        }
      });
      
      recognition.start();
    } catch (error) {
      console.error('Error starting speech recognition:', error);
      setIsListening(false);
    }
  };
  
  const handleStopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };
  
  const handleSubmitSpeech = async () => {
    if (!transcript.trim()) return;
    
    setIsLoading(true);
    try {
      let result: FeedbackResult;
      
      if (practiceMode === 'sentence') {
        // For sentence repetition, use simple comparison
        result = await analyzeSpeechWithLLM(
          transcript, 
          `Repeat this sentence: "${currentSentence.english}"`
        );
      } else {
        // For prompts, use LLM analysis
        result = await analyzeSpeechWithLLM(
          transcript,
          currentPrompt.instruction,
          'english'
        );
      }
      
      setFeedback(result);
    } catch (error) {
      console.error('Error getting speech feedback:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleNextItem = () => {
    const itemsArray = practiceMode === 'sentence' ? lessonSentences : lessonPrompts;
    
    if (currentIndex < itemsArray.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Navigate back to lesson detail if we're done with all items
      if (lessonId) {
        window.location.href = `/lessons/${lessonId}`;
      } else {
        // If no specific lesson, reset to first item
        setCurrentIndex(0);
        alert('Practice completed! Great job!');
      }
    }
  };
  
  const togglePracticeMode = () => {
    if (practiceMode === 'sentence' && hasPrompts) {
      setPracticeMode('prompt');
    } else if (practiceMode === 'prompt' && hasSentences) {
      setPracticeMode('sentence');
    }
    // Reset state
    setCurrentIndex(0);
    setTranscript('');
    setFeedback(null);
  };
  
  const getSkillFocusLabel = (skillFocus: string) => {
    switch (skillFocus) {
      case 'pronunciation': return 'Pronunciation Focus';
      case 'fluency': return 'Fluency Focus';
      case 'vocabulary': return 'Vocabulary Focus';
      case 'grammar': return 'Grammar Focus';
      default: return 'Skill Focus';
    }
  };

  // If there are no practice items for this lesson
  if (lessonSentences.length === 0 && lessonPrompts.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="pt-28 pb-12 bg-linggo-light">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">No Practice Available</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sorry, there are no practice exercises available for this lesson yet.
            </p>
            {lessonId && (
              <Button asChild className="mt-6">
                <Link to={`/lessons/${lessonId}`}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Return to Lesson
                </Link>
              </Button>
            )}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Practice Header */}
      <section className="pt-28 pb-12 bg-linggo-light">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {currentLesson ? `Practice: ${currentLesson.title}` : 'Speaking Practice'}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Improve your English speaking skills with our AI-powered speaking exercises.
            </p>
            
            {/* Display lesson info if available */}
            {currentLesson && (
              <div className="flex flex-wrap justify-center gap-3 mt-4">
                <Badge className={LevelsColor[currentLesson.level]}>
                  {currentLesson.level.charAt(0).toUpperCase() + currentLesson.level.slice(1)}
                </Badge>
                <Badge className={CefrBadgeColor[currentLesson.cefrLevel]}>
                  CEFR {currentLesson.cefrLevel}
                </Badge>
                <Badge className={PathsColor[currentLesson.path]}>
                  {currentLesson.path === 'general' ? 'General English' : 
                   currentLesson.path === 'business' ? 'Business English' : 
                   'Academic English'}
                </Badge>
              </div>
            )}
            
            {/* Practice mode toggle */}
            {hasSentences && hasPrompts && (
              <div className="mt-6">
                <Button 
                  variant="outline" 
                  onClick={togglePracticeMode}
                  className="text-sm"
                >
                  Switch to {practiceMode === 'sentence' ? 'Free Speaking' : 'Sentence Repetition'}
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Practice Content */}
      <section className="py-12 bg-white flex-grow">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-6 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Badge variant="outline">
                {currentIndex + 1} of {practiceMode === 'sentence' ? lessonSentences.length : lessonPrompts.length}
              </Badge>
              {currentLesson && (
                <Link to={`/lessons/${currentLesson.id}`} className="text-sm text-gray-500 flex items-center">
                  <Book className="h-4 w-4 mr-1" /> Back to lesson
                </Link>
              )}
            </div>
            <Progress 
              value={(currentIndex / (
                (practiceMode === 'sentence' ? lessonSentences.length : lessonPrompts.length) - 1
              )) * 100} 
              className="w-1/2" 
            />
          </div>
          
          <Card className="mb-8">
            <CardContent className="p-6">
              {practiceMode === 'sentence' ? (
                /* Sentence Repetition Mode */
                <>
                  <div className="flex flex-wrap gap-2 mb-4 justify-between items-start">
                    <div className="flex gap-2">
                      <Badge className={
                        currentSentence.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                        currentSentence.difficulty === 'medium' ? 'bg-blue-100 text-blue-800' :
                        'bg-purple-100 text-purple-800'
                      }>
                        {currentSentence.difficulty.charAt(0).toUpperCase() + currentSentence.difficulty.slice(1)}
                      </Badge>
                      
                      <Badge className={CefrBadgeColor[currentSentence.cefrLevel]}>
                        CEFR {currentSentence.cefrLevel}
                      </Badge>
                      
                      <Badge className={SkillFocusColors[currentSentence.skillFocus]}>
                        {getSkillFocusLabel(currentSentence.skillFocus)}
                      </Badge>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handlePlayAudio}
                      disabled={isSpeaking}
                    >
                      {isSpeaking ? <Loader2 className="h-4 w-4 animate-spin" /> : <Volume2 className="h-4 w-4" />}
                      <span className="ml-2">Listen</span>
                    </Button>
                  </div>
                  
                  <div className="my-6">
                    <h2 className="text-xl font-semibold mb-4">Repeat this sentence:</h2>
                    <p className="text-2xl bg-linggo-light p-4 rounded-md">{currentSentence.english}</p>
                    <p className="text-gray-600 mt-2 text-sm">{currentSentence.indonesian}</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md mb-6">
                    <h3 className="font-medium mb-2">Pronunciation Tip:</h3>
                    <p>{currentSentence.tips}</p>
                  </div>
                </>
              ) : (
                /* Free Speaking Mode */
                <>
                  <div className="flex flex-wrap gap-2 mb-4 justify-between items-start">
                    <div className="flex gap-2">
                      <Badge className={
                        currentPrompt.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                        currentPrompt.difficulty === 'medium' ? 'bg-blue-100 text-blue-800' :
                        'bg-purple-100 text-purple-800'
                      }>
                        {currentPrompt.difficulty.charAt(0).toUpperCase() + currentPrompt.difficulty.slice(1)}
                      </Badge>
                      
                      <Badge className={CefrBadgeColor[currentPrompt.cefrLevel]}>
                        CEFR {currentPrompt.cefrLevel}
                      </Badge>
                      
                      <Badge className={
                        currentPrompt.category === 'introduction' ? 'bg-emerald-100 text-emerald-800' :
                        currentPrompt.category === 'daily' ? 'bg-blue-100 text-blue-800' :
                        currentPrompt.category === 'business' ? 'bg-amber-100 text-amber-800' :
                        currentPrompt.category === 'academic' ? 'bg-violet-100 text-violet-800' :
                        'bg-pink-100 text-pink-800'
                      }>
                        {currentPrompt.category.charAt(0).toUpperCase() + currentPrompt.category.slice(1)}
                      </Badge>
                    </div>
                    
                    {currentPrompt.example && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handlePlayAudio}
                        disabled={isSpeaking}
                      >
                        {isSpeaking ? <Loader2 className="h-4 w-4 animate-spin" /> : <Volume2 className="h-4 w-4" />}
                        <span className="ml-2">Listen to Example</span>
                      </Button>
                    )}
                  </div>
                  
                  <div className="my-6">
                    <h2 className="text-xl font-semibold mb-4">{currentPrompt.title}</h2>
                    <p className="text-lg bg-linggo-light p-4 rounded-md">{currentPrompt.instruction}</p>
                  </div>
                  
                  {currentPrompt.example && (
                    <div className="bg-gray-50 p-4 rounded-md mb-6">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium mb-2">Example Response:</h3>
                        <Badge variant="outline" className="text-xs">
                          <Info className="h-3 w-3 mr-1" /> For reference only
                        </Badge>
                      </div>
                      <p>{currentPrompt.example}</p>
                    </div>
                  )}
                </>
              )}
              
              <div className="flex justify-center">
                <Button
                  className="flex items-center gap-2 px-8"
                  onClick={isListening ? handleStopListening : handleStartListening}
                  variant={isListening ? "destructive" : "default"}
                >
                  {isListening ? (
                    <>
                      <Loader2 className="animate-spin" /> Recording...
                    </>
                  ) : (
                    <>
                      <Mic /> Start Speaking
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {transcript && (
            <Card className="mb-8">
              <CardContent className="p-6">
                <h3 className="font-medium mb-2">Your speech:</h3>
                <p className="bg-gray-50 p-3 rounded-md">{transcript}</p>
                
                {!feedback && !isLoading && (
                  <Button 
                    className="mt-4" 
                    onClick={handleSubmitSpeech}
                    disabled={isLoading}
                  >
                    {practiceMode === 'sentence' ? 'Check Pronunciation' : 'Analyze Response'}
                  </Button>
                )}
                
                {isLoading && (
                  <div className="flex items-center justify-center py-8">
                    <Loader2 className="animate-spin mr-2" />
                    <span>
                      {practiceMode === 'sentence' 
                        ? 'Analyzing your pronunciation...' 
                        : 'Analyzing your response...'}
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
          
          {feedback && (
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-lg">
                    {practiceMode === 'sentence' ? 'Pronunciation Feedback' : 'Speaking Feedback'}
                  </h3>
                  <Badge className={
                    feedback.score > 80 ? 'bg-green-100 text-green-800' :
                    feedback.score > 60 ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }>
                    Score: {feedback.score}/100
                  </Badge>
                </div>
                
                <p className="mb-4">{feedback.feedback}</p>
                
                {feedback.detailedFeedback && feedback.detailedFeedback.length > 0 && (
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h4 className="font-medium mb-2">Detailed Feedback:</h4>
                    <ul className="space-y-2">
                      {feedback.detailedFeedback.map((item, index) => (
                        <li key={index} className="flex gap-2">
                          <span className="font-medium">{item.word}:</span>
                          <span>{item.issue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="flex justify-between mt-6">
                  {practiceMode === 'prompt' && currentPrompt.example ? (
                    <Button variant="outline" onClick={handlePlayAudio}>
                      <Volume2 className="mr-2 h-4 w-4" /> Listen to Example
                    </Button>
                  ) : practiceMode === 'sentence' ? (
                    <Button variant="outline" onClick={handlePlayAudio}>
                      <Volume2 className="mr-2 h-4 w-4" /> Listen Again
                    </Button>
                  ) : (
                    <div></div> // Empty div as placeholder when no audio button is needed
                  )}
                  <Button onClick={handleNextItem}>
                    Continue
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
          
          {!transcript && !feedback && (
            <div className="text-center text-gray-500 my-8">
              <p>Click "Start Speaking" to begin practicing</p>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PracticePage;
