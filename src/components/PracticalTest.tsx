
import React, { useState } from 'react';
import { PracticalTest as PracticalTestType } from '@/types/lesson';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Mic, Send, Loader2, Award } from 'lucide-react';
import { llmRequest } from '@/services/llmService';
import { useToast } from '@/hooks/use-toast';
import WritingAnalysis from '@/components/WritingAnalysis';

interface PracticalTestProps {
  test: PracticalTestType;
  onComplete: (score: number, passed: boolean) => void;
}

const PracticalTest: React.FC<PracticalTestProps> = ({ test, onComplete }) => {
  const [response, setResponse] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [feedback, setFeedback] = useState<any | null>(null);
  const { toast } = useToast();
  
  const handleSubmit = async () => {
    if (response.trim().length < 10) {
      toast({
        title: "Response too short",
        description: "Please provide a more detailed response to evaluate",
        variant: "destructive"
      });
      return;
    }
    
    setIsProcessing(true);
    
    try {
      const prompt = `
        As an English language teacher, evaluate this ${test.type} response to the following prompt:
        "${test.prompt}"
        
        Student's response: "${response}"
        
        Criteria for evaluation:
        ${test.criteria ? test.criteria.join(', ') : 'Grammar, vocabulary, fluency, and relevance to the prompt'}
        
        Provide feedback in JSON format with these fields:
        - score: A number from 0-100 representing overall quality
        - feedback: A helpful, encouraging paragraph with your main assessment
        - strengths: An array of 2-3 specific things done well
        - areasToImprove: An array of 2-3 specific areas to improve
        - passed: A boolean indicating if the score meets the minimum required (${test.minScore})
      `;
      
      const feedbackResult = await llmRequest(prompt, true);
      const parsedFeedback = JSON.parse(feedbackResult);
      
      setFeedback(parsedFeedback);
      
      const score = parsedFeedback.score || 0;
      const passed = score >= test.minScore;
      
      onComplete(score, passed);
      
    } catch (error) {
      console.error('Error processing practical test:', error);
      toast({
        title: "Evaluation failed",
        description: "We couldn't evaluate your response. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };
  
  if (feedback) {
    const passed = feedback.score >= test.minScore;
    
    return (
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Test Results</CardTitle>
          <CardDescription>Your {test.type} test evaluation</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col items-center justify-center py-6">
            {passed ? (
              <Award className="h-16 w-16 text-amber-500 mb-4" />
            ) : (
              <div className="h-16 w-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">{Math.round(feedback.score)}%</span>
              </div>
            )}
            <h3 className="text-2xl font-bold">
              {passed ? 'Congratulations!' : 'Not Quite There Yet'}
            </h3>
            <p className="text-gray-500 mt-2">
              {passed ? 'You passed the test!' : `You need at least ${test.minScore}% to pass this test.`}
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-medium text-lg mb-2">Feedback:</h3>
            <p className="text-gray-700">{feedback.feedback}</p>
            
            {feedback.strengths && (
              <div className="mt-4">
                <h4 className="font-medium text-green-700">Strengths:</h4>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  {feedback.strengths.map((strength: string, index: number) => (
                    <li key={index} className="text-gray-700">{strength}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {feedback.areasToImprove && (
              <div className="mt-4">
                <h4 className="font-medium text-amber-700">Areas to Improve:</h4>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  {feedback.areasToImprove.map((area: string, index: number) => (
                    <li key={index} className="text-gray-700">{area}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          <div className="border rounded-md p-4 bg-gray-50">
            <h4 className="font-medium mb-2">Your Response:</h4>
            <p className="text-gray-700 whitespace-pre-wrap">{response}</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={() => window.location.reload()}>
            {passed ? 'Complete Lesson' : 'Try Again'}
          </Button>
        </CardFooter>
      </Card>
    );
  }
  
  const renderInputByType = () => {
    switch(test.type) {
      case 'writing':
        return (
          <Textarea 
            placeholder="Write your response here..."
            className="w-full h-64 mt-4"
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            disabled={isProcessing}
          />
        );
      case 'speaking':
        // Simple placeholder for speaking test
        // In a real app, you'd integrate with speech recognition
        return (
          <div className="mt-4 text-center">
            <Button 
              variant="outline" 
              size="lg"
              className="h-24 w-24 rounded-full"
              disabled={isProcessing}
            >
              <Mic className="h-8 w-8" />
            </Button>
            <p className="mt-2 text-sm text-gray-500">
              Click to record your response
            </p>
            <Textarea 
              placeholder="Transcription will appear here..."
              className="w-full h-32 mt-4"
              value={response}
              onChange={(e) => setResponse(e.target.value)}
              disabled={isProcessing}
            />
          </div>
        );
      default:
        return (
          <Textarea 
            placeholder="Type your response here..."
            className="w-full h-32 mt-4"
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            disabled={isProcessing}
          />
        );
    }
  };
  
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>{test.title}</CardTitle>
        <CardDescription>{test.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Prompt:</h3>
          <p className="text-gray-700">{test.prompt}</p>
        </div>
        
        {test.criteria && (
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-medium mb-2 text-blue-800">Evaluation Criteria:</h3>
            <ul className="list-disc list-inside space-y-1">
              {test.criteria.map((criterion, index) => (
                <li key={index} className="text-gray-700">{criterion}</li>
              ))}
            </ul>
          </div>
        )}
        
        {renderInputByType()}
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full" 
          onClick={handleSubmit}
          disabled={response.trim().length < 10 || isProcessing}
        >
          {isProcessing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Analyzing...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Submit for Evaluation
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PracticalTest;
