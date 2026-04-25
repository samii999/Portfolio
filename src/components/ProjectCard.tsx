// src/components/ProjectCard.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink, Play, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '@/data/project';

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

  return (
    <>
      <div className="group">
        <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl overflow-hidden border border-yellow-400/20 backdrop-blur-sm shadow-2xl transition-all duration-300 hover:shadow-yellow-400/20 hover:-translate-y-2 h-full flex flex-col">
          
          {/* Image Section */}
          <div className="relative h-48 bg-gray-900 overflow-hidden">
            {project.images.length > 0 ? (
              <>
                <div 
                  className="relative w-full h-full cursor-pointer overflow-hidden"
                  onClick={() => openImageModal(0)}
                >
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    priority={false}
                  />
                </div>
                
                {/* Simple overlay on hover - CSS only */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <button
                    onClick={() => openImageModal(0)}
                    className="bg-gradient-to-r from-yellow-400 to-amber-600 text-black p-2 rounded-full hover:from-yellow-500 hover:to-amber-700 transition-all shadow-lg"
                    title="View screenshots"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </button>
                  {project.videoLink && (
                    <button
                      onClick={() => setShowVideoModal(true)}
                      className="bg-gradient-to-r from-red-600 to-pink-600 text-white p-2 rounded-full hover:from-red-700 hover:to-pink-700 transition-all shadow-lg"
                      title="Watch demo video"
                    >
                      <Play size={20} fill="currentColor" />
                    </button>
                  )}
                </div>

                {/* Image Count Badge */}
                {project.images.length > 1 && (
                  <div className="absolute bottom-2 right-2 bg-black/80 text-yellow-400 px-2 py-1 rounded-full text-xs font-bold border border-yellow-400/50">
                    {project.images.length} photos
                  </div>
                )}
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white font-bold bg-gradient-to-r from-gray-800 to-gray-900">
                {project.title}
              </div>
            )}

            {/* Category Badge */}
            <div className="absolute top-2 left-2">
              <span className={`px-3 py-1 rounded-full text-xs font-bold text-black ${getCategoryBg(project.category)} border-2 border-black shadow-lg`}>
                {getCategoryText(project.category)}
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-yellow-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-4 text-sm line-clamp-2">
              {project.description}
            </p>
            
            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 4).map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gradient-to-r from-yellow-400/20 to-amber-600/20 text-yellow-400 rounded-md text-xs font-medium border border-yellow-400/30 transition-all hover:scale-105 hover:border-yellow-400/50"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded-md text-xs">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>

            {/* Action Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-gray-700 mt-auto">
              {project.githubLink && (
                <Link
                  href={project.githubLink}
                  target="_blank"
                  className="text-gray-400 hover:text-yellow-400 transition-all hover:scale-110 hover:-translate-y-0.5 inline-block"
                  title="View code on GitHub"
                >
                  <Github size={20} />
                </Link>
              )}
              
              {project.liveLink && (
                <Link
                  href={project.liveLink}
                  target="_blank"
                  className="text-gray-400 hover:text-green-400 transition-all hover:scale-110 hover:-translate-y-0.5 inline-block"
                  title="Live demo"
                >
                  <ExternalLink size={20} />
                </Link>
              )}
              
              {project.videoLink && (
                <button
                  onClick={() => setShowVideoModal(true)}
                  className="text-gray-400 hover:text-red-400 transition-all hover:scale-110 hover:-translate-y-0.5"
                  title="Watch demo video"
                >
                  <Play size={20} />
                </button>
              )}
              
              {project.images.length > 1 && (
                <button
                  onClick={() => openImageModal(0)}
                  className="text-gray-400 hover:text-yellow-400 transition-all hover:scale-110 hover:-translate-y-0.5 ml-auto"
                  title="View all screenshots"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal - Simplified, no framer-motion */}
      {showImageModal && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowImageModal(false);
          }}
        >
          <button
            onClick={() => setShowImageModal(false)}
            className="absolute top-4 right-4 text-white hover:text-yellow-400 z-10 bg-black/50 p-2 rounded-full border border-yellow-400/30 transition-all hover:scale-110"
          >
            <X size={24} />
          </button>
          
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 text-white hover:text-yellow-400 bg-black/50 p-2 rounded-full z-10 border border-yellow-400/30 transition-all hover:scale-110"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 text-white hover:text-yellow-400 bg-black/50 p-2 rounded-full z-10 border border-yellow-400/30 transition-all hover:scale-110"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          <div className="relative max-w-[90vw] max-h-[90vh] mx-4 rounded-lg overflow-hidden">
            <Image
              src={project.images[currentImageIndex]}
              alt={`${project.title} screenshot ${currentImageIndex + 1}`}
              width={1200}
              height={800}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>

          {/* Image Counter */}
          {project.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-yellow-400 px-3 py-1 rounded-full text-sm font-bold border border-yellow-400/50">
              {currentImageIndex + 1} / {project.images.length}
            </div>
          )}
        </div>
      )}

      {/* Video Modal - Simplified */}
      {showVideoModal && project.videoLink && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowVideoModal(false);
          }}
        >
          <button
            onClick={() => setShowVideoModal(false)}
            className="absolute top-4 right-4 text-white hover:text-yellow-400 z-10 bg-black/50 p-2 rounded-full border border-yellow-400/30 transition-all hover:scale-110"
          >
            <X size={24} />
          </button>
          
          <div className="relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden">
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
                  onError={(e) => {
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
                <a 
                  href={project.videoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-yellow-400 to-amber-600 text-black px-6 py-3 rounded-lg hover:from-yellow-500 hover:to-amber-700 transition-colors font-bold shadow-lg"
                >
                  Watch Video
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}