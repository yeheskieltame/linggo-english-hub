import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { Calendar, Clock, Award, BookOpen, Mic, MessageCircle, TrendingUp, Target, CheckCircle2 } from 'lucide-react';
import { useAuth } from '@/providers/AuthProvider';
import { supabase } from '@/integrations/supabase/client';
import { format, subDays } from 'date-fns';

// Default user stats structure
const defaultUserStats = {
  name: '',
  level: 'Beginner',
  totalLessons: 0,
  completedLessons: 0,
  totalPractice: 0,
  streak: 0,
  xp: 0,
  nextLevel: 1000,
  badges: [
    { name: 'Perfect Pronunciation', count: 0, icon: <Mic className="h-4 w-4" /> },
    { name: 'Conversation Master', count: 0, icon: <MessageCircle className="h-4 w-4" /> },
    { name: '10-Day Streak', count: 0, icon: <TrendingUp className="h-4 w-4" /> },
    { name: 'Vocabulary Champion', count: 0, icon: <BookOpen className="h-4 w-4" /> },
  ],
  recentActivity: [],
  weeklyProgress: [
    { day: 'Mon', minutes: 0, xp: 0 },
    { day: 'Tue', minutes: 0, xp: 0 },
    { day: 'Wed', minutes: 0, xp: 0 },
    { day: 'Thu', minutes: 0, xp: 0 },
    { day: 'Fri', minutes: 0, xp: 0 },
    { day: 'Sat', minutes: 0, xp: 0 },
    { day: 'Sun', minutes: 0, xp: 0 },
  ],
  skillBreakdown: [
    { name: 'Listening', value: 0 },
    { name: 'Speaking', value: 0 },
    { name: 'Reading', value: 0 },
    { name: 'Writing', value: 0 },
    { name: 'Grammar', value: 0 },
    { name: 'Vocabulary', value: 0 },
  ],
  upcomingGoals: [
    { name: 'Complete 5 more lessons', progress: 0 },
    { name: 'Practice pronunciation for 30 minutes', progress: 0 },
    { name: 'Complete 3 conversation scenarios', progress: 0 },
    { name: 'Learn 50 new vocabulary words', progress: 0 },
  ],
};

// Colors for charts
const COLORS = ['#8B5CF6', '#60A5FA', '#F97316', '#10B981'];

const Dashboard = () => {
  const { user, profile } = useAuth();
  const [userStats, setUserStats] = useState(defaultUserStats);
  const [loading, setLoading] = useState(true);

  // Fetch user data from database
  useEffect(() => {
    const fetchUserData = async () => {
      if (!user) return;

      try {
        setLoading(true);
        
        // Fetch user profile
        if (profile) {
          setUserStats(prev => ({
            ...prev,
            name: profile.full_name || user.email?.split('@')[0] || '',
            level: profile.preferred_level || 'Beginner'
          }));
        }

        // Fetch user progress
        const { data: progressData, error: progressError } = await supabase
          .from('user_progress')
          .select('*')
          .eq('user_id', user.id);

        if (progressError) {
          console.error('Error fetching user progress:', progressError);
        } else if (progressData) {
          const completedLessons = progressData.filter(item => item.completed).length;
          const totalLessons = progressData.length;
          
          setUserStats(prev => ({
            ...prev,
            totalLessons,
            completedLessons
          }));
        }

        // Fetch user assessments
        const { data: assessmentData, error: assessmentError } = await supabase
          .from('user_assessments')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });

        if (assessmentError) {
          console.error('Error fetching user assessments:', assessmentError);
        } else if (assessmentData && assessmentData.length > 0) {
          // Get the latest assessment
          const latestAssessment = assessmentData[0];
          
          // Calculate XP based on assessment score
          const xp = latestAssessment.score * 100;
          const nextLevel = Math.ceil(xp / 1000) * 1000 + 1000;
          
          // Update skill breakdown based on assessment
          const skillBreakdown = [
            { name: 'Listening', value: Math.min(100, latestAssessment.score + Math.random() * 20 - 10) },
            { name: 'Speaking', value: Math.min(100, latestAssessment.score + Math.random() * 20 - 10) },
            { name: 'Reading', value: Math.min(100, latestAssessment.score + Math.random() * 20 - 10) },
            { name: 'Writing', value: Math.min(100, latestAssessment.score + Math.random() * 20 - 10) },
            { name: 'Grammar', value: Math.min(100, latestAssessment.score + Math.random() * 20 - 10) },
            { name: 'Vocabulary', value: Math.min(100, latestAssessment.score + Math.random() * 20 - 10) },
          ];
          
          setUserStats(prev => ({
            ...prev,
            xp,
            nextLevel,
            skillBreakdown
          }));
        }

        // Fetch user schedule (for streak calculation)
        const { data: scheduleData, error: scheduleError } = await supabase
          .from('user_schedule')
          .select('*')
          .eq('user_id', user.id)
          .eq('is_completed', true)
          .order('date', { ascending: false });

        if (scheduleError) {
          console.error('Error fetching user schedule:', scheduleError);
        } else if (scheduleData) {
          // Calculate streak based on consecutive days of completed activities
          let streak = 0;
          const today = new Date();
          let currentDate = new Date(today);
          
          // Check for consecutive days with completed activities
          while (true) {
            const dateStr = format(currentDate, 'yyyy-MM-dd');
            const hasCompletedActivity = scheduleData.some(item => item.date === dateStr);
            
            if (hasCompletedActivity) {
              streak++;
              currentDate = subDays(currentDate, 1);
            } else {
              break;
            }
          }
          
          // Update streak and total practice sessions
          setUserStats(prev => ({
            ...prev,
            streak,
            totalPractice: scheduleData.length
          }));
          
          // Create recent activity from schedule data
          const recentActivity = scheduleData.slice(0, 4).map(item => ({
            type: item.module_id ? 'lesson' : 'practice',
            name: item.title,
            date: formatRelativeDate(new Date(item.date)),
            score: Math.floor(70 + Math.random() * 30) // Random score between 70-100
          }));
          
          setUserStats(prev => ({
            ...prev,
            recentActivity
          }));
          
          // Create weekly progress data
          const weeklyProgress = [];
          const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
          
          for (let i = 6; i >= 0; i--) {
            const date = subDays(today, i);
            const dayName = daysOfWeek[date.getDay()];
            const dateStr = format(date, 'yyyy-MM-dd');
            
            // Find activities for this day
            const dayActivities = scheduleData.filter(item => item.date === dateStr);
            const minutes = dayActivities.reduce((sum, item) => sum + item.duration, 0);
            const xp = minutes * 10; // 10 XP per minute
            
            weeklyProgress.push({
              day: dayName,
              minutes,
              xp
            });
          }
          
          setUserStats(prev => ({
            ...prev,
            weeklyProgress
          }));
          
          // Update badges based on user activity
          const badges = [
            { 
              name: 'Perfect Pronunciation', 
              count: Math.floor(scheduleData.filter(item => item.title.includes('Pronunciation')).length / 5), 
              icon: <Mic className="h-4 w-4" /> 
            },
            { 
              name: 'Conversation Master', 
              count: Math.floor(scheduleData.filter(item => item.title.includes('Conversation')).length / 3), 
              icon: <MessageCircle className="h-4 w-4" /> 
            },
            { 
              name: `${Math.floor(streak/10)*10}-Day Streak`, 
              count: Math.floor(streak / 10), 
              icon: <TrendingUp className="h-4 w-4" /> 
            },
            { 
              name: 'Vocabulary Champion', 
              count: Math.floor(scheduleData.filter(item => item.title.includes('Vocabulary')).length / 5), 
              icon: <BookOpen className="h-4 w-4" /> 
            },
          ];
          
          setUserStats(prev => ({
            ...prev,
            badges: badges.map(badge => ({
              ...badge,
              count: Math.max(0, badge.count) // Ensure count is not negative
            }))
          }));
          
          // Update goals progress
          const upcomingGoals = [
            { 
              name: 'Complete 5 more lessons', 
              progress: Math.min(100, (scheduleData.filter(item => item.module_id).length % 5) * 20) 
            },
            { 
              name: 'Practice pronunciation for 30 minutes', 
              progress: Math.min(100, (scheduleData.filter(item => item.title.includes('Pronunciation')).reduce((sum, item) => sum + item.duration, 0) % 30) * (100/30)) 
            },
            { 
              name: 'Complete 3 conversation scenarios', 
              progress: Math.min(100, (scheduleData.filter(item => item.title.includes('Conversation')).length % 3) * 33) 
            },
            { 
              name: 'Learn 50 new vocabulary words', 
              progress: Math.min(100, (scheduleData.filter(item => item.title.includes('Vocabulary')).length * 10) % 50 * 2) 
            },
          ];
          
          setUserStats(prev => ({
            ...prev,
            upcomingGoals
          }));
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user, profile]);

  // Helper function to format relative dates
  const formatRelativeDate = (date: Date) => {
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    return format(date, 'MMM d, yyyy');
  };

  // Function to log user activity
  const logUserActivity = async (activityType: string, activityName: string, durationMinutes: number) => {
    if (!user) return;
    
    try {
      const today = format(new Date(), 'yyyy-MM-dd');
      const startTime = format(new Date(), 'HH:mm:ss');
      
      const { error } = await supabase
        .from('user_schedule')
        .insert({
          user_id: user.id,
          title: activityName,
          date: today,
          start_time: startTime,
          duration: durationMinutes,
          is_completed: true,
          module_id: activityType === 'lesson' ? 'some-module-id' : null
        });
        
      if (error) {
        console.error('Error logging user activity:', error);
      }
    } catch (error) {
      console.error('Unexpected error logging activity:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      {/* Dashboard Header */}
      <section className="pt-28 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold">Your Dashboard</h1>
              <p className="text-gray-600">
                {loading 
                  ? "Loading your personalized dashboard..." 
                  : "Track your progress and set learning goals"}
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-3">
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
                onClick={() => logUserActivity('goal', 'Set new learning goals', 5)}
                disabled={loading || !user}
              >
                <Target className="h-4 w-4" />
                Set Goals
              </Button>
              <Button 
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700"
                onClick={() => logUserActivity('lesson', 'Continued learning session', 15)}
                disabled={loading || !user}
              >
                <BookOpen className="h-4 w-4" />
                Continue Learning
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Loading Indicator */}
      {loading && (
        <div className="container mx-auto px-4 py-8 text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-purple-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
          </div>
          <p className="mt-4 text-gray-600">Loading your personalized dashboard...</p>
        </div>
      )}
      
      {/* Main Dashboard Content */}
      {!loading && (
        <section className="flex-grow pb-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Stats Overview */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-purple-100 text-sm">Current Level</p>
                        <h3 className="text-2xl font-bold">{userStats.level}</h3>
                      </div>
                      <Award className="h-8 w-8 text-purple-200" />
                    </div>
                    <Progress 
                      value={(userStats.xp / userStats.nextLevel) * 100} 
                      className="h-2 mt-4 bg-purple-400"
                    />
                    <p className="text-xs mt-2 text-purple-100">{userStats.xp} / {userStats.nextLevel} XP to next level</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-gray-500 text-sm">Lessons Completed</p>
                        <h3 className="text-2xl font-bold">{userStats.completedLessons}/{userStats.totalLessons}</h3>
                      </div>
                      <BookOpen className="h-8 w-8 text-blue-500" />
                    </div>
                    <Progress 
                      value={(userStats.completedLessons / userStats.totalLessons) * 100} 
                      className="h-2 mt-4"
                    />
                    <p className="text-xs mt-2 text-gray-500">{userStats.totalLessons - userStats.completedLessons} lessons remaining</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-gray-500 text-sm">Practice Sessions</p>
                        <h3 className="text-2xl font-bold">{userStats.totalPractice}</h3>
                      </div>
                      <Mic className="h-8 w-8 text-orange-500" />
                    </div>
                    <div className="mt-4 pt-2">
                      <p className="text-sm text-gray-500">Last practice: <span className="font-medium">Yesterday</span></p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-gray-500 text-sm">Current Streak</p>
                        <h3 className="text-2xl font-bold">{userStats.streak} days</h3>
                      </div>
                      <TrendingUp className="h-8 w-8 text-green-500" />
                    </div>
                    <div className="mt-4 pt-2">
                      <p className="text-sm text-gray-500">Best streak: <span className="font-medium">21 days</span></p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Weekly Progress Chart */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-purple-500" />
                    Weekly Progress
                  </CardTitle>
                  <CardDescription>Your learning activity over the past week</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={userStats.weeklyProgress}
                        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="day" />
                        <YAxis yAxisId="left" orientation="left" stroke="#8B5CF6" />
                        <YAxis yAxisId="right" orientation="right" stroke="#60A5FA" />
                        <Tooltip />
                        <Bar yAxisId="left" dataKey="minutes" name="Minutes Studied" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                        <Bar yAxisId="right" dataKey="xp" name="XP Earned" fill="#60A5FA" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-blue-500" />
                    Recent Activity
                  </CardTitle>
                  <CardDescription>Your latest learning sessions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {userStats.recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            activity.type === 'lesson' ? 'bg-blue-100 text-blue-600' : 
                            activity.type === 'practice' ? 'bg-orange-100 text-orange-600' : 
                            'bg-purple-100 text-purple-600'
                          }`}>
                            {activity.type === 'lesson' ? <BookOpen className="h-5 w-5" /> : 
                             activity.type === 'practice' ? <Mic className="h-5 w-5" /> : 
                             <MessageCircle className="h-5 w-5" />}
                          </div>
                          <div className="ml-4">
                            <h4 className="font-medium">{activity.name}</h4>
                            <p className="text-sm text-gray-500">{activity.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="bg-white px-3 py-1 rounded-full border border-gray-200 flex items-center">
                            <span className="text-sm font-medium mr-1">{activity.score}</span>
                            <span className="text-xs text-gray-500">/ 100</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Right Column */}
            <div className="space-y-6">
              {/* User Profile Card */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    {profile?.avatar_url ? (
                      <img 
                        src={profile.avatar_url} 
                        alt={userStats.name || 'User'} 
                        className="w-20 h-20 rounded-full object-cover mb-4"
                      />
                    ) : (
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                        {userStats.name ? userStats.name.split(' ').map(n => n[0]).join('') : '?'}
                      </div>
                    )}
                    <h3 className="text-xl font-bold">{userStats.name || 'User'}</h3>
                    <p className="text-gray-500 mb-4">{userStats.level} Level</p>
                    <div className="flex gap-2 mb-4 flex-wrap justify-center">
                      <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">English Learner</Badge>
                      {userStats.streak > 0 && (
                        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">{userStats.streak} Day Streak</Badge>
                      )}
                      {profile?.preferred_level && (
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-200">{profile.preferred_level}</Badge>
                      )}
                    </div>
                    <Link to="/profile">
                      <Button variant="outline" className="w-full" onClick={() => logUserActivity('profile', 'Edited profile', 5)}>
                        Edit Profile
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              
              {/* Skill Breakdown */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="h-5 w-5 mr-2 text-orange-500" />
                    Skill Breakdown
                  </CardTitle>
                  <CardDescription>Your proficiency in different areas</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 mb-6">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={userStats.skillBreakdown}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={2}
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          labelLine={false}
                        >
                          {userStats.skillBreakdown.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {userStats.skillBreakdown.map((skill, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                        <span className="text-sm">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Badges */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-5 w-5 mr-2 text-purple-500" />
                    Your Badges
                  </CardTitle>
                  <CardDescription>Achievements you've earned</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {userStats.badges.map((badge, index) => (
                      <div key={index} className="flex flex-col items-center text-center p-3 bg-gray-50 rounded-lg">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white mb-2">
                          {badge.icon}
                        </div>
                        <h4 className="font-medium text-sm">{badge.name}</h4>
                        <p className="text-xs text-gray-500">x{badge.count}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Level Assessment */}
              <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-100">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart className="h-5 w-5 mr-2 text-green-500" />
                    English Level Assessment
                  </CardTitle>
                  <CardDescription>Test your current English proficiency level</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-gray-600">
                      Take our comprehensive assessment test to determine your current CEFR level and get personalized learning recommendations.
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-green-100">
                      <h4 className="font-medium text-green-800 mb-2">Why take the assessment?</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Discover your current CEFR level (A1-C2)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Get personalized feedback on your strengths and weaknesses</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Receive tailored lesson recommendations</span>
                        </li>
                      </ul>
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      <Link to="/assessment" className="text-white w-full">Take Level Assessment</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              {/* Goals */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="h-5 w-5 mr-2 text-green-500" />
                    Learning Goals
                  </CardTitle>
                  <CardDescription>Track your progress towards goals</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {userStats.upcomingGoals.map((goal, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <CheckCircle2 className={`h-4 w-4 mr-2 ${goal.progress >= 100 ? 'text-green-500' : 'text-gray-300'}`} />
                            <span className="text-sm font-medium">{goal.name}</span>
                          </div>
                          <span className="text-sm text-gray-500">{goal.progress}%</span>
                        </div>
                        <Progress value={goal.progress} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      )}
      
      <Footer />
    </div>
  );
};

export default Dashboard;