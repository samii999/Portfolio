// src/app/contact/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin,
  Clock,
  MessageSquare,
  Briefcase,
  Code
} from 'lucide-react';

export default function ContactPage() {

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'um558899@gmail.com',
      link: 'mailto:um558899@gmail.com',
      color: 'bg-red-100 text-red-600',
      hoverColor: 'hover:bg-red-600 hover:text-white'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+92 307 8370302',
      link: 'tel:+923078370302',
      color: 'bg-green-100 text-green-600',
      hoverColor: 'hover:bg-green-600 hover:text-white'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Attock, Pakistan',
      link: 'https://maps.google.com/?q=Attock,Pakistan',
      color: 'bg-purple-100 text-purple-600',
      hoverColor: 'hover:bg-purple-600 hover:text-white'
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      value: '@samii999',
      link: 'https://github.com/samii999',
      color: 'bg-gray-100 text-gray-900',
      hoverColor: 'hover:bg-gray-900 hover:text-white'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'Muhammad Usman',
      link: 'https://www.linkedin.com/in/muhammad-usman-004b363a4/',
      color: 'bg-blue-100 text-blue-600',
      hoverColor: 'hover:bg-blue-600 hover:text-white'
    }
  ];

  const quickResponses = [
    {
      time: '< 24 hours',
      description: 'Email responses',
      icon: <Mail className="w-4 h-4" />
    },
    {
      time: 'Immediate',
      description: 'Social media',
      icon: <MessageSquare className="w-4 h-4" />
    },
    {
      time: '9 AM - 6 PM',
      description: 'Phone calls',
      icon: <Phone className="w-4 h-4" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Have a question or want to work together? I'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-1 h-8 bg-blue-600 rounded-full"></span>
                  Contact Information
                </h2>
                
                <p className="text-gray-600 mb-8">
                  Feel free to reach out through any of these channels. I'll respond as soon as possible.
                </p>

                {/* Contact Cards */}
                <div className="space-y-4 mb-8">
                  {contactInfo.map((item, index) => (
                    <Link
                      key={index}
                      href={item.link}
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                      className={`flex items-center gap-4 p-4 rounded-xl transition-all group ${item.hoverColor}`}
                    >
                      <div className={`p-3 rounded-lg ${item.color} group-hover:bg-white group-hover:bg-opacity-20 transition-colors`}>
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 group-hover:text-white group-hover:text-opacity-80">
                          {item.label}
                        </p>
                        <p className="font-semibold text-gray-900 group-hover:text-white">
                          {item.value}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Quick Response Times */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    Quick Response
                  </h3>
                  <div className="space-y-3">
                    {quickResponses.map((item, index) => (
                      <div key={index} className="flex items-center gap-3 text-sm">
                        <div className="p-2 bg-white rounded-lg text-blue-600">
                          {item.icon}
                        </div>
                        <div>
                          <p className="font-medium">{item.time}</p>
                          <p className="text-gray-500">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Availability Status */}
                <div className="mt-6 flex items-center gap-3 text-sm">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full absolute top-0 animate-ping"></div>
                  </div>
                  <span className="text-gray-600">Available for internship opportunities</span>
                </div>
              </div>
            </div>

            {/* Contact Information & Why Contact Me */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-1 h-8 bg-green-600 rounded-full"></span>
                  Why Contact Me?
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: 'Quick Response',
                      description: 'I typically respond within 24 hours',
                      icon: <Clock className="w-5 h-5 text-blue-600" />
                    },
                    {
                      title: 'Open to Opportunities',
                      description: 'Looking for internships and collaborations',
                      icon: <Briefcase className="w-5 h-5 text-green-600" />
                    },
                    {
                      title: 'Clear Communication',
                      description: 'I believe in transparent and honest discussions',
                      icon: <MessageSquare className="w-5 h-5 text-purple-600" />
                    },
                    {
                      title: 'Technical Expertise',
                      description: 'React, Next.js, React Native, and more',
                      icon: <Code className="w-5 h-5 text-orange-600" />
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-3 p-4 bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0">{item.icon}</div>
                      <div>
                        <h4 className="font-medium mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: 'What kind of opportunities are you looking for?',
                answer: 'I am currently seeking internship opportunities in web and mobile development to apply my skills and learn from industry professionals.'
              },
              {
                question: 'What is your response time?',
                answer: 'I typically respond to messages within 24 hours during weekdays. For urgent matters, phone calls are the fastest way.'
              },
              {
                question: 'Do you work on freelance projects?',
                answer: 'Yes, I am open to freelance projects while looking for internship opportunities. Feel free to discuss your project needs.'
              },
              {
                question: 'What technologies do you work with?',
                answer: 'I specialize in React.js, Next.js, React Native, Node.js, and various databases like Supabase and Firebase.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}