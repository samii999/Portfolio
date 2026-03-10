// src/app/skills/page.tsx
'use client';

import { useState } from 'react';
import { skills, skillCategories, getSkillsByCategory } from '@/data/skills';
import SkillBadge from '@/components/SkillBadge';
import { Code, Server, Smartphone, Wrench, Award, BookOpen, Sparkles, Zap } from 'lucide-react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';

function AnimatedCounter({ target, duration = 600 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}+</span>;
}

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
              y: [0, -15, 0],
              opacity: [0.25, 0.4, 0.25],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 1.8 + i * 0.2,
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

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [showLevels, setShowLevels] = useState(false);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  const getGoldGradient = () => {
    return 'from-yellow-400 via-yellow-500 to-amber-600';
  };

  const getCategoryIcon = (categoryId: string) => {
    switch(categoryId) {
      case 'frontend': return <Code className="w-6 h-6" />;
      case 'backend': return <Server className="w-6 h-6" />;
      case 'mobile': return <Smartphone className="w-6 h-6" />;
      case 'other': return <Wrench className="w-6 h-6" />;
      default: return null;
    }
  };

  const getActiveCategoryClasses = () => {
    return 'bg-gradient-to-r from-yellow-400 to-amber-600 text-black shadow-lg shadow-yellow-500/25 scale-105 border border-yellow-400/30';
  };

  const getInactiveCategoryClasses = () => {
    return 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/30 hover:border-yellow-400/30 backdrop-blur-sm';
  };

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

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
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Technical Skills
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            Technologies and tools I work with to build amazing applications
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Category Tabs */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.button
              onClick={() => setActiveCategory('all')}
              className={`
                px-6 py-3 rounded-lg font-medium transition-all
                flex items-center gap-2 border
                ${activeCategory === 'all' 
                  ? getActiveCategoryClasses() 
                  : getInactiveCategoryClasses()
                }
              `}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{
                  rotate: activeCategory === 'all' ? [0, 360] : 0,
                }}
                transition={{
                  duration: 2,
                  repeat: activeCategory === 'all' ? Infinity : 0,
                  ease: "linear"
                }}
              >
                <Award size={20} />
              </motion.div>
              All Skills
            </motion.button>
            {skillCategories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  px-6 py-3 rounded-lg font-medium transition-all
                  flex items-center gap-2 border
                  ${activeCategory === category.id 
                    ? getActiveCategoryClasses() 
                    : getInactiveCategoryClasses()
                  }
                `}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{
                    rotate: activeCategory === category.id ? [0, 360] : 0,
                  }}
                  transition={{
                    duration: 2,
                    repeat: activeCategory === category.id ? Infinity : 0,
                    ease: "linear"
                  }}
                >
                  {getCategoryIcon(category.id)}
                </motion.div>
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* View Toggle */}
          <motion.div 
            className="flex justify-end mb-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.label 
              className="flex items-center gap-2 cursor-pointer bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-600/30 backdrop-blur-sm"
              whileHover={{ borderColor: "rgba(250, 204, 21, 0.3)" }}
            >
              <span className="text-sm text-gray-300">Show Levels</span>
              <div className="relative">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={showLevels}
                  onChange={() => setShowLevels(!showLevels)}
                />
                <motion.div 
                  className={`block w-10 h-6 rounded-full transition-colors ${showLevels ? 'bg-gradient-to-r from-yellow-400 to-amber-600' : 'bg-gray-600'}`}
                  animate={{
                    boxShadow: showLevels ? '0 0 10px rgba(250, 204, 21, 0.5)' : 'none'
                  }}
                />
                <motion.div 
                  className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform"
                  animate={{ x: showLevels ? 16 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </div>
            </motion.label>
          </motion.div>

          {/* Skills Grid by Category */}
          {activeCategory === 'all' ? (
            // Show all categories
            <motion.div 
              className="space-y-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              {skillCategories.map((category, categoryIndex) => {
                const categorySkills = getSkillsByCategory(category.id);
                return (
                  <motion.div 
                    key={category.id} 
                    className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl border border-yellow-400/20 backdrop-blur-sm p-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                    whileHover={{ borderColor: "rgba(250, 204, 21, 0.3)" }}
                  >
                    <motion.div 
                      className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-700"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: categoryIndex * 0.2 + 0.2 }}
                    >
                      <motion.div 
                        className="p-3 rounded-lg bg-gradient-to-r from-yellow-400/20 to-amber-600/20 border border-yellow-400/30"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5,
                          borderColor: "rgba(250, 204, 21, 0.5)"
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {getCategoryIcon(category.id)}
                      </motion.div>
                      <div>
                        <motion.h2 
                          className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.6, delay: categoryIndex * 0.2 + 0.3 }}
                        >
                          {category.name}
                        </motion.h2>
                        <p className="text-gray-400 text-sm">{categorySkills.length} technologies</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex flex-wrap gap-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: categoryIndex * 0.2 + 0.4 }}
                    >
                      {categorySkills.map((skill, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: categoryIndex * 0.2 + 0.5 + index * 0.05 }}
                        >
                          <SkillBadge 
                            skill={skill} 
                            showLevel={showLevels}
                            size="lg"
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            // Show single category
            <motion.div 
              className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl border border-yellow-400/20 backdrop-blur-sm p-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              whileHover={{ borderColor: "rgba(250, 204, 21, 0.3)" }}
            >
              {skillCategories.filter(c => c.id === activeCategory).map((category) => (
                <motion.div 
                  key={category.id} 
                  className="mb-6 pb-4 border-b border-gray-700"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className="p-3 rounded-lg bg-gradient-to-r from-yellow-400/20 to-amber-600/20 border border-yellow-400/30"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        borderColor: "rgba(250, 204, 21, 0.5)"
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {getCategoryIcon(category.id)}
                    </motion.div>
                    <div>
                      <motion.h2 
                        className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        {category.name}
                      </motion.h2>
                      <p className="text-gray-400">{filteredSkills.length} technologies</p>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              <motion.div 
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {filteredSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                  >
                    <SkillBadge 
                      skill={skill} 
                      showLevel={showLevels}
                      size="lg"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* Skill Summary Section */}
          <motion.section 
            className="mt-20 grid md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="bg-gradient-to-br from-yellow-400 to-amber-600 text-black rounded-xl p-6 shadow-lg shadow-yellow-500/25 border border-yellow-400/30"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 10px 30px rgba(250, 204, 21, 0.4)'
              }}
            >
              <div className="flex items-center gap-3 mb-2">
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
                  <Sparkles className="w-6 h-6" />
                </motion.div>
                <div className="text-3xl font-bold">
                  <AnimatedCounter target={skills.length} />
                </div>
              </div>
              <div className="text-black/80 font-medium">Total Skills</div>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-amber-600 to-yellow-400 text-black rounded-xl p-6 shadow-lg shadow-amber-500/25 border border-amber-400/30"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 10px 30px rgba(251, 191, 36, 0.4)'
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Zap className="w-6 h-6" />
                </motion.div>
                <div className="text-3xl font-bold">
                  <AnimatedCounter target={skills.filter(s => s.level && s.level >= 4).length} />
                </div>
              </div>
              <div className="text-black/80 font-medium">Advanced Skills</div>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-yellow-500 to-amber-500 text-black rounded-xl p-6 shadow-lg shadow-yellow-500/25 border border-yellow-400/30"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 10px 30px rgba(250, 204, 21, 0.4)'
              }}
            >
              <div className="flex items-center gap-3 mb-2">
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
                  <Award className="w-6 h-6" />
                </motion.div>
                <div className="text-3xl font-bold">{skillCategories.length}</div>
              </div>
              <div className="text-black/80 font-medium">Categories</div>
            </motion.div>
          </motion.section>

          {/* Learning Section */}
          <motion.section 
            className="mt-20 bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl border border-yellow-400/20 backdrop-blur-sm p-8 shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ borderColor: "rgba(250, 204, 21, 0.3)" }}
          >
            <motion.div 
              className="flex items-center gap-4 mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div 
                className="p-3 bg-gradient-to-r from-yellow-400 to-amber-600 rounded-lg text-black"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 10
                }}
                transition={{ duration: 0.2 }}
              >
                <BookOpen size={24} />
              </motion.div>
              <motion.h2 
                className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Currently Learning
              </motion.h2>
            </motion.div>
            
            <motion.div 
              className="grid md:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                {
                  title: "Advanced Machine Learning",
                  description: "Deepening AI/ML knowledge",
                  icon: "🤖",
                  delay: 0.5
                },
                {
                  title: "Cloud Computing",
                  description: "AWS and cloud architecture",
                  icon: "☁️",
                  delay: 0.6
                },
                {
                  title: "System Design",
                  description: "Scalable architecture patterns",
                  icon: "🏗️",
                  delay: 0.7
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50 hover:border-yellow-400/30 transition-all"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: item.delay }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    borderColor: "rgba(250, 204, 21, 0.4)"
                  }}
                >
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <div className="font-bold mb-2 text-white">{item.title}</div>
                  <div className="text-sm text-gray-400">{item.description}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        </div>
      </section>
    </div>
  );
}