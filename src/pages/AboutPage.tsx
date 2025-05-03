
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Lightbulb, Code, Globe, BookOpen, Award, Heart } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* About Header - Modern Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
              Our Mission & Vision
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Revolutionizing English Learning for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Indonesian Speakers</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              We're on a mission to make English language learning accessible, effective, and enjoyable through innovative AI technology and culturally relevant content.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-purple-600 hover:bg-purple-700">
                Join Our Community
              </Button>
              <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
                Learn More About Our Approach
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Content - Tabs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <Tabs defaultValue="story" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-4 w-full max-w-2xl">
                <TabsTrigger value="story" className="flex flex-col items-center gap-2 py-3">
                  <BookOpen className="h-5 w-5" />
                  <span>Our Story</span>
                </TabsTrigger>
                <TabsTrigger value="approach" className="flex flex-col items-center gap-2 py-3">
                  <Lightbulb className="h-5 w-5" />
                  <span>Approach</span>
                </TabsTrigger>
                <TabsTrigger value="technology" className="flex flex-col items-center gap-2 py-3">
                  <Code className="h-5 w-5" />
                  <span>Technology</span>
                </TabsTrigger>
                <TabsTrigger value="team" className="flex flex-col items-center gap-2 py-3">
                  <Users className="h-5 w-5" />
                  <span>Our Team</span>
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="story" className="mt-6">
              <Card>
                <CardContent className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row gap-10">
                    <div className="md:w-1/2">
                      <h2 className="text-2xl font-bold mb-6 flex items-center text-purple-700">
                        <BookOpen className="h-6 w-6 mr-2" />
                        Our Story
                      </h2>
                      <div className="space-y-4">
                        <p>
                          LinggoID was founded with a simple but powerful idea: to create an English learning platform specifically designed for Indonesian speakers, addressing their unique challenges and learning needs.
                        </p>
                        <p>
                          Our team of language experts, educators, and technology specialists have combined their expertise to build a learning system that leverages artificial intelligence to provide personalized, effective language instruction.
                        </p>
                        <p>
                          We understand that traditional language learning methods often fall short in developing practical communication skills. That's why our approach emphasizes real-world usage, pronunciation practice, and interactive conversations—the skills you need to actually use English confidently in your daily life and career.
                        </p>
                      </div>
                      <div className="mt-8">
                        <h3 className="text-lg font-semibold mb-3">Our Values</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-start">
                            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-3 mt-1">
                              <Globe className="h-4 w-4" />
                            </div>
                            <div>
                              <h4 className="font-medium">Accessibility</h4>
                              <p className="text-sm text-gray-600">Language learning for everyone</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 mt-1">
                              <Award className="h-4 w-4" />
                            </div>
                            <div>
                              <h4 className="font-medium">Excellence</h4>
                              <p className="text-sm text-gray-600">Quality in everything we do</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mr-3 mt-1">
                              <Lightbulb className="h-4 w-4" />
                            </div>
                            <div>
                              <h4 className="font-medium">Innovation</h4>
                              <p className="text-sm text-gray-600">Pushing boundaries in EdTech</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3 mt-1">
                              <Heart className="h-4 w-4" />
                            </div>
                            <div>
                              <h4 className="font-medium">Empathy</h4>
                              <p className="text-sm text-gray-600">Understanding learner needs</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 flex items-center justify-center">
                      <div className="relative w-full max-w-md">
                        <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-4xl font-bold">
                          LinggoID
                        </div>
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-400 rounded-xl -z-10 opacity-50 blur-sm"></div>
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-400 rounded-xl -z-10 opacity-50 blur-sm"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="approach" className="mt-6">
              <Card>
                <CardContent className="p-8 md:p-10">
                  <h2 className="text-2xl font-bold mb-8 flex items-center text-blue-600">
                    <Lightbulb className="h-6 w-6 mr-2" />
                    Our Unique Approach
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                      <h3 className="text-xl font-semibold mb-6">Personalized Learning</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 mt-1 flex-shrink-0">
                            <span className="text-lg font-semibold">1</span>
                          </div>
                          <div>
                            <h4 className="font-medium">Adaptive Learning Paths</h4>
                            <p className="text-gray-600">Customized to your skill level, goals, and learning pace</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 mt-1 flex-shrink-0">
                            <span className="text-lg font-semibold">2</span>
                          </div>
                          <div>
                            <h4 className="font-medium">Targeted Feedback</h4>
                            <p className="text-gray-600">AI-powered pronunciation feedback focused on common challenges for Indonesian speakers</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 mt-1 flex-shrink-0">
                            <span className="text-lg font-semibold">3</span>
                          </div>
                          <div>
                            <h4 className="font-medium">Progress Tracking</h4>
                            <p className="text-gray-600">Detailed analytics to monitor your improvement over time</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-6">Real-World Application</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-3 mt-1 flex-shrink-0">
                            <span className="text-lg font-semibold">1</span>
                          </div>
                          <div>
                            <h4 className="font-medium">Interactive Scenarios</h4>
                            <p className="text-gray-600">Practice with real-world conversations and situations</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-3 mt-1 flex-shrink-0">
                            <span className="text-lg font-semibold">2</span>
                          </div>
                          <div>
                            <h4 className="font-medium">Cultural Context</h4>
                            <p className="text-gray-600">Learn the nuances and cultural aspects of English communication</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-3 mt-1 flex-shrink-0">
                            <span className="text-lg font-semibold">3</span>
                          </div>
                          <div>
                            <h4 className="font-medium">Practical Vocabulary</h4>
                            <p className="text-gray-600">Focus on words and phrases you'll actually use in daily life</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-10 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                    <h3 className="text-xl font-semibold mb-4">What Makes Us Different</h3>
                    <p className="text-gray-700">
                      Unlike generic language apps, LinggoID is specifically designed for Indonesian speakers. We understand the unique challenges you face when learning English, from pronunciation difficulties to grammar confusion. Our platform addresses these specific challenges with targeted exercises and explanations that make sense for your language background.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="technology" className="mt-6">
              <Card>
                <CardContent className="p-8 md:p-10">
                  <h2 className="text-2xl font-bold mb-8 flex items-center text-orange-600">
                    <Code className="h-6 w-6 mr-2" />
                    Our Technology
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                      <div className="w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center text-white mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Speech Recognition</h3>
                      <p className="text-gray-700">Advanced algorithms tailored for Indonesian accents and common pronunciation challenges</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                      <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center text-white mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Natural Language Processing</h3>
                      <p className="text-gray-700">Intelligent conversation practice with contextual understanding and natural responses</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
                      <div className="w-12 h-12 rounded-lg bg-orange-500 flex items-center justify-center text-white mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Adaptive Learning</h3>
                      <p className="text-gray-700">Algorithms that evolve with your progress, focusing on areas where you need more practice</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl mb-10">
                    <h3 className="text-xl font-semibold mb-4">Our AI-Powered Platform</h3>
                    <p className="mb-4">
                      At the heart of LinggoID is our proprietary AI system that combines multiple technologies to create a comprehensive learning experience:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Real-time pronunciation analysis with specific feedback on problematic sounds</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Conversational AI that can engage in natural dialogue while correcting errors</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>Personalized content recommendation based on your learning patterns</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>High-quality audio from native English speakers for authentic listening practice</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/2 bg-gradient-to-br from-purple-500 to-blue-500 p-6 rounded-xl text-white">
                      <h3 className="text-xl font-semibold mb-4">Continuous Improvement</h3>
                      <p>
                        Our technology is constantly evolving. We regularly update our algorithms based on user data and feedback to provide an ever-improving learning experience.
                      </p>
                    </div>
                    <div className="md:w-1/2 border border-gray-200 p-6 rounded-xl">
                      <h3 className="text-xl font-semibold mb-4">Privacy & Security</h3>
                      <p>
                        We take your data privacy seriously. All voice recordings and personal information are securely stored and used only to improve your learning experience.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="team" className="mt-6">
              <Card>
                <CardContent className="p-8 md:p-10">
                  <h2 className="text-2xl font-bold mb-8 flex items-center text-purple-700">
                    <Users className="h-6 w-6 mr-2" />
                    Meet Our Team
                  </h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                      {
                        name: 'Yeheskiel Yunus Tame',
                        role: 'Founder & CEO, AI & Technology Lead',
                        description: 'Expert in Machine Learning, Speech Recognition systems and API integration',
                        color: 'purple'
                      },
                      {
                        name: 'Dewi Lestari',
                        role: 'Indonesian Language Expert',
                        description: 'Specializes in cross-cultural communication and language learning methodologies',
                        color: 'blue'
                      },
                      {
                        name: 'Budi Santoso',
                        role: 'Curriculum Designer',
                        description: 'Creates engaging lessons that bridge Indonesian and English language patterns',
                        color: 'orange'
                      },
                      {
                        name: 'Rini Wulandari',
                        role: 'English Language Specialist',
                        description: '15+ years experience in TEFL instruction, PhD in Applied Linguistics',
                        color: 'purple'
                      },
                      {
                        name: 'Agus Purnomo',
                        role: 'Voice Talent Director',
                        description: 'Coordinates our team of native English speakers for authentic pronunciation examples',
                        color: 'blue'
                      },
                      {
                        name: 'Siti Rahmawati',
                        role: 'User Experience Lead',
                        description: 'Ensures the platform is intuitive and effective for learners of all levels',
                        color: 'orange'
                      }
                    ].map((member, index) => (
                      <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                        <div className={`h-2 ${
                          member.color === 'purple' ? 'bg-purple-500' : 
                          member.color === 'blue' ? 'bg-blue-500' : 
                          'bg-orange-500'
                        }`}></div>
                        <div className="p-6">
                          <div className="flex items-center mb-4">
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold ${
                              member.color === 'purple' ? 'bg-gradient-to-br from-purple-500 to-purple-600' : 
                              member.color === 'blue' ? 'bg-gradient-to-br from-blue-500 to-blue-600' : 
                              'bg-gradient-to-br from-orange-500 to-orange-600'
                            }`}>
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div className="ml-4">
                              <h3 className="font-semibold">{member.name}</h3>
                              <p className={`text-sm ${
                                member.color === 'purple' ? 'text-purple-600' : 
                                member.color === 'blue' ? 'text-blue-600' : 
                                'text-orange-600'
                              }`}>{member.role}</p>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm">{member.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-12 bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-4">Join Our Team</h3>
                    <p className="mb-4">
                      We're always looking for passionate individuals to join our mission of revolutionizing language learning. If you're excited about education, technology, and making a difference, we'd love to hear from you.
                    </p>
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      View Open Positions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 via-blue-500 to-orange-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your English Learning Journey?</h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of learners who are improving their English skills with LinggoID's innovative approach.
            </p>
            <Button size="lg" className="bg-white hover:bg-gray-100 text-purple-700 text-lg font-medium">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
