"use client";

// src/app/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Download, Github, Linkedin, Mail, Code, Smartphone, Server, Brain, Sparkles, BadgeCheck, Rocket, Layers3, ShieldCheck, Zap, Star } from 'lucide-react';

// NO framer-motion imports - removed completely

export default function Home() {
  // Static stats - no counters, just numbers
  const stats = [
    { value: "6+", label: "Projects" },
    { value: "3", label: "Core Domains" },
    { value: "1+", label: "Year Experience" },
    { value: "2", label: "Major AI/FYP Builds" }
  ];

  const socialLinks = [
    { href: "https://github.com/samii999", icon: Github, label: "GitHub", hoverBg: "hover:bg-gray-700" },
    { href: "https://www.linkedin.com/in/muhammad-usman-004b363a4/", icon: Linkedin, label: "LinkedIn", hoverBg: "hover:bg-blue-700" },
    { href: "mailto:um558899@gmail.com", icon: Mail, label: "Email", hoverBg: "hover:bg-red-700" }
  ];

  const skills = [
    { icon: Code, title: "Web Interfaces", tech: "React, Next.js, TypeScript" },
    { icon: Smartphone, title: "Mobile Apps", tech: "React Native, cross-platform UI" },
    { icon: Server, title: "Backend", tech: "Node.js, APIs, Supabase" },
    { icon: Brain, title: "AI Agents", tech: "Vercel AI SDK, ReAct, Zod" }
  ];

  const highlights = [
    {
      icon: Sparkles,
      title: 'Autonomous AI Agent Runtime',
      text: 'Built a strict ReAct loop with typed tools, memory compaction, web search, and eval-ready workflows.'
    },
    {
      icon: ShieldCheck,
      title: 'Reliable Product Thinking',
      text: 'Focus on structured code, reusable components, secure data flows, and real project delivery.'
    },
    {
      icon: Rocket,
      title: 'Recruiter-Ready Presentation',
      text: 'Clear UI hierarchy, fast scanning sections, and proof points that make the value easy to read.'
    }
  ];

  const credibilityPoints = [
    'Building production-style apps with clean structure and polished UI',
    'Comfortable across frontend, backend, mobile, and AI agent workflows',
    'Interested in internships where I can ship, learn, and grow quickly'
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <section className="relative isolate min-h-screen flex items-center py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.18),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(245,158,11,0.12),_transparent_24%),linear-gradient(180deg,_#000000_0%,_#0b0b0b_48%,_#000000_100%)]" />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="order-2 text-center lg:order-1 lg:text-left">
              <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-6xl lg:text-7xl">
                <span className="block text-white">I build polished</span>
                <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-600 bg-clip-text text-transparent">
                  web apps, mobile apps, and AI agents.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300 md:text-xl lg:mx-0">
                Muhammad Usman is a Computer Science graduate focused on React, Next.js, React Native, Node.js, and TypeScript.
                I turn ideas into clean, recruiter-friendly products with strong structure, premium UI, and real technical depth.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-600 px-8 py-4 font-bold text-black shadow-[0_20px_60px_rgba(250,204,21,0.25)] transition-transform hover:-translate-y-0.5"
                >
                  View Selected Work
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-yellow-400/40 bg-white/5 px-8 py-4 font-bold text-yellow-300 backdrop-blur-md transition-all hover:border-yellow-300 hover:bg-yellow-400/10"
                >
                  <Download size={20} />
                  Download Resume
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {credibilityPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-6 text-gray-200 backdrop-blur-md"
                  >
                    {point}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-center gap-4 lg:justify-start">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    aria-label={social.label}
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all ${social.hoverBg} hover:border-yellow-400/30 hover:shadow-[0_0_0_1px_rgba(250,204,21,0.18)]`}
                  >
                    <social.icon size={18} />
                  </Link>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative mx-auto max-w-[34rem]">
                <div className="absolute -inset-4 rounded-[2rem] border border-yellow-400/10 bg-gradient-to-br from-yellow-400/10 via-transparent to-amber-600/10 blur-xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-yellow-400/20 bg-black/60 p-4 shadow-[0_30px_120px_rgba(0,0,0,0.65)] backdrop-blur-xl">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.14),_transparent_35%)]" />

                  <div className="relative grid gap-4 md:grid-cols-[1fr_0.95fr]">
                    <div className="rounded-[1.5rem] border border-yellow-400/20 bg-gradient-to-b from-white/8 to-white/4 p-5">
                      <div className="flex items-center justify-between">
                        <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1 text-xs font-semibold text-yellow-300">
                          <Zap size={14} />
                          Live profile
                        </div>
                        <div className="flex items-center gap-1 text-yellow-400">
                          <Star size={14} fill="currentColor" />
                          <Star size={14} fill="currentColor" />
                          <Star size={14} fill="currentColor" />
                        </div>
                      </div>

                      <div className="relative mt-5 aspect-square overflow-hidden rounded-[1.5rem] border border-yellow-400/20 bg-gradient-to-br from-black via-gray-900 to-black">
                        <div className="absolute inset-0 rounded-[1.5rem] border border-white/10" />
                        <Image
                          src="/images/profile/profile picture.png"
                          alt="Muhammad Usman"
                          fill
                          className="object-cover"
                          style={{ objectPosition: '50% 12%' }}
                          priority
                          sizes="(max-width: 768px) 320px, 420px"
                        />
                      </div>

                      <div className="mt-5 grid grid-cols-2 gap-3 text-center">
                        {stats.map((stat) => (
                          <div key={stat.label} className="min-h-[92px] rounded-2xl border border-white/10 bg-black/40 px-3 py-4 flex flex-col items-center justify-center">
                            <div className="text-2xl font-black text-yellow-400 leading-none">{stat.value}</div>
                            <div className="mt-2 text-[10px] uppercase tracking-[0.12em] text-gray-400 leading-tight">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4 rounded-[1.5rem] border border-yellow-400/20 bg-white/5 p-5 backdrop-blur-xl">
                      <div className="rounded-2xl border border-yellow-400/20 bg-gradient-to-br from-yellow-400/15 to-amber-600/10 p-4">
                        <div className="flex items-center gap-3">
                          <div className="rounded-full bg-black/40 p-3 text-yellow-300">
                            <Layers3 size={20} />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-yellow-300">Current focus</p>
                            <p className="text-sm text-gray-200">Autonomous agent workflows and polished product UI</p>
                          </div>
                        </div>
                      </div>

                      <div className="grid gap-3">
                        {skills.map((skill) => (
                          <div
                            key={skill.title}
                            className="rounded-2xl border border-white/10 bg-black/35 p-4 transition-all hover:border-yellow-400/30 hover:bg-black/50"
                          >
                            <div className="flex items-start gap-3">
                              <div className="rounded-xl bg-gradient-to-br from-yellow-400/20 to-amber-600/20 p-2 text-yellow-300">
                                <skill.icon size={18} />
                              </div>
                              <div>
                                <div className="font-semibold text-white">{skill.title}</div>
                                <div className="text-sm text-gray-400">{skill.tech}</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-yellow-400/10 bg-white/3 py-10 backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 lg:px-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-yellow-400/15 bg-gradient-to-b from-white/6 to-white/3 p-5 shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
            >
              <div className="text-3xl font-black text-yellow-400">{stat.value}</div>
              <div className="mt-2 text-sm uppercase tracking-[0.25em] text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-300">
                <ShieldCheck size={16} />
                Why recruiters can scan this fast
              </p>
              <h2 className="text-3xl font-bold text-white md:text-4xl">Clear proof, premium presentation, and real technical depth.</h2>
            </div>
            <Link href="/about" className="inline-flex items-center gap-2 text-yellow-300 transition-colors hover:text-yellow-200">
              Read more about my background <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="group rounded-[1.5rem] border border-yellow-400/15 bg-gradient-to-b from-white/6 to-white/3 p-6 transition-all hover:-translate-y-1 hover:border-yellow-400/30 hover:shadow-[0_20px_80px_rgba(250,204,21,0.08)]"
              >
                <div className="mb-4 inline-flex rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-3 text-yellow-300">
                  <item.icon size={22} />
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-300">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <h2 className="text-3xl font-bold text-white md:text-4xl">About Me</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
                I’m a Computer Science graduate from COMSATS University with a focus on building modern web, mobile, and AI systems.
                My recent work includes an autonomous AI Agent runtime with typed tools, memory compaction, and evaluation workflows.
              </p>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-400">
                I like projects that feel real, ship cleanly, and look polished enough to make recruiters stop scrolling.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'React Native', 'Vercel AI SDK'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-yellow-400/20 bg-white/5 px-4 py-2 text-sm text-yellow-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-6 py-3 font-bold text-yellow-300 transition-all hover:bg-yellow-400/15"
              >
                Read Full Profile
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: 'Web',
                  body: 'Responsive interfaces with a premium visual feel and strong layout discipline.'
                },
                {
                  title: 'Mobile',
                  body: 'Cross-platform app work with React Native and UI patterns that stay consistent.'
                },
                {
                  title: 'Backend',
                  body: 'API handling, backend integration, and practical workflow design with Node.js.'
                },
                {
                  title: 'AI Agents',
                  body: 'Tool-using systems, agent memory, and evaluation-first thinking for dependable automation.'
                }
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-[1.5rem] border border-yellow-400/15 bg-gradient-to-b from-white/6 to-white/3 p-6 transition-all hover:border-yellow-400/30 hover:bg-white/8"
                >
                  <div className="mb-4 text-lg font-bold text-yellow-300">{card.title}</div>
                  <p className="text-sm leading-7 text-gray-300">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-600" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.2),_transparent_35%)]" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-black md:text-4xl">Let’s build something impressive.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-medium text-black/80">
            If you want a developer who can ship polished interfaces, think through systems, and adapt quickly, I’m ready.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-8 py-4 font-bold text-yellow-300 transition-all hover:bg-gray-950"
            >
              Get In Touch
              <Mail size={20} />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 bg-white/15 px-8 py-4 font-bold text-black backdrop-blur-sm transition-all hover:bg-white/20"
            >
              View Projects
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}