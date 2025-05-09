
import React, { useState } from 'react';
import { LessonStage } from '@/types/lesson';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import YouTube from 'react-youtube';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface LessonStageContentProps {
  stage: LessonStage;
  onComplete: (stageId: string) => void;
}

const LessonStageContent: React.FC<LessonStageContentProps> = ({ stage, onComplete }) => {
  const [isVideoPlayed, setIsVideoPlayed] = useState(false);
  const [isReadingComplete, setIsReadingComplete] = useState(false);
  const [showExamples, setShowExamples] = useState(false);
  
  const handleVideoPlay = () => {
    setIsVideoPlayed(true);
  };
  
  const handleVideoEnd = () => {
    setIsVideoPlayed(true);
  };
  
  const handleReadingComplete = () => {
    setIsReadingComplete(true);
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
    processedContent = processedContent.replace(/^# (.+)$/gm, '<h1 class="text-2xl font-bold mt-6 mb-3">$1</h1>');
    
    // Handle h2 headings
    processedContent = processedContent.replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold mt-5 mb-2">$1</h2>');
    
    // Handle h3 headings
    processedContent = processedContent.replace(/^### (.+)$/gm, '<h3 class="text-lg font-semibold mt-4 mb-2">$1</h3>');
    
    // Handle bold text
    processedContent = processedContent.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    
    // Handle italic text
    processedContent = processedContent.replace(/\*(.+?)\*/g, '<em>$1</em>');
    
    // Handle lists
    processedContent = processedContent.replace(/^- (.+)$/gm, '<li class="ml-4">$1</li>');
    
    // Add paragraph tags for normal text (lines that don't start with markup)
    processedContent = processedContent.replace(/^([^<\n].+)$/gm, '<p class="my-2">$1</p>');
    
    // Fix for consecutive list items
    processedContent = processedContent.replace(/(<\/li>\n<li)/g, '</li><li');
    
    // Wrap lists properly
    processedContent = processedContent.replace(/(<li.+?<\/li>)/gs, '<ul class="list-disc ml-5 my-3">$1</ul>');
    
    // Handle double line breaks as paragraph breaks
    processedContent = processedContent.replace(/\n\n/g, '</p><p class="my-2">');
    
    return processedContent;
  };
  
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>{stage.title}</CardTitle>
          {stage.videoId && (
            <Badge variant={isVideoPlayed ? "outline" : "secondary"} className="ml-2">
              {isVideoPlayed ? "Video Watched" : "Includes Video"}
            </Badge>
          )}
        </div>
        {stage.description && <p className="text-gray-600">{stage.description}</p>}
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Video Section */}
        {stage.videoId && (
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Video Lesson</h3>
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
          </div>
        )}
        
        {/* Image Section */}
        {stage.imageUrl && (
          <div className="my-4">
            <img 
              src={stage.imageUrl}
              alt={stage.title}
              className="rounded-md w-full max-h-80 object-cover"
            />
          </div>
        )}
        
        {/* Content Section */}
        <div className="mt-4 lesson-content">
          <h3 className="text-lg font-medium mb-3">Lesson Content</h3>
          <div 
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: renderContent(stage.content) }}
          />
          
          {!isReadingComplete && (
            <div className="mt-6 flex justify-center">
              <Button variant="outline" onClick={handleReadingComplete}>
                I've Finished Reading
              </Button>
            </div>
          )}
        </div>
        
        {/* Examples Section */}
        {stage.examples && stage.examples.length > 0 && (
          <div className="mt-6">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-medium">Examples</h3>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setShowExamples(!showExamples)}
              >
                {showExamples ? "Hide Examples" : "Show Examples"}
              </Button>
            </div>
            
            {showExamples && (
              <div className="space-y-3">
                {stage.examples.map((example, index) => (
                  <div key={index} className="border rounded-md p-3 bg-gray-50">
                    <p className="font-medium">{example.english}</p>
                    <p className="text-gray-600 mt-1">{example.indonesian}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </CardContent>
      
      <CardFooter className="flex justify-between">
        <div>
          {isReadingComplete && (
            <div className="flex items-center text-green-600">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Reading completed</span>
            </div>
          )}
        </div>
        
        <Button 
          onClick={handleMarkComplete}
          disabled={!canCompleteStage()}
          className="flex items-center"
        >
          <span>Complete & Continue</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LessonStageContent;
