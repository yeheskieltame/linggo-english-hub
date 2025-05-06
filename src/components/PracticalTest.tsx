
import React, { useState, useEffect } from 'react';
import { PracticalTest as PracticalTestType } from '@/types/lesson';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Mic, MicOff, Send, Loader2, Award, Volume2, VolumeX, HelpCircle, Info, CheckCircle2, AlertCircle, BookOpen, Lightbulb } from 'lucide-react';
import { llmRequest } from '@/services/llmService';
import { useToast } from '@/hooks/use-toast';
import { startSpeechRecognition, speakText } from '@/services/speechRecognition';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface PracticalTestProps {
  test: PracticalTestType;
  onComplete: (score: number, passed: boolean) => void;
}

const PracticalTest: React.FC<PracticalTestProps> = ({ test, onComplete }) => {
  const [responses, setResponses] = useState<string[]>(test.sections ? test.sections.map(() => '') : ['']);
  const [isProcessing, setIsProcessing] = useState(false);
  const [feedback, setFeedback] = useState<any | null>(null);
  const [activeTab, setActiveTab] = useState<string>(test.type === 'speaking' ? 'speak' : 'write');
  const [activeSection, setActiveSection] = useState<number>(0);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [recognitionController, setRecognitionController] = useState<any>(null);
  const [speechController, setSpeechController] = useState<any>(null);
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);
  const [showInstructions, setShowInstructions] = useState(true);
  const [wordCounts, setWordCounts] = useState<number[]>(test.sections ? test.sections.map(() => 0) : [0]);
  const { toast } = useToast();
  
  // Calculate word count when responses change
  useEffect(() => {
    const newWordCounts = responses.map(response => {
      const words = response.trim().split(/\s+/).filter(word => word.length > 0);
      return words.length;
    });
    setWordCounts(newWordCounts);
  }, [responses]);
  
  // Start a timer when recording begins
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    
    if (isListening) {
      setTimeRemaining(60); // 60 seconds for speaking
      
      timer = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev === null || prev <= 1) {
            if (recognitionController) {
              recognitionController.stop();
            }
            clearInterval(timer!);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isListening, recognitionController]);
  
  const handleSubmit = async () => {
    // Check if any response is too short
    const hasShortResponse = responses.some((response, index) => {
      const minLength = 10;
      return response.trim().length < minLength;
    });
    
    if (hasShortResponse) {
      toast({
        title: "Response too short",
        description: "Please provide more detailed responses to evaluate",
        variant: "destructive"
      });
      return;
    }
    
    setIsProcessing(true);
    
    try {
      let prompt = '';
      
      if (test.sections) {
        // Handle multi-section test
        prompt = `
          As a supportive and encouraging English language teacher, evaluate these responses to a multi-section test.
          
          IMPORTANT EVALUATION GUIDELINES:
          - Focus on MEANING and COMMUNICATION rather than perfect grammar or spelling
          - Be LENIENT with minor errors like capitalization, punctuation, or small grammatical mistakes
          - Reward attempts to use vocabulary and structures from the lessons
          - Consider the student's level (beginner) when evaluating
          - Be generous with scoring - if the response communicates the intended meaning, it should receive a good score
          - For writing tasks, focus on whether the message is clear, not on perfect spelling or grammar
          
          Test title: "${test.title}"
          Overall description: "${test.description}"
          
          ${test.sections.map((section, index) => `
          Section ${index + 1}: ${section.title} (${section.type})
          Prompt: "${section.prompt}"
          Student's response: "${responses[index]}"
          Criteria: ${section.criteria ? section.criteria.join(', ') : 'Standard evaluation'}
          Weight: ${section.weight}% of total score
          `).join('\n')}
          
          Overall criteria for evaluation:
          ${test.criteria ? test.criteria.join(', ') : 'Grammar, vocabulary, fluency, and relevance to the prompt'}
          
          Provide feedback in JSON format with these fields:
          - score: A number from 0-100 representing overall quality (weighted average of section scores). Be generous - if the student communicated their message effectively, the score should be at least 70.
          - feedback: A helpful, encouraging paragraph with your main assessment. Focus on what they did well first.
          - strengths: An array of 2-3 specific things done well across all sections
          - areasToImprove: An array of 2-3 specific areas to improve, focusing on the most important issues only
          - suggestions: An array of 2-3 specific suggestions for improvement that are actionable and clear
          - sectionScores: An array of objects with {section: "section title", score: number, feedback: "brief feedback"}
          - detailedFeedback: An array of objects with {section: number, word: string, issue: string, suggestion: string} highlighting specific words or phrases that need improvement (max 3-4 items total)
          - passed: A boolean indicating if the score meets the minimum required (${test.minScore})
        `;
      } else {
        // Handle single-section test
        prompt = `
          As a supportive and encouraging English language teacher, evaluate this ${test.type} response to the following prompt.
          
          IMPORTANT EVALUATION GUIDELINES:
          - Focus on MEANING and COMMUNICATION rather than perfect grammar or spelling
          - Be LENIENT with minor errors like capitalization, punctuation, or small grammatical mistakes
          - Reward attempts to use vocabulary and structures from the lessons
          - Consider the student's level (beginner) when evaluating
          - Be generous with scoring - if the response communicates the intended meaning, it should receive a good score
          - For writing tasks, focus on whether the message is clear, not on perfect spelling or grammar
          
          Prompt: "${test.prompt}"
          
          Student's response: "${responses[0]}"
          
          Criteria for evaluation:
          ${test.criteria ? test.criteria.join(', ') : 'Grammar, vocabulary, fluency, and relevance to the prompt'}
          
          Provide feedback in JSON format with these fields:
          - score: A number from 0-100 representing overall quality. Be generous - if the student communicated their message effectively, the score should be at least 70.
          - feedback: A helpful, encouraging paragraph with your main assessment. Focus on what they did well first.
          - strengths: An array of 2-3 specific things done well
          - areasToImprove: An array of 2-3 specific areas to improve, focusing on the most important issues only
          - suggestions: An array of 2-3 specific suggestions for improvement that are actionable and clear
          - detailedFeedback: An array of objects with {word: string, issue: string, suggestion: string} highlighting specific words or phrases that need improvement (max 3-4 items total)
          - passed: A boolean indicating if the score meets the minimum required (${test.minScore})
        `;
      }
      
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
  
  const startListening = async () => {
    try {
      const controller = await startSpeechRecognition();
      setRecognitionController(controller);
      
      controller.onResult((result) => {
        setResponses(prev => {
          const newResponses = [...prev];
          newResponses[activeSection] = result.transcript;
          return newResponses;
        });
      });
      
      controller.onEnd(() => {
        setIsListening(false);
        setTimeRemaining(null);
      });
      
      controller.start();
      setIsListening(true);
    } catch (error) {
      console.error('Error starting speech recognition:', error);
      toast({
        title: "Speech recognition error",
        description: "We couldn't access your microphone. Please check your browser permissions.",
        variant: "destructive"
      });
    }
  };
  
  const stopListening = () => {
    if (recognitionController) {
      recognitionController.stop();
    }
  };
  
  const speakPrompt = async () => {
    try {
      if (speechController) {
        speechController.cancel();
      }
      
      // Use hiddenText if available, otherwise use prompt
      const currentSection = test.sections ? test.sections[activeSection] : test;
      const textToSpeak = currentSection.hiddenText || currentSection.prompt || test.prompt;
      
      const controller = await speakText(textToSpeak, {
        onStart: () => setIsSpeaking(true),
        onEnd: () => setIsSpeaking(false),
        onError: (error) => {
          console.error('Speech synthesis error:', error);
          setIsSpeaking(false);
          toast({
            title: "Text-to-speech error",
            description: "We couldn't play the audio. Please try again.",
            variant: "destructive"
          });
        }
      });
      
      setSpeechController(controller);
    } catch (error) {
      console.error('Error starting speech synthesis:', error);
      toast({
        title: "Text-to-speech error",
        description: "Text-to-speech is not supported in this browser.",
        variant: "destructive"
      });
    }
  };
  
  const stopSpeaking = () => {
    if (speechController) {
      speechController.cancel();
      setIsSpeaking(false);
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
              <div className="bg-green-50 p-6 rounded-full mb-4">
                <Award className="h-16 w-16 text-green-500" />
              </div>
            ) : (
              <div className="bg-amber-50 p-6 rounded-full mb-4">
                <AlertCircle className="h-16 w-16 text-amber-500" />
              </div>
            )}
            <h3 className="text-2xl font-bold">
              {passed ? 'Congratulations!' : 'Not Quite There Yet'}
            </h3>
            <div className="mt-4 w-full max-w-md">
              <div className="flex justify-between text-sm mb-1">
                <span>Your score: {Math.round(feedback.score)}%</span>
                <span>Passing score: {test.minScore}%</span>
              </div>
              <Progress 
                value={feedback.score} 
                max={100} 
                className={`h-3 ${passed ? 'bg-green-100' : 'bg-amber-100'}`}
                indicatorClassName={passed ? 'bg-green-500' : 'bg-amber-500'}
              />
              <p className="text-gray-500 mt-2 text-center">
                {passed 
                  ? 'You passed the test! You can now move on to the next lesson.' 
                  : `You need at least ${test.minScore}% to pass this test. Review the feedback and try again.`}
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-medium text-lg mb-2 flex items-center">
              <Info className="mr-2 h-5 w-5 text-blue-500" />
              Feedback Summary:
            </h3>
            <p className="text-gray-700">{feedback.feedback}</p>
            
            <Accordion type="single" collapsible className="mt-4">
              <AccordionItem value="strengths">
                <AccordionTrigger className="text-green-700 font-medium">
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Strengths
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    {feedback.strengths?.map((strength: string, index: number) => (
                      <li key={index} className="text-gray-700">{strength}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="areas">
                <AccordionTrigger className="text-amber-700 font-medium">
                  <AlertCircle className="mr-2 h-4 w-4" />
                  Areas to Improve
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    {feedback.areasToImprove?.map((area: string, index: number) => (
                      <li key={index} className="text-gray-700">{area}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="suggestions">
                <AccordionTrigger className="text-blue-700 font-medium">
                  <Lightbulb className="mr-2 h-4 w-4" />
                  Suggestions
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    {feedback.suggestions?.map((suggestion: string, index: number) => (
                      <li key={index} className="text-gray-700">{suggestion}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              {feedback.detailedFeedback && feedback.detailedFeedback.length > 0 && (
                <AccordionItem value="detailedFeedback">
                  <AccordionTrigger className="text-indigo-700 font-medium">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Specific Improvements
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      {feedback.detailedFeedback.map((item: any, index: number) => (
                        <div key={index} className="bg-indigo-50 p-3 rounded-md border border-indigo-100">
                          <div className="flex items-start gap-2">
                            <div className="bg-indigo-100 text-indigo-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                              {index + 1}
                            </div>
                            <div>
                              <p className="font-medium text-indigo-800">
                                {item.section !== undefined ? `Section ${item.section + 1}: ` : ''}
                                "<span className="text-red-500">{item.word}</span>"
                              </p>
                              <p className="text-gray-700 mt-1">{item.issue}</p>
                              {item.suggestion && (
                                <p className="text-indigo-700 mt-1 italic">
                                  Suggestion: {item.suggestion}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )}
              
              {feedback.sectionScores && (
                <AccordionItem value="sectionScores">
                  <AccordionTrigger className="text-blue-700 font-medium">
                    <BarChart className="mr-2 h-4 w-4" />
                    Section Scores
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      {feedback.sectionScores.map((section: any, index: number) => (
                        <div key={index} className="border rounded p-3">
                          <div className="flex justify-between items-center mb-1">
                            <h4 className="font-medium">{section.section}</h4>
                            <span className="font-bold">{section.score}%</span>
                          </div>
                          <Progress 
                            value={section.score} 
                            max={100} 
                            className="h-2 mb-2"
                          />
                          <p className="text-sm text-gray-600">{section.feedback}</p>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )}
              
              <AccordionItem value="response">
                <AccordionTrigger className="text-purple-700 font-medium">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Your {responses.length > 1 ? 'Responses' : 'Response'}
                </AccordionTrigger>
                <AccordionContent>
                  {responses.length > 1 ? (
                    <div className="space-y-3">
                      {responses.map((response, index) => {
                        // Find detailed feedback for this section
                        const sectionFeedback = feedback.detailedFeedback?.filter((item: any) => 
                          item.section === undefined || item.section === index
                        );
                        
                        // Highlight words that need improvement
                        let highlightedResponse = response;
                        if (sectionFeedback && sectionFeedback.length > 0) {
                          // Sort by word length (descending) to avoid replacing parts of longer phrases first
                          const sortedFeedback = [...sectionFeedback].sort((a, b) => 
                            b.word.length - a.word.length
                          );
                          
                          // Replace each word with a highlighted version
                          sortedFeedback.forEach((item: any) => {
                            const word = item.word;
                            if (word && highlightedResponse.includes(word)) {
                              highlightedResponse = highlightedResponse.replace(
                                word,
                                `<span class="bg-red-100 text-red-800 px-0.5 rounded border-b border-red-300" title="${item.issue}">${word}</span>`
                              );
                            }
                          });
                        }
                        
                        return (
                          <div key={index} className="p-3 bg-white rounded border">
                            <h4 className="font-medium mb-1">
                              {test.sections ? test.sections[index].title : `Response ${index + 1}`}:
                            </h4>
                            <div 
                              className="text-gray-700 whitespace-pre-wrap"
                              dangerouslySetInnerHTML={{ __html: highlightedResponse }}
                            />
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="p-3 bg-white rounded border">
                      {feedback.detailedFeedback && feedback.detailedFeedback.length > 0 ? (
                        (() => {
                          // Highlight words that need improvement
                          let highlightedResponse = responses[0];
                          
                          // Sort by word length (descending) to avoid replacing parts of longer phrases first
                          const sortedFeedback = [...feedback.detailedFeedback].sort((a, b) => 
                            b.word.length - a.word.length
                          );
                          
                          // Replace each word with a highlighted version
                          sortedFeedback.forEach((item: any) => {
                            const word = item.word;
                            if (word && highlightedResponse.includes(word)) {
                              highlightedResponse = highlightedResponse.replace(
                                word,
                                `<span class="bg-red-100 text-red-800 px-0.5 rounded border-b border-red-300" title="${item.issue}">${word}</span>`
                              );
                            }
                          });
                          
                          return (
                            <div 
                              className="text-gray-700 whitespace-pre-wrap"
                              dangerouslySetInnerHTML={{ __html: highlightedResponse }}
                            />
                          );
                        })()
                      ) : (
                        <p className="text-gray-700 whitespace-pre-wrap">{responses[0]}</p>
                      )}
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={() => setFeedback(null)}
          >
            Try Again
          </Button>
          <Button 
            className="flex-1 bg-green-600 hover:bg-green-700"
            onClick={() => window.location.reload()}
          >
            {passed ? 'Complete Lesson' : 'Return to Lesson'}
          </Button>
        </CardFooter>
      </Card>
    );
  }
  
  // Helper function to get the current section or test
  const getCurrentSection = () => {
    if (test.sections) {
      return test.sections[activeSection];
    }
    return test;
  };
  
  // Helper function to get the current response
  const getCurrentResponse = () => {
    return responses[activeSection];
  };
  
  // Helper function to update the current response
  const updateCurrentResponse = (value: string) => {
    const newResponses = [...responses];
    newResponses[activeSection] = value;
    setResponses(newResponses);
  };
  
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{test.title}</CardTitle>
            <CardDescription>{test.description}</CardDescription>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setShowInstructions(!showInstructions)}
                >
                  <HelpCircle className="h-5 w-5 text-gray-500" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Toggle instructions</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {showInstructions && (
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h3 className="font-medium mb-2 text-blue-800 flex items-center">
              <Info className="mr-2 h-5 w-5" />
              Instructions:
            </h3>
            <ol className="list-decimal list-inside space-y-1 text-gray-700">
              <li>Read the prompt carefully</li>
              <li>
                {getCurrentSection().type === 'writing' 
                  ? 'Write your response in the text area below' 
                  : 'Record your spoken response using the microphone button'}
              </li>
              <li>Make sure to address all parts of the prompt</li>
              <li>Review your response before submitting</li>
              <li>Click "Submit for Evaluation" when you're ready</li>
            </ol>
            <p className="mt-2 text-sm text-blue-700">
              <strong>Note:</strong> You need to score at least {test.minScore}% to pass this test.
            </p>
          </div>
        )}
        
        {/* Section tabs if there are multiple sections */}
        {test.sections && test.sections.length > 1 && (
          <div className="mb-4">
            <h3 className="text-sm font-medium mb-2">Test Sections:</h3>
            <div className="flex flex-wrap gap-2">
              {test.sections.map((section, index) => (
                <Button
                  key={index}
                  variant={activeSection === index ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveSection(index)}
                  disabled={isListening || isProcessing}
                  className="flex items-center gap-1"
                >
                  <span>{index + 1}.</span> {section.title}
                  {wordCounts[index] > 0 && (
                    <span className="ml-1 text-xs bg-gray-100 px-1.5 py-0.5 rounded-full">
                      {wordCounts[index]}
                    </span>
                  )}
                </Button>
              ))}
            </div>
          </div>
        )}
        
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
          <div className="flex justify-between items-start">
            <h3 className="font-medium mb-2 text-purple-800">
              {test.sections && test.sections.length > 1 
                ? `Section ${activeSection + 1} Prompt:` 
                : 'Prompt:'}
            </h3>
            <div className="flex items-center">
              {getCurrentSection().type === 'listening' && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0"
                  onClick={isSpeaking ? stopSpeaking : speakPrompt}
                  title={isSpeaking ? "Stop speaking" : "Listen to audio"}
                >
                  {isSpeaking ? (
                    <VolumeX className="h-4 w-4 text-purple-700" />
                  ) : (
                    <Volume2 className="h-4 w-4 text-purple-700" />
                  )}
                </Button>
              )}
            </div>
          </div>
          <p className="text-gray-700 whitespace-pre-line">
            {getCurrentSection().prompt || test.prompt}
          </p>
          
          {test.sections && test.sections.length > 1 && getCurrentSection().description && (
            <p className="mt-2 text-sm text-purple-700 italic">
              {getCurrentSection().description}
            </p>
          )}
          
          {/* Display reading text if this is a reading section */}
          {getCurrentSection().type === 'reading' && getCurrentSection().text && (
            <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200">
              <h4 className="font-medium mb-2 text-gray-800">Reading Text:</h4>
              <div className="text-gray-700 whitespace-pre-line">
                {getCurrentSection().text}
              </div>
            </div>
          )}
        </div>
        
        {getCurrentSection().criteria && (
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
            <h3 className="font-medium mb-2 text-amber-800">Evaluation Criteria:</h3>
            <ul className="list-disc list-inside space-y-1">
              {getCurrentSection().criteria.map((criterion, index) => (
                <li key={index} className="text-gray-700">{criterion}</li>
              ))}
            </ul>
          </div>
        )}
        
        <Tabs 
          value={getCurrentSection().type === 'speaking' ? 'speak' : 'write'} 
          onValueChange={setActiveTab} 
          className="mt-6"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="write" disabled={isListening}>
              Write Response
            </TabsTrigger>
            <TabsTrigger value="speak" disabled={isListening}>
              Speak Response
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="write" className="mt-4">
            <div className="space-y-2">
              <Textarea 
                placeholder="Write your response here..."
                className="w-full h-64 focus:border-purple-400"
                value={getCurrentResponse()}
                onChange={(e) => updateCurrentResponse(e.target.value)}
                disabled={isProcessing}
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>{wordCounts[activeSection]} words</span>
                <span>Minimum recommended: 30 words</span>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="speak" className="mt-4">
            <div className="space-y-4">
              <div className="flex flex-col items-center justify-center py-6">
                <Button 
                  variant={isListening ? "destructive" : "default"}
                  size="lg"
                  className={`h-24 w-24 rounded-full ${isListening ? 'animate-pulse' : ''}`}
                  onClick={isListening ? stopListening : startListening}
                  disabled={isProcessing}
                >
                  {isListening ? (
                    <MicOff className="h-10 w-10" />
                  ) : (
                    <Mic className="h-10 w-10" />
                  )}
                </Button>
                <p className="mt-3 text-sm text-gray-600">
                  {isListening 
                    ? `Recording... ${timeRemaining !== null ? `(${timeRemaining}s)` : ''}` 
                    : "Click to start recording your response"}
                </p>
                
                {timeRemaining !== null && (
                  <Progress 
                    value={60 - timeRemaining} 
                    max={60} 
                    className="w-64 h-2 mt-2 bg-gray-200"
                    indicatorClassName="bg-red-500"
                  />
                )}
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-1 text-gray-700">Transcription:</h4>
                <div className="border rounded-md p-3 min-h-[100px] bg-white">
                  {getCurrentResponse() ? (
                    <p className="text-gray-700">{getCurrentResponse()}</p>
                  ) : (
                    <p className="text-gray-400 italic">
                      {isListening 
                        ? "Listening... speak clearly into your microphone" 
                        : "Your speech will appear here after recording"}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        {test.sections && test.sections.length > 1 ? (
          <div className="flex w-full gap-2 mb-2">
            <Button
              variant="outline"
              onClick={() => setActiveSection(Math.max(0, activeSection - 1))}
              disabled={activeSection === 0 || isProcessing || isListening}
              className="flex-1"
            >
              Previous Section
            </Button>
            <Button
              variant="outline"
              onClick={() => setActiveSection(Math.min(test.sections!.length - 1, activeSection + 1))}
              disabled={activeSection === test.sections.length - 1 || isProcessing || isListening}
              className="flex-1"
            >
              Next Section
            </Button>
          </div>
        ) : null}
        
        <Button 
          className="w-full bg-purple-600 hover:bg-purple-700" 
          onClick={handleSubmit}
          disabled={responses.some(r => r.trim().length < 10) || isProcessing || isListening}
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
        
        {responses.some((r, i) => r.trim().length < 10 && r.trim().length > 0) && (
          <p className="text-xs text-amber-600 text-center">
            One or more of your responses is too short. Please provide more detailed responses.
          </p>
        )}
      </CardFooter>
    </Card>
  );
};

export default PracticalTest;
