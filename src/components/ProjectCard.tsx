// src/components/ProjectCard.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink, Play, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '@/data/project';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [showImageModal, setShowImageModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openImageModal = (index: number) => {
    setCurrentImageIndex(index);
    setShowImageModal(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'fyp': return 'from-amber-600 to-yellow-400';
      case 'personal': return 'from-yellow-400 to-amber-600';
      case 'game': return 'from-yellow-500 to-amber-500';
      default: return 'from-yellow-400 to-amber-600';
    }
  };
  
  const getCategoryBg = (category: string) => {
    switch(category) {
      case 'fyp': return 'bg-amber-600';
      case 'personal': return 'bg-yellow-400';
      case 'game': return 'bg-yellow-500';
      default: return 'bg-yellow-400';
    }
  };

  const getCategoryText = (category: string) => {
    switch(category) {
      case 'fyp': return 'FYP';
      case 'personal': return 'Personal';
      case 'game': return 'Game';
      default: return category;
    }
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="group"
      >
        <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl overflow-hidden border border-yellow-400/20 backdrop-blur-sm shadow-2xl hover:shadow-yellow-400/20 transition-all duration-300 transform hover:-translate-y-2">
          {/* Image Section */}
          <div className="relative h-48 bg-gray-900 group">
            {project.images.length > 0 ? (
              <>
                <motion.div
                  initial={{ scale: 1.1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="object-cover cursor-pointer rounded-t-xl w-full h-full"
                    onClick={() => openImageModal(0)}
                  />
                </motion.div>
                
                {/* Holographic overlay on hover */}
                <motion.div
                  className="absolute inset-0 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: "conic-gradient(from 0deg, transparent, rgba(250, 204, 21, 0.1), transparent, rgba(251, 191, 36, 0.1), transparent)",
                  }}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                {/* Image Count Badge */}
                {project.images.length > 1 && (
                  <motion.div 
                    className="absolute bottom-2 right-2 bg-black/80 text-yellow-400 px-2 py-1 rounded-full text-xs font-bold border border-yellow-400/50"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    {project.images.length} photos
                  </motion.div>
                )}

                {/* Hover Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 rounded-t-xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.button
                    onClick={() => openImageModal(0)}
                    className="bg-gradient-to-r from-yellow-400 to-amber-600 text-black p-2 rounded-full hover:from-yellow-500 hover:to-amber-700 transition-all shadow-lg hover:shadow-yellow-400/40"
                    title="View screenshots"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </motion.button>
                  {project.videoLink && (
                    <motion.button
                      onClick={() => setShowVideoModal(true)}
                      className="bg-gradient-to-r from-red-600 to-pink-600 text-white p-2 rounded-full hover:from-red-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-red-500/40"
                      title="Watch demo video"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Play size={20} fill="currentColor" />
                    </motion.button>
                  )}
                </motion.div>
              </>
            ) : (
              <motion.div 
                className="w-full h-full rounded-t-xl flex items-center justify-center text-white font-bold"
                style={{ background: `linear-gradient(to right, var(--tw-gradient-stops))` }}
                animate={{
                  background: [
                    `linear-gradient(to right, var(--tw-gradient-stops))`,
                    `linear-gradient(to left, var(--tw-gradient-stops))`
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                {project.title}
              </motion.div>
            )}

            {/* Category Badge */}
            <motion.div 
              className="absolute top-2 left-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <span className={`px-3 py-1 rounded-full text-xs font-bold text-black ${getCategoryBg(project.category)} border-2 border-black shadow-lg`}>
                {getCategoryText(project.category)}
              </span>
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="p-6">
            <motion.h3 
              className="text-xl font-bold mb-2 text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {project.title}
            </motion.h3>
            <motion.p 
              className="text-gray-400 mb-4 text-sm"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {project.description}
            </motion.p>
            
            {/* Technologies */}
            <motion.div 
              className="flex flex-wrap gap-2 mb-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {project.technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  className="px-2 py-1 bg-gradient-to-r from-yellow-400/20 to-amber-600/20 text-yellow-400 rounded-md text-xs font-medium border border-yellow-400/30"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: "rgba(250, 204, 21, 0.5)"
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* Action Links */}
            <motion.div 
              className="flex items-center gap-4 pt-4 border-t border-gray-700"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {project.githubLink && (
                <motion.div
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                    title="View code on GitHub"
                  >
                    <Github size={20} />
                  </Link>
                </motion.div>
              )}
              
              {project.liveLink && (
                <motion.div
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                    title="Live demo"
                  >
                    <ExternalLink size={20} />
                  </Link>
                </motion.div>
              )}
              
              {project.videoLink && project.videoLink.includes('facebook') && (
                <motion.div
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href="https://www.facebook.com/share/r/1LuTsvDubY/"
                    target="_blank"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                    title="Watch video on Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </Link>
                </motion.div>
              )}
              
              {project.videoLink && !project.videoLink.includes('facebook') && (
                <motion.button
                  onClick={() => setShowVideoModal(true)}
                  className="text-gray-400 hover:text-red-400 transition-colors"
                  title="Watch demo video"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Play size={20} />
                </motion.button>
              )}
              
              {project.images.length > 1 && (
                <motion.button
                  onClick={() => openImageModal(0)}
                  className="text-gray-400 hover:text-yellow-400 transition-colors ml-auto"
                  title="View all screenshots"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </motion.button>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Image Modal */}
      <AnimatePresence>
        {showImageModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <motion.button
                onClick={() => setShowImageModal(false)}
                className="absolute top-4 right-4 text-white hover:text-yellow-400 z-10 bg-black/50 p-2 rounded-full border border-yellow-400/30"
                whileHover={{ scale: 1.1, borderColor: "rgba(250, 204, 21, 0.5)" }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} />
              </motion.button>
              
              {project.images.length > 1 && (
                <>
                  <motion.button
                    onClick={prevImage}
                    className="absolute left-4 text-white hover:text-yellow-400 bg-black/50 p-2 rounded-full z-10 border border-yellow-400/30"
                    whileHover={{ scale: 1.1, borderColor: "rgba(250, 204, 21, 0.5)" }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronLeft size={24} />
                  </motion.button>
                  <motion.button
                    onClick={nextImage}
                    className="absolute right-4 text-white hover:text-yellow-400 bg-black/50 p-2 rounded-full z-10 border border-yellow-400/30"
                    whileHover={{ scale: 1.1, borderColor: "rgba(250, 204, 21, 0.5)" }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronRight size={24} />
                  </motion.button>
                </>
              )}

              <motion.div 
                className="relative max-w-[90vw] max-h-[90vh] mx-4 rounded-lg overflow-hidden"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                  width={1200}
                  height={800}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                  style={{ width: 'auto', height: 'auto' }}
                />
              </motion.div>

              {/* Image Counter */}
              {project.images.length > 1 && (
                <motion.div 
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-yellow-400 px-3 py-1 rounded-full text-sm font-bold border border-yellow-400/50"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {currentImageIndex + 1} / {project.images.length}
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideoModal && project.videoLink && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center backdrop-blur-sm p-4"
          >
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <motion.button
                onClick={() => setShowVideoModal(false)}
                className="absolute top-4 right-4 text-white hover:text-yellow-400 z-10 bg-black/50 p-2 rounded-full border border-yellow-400/30"
                whileHover={{ scale: 1.1, borderColor: "rgba(250, 204, 21, 0.5)" }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} />
              </motion.button>
              <motion.div 
                className="relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                {project.videoLink.includes('youtube.com/embed') ? (
                  <iframe
                    src={project.videoLink}
                    className="w-full h-full rounded-lg"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                ) : project.videoLink.includes('facebook.com/plugins') ? (
                  <div className="relative w-full h-full">
                    <iframe
                      src={project.videoLink}
                      className="w-full h-full rounded-lg"
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      scrolling="no"
                      frameBorder="0"
                      allowTransparency
                      onError={(e) => {
                        // If Facebook embed fails, show fallback
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          parent.innerHTML = `
                            <div class="w-full h-full flex flex-col items-center justify-center bg-gray-900 rounded-lg p-8">
                              <p class="text-white text-center mb-4">Video preview not available</p>
                              <a 
                                href="https://www.facebook.com/share/r/1LuTsvDubY/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                class="bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-500 transition-colors font-medium"
                              >
                                Watch Full Video on Facebook
                              </a>
                            </div>
                          `;
                        }
                      }}
                    />
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-900 rounded-lg">
                    <motion.a 
                      href={project.videoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-yellow-400 to-amber-600 text-black px-6 py-3 rounded-lg hover:from-yellow-500 hover:to-amber-700 transition-colors font-bold shadow-lg hover:shadow-yellow-400/40"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Watch Video
                    </motion.a>
                  </div>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}