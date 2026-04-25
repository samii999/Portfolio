"use client";

import { useState } from 'react';
import { 
  Download, 
  FileText, 
  Calendar, 
  Briefcase, 
  GraduationCap,
  Award,
  Printer,
  ExternalLink
} from 'lucide-react';

// NO framer-motion imports - completely removed

export default function ResumePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Muhammad usman cv.pdf';
    link.download = 'Muhammad_Usman_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  // Resume highlights
  const highlights = [
    {
      icon: Briefcase,
      title: "Experience",
      items: ["Web Development", "Mobile App Development", "UI/UX Design"],
      gradient: "from-yellow-400 to-amber-600"
    },
    {
      icon: GraduationCap,
      title: "Education",
      items: ["BSCS Graduate", "Web Development Certification", "Mobile Dev Course"],
      gradient: "from-amber-600 to-yellow-400"
    },
    {
      icon: Award,
      title: "Achievements",
      items: ["Final Year Project (Fixora)", "40+ Happy Clients", "3+ Years Experience"],
      gradient: "from-yellow-500 to-amber-500"
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
            My Qualifications
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            CV &{' '}
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
              Credentials
            </span>
          </h1>
          
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Download my CV to learn more about my experience, skills, and qualifications.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Quick Highlights - Static */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl border border-yellow-400/20 backdrop-blur-sm p-6 hover:border-yellow-400/30 transition-all hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${highlight.gradient} text-black flex items-center justify-center transition-all group-hover:scale-110`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">
                      {highlight.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {highlight.items.map((item, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-yellow-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Action Buttons - Static */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button
              onClick={handleDownload}
              className="bg-gradient-to-r from-yellow-400 to-amber-600 text-black px-6 py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-amber-700 transition-all inline-flex items-center gap-2 shadow-lg hover:shadow-yellow-500/25 border border-yellow-400/20"
            >
              <Download className="w-4 h-4" />
              Download CV
            </button>

            <button
              onClick={handlePrint}
              className="border-2 border-yellow-400 text-yellow-400 px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 hover:text-black transition-all inline-flex items-center gap-2 backdrop-blur-sm"
            >
              <Printer className="w-4 h-4" />
              Print
            </button>
          </div>

          {/* Resume Viewer */}
          <div className="relative bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl shadow-2xl overflow-hidden border border-yellow-400/20 backdrop-blur-sm">
            {/* Viewer Header */}
            <div className="bg-gradient-to-r from-yellow-400/10 to-amber-600/10 p-4 border-b border-gray-700/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-yellow-400/20 to-amber-600/20 text-yellow-400 flex items-center justify-center border border-yellow-400/30">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-bold text-white">
                      Muhammad Usman - CV
                    </h2>
                    <p className="text-xs text-gray-400">
                      Last updated: {new Date().toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="/Muhammad usman cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-yellow-400/10 rounded-lg transition-colors border border-transparent hover:border-yellow-400/30"
                    aria-label="Open in new tab"
                  >
                    <ExternalLink className="w-4 h-4 text-yellow-400" />
                  </a>
                </div>
              </div>
            </div>

            {/* PDF Embed - Simple, no loading animation */}
            <div className="relative bg-gray-900/50">
              <iframe
                src="/Muhammad usman cv.pdf#toolbar=0&navpanes=0"
                className="w-full border-0"
                style={{ 
                  height: 'min(800px, 80vh)',
                }}
                title="Muhammad Usman CV"
                onLoad={() => setIsLoaded(true)}
              />
            </div>

            {/* Viewer Footer */}
            <div className="p-3 border-t border-gray-700/50 bg-gray-800/30 flex items-center justify-between text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-3 h-3 text-yellow-400" />
                <span>2024 Edition</span>
              </div>
              <div className="flex items-center gap-4">
                <span>Page 1 of 1</span>
                <button
                  onClick={handleDownload}
                  className="hover:text-yellow-400 transition-colors flex items-center gap-1 border border-transparent hover:border-yellow-400/30 px-2 py-1 rounded hover:bg-yellow-400/10"
                >
                  <Download className="w-3 h-3" />
                  Download CV PDF
                </button>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl border border-yellow-400/20 backdrop-blur-sm p-8 inline-block mx-auto hover:border-yellow-400/30 transition-all">
              <p className="text-gray-300 mb-4">
                Can't view CV? Download it directly:
              </p>
              <a
                href="/Muhammad usman cv.pdf"
                download
                className="inline-flex items-center gap-2 text-yellow-400 font-bold hover:text-yellow-300 transition-colors border border-yellow-400/30 px-4 py-2 rounded-lg hover:bg-yellow-400/10"
              >
                <Download className="w-4 h-4" />
                Download CV PDF
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}