
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

const LevelsColor = {
  beginner: 'bg-green-100 text-green-800',
  intermediate: 'bg-blue-100 text-blue-800',
  advanced: 'bg-purple-100 text-purple-800',
};

const CefrBadgeColor = {
  'A1': 'bg-slate-100 text-slate-800',
  'A2': 'bg-slate-200 text-slate-800',
  'B1': 'bg-yellow-100 text-yellow-800',
  'B2': 'bg-orange-100 text-orange-800',
  'C1': 'bg-red-100 text-red-800',
  'C2': 'bg-pink-100 text-pink-800',
};

const PathsColor = {
  general: 'bg-green-50 text-green-700',
  business: 'bg-blue-50 text-blue-700',
  academic: 'bg-violet-50 text-violet-700',
};

const LessonsPage = () => {
  const [difficultyFilter, setDifficultyFilter] = useState('all');
  const [cefrFilter, setCefrFilter] = useState('all');
  const [pathFilter, setPathFilter] = useState('all');
  
  const filteredLessons = mockLessons.filter(lesson => {
    const matchesDifficulty = difficultyFilter === 'all' || lesson.level === difficultyFilter;
    const matchesCefr = cefrFilter === 'all' || lesson.cefrLevel === cefrFilter;
    const matchesPath = pathFilter === 'all' || lesson.path === pathFilter;
    
    return matchesDifficulty && matchesCefr && matchesPath;
  });
  
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
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLessons.map((lesson) => (
              <Card key={lesson.id} className="overflow-hidden card-hover">
                <div className="h-48 bg-gray-200 relative">
                  <div className="absolute top-2 right-2 flex flex-col gap-2">
                    <Badge className={LevelsColor[lesson.level]}>
                      {lesson.level.charAt(0).toUpperCase() + lesson.level.slice(1)}
                    </Badge>
                    <Badge className={CefrBadgeColor[lesson.cefrLevel]}>
                      CEFR {lesson.cefrLevel}
                    </Badge>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{lesson.title}</h3>
                    <Badge variant="outline">{lesson.duration}</Badge>
                  </div>
                  <p className="text-gray-600 mb-4">{lesson.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge className={PathsColor[lesson.path]}>
                      {lesson.path === 'general' ? 'General English' : 
                       lesson.path === 'business' ? 'Business English' : 
                       'Academic English'}
                    </Badge>
                    {lesson.tags.slice(0, 2).map((tag, i) => (
                      <Badge key={i} variant="secondary" className="bg-gray-100">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Link to={`/lessons/${lesson.id}`} className="w-full">
                    <Button variant="outline" className="w-full">Start Lesson</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {filteredLessons.length === 0 && (
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
