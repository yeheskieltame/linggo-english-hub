
import React, { useState } from 'react';
import { LessonStage } from '@/types/lesson';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import YouTube from 'react-youtube';
import { CheckCircle, ArrowRight, BookOpen, VolumeUp, Lightbulb } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';

interface LessonStageContentProps {
  stage: LessonStage;
  onComplete: (stageId: string) => void;
}

const LessonStageContent: React.FC<LessonStageContentProps> = ({ stage, onComplete }) => {
  const [isVideoPlayed, setIsVideoPlayed] = useState(false);
  const [isReadingComplete, setIsReadingComplete] = useState(false);
  const [showExamples, setShowExamples] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('content');
  const [readingProgress, setReadingProgress] = useState(0);
  
  const handleVideoPlay = () => {
    setIsVideoPlayed(true);
  };
  
  const handleVideoEnd = () => {
    setIsVideoPlayed(true);
  };
  
  const handleReadingComplete = () => {
    setIsReadingComplete(true);
    setReadingProgress(100);
  };

  // Track reading progress when scrolling
  const handleContentScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const element = e.currentTarget;
    const scrollPosition = element.scrollTop;
    const totalHeight = element.scrollHeight - element.clientHeight;
    const progress = Math.min(Math.round((scrollPosition / totalHeight) * 100), 100);
    
    setReadingProgress(progress);
    
    // Auto-mark as read if scrolled to bottom
    if (progress >= 90 && !isReadingComplete) {
      setIsReadingComplete(true);
    }
  };
  
  const canCompleteStage = () => {
    // If there's a video, it should be played before completion
    if (stage.videoId && !isVideoPlayed) {
      return false;
    }
    
    // Always require reading to be marked as complete
    if (!isReadingComplete) {
      return false;
    }
    
    return true;
  };
  
  const handleMarkComplete = () => {
    onComplete(stage.id);
  };
  
  // Parse the content to render markdown-like formatting
  const renderContent = (content: string) => {
    // Process headings
    let processedContent = content;
    
    // Handle h1 headings
    processedContent = processedContent.replace(/^# (.+)$/gm, '<h1 class="text-2xl font-bold mt-6 mb-3 text-purple-800">$1</h1>');
    
    // Handle h2 headings
    processedContent = processedContent.replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold mt-5 mb-2 text-purple-700">$1</h2>');
    
    // Handle h3 headings
    processedContent = processedContent.replace(/^### (.+)$/gm, '<h3 class="text-lg font-semibold mt-4 mb-2 text-purple-600">$1</h3>');
    
    // Handle bold text
    processedContent = processedContent.replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold">$1</strong>');
    
    // Handle italic text
    processedContent = processedContent.replace(/\*(.+?)\*/g, '<em class="italic">$1</em>');
    
    // Handle lists
    processedContent = processedContent.replace(/^- (.+)$/gm, '<li class="ml-4 my-1 flex items-start"><span class="inline-block w-2 h-2 rounded-full bg-purple-400 mt-2 mr-2"></span><span>$1</span></li>');
    
    // Add paragraph tags for normal text (lines that don't start with markup)
    processedContent = processedContent.replace(/^([^<\n].+)$/gm, '<p class="my-3 leading-relaxed text-gray-700">$1</p>');
    
    // Fix for consecutive list items
    processedContent = processedContent.replace(/(<\/li>\n<li)/g, '</li><li');
    
    // Wrap lists properly
    processedContent = processedContent.replace(/(<li.+?<\/li>)/gs, '<ul class="my-3 space-y-2">$1</ul>');
    
    // Handle double line breaks as paragraph breaks
    processedContent = processedContent.replace(/\n\n/g, '</p><p class="my-3 leading-relaxed text-gray-700">');
    
    return processedContent;
  };
  
  return (
    <Card className="w-full shadow-md border-t-4 border-t-purple-500">
      <CardHeader className="bg-gray-50 border-b">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl text-purple-900">{stage.title}</CardTitle>
          <div className="flex space-x-2">
            {stage.videoId && (
              <Badge variant={isVideoPlayed ? "outline" : "secondary"} className="ml-2">
                {isVideoPlayed ? "Video Watched ✓" : "Includes Video"}
              </Badge>
            )}
            <Badge variant="outline" className="bg-purple-50 text-purple-800 border-purple-300">
              Lesson Material
            </Badge>
          </div>
        </div>
        {stage.description && <p className="text-gray-600 mt-1">{stage.description}</p>}
        
        <Progress 
          value={readingProgress} 
          className="h-1 mt-4" 
          indicatorClassName="bg-purple-500" 
        />
      </CardHeader>
      
      <Tabs defaultValue="content" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-3 mb-0 bg-gray-100 rounded-none border-b p-0">
          <TabsTrigger value="content" className="flex items-center gap-2 py-3 rounded-none data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-purple-500">
            <BookOpen className="h-4 w-4" />
            <span>Learning Material</span>
          </TabsTrigger>
          {stage.videoId && (
            <TabsTrigger value="video" className="flex items-center gap-2 py-3 rounded-none data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-purple-500">
              <VolumeUp className="h-4 w-4" />
              <span>Video Lesson</span>
            </TabsTrigger>
          )}
          {stage.examples && stage.examples.length > 0 && (
            <TabsTrigger value="examples" className="flex items-center gap-2 py-3 rounded-none data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-purple-500">
              <Lightbulb className="h-4 w-4" />
              <span>Examples</span>
            </TabsTrigger>
          )}
        </TabsList>
        
        <TabsContent value="content" className="mt-0 p-0">
          <CardContent className="p-0">
            {/* Image Section */}
            {stage.imageUrl && (
              <div className="w-full">
                <img 
                  src={stage.imageUrl}
                  alt={stage.title}
                  className="w-full max-h-96 object-cover"
                />
              </div>
            )}
            
            {/* Content Section */}
            <div 
              className="p-6 max-h-[500px] overflow-y-auto" 
              onScroll={handleContentScroll}
            >
              <div 
                className="prose max-w-none lesson-content"
                dangerouslySetInnerHTML={{ __html: renderContent(stage.content) }}
              />
            </div>
          </CardContent>
        </TabsContent>
        
        {stage.videoId && (
          <TabsContent value="video" className="mt-0 p-0">
            <CardContent className="p-0">
              <div className="aspect-video w-full">
                <YouTube 
                  videoId={stage.videoId} 
                  className="w-full"
                  opts={{
                    width: '100%',
                    height: '100%',
                    playerVars: {
                      autoplay: 0,
                    },
                  }}
                  onPlay={handleVideoPlay}
                  onEnd={handleVideoEnd}
                />
              </div>
              {isVideoPlayed && (
                <div className="p-4 bg-green-50 text-green-800 flex items-center justify-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Video watched!</span>
                </div>
              )}
            </CardContent>
          </TabsContent>
        )}
        
        {stage.examples && stage.examples.length > 0 && (
          <TabsContent value="examples" className="mt-0 p-0">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4 text-purple-800">Practice Examples</h3>
              <div className="space-y-4">
                {stage.examples.map((example, index) => (
                  <div key={index} className="border rounded-md p-4 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <p className="font-medium text-purple-900">{example.english}</p>
                    <p className="text-gray-600 mt-2 pt-2 border-t">{example.indonesian}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </TabsContent>
        )}
      </Tabs>
      
      <CardFooter className="flex justify-between items-center p-4 bg-gray-50 border-t">
        <div>
          {!isReadingComplete ? (
            <Button 
              variant="outline" 
              onClick={handleReadingComplete}
              className="text-purple-700 border-purple-300 hover:bg-purple-50"
            >
              Mark as Read
            </Button>
          ) : (
            <div className="flex items-center text-green-600">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Reading completed</span>
            </div>
          )}
        </div>
        
        <Button 
          onClick={handleMarkComplete}
          disabled={!canCompleteStage()}
          className="flex items-center bg-purple-600 hover:bg-purple-700"
        >
          <span>Complete & Continue</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LessonStageContent;
