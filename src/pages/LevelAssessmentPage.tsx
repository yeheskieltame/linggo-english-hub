import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, XCircle, ArrowRight, Award, BookOpen, BarChart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  levelAssessmentQuestions, 
  evaluateAssessment, 
  LevelAssessmentQuestion,
  LevelAssessmentResult
} from '@/services/levelAssessmentService';

const LevelBadgeColor = {
  'A1': 'bg-slate-100 text-slate-800',
  'A2': 'bg-slate-200 text-slate-800',
  'B1': 'bg-yellow-100 text-yellow-800',
  'B2': 'bg-orange-100 text-orange-800',
  'C1': 'bg-red-100 text-red-800',
  'C2': 'bg-pink-100 text-pink-800',
};

enum AssessmentState {
  INTRO = 'intro',
  IN_PROGRESS = 'in_progress',
  RESULTS = 'results',
}

const LevelAssessmentPage = () => {
  const navigate = useNavigate();
  
  // State
  const [assessmentState, setAssessmentState] = useState<AssessmentState>(AssessmentState.INTRO);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [assessmentResult, setAssessmentResult] = useState<LevelAssessmentResult | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Calculate progress
  const progress = (currentQuestionIndex / levelAssessmentQuestions.length) * 100;
  
  // Current question
  const currentQuestion = levelAssessmentQuestions[currentQuestionIndex];
  
  // Handle starting the assessment
  const handleStartAssessment = () => {
    setAssessmentState(AssessmentState.IN_PROGRESS);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
  };
  
  // Handle option selection
  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
  };
  
  // Handle moving to the next question
  const handleNextQuestion = () => {
    if (selectedOption) {
      // Save the answer
      setUserAnswers(prev => ({
        ...prev,
        [currentQuestion.id]: selectedOption
      }));
      
      // Clear selection for next question
      setSelectedOption(null);
      
      // Move to next question or finish
      if (currentQuestionIndex < levelAssessmentQuestions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        handleFinishAssessment();
      }
    }
  };
  
  // Handle finishing the assessment
  const handleFinishAssessment = async () => {
    if (Object.keys(userAnswers).length < levelAssessmentQuestions.length && selectedOption) {
      // Save the last answer if not saved yet
      setUserAnswers(prev => ({
        ...prev,
        [currentQuestion.id]: selectedOption
      }));
    }
    
    setIsSubmitting(true);
    
    try {
      // Evaluate the assessment
      const finalAnswers = selectedOption 
        ? { ...userAnswers, [currentQuestion.id]: selectedOption }
        : userAnswers;
        
      const result = await evaluateAssessment(finalAnswers);
      setAssessmentResult(result);
      setAssessmentState(AssessmentState.RESULTS);
    } catch (error) {
      console.error('Error evaluating assessment:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Handle retaking the assessment
  const handleRetakeAssessment = () => {
    setAssessmentState(AssessmentState.INTRO);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setSelectedOption(null);
    setAssessmentResult(null);
  };
  
  // Render the introduction screen
  const renderIntroduction = () => (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <Card className="border-none shadow-lg">
        <CardHeader className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-t-lg">
          <CardTitle className="text-2xl md:text-3xl font-bold">English Level Assessment</CardTitle>
        </CardHeader>
        <CardContent className="pt-8 pb-6">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-48 h-48 bg-purple-100 rounded-full flex items-center justify-center">
                <BarChart className="w-24 h-24 text-purple-500" />
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Discover Your English Proficiency Level</h3>
              <p className="text-gray-600 mb-4">
                This assessment will help determine your current English level according to the Common European Framework of Reference (CEFR).
              </p>
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 className="font-medium text-blue-800 mb-2">About This Assessment:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5">•</span>
                    <span>12 questions covering grammar, vocabulary, and language usage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5">•</span>
                    <span>Takes approximately 5-10 minutes to complete</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5">•</span>
                    <span>Provides detailed feedback and personalized recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-0.5">•</span>
                    <span>No time limit - take your time to answer each question</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="bg-gray-50 rounded-b-lg flex justify-center p-6">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium px-8"
            onClick={handleStartAssessment}
          >
            Start Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
  
  // Render the assessment questions
  const renderAssessment = () => (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <Card className="border-none shadow-lg">
        <CardHeader className="bg-white border-b pb-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500 mb-1">Question {currentQuestionIndex + 1} of {levelAssessmentQuestions.length}</p>
              <Progress value={progress} className="h-2 w-64" />
            </div>
            <Badge variant="outline" className="text-purple-700 border-purple-200 bg-purple-50">
              {currentQuestion.cefrLevel}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="pt-8 pb-6">
          <h3 className="text-xl font-semibold mb-6 text-gray-800">{currentQuestion.question}</h3>
          
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <div 
                key={index}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedOption === option 
                    ? 'border-purple-500 bg-purple-50' 
                    : 'border-gray-200 hover:border-purple-200 hover:bg-purple-50/30'
                }`}
                onClick={() => handleSelectOption(option)}
              >
                <div className="flex items-center">
                  <div className={`w-6 h-6 rounded-full mr-3 flex items-center justify-center ${
                    selectedOption === option 
                      ? 'bg-purple-500 text-white' 
                      : 'bg-gray-100 text-gray-400'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="text-gray-700">{option}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="bg-gray-50 rounded-b-lg flex justify-end p-6">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium px-8"
            onClick={handleNextQuestion}
            disabled={!selectedOption}
          >
            {currentQuestionIndex < levelAssessmentQuestions.length - 1 ? 'Next Question' : 'Finish'}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
  
  // Render the results screen
  const renderResults = () => {
    if (!assessmentResult) return null;
    
    const { level, cefrLevel, score, totalQuestions, correctAnswers, feedback, strengths, areasToImprove, recommendedLessons } = assessmentResult;
    
    return (
      <div className="max-w-4xl mx-auto py-12 px-4">
        <Card className="border-none shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Your Assessment Results</h2>
                <p className="text-purple-100">Based on your answers to {totalQuestions} questions</p>
              </div>
              <div className="mt-6 md:mt-0 flex items-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center">
                  <Award className="h-10 w-10 mr-3 text-yellow-300" />
                  <div>
                    <p className="text-sm text-white/80">Your Level</p>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold">{level.charAt(0).toUpperCase() + level.slice(1)}</span>
                      <Badge className={`${LevelBadgeColor[cefrLevel]} font-medium`}>
                        {cefrLevel}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-purple-50 rounded-lg p-4 text-center">
                <p className="text-sm text-purple-700 mb-1">Score</p>
                <p className="text-3xl font-bold text-purple-800">{score.toFixed(1)}%</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <p className="text-sm text-green-700 mb-1">Correct Answers</p>
                <p className="text-3xl font-bold text-green-800">{correctAnswers}/{totalQuestions}</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <p className="text-sm text-blue-700 mb-1">CEFR Level</p>
                <p className="text-3xl font-bold text-blue-800">{cefrLevel}</p>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Your Feedback</h3>
              <p className="text-gray-700 mb-6">{feedback}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-green-800 mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Your Strengths
                  </h4>
                  <ul className="space-y-2">
                    {strengths.map((strength, index) => (
                      <li key={index} className="bg-green-50 p-3 rounded-lg text-gray-700">
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-orange-800 mb-3 flex items-center">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Areas to Improve
                  </h4>
                  <ul className="space-y-2">
                    {areasToImprove.map((area, index) => (
                      <li key={index} className="bg-orange-50 p-3 rounded-lg text-gray-700">
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Recommended Lessons</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {recommendedLessons.map((lesson, index) => (
                  <div key={index} className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-1">{lesson}</h4>
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-blue-600"
                      onClick={() => navigate('/lessons')}
                    >
                      View Lessons
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="bg-gray-50 p-6 flex flex-wrap gap-4 justify-center">
            <Button 
              variant="outline" 
              className="border-purple-200 text-purple-700 hover:bg-purple-50"
              onClick={handleRetakeAssessment}
            >
              Retake Assessment
            </Button>
            <Button 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
              onClick={() => navigate('/lessons')}
            >
              Explore Lessons
            </Button>
            <Button 
              variant="outline" 
              className="border-blue-200 text-blue-700 hover:bg-blue-50"
              onClick={() => navigate('/dashboard')}
            >
              Go to Dashboard
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1">
        {assessmentState === AssessmentState.INTRO && renderIntroduction()}
        {assessmentState === AssessmentState.IN_PROGRESS && renderAssessment()}
        {assessmentState === AssessmentState.RESULTS && renderResults()}
        
        {isSubmitting && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg flex flex-col items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-700 mb-4"></div>
              <p className="text-gray-700">Evaluating your answers...</p>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default LevelAssessmentPage;