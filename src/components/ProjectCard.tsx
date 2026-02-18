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

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'fyp': return 'bg-purple-600';
      case 'personal': return 'bg-green-600';
      case 'game': return 'bg-orange-600';
      default: return 'bg-blue-600';
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
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        {/* Image Section */}
        <div className="relative h-48 bg-gray-200 group">
          {project.images.length > 0 ? (
            <>
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                className="object-cover cursor-pointer"
                onClick={() => openImageModal(0)}
              />
              
              {/* Image Count Badge */}
              {project.images.length > 1 && (
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-xs">
                  {project.images.length} photos
                </div>
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                <button
                  onClick={() => openImageModal(0)}
                  className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors"
                  title="View screenshots"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </button>
                {project.videoLink && (
                  <button
                    onClick={() => setShowVideoModal(true)}
                    className="bg-white text-red-600 p-2 rounded-full hover:bg-gray-100 transition-colors"
                    title="Watch demo video"
                  >
                    <Play size={20} fill="currentColor" />
                  </button>
                )}
              </div>
            </>
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
              {project.title}
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute top-2 left-2">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor(project.category)}`}>
              {getCategoryText(project.category)}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
            {project.githubLink && (
              <Link
                href={project.githubLink}
                target="_blank"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                title="View code on GitHub"
              >
                <Github size={20} />
              </Link>
            )}
            
            {project.liveLink && (
              <Link
                href={project.liveLink}
                target="_blank"
                className="text-gray-600 hover:text-green-600 transition-colors"
                title="Live demo"
              >
                <ExternalLink size={20} />
              </Link>
            )}
            
            {project.videoLink && project.videoLink.includes('facebook') && (
              <Link
                href="https://www.facebook.com/share/r/1LuTsvDubY/"
                target="_blank"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                title="Watch video on Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Link>
            )}
            
            {project.videoLink && !project.videoLink.includes('facebook') && (
              <button
                onClick={() => setShowVideoModal(true)}
                className="text-gray-600 hover:text-red-600 transition-colors"
                title="Watch demo video"
              >
                <Play size={20} />
              </button>
            )}
            
            {project.images.length > 1 && (
              <button
                onClick={() => openImageModal(0)}
                className="text-gray-600 hover:text-blue-600 transition-colors ml-auto"
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

      {/* Image Modal */}
      {showImageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button
            onClick={() => setShowImageModal(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 p-2 rounded-full"
          >
            <X size={24} />
          </button>
          
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 text-white hover:text-gray-300 bg-black bg-opacity-50 p-2 rounded-full z-10"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 text-white hover:text-gray-300 bg-black bg-opacity-50 p-2 rounded-full z-10"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          <div className="relative w-full max-w-5xl max-h-[90vh] mx-4 aspect-video">
            <div className="absolute top-0 left-0 w-full h-full">
              <Image
                src={project.images[currentImageIndex]}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Image Counter */}
          {project.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
              {currentImageIndex + 1} / {project.images.length}
            </div>
          )}
        </div>
      )}

      {/* Video Modal */}
      {showVideoModal && project.videoLink && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setShowVideoModal(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 p-2 rounded-full"
          >
            <X size={24} />
          </button>
          <div className="relative w-full max-w-4xl aspect-video">
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
                            class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
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
                  className="text-white bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
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