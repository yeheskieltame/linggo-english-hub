import React from 'react';
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

// Mock data for dashboard
const userStats = {
  name: 'John Doe',
  level: 'Intermediate',
  totalLessons: 24,
  completedLessons: 18,
  totalPractice: 42,
  streak: 15,
  xp: 3750,
  nextLevel: 5000,
  badges: [
    { name: 'Perfect Pronunciation', count: 5, icon: <Mic className="h-4 w-4" /> },
    { name: 'Conversation Master', count: 3, icon: <MessageCircle className="h-4 w-4" /> },
    { name: '10-Day Streak', count: 1, icon: <TrendingUp className="h-4 w-4" /> },
    { name: 'Vocabulary Champion', count: 2, icon: <BookOpen className="h-4 w-4" /> },
  ],
  recentActivity: [
    { type: 'lesson', name: 'Business English: Negotiations', date: '2 hours ago', score: 92 },
    { type: 'practice', name: 'Pronunciation Practice', date: 'Yesterday', score: 88 },
    { type: 'conversation', name: 'Job Interview Simulation', date: '2 days ago', score: 85 },
    { type: 'lesson', name: 'Travel English: At the Airport', date: '3 days ago', score: 95 },
  ],
  weeklyProgress: [
    { day: 'Mon', minutes: 25, xp: 250 },
    { day: 'Tue', minutes: 30, xp: 300 },
    { day: 'Wed', minutes: 15, xp: 150 },
    { day: 'Thu', minutes: 45, xp: 450 },
    { day: 'Fri', minutes: 20, xp: 200 },
    { day: 'Sat', minutes: 35, xp: 350 },
    { day: 'Sun', minutes: 40, xp: 400 },
  ],
  skillBreakdown: [
    { name: 'Listening', value: 75 },
    { name: 'Speaking', value: 65 },
    { name: 'Reading', value: 85 },
    { name: 'Writing', value: 60 },
    { name: 'Grammar', value: 70 },
    { name: 'Vocabulary', value: 80 },
  ],
  upcomingGoals: [
    { name: 'Complete 5 more lessons', progress: 60 },
    { name: 'Practice pronunciation for 30 minutes', progress: 40 },
    { name: 'Complete 3 conversation scenarios', progress: 33 },
    { name: 'Learn 50 new vocabulary words', progress: 76 },
  ],
};

// Colors for charts
const COLORS = ['#8B5CF6', '#60A5FA', '#F97316', '#10B981'];

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      {/* Dashboard Header */}
      <section className="pt-28 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold">Your Dashboard</h1>
              <p className="text-gray-600">Track your progress and set learning goals</p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-3">
              <Button variant="outline" className="flex items-center gap-2">
                <Target className="h-4 w-4" />
                Set Goals
              </Button>
              <Button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700">
                <BookOpen className="h-4 w-4" />
                Continue Learning
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Dashboard Content */}
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
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                      {userStats.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="text-xl font-bold">{userStats.name}</h3>
                    <p className="text-gray-500 mb-4">{userStats.level} Level</p>
                    <div className="flex gap-2 mb-4">
                      <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">English Learner</Badge>
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">{userStats.streak} Day Streak</Badge>
                    </div>
                    <Button variant="outline" className="w-full">Edit Profile</Button>
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
      
      <Footer />
    </div>
  );
};

export default Dashboard;