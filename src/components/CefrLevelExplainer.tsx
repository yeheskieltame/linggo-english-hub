
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { CEFR_LEVELS } from '@/types/lesson';

interface CefrLevelExplainerProps {
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  expanded?: boolean;
}

const CefrLevelExplainer: React.FC<CefrLevelExplainerProps> = ({ 
  level,
  expanded = false 
}) => {
  const cefrLevel = CEFR_LEVELS[level];
  
  if (!expanded) {
    return (
      <Badge className={cefrLevel.color}>
        CEFR {level} - {cefrLevel.label}
      </Badge>
    );
  }
  
  // Skills users typically have at this level
  const getSkillsForLevel = (level: string) => {
    switch (level) {
      case 'A1':
        return [
          "Can understand and use very basic phrases",
          "Can introduce themselves and others",
          "Can ask and answer questions about personal details"
        ];
      case 'A2':
        return [
          "Can understand frequently used expressions",
          "Can communicate in simple and routine tasks",
          "Can describe simple aspects of their background"
        ];
      case 'B1':
        return [
          "Can deal with most situations while traveling",
          "Can describe experiences, events, and ambitions",
          "Can briefly give reasons and explanations"
        ];
      case 'B2':
        return [
          "Can understand complex texts on concrete and abstract topics",
          "Can interact with a degree of fluency with native speakers",
          "Can produce clear, detailed text on a wide range of subjects"
        ];
      case 'C1':
        return [
          "Can understand demanding, longer texts",
          "Can express ideas fluently and spontaneously",
          "Can use language flexibly and effectively for social, academic and professional purposes"
        ];
      case 'C2':
        return [
          "Can understand with ease virtually everything heard or read",
          "Can summarize information from different spoken and written sources",
          "Can express themselves spontaneously, very fluently and precisely"
        ];
      default:
        return [];
    }
  };
  
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <Badge className={cefrLevel.color}>
            CEFR {level}
          </Badge>
          <h3 className="font-semibold">{cefrLevel.label}</h3>
        </div>
        
        <p className="text-sm text-gray-600 mb-3">{cefrLevel.description}</p>
        
        <div className="mt-3">
          <h4 className="text-sm font-medium mb-2">At this level you can:</h4>
          <ul className="list-disc list-inside text-sm space-y-1">
            {getSkillsForLevel(level).map((skill, index) => (
              <li key={index} className="text-gray-700">{skill}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default CefrLevelExplainer;
