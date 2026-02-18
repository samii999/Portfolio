"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
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
  Printer
} from 'lucide-react';

export default function ResumePage() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

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
      items: ["Web Development", "Mobile App Development", "UI/UX Design"]
    },
    {
      icon: GraduationCap,
      title: "Education",
      items: ["BSCS Graduate", "Web Development Certification", "Mobile Dev Course"]
    },
    {
      icon: Award,
      title: "Achievements",
      items: ["Final Year Project (Fixora)", "40+ Happy Clients", "3+ Years Experience"]
    }
  ];

  return (
    <main className="min-h-screen pt-20 md:pt-24 pb-16">
      {/* Background decoration */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container">
        {/* Header Section */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="mb-8 md:mb-12 text-center"
        >
          <motion.span 
            variants={fadeInUp}
            className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4"
          >
            My Qualifications
          </motion.span>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Resume & <span className="text-accent">Credentials</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-text-secondary max-w-2xl mx-auto text-lg"
          >
            Download my resume to learn more about my experience, skills, and qualifications.
          </motion.p>
        </motion.div>

        {/* Quick Highlights */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
        >
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="card p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-lg">{highlight.title}</h3>
                </div>
                <ul className="space-y-2">
                  {highlight.items.map((item, idx) => (
                    <li key={idx} className="text-text-secondary text-sm flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="flex flex-wrap gap-3 justify-center mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className="btn btn-primary inline-flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrint}
            className="btn btn-outline inline-flex items-center gap-2"
          >
            <Printer className="w-4 h-4" />
            Print
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleFullscreen}
            className="btn btn-outline inline-flex items-center gap-2"
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
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className={`relative ${isFullscreen ? 'fixed inset-0 z-50 p-4 bg-black/90 backdrop-blur-sm' : ''}`}
        >
          <div className={`bg-surface rounded-2xl shadow-2xl overflow-hidden border border-border ${isFullscreen ? 'h-full' : ''}`}>
            {/* Viewer Header */}
            <div className="bg-gradient-to-r from-accent/20 to-transparent p-4 border-b border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="font-semibold">
                      Muhammad Usman - Resume
                    </h2>
                    <p className="text-xs text-text-secondary">
                      Last updated: {new Date().toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    aria-label="Open in new tab"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  {isFullscreen && (
                    <button
                      onClick={toggleFullscreen}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                      aria-label="Exit fullscreen"
                    >
                      <Minimize2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* PDF Embed with Loading State */}
            <div className="relative bg-gray-50 dark:bg-gray-900">
              {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-900">
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-accent/30 border-t-accent rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-text-secondary">Loading resume...</p>
                  </div>
                </div>
              )}

              <iframe
                src="/resume.pdf#toolbar=0&navpanes=0"
                className={`w-full border-0 transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                style={{ 
                  height: isFullscreen ? 'calc(100vh - 120px)' : 'min(800px, 80vh)',
                }}
                title="Muhammad Usman Resume"
                onLoad={() => setIsLoaded(true)}
              />
            </div>

            {/* Viewer Footer */}
            <div className="p-3 border-t border-border bg-surface/50 flex items-center justify-between text-xs text-text-secondary">
              <div className="flex items-center gap-2">
                <Calendar className="w-3 h-3" />
                <span>2024 Edition</span>
              </div>
              <div className="flex items-center gap-4">
                <span>Page 1 of 1</span>
                <button
                  onClick={handleDownload}
                  className="hover:text-accent transition-colors flex items-center gap-1"
                >
                  <Download className="w-3 h-3" />
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="card p-6 inline-block mx-auto">
            <p className="text-text-secondary mb-3">
              Can't view the resume? Download it directly:
            </p>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
            >
              <Download className="w-4 h-4" />
              Download Resume PDF
            </motion.a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}