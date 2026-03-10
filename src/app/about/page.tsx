"use client";

// src/app/about/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Briefcase, 
  Award, 
  Code, 
  Smartphone,
  ExternalLink,
  Mail,
  Download
} from 'lucide-react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function AnimatedSkillBar({ percentage, delay = 0 }: { percentage: number; delay?: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setWidth(percentage), delay * 200);
    }
  }, [isInView, percentage, delay]);

  return (
    <div ref={ref} className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
      <motion.div 
        className="h-full bg-gradient-to-r from-yellow-400 to-amber-600 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${width}%` }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ boxShadow: '0 0 10px rgba(250, 204, 21, 0.5)' }}
      />
    </div>
  );
}

function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(4)].map((_, i) => {
        const seed = i * 54321;
        const x = ((seed * 7) % 10000) / 100;
        const y = ((seed * 11) % 10000) / 100;
        
        return (
          <motion.div
            key={`float-${i}`}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-25"
            style={{
              left: `${x}%`,
              top: `${y}%`,
            }}
            animate={{
              y: [0, -12, 0],
              opacity: [0.25, 0.4, 0.25],
            }}
            transition={{
              duration: 1.5 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
          />
        );
      })}
    </div>
  );
}

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -30]);
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
            About Me
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            Computer Science graduate passionate about building innovative web and mobile applications
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Left Column - Profile Image */}
            <motion.div 
              className="md:w-1/3"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="sticky top-24">
                <motion.div 
                  className="relative w-64 h-64 mx-auto md:mx-0 mb-6"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {/* Holographic ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "conic-gradient(from 0deg, transparent, rgba(250, 204, 21, 0.1), transparent, rgba(251, 191, 36, 0.1), transparent)",
                    }}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-600 rounded-full opacity-20 blur-xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <Image
                    src="/images/profile/profile.jpeg"
                    alt="Muhammad Usman"
                    fill
                    className="rounded-2xl object-cover border-4 border-yellow-400 shadow-2xl relative z-10"
                  />
                </motion.div>
                
                {/* Quick Info Cards */}
                <motion.div 
                  className="space-y-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {[
                    {
                      icon: MapPin,
                      label: "Location",
                      value: "Attock, Pakistan",
                      color: "from-yellow-400 to-amber-600",
                      bg: "bg-gray-800/50"
                    },
                    {
                      icon: Mail,
                      label: "Email",
                      value: "um558899@gmail.com",
                      color: "from-amber-600 to-yellow-400",
                      bg: "bg-gray-800/50"
                    },
                    {
                      icon: Calendar,
                      label: "Experience",
                      value: "1+ Year",
                      color: "from-yellow-500 to-amber-500",
                      bg: "bg-gray-800/50"
                    }
                  ].map((info, index) => (
                    <motion.div
                      key={info.label}
                      className={`${info.bg} rounded-xl p-4 border border-yellow-400/20 backdrop-blur-sm`}
                      whileHover={{ 
                        scale: 1.02,
                        borderColor: "rgba(250, 204, 21, 0.4)",
                        y: -2
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center gap-3">
                        <motion.div 
                          className={`p-2 rounded-lg bg-gradient-to-r ${info.color}`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <info.icon className="w-5 h-5 text-black" />
                        </motion.div>
                        <div>
                          <p className="text-sm text-gray-400">{info.label}</p>
                          <p className="font-semibold text-white">{info.value}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Download Resume Button */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/resume.pdf"
                      target="_blank"
                      className="mt-6 w-full bg-gradient-to-r from-yellow-400 to-amber-600 text-black px-6 py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-amber-700 transition-all inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-yellow-500/25"
                    >
                      <motion.div
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        <Download size={20} />
                      </motion.div>
                      Download Resume
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - About Content */}
            <motion.div 
              className="md:w-2/3"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Professional Summary */}
              <motion.div 
                className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl border border-yellow-400/20 backdrop-blur-sm p-8 mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ borderColor: "rgba(250, 204, 21, 0.3)" }}
              >
                <motion.h2 
                  className="text-2xl font-bold mb-4 flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <motion.span 
                    className="w-1 h-8 bg-gradient-to-b from-yellow-400 to-amber-600 rounded-full"
                    animate={{ height: [32, 40, 32] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">
                    Professional Summary
                  </span>
                </motion.h2>
                <motion.p 
                  className="text-gray-300 leading-relaxed mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Computer Science graduate with strong foundational knowledge of web and mobile application development. 
                  Hands-on experience with React Native, React.js, and Next.js through academic and personal projects.
                </motion.p>
                <motion.p 
                  className="text-gray-400 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Developed a full-featured Final Year Project involving authentication, role-based access control, APIs, 
                  and AI-assisted image classification. Seeking an internship opportunity to apply technical skills, 
                  learn from industry professionals, and grow as a full-stack developer.
                </motion.p>
              </motion.div>

              {/* Education */}
              <motion.div 
                className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl border border-yellow-400/20 backdrop-blur-sm p-8 mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                whileHover={{ borderColor: "rgba(250, 204, 21, 0.3)" }}
              >
                <motion.h2 
                  className="text-2xl font-bold mb-6 flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <motion.span 
                    className="w-1 h-8 bg-gradient-to-b from-yellow-400 to-amber-600 rounded-full"
                    animate={{ height: [32, 40, 32] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
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
                    <GraduationCap className="w-6 h-6 text-yellow-400" />
                  </motion.div>
                  <span className="bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">
                    Education
                  </span>
                </motion.h2>
                
                <motion.div 
                  className="border-l-4 border-yellow-400/30 pl-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <h3 className="text-xl font-bold mb-1 text-white">COMSATS University Islamabad</h3>
                  <p className="text-yellow-400 font-semibold mb-2">Attock Campus</p>
                  <p className="text-gray-300 mb-3">Bachelor of Science in Computer Science (BSCS)</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <motion.span 
                      className="px-3 py-1 bg-gradient-to-r from-yellow-400/20 to-amber-600/20 text-yellow-400 rounded-full text-sm border border-yellow-400/30"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      2022 - 2026
                    </motion.span>
                  </div>
                  
                  <h4 className="font-semibold mb-2 text-white">Relevant Coursework:</h4>
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    {[
                      'Mobile Application Development',
                      'Web Technologies',
                      'Machine Learning',
                      'Software Engineering',
                      'Database Systems',
                      'Data Structures'
                    ].map((course, index) => (
                      <motion.span 
                        key={index} 
                        className="px-3 py-1 bg-gradient-to-r from-amber-600/20 to-yellow-400/20 text-amber-400 rounded-full text-sm border border-amber-400/20"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                        whileHover={{ 
                          scale: 1.05,
                          borderColor: "rgba(251, 191, 36, 0.5)"
                        }}
                      >
                        {course}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Work Experience */}
              <motion.div 
                className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl border border-yellow-400/20 backdrop-blur-sm p-8 mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                whileHover={{ borderColor: "rgba(250, 204, 21, 0.3)" }}
              >
                <motion.h2 
                  className="text-2xl font-bold mb-6 flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <motion.span 
                    className="w-1 h-8 bg-gradient-to-b from-yellow-400 to-amber-600 rounded-full"
                    animate={{ height: [32, 40, 32] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
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
                    <Briefcase className="w-6 h-6 text-yellow-400" />
                  </motion.div>
                  <span className="bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">
                    Work Experience
                  </span>
                </motion.h2>

                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <motion.div 
                    className="border-l-4 border-yellow-400/30 pl-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                  >
                    <h3 className="text-xl font-bold mb-1 text-white">Web & Mobile App Developer</h3>
                    <p className="text-yellow-400 font-semibold mb-2">Personal Projects • Jan 2024 – Present</p>
                    <motion.ul 
                      className="list-disc list-inside text-gray-300 space-y-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 1.1 }}
                    >
                      {[
                        'Developed mobile and web applications using React Native, React.js, and Next.js',
                        'Created reusable UI components and responsive layouts for cross-platform compatibility',
                        'Integrated Firebase Authentication and Supabase for secure data storage and backend services',
                        'Worked with REST APIs using Node.js and Express for data handling and user interactions',
                        'Implemented features such as role-based access control, image uploads, and GPS location usage',
                        'Used Git and GitHub for version control and project management'
                      ].map((item, index) => (
                        <motion.li 
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Languages */}
              <motion.div 
                className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl border border-yellow-400/20 backdrop-blur-sm p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                whileHover={{ borderColor: "rgba(250, 204, 21, 0.3)" }}
              >
                <motion.h2 
                  className="text-2xl font-bold mb-6 flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <motion.span 
                    className="w-1 h-8 bg-gradient-to-b from-yellow-400 to-amber-600 rounded-full"
                    animate={{ height: [32, 40, 32] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">
                    Languages
                  </span>
                </motion.h2>

                <motion.div 
                  className="grid grid-cols-3 gap-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  {[
                    { name: 'English', level: 'Fluent', percentage: 90 },
                    { name: 'Urdu', level: 'Native', percentage: 100 },
                    { name: 'Punjabi', level: 'Native', percentage: 100 },
                  ].map((lang, index) => (
                    <motion.div 
                      key={index} 
                      className="text-center p-4 rounded-lg bg-gray-800/30 border border-yellow-400/10"
                      whileHover={{ 
                        scale: 1.05,
                        borderColor: "rgba(250, 204, 21, 0.3)"
                      }}
                      transition={{
                        duration: 0.4, 
                        delay: 1.2 + index * 0.1
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                    >
                      <div className="font-bold mb-1 text-white">{lang.name}</div>
                      <div className="text-sm text-gray-400 mb-2">{lang.level}</div>
                      <AnimatedSkillBar percentage={lang.percentage} delay={0.5 + index * 0.2} />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-600"
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        
        <motion.div 
          className="absolute inset-0 bg-black/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-black/80 mb-10 font-medium">
              I'm currently looking for internship opportunities. Feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="bg-black text-yellow-400 px-8 py-3 rounded-lg font-bold hover:bg-gray-900 transition-all inline-flex items-center justify-center gap-2 shadow-2xl hover:shadow-yellow-400/30"
                >
                  <Mail size={20} />
                  Contact Me
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/projects"
                  className="border-2 border-black text-black px-8 py-3 rounded-lg font-bold hover:bg-black hover:text-yellow-400 transition-all inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm"
                >
                  <Code size={20} />
                  View My Work
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}