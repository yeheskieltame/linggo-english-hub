
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { mockLessons } from '@/data/mockData';
import { CEFR_LEVELS, PATHWAYS, SKILL_COLORS } from '@/types/lesson';
import LessonSkillFocus from '@/components/LessonSkillFocus';
import { useAuth } from '@/providers/AuthProvider';

// Mock skills data for demonstration
const mockSkills = {
  'l1': [
    { type: 'grammar', focus: 8 },
    { type: 'vocabulary', focus: 7 },
    { type: 'speaking', focus: 5 },
  ],
  'l2': [
    { type: 'speaking', focus: 9 },
    { type: 'listening', focus: 8 },
  ],
  'l3': [
    { type: 'reading', focus: 9 },
    { type: 'writing', focus: 8 },
  ],
  'l4': [
    { type: 'listening', focus: 8 },
    { type: 'speaking', focus: 7 },
  ],
  'l5': [
    { type: 'writing', focus: 9 },
    { type: 'grammar', focus: 8 },
  ]
} as {[key: string]: any[]};

// Default skills if none are mapped
const defaultSkills = [
  { type: 'grammar', focus: 6 },
  { type: 'vocabulary', focus: 6 },
];

const LessonsPage = () => {
  const [difficultyFilter, setDifficultyFilter] = useState('all');
  const [cefrFilter, setCefrFilter] = useState('all');
  const [pathFilter, setPathFilter] = useState('all');
  const [skillFilter, setSkillFilter] = useState('all');
  const { user } = useAuth();
  
  const filteredLessons = mockLessons.filter(lesson => {
    const matchesDifficulty = difficultyFilter === 'all' || lesson.level === difficultyFilter;
    const matchesCefr = cefrFilter === 'all' || lesson.cefrLevel === cefrFilter;
    const matchesPath = pathFilter === 'all' || lesson.path === pathFilter;
    
    // For skill filter, we'd need to look at the mock skills data
    // This is simplified but would be based on real data in production
    let matchesSkill = true;
    if (skillFilter !== 'all') {
      const lessonSkills = mockSkills[lesson.id] || defaultSkills;
      matchesSkill = lessonSkills.some(skill => skill.type === skillFilter);
    }
    
    return matchesDifficulty && matchesCefr && matchesPath && matchesSkill;
  });
  
  // Group lessons by CEFR level for better organization
  const lessonsByLevel: {[key: string]: typeof mockLessons} = {};
  
  if (cefrFilter === 'all') {
    // If not filtering by CEFR, group them
    filteredLessons.forEach(lesson => {
      if (!lessonsByLevel[lesson.cefrLevel]) {
        lessonsByLevel[lesson.cefrLevel] = [];
      }
      lessonsByLevel[lesson.cefrLevel].push(lesson);
    });
  } else {
    // If filtering by CEFR level, just use the filtered lessons
    lessonsByLevel[cefrFilter] = filteredLessons;
  }
  
  // Order CEFR levels for display
  const cefrLevelOrder = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const orderedCefrLevels = Object.keys(lessonsByLevel).sort(
    (a, b) => cefrLevelOrder.indexOf(a) - cefrLevelOrder.indexOf(b)
  );
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Lessons Header */}
      <section className="pt-28 pb-12 bg-linggo-light">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">English Lessons</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our collection of interactive English lessons designed to improve your speaking, listening, and understanding.
            </p>
          </div>
        </div>
      </section>
      
      {/* Lessons Content */}
      <section className="py-12 bg-white flex-grow">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center">
            <div>
              <h3 className="text-sm font-medium mb-2">Difficulty Level</h3>
              <Tabs defaultValue="all" value={difficultyFilter} onValueChange={setDifficultyFilter}>
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="beginner">Beginner</TabsTrigger>
                  <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
                  <TabsTrigger value="advanced">Advanced</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-2">CEFR Level</h3>
              <Select value={cefrFilter} onValueChange={setCefrFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select CEFR level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="A1">A1 (Beginner)</SelectItem>
                  <SelectItem value="A2">A2 (Elementary)</SelectItem>
                  <SelectItem value="B1">B1 (Intermediate)</SelectItem>
                  <SelectItem value="B2">B2 (Upper Intermediate)</SelectItem>
                  <SelectItem value="C1">C1 (Advanced)</SelectItem>
                  <SelectItem value="C2">C2 (Proficiency)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-2">Learning Path</h3>
              <Select value={pathFilter} onValueChange={setPathFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select path" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Paths</SelectItem>
                  <SelectItem value="general">General English</SelectItem>
                  <SelectItem value="business">Business English</SelectItem>
                  <SelectItem value="academic">Academic English</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-2">Skill Focus</h3>
              <Select value={skillFilter} onValueChange={setSkillFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select skill focus" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Skills</SelectItem>
                  <SelectItem value="reading">Reading</SelectItem>
                  <SelectItem value="writing">Writing</SelectItem>
                  <SelectItem value="speaking">Speaking</SelectItem>
                  <SelectItem value="listening">Listening</SelectItem>
                  <SelectItem value="grammar">Grammar</SelectItem>
                  <SelectItem value="vocabulary">Vocabulary</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {orderedCefrLevels.length > 0 ? (
            orderedCefrLevels.map(level => (
              <div key={level} className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                  <Badge className={CEFR_LEVELS[level].color}>CEFR {level}</Badge>
                  <h2 className="text-2xl font-bold">{CEFR_LEVELS[level].label}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {lessonsByLevel[level].map((lesson) => (
                    <Card key={lesson.id} className="overflow-hidden card-hover">
                      <div className="h-48 bg-gray-200 relative overflow-hidden">
                        <img 
                          src={lesson.content.sections[0].imageUrl || 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80'} 
                          alt={lesson.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-2 right-2 flex flex-col gap-2">
                          <Badge className={CEFR_LEVELS[lesson.cefrLevel].color}>
                            CEFR {lesson.cefrLevel}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-semibold">{lesson.title}</h3>
                          <Badge variant="outline">{lesson.duration}</Badge>
                        </div>
                        <p className="text-gray-600 mb-4">{lesson.description.substring(0, 120)}...</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge className={PATHWAYS[lesson.path].color}>
                            {PATHWAYS[lesson.path].label}
                          </Badge>
                          {(mockSkills[lesson.id] || defaultSkills).slice(0, 2).map((skill, i) => (
                            <Badge key={i} className={SKILL_COLORS[skill.type]}>
                              {skill.type.charAt(0).toUpperCase() + skill.type.slice(1)}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Link to={`/lessons/${lesson.id}`} className="w-full">
                          <Button variant="outline" className="w-full">Start Lesson</Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">No lessons found matching your filters. Try adjusting your selection.</p>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default LessonsPage;
