"use client";

// src/app/about/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Briefcase, 
  Code, 
  Smartphone,
  Mail,
  Download
} from 'lucide-react';

// NO framer-motion imports - removed completely

// Static skill bar - no animation, just visual
function SkillBar({ percentage, label, level }: { percentage: number; label: string; level: string }) {
  return (
    <div className="text-center p-4 rounded-lg bg-gray-800/30 border border-yellow-400/10">
      <div className="font-bold mb-1 text-white">{label}</div>
      <div className="text-sm text-gray-400 mb-2">{level}</div>
      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-yellow-400 to-amber-600 rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export default function AboutPage() {
  const quickInfo = [
    { icon: MapPin, label: "Location", value: "Attock, Pakistan" },
    { icon: Mail, label: "Email", value: "um558899@gmail.com" },
    { icon: Calendar, label: "Experience", value: "1+ Year" }
  ];

  const courses = [
    'Mobile Application Development',
    'Web Technologies',
    'Machine Learning',
    'Software Engineering',
    'Database Systems',
    'Data Structures'
  ];

  const workItems = [
    'Developed mobile and web applications using React Native, React.js, and Next.js',
    'Created reusable UI components and responsive layouts for cross-platform compatibility',
    'Integrated Firebase Authentication and Supabase for secure data storage and backend services',
    'Worked with REST APIs using Node.js and Express for data handling and user interactions',
    'Implemented features such as role-based access control, image uploads, and GPS location usage',
    'Used Git and GitHub for version control and project management'
  ];

  const languages = [
    { name: 'English', level: 'Fluent', percentage: 90 },
    { name: 'Urdu', level: 'Native', percentage: 100 },
    { name: 'Punjabi', level: 'Native', percentage: 100 }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section - No animations */}
      <section className="relative py-20 overflow-hidden">
        {/* Static background only */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-amber-600/5" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Computer Science graduate passionate about building innovative web and mobile applications
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Left Column - Profile Image */}
            <div className="md:w-1/3">
              <div className="sticky top-24">
                {/* Profile Image - Static, no effects */}
                <div className="relative w-64 h-64 mx-auto md:mx-0 mb-6">
                  {/* Static decorative ring only */}
                  <div className="absolute inset-0 rounded-full border-2 border-yellow-400/30" />
                  
                  <Image
                    src="/images/profile/profile.jpeg"
                    alt="Muhammad Usman"
                    fill
                    className="rounded-2xl object-cover border-4 border-yellow-400 shadow-2xl relative z-10"
                    sizes="(max-width: 768px) 256px, 256px"
                  />
                </div>
                
                {/* Quick Info Cards - Static */}
                <div className="space-y-4">
                  {quickInfo.map((info) => (
                    <div
                      key={info.label}
                      className="bg-gray-800/50 rounded-xl p-4 border border-yellow-400/20 backdrop-blur-sm hover:border-yellow-400/40 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-gradient-to-r from-yellow-400 to-amber-600">
                          <info.icon className="w-5 h-5 text-black" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">{info.label}</p>
                          <p className="font-semibold text-white">{info.value}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Download Resume Button - Static */}
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  className="mt-6 w-full bg-gradient-to-r from-yellow-400 to-amber-600 text-black px-6 py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-amber-700 transition-all inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-yellow-500/25"
                >
                  <Download size={20} />
                  Download Resume
                </Link>
              </div>
            </div>

            {/* Right Column - About Content */}
            <div className="md:w-2/3">
              {/* Professional Summary */}
              <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl border border-yellow-400/20 backdrop-blur-sm p-8 mb-8 hover:border-yellow-400/30 transition-all">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-1 h-8 bg-gradient-to-b from-yellow-400 to-amber-600 rounded-full" />
                  <span className="bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">
                    Professional Summary
                  </span>
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Computer Science graduate with strong foundational knowledge of web and mobile application development. 
                  Hands-on experience with React Native, React.js, and Next.js through academic and personal projects.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Developed a full-featured Final Year Project involving authentication, role-based access control, APIs, 
                  and AI-assisted image classification. Seeking an internship opportunity to apply technical skills, 
                  learn from industry professionals, and grow as a full-stack developer.
                </p>
              </div>

              {/* Education */}
              <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl border border-yellow-400/20 backdrop-blur-sm p-8 mb-8 hover:border-yellow-400/30 transition-all">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-1 h-8 bg-gradient-to-b from-yellow-400 to-amber-600 rounded-full" />
                  <GraduationCap className="w-6 h-6 text-yellow-400" />
                  <span className="bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">
                    Education
                  </span>
                </h2>
                
                <div className="border-l-4 border-yellow-400/30 pl-4">
                  <h3 className="text-xl font-bold mb-1 text-white">COMSATS University Islamabad</h3>
                  <p className="text-yellow-400 font-semibold mb-2">Attock Campus</p>
                  <p className="text-gray-300 mb-3">Bachelor of Science in Computer Science (BSCS)</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-400/20 to-amber-600/20 text-yellow-400 rounded-full text-sm border border-yellow-400/30">
                      2022 - 2026
                    </span>
                  </div>
                  
                  <h4 className="font-semibold mb-2 text-white">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {courses.map((course, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-gradient-to-r from-amber-600/20 to-yellow-400/20 text-amber-400 rounded-full text-sm border border-amber-400/20"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Work Experience */}
              <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl border border-yellow-400/20 backdrop-blur-sm p-8 mb-8 hover:border-yellow-400/30 transition-all">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-1 h-8 bg-gradient-to-b from-yellow-400 to-amber-600 rounded-full" />
                  <Briefcase className="w-6 h-6 text-yellow-400" />
                  <span className="bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">
                    Work Experience
                  </span>
                </h2>

                <div className="space-y-6">
                  <div className="border-l-4 border-yellow-400/30 pl-4">
                    <h3 className="text-xl font-bold mb-1 text-white">Web & Mobile App Developer</h3>
                    <p className="text-yellow-400 font-semibold mb-2">Personal Projects • Jan 2024 – Present</p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      {workItems.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl border border-yellow-400/20 backdrop-blur-sm p-8 hover:border-yellow-400/30 transition-all">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-1 h-8 bg-gradient-to-b from-yellow-400 to-amber-600 rounded-full" />
                  <span className="bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">
                    Languages
                  </span>
                </h2>

                <div className="grid grid-cols-3 gap-4">
                  {languages.map((lang, index) => (
                    <SkillBar 
                      key={index}
                      label={lang.name}
                      level={lang.level}
                      percentage={lang.percentage}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Simple gradient */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-600" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-black/80 mb-10 font-medium">
            I'm currently looking for internship opportunities. Feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-black text-yellow-400 px-8 py-3 rounded-lg font-bold hover:bg-gray-900 transition-all inline-flex items-center justify-center gap-2 shadow-2xl hover:shadow-yellow-400/30"
            >
              <Mail size={20} />
              Contact Me
            </Link>
            <Link
              href="/projects"
              className="border-2 border-black text-black px-8 py-3 rounded-lg font-bold hover:bg-black hover:text-yellow-400 transition-all inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm"
            >
              <Code size={20} />
              View My Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}