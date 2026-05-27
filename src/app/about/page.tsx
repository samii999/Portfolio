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
  Download,
  Sparkles,
  BadgeCheck,
  Layers3,
  ArrowRight
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
    'Autonomous AI Agent Runtime',
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
    'Built an autonomous AI Agent runtime using TypeScript, Node.js, and the Vercel AI SDK',
    'Implemented memory compaction, strict typed tools with Zod, and evaluation workflows for agent reliability',
    'Used Git and GitHub for version control and project management'
  ];

  const languages = [
    { name: 'English', level: 'Fluent', percentage: 90 },
    { name: 'Urdu', level: 'Native', percentage: 100 },
    { name: 'Punjabi', level: 'Native', percentage: 100 }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <section className="relative isolate py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.16),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(245,158,11,0.12),_transparent_28%),linear-gradient(180deg,_#000000_0%,_#0a0a0a_50%,_#000000_100%)]" />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <h1 className="text-5xl font-black leading-tight tracking-tight md:text-6xl lg:text-7xl">
                <span className="block text-white">About</span>
                <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-600 bg-clip-text text-transparent">
                  Muhammad Usman
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300 md:text-xl">
                Computer Science graduate building web, mobile, and AI-driven agent systems with a focus on clean structure, polished UI, and real product value.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/projects" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-600 px-6 py-3 font-bold text-black transition-transform hover:-translate-y-0.5">
                  View Projects <ArrowRight size={18} />
                </Link>
                <Link href="/resume.pdf" target="_blank" className="inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-white/5 px-6 py-3 font-bold text-yellow-300 backdrop-blur-md transition-all hover:border-yellow-300 hover:bg-yellow-400/10">
                  <Download size={18} /> Download Resume
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-yellow-400/15 bg-white/5 p-5 backdrop-blur-xl sm:row-span-2">
                <div className="relative mx-auto mb-5 aspect-square max-w-[22rem] overflow-hidden rounded-[1.5rem] border border-yellow-400/20 bg-black/40">
                  <Image
                    src="/images/profile/profile picture.png"
                    alt="Muhammad Usman"
                    fill
                    className="object-cover"
                    style={{ objectPosition: '50% 12%' }}
                    sizes="(max-width: 768px) 320px, 360px"
                    priority
                  />
                </div>
                <div className="grid grid-cols-3 gap-3 text-center">
                  {[
                    { value: '6+', label: 'Projects' },
                    { value: '3', label: 'Core Domains' },
                    { value: '1+', label: 'Year Experience' }
                  ].map((stat) => (
                    <div key={stat.label} className="overflow-hidden rounded-2xl border border-white/10 bg-black/40 px-3 py-4">
                      <div className="text-2xl font-black text-yellow-400 leading-none">{stat.value}</div>
                      <div className="mt-2 break-words text-[10px] uppercase tracking-[0.1em] text-gray-400 leading-tight sm:text-[11px]">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-yellow-400/15 bg-gradient-to-b from-white/6 to-white/3 p-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-yellow-400/10 p-3 text-yellow-300">
                    <Layers3 size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-yellow-300">Professional Summary</p>
                    <p className="text-sm text-gray-300">Web, mobile, and AI agent development</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-gray-300">
                  Strong foundation in React, Next.js, React Native, TypeScript, and Node.js. Recently built an autonomous AI Agent runtime with typed tools, web search, memory compaction, and evaluation workflows.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-yellow-400/15 bg-gradient-to-b from-white/6 to-white/3 p-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-yellow-400/10 p-3 text-yellow-300">
                    <BadgeCheck size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-yellow-300">Seeking</p>
                    <p className="text-sm text-gray-300">Internship / entry-level software opportunity</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-gray-300">
                  I like building work that is easy to scan, looks premium, and still communicates technical depth in seconds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.5rem] border border-yellow-400/15 bg-white/5 p-6">
              <h2 className="text-2xl font-bold text-white">Education</h2>
              <div className="mt-5 border-l-4 border-yellow-400/30 pl-4">
                <h3 className="text-xl font-bold text-white">COMSATS University Islamabad</h3>
                <p className="text-yellow-400 font-semibold">Attock Campus</p>
                <p className="mt-1 text-gray-300">Bachelor of Science in Computer Science (BSCS) · 2022 - 2026</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {courses.map((course) => (
                    <span key={course} className="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1 text-xs text-yellow-100">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-yellow-400/15 bg-white/5 p-6">
              <h2 className="text-2xl font-bold text-white">Work Experience</h2>
              <div className="mt-5 border-l-4 border-yellow-400/30 pl-4">
                <h3 className="text-xl font-bold text-white">Web & Mobile App Developer</h3>
                <p className="text-yellow-400 font-semibold">Personal Projects · Jan 2024 – Present</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-300">
                  {workItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[1.5rem] border border-yellow-400/15 bg-white/5 p-6">
              <h2 className="text-2xl font-bold text-white">Languages</h2>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {languages.map((lang) => (
                  <SkillBar key={lang.name} label={lang.name} level={lang.level} percentage={lang.percentage} />
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-yellow-400/15 bg-gradient-to-br from-yellow-400/10 to-amber-600/10 p-6 text-black">
              <h2 className="text-2xl font-black">Let’s Work Together</h2>
              <p className="mt-4 text-black/80 leading-7">
                I’m currently looking for internship opportunities and roles where I can contribute quickly, learn from a strong team, and ship clean work.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 font-bold text-yellow-300">
                  Contact Me <Mail size={18} />
                </Link>
                <Link href="/projects" className="inline-flex items-center gap-2 rounded-full border border-black/20 bg-white/15 px-6 py-3 font-bold text-black backdrop-blur-sm">
                  View My Work <Code size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}