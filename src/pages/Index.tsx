
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { features, topicCategories } from '@/data/mockData';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-linggo-dark">
                Master English with <span className="text-linggo-primary">AI-Powered</span> Learning
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-xl">
                Learn English naturally with personalized lessons, AI pronunciation feedback, and interactive practice. Perfect for Indonesian speakers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base font-medium">
                  Get Started for Free
                </Button>
                <Button size="lg" variant="outline" className="text-base font-medium">
                  Explore Lessons
                </Button>
              </div>
              <div className="mt-8 flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white" />
                  ))}
                </div>
                <p className="ml-4 text-sm text-gray-600">
                  <span className="font-semibold">5,000+</span> learners already improving their English
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-16">
              <div className="relative">
                <div className="bg-white rounded-xl shadow-linggo p-6 animate-float">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 bg-linggo-primary rounded-full flex items-center justify-center text-white text-xl font-bold">
                      AI
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-lg">LinggoID Assistant</h3>
                      <p className="text-sm text-gray-500">Always ready to help</p>
                    </div>
                  </div>
                  <p className="bg-linggo-light rounded-lg p-3 text-gray-700 mb-3">
                    "Let me help you practice your pronunciation. Repeat after me: <span className="font-medium">The weather is beautiful today.</span>"
                  </p>
                  <div className="flex justify-end">
                    <div className="bg-linggo-primary/10 rounded-lg p-3 text-gray-700 max-w-[80%]">
                      "The weather is beautiful today."
                    </div>
                  </div>
                  <div className="mt-3 bg-green-50 rounded-lg p-3 text-green-700 border border-green-200">
                    <div className="flex items-center mb-1">
                      <span className="font-semibold">Great job!</span>
                      <span className="ml-auto text-sm">92% accuracy</span>
                    </div>
                    <p className="text-sm">Your pronunciation of "th" in "weather" was perfect!</p>
                  </div>
                </div>
                
                <div className="absolute -bottom-10 -right-10 bg-linggo-secondary/20 w-40 h-40 rounded-full blur-3xl -z-10"></div>
                <div className="absolute -top-10 -left-10 bg-linggo-primary/20 w-40 h-40 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Learn English With Confidence</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform combines cutting-edge technology with proven language learning methods to help you succeed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-hover border-none">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Browse Topics Section */}
      <section className="py-16 bg-linggo-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse Topics</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our wide range of English lessons categorized by topic and skill level.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {topicCategories.map((topic, index) => (
              <Link to={`/topics/${topic.toLowerCase().replace(/\s+/g, '-')}`} key={index}>
                <div className="bg-white rounded-lg p-4 text-center hover:bg-linggo-primary hover:text-white transition-colors border border-gray-100 card-hover">
                  <h3 className="font-medium">{topic}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-linggo-dark text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your English Learning Journey?</h2>
            <p className="text-xl mb-8">
              Join thousands of learners who are improving their English skills with LinggoID.
            </p>
            <Button size="lg" className="bg-linggo-accent hover:bg-linggo-accent/90 text-linggo-dark text-lg font-medium">
              Start Learning Now
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
