"use client";

// src/app/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Download, Github, Linkedin, Mail, Code, Smartphone, Server, Brain } from 'lucide-react';

// NO framer-motion imports - removed completely

export default function Home() {
  // Static stats - no counters, just numbers
  const stats = [
    { value: "6+", label: "Projects" },
    { value: "4+", label: "Technologies" },
    { value: "1+", label: "Year Experience" },
    { value: "2+", label: "Major Projects" }
  ];

  const socialLinks = [
    { href: "https://github.com/samii999", icon: Github, label: "GitHub", hoverBg: "hover:bg-gray-700" },
    { href: "https://www.linkedin.com/in/muhammad-usman-004b363a4/", icon: Linkedin, label: "LinkedIn", hoverBg: "hover:bg-blue-700" },
    { href: "mailto:um558899@gmail.com", icon: Mail, label: "Email", hoverBg: "hover:bg-red-700" }
  ];

  const skills = [
    { icon: Code, title: "Web", tech: "React & Next.js" },
    { icon: Smartphone, title: "Mobile", tech: "React Native" },
    { icon: Server, title: "Backend", tech: "Node.js & APIs" },
    { icon: Brain, title: "AI/ML", tech: "Image Classification" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section - No animations, just clean HTML/CSS */}
      <section className="relative min-h-screen flex items-center justify-center py-16 md:py-24">
        {/* Simple static background - no particles */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left Content - No entrance animations */}
            <div className="flex-1 text-center md:text-left order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                  Muhammad Usman
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-4">
                Computer Science Graduate
              </p>
              
              <p className="text-lg text-gray-400 mb-8 max-w-lg mx-auto md:mx-0">
                Web & Mobile App Developer specializing in React, Next.js, and React Native
              </p>

              {/* CTA Buttons - No hover animations, just CSS transitions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
                <Link 
                  href="/projects" 
                  className="relative bg-gradient-to-r from-yellow-400 to-amber-600 text-black px-8 py-4 rounded-lg font-bold hover:from-yellow-500 hover:to-amber-700 transition-all inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-yellow-500/25 border border-yellow-400/20"
                >
                  View My Work
                  <ArrowRight size={20} />
                </Link>
                
                <Link 
                  href="/resume.pdf" 
                  target="_blank"
                  className="relative border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 hover:text-black transition-all inline-flex items-center justify-center gap-2 backdrop-blur-sm"
                >
                  <Download size={20} />
                  Download Resume
                </Link>
              </div>

              {/* Social Links - Clean, no animations */}
              <div className="flex gap-4 justify-center md:justify-start">
                {socialLinks.map((social) => (
                  <Link 
                    key={social.label}
                    href={social.href} 
                    target="_blank"
                    className={`bg-gray-800 text-white p-3 rounded-full transition-all ${social.hoverBg} hover:shadow-lg hover:shadow-yellow-500/20`}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Image - Static, no fancy effects */}
            <div className="flex-1 relative order-1 md:order-2">
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                {/* Static decorative ring - no animation */}
                <div className="absolute inset-0 rounded-full border-2 border-yellow-400/30" />
                
                {/* Profile image */}
                <Image
                  src="/images/profile/profile.jpeg"
                  alt="Muhammad Usman"
                  fill
                  className="rounded-full object-cover border-4 border-yellow-400 shadow-2xl relative z-20"
                  priority
                  sizes="(max-width: 768px) 256px, 320px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section - No counters, static numbers */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat) => (
              <div 
                key={stat.label}
                className="text-center p-6 rounded-lg bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-yellow-400/20 backdrop-blur-sm hover:border-yellow-400/40 transition-all"
              >
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                Computer Science graduate from COMSATS University with strong foundational knowledge 
                of web and mobile application development.
              </p>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                Hands-on experience with React Native, React.js, and Next.js through academic and 
                personal projects. Developed a full-featured Final Year Project involving authentication, 
                role-based access control, APIs, and AI-assisted image classification.
              </p>
              <Link 
                href="/about" 
                className="text-yellow-400 font-bold hover:text-yellow-300 inline-flex items-center gap-2 text-lg transition-colors"
              >
                Read More <ArrowRight size={18} />
              </Link>
            </div>
            
            <div className="flex-1 grid grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.title}
                  className="p-6 rounded-lg bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-yellow-400/20 backdrop-blur-sm hover:border-yellow-400/40 transition-all"
                >
                  <div className="text-xl font-bold mb-2 text-gray-200">
                    {skill.title}
                  </div>
                  <div className="text-gray-400 text-sm flex items-center gap-2">
                    <skill.icon size={16} className="text-yellow-400" />
                    {skill.tech}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Simple gradient background */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-600" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Let's Work Together
          </h2>
          <p className="text-black/80 mb-10 text-lg font-medium">
            I'm currently looking for internship opportunities. Feel free to reach out!
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-black text-yellow-400 px-10 py-4 rounded-lg font-bold hover:bg-gray-900 transition-all inline-flex items-center gap-3 shadow-2xl hover:shadow-yellow-400/30"
          >
            Get In Touch
            <Mail size={22} />
          </Link>
        </div>
      </section>
    </div>
  );
}