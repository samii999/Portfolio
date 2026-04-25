// src/app/contact/page.tsx
'use client';

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
  Sparkles
} from 'lucide-react';

// NO framer-motion imports - completely removed

export default function ContactPage() {
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

  const whyContactItems = [
    {
      title: 'Quick Response',
      description: 'I typically respond within 24 hours',
      icon: <Clock className="w-5 h-5 text-yellow-400" />
    },
    {
      title: 'Open to Opportunities',
      description: 'Looking for internships and collaborations',
      icon: <Briefcase className="w-5 h-5 text-amber-400" />
    },
    {
      title: 'Clear Communication',
      description: 'I believe in transparent and honest discussions',
      icon: <MessageSquare className="w-5 h-5 text-yellow-500" />
    },
    {
      title: 'Technical Expertise',
      description: 'React, Next.js, React Native, and more',
      icon: <Code className="w-5 h-5 text-amber-400" />
    }
  ];

  const faqs = [
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
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section - Static */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-amber-600/5" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have a question or want to work together? I'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl border border-yellow-400/20 backdrop-blur-sm p-8 sticky top-24">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-1 h-8 bg-gradient-to-b from-yellow-400 to-amber-600 rounded-full" />
                  <span className="bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">
                    Contact Information
                  </span>
                </h2>
                
                <p className="text-gray-300 mb-8">
                  Feel free to reach out through any of these channels. I'll respond as soon as possible.
                </p>

                {/* Contact Cards */}
                <div className="space-y-4 mb-8">
                  {contactInfo.map((item, index) => (
                    <Link
                      key={index}
                      href={item.link}
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                      className="flex items-center gap-4 p-4 rounded-xl transition-all group bg-gray-800/30 border border-gray-700/50 hover:border-yellow-400/40 backdrop-blur-sm hover:bg-gray-700/30"
                    >
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${item.gradient} text-black transition-all group-hover:scale-110 group-hover:rotate-3`}>
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 group-hover:text-yellow-400 transition-colors">
                          {item.label}
                        </p>
                        <p className="font-semibold text-white group-hover:text-yellow-300 transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Quick Response Times */}
                <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-yellow-400/20 backdrop-blur-sm hover:border-yellow-400/30 transition-all">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-yellow-400" />
                    <span className="bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">
                      Quick Response
                    </span>
                  </h3>
                  <div className="space-y-3">
                    {quickResponses.map((item, index) => (
                      <div key={index} className="flex items-center gap-3 text-sm">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${item.gradient} text-black transition-all hover:scale-110 hover:rotate-3`}>
                          {item.icon}
                        </div>
                        <div>
                          <p className="font-medium text-white">{item.time}</p>
                          <p className="text-gray-400">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Availability Status */}
                <div className="mt-6 flex items-center gap-3 text-sm">
                  <div className="relative">
                    <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-amber-600 rounded-full animate-pulse" />
                  </div>
                  <span className="text-gray-300">Available for internship opportunities</span>
                </div>
              </div>
            </div>

            {/* Why Contact Me */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl border border-yellow-400/20 backdrop-blur-sm p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-1 h-8 bg-gradient-to-b from-yellow-400 to-amber-600 rounded-full" />
                  <span className="bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">
                    Why Contact Me?
                  </span>
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {whyContactItems.map((item, index) => (
                    <div
                      key={index} 
                      className="flex gap-3 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50 hover:border-yellow-400/30 transition-all backdrop-blur-sm hover:scale-102 hover:-translate-y-0.5"
                    >
                      <div className="flex-shrink-0 p-2 rounded-lg bg-gradient-to-r from-gray-700/50 to-gray-600/50 border border-gray-600/30 transition-all hover:scale-110 hover:rotate-3">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-medium mb-1 text-white">{item.title}</h4>
                        <p className="text-sm text-gray-400">{item.description}</p>
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
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index} 
                className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-yellow-400/20 backdrop-blur-sm hover:border-yellow-400/30 transition-all hover:scale-102 hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${faq.gradient} text-black transition-all hover:scale-110 hover:rotate-3`}>
                    {faq.icon}
                  </div>
                  <h3 className="font-bold text-white">{faq.question}</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}