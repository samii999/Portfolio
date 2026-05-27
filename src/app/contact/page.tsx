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
  Sparkles,
  ArrowRight,
  BadgeCheck
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
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <section className="relative isolate py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.16),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(245,158,11,0.12),_transparent_24%),linear-gradient(180deg,_#000000_0%,_#0a0a0a_50%,_#000000_100%)]" />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px]" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-5xl font-black leading-tight tracking-tight md:text-6xl lg:text-7xl">
            <span className="block text-white">Get in</span>
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-600 bg-clip-text text-transparent">touch.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
            If you want to talk about internships, freelance work, or collaboration, this is the fastest place to reach me.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[1.5rem] border border-yellow-400/15 bg-white/5 p-6 backdrop-blur-xl lg:sticky lg:top-24 h-fit">
              <h2 className="mb-4 text-2xl font-bold text-white">Contact Details</h2>
              <p className="mb-8 text-gray-300">
                Reach out through email, phone, or LinkedIn. I usually respond quickly and keep communication clear.
              </p>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/30 p-4 transition-all hover:-translate-y-0.5 hover:border-yellow-400/30 hover:bg-black/50"
                  >
                    <div className={`rounded-xl bg-gradient-to-r ${item.gradient} p-3 text-black`}>{item.icon}</div>
                    <div>
                      <p className="text-sm text-gray-400">{item.label}</p>
                      <p className="font-semibold text-white">{item.value}</p>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-yellow-400/15 bg-gradient-to-r from-yellow-400/10 to-amber-600/10 p-4 text-sm text-gray-200">
                I’m open to internships, collaboration, and small freelance projects.
              </div>

              <div className="mt-6 flex items-center gap-3 text-sm text-gray-300">
                <div className="h-3 w-3 rounded-full bg-gradient-to-r from-yellow-400 to-amber-600 animate-pulse" />
                Available for new opportunities
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-[1.5rem] border border-yellow-400/15 bg-white/5 p-6 backdrop-blur-xl">
                <h2 className="mb-6 text-2xl font-bold text-white">Why contact me?</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {whyContactItems.map((item, index) => (
                    <div key={index} className="rounded-2xl border border-white/10 bg-black/30 p-4 transition-all hover:-translate-y-0.5 hover:border-yellow-400/30">
                      <div className="mb-3">{item.icon}</div>
                      <h4 className="font-medium text-white">{item.title}</h4>
                      <p className="mt-1 text-sm text-gray-400">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-yellow-400/15 bg-white/5 p-6 backdrop-blur-xl">
                <h2 className="mb-6 text-2xl font-bold text-white">Quick response</h2>
                <div className="grid gap-4 md:grid-cols-3">
                  {quickResponses.map((item, index) => (
                    <div key={index} className="rounded-2xl border border-white/10 bg-black/30 p-4 text-center">
                      <div className={`mx-auto mb-3 inline-flex rounded-xl bg-gradient-to-r ${item.gradient} p-3 text-black`}>
                        {item.icon}
                      </div>
                      <p className="font-semibold text-white">{item.time}</p>
                      <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-yellow-400/15 bg-white/5 p-6 backdrop-blur-xl">
                <h2 className="mb-6 text-2xl font-bold text-white">FAQ</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {faqs.map((faq, index) => (
                    <div key={index} className="rounded-2xl border border-white/10 bg-black/30 p-5">
                      <div className="mb-3 flex items-start gap-3">
                        <div className={`rounded-lg bg-gradient-to-r ${faq.gradient} p-2 text-black`}>
                          {faq.icon}
                        </div>
                        <h3 className="font-bold text-white">{faq.question}</h3>
                      </div>
                      <p className="text-sm leading-7 text-gray-300">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}