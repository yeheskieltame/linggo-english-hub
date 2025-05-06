
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Check, Search, BookOpen, Volume2, Headphones, Mic, BookOpenText, Calendar, ChevronRight, Loader2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { mockLessons } from '@/data/mockData';
import { CEFR_LEVELS, PATHWAYS } from '@/types/lesson';
import LessonSkillFocus from '@/components/LessonSkillFocus';
import { useAuth } from '@/providers/AuthProvider';
import { supabase } from '@/integrations/supabase/client';

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
  const location = useLocation();
  const { user, profile } = useAuth();
  const [filter, setFilter] = useState({
    search: '',
    level: 'all',
    pathway: 'all',
  });
  const [filteredLessons, setFilteredLessons] = useState(mockLessons);
  const [recommendedLessons, setRecommendedLessons] = useState<typeof mockLessons>([]);
  const [inProgressLessons, setInProgressLessons] = useState<typeof mockLessons>([]);
  const [loading, setLoading] = useState({
    recommended: true,
    inProgress: true
  });
  
  // Get the tab from URL query parameters
  const queryParams = new URLSearchParams(location.search);
  const tabFromUrl = queryParams.get('tab');
  const [activeTab, setActiveTab] = useState(tabFromUrl || 'all');
  
  // Fetch user progress and recommended lessons
  useEffect(() => {
    const fetchUserData = async () => {
      if (!user) {
        setLoading({
          recommended: false,
          inProgress: false
        });
        return;
      }
      
      try {
        // Fetch user progress
        const { data: progressData, error: progressError } = await supabase
          .from('user_progress')
          .select('*')
          .eq('user_id', user.id);
          
        if (progressError) {
          console.error('Error fetching user progress:', progressError);
        } else if (progressData) {
          // Find lessons that are in progress (started but not completed)
          const inProgressIds = progressData
            .filter(item => item.progress > 0 && !item.completed)
            .map(item => item.module);
            
          // Match with mock lessons (in a real app, you'd fetch the actual lessons from the database)
          const inProgress = mockLessons.filter(lesson => 
            inProgressIds.includes(lesson.id)
          );
          
          setInProgressLessons(inProgress);
        }
        
        // Get user's preferred level for recommendations
        let userLevel = profile?.preferred_level || 'Beginner';
        
        // Map the user level to CEFR level
        let cefrLevel: string;
        switch(userLevel.toLowerCase()) {
          case 'beginner':
            cefrLevel = 'A1';
            break;
          case 'elementary':
            cefrLevel = 'A2';
            break;
          case 'intermediate':
            cefrLevel = 'B1';
            break;
          case 'upper intermediate':
            cefrLevel = 'B2';
            break;
          case 'advanced':
            cefrLevel = 'C1';
            break;
          case 'proficiency':
            cefrLevel = 'C2';
            break;
          default:
            cefrLevel = 'A1';
        }
        
        // Filter lessons based on user's level
        const recommended = mockLessons.filter(lesson => 
          lesson.cefrLevel === cefrLevel
        );
        
        setRecommendedLessons(recommended);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading({
          recommended: false,
          inProgress: false
        });
      }
    };
    
    fetchUserData();
  }, [user, profile]);
  
  // Apply filters for all lessons tab
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
  
  // Function to log lesson activity and navigate to lesson
  const handleLessonClick = async (lessonId: string) => {
    // If user is logged in, log this activity
    if (user) {
      try {
        const lesson = mockLessons.find(l => l.id === lessonId);
        if (lesson) {
          // Check if there's already a progress record for this lesson
          const { data: existingProgress, error: checkError } = await supabase
            .from('user_progress')
            .select('*')
            .eq('user_id', user.id)
            .eq('module', lessonId)
            .single();
            
          if (checkError && checkError.code !== 'PGRST116') { // PGRST116 is "not found" which is expected if no record exists
            console.error('Error checking lesson progress:', checkError);
          }
          
          if (!existingProgress) {
            // Create a new progress record
            const { error: insertError } = await supabase
              .from('user_progress')
              .insert({
                user_id: user.id,
                module: lessonId,
                level: lesson.cefrLevel,
                progress: 0,
                completed: false,
                last_access: new Date().toISOString()
              });
              
            if (insertError) {
              console.error('Error creating lesson progress:', insertError);
            }
          } else {
            // Update the existing progress record's last_access time
            const { error: updateError } = await supabase
              .from('user_progress')
              .update({
                last_access: new Date().toISOString()
              })
              .eq('id', existingProgress.id);
              
            if (updateError) {
              console.error('Error updating lesson progress:', updateError);
            }
          }
          
          // Log this activity in user_schedule
          const { error: scheduleError } = await supabase
            .from('user_schedule')
            .insert({
              user_id: user.id,
              title: `Started lesson: ${lesson.title}`,
              date: new Date().toISOString().split('T')[0],
              start_time: new Date().toTimeString().split(' ')[0],
              duration: parseInt(lesson.duration) || 15,
              is_completed: false,
              module_id: lessonId
            });
            
          if (scheduleError) {
            console.error('Error logging lesson activity:', scheduleError);
          }
        }
      } catch (error) {
        console.error('Error handling lesson click:', error);
      }
    }
    
    // Navigate to the lesson
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
          <Tabs 
            value={activeTab} 
            onValueChange={(value) => {
              setActiveTab(value);
              // Update URL without reloading the page
              const newUrl = new URL(window.location.href);
              if (value === 'all') {
                newUrl.searchParams.delete('tab');
              } else {
                newUrl.searchParams.set('tab', value);
              }
              window.history.pushState({}, '', newUrl.toString());
            }}
            className="w-full max-w-4xl mx-auto"
          >
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
              {loading.recommended ? (
                <div className="text-center py-16">
                  <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-purple-600" />
                  <p className="text-gray-600">Loading your personalized recommendations...</p>
                </div>
              ) : !user ? (
                <div className="text-center py-16">
                  <h3 className="text-xl font-medium mb-2">Personalized Recommendations</h3>
                  <p className="text-gray-600 mb-6">Log in to get personalized lesson recommendations based on your level</p>
                  <Button onClick={() => navigate('/auth')}>Sign In</Button>
                </div>
              ) : recommendedLessons.length === 0 ? (
                <div className="text-center py-16">
                  <h3 className="text-xl font-medium mb-2">No Recommendations Yet</h3>
                  <p className="text-gray-600 mb-6">Complete your assessment to get personalized lesson recommendations</p>
                  <Button onClick={() => navigate('/assessment')}>Take Assessment</Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium">Recommended for your level: {profile?.preferred_level || 'Beginner'}</h3>
                  </div>
                  
                  {recommendedLessons.map((lesson) => {
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
                                    Start Lesson <ChevronRight className="ml-1 h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="started" className="mt-0">
              {loading.inProgress ? (
                <div className="text-center py-16">
                  <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-purple-600" />
                  <p className="text-gray-600">Loading your in-progress lessons...</p>
                </div>
              ) : !user ? (
                <div className="text-center py-16">
                  <h3 className="text-xl font-medium mb-2">Your In-Progress Lessons</h3>
                  <p className="text-gray-600 mb-6">Log in to see your progress and continue learning</p>
                  <Button onClick={() => navigate('/auth')}>Sign In</Button>
                </div>
              ) : inProgressLessons.length === 0 ? (
                <div className="text-center py-16">
                  <h3 className="text-xl font-medium mb-2">No Lessons In Progress</h3>
                  <p className="text-gray-600 mb-6">Start a lesson to see it here and track your progress</p>
                  <Button onClick={() => navigate('/lessons')}>Browse Lessons</Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium">Continue where you left off</h3>
                  </div>
                  
                  {inProgressLessons.map((lesson) => {
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
                                    Continue <ChevronRight className="ml-1 h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              )}
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
