
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { mockLessons } from '@/data/mockData';

const LevelsColor = {
  beginner: 'bg-green-100 text-green-800',
  intermediate: 'bg-blue-100 text-blue-800',
  advanced: 'bg-purple-100 text-purple-800',
};

const LessonsPage = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredLessons = filter === 'all' 
    ? mockLessons 
    : mockLessons.filter(lesson => lesson.level === filter);
  
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
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="grid grid-cols-4 max-w-md mx-auto">
              <TabsTrigger value="all" onClick={() => setFilter('all')}>All</TabsTrigger>
              <TabsTrigger value="beginner" onClick={() => setFilter('beginner')}>Beginner</TabsTrigger>
              <TabsTrigger value="intermediate" onClick={() => setFilter('intermediate')}>Intermediate</TabsTrigger>
              <TabsTrigger value="advanced" onClick={() => setFilter('advanced')}>Advanced</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLessons.map((lesson) => (
              <Card key={lesson.id} className="overflow-hidden card-hover">
                <div className="h-48 bg-gray-200 relative">
                  <Badge className={`absolute top-2 right-2 ${LevelsColor[lesson.level]}`}>
                    {lesson.level.charAt(0).toUpperCase() + lesson.level.slice(1)}
                  </Badge>
                </div>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{lesson.title}</h3>
                    <Badge variant="outline">{lesson.duration}</Badge>
                  </div>
                  <p className="text-gray-600 mb-4">{lesson.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {lesson.tags.slice(0, 3).map((tag, i) => (
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
              <p className="text-lg text-gray-600">No lessons found for this level. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default LessonsPage;
