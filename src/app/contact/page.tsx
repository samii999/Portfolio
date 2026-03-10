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
  Code,
  Send,
  Sparkles,
  Zap
} from 'lucide-react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';

function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(10)].map((_, i) => {
        const seed = i * 54321;
        const x = ((seed * 7) % 10000) / 100;
        const y = ((seed * 11) % 10000) / 100;
        
        return (
          <motion.div
            key={`float-${i}`}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-30"
            style={{
              left: `${x}%`,
              top: `${y}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 3 + i * 0.4,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        );
      })}
    </div>
  );
}

export default function ContactPage() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'um558899@gmail.com',
      link: 'mailto:um558899@gmail.com',
      gradient: 'from-yellow-400 to-amber-600'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+92 307 8370302',
      link: 'tel:+923078370302',
      gradient: 'from-amber-600 to-yellow-400'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Attock, Pakistan',
      link: 'https://maps.google.com/?q=Attock,Pakistan',
      gradient: 'from-yellow-500 to-amber-500'
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      value: '@samii999',
      link: 'https://github.com/samii999',
      gradient: 'from-gray-400 to-gray-600'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'Muhammad Usman',
      link: 'https://www.linkedin.com/in/muhammad-usman-004b363a4/',
      gradient: 'from-blue-400 to-blue-600'
    }
  ];

  const quickResponses = [
    {
      time: '< 24 hours',
      description: 'Email responses',
      icon: <Mail className="w-4 h-4" />,
      gradient: 'from-yellow-400 to-amber-600'
    },
    {
      time: 'Immediate',
      description: 'Social media',
      icon: <MessageSquare className="w-4 h-4" />,
      gradient: 'from-amber-600 to-yellow-400'
    },
    {
      time: '9 AM - 6 PM',
      description: 'Phone calls',
      icon: <Phone className="w-4 h-4" />,
      gradient: 'from-yellow-500 to-amber-500'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <FloatingElements />
        
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"
          style={{ y: backgroundY }}
        />
        
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-amber-600/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            Have a question or want to work together? I'd love to hear from you!
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl border border-yellow-400/20 backdrop-blur-sm p-8 sticky top-24">
                <motion.h2 
                  className="text-2xl font-bold mb-6 flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <motion.span 
                    className="w-1 h-8 bg-gradient-to-b from-yellow-400 to-amber-600 rounded-full"
                    animate={{ height: [32, 40, 32] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">
                    Contact Information
                  </span>
                </motion.h2>
                
                <motion.p 
                  className="text-gray-300 mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Feel free to reach out through any of these channels. I'll respond as soon as possible.
                </motion.p>

                {/* Contact Cards */}
                <motion.div 
                  className="space-y-4 mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    >
                      <Link
                        href={item.link}
                        target={item.link.startsWith('http') ? '_blank' : undefined}
                        className="flex items-center gap-4 p-4 rounded-xl transition-all group bg-gray-800/30 border border-gray-700/50 hover:border-yellow-400/40 backdrop-blur-sm hover:bg-gray-700/30"
                      >
                        <motion.div 
                          className={`p-3 rounded-lg bg-gradient-to-r ${item.gradient} text-black`}
                          whileHover={{ 
                            scale: 1.1,
                            rotate: 5
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.icon}
                        </motion.div>
                        <div>
                          <p className="text-sm text-gray-400 group-hover:text-yellow-400 transition-colors">
                            {item.label}
                          </p>
                          <p className="font-semibold text-white group-hover:text-yellow-300 transition-colors">
                            {item.value}
                          </p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Quick Response Times */}
                <motion.div 
                  className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-yellow-400/20 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  whileHover={{ borderColor: "rgba(250, 204, 21, 0.3)" }}
                >
                  <motion.h3 
                    className="font-bold mb-4 flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Clock className="w-5 h-5 text-yellow-400" />
                    </motion.div>
                    <span className="bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">
                      Quick Response
                    </span>
                  </motion.h3>
                  <div className="space-y-3">
                    {quickResponses.map((item, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-center gap-3 text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
                      >
                        <motion.div 
                          className={`p-2 rounded-lg bg-gradient-to-r ${item.gradient} text-black`}
                          whileHover={{ 
                            scale: 1.1,
                            rotate: 5
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.icon}
                        </motion.div>
                        <div>
                          <p className="font-medium text-white">{item.time}</p>
                          <p className="text-gray-400">{item.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Availability Status */}
                <motion.div 
                  className="mt-6 flex items-center gap-3 text-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  <div className="relative">
                    <motion.div 
                      className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-amber-600 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        boxShadow: ['0 0 0 0 rgba(250, 204, 21, 0.7)', '0 0 0 10px rgba(250, 204, 21, 0)', '0 0 0 0 rgba(250, 204, 21, 0.7)']
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                  <span className="text-gray-300">Available for internship opportunities</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Why Contact Me */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl border border-yellow-400/20 backdrop-blur-sm p-8">
                <motion.h2 
                  className="text-2xl font-bold mb-6 flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <motion.span 
                    className="w-1 h-8 bg-gradient-to-b from-yellow-400 to-amber-600 rounded-full"
                    animate={{ height: [32, 40, 32] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">
                    Why Contact Me?
                  </span>
                </motion.h2>
                <motion.div 
                  className="grid sm:grid-cols-2 gap-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {[
                    {
                      title: 'Quick Response',
                      description: 'I typically respond within 24 hours',
                      icon: <Clock className="w-5 h-5 text-yellow-400" />,
                      gradient: 'from-yellow-400 to-amber-600'
                    },
                    {
                      title: 'Open to Opportunities',
                      description: 'Looking for internships and collaborations',
                      icon: <Briefcase className="w-5 h-5 text-amber-400" />,
                      gradient: 'from-amber-600 to-yellow-400'
                    },
                    {
                      title: 'Clear Communication',
                      description: 'I believe in transparent and honest discussions',
                      icon: <MessageSquare className="w-5 h-5 text-yellow-500" />,
                      gradient: 'from-yellow-500 to-amber-500'
                    },
                    {
                      title: 'Technical Expertise',
                      description: 'React, Next.js, React Native, and more',
                      icon: <Code className="w-5 h-5 text-amber-400" />,
                      gradient: 'from-amber-400 to-yellow-600'
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index} 
                      className="flex gap-3 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50 hover:border-yellow-400/30 transition-all backdrop-blur-sm"
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      whileHover={{ 
                        scale: 1.02,
                        y: -2,
                        borderColor: "rgba(250, 204, 21, 0.4)"
                      }}
                    >
                      <motion.div 
                        className="flex-shrink-0 p-2 rounded-lg bg-gradient-to-r from-gray-700/50 to-gray-600/50 border border-gray-600/30"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.icon}
                      </motion.div>
                      <div>
                        <h4 className="font-medium mb-1 text-white">{item.title}</h4>
                        <p className="text-sm text-gray-400">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <motion.section 
        className="py-20 bg-gradient-to-b from-black via-gray-900 to-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Frequently Asked Questions
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              {
                question: 'What kind of opportunities are you looking for?',
                answer: 'I am currently seeking internship opportunities in web and mobile development to apply my skills and learn from industry professionals.',
                icon: <Briefcase className="w-5 h-5" />,
                gradient: 'from-yellow-400 to-amber-600'
              },
              {
                question: 'What is your response time?',
                answer: 'I typically respond to messages within 24 hours during weekdays. For urgent matters, phone calls are the fastest way.',
                icon: <Clock className="w-5 h-5" />,
                gradient: 'from-amber-600 to-yellow-400'
              },
              {
                question: 'Do you work on freelance projects?',
                answer: 'Yes, I am open to freelance projects while looking for internship opportunities. Feel free to discuss your project needs.',
                icon: <Code className="w-5 h-5" />,
                gradient: 'from-yellow-500 to-amber-500'
              },
              {
                question: 'What technologies do you work with?',
                answer: 'I specialize in React.js, Next.js, React Native, Node.js, and various databases like Supabase and Firebase.',
                icon: <Sparkles className="w-5 h-5" />,
                gradient: 'from-amber-400 to-yellow-600'
              }
            ].map((faq, index) => (
              <motion.div
                key={index} 
                className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-yellow-400/20 backdrop-blur-sm hover:border-yellow-400/30 transition-all"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  y: -2,
                  borderColor: "rgba(250, 204, 21, 0.4)"
                }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <motion.div 
                    className={`p-2 rounded-lg bg-gradient-to-r ${faq.gradient} text-black flex-shrink-0`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {faq.icon}
                  </motion.div>
                  <h3 className="font-bold text-white">{faq.question}</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}