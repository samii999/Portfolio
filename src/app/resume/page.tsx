"use client";

import { useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { 
  Download, 
  Eye, 
  FileText, 
  Calendar, 
  Briefcase, 
  GraduationCap,
  Award,
  ChevronDown,
  Maximize2,
  Minimize2,
  ExternalLink,
  Printer,
  Sparkles,
  Zap
} from 'lucide-react';

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
              scale: [1, 1.1, 1],
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

export default function ResumePage() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Muhammad_Usman_Resume.pdf';
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
          <motion.span 
            className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-400/20 to-amber-600/20 text-yellow-400 rounded-full text-sm font-medium mb-4 border border-yellow-400/30 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            My Qualifications
          </motion.span>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Resume &{' '}
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
              Credentials
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            Download my resume to learn more about my experience, skills, and qualifications.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Quick Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl border border-yellow-400/20 backdrop-blur-sm p-6 hover:border-yellow-400/30 transition-all"
                  whileHover={{ 
                    scale: 1.02,
                    y: -2,
                    borderColor: "rgba(250, 204, 21, 0.4)"
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div 
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${highlight.gradient} text-black flex items-center justify-center`}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>
                    <h3 className="font-bold text-lg bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">
                      {highlight.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {highlight.items.map((item, idx) => (
                      <motion.li 
                        key={idx} 
                        className="text-gray-300 text-sm flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.05 }}
                      >
                        <motion.div 
                          className="w-2 h-2 rounded-full bg-yellow-400"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: idx * 0.2,
                            ease: "easeInOut"
                          }}
                        />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, rotate: 1 }} 
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
              className="bg-gradient-to-r from-yellow-400 to-amber-600 text-black px-6 py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-amber-700 transition-all inline-flex items-center gap-2 shadow-lg hover:shadow-yellow-500/25 border border-yellow-400/20"
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Download className="w-4 h-4" />
              </motion.div>
              Download Resume
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, rotate: -1 }} 
              whileTap={{ scale: 0.95 }}
              onClick={handlePrint}
              className="border-2 border-yellow-400 text-yellow-400 px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 hover:text-black transition-all inline-flex items-center gap-2 backdrop-blur-sm"
            >
              <Printer className="w-4 h-4" />
              Print
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, rotate: 1 }} 
              whileTap={{ scale: 0.95 }}
              onClick={toggleFullscreen}
              className="border-2 border-amber-500 text-amber-500 px-6 py-3 rounded-lg font-bold hover:bg-amber-500 hover:text-black transition-all inline-flex items-center gap-2 backdrop-blur-sm"
            >
              {isFullscreen ? (
                <>
                  <Minimize2 className="w-4 h-4" />
                  Exit Fullscreen
                </>
              ) : (
                <>
                  <Maximize2 className="w-4 h-4" />
                  Fullscreen
                </>
              )}
            </motion.button>
          </motion.div>

          {/* Resume Viewer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={`relative ${isFullscreen ? 'fixed inset-0 z-50 p-4 bg-black/95 backdrop-blur-sm' : ''}`}
          >
            <div className={`bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl shadow-2xl overflow-hidden border border-yellow-400/20 backdrop-blur-sm ${isFullscreen ? 'h-full' : ''}`}>
              {/* Viewer Header */}
              <div className="bg-gradient-to-r from-yellow-400/10 to-amber-600/10 p-4 border-b border-gray-700/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className="w-10 h-10 rounded-lg bg-gradient-to-r from-yellow-400/20 to-amber-600/20 text-yellow-400 flex items-center justify-center border border-yellow-400/30"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <FileText className="w-5 h-5" />
                    </motion.div>
                    <div>
                      <motion.h2 
                        className="font-bold text-white"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        Muhammad Usman - Resume
                      </motion.h2>
                      <p className="text-xs text-gray-400">
                        Last updated: {new Date().toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <motion.a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-yellow-400/10 rounded-lg transition-colors border border-transparent hover:border-yellow-400/30"
                      aria-label="Open in new tab"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-4 h-4 text-yellow-400" />
                    </motion.a>
                    {isFullscreen && (
                      <motion.button
                        onClick={toggleFullscreen}
                        className="p-2 hover:bg-yellow-400/10 rounded-lg transition-colors border border-transparent hover:border-yellow-400/30"
                        aria-label="Exit fullscreen"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Minimize2 className="w-4 h-4 text-yellow-400" />
                      </motion.button>
                    )}
                  </div>
                </div>
              </div>

              {/* PDF Embed with Loading State */}
              <div className="relative bg-gray-900/50">
                {!isLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50">
                    <div className="text-center">
                      <motion.div 
                        className="w-16 h-16 border-4 border-yellow-400/30 border-t-yellow-400 rounded-full mx-auto mb-4"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <p className="text-gray-300">Loading resume...</p>
                    </div>
                  </div>
                )}

                <motion.iframe
                  src="/resume.pdf#toolbar=0&navpanes=0"
                  className={`w-full border-0 transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                  style={{ 
                    height: isFullscreen ? 'calc(100vh - 120px)' : 'min(800px, 80vh)',
                  }}
                  title="Muhammad Usman Resume"
                  onLoad={() => setIsLoaded(true)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isLoaded ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* Viewer Footer */}
              <div className="p-3 border-t border-gray-700/50 bg-gray-800/30 flex items-center justify-between text-xs text-gray-400">
                <div className="flex items-center gap-2">
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
                    <Calendar className="w-3 h-3 text-yellow-400" />
                  </motion.div>
                  <span>2024 Edition</span>
                </div>
                <div className="flex items-center gap-4">
                  <span>Page 1 of 1</span>
                  <motion.button
                    onClick={handleDownload}
                    className="hover:text-yellow-400 transition-colors flex items-center gap-1 border border-transparent hover:border-yellow-400/30 px-2 py-1 rounded hover:bg-yellow-400/10"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download className="w-3 h-3" />
                    Download PDF
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl border border-yellow-400/20 backdrop-blur-sm p-8 inline-block mx-auto hover:border-yellow-400/30 transition-all">
              <motion.p 
                className="text-gray-300 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Can't view the resume? Download it directly:
              </motion.p>
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 text-yellow-400 font-bold hover:text-yellow-300 transition-colors border border-yellow-400/30 px-4 py-2 rounded-lg hover:bg-yellow-400/10"
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <Download className="w-4 h-4" />
                </motion.div>
                Download Resume PDF
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}