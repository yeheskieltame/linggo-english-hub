
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* About Header */}
      <section className="pt-28 pb-12 bg-linggo-light">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About LinggoID</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our mission is to make English language learning accessible, effective, and enjoyable for Indonesian speakers.
            </p>
          </div>
        </div>
      </section>
      
      {/* About Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="mb-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="mb-4">
                LinggoID was founded with a simple but powerful idea: to create an English learning platform specifically designed for Indonesian speakers, addressing their unique challenges and learning needs.
              </p>
              <p className="mb-4">
                Our team of language experts, educators, and technology specialists have combined their expertise to build a learning system that leverages artificial intelligence to provide personalized, effective language instruction.
              </p>
              <p>
                We understand that traditional language learning methods often fall short in developing practical communication skills. That's why our approach emphasizes real-world usage, pronunciation practice, and interactive conversations—the skills you need to actually use English confidently in your daily life and career.
              </p>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-linggo-primary mr-2">•</span>
                    <span>Personalized learning paths adapted to your skill level and goals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-linggo-primary mr-2">•</span>
                    <span>AI-powered pronunciation feedback focused on common challenges for Indonesian speakers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-linggo-primary mr-2">•</span>
                    <span>Interactive practice with real-world scenarios and contexts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-linggo-primary mr-2">•</span>
                    <span>Cultural context to help you understand nuances in English communication</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4">Our Technology</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-linggo-primary mr-2">•</span>
                    <span>Advanced speech recognition tailored for Indonesian accents</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-linggo-primary mr-2">•</span>
                    <span>Natural language processing for intelligent conversation practice</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-linggo-primary mr-2">•</span>
                    <span>Adaptive learning algorithms that evolve with your progress</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-linggo-primary mr-2">•</span>
                    <span>High-quality audio from native English speakers for authentic listening practice</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  {
                    name: 'Dr. Sarah Johnson',
                    role: 'English Language Specialist',
                    description: '15+ years experience in TEFL instruction, PhD in Applied Linguistics'
                  },
                  {
                    name: 'Budi Santoso',
                    role: 'Indonesian Language Expert',
                    description: 'Specializes in cross-cultural communication and language learning methodologies'
                  },
                  {
                    name: 'Michael Chang',
                    role: 'AI & Technology Lead',
                    description: 'Expert in speech recognition systems and machine learning for language acquisition'
                  },
                  {
                    name: 'Rina Wijaya',
                    role: 'Curriculum Designer',
                    description: 'Creates engaging lessons that bridge Indonesian and English language patterns'
                  },
                  {
                    name: 'James Wilson',
                    role: 'Voice Talent Director',
                    description: 'Coordinates our team of native English speakers for authentic pronunciation examples'
                  },
                  {
                    name: 'Dewi Putri',
                    role: 'User Experience Lead',
                    description: 'Ensures the platform is intuitive and effective for learners of all levels'
                  }
                ].map((member, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 mx-auto"></div>
                    <h3 className="font-semibold text-center">{member.name}</h3>
                    <p className="text-linggo-primary text-sm text-center mb-2">{member.role}</p>
                    <p className="text-sm text-gray-600 text-center">{member.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
