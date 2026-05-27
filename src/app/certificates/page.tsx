"use client";

import { useState } from 'react';
import { 
  Download, 
  Award, 
  Calendar,
  ExternalLink,
  FileText,
  Shield,
  Code,
  Sparkles,
  ArrowRight,
  BadgeCheck
} from 'lucide-react';

// NO framer-motion imports - completely removed

export default function CertificatesPage() {

  const certificates = [
    {
      id: 'agent-v2',
      title: 'Agent v2 Certification',
      issuer: 'Agent Engineering Program',
      date: '2026',
      description: 'Comprehensive AI engineering certification focused on building zero-dependency autonomous agent runtimes from scratch. Covers the ReAct loop execution framework, strict tool-calling safety with Zod, and multi-turn automated evaluation pipelines.',
      file: '/images/certificates/agent-v2.png',
      projectLink: 'https://github.com/samii999/AI-Agent/blob/main/README.md',
      icon: Code,
      gradient: 'from-yellow-400 to-amber-600',
      tags: ['AI', 'Agents', 'ReAct', 'Zod', 'Evaluation']
    },
    {
      id: 'next-js-v4',
      title: 'Next.js v4 Certification',
      issuer: 'Frontend Masters',
      date: '2026',
      description: 'Advanced Next.js development certification covering latest features, app router, server components, and performance optimization.',
      file: '/images/certificates/next js v4.png',
      projectLink: 'https://github.com/samii999/Nextjs-fundemental/blob/main/README.md',
      icon: Code,
      gradient: 'from-yellow-400 to-amber-600',
      tags: ['Next.js', 'React', 'Web Development', 'Frontend']
    },
    {
      id: 'web-security',
      title: 'Web Security v2 Certification',
      issuer: 'Frontend Masters',
      date: '2026',
      description: 'Comprehensive web security certification covering OWASP top 10, secure coding practices, and vulnerability assessment.',
      file: '/images/certificates/web security v2.png',
      projectLink: 'https://github.com/samii999/Web-Security/blob/main/README.md',
      icon: Shield,
      gradient: 'from-amber-600 to-yellow-400',
      tags: ['Security', 'Web Development', 'OWASP', 'Best Practices']
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <section className="relative isolate py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.16),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(245,158,11,0.12),_transparent_24%),linear-gradient(180deg,_#000000_0%,_#0a0a0a_50%,_#000000_100%)]" />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px]" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-5xl font-black leading-tight tracking-tight md:text-6xl lg:text-7xl">
            <span className="block text-white">Certificates and</span>
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-600 bg-clip-text text-transparent">achievements.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
            Certifications that support my work in web development, AI agent systems, and security-focused engineering.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { label: 'Certificates', value: certificates.length },
              { label: 'Latest year', value: '2026' },
              { label: 'Focus areas', value: 'AI + Security' }
            ].map((stat) => (
              <div key={stat.label} className="rounded-[1.5rem] border border-yellow-400/15 bg-white/5 p-5 backdrop-blur-xl">
                <div className="text-3xl font-black text-yellow-400">{stat.value}</div>
                <div className="mt-2 text-sm uppercase tracking-[0.2em] text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {certificates.map((certificate, index) => {
              const Icon = certificate.icon;
              return (
                <div
                  key={certificate.id}
                  className="rounded-[1.5rem] border border-yellow-400/15 bg-white/5 p-6 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-yellow-400/30"
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${certificate.gradient} text-black flex items-center justify-center flex-shrink-0 shadow-lg shadow-yellow-500/20`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-white">
                        {certificate.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Award className="w-4 h-4" />
                          {certificate.issuer}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {certificate.date}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-5 leading-relaxed">
                    {certificate.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {certificate.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1 text-xs font-medium text-yellow-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {certificate.projectLink && (
                    <div className="mb-4">
                      <a
                        href={certificate.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-300 hover:text-yellow-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Read more
                      </a>
                    </div>
                  )}

                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                    <img
                      src={certificate.file}
                      alt={`${certificate.title} Certificate`}
                      className="w-full h-auto object-contain"
                    />
                  </div>

                </div>
              );
            })}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-[1.5rem] border border-yellow-400/30 bg-gradient-to-br from-yellow-400 to-amber-600 p-6 text-black shadow-lg shadow-yellow-500/25 transition-all hover:-translate-y-1">
              <div className="mb-2 flex items-center gap-3">
                <Award className="w-6 h-6" />
                <div className="text-3xl font-bold">{certificates.length}</div>
              </div>
              <div className="text-black/80 font-medium">Total Certificates</div>
            </div>
            
            <div className="rounded-[1.5rem] border border-amber-400/30 bg-gradient-to-br from-amber-600 to-yellow-400 p-6 text-black shadow-lg shadow-amber-500/25 transition-all hover:-translate-y-1">
              <div className="mb-2 flex items-center gap-3">
                <Calendar className="w-6 h-6" />
                <div className="text-3xl font-bold">2026</div>
              </div>
              <div className="text-black/80 font-medium">Latest Achievement</div>
            </div>
            
            <div className="rounded-[1.5rem] border border-yellow-400/30 bg-gradient-to-br from-yellow-500 to-amber-500 p-6 text-black shadow-lg shadow-yellow-500/25 transition-all hover:-translate-y-1">
              <div className="mb-2 flex items-center gap-3">
                <FileText className="w-6 h-6" />
                <div className="text-3xl font-bold">100%</div>
              </div>
              <div className="text-black/80 font-medium">Completion Rate</div>
            </div>
          </div>

          <div className="mt-12 rounded-[1.5rem] border border-yellow-400/15 bg-white/5 p-6 backdrop-blur-xl hover:border-yellow-400/30 transition-all md:p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-8 bg-gradient-to-b from-yellow-400 to-amber-600 rounded-full" />
              <span className="bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">
                Continuous Learning Path
              </span>
            </h2>
            
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-yellow-400/20 to-amber-600/20 border border-yellow-400/30 flex items-center justify-center">
                  <Code className="w-8 h-8 text-yellow-400" />
                </div>
                <h4 className="font-bold mb-2 text-white">Technical Skills</h4>
                <p className="text-sm text-gray-400">Advanced frameworks and modern development practices</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-amber-600/20 to-yellow-400/20 border border-yellow-400/30 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-yellow-400" />
                </div>
                <h4 className="font-bold mb-2 text-white">Security Focus</h4>
                <p className="text-sm text-gray-400">Web security best practices and vulnerability prevention</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-400/30 flex items-center justify-center">
                  <Award className="w-8 h-8 text-yellow-400" />
                </div>
                <h4 className="font-bold mb-2 text-white">Professional Growth</h4>
                <p className="text-sm text-gray-400">Industry-recognized certifications and continuous improvement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}