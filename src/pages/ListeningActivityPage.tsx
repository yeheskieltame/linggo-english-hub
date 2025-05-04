import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Volume2, Headphones, BookOpen, CheckCircle, XCircle, ArrowLeft, ArrowRight, RefreshCw, PlayCircle, PauseCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { listeningActivities } from '@/data/listeningActivities';
import { mockLessons } from '@/data/mockData';
import { speakText } from '@/services/textToSpeech';

const LevelsColor = {
  easy: 'bg-green-100 text-green-800',
  medium: 'bg-yellow-100 text-yellow-800',
  hard: 'bg-red-100 text-red-800',
};

const CefrBadgeColor = {
  'A1': 'bg-slate-100 text-slate-800',
  'A2': 'bg-slate-200 text-slate-800',
  'B1': 'bg-yellow-100 text-yellow-800',
  'B2': 'bg-orange-100 text-orange-800',
  'C1': 'bg-red-100 text-red-800',
  'C2': 'bg-pink-100 text-pink-800',
};

enum ActivityState {
  INTRO = 'intro',
  LISTENING = 'listening',
  QUESTIONS = 'questions',
  RESULTS = 'results',
}

const ListeningActivityPage = () => {
  const { activityId } = useParams<{ activityId: string }>();
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Find the activity
  const activity = listeningActivities.find(a => a.id === activityId);
  const relatedLesson = activity ? mockLessons.find(l => l.id === activity.lessonId) : null;
  
  // State
  const [activityState, setActivityState] = useState<ActivityState>(ActivityState.INTRO);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showTranscript, setShowTranscript] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<{
    score: number;
    correctAnswers: number;
    totalQuestions: number;
    answeredCorrectly: string[];
    answeredIncorrectly: string[];
  } | null>(null);
  
  // Calculate progress for questions
  const progress = activity ? ((currentQuestionIndex + 1) / activity.questions.length) * 100 : 0;
  
  // Current question
  const currentQuestion = activity?.questions[currentQuestionIndex];
  
  useEffect(() => {
    if (!activity) {
      // If activity not found, redirect to lessons
      navigate('/lessons');
    }
    
    // Create audio element
    if (activity) {
      const audio = new Audio(activity.audioUrl);
      audioRef.current = audio;
      
      audio.addEventListener('timeupdate', handleTimeUpdate);
      audio.addEventListener('loadedmetadata', handleLoadedMetadata);
      audio.addEventListener('ended', handleAudioEnded);
      
      return () => {
        audio.pause();
        audio.removeEventListener('timeupdate', handleTimeUpdate);
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audio.removeEventListener('ended', handleAudioEnded);
      };
    }
  }, [activity]);
  
  // Audio event handlers
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };
  
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };
  
  const handleAudioEnded = () => {
    setIsPlaying(false);
  };
  
  // Format time (seconds) to MM:SS
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  
  // Handle play/pause
  const togglePlayPause = async () => {
    // If we have a real audio file
    if (audioRef.current && activity?.audioUrl && !activity.audioUrl.startsWith('/audio/')) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } 
    // If we don't have a real audio file, use TTS
    else if (activity) {
      if (isPlaying) {
        // This is a placeholder - in a real app, you would need a way to stop TTS
        // Currently, the Web Speech API doesn't provide a reliable way to stop speech
        console.log('Attempting to stop speech (not fully supported in all browsers)');
        window.speechSynthesis?.cancel();
        setIsPlaying(false);
      } else {
        try {
          setIsPlaying(true);
          await speakText(activity.transcript);
          setIsPlaying(false);
        } catch (error) {
          console.error('Error using TTS:', error);
          setIsPlaying(false);
        }
      }
    }
  };
  
  // Handle seeking
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };
  
  // Handle restart audio
  const handleRestart = async () => {
    // If we have a real audio file
    if (audioRef.current && activity?.audioUrl && !activity.audioUrl.startsWith('/audio/')) {
      audioRef.current.currentTime = 0;
      setCurrentTime(0);
      audioRef.current.play();
      setIsPlaying(true);
    } 
    // If we don't have a real audio file, use TTS
    else if (activity) {
      try {
        // Cancel any ongoing speech
        window.speechSynthesis?.cancel();
        
        setCurrentTime(0);
        setIsPlaying(true);
        await speakText(activity.transcript);
        setIsPlaying(false);
      } catch (error) {
        console.error('Error using TTS:', error);
        setIsPlaying(false);
      }
    }
  };
  
  // Handle starting the activity
  const handleStartActivity = async () => {
    setActivityState(ActivityState.LISTENING);
    
    // Use TTS to read the transcript if no audio file is available or for testing
    if (activity && (!activity.audioUrl || activity.audioUrl.startsWith('/audio/'))) {
      try {
        // Small delay to ensure the UI has updated before starting speech
        setTimeout(async () => {
          setIsPlaying(true);
          await speakText(activity.transcript);
          setIsPlaying(false);
        }, 500);
      } catch (error) {
        console.error('Error using TTS:', error);
        setIsPlaying(false);
      }
    }
  };
  
  // Handle moving to questions
  const handleStartQuestions = () => {
    setActivityState(ActivityState.QUESTIONS);
    
    // Pause audio when moving to questions
    if (audioRef.current && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
    
    // Stop any ongoing TTS
    if (isPlaying) {
      window.speechSynthesis?.cancel();
      setIsPlaying(false);
    }
  };
  
  // Handle selecting an answer
  const handleSelectAnswer = (questionId: string, answer: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };
  
  // Handle moving to the next question
  const handleNextQuestion = () => {
    if (currentQuestionIndex < (activity?.questions.length || 0) - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      handleFinishActivity();
    }
  };
  
  // Handle moving to the previous question
  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };
  
  // Handle finishing the activity
  const handleFinishActivity = () => {
    if (!activity) return;
    
    // Calculate results
    const answeredCorrectly: string[] = [];
    const answeredIncorrectly: string[] = [];
    
    activity.questions.forEach(question => {
      const userAnswer = selectedAnswers[question.id];
      if (userAnswer === question.correctAnswer) {
        answeredCorrectly.push(question.id);
      } else {
        answeredIncorrectly.push(question.id);
      }
    });
    
    const correctAnswers = answeredCorrectly.length;
    const totalQuestions = activity.questions.length;
    const score = (correctAnswers / totalQuestions) * 100;
    
    setResults({
      score,
      correctAnswers,
      totalQuestions,
      answeredCorrectly,
      answeredIncorrectly
    });
    
    setActivityState(ActivityState.RESULTS);
  };
  
  // Handle retaking the activity
  const handleRetakeActivity = () => {
    setActivityState(ActivityState.INTRO);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setResults(null);
    setShowTranscript(false);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      setCurrentTime(0);
      setIsPlaying(false);
    }
  };
  
  if (!activity) {
    return null; // Will redirect in useEffect
  }
  
  // Render the introduction screen
  const renderIntroduction = () => (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <Card className="border-none shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-t-lg">
          <CardTitle className="text-2xl md:text-3xl font-bold">{activity.title}</CardTitle>
          <CardDescription className="text-blue-100">{activity.description}</CardDescription>
        </CardHeader>
        <CardContent className="pt-6 pb-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-40 h-40 bg-blue-100 rounded-full flex items-center justify-center">
                <Headphones className="w-20 h-20 text-blue-500" />
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className={LevelsColor[activity.difficulty]}>
                  {activity.difficulty === 'easy' ? 'Mudah' : 
                   activity.difficulty === 'medium' ? 'Sedang' : 'Sulit'}
                </Badge>
                <Badge className={CefrBadgeColor[activity.cefrLevel]}>
                  CEFR {activity.cefrLevel}
                </Badge>
                <Badge variant="outline">{activity.duration}</Badge>
                <Badge className="bg-blue-100 text-blue-800">
                  {activity.category === 'conversation' ? 'Percakapan' :
                   activity.category === 'monologue' ? 'Monolog' :
                   activity.category === 'news' ? 'Berita' :
                   activity.category === 'interview' ? 'Wawancara' : 'Cerita'}
                </Badge>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Tentang Aktivitas Ini</h3>
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5">•</span>
                    <span>
                      Anda akan mendengarkan {
                        activity.category === 'conversation' ? 'percakapan' :
                        activity.category === 'monologue' ? 'monolog' :
                        activity.category === 'news' ? 'berita' :
                        activity.category === 'interview' ? 'wawancara' : 'cerita'
                      } tentang {activity.title.toLowerCase()}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5">•</span>
                    <span>Durasi: {activity.duration}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5">•</span>
                    <span>Setelah mendengarkan, Anda akan menjawab {activity.questions.length} pertanyaan pemahaman</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5">•</span>
                    <span>Anda dapat memutar ulang audio sebanyak yang diperlukan</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="bg-gray-50 rounded-b-lg flex justify-center p-6">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium px-8"
            onClick={handleStartActivity}
          >
            Mulai Aktivitas Mendengarkan
            <Headphones className="ml-2 h-5 w-5" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
  
  // Render the listening screen
  const renderListening = () => (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <Card className="border-none shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl font-bold">{activity.title}</CardTitle>
          <CardDescription>{activity.description}</CardDescription>
        </CardHeader>
        <CardContent className="pb-6">
          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                {isPlaying ? (
                  <PauseCircle 
                    className="w-16 h-16 text-blue-600 cursor-pointer" 
                    onClick={togglePlayPause}
                  />
                ) : (
                  <PlayCircle 
                    className="w-16 h-16 text-blue-600 cursor-pointer" 
                    onClick={togglePlayPause}
                  />
                )}
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
              <input
                type="range"
                min="0"
                max={duration || 100}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            
            <div className="flex justify-center gap-4">
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleRestart}
                className="border-blue-200 text-blue-700 hover:bg-blue-50"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Mulai Ulang
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setShowTranscript(!showTranscript)}
                className="border-blue-200 text-blue-700 hover:bg-blue-50"
              >
                <BookOpen className="mr-2 h-4 w-4" />
                {showTranscript ? 'Sembunyikan Transkrip' : 'Tampilkan Transkrip'}
              </Button>
            </div>
          </div>
          
          {showTranscript && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Transkrip <span className="text-sm font-normal text-gray-500">(Transcript)</span></h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-gray-700 whitespace-pre-line">{activity.transcript}</p>
              </div>
              <p className="text-xs text-gray-500 mt-2 italic">
                Tip: Cobalah untuk mendengarkan tanpa melihat transkrip terlebih dahulu untuk melatih kemampuan mendengarkan Anda.
              </p>
            </div>
          )}
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Kosakata Penting <span className="text-sm font-normal text-gray-500">(Key Vocabulary)</span></h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {activity.vocabulary.slice(0, 4).map((item, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <p className="font-medium text-blue-700">{item.word}</p>
                  <p className="text-sm text-gray-600">{item.definition}</p>
                  <p className="text-sm text-gray-500 italic mt-1">"{item.example}"</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="bg-gray-50 rounded-b-lg flex justify-between p-6">
          <Button 
            variant="outline"
            className="border-gray-200"
            onClick={() => setActivityState(ActivityState.INTRO)}
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Kembali
          </Button>
          <Button 
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
            onClick={handleStartQuestions}
          >
            Lanjut ke Pertanyaan
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
  
  // Render the questions screen
  const renderQuestions = () => (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <Card className="border-none shadow-lg">
        <CardHeader className="bg-white border-b pb-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500 mb-1">Pertanyaan {currentQuestionIndex + 1} dari {activity.questions.length}</p>
              <Progress value={progress} className="h-2 w-64" />
            </div>
            <Badge className={CefrBadgeColor[activity.cefrLevel]}>
              {activity.cefrLevel}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="pt-6 pb-4">
          <h3 className="text-xl font-semibold mb-6 text-gray-800">{currentQuestion.question}</h3>
          
          <RadioGroup 
            value={selectedAnswers[currentQuestion.id] || ''}
            onValueChange={(value) => handleSelectAnswer(currentQuestion.id, value)}
            className="space-y-3"
          >
            {currentQuestion.options.map((option, index) => (
              <div 
                key={index}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedAnswers[currentQuestion.id] === option 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 hover:border-blue-200 hover:bg-blue-50/30'
                }`}
              >
                <div className="flex items-center">
                  <RadioGroupItem 
                    value={option} 
                    id={`option-${index}`} 
                    className="mr-3"
                  />
                  <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                    {option}
                  </Label>
                </div>
              </div>
            ))}
          </RadioGroup>
          
          <div className="mt-6 pt-4 border-t">
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setShowTranscript(!showTranscript)}
                className="border-blue-200 text-blue-700 hover:bg-blue-50"
              >
                <BookOpen className="mr-2 h-4 w-4" />
                {showTranscript ? 'Sembunyikan Transkrip' : 'Tampilkan Transkrip'}
              </Button>
              
              <Button 
                variant="outline" 
                size="sm"
                onClick={togglePlayPause}
                className="border-blue-200 text-blue-700 hover:bg-blue-50"
              >
                {isPlaying ? (
                  <>
                    <PauseCircle className="mr-2 h-4 w-4" />
                    Jeda Audio
                  </>
                ) : (
                  <>
                    <PlayCircle className="mr-2 h-4 w-4" />
                    Putar Audio
                  </>
                )}
              </Button>
            </div>
            
            {showTranscript && (
              <div className="mt-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-gray-700 whitespace-pre-line">{activity.transcript}</p>
                </div>
                <p className="text-xs text-gray-500 mt-2 italic">
                  Tip: Cobalah untuk menjawab pertanyaan berdasarkan apa yang Anda dengar, bukan hanya membaca transkrip.
                </p>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="bg-gray-50 rounded-b-lg flex justify-between p-6">
          <Button 
            variant="outline" 
            onClick={handlePrevQuestion}
            disabled={currentQuestionIndex === 0}
            className="border-gray-200"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Sebelumnya
          </Button>
          <Button 
            onClick={handleNextQuestion}
            disabled={!selectedAnswers[currentQuestion.id]}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
          >
            {currentQuestionIndex < activity.questions.length - 1 ? 'Selanjutnya' : 'Selesai'}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
  
  // Render the results screen
  const renderResults = () => {
    if (!results) return null;
    
    // Function to get feedback based on score
    const getFeedback = (score: number) => {
      if (score >= 90) {
        return "Luar biasa! Kemampuan mendengarkan Anda sangat baik. Teruskan pekerjaan yang bagus!";
      } else if (score >= 70) {
        return "Bagus! Anda memiliki pemahaman yang baik. Teruslah berlatih untuk meningkatkan kemampuan Anda.";
      } else if (score >= 50) {
        return "Cukup baik. Cobalah untuk mendengarkan lebih seksama dan perhatikan detail-detail kecil.";
      } else {
        return "Jangan menyerah! Mendengarkan adalah keterampilan yang membutuhkan latihan. Coba dengarkan audio berulang kali dan perhatikan kata-kata kuncinya.";
      }
    };
    
    return (
      <div className="max-w-3xl mx-auto py-8 px-4">
        <Card className="border-none shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Hasil Anda</h2>
                <p className="text-blue-100">Pemahaman Mendengarkan: {activity.title}</p>
              </div>
              <div className="mt-6 md:mt-0 bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                <p className="text-sm text-white/80">Skor Anda</p>
                <p className="text-3xl font-bold">{Math.round(results.score)}%</p>
                <p className="text-sm text-white/80">{results.correctAnswers} dari {results.totalQuestions} benar</p>
              </div>
            </div>
            
            <div className="mt-4 bg-white/10 p-4 rounded-lg">
              <p className="text-white">{getFeedback(results.score)}</p>
            </div>
          </div>
          
          <CardContent className="p-6">
            <Tabs defaultValue="answers">
              <TabsList className="mb-4">
                <TabsTrigger value="answers">Jawaban Anda</TabsTrigger>
                <TabsTrigger value="vocabulary">Kosakata</TabsTrigger>
              </TabsList>
              
              <TabsContent value="answers" className="space-y-4">
                {activity.questions.map((question, index) => {
                  const userAnswer = selectedAnswers[question.id] || '';
                  const isCorrect = userAnswer === question.correctAnswer;
                  
                  return (
                    <div 
                      key={question.id} 
                      className={`p-4 rounded-lg border ${
                        isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`mt-1 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                          {isCorrect ? <CheckCircle className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-800 mb-2">
                            {index + 1}. {question.question}
                          </p>
                          <p className="text-sm text-gray-600 mb-1">
                            Jawaban Anda: <span className={isCorrect ? 'text-green-700' : 'text-red-700'}>{userAnswer}</span>
                          </p>
                          {!isCorrect && (
                            <p className="text-sm text-green-700">
                              Jawaban benar: {question.correctAnswer}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </TabsContent>
              
              <TabsContent value="vocabulary" className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <p className="text-blue-800">
                    Pelajari kosakata berikut untuk meningkatkan pemahaman mendengarkan Anda. Cobalah untuk menggunakan kata-kata ini dalam percakapan sehari-hari.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activity.vocabulary.map((item, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <p className="font-medium text-blue-700">{item.word}</p>
                      <p className="text-sm text-gray-600">{item.definition}</p>
                      <p className="text-sm text-gray-500 italic mt-1">"{item.example}"</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          
          <CardFooter className="bg-gray-50 p-6 flex flex-wrap gap-4 justify-center">
            <Button 
              variant="outline" 
              className="border-blue-200 text-blue-700 hover:bg-blue-50"
              onClick={handleRetakeActivity}
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Coba Lagi
            </Button>
            
            {relatedLesson && (
              <Button 
                asChild
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
              >
                <Link to={`/lessons/${relatedLesson.id}`}>
                  <BookOpen className="mr-2 h-4 w-4" />
                  Kembali ke Pelajaran
                </Link>
              </Button>
            )}
            
            <Button 
              variant="outline" 
              asChild
              className="border-gray-200"
            >
              <Link to="/lessons">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali ke Daftar Pelajaran
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 pt-20">
        {activityState === ActivityState.INTRO && renderIntroduction()}
        {activityState === ActivityState.LISTENING && renderListening()}
        {activityState === ActivityState.QUESTIONS && renderQuestions()}
        {activityState === ActivityState.RESULTS && renderResults()}
      </main>
      
      <Footer />
    </div>
  );
};

export default ListeningActivityPage;