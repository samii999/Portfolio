// src/app/skills/page.tsx
'use client';

import { useState } from 'react';
import { skills, skillCategories, getSkillsByCategory } from '@/data/skills';
import SkillBadge from '@/components/SkillBadge';
import { Code, Server, Smartphone, Wrench, Award, BookOpen } from 'lucide-react';

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

  const getCategoryGradient = (color: string) => {
    switch(color) {
      case 'blue': return 'from-blue-500 to-blue-600';
      case 'green': return 'from-green-500 to-green-600';
      case 'purple': return 'from-purple-500 to-purple-600';
      case 'orange': return 'from-orange-500 to-orange-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getCategoryColorClasses = (color: string) => {
    switch(color) {
      case 'blue': return 'bg-blue-600 text-white shadow-lg scale-105';
      case 'green': return 'bg-green-600 text-white shadow-lg scale-105';
      case 'purple': return 'bg-purple-600 text-white shadow-lg scale-105';
      case 'orange': return 'bg-orange-600 text-white shadow-lg scale-105';
      default: return 'bg-gray-600 text-white shadow-lg scale-105';
    }
  };

  const getCategoryBgColor = (color: string) => {
    switch(color) {
      case 'blue': return 'bg-blue-100';
      case 'green': return 'bg-green-100';
      case 'purple': return 'bg-purple-100';
      case 'orange': return 'bg-orange-100';
      default: return 'bg-gray-100';
    }
  };

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technologies and tools I work with to build amazing applications
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveCategory('all')}
            className={`
              px-6 py-3 rounded-lg font-medium transition-all
              flex items-center gap-2
              ${activeCategory === 'all' 
                ? 'bg-gray-900 text-white shadow-lg scale-105' 
                : 'bg-white text-gray-600 hover:bg-gray-100'
              }
            `}
          >
            <Award size={20} />
            All Skills
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`
                px-6 py-3 rounded-lg font-medium transition-all
                flex items-center gap-2
                ${activeCategory === category.id 
                  ? getCategoryColorClasses(category.color) 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
                }
              `}
            >
              {getCategoryIcon(category.id)}
              {category.name}
            </button>
          ))}
        </div>

        {/* View Toggle */}
        <div className="flex justify-end mb-8">
          <label className="flex items-center gap-2 cursor-pointer">
            <span className="text-sm text-gray-600">Show Levels</span>
            <div className="relative">
              <input
                type="checkbox"
                className="sr-only"
                checked={showLevels}
                onChange={() => setShowLevels(!showLevels)}
              />
              <div className={`block w-10 h-6 rounded-full transition-colors ${showLevels ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
              <div className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${showLevels ? 'transform translate-x-4' : ''}`}></div>
            </div>
          </label>
        </div>

        {/* Skills Grid by Category */}
        {activeCategory === 'all' ? (
          // Show all categories
          <div className="space-y-12">
            {skillCategories.map((category) => {
              const categorySkills = getSkillsByCategory(category.id);
              return (
                <div key={category.id} className="bg-white rounded-2xl shadow-lg p-8">
                  <div className={`flex items-center gap-3 mb-6 pb-4 border-b bg-gradient-to-r ${getCategoryGradient(category.color)} bg-clip-text`}>
                    <div className={`p-3 rounded-lg ${getCategoryBgColor(category.color)}`}>
                      {getCategoryIcon(category.id)}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
                      <p className="text-gray-600 text-sm">{categorySkills.length} technologies</p>
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
          // Show single category
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {skillCategories.filter(c => c.id === activeCategory).map((category) => (
              <div key={category.id} className="mb-6 pb-4 border-b">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-lg ${getCategoryBgColor(category.color)}`}>
                    {getCategoryIcon(category.id)}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
                    <p className="text-gray-600">{filteredSkills.length} technologies</p>
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

        {/* Skill Summary Section */}
        <section className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold mb-2">{skills.length}+</div>
            <div className="text-blue-100">Total Skills</div>
          </div>
          
          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold mb-2">
              {skills.filter(s => s.level && s.level >= 4).length}
            </div>
            <div className="text-green-100">Advanced Skills</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold mb-2">{skillCategories.length}</div>
            <div className="text-purple-100">Categories</div>
          </div>
        </section>

        {/* Learning Section */}
        <section className="mt-16 bg-gray-900 text-white rounded-2xl p-8 shadow-xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-yellow-500 rounded-lg">
              <BookOpen size={24} />
            </div>
            <h2 className="text-2xl font-bold">Currently Learning</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="font-semibold mb-2">Advanced Machine Learning</div>
              <div className="text-sm text-gray-400">Deepening AI/ML knowledge</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="font-semibold mb-2">Cloud Computing</div>
              <div className="text-sm text-gray-400">AWS and cloud architecture</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="font-semibold mb-2">System Design</div>
              <div className="text-sm text-gray-400">Scalable architecture patterns</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}