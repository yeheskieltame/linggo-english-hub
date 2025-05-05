
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ListVideo, Subtitles, Info } from 'lucide-react';

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  description?: string;
  autoplay?: boolean;
  className?: string;
  timestamps?: {
    time: string;
    label: string;
  }[];
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ 
  videoId, 
  title = "YouTube video player", 
  description,
  autoplay = false,
  className = "",
  timestamps = []
}) => {
  const [activeTab, setActiveTab] = useState<string>('video');
  const [startTime, setStartTime] = useState<string | null>(null);
  
  // Convert "mm:ss" format to seconds for YouTube URL parameter
  const getStartTimeInSeconds = (timeString: string | null): number => {
    if (!timeString) return 0;
    
    const parts = timeString.split(':');
    if (parts.length === 2) {
      // mm:ss format
      const minutes = parseInt(parts[0], 10);
      const seconds = parseInt(parts[1], 10);
      return minutes * 60 + seconds;
    } else if (parts.length === 3) {
      // hh:mm:ss format
      const hours = parseInt(parts[0], 10);
      const minutes = parseInt(parts[1], 10);
      const seconds = parseInt(parts[2], 10);
      return hours * 3600 + minutes * 60 + seconds;
    }
    return 0;
  };
  
  const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1${autoplay ? '&autoplay=1' : ''}${startTime ? `&start=${getStartTimeInSeconds(startTime)}` : ''}`;
  
  const handleTimestampClick = (time: string) => {
    setStartTime(time);
    setActiveTab('video');
  };
  
  return (
    <div className={`overflow-hidden rounded-lg shadow-md ${className}`}>
      {timestamps.length > 0 || description ? (
        <Tabs 
          value={activeTab} 
          onValueChange={setActiveTab} 
          className="w-full"
        >
          <div className="bg-gray-100 px-4">
            <TabsList className="h-10 bg-transparent">
              <TabsTrigger value="video" className="data-[state=active]:bg-white h-10">
                <ListVideo className="h-4 w-4 mr-2" />
                <span>Video</span>
              </TabsTrigger>
              
              {timestamps.length > 0 && (
                <TabsTrigger value="timestamps" className="data-[state=active]:bg-white h-10">
                  <Subtitles className="h-4 w-4 mr-2" />
                  <span>Timestamps</span>
                </TabsTrigger>
              )}
              
              {description && (
                <TabsTrigger value="info" className="data-[state=active]:bg-white h-10">
                  <Info className="h-4 w-4 mr-2" />
                  <span>Description</span>
                </TabsTrigger>
              )}
            </TabsList>
          </div>
          
          <TabsContent value="video" className="mt-0">
            <div className="relative overflow-hidden rounded-b-lg aspect-video">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={embedUrl}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </TabsContent>
          
          {timestamps.length > 0 && (
            <TabsContent value="timestamps" className="mt-0">
              <div className="bg-white p-4 rounded-b-lg max-h-[300px] overflow-y-auto">
                <h3 className="font-medium mb-4">Video Chapters</h3>
                <div className="space-y-2">
                  {timestamps.map((item, index) => (
                    <Button 
                      key={index}
                      variant="outline" 
                      className="w-full justify-between hover:bg-gray-50"
                      onClick={() => handleTimestampClick(item.time)}
                    >
                      <span>{item.label}</span>
                      <Badge variant="outline">{item.time}</Badge>
                    </Button>
                  ))}
                </div>
              </div>
            </TabsContent>
          )}
          
          {description && (
            <TabsContent value="info" className="mt-0">
              <div className="bg-white p-4 rounded-b-lg max-h-[300px] overflow-y-auto">
                <h3 className="font-medium mb-3">{title}</h3>
                <p className="text-gray-700 text-sm whitespace-pre-line">{description}</p>
              </div>
            </TabsContent>
          )}
        </Tabs>
      ) : (
        <div className="relative overflow-hidden rounded-lg aspect-video">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={embedUrl}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default YouTubeEmbed;
