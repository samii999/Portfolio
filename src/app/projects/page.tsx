// src/app/projects/page.tsx
'use client';

import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/project';

// NO framer-motion imports - completely removed

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'fyp', name: 'Final Year Project' },
    { id: 'personal', name: 'Personal Projects' },
    { id: 'professional', name: 'Professional Work' },
    { id: 'game', name: 'Games' },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section - Static, no floating elements */}
      <section className="relative py-20 overflow-hidden">
        {/* Static background only */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-amber-600/5" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
              My Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A collection of my work in web development, mobile applications, and games
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter - Static buttons, CSS transitions only */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-bold transition-all border-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-yellow-400 to-amber-600 text-black border-yellow-400 shadow-lg shadow-yellow-400/30'
                    : 'bg-gray-800/50 text-yellow-400 border-yellow-400/30 hover:border-yellow-400/60 backdrop-blur-sm'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Projects Grid - No entrance animations, instant render */}
          <div>
            {filteredProjects.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">
                  No projects found in this category.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}