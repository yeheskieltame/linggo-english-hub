
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { features, topicCategories } from '@/data/mockData';
import { Briefcase, GraduationCap, MessageCircle } from 'lucide-react';

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'Briefcase':
      return <Briefcase className="h-6 w-6" />;
    case 'GraduationCap':
      return <GraduationCap className="h-6 w-6" />;
    case 'MessageCircle':
      return <MessageCircle className="h-6 w-6" />;
    default:
      return <Briefcase className="h-6 w-6" />;
  }
};

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section - Expanded and more modern */}
      <section className="pt-32 pb-24 hero-gradient relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-40 right-20 w-56 h-56 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" style={{animationDelay: '4s'}}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <div className="inline-block px-4 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
                AI-Powered Language Learning
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Master English with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Confidence</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-xl">
                Learn English naturally with personalized lessons, AI pronunciation feedback, and interactive conversation practice. Perfect for Indonesian speakers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="text-base font-medium bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 shadow-md">
                  <Link to="/dashboard" className="text-white">Get Started for Free</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-base font-medium border-purple-300 text-purple-700 hover:bg-purple-50">
                  <Link to="/lessons">Continue Learning</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-base font-medium border-green-300 text-green-700 hover:bg-green-50">
                  <Link to="/assessment">Test Your Level</Link>
                </Button>
              </div>
              <div className="flex items-center">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white font-medium ${i % 2 === 0 ? 'bg-purple-500' : 'bg-blue-500'}`}>
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-800">5,000+ learners</p>
                  <p className="text-sm text-gray-600">already improving their English</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative mx-auto max-w-lg">
                {/* MacOS-style window for LinggoID Assistant */}
                <div className="mac-window animate-float">
                  <div className="mac-window-header">
                    <div className="mac-window-button bg-red-400"></div>
                    <div className="mac-window-button bg-yellow-400"></div>
                    <div className="mac-window-button bg-green-400"></div>
                    <div className="flex-1 text-center text-xs text-gray-500 font-medium">LinggoID Assistant</div>
                  </div>
                  <div className="mac-window-content">
                    <div className="flex items-center mb-5">
                      <div className="h-12 w-12 purple-gradient rounded-full flex items-center justify-center text-white text-xl font-bold shadow-md">
                        AI
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-lg">LinggoID Assistant</h3>
                        <p className="text-sm text-gray-500">Your personal language coach</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-purple-50 rounded-lg p-4 text-gray-700 border-l-4 border-purple-400">
                        <p className="font-medium mb-1 text-purple-800">LinggoID Assistant</p>
                        <p>Let me help you practice your pronunciation. Repeat after me: <span className="font-medium">The weather is beautiful today.</span></p>
                      </div>
                      
                      <div className="flex justify-end">
                        <div className="bg-blue-50 rounded-lg p-4 text-gray-700 max-w-[80%] border-r-4 border-blue-400">
                          <p className="font-medium mb-1 text-blue-800">You</p>
                          <p>"The weather is beautiful today."</p>
                        </div>
                      </div>
                      
                      <div className="bg-green-50 rounded-lg p-4 text-green-800 border border-green-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Great job!
                          </span>
                          <div className="bg-white px-2 py-1 rounded-full text-xs font-semibold">92% accuracy</div>
                        </div>
                        <p>Your pronunciation of "th" in "weather" was perfect! Let's try another sentence.</p>
                        <div className="mt-3 flex gap-2">
                          <span className="px-2 py-1 bg-green-100 rounded-full text-xs">Perfect "th" sound</span>
                          <span className="px-2 py-1 bg-green-100 rounded-full text-xs">Good intonation</span>
                        </div>
                      </div>
                      
                      <div className="bg-purple-50 rounded-lg p-4 text-gray-700 border-l-4 border-purple-400">
                        <p className="font-medium mb-1 text-purple-800">LinggoID Assistant</p>
                        <p>Now try this one: <span className="font-medium">"I'd like to improve my English conversation skills."</span></p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-10 -right-10 bg-blue-300/30 w-40 h-40 rounded-full blur-2xl -z-10"></div>
                <div className="absolute -top-10 -left-10 bg-purple-300/30 w-40 h-40 rounded-full blur-2xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              Why Choose LinggoID
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Learn English With Confidence</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform combines cutting-edge AI technology with proven language learning methods to help you succeed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-hover border-none overflow-hidden">
                <div className={`h-2 ${
                  index % 3 === 0 ? 'purple-gradient' : 
                  index % 3 === 1 ? 'blue-gradient' : 
                  'orange-gradient'
                }`}></div>
                <CardContent className="p-8">
                  <div className={`text-4xl mb-5 ${
                    index % 3 === 0 ? 'text-purple-500' : 
                    index % 3 === 1 ? 'text-blue-500' : 
                    'text-orange-500'
                  }`}>{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Browse Topics Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">
              Diverse Learning Materials
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse Topics</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our wide range of English lessons categorized by topic and skill level.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {topicCategories.map((topic, index) => (
              <Link to={topic.path} key={index}>
                <div className="bg-white rounded-xl p-5 text-center border border-gray-100 card-hover group">
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center ${
                    index % 4 === 0 ? 'bg-purple-100 text-purple-600' : 
                    index % 4 === 1 ? 'bg-blue-100 text-blue-600' : 
                    index % 4 === 2 ? 'bg-orange-100 text-orange-600' :
                    'bg-green-100 text-green-600'
                  } group-hover:bg-purple-600 group-hover:text-white transition-colors`}>
                    {getIconComponent(topic.icon)}
                  </div>
                  <h3 className="font-medium group-hover:text-purple-600 transition-colors">{topic.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Partnership Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
              Collaboration Opportunities
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Open for Partnerships</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're looking for partners and team members who share our vision of making language learning accessible and effective.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-2xl font-bold mb-4 text-purple-700">Partnership Opportunities</h3>
              <p className="text-gray-700 mb-6">
                We're open to collaborations with educational institutions, language schools, content creators, and technology companies that can help us expand our reach and improve our platform.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Business Partnerships</h4>
                    <p className="text-sm text-gray-600">Strategic alliances to expand our services</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Educational Institutions</h4>
                    <p className="text-sm text-gray-600">Integrate our platform into your curriculum</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Technology Integration</h4>
                    <p className="text-sm text-gray-600">API access and custom solutions</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Join Our Team</h3>
              <p className="text-gray-700 mb-6">
                We're always looking for talented individuals who are passionate about language learning, education technology, and making a difference in people's lives.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Developers</h4>
                    <p className="text-sm text-gray-600">Frontend, backend, and AI specialists</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Content Creators</h4>
                    <p className="text-sm text-gray-600">Language experts and curriculum designers</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Voice Talents</h4>
                    <p className="text-sm text-gray-600">Native English speakers for audio content</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <p className="text-lg text-gray-600 mb-6">
              Interested in partnering with us or joining our team? We'd love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <a href="mailto:yeheskielyunustame13@gmail.com" className="flex items-center justify-center gap-2 bg-purple-100 text-purple-700 px-6 py-3 rounded-lg hover:bg-purple-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </a>
              <a href="https://www.linkedin.com/in/yeheskiel" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-blue-100 text-blue-700 px-6 py-3 rounded-lg hover:bg-blue-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 multi-gradient opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your English Learning Journey?</h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of learners who are improving their English skills with LinggoID.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white hover:bg-gray-100 text-purple-700 text-lg font-medium shadow-lg">
                <Link to="/dashboard">Start Learning Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg font-medium">
                <Link to="/lessons" className="text-white">Explore Lessons</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
