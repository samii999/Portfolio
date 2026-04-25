// src/app/skills/page.tsx
'use client';

import { useState } from 'react';
import { skills, skillCategories, getSkillsByCategory } from '@/data/skills';
import SkillBadge from '@/components/SkillBadge';
import { Code, Server, Smartphone, Wrench, Award, BookOpen } from 'lucide-react';

// NO framer-motion imports - completely removed

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [showLevels, setShowLevels] = useState(false);

  const getCategoryIcon = (categoryId: string) => {
    switch(categoryId) {
      case 'frontend': return <Code className="w-6 h-6" />;
      case 'backend': return <Server className="w-6 h-6" />;
      case 'mobile': return <Smartphone className="w-6 h-6" />;
      case 'other': return <Wrench className="w-6 h-6" />;
      default: return null;
    }
  };

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  // Static summary data
  const summaryCards = [
    {
      icon: Award,
      value: skills.length,
      label: "Total Skills",
      gradient: "from-yellow-400 to-amber-600"
    },
    {
      icon: Code,
      value: skills.filter(s => s.level && s.level >= 4).length,
      label: "Advanced Skills",
      gradient: "from-amber-600 to-yellow-400"
    },
    {
      icon: BookOpen,
      value: skillCategories.length,
      label: "Categories",
      gradient: "from-yellow-500 to-amber-500"
    }
  ];

  const learningItems = [
    {
      title: "Advanced Machine Learning",
      description: "Deepening AI/ML knowledge",
      icon: "🤖"
    },
    {
      title: "Cloud Computing",
      description: "AWS and cloud architecture",
      icon: "☁️"
    },
    {
      title: "System Design",
      description: "Scalable architecture patterns",
      icon: "🏗️"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section - Static */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-amber-600/5" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
            Technical Skills
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Technologies and tools I work with to build amazing applications
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Category Tabs - Static buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 border
                ${activeCategory === 'all' 
                  ? 'bg-gradient-to-r from-yellow-400 to-amber-600 text-black shadow-lg shadow-yellow-500/25 scale-105 border border-yellow-400/30' 
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/30 hover:border-yellow-400/30 backdrop-blur-sm'
                }`}
            >
              <Award size={20} />
              All Skills
            </button>
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 border
                  ${activeCategory === category.id 
                    ? 'bg-gradient-to-r from-yellow-400 to-amber-600 text-black shadow-lg shadow-yellow-500/25 scale-105 border border-yellow-400/30' 
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/30 hover:border-yellow-400/30 backdrop-blur-sm'
                  }`}
              >
                {getCategoryIcon(category.id)}
                {category.name}
              </button>
            ))}
          </div>

          {/* View Toggle - Simple checkbox */}
          <div className="flex justify-end mb-8">
            <label className="flex items-center gap-2 cursor-pointer bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-600/30 backdrop-blur-sm hover:border-yellow-400/30 transition-all">
              <span className="text-sm text-gray-300">Show Levels</span>
              <div className="relative">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={showLevels}
                  onChange={() => setShowLevels(!showLevels)}
                />
                <div className={`block w-10 h-6 rounded-full transition-colors ${showLevels ? 'bg-gradient-to-r from-yellow-400 to-amber-600' : 'bg-gray-600'}`} />
                <div 
                  className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200`}
                  style={{ transform: showLevels ? 'translateX(16px)' : 'translateX(0)' }}
                />
              </div>
            </label>
          </div>

          {/* Skills Grid by Category */}
          {activeCategory === 'all' ? (
            <div className="space-y-12">
              {skillCategories.map((category) => {
                const categorySkills = getSkillsByCategory(category.id);
                return (
                  <div 
                    key={category.id} 
                    className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl border border-yellow-400/20 backdrop-blur-sm p-8 hover:border-yellow-400/30 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-700">
                      <div className="p-3 rounded-lg bg-gradient-to-r from-yellow-400/20 to-amber-600/20 border border-yellow-400/30">
                        {getCategoryIcon(category.id)}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">
                          {category.name}
                        </h2>
                        <p className="text-gray-400 text-sm">{categorySkills.length} technologies</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      {categorySkills.map((skill, index) => (
                        <SkillBadge 
                          key={index}
                          skill={skill} 
                          showLevel={showLevels}
                          size="lg"
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl border border-yellow-400/20 backdrop-blur-sm p-8 hover:border-yellow-400/30 transition-all">
              {skillCategories.filter(c => c.id === activeCategory).map((category) => (
                <div key={category.id} className="mb-6 pb-4 border-b border-gray-700">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-yellow-400/20 to-amber-600/20 border border-yellow-400/30">
                      {getCategoryIcon(category.id)}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">
                        {category.name}
                      </h2>
                      <p className="text-gray-400">{filteredSkills.length} technologies</p>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="flex flex-wrap gap-3">
                {filteredSkills.map((skill, index) => (
                  <SkillBadge 
                    key={index}
                    skill={skill} 
                    showLevel={showLevels}
                    size="lg"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Skill Summary Section - Static numbers */}
          <section className="mt-20 grid md:grid-cols-3 gap-6">
            {summaryCards.map((card, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${card.gradient} text-black rounded-xl p-6 shadow-lg shadow-yellow-500/25 border border-yellow-400/30 hover:scale-105 transition-all hover:shadow-yellow-400/40`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <card.icon className="w-6 h-6" />
                  <div className="text-3xl font-bold">{card.value}+</div>
                </div>
                <div className="text-black/80 font-medium">{card.label}</div>
              </div>
            ))}
          </section>

          {/* Learning Section - Static */}
          <section className="mt-20 bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl border border-yellow-400/20 backdrop-blur-sm p-8 shadow-xl hover:border-yellow-400/30 transition-all">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gradient-to-r from-yellow-400 to-amber-600 rounded-lg text-black">
                <BookOpen size={24} />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">
                Currently Learning
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {learningItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50 hover:border-yellow-400/30 transition-all hover:scale-105 hover:-translate-y-1"
                >
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <div className="font-bold mb-2 text-white">{item.title}</div>
                  <div className="text-sm text-gray-400">{item.description}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}