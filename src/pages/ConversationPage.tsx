import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Volume2, Mic, Loader2, Book, ArrowLeft, Clock, MessageCircle, Info } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { mockLessons } from '@/data/mockData';
import { conversationScenarios, ConversationScenario } from '@/data/conversationScenarios';
import { startSpeechRecognition } from '@/services/speechRecognition';
import { 
  initializeConversation, 
  sendMessage, 
  speakAIMessage, 
  generateConversationFeedback,
  ConversationMessage,
  ConversationFeedback
} from '@/services/conversationService';

const CefrBadgeColor = {
  'A1': 'bg-slate-100 text-slate-800',
  'A2': 'bg-slate-200 text-slate-800',
  'B1': 'bg-yellow-100 text-yellow-800',
  'B2': 'bg-orange-100 text-orange-800',
  'C1': 'bg-red-100 text-red-800',
  'C2': 'bg-pink-100 text-pink-800',
};

const CategoryColors = {
  'introduction': 'bg-green-100 text-green-800',
  'daily': 'bg-emerald-100 text-emerald-800',
  'travel': 'bg-blue-100 text-blue-800',
  'business': 'bg-amber-100 text-amber-800',
  'academic': 'bg-violet-100 text-violet-800',
  'interview': 'bg-pink-100 text-pink-800',
};

const LevelsColor = {
  beginner: 'bg-green-100 text-green-800',
  intermediate: 'bg-blue-100 text-blue-800',
  advanced: 'bg-purple-100 text-purple-800',
};

enum ConversationState {
  SELECTING = 'selecting',
  PREPARING = 'preparing',
  ACTIVE = 'active',
  PROCESSING = 'processing',
  FEEDBACK = 'feedback',
}

const ConversationPage = () => {
  const { lessonId, scenarioId } = useParams<{ lessonId?: string, scenarioId?: string }>();
  const navigate = useNavigate();
  
  // State
  const [selectedScenario, setSelectedScenario] = useState<ConversationScenario | null>(null);
  const [conversationState, setConversationState] = useState<ConversationState>(ConversationState.SELECTING);
  const [messages, setMessages] = useState<ConversationMessage[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [feedback, setFeedback] = useState<ConversationFeedback | null>(null);
  
  // Filters
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');
  
  // Refs
  const recognitionRef = useRef<any>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Filter scenarios based on lessonId, category, and difficulty
  const availableScenarios = conversationScenarios
    .filter(scenario => lessonId ? scenario.lessonId === lessonId : true)
    .filter(scenario => categoryFilter === 'all' ? true : scenario.category === categoryFilter)
    .filter(scenario => difficultyFilter === 'all' ? true : scenario.difficulty === difficultyFilter);
  
  // Find the current lesson if lessonId is provided
  const currentLesson = lessonId ? mockLessons.find(lesson => lesson.id === lessonId) : null;
  
  // Initialize with scenarioId if provided
  useEffect(() => {
    if (scenarioId) {
      const scenario = conversationScenarios.find(s => s.id === scenarioId);
      if (scenario) {
        setSelectedScenario(scenario);
        setConversationState(ConversationState.PREPARING);
      }
    }
  }, [scenarioId]);
  
  // Initialize conversation when scenario is selected
  useEffect(() => {
    if (selectedScenario && conversationState === ConversationState.PREPARING) {
      initializeConversation(selectedScenario).then(initialMessages => {
        setMessages(initialMessages);
        setTimeRemaining(selectedScenario.durationInSeconds);
      });
    }
  }, [selectedScenario, conversationState]);
  
  // Speak the initial AI message when conversation starts
  useEffect(() => {
    if (conversationState === ConversationState.ACTIVE && messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage.role === 'assistant') {
        handleSpeakMessage(lastMessage.content);
      }
    }
  }, [conversationState, messages]);
  
  // Timer countdown
  useEffect(() => {
    if (conversationState === ConversationState.ACTIVE && timeRemaining > 0) {
      timerRef.current = setTimeout(() => {
        setTimeRemaining(prev => prev - 1);
      }, 1000);
      
      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    } else if (conversationState === ConversationState.ACTIVE && timeRemaining === 0) {
      handleEndConversation();
    }
  }, [conversationState, timeRemaining]);
  
  // Format time remaining
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  // Handle scenario selection
  const handleSelectScenario = (scenario: ConversationScenario) => {
    setSelectedScenario(scenario);
    setConversationState(ConversationState.PREPARING);
  };
  
  // Start the conversation
  const handleStartConversation = () => {
    setConversationState(ConversationState.ACTIVE);
  };
  
  // End the conversation and generate feedback
  const handleEndConversation = async () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
    
    if (selectedScenario && messages.length > 1) {
      setConversationState(ConversationState.PROCESSING);
      
      try {
        const conversationFeedback = await generateConversationFeedback(messages, selectedScenario);
        setFeedback(conversationFeedback);
        setConversationState(ConversationState.FEEDBACK);
      } catch (error) {
        console.error('Error generating feedback:', error);
        setConversationState(ConversationState.FEEDBACK);
      }
    }
  };
  
  // Start a new conversation
  const handleNewConversation = () => {
    setSelectedScenario(null);
    setMessages([]);
    setCurrentMessage('');
    setFeedback(null);
    setConversationState(ConversationState.SELECTING);
  };
  
  // Speak an AI message
  const handleSpeakMessage = async (message: string) => {
    if (isSpeaking) return;
    
    try {
      setIsSpeaking(true);
      await speakAIMessage(message);
    } catch (error) {
      console.error('Error speaking message:', error);
    } finally {
      setIsSpeaking(false);
    }
  };
  
  // Start listening for user speech
  const handleStartListening = async () => {
    if (isListening) return;
    
    try {
      setIsListening(true);
      setCurrentMessage('');
      
      const recognition = await startSpeechRecognition();
      recognitionRef.current = recognition;
      
      recognition.onResult((result) => {
        setCurrentMessage(result.transcript);
      });
      
      recognition.onEnd(() => {
        setIsListening(false);
        if (currentMessage) {
          handleSendMessage();
        }
      });
      
      recognition.start();
    } catch (error) {
      console.error('Error starting speech recognition:', error);
      setIsListening(false);
    }
  };
  
  // Stop listening
  const handleStopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };
  
  // Send the user's message and get AI response
  const handleSendMessage = async () => {
    if (!currentMessage.trim() || !selectedScenario) return;
    
    // Add user message to conversation
    const userMessage: ConversationMessage = {
      role: 'user',
      content: currentMessage
    };
    
    setMessages(prev => [...prev, userMessage]);
    setCurrentMessage('');
    
    try {
      // Get AI response
      const aiResponse = await sendMessage(messages, currentMessage);
      
      // Add AI response to conversation
      setMessages(prev => [...prev, aiResponse]);
      
      // Speak the AI response
      handleSpeakMessage(aiResponse.content);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };
  
  // Render the scenario selection screen
  const renderScenarioSelection = () => {
    // Get unique categories and difficulties for filters
    const categories = ['all', ...new Set(conversationScenarios.map(s => s.category))];
    const difficulties = ['all', ...new Set(conversationScenarios.map(s => s.difficulty))];
    
    if (availableScenarios.length === 0) {
      return (
        <div className="py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <h2 className="text-2xl font-bold text-purple-700">Select a Conversation Scenario</h2>
            
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              <div className="relative">
                <select
                  id="category-filter"
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="appearance-none pl-4 pr-10 py-2 bg-white border border-purple-200 rounded-full text-sm font-medium text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' 
                        ? 'All Categories' 
                        : category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="h-4 w-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              <div className="relative">
                <select
                  id="difficulty-filter"
                  value={difficultyFilter}
                  onChange={(e) => setDifficultyFilter(e.target.value)}
                  className="appearance-none pl-4 pr-10 py-2 bg-white border border-purple-200 rounded-full text-sm font-medium text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                >
                  {difficulties.map(difficulty => (
                    <option key={difficulty} value={difficulty}>
                      {difficulty === 'all' 
                        ? 'All Difficulties' 
                        : difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="h-4 w-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              {(categoryFilter !== 'all' || difficultyFilter !== 'all') && (
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    setCategoryFilter('all');
                    setDifficultyFilter('all');
                  }}
                  className="border-purple-200 text-purple-700 hover:bg-purple-50 rounded-full px-4"
                >
                  Clear Filters
                </Button>
              )}
            </div>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-8 text-center my-12">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-8 w-8 text-purple-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-purple-800">No Conversation Scenarios Available</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              {categoryFilter !== 'all' || difficultyFilter !== 'all' 
                ? "No scenarios match your current filters. Try changing your filter selections."
                : "There are no conversation scenarios available for this lesson yet."}
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {(categoryFilter !== 'all' || difficultyFilter !== 'all') && (
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setCategoryFilter('all');
                    setDifficultyFilter('all');
                  }}
                  className="border-purple-300 text-purple-700 hover:bg-purple-50"
                >
                  Clear Filters
                </Button>
              )}
              
              {lessonId && (
                <Button asChild className="bg-purple-600 hover:bg-purple-700">
                  <Link to={`/lessons/${lessonId}`}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Return to Lesson
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      );
    }
    
    return (
      <div className="py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <h2 className="text-2xl font-bold text-purple-700">Select a Conversation Scenario</h2>
          
          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            <div className="relative">
              <select
                id="category-filter"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="appearance-none pl-4 pr-10 py-2 bg-white border border-purple-200 rounded-full text-sm font-medium text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' 
                      ? 'All Categories' 
                      : category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="h-4 w-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            
            <div className="relative">
              <select
                id="difficulty-filter"
                value={difficultyFilter}
                onChange={(e) => setDifficultyFilter(e.target.value)}
                className="appearance-none pl-4 pr-10 py-2 bg-white border border-purple-200 rounded-full text-sm font-medium text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              >
                {difficulties.map(difficulty => (
                  <option key={difficulty} value={difficulty}>
                    {difficulty === 'all' 
                      ? 'All Difficulties' 
                      : difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="h-4 w-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            
            {(categoryFilter !== 'all' || difficultyFilter !== 'all') && (
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => {
                  setCategoryFilter('all');
                  setDifficultyFilter('all');
                }}
                className="border-purple-200 text-purple-700 hover:bg-purple-50 rounded-full px-4"
              >
                Clear Filters
              </Button>
            )}
          </div>
        </div>
        
        <div className="text-sm text-gray-500 mb-6 bg-purple-50 px-4 py-2 rounded-lg inline-block">
          Showing {availableScenarios.length} {availableScenarios.length === 1 ? 'scenario' : 'scenarios'}
        </div>
        
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {availableScenarios.map(scenario => (
            <Card 
              key={scenario.id} 
              className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              onClick={() => handleSelectScenario(scenario)}
            >
              <div className="h-2 bg-gradient-to-r from-purple-500 to-blue-500"></div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className={
                    scenario.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                    scenario.difficulty === 'medium' ? 'bg-blue-100 text-blue-800' :
                    'bg-purple-100 text-purple-800'
                  }>
                    {scenario.difficulty.charAt(0).toUpperCase() + scenario.difficulty.slice(1)}
                  </Badge>
                  
                  <Badge className={CefrBadgeColor[scenario.cefrLevel]}>
                    CEFR {scenario.cefrLevel}
                  </Badge>
                  
                  <Badge className={CategoryColors[scenario.category]}>
                    {scenario.category.charAt(0).toUpperCase() + scenario.category.slice(1)}
                  </Badge>
                </div>
                
                <h3 className="text-lg font-semibold mb-3 text-purple-800">{scenario.title}</h3>
                <p className="text-gray-600 mb-5 text-sm line-clamp-2">{scenario.description}</p>
                
                <div className="flex flex-col sm:flex-row justify-between gap-3 text-sm text-gray-500 pt-3 border-t border-gray-100">
                  <div className="flex items-center">
                    <span className="font-medium text-purple-700 mr-1">Role:</span> 
                    <span className="truncate">{scenario.userRole}</span>
                  </div>
                  <div className="flex items-center text-blue-600 font-medium">
                    <Clock className="h-4 w-4 mr-1" />
                    {Math.floor(scenario.durationInSeconds / 60)} min
                  </div>
                </div>
                
                <Button 
                  className="w-full mt-4 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white"
                  size="sm"
                >
                  Start Conversation
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  };
  
  // Render the conversation preparation screen
  const renderPreparation = () => {
    if (!selectedScenario) return null;
    
    return (
      <Card className="mb-6">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">Prepare for Your Conversation</h2>
          
          <div className="bg-linggo-light p-4 rounded-md mb-6">
            <h3 className="font-medium mb-2">Scenario:</h3>
            <p className="mb-4">{selectedScenario.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="font-medium text-sm text-gray-600">Your Role:</h4>
                <p className="font-semibold">{selectedScenario.userRole}</p>
              </div>
              <div>
                <h4 className="font-medium text-sm text-gray-600">AI Role:</h4>
                <p>{selectedScenario.aiRole}</p>
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="font-medium text-sm text-gray-600">Duration:</h4>
              <p>{Math.floor(selectedScenario.durationInSeconds / 60)} minutes</p>
            </div>
            
            <div>
              <h4 className="font-medium text-sm text-gray-600">First Message from AI:</h4>
              <p className="italic">"{selectedScenario.initialPrompt}"</p>
            </div>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-md mb-6 border border-amber-200">
            <h3 className="font-medium mb-2 flex items-center">
              <Info className="h-4 w-4 mr-2" /> Tips for Success
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Listen carefully to the AI's responses</li>
              <li>Speak clearly and at a natural pace</li>
              <li>Ask questions to keep the conversation flowing</li>
              <li>Use appropriate vocabulary for the scenario</li>
              <li>Try to achieve the goal of the conversation</li>
            </ul>
          </div>
          
          <div className="flex justify-between">
            <Button variant="outline" onClick={handleNewConversation}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </Button>
            <Button onClick={handleStartConversation}>
              <MessageCircle className="mr-2 h-4 w-4" /> Start Conversation
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };
  
  // Render the active conversation
  const renderActiveConversation = () => {
    if (!selectedScenario) return null;
    
    return (
      <div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <Badge variant="outline" className="mr-2">
              <Clock className="h-4 w-4 mr-1" /> {formatTime(timeRemaining)}
            </Badge>
            <Badge className={CategoryColors[selectedScenario.category]}>
              {selectedScenario.category.charAt(0).toUpperCase() + selectedScenario.category.slice(1)}
            </Badge>
          </div>
          <Button 
            className="bg-purple-600 hover:bg-purple-700"
            size="sm" 
            onClick={handleEndConversation}
          >
            End Conversation
          </Button>
        </div>
        
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <div>
                <span className="font-medium">Your role:</span> {selectedScenario.userRole}
              </div>
              <div>
                <span className="font-medium">AI role:</span> {selectedScenario.aiRole}
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto p-2">
          {messages.filter(m => m.role !== 'system').map((message, index) => (
            <div 
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] p-4 rounded-lg ${
                  message.role === 'user' 
                    ? 'bg-blue-50 rounded-lg border-r-4 border-blue-400 text-gray-700' 
                    : 'bg-purple-50 rounded-lg border-l-4 border-purple-400 text-gray-700'
                }`}
              >
                <p className={`font-medium mb-1 ${message.role === 'user' ? 'text-blue-800' : 'text-purple-800'}`}>
                  {message.role === 'user' ? 'You' : selectedScenario.aiRole}
                </p>
                <p>{message.content}</p>
                {message.role === 'assistant' && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="mt-2 h-7 text-xs text-purple-600 hover:text-purple-800 hover:bg-purple-100"
                    onClick={() => handleSpeakMessage(message.content)}
                    disabled={isSpeaking}
                  >
                    {isSpeaking ? <Loader2 className="h-3 w-3 animate-spin" /> : <Volume2 className="h-3 w-3" />}
                    <span className="ml-1">Listen</span>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <Card className="mb-4">
          <CardContent className="p-4">
            {currentMessage ? (
              <div>
                <h3 className="font-medium mb-2 text-sm">Your message:</h3>
                <p className="bg-gray-50 p-3 rounded-md">{currentMessage}</p>
                
                <div className="flex justify-end mt-3 space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setCurrentMessage('')}
                  >
                    Clear
                  </Button>
                  <Button 
                    size="sm"
                    onClick={handleSendMessage}
                  >
                    Send
                  </Button>
                </div>
              </div>
            ) : (
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
            )}
          </CardContent>
        </Card>
      </div>
    );
  };
  
  // Render the processing screen
  const renderProcessing = () => {
    return (
      <div className="text-center py-12">
        <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4" />
        <h2 className="text-xl font-semibold mb-2">Analyzing Your Conversation</h2>
        <p className="text-gray-600">
          Please wait while we analyze your conversation and prepare feedback...
        </p>
      </div>
    );
  };
  
  // Render the feedback screen
  const renderFeedback = () => {
    if (!feedback || !selectedScenario) return null;
    
    return (
      <div>
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Conversation Feedback</h2>
              <Badge className={
                feedback.score > 80 ? 'bg-green-100 text-green-800' :
                feedback.score > 60 ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }>
                Score: {feedback.score}/100
              </Badge>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium mb-2">Overall Feedback:</h3>
              <p className="bg-linggo-light p-4 rounded-md">{feedback.overallFeedback}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-medium mb-2 text-green-700">Strengths:</h3>
                <ul className="bg-green-50 p-4 rounded-md list-disc pl-5">
                  {feedback.strengthPoints.map((point, index) => (
                    <li key={index} className="mb-1">{point}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium mb-2 text-amber-700">Areas to Improve:</h3>
                <ul className="bg-amber-50 p-4 rounded-md list-disc pl-5">
                  {feedback.improvementAreas.map((area, index) => (
                    <li key={index} className="mb-1">{area}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium mb-2">Detailed Analysis:</h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="font-medium mb-1">Vocabulary:</h4>
                  <p>{feedback.vocabularyFeedback}</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="font-medium mb-1">Grammar:</h4>
                  <p>{feedback.grammarFeedback}</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="font-medium mb-1">Fluency:</h4>
                  <p>{feedback.fluencyFeedback}</p>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium mb-2">Recommended Phrases:</h3>
              <div className="bg-blue-50 p-4 rounded-md">
                <ul className="list-disc pl-5">
                  {feedback.recommendedPhrases.map((phrase, index) => (
                    <li key={index} className="mb-1">{phrase}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="flex justify-between">
              <Button variant="outline" onClick={handleNewConversation}>
                Try Another Scenario
              </Button>
              
              {lessonId && (
                <Button asChild>
                  <Link to={`/lessons/${lessonId}`}>
                    Return to Lesson
                  </Link>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };
  
  // Render the appropriate content based on conversation state
  const renderContent = () => {
    switch (conversationState) {
      case ConversationState.SELECTING:
        return renderScenarioSelection();
      case ConversationState.PREPARING:
        return renderPreparation();
      case ConversationState.ACTIVE:
        return renderActiveConversation();
      case ConversationState.PROCESSING:
        return renderProcessing();
      case ConversationState.FEEDBACK:
        return renderFeedback();
      default:
        return null;
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="inline-block px-4 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
              Interactive Learning
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {selectedScenario && conversationState !== ConversationState.SELECTING
                ? selectedScenario.title
                : currentLesson 
                  ? 'Conversation Practice: '
                  : ''}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
                {selectedScenario && conversationState !== ConversationState.SELECTING
                  ? ''
                  : currentLesson 
                    ? currentLesson.title
                    : 'Conversation Practice'}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              {selectedScenario && conversationState !== ConversationState.SELECTING
                ? selectedScenario.description
                : "Improve your speaking skills through interactive conversations with AI role-play partners."}
            </p>
            
            {/* Display scenario info if selected */}
            {selectedScenario && conversationState !== ConversationState.SELECTING ? (
              <div className="flex flex-wrap justify-center gap-3 mt-4">
                <Badge className={
                  selectedScenario.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                  selectedScenario.difficulty === 'medium' ? 'bg-blue-100 text-blue-800' :
                  'bg-purple-100 text-purple-800'
                }>
                  {selectedScenario.difficulty.charAt(0).toUpperCase() + selectedScenario.difficulty.slice(1)}
                </Badge>
                <Badge className={CefrBadgeColor[selectedScenario.cefrLevel]}>
                  CEFR {selectedScenario.cefrLevel}
                </Badge>
                <Badge className={CategoryColors[selectedScenario.category]}>
                  {selectedScenario.category.charAt(0).toUpperCase() + selectedScenario.category.slice(1)}
                </Badge>
              </div>
            ) : (
              /* Display lesson info if available */
              currentLesson && (
                <div className="flex flex-wrap justify-center gap-3 mt-4">
                  <Badge className={LevelsColor[currentLesson.level]}>
                    {currentLesson.level.charAt(0).toUpperCase() + currentLesson.level.slice(1)}
                  </Badge>
                  <Badge className={CefrBadgeColor[currentLesson.cefrLevel]}>
                    CEFR {currentLesson.cefrLevel}
                  </Badge>
                </div>
              )
            )}
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-12 bg-white flex-grow">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Navigation */}
          <div className="mb-6">
            {lessonId && conversationState === ConversationState.SELECTING && (
              <Link to={`/lessons/${lessonId}`} className="text-sm text-gray-500 flex items-center">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to lesson
              </Link>
            )}
          </div>
          
          {/* Content based on state */}
          {renderContent()}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ConversationPage;