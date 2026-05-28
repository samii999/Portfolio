// src/app/projects/page.tsx
'use client';

import { useState } from 'react';
import type { ReactElement } from 'react';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/project';
import { ArrowRight, Sparkles, FolderKanban, Code2, Smartphone, Gamepad2 } from 'lucide-react';

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

  const projectStats = [
    { label: 'Total Projects', value: projects.length },
    { label: 'Active Categories', value: categories.length - 1 },
    { label: 'Featured Focus', value: 'Web + AI' }
  ];

  const categoryIcons: Record<string, ReactElement> = {
    all: <FolderKanban size={18} />,
    fyp: <Sparkles size={18} />,
    personal: <Code2 size={18} />,
    professional: <Smartphone size={18} />,
    game: <Gamepad2 size={18} />
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <section className="relative isolate py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.16),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(245,158,11,0.12),_transparent_24%),linear-gradient(180deg,_#000000_0%,_#0a0a0a_50%,_#000000_100%)]" />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-black leading-tight tracking-tight md:text-6xl lg:text-7xl">
              <span className="block text-white">Projects that show</span>
              <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-600 bg-clip-text text-transparent">real product thinking.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
              A curated collection of web, mobile, and game projects with clean implementation, strong UI, and practical use cases.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {projectStats.map((stat) => (
              <div key={stat.label} className="rounded-[1.5rem] border border-yellow-400/15 bg-white/5 p-5 text-center backdrop-blur-xl">
                <div className="text-3xl font-black text-yellow-400">{stat.value}</div>
                <div className="mt-2 text-sm uppercase tracking-[0.2em] text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'border-yellow-400/40 bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-600 text-black shadow-[0_20px_60px_rgba(250,204,21,0.18)]'
                    : 'border-white/10 bg-white/5 text-yellow-200 hover:border-yellow-400/30 hover:bg-yellow-400/10'
                }`}
              >
                {categoryIcons[category.id]}
                {category.name}
              </button>
            ))}
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="rounded-[1.5rem] border border-yellow-400/15 bg-white/5 py-16 text-center">
              <p className="text-lg text-gray-300">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-600" />
        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-black md:text-4xl">Looking for a developer who can ship and present work well?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-medium text-black/80">
            These projects are built to show clean architecture, polished UI, and the ability to work across product types.
          </p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-8 py-4 font-bold text-yellow-300">
            Get In Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}