// src/app/skills/page.tsx
'use client';

import { useState } from 'react';
import { skills, skillCategories, getSkillsByCategory } from '@/data/skills';
import SkillBadge from '@/components/SkillBadge';
import { Code, Server, Smartphone, Wrench, Award, BookOpen, Brain, Sparkles, Layers3 } from 'lucide-react';

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [showLevels, setShowLevels] = useState(false);

  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'frontend':
        return <Code className="w-6 h-6" />;
      case 'backend':
        return <Server className="w-6 h-6" />;
      case 'mobile':
        return <Smartphone className="w-6 h-6" />;
      case 'ai':
        return <Brain className="w-6 h-6" />;
      case 'other':
        return <Wrench className="w-6 h-6" />;
      default:
        return null;
    }
  };

  const filteredSkills = activeCategory === 'all' ? skills : skills.filter((skill) => skill.category === activeCategory);

  const summaryCards = [
    { icon: Award, value: skills.length, label: 'Total Skills', gradient: 'from-yellow-400 to-amber-600' },
    { icon: Code, value: skills.filter((skill) => skill.level && skill.level >= 4).length, label: 'Advanced Skills', gradient: 'from-amber-600 to-yellow-400' },
    { icon: BookOpen, value: skillCategories.length, label: 'Categories', gradient: 'from-yellow-500 to-amber-500' }
  ];

  const learningItems = [
    { title: 'Agentic Workflows', description: 'Improving multi-step reasoning and tool use', icon: '🤖' },
    { title: 'Memory Compaction', description: 'Summarizing long-running context safely', icon: '☁️' },
    { title: 'Evaluation Benchmarking', description: 'Measuring agent accuracy and resilience', icon: '🏗️' }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <section className="relative isolate py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.16),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(245,158,11,0.12),_transparent_24%),linear-gradient(180deg,_#000000_0%,_#0a0a0a_50%,_#000000_100%)]" />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-5xl font-black leading-tight tracking-tight md:text-6xl lg:text-7xl">
            <span className="block text-white">Technical skills that</span>
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-600 bg-clip-text text-transparent">show depth and range.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
            Technologies and tools I work with to build web apps, mobile apps, and AI agents.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActiveCategory('all')}
              className={`inline-flex items-center gap-2 rounded-full border px-6 py-3 font-medium transition-all ${
                activeCategory === 'all'
                  ? 'border-yellow-400/30 bg-gradient-to-r from-yellow-400 to-amber-600 text-black shadow-lg shadow-yellow-500/25'
                  : 'border-white/10 bg-white/5 text-gray-300 hover:border-yellow-400/30 hover:bg-yellow-400/10'
              }`}
            >
              <Award size={18} />
              All Skills
            </button>

            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`inline-flex items-center gap-2 rounded-full border px-6 py-3 font-medium transition-all ${
                  activeCategory === category.id
                    ? 'border-yellow-400/30 bg-gradient-to-r from-yellow-400 to-amber-600 text-black shadow-lg shadow-yellow-500/25'
                    : 'border-white/10 bg-white/5 text-gray-300 hover:border-yellow-400/30 hover:bg-yellow-400/10'
                }`}
              >
                {getCategoryIcon(category.id)}
                {category.name}
              </button>
            ))}
          </div>

          <div className="mb-8 flex justify-end">
            <label className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur-md hover:border-yellow-400/30 transition-all cursor-pointer">
              <span>Show Levels</span>
              <div className="relative">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={showLevels}
                  onChange={() => setShowLevels(!showLevels)}
                />
                <div className={`h-6 w-11 rounded-full transition-colors ${showLevels ? 'bg-gradient-to-r from-yellow-400 to-amber-600' : 'bg-gray-600'}`} />
                <div
                  className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform duration-200"
                  style={{ transform: showLevels ? 'translateX(20px)' : 'translateX(0)' }}
                />
              </div>
            </label>
          </div>

          {activeCategory === 'all' ? (
            <div className="space-y-8">
              {skillCategories.map((category) => {
                const categorySkills = getSkillsByCategory(category.id);

                return (
                  <div key={category.id} className="rounded-[1.5rem] border border-yellow-400/15 bg-white/5 p-6 backdrop-blur-xl hover:border-yellow-400/30 transition-all md:p-8">
                    <div className="mb-6 flex flex-col gap-4 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-3">
                        <div className="rounded-xl border border-yellow-400/30 bg-gradient-to-r from-yellow-400/20 to-amber-600/20 p-3">
                          {getCategoryIcon(category.id)}
                        </div>
                        <div>
                          <h2 className="bg-gradient-to-r from-yellow-300 to-amber-600 bg-clip-text text-2xl font-bold text-transparent">
                            {category.name}
                          </h2>
                          <p className="text-sm text-gray-400">{categorySkills.length} technologies</p>
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-2 text-xs text-gray-300">
                        <Code size={14} className="text-yellow-300" />
                        Recruiter friendly
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {categorySkills.map((skill, index) => (
                        <SkillBadge key={index} skill={skill} showLevel={showLevels} size="lg" />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="rounded-[1.5rem] border border-yellow-400/15 bg-white/5 p-6 backdrop-blur-xl hover:border-yellow-400/30 transition-all md:p-8">
              {skillCategories
                .filter((category) => category.id === activeCategory)
                .map((category) => (
                  <div key={category.id}>
                    <div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                      <div className="rounded-xl border border-yellow-400/30 bg-gradient-to-r from-yellow-400/20 to-amber-600/20 p-3">
                        {getCategoryIcon(category.id)}
                      </div>
                      <div>
                        <h2 className="bg-gradient-to-r from-yellow-300 to-amber-600 bg-clip-text text-2xl font-bold text-transparent">
                          {category.name}
                        </h2>
                        <p className="text-sm text-gray-400">{filteredSkills.length} technologies</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {filteredSkills.map((skill, index) => (
                        <SkillBadge key={index} skill={skill} showLevel={showLevels} size="lg" />
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          )}

          <section className="mt-20 grid gap-6 md:grid-cols-3">
            {summaryCards.map((card, index) => (
              <div
                key={index}
                className={`rounded-[1.5rem] border border-yellow-400/30 bg-gradient-to-br ${card.gradient} p-6 text-black shadow-lg shadow-yellow-500/25 transition-all hover:-translate-y-1 hover:shadow-yellow-400/40`}
              >
                <div className="mb-2 flex items-center gap-3">
                  <card.icon className="h-6 w-6" />
                  <div className="text-3xl font-bold">{card.value}+</div>
                </div>
                <div className="font-medium text-black/80">{card.label}</div>
              </div>
            ))}
          </section>

          <section className="mt-20 rounded-[1.5rem] border border-yellow-400/15 bg-white/5 p-6 shadow-xl backdrop-blur-xl hover:border-yellow-400/30 transition-all md:p-8">
            <div className="mb-8 flex items-center gap-4">
              <div className="rounded-xl bg-gradient-to-r from-yellow-400 to-amber-600 p-3 text-black">
                <BookOpen size={24} />
              </div>
              <h2 className="bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-2xl font-bold text-transparent">
                Currently Learning
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {learningItems.map((item) => (
                <div key={item.title} className="rounded-[1.25rem] border border-white/10 bg-black/30 p-6 transition-all hover:-translate-y-1 hover:border-yellow-400/30">
                  <div className="mb-3 text-2xl">{item.icon}</div>
                  <div className="mb-2 font-bold text-white">{item.title}</div>
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