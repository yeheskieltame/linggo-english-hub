
import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Loader2, BookOpen, Edit } from 'lucide-react';
import { llmRequest } from '@/services/llmService';
import { useToast } from '@/hooks/use-toast';

interface WritingAnalysisProps {
  topic: string;
  level: string;
  instructions?: string;
}

interface FeedbackResponse {
  feedback: string;
  strengths?: string[];
  areasToImprove?: string[];
  recommendedLessons?: string[];
}

const WritingAnalysis: React.FC<WritingAnalysisProps> = ({ topic, level, instructions = '' }) => {
  const [draft, setDraft] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [feedback, setFeedback] = useState<FeedbackResponse | null>(null);
  const { toast } = useToast();

  const handleAnalyze = async () => {
    if (draft.trim().length < 20) {
      toast({
        title: "Draft too short",
        description: "Please write at least 20 characters for analysis",
        variant: "destructive"
      });
      return;
    }

    try {
      setIsAnalyzing(true);
      const prompt = `
        You are an expert English language teacher. Analyze this ${level} level writing about "${topic}".
        
        ${instructions ? `Writing instructions: ${instructions}\n` : ''}
        
        The student wrote:
        "${draft}"
        
        Provide constructive feedback in JSON format with these fields:
        - feedback: A helpful, encouraging paragraph with your main assessment
        - strengths: An array of 2-3 things the student did well
        - areasToImprove: An array of 2-3 specific areas to improve
        - recommendedLessons: An array of 2-3 suggested lesson topics that would help with the areas to improve
      `;
      
      const response = await llmRequest(prompt, true);
      const parsedResponse = JSON.parse(response);
      setFeedback(parsedResponse);
    } catch (error) {
      console.error('Error analyzing writing:', error);
      toast({
        title: "Analysis failed",
        description: "We couldn't analyze your writing. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleReset = () => {
    setDraft('');
    setFeedback(null);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <Badge className="w-fit mb-2">{level} Level</Badge>
          <CardTitle className="text-xl text-purple-700">
            {topic}
          </CardTitle>
          {instructions && (
            <CardDescription className="text-gray-600">
              {instructions}
            </CardDescription>
          )}
        </CardHeader>
        
        <CardContent>
          <Textarea 
            placeholder="Write your draft here..."
            className="min-h-[200px] mb-4 focus:border-purple-400"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            disabled={isAnalyzing}
          />
        </CardContent>
        
        <CardFooter className="flex justify-end gap-2">
          <Button 
            variant="outline" 
            onClick={handleReset}
            disabled={isAnalyzing || (draft.length === 0 && !feedback)}
          >
            Reset
          </Button>
          <Button 
            className="bg-purple-600 hover:bg-purple-700"
            onClick={handleAnalyze}
            disabled={draft.trim().length < 20 || isAnalyzing}
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Edit className="mr-2 h-4 w-4" />
                Analyze Writing
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
      
      {feedback && (
        <Card className="bg-purple-50 border-purple-200">
          <CardHeader>
            <CardTitle className="text-lg text-purple-700">
              Writing Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Feedback:</h3>
              <p className="text-gray-700">{feedback.feedback}</p>
            </div>
            
            {feedback.strengths && feedback.strengths.length > 0 && (
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Strengths:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {feedback.strengths.map((strength, index) => (
                    <li key={index}>{strength}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {feedback.areasToImprove && feedback.areasToImprove.length > 0 && (
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Areas to Improve:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {feedback.areasToImprove.map((area, index) => (
                    <li key={index}>{area}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {feedback.recommendedLessons && feedback.recommendedLessons.length > 0 && (
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Recommended Lessons:</h3>
                <div className="flex flex-wrap gap-2">
                  {feedback.recommendedLessons.map((lesson, index) => (
                    <Badge key={index} className="bg-purple-100 text-purple-800 hover:bg-purple-200 cursor-pointer">
                      <BookOpen className="mr-1 h-3 w-3" />
                      {lesson}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default WritingAnalysis;
