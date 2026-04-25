"use client";

import { useState } from 'react';
import { 
  Download, 
  Award, 
  Calendar,
  ExternalLink,
  FileText,
  Shield,
  Code
} from 'lucide-react';

// NO framer-motion imports - completely removed

export default function CertificatesPage() {

  const certificates = [
    {
      id: 'next-js-v4',
      title: 'Next.js v4 Certification',
      issuer: 'Frontend Masters',
      date: '2026',
      description: 'Advanced Next.js development certification covering latest features, app router, server components, and performance optimization.',
      file: '/next-js-v4-dark.pdf',
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
      file: '/web-security-v2-dark.pdf',
      icon: Shield,
      gradient: 'from-amber-600 to-yellow-400',
      tags: ['Security', 'Web Development', 'OWASP', 'Best Practices']
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section - Static */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-amber-600/5" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-400/20 to-amber-600/20 text-yellow-400 rounded-full text-sm font-medium mb-4 border border-yellow-400/30 backdrop-blur-sm">
            Professional Development
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Certificates &{' '}
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
              Achievements
            </span>
          </h1>
          
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Professional certifications that validate my expertise and commitment to continuous learning in web development and security.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Certificates Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {certificates.map((certificate, index) => {
              const Icon = certificate.icon;
              return (
                <div
                  key={certificate.id}
                  className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl border border-yellow-400/20 backdrop-blur-sm p-8 hover:border-yellow-400/30 transition-all hover:scale-105 hover:-translate-y-2"
                >
                  {/* Certificate Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${certificate.gradient} text-black flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-yellow-400 transition-colors">
                        {certificate.title}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-gray-400">
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
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {certificate.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {certificate.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gradient-to-r from-yellow-400/20 to-amber-600/20 text-yellow-400 rounded-md text-xs font-medium border border-yellow-400/30 transition-all hover:scale-105 hover:border-yellow-400/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Certificate Display */}
                  <div className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-700/50">
                    <iframe
                      src={certificate.file}
                      className="w-full h-96 border-0"
                      title={`${certificate.title} Certificate`}
                    />
                  </div>

                </div>
              );
            })}
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-yellow-400 to-amber-600 text-black rounded-xl p-6 shadow-lg shadow-yellow-500/25 border border-yellow-400/30 hover:scale-105 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <Award className="w-6 h-6" />
                <div className="text-3xl font-bold">{certificates.length}</div>
              </div>
              <div className="text-black/80 font-medium">Total Certificates</div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-600 to-yellow-400 text-black rounded-xl p-6 shadow-lg shadow-amber-500/25 border border-amber-400/30 hover:scale-105 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-6 h-6" />
                <div className="text-3xl font-bold">2026</div>
              </div>
              <div className="text-black/80 font-medium">Latest Achievement</div>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-500 to-amber-500 text-black rounded-xl p-6 shadow-lg shadow-yellow-500/25 border border-yellow-400/30 hover:scale-105 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <FileText className="w-6 h-6" />
                <div className="text-3xl font-bold">100%</div>
              </div>
              <div className="text-black/80 font-medium">Completion Rate</div>
            </div>
          </div>

          {/* Learning Path Section */}
          <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl border border-yellow-400/20 backdrop-blur-sm p-8 hover:border-yellow-400/30 transition-all">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-8 bg-gradient-to-b from-yellow-400 to-amber-600 rounded-full" />
              <span className="bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">
                Continuous Learning Path
              </span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-r from-yellow-400/20 to-amber-600/20 border border-yellow-400/30 flex items-center justify-center">
                  <Code className="w-8 h-8 text-yellow-400" />
                </div>
                <h4 className="font-bold mb-2 text-white">Technical Skills</h4>
                <p className="text-sm text-gray-400">Advanced frameworks and modern development practices</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-r from-amber-600/20 to-yellow-400/20 border border-yellow-400/30 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-yellow-400" />
                </div>
                <h4 className="font-bold mb-2 text-white">Security Focus</h4>
                <p className="text-sm text-gray-400">Web security best practices and vulnerability prevention</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-400/30 flex items-center justify-center">
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