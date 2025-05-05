
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { SKILL_COLORS } from '@/types/lesson';

interface Skill {
  type: 'reading' | 'writing' | 'speaking' | 'listening' | 'grammar' | 'vocabulary';
  focus: number; // 1-10 scale
}

interface LessonSkillFocusProps {
  skills: Skill[];
  compact?: boolean;
}

const LessonSkillFocus: React.FC<LessonSkillFocusProps> = ({ skills, compact = false }) => {
  // Helper function to capitalize first letter
  const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
  
  if (compact) {
    // Compact view - just badges
    return (
      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <Badge key={skill.type} className={SKILL_COLORS[skill.type]}>
            {capitalize(skill.type)}
          </Badge>
        ))}
      </div>
    );
  }
  
  // Full view with focus indicators
  return (
    <div className="space-y-3">
      {skills.map(skill => (
        <div key={skill.type} className="flex items-center gap-2">
          <Badge className={`${SKILL_COLORS[skill.type]} w-24 justify-center`}>
            {capitalize(skill.type)}
          </Badge>
          <Progress value={skill.focus * 10} className="h-2 flex-1" />
          <span className="text-xs text-gray-500 w-8 text-right">{skill.focus}/10</span>
        </div>
      ))}
    </div>
  );
};

export default LessonSkillFocus;
