// src/app/projects/page.tsx
'use client';

import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/project';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(12)].map((_, i) => {
        const seed = i * 98765;
        const x = ((seed * 7) % 10000) / 100;
        const y = ((seed * 11) % 10000) / 100;
        
        return (
          <motion.div
            key={`float-${i}`}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-40"
            style={{
              left: `${x}%`,
              top: `${y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.4, 0.7, 0.4],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
          />
        );
      })}
      
      {/* Geometric shapes */}
      {[...Array(4)].map((_, i) => {
        const seed = i * 54321;
        const x = ((seed * 13) % 10000) / 100;
        const y = ((seed * 17) % 10000) / 100;
        
        return (
          <motion.div
            key={`geo-${i}`}
            className="absolute"
            style={{
              left: `${x}%`,
              top: `${y}%`,
            }}
            initial={{ 
              rotate: 0,
              scale: 0,
              opacity: 0
            }}
            animate={{ 
              rotate: [0, 360],
              scale: [0, 1, 0.8, 0],
              opacity: [0, 0.3, 0.2, 0]
            }}
            transition={{ 
              duration: 10 + i * 3,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear"
            }}
          >
            <div 
              className="w-6 h-6 border border-yellow-400/30"
              style={{
                clipPath: i % 2 === 0 ? "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" : "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)"
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -40]);

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
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              My Projects
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto text-center leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            >
              A collection of my work in web development, mobile applications, and games
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <AnimatePresence>
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-bold transition-all border-2 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-yellow-400 to-amber-600 text-black border-yellow-400 shadow-lg shadow-yellow-400/30'
                      : 'bg-gray-800/50 text-yellow-400 border-yellow-400/30 hover:border-yellow-400/60 backdrop-blur-sm'
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: selectedCategory === category.id ? 'rgba(250, 204, 21, 0.6)' : 'rgba(250, 204, 21, 0.5)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {filteredProjects.length > 0 ? (
                <motion.div 
                  key={selectedCategory}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                >
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 50, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <ProjectCard project={project} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  key="no-projects"
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.p 
                    className="text-gray-400 text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    No projects found in this category.
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}