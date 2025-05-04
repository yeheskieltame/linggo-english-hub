import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, CheckCircle, XCircle, ArrowLeft, ArrowRight, RefreshCw, Clock, Eye, EyeOff } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { readingActivities } from '@/data/readingActivities';
import { mockLessons } from '@/data/mockData';

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
  READING = 'reading',
  QUESTIONS = 'questions',
  RESULTS = 'results',
}

const ReadingActivityPage = () => {
  const { activityId } = useParams<{ activityId: string }>();
  const navigate = useNavigate();
  
  // Find the activity
  const activity = readingActivities.find(a => a.id === activityId);
  const relatedLesson = activity ? mockLessons.find(l => l.id === activity.lessonId) : null;
  
  // State
  const [activityState, setActivityState] = useState<ActivityState>(ActivityState.INTRO);
  const [showContent, setShowContent] = useState(true);
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
    
    // Scroll to top when activity loads
    window.scrollTo(0, 0);
  }, [activity, navigate]);
  
  // Handle starting the activity
  const handleStartActivity = () => {
    setActivityState(ActivityState.READING);
  };
  
  // Handle moving to questions
  const handleStartQuestions = () => {
    setActivityState(ActivityState.QUESTIONS);
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
    setShowContent(true);
  };
  
  if (!activity) {
    return null; // Will redirect in useEffect
  }
  
  // Render the introduction screen
  const renderIntroduction = () => (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <Card className="border-none shadow-lg">
        <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-t-lg">
          <CardTitle className="text-2xl md:text-3xl font-bold">{activity.title}</CardTitle>
          <CardDescription className="text-emerald-100">{activity.description}</CardDescription>
        </CardHeader>
        <CardContent className="pt-6 pb-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-40 h-40 bg-emerald-100 rounded-full flex items-center justify-center">
                <BookOpen className="w-20 h-20 text-emerald-500" />
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
                <Badge variant="outline">
                  <Clock className="h-3 w-3 mr-1" />
                  {activity.estimatedReadingTime}
                </Badge>
                <Badge className="bg-emerald-100 text-emerald-800">
                  {activity.category === 'article' ? 'Artikel' :
                   activity.category === 'story' ? 'Cerita' :
                   activity.category === 'dialogue' ? 'Dialog' :
                   activity.category === 'letter' ? 'Surat' :
                   activity.category === 'email' ? 'Email' : 'Laporan'}
                </Badge>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Tentang Aktivitas Ini</h3>
              <div className="bg-emerald-50 p-4 rounded-lg mb-6">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5">•</span>
                    <span>
                      Anda akan membaca {
                        activity.category === 'article' ? 'artikel' :
                        activity.category === 'story' ? 'cerita' :
                        activity.category === 'dialogue' ? 'dialog' :
                        activity.category === 'letter' ? 'surat' :
                        activity.category === 'email' ? 'email' : 'laporan'
                      } tentang {activity.title.toLowerCase()}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5">•</span>
                    <span>Perkiraan waktu membaca: {activity.estimatedReadingTime}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5">•</span>
                    <span>Setelah membaca, Anda akan menjawab {activity.questions.length} pertanyaan pemahaman</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5">•</span>
                    <span>Anda dapat melihat kembali teks saat menjawab pertanyaan</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="bg-gray-50 rounded-b-lg flex justify-center p-6">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-medium px-8"
            onClick={handleStartActivity}
          >
            Mulai Aktivitas Membaca
            <BookOpen className="ml-2 h-5 w-5" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
  
  // Render the reading screen
  const renderReading = () => (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <Card className="border-none shadow-lg">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-xl md:text-2xl font-bold">{activity.title}</CardTitle>
              <CardDescription>{activity.description}</CardDescription>
            </div>
            <Badge variant="outline" className="flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              {activity.estimatedReadingTime}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="pb-6">
          <div className="bg-white rounded-lg p-6 mb-6 border border-gray-200">
            <div className="prose prose-emerald max-w-none">
              <p className="whitespace-pre-line">{activity.content}</p>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Kosakata Penting <span className="text-sm font-normal text-gray-500">(Key Vocabulary)</span></h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {activity.vocabulary.slice(0, 4).map((item, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <p className="font-medium text-emerald-700">{item.word}</p>
                  <p className="text-sm text-gray-600">{item.definition}</p>
                  <p className="text-sm text-gray-500 italic mt-1">"{item.example}"</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2 italic">
              Tip: Perhatikan kosakata ini saat membaca untuk membantu pemahaman Anda.
            </p>
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
            className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white"
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
                    ? 'border-emerald-500 bg-emerald-50' 
                    : 'border-gray-200 hover:border-emerald-200 hover:bg-emerald-50/30'
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
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setShowContent(!showContent)}
              className="border-emerald-200 text-emerald-700 hover:bg-emerald-50"
            >
              {showContent ? (
                <>
                  <EyeOff className="mr-2 h-4 w-4" />
                  Sembunyikan Teks
                </>
              ) : (
                <>
                  <Eye className="mr-2 h-4 w-4" />
                  Tampilkan Teks
                </>
              )}
            </Button>
            
            {showContent && (
              <div className="mt-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 max-h-64 overflow-y-auto">
                  <p className="text-gray-700 whitespace-pre-line">{activity.content}</p>
                </div>
                <p className="text-xs text-gray-500 mt-2 italic">
                  Tip: Cobalah untuk menjawab pertanyaan berdasarkan pemahaman Anda terlebih dahulu sebelum merujuk kembali ke teks.
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
            className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white"
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
        return "Luar biasa! Kemampuan membaca Anda sangat baik. Anda memahami teks dengan sangat baik.";
      } else if (score >= 70) {
        return "Bagus! Anda memiliki pemahaman yang baik. Teruslah berlatih untuk meningkatkan kemampuan membaca Anda.";
      } else if (score >= 50) {
        return "Cukup baik. Cobalah untuk membaca lebih teliti dan perhatikan detail-detail penting dalam teks.";
      } else {
        return "Jangan menyerah! Membaca adalah keterampilan yang membutuhkan latihan. Coba baca teks berulang kali dan perhatikan informasi kuncinya.";
      }
    };
    
    return (
      <div className="max-w-3xl mx-auto py-8 px-4">
        <Card className="border-none shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Hasil Anda</h2>
                <p className="text-emerald-100">Pemahaman Membaca: {activity.title}</p>
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
                <div className="bg-emerald-50 p-4 rounded-lg mb-4">
                  <p className="text-emerald-800">
                    Pelajari kosakata berikut untuk meningkatkan pemahaman membaca Anda. Cobalah untuk menggunakan kata-kata ini dalam tulisan atau percakapan Anda.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activity.vocabulary.map((item, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <p className="font-medium text-emerald-700">{item.word}</p>
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
              className="border-emerald-200 text-emerald-700 hover:bg-emerald-50"
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
        {activityState === ActivityState.READING && renderReading()}
        {activityState === ActivityState.QUESTIONS && renderQuestions()}
        {activityState === ActivityState.RESULTS && renderResults()}
      </main>
      
      <Footer />
    </div>
  );
};

export default ReadingActivityPage;