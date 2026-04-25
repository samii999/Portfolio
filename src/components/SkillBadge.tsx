// src/components/SkillBadge.tsx
'use client';

import { Skill } from '@/data/skills';
import { useState } from 'react';

interface SkillBadgeProps {
  skill: Skill;
  showLevel?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function SkillBadge({ skill, showLevel = false, size = 'md' }: SkillBadgeProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'frontend': return 'bg-gradient-to-r from-yellow-400/20 to-amber-600/20 text-yellow-400 border-yellow-400/30 hover:border-yellow-400/60';
      case 'backend': return 'bg-gradient-to-r from-amber-600/20 to-yellow-400/20 text-amber-400 border-amber-400/30 hover:border-amber-400/60';
      case 'mobile': return 'bg-gradient-to-r from-yellow-500/20 to-amber-500/20 text-yellow-500 border-yellow-500/30 hover:border-yellow-500/60';
      default: return 'bg-gradient-to-r from-yellow-400/20 to-amber-600/20 text-yellow-400 border-yellow-400/30 hover:border-yellow-400/60';
    }
  };

  const getSizeClasses = () => {
    switch(size) {
      case 'sm': return 'px-2 py-0.5 text-xs';
      case 'lg': return 'px-4 py-2 text-base';
      default: return 'px-3 py-1 text-sm';
    }
  };

  const renderLevelDots = () => {
    if (!skill.level) return null;
    
    return (
      <div className="flex gap-0.5 ml-1">
        {[1, 2, 3, 4, 5].map((dot) => (
          <div
            key={dot}
            className={`w-1 h-1 rounded-full ${
              dot <= (skill.level || 0) ? 'bg-yellow-400' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <span
        className={`
          inline-flex items-center gap-1
          ${getCategoryColor(skill.category)}
          ${getSizeClasses()}
          rounded-full border font-medium
          transition-all duration-200
          cursor-default
          shadow-lg hover:shadow-yellow-400/20
          hover:scale-105 hover:-translate-y-0.5
        `}
      >
        <span>{skill.name}</span>
        {showLevel && renderLevelDots()}
      </span>

      {/* Tooltip - Simple CSS */}
      {showTooltip && (
        <div 
          className="absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-yellow-400 text-xs rounded whitespace-nowrap border border-yellow-400/30 shadow-lg shadow-yellow-400/20"
        >
          <div className="font-bold">{skill.category.charAt(0).toUpperCase() + skill.category.slice(1)}</div>
          {skill.level && <div className="text-yellow-300"> • Level {skill.level}/5</div>}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
        </div>
      )}
    </div>
  );
}