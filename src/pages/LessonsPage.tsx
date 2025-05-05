
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Check, Search, BookOpen, Volume2, Headphones, Mic, BookOpenText, Calendar, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { mockLessons } from '@/data/mockData';
import { CEFR_LEVELS, PATHWAYS } from '@/types/lesson';
import LessonSkillFocus from '@/components/LessonSkillFocus';

const mockSkills = {
  'l1': [
    { type: 'grammar', focus: 8 },
    { type: 'vocabulary', focus: 7 },
    { type: 'speaking', focus: 5 },
  ],
  'l2': [
    { type: 'speaking', focus: 9 },
    { type: 'listening', focus: 8 },
    { type: 'vocabulary', focus: 6 }
  ],
  'l3': [
    { type: 'reading', focus: 9 },
    { type: 'writing', focus: 8 },
    { type: 'grammar', focus: 7 }
  ],
  'l4': [
    { type: 'listening', focus: 8 },
    { type: 'speaking', focus: 7 },
    { type: 'vocabulary', focus: 6 }
  ],
  'l5': [
    { type: 'writing', focus: 9 },
    { type: 'grammar', focus: 8 },
    { type: 'vocabulary', focus: 7 }
  ]
} as {[key: string]: any[]};

const LessonsPage = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState({
    search: '',
    level: 'all',
    pathway: 'all',
  });
  const [filteredLessons, setFilteredLessons] = useState(mockLessons);
  
  useEffect(() => {
    // Apply filters
    let result = mockLessons;
    
    if (filter.search) {
      const searchLower = filter.search.toLowerCase();
      result = result.filter(lesson => 
        lesson.title.toLowerCase().includes(searchLower) || 
        lesson.description.toLowerCase().includes(searchLower)
      );
    }
    
    if (filter.level !== 'all') {
      result = result.filter(lesson => lesson.cefrLevel === filter.level);
    }
    
    if (filter.pathway !== 'all') {
      result = result.filter(lesson => lesson.path === filter.pathway);
    }
    
    setFilteredLessons(result);
  }, [filter]);
  
  const handleLessonClick = (lessonId: string) => {
    navigate(`/lessons/${lessonId}`);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="pt-24 pb-10 md:pt-32 md:pb-16 bg-gradient-to-r from-purple-50 to-blue-50 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
              English Lessons
            </span>
          </h1>
          <p className="text-lg text-center text-gray-700 max-w-2xl mx-auto mb-8">
            Explore our comprehensive collection of English lessons designed to help you improve your language skills.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search lessons..."
                    className="pl-9"
                    value={filter.search}
                    onChange={(e) => setFilter({...filter, search: e.target.value})}
                  />
                </div>
                
                <select
                  className="py-2 px-3 rounded-md border border-gray-300"
                  value={filter.level}
                  onChange={(e) => setFilter({...filter, level: e.target.value})}
                >
                  <option value="all">All Levels</option>
                  <option value="A1">A1 - Beginner</option>
                  <option value="A2">A2 - Elementary</option>
                  <option value="B1">B1 - Intermediate</option>
                  <option value="B2">B2 - Upper Intermediate</option>
                  <option value="C1">C1 - Advanced</option>
                  <option value="C2">C2 - Proficiency</option>
                </select>
                
                <select
                  className="py-2 px-3 rounded-md border border-gray-300"
                  value={filter.pathway}
                  onChange={(e) => setFilter({...filter, pathway: e.target.value})}
                >
                  <option value="all">All Pathways</option>
                  <option value="general">General English</option>
                  <option value="business">Business English</option>
                  <option value="academic">Academic English</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="all">All Lessons</TabsTrigger>
              <TabsTrigger value="recommended">Recommended</TabsTrigger>
              <TabsTrigger value="started">In Progress</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-0">
              <div className="space-y-4">
                {filteredLessons.length === 0 ? (
                  <div className="text-center py-10">
                    <h3 className="text-xl font-medium mb-2">No lessons found</h3>
                    <p className="text-gray-600">Try adjusting your search or filters</p>
                  </div>
                ) : (
                  filteredLessons.map((lesson) => {
                    const cefrLevel = CEFR_LEVELS[lesson.cefrLevel];
                    const pathwayInfo = PATHWAYS[lesson.path];
                    const skills = mockSkills[lesson.id] || [];
                    
                    return (
                      <Card 
                        key={lesson.id}
                        className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer border-gray-200 hover:border-purple-300"
                        onClick={() => handleLessonClick(lesson.id)}
                      >
                        <CardContent className="p-0">
                          <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/4 lg:w-1/5 h-full">
                              <img 
                                src={lesson.imageUrl || 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'} 
                                alt={lesson.title}
                                className="w-full h-40 md:h-full object-cover"
                              />
                            </div>
                            <div className="p-4 md:p-6 flex-1 flex flex-col">
                              <div className="flex flex-wrap items-center gap-2 mb-2">
                                <Badge className={cefrLevel.color}>
                                  {lesson.cefrLevel} - {cefrLevel.label}
                                </Badge>
                                <Badge className={pathwayInfo.color}>
                                  {pathwayInfo.label}
                                </Badge>
                                <Badge variant="outline" className="flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  {lesson.duration}
                                </Badge>
                              </div>
                              
                              <h3 className="text-lg md:text-xl font-semibold mb-2 text-purple-800">{lesson.title}</h3>
                              <p className="text-gray-700 text-sm mb-4 line-clamp-2">{lesson.description}</p>
                              
                              <div className="mt-auto">
                                <div className="flex flex-wrap gap-2 mb-3">
                                  {lesson.tags && lesson.tags.map((tag, i) => (
                                    <span 
                                      key={i} 
                                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                                
                                <div className="flex items-center justify-between">
                                  <div className="flex-1">
                                    {skills.length > 0 && (
                                      <LessonSkillFocus skills={skills} compact={true} />
                                    )}
                                  </div>
                                  
                                  <Button 
                                    variant="ghost" 
                                    size="sm" 
                                    className="text-purple-700 hover:bg-purple-50"
                                  >
                                    Open Lesson <ChevronRight className="ml-1 h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="recommended" className="mt-0">
              <div className="text-center py-16">
                <h3 className="text-xl font-medium mb-2">Personalized Recommendations</h3>
                <p className="text-gray-600 mb-6">Complete your assessment to get personalized lesson recommendations</p>
                <Button onClick={() => navigate('/assessment')}>Take Assessment</Button>
              </div>
            </TabsContent>
            
            <TabsContent value="started" className="mt-0">
              <div className="text-center py-16">
                <h3 className="text-xl font-medium mb-2">Your In-Progress Lessons</h3>
                <p className="text-gray-600 mb-6">Log in to see your progress and continue learning</p>
                <Button onClick={() => navigate('/auth')}>Sign In</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default LessonsPage;
