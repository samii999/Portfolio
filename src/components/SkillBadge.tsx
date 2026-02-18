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
      case 'frontend': return 'bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200';
      case 'backend': return 'bg-green-100 text-green-700 border-green-200 hover:bg-green-200';
      case 'mobile': return 'bg-purple-100 text-purple-700 border-purple-200 hover:bg-purple-200';
      case 'other': return 'bg-orange-100 text-orange-700 border-orange-200 hover:bg-orange-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200';
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
              dot <= (skill.level || 0) ? 'bg-current' : 'bg-gray-300'
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
        `}
      >
        <span>{skill.name}</span>
        {showLevel && renderLevelDots()}
      </span>

      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap">
          {skill.category.charAt(0).toUpperCase() + skill.category.slice(1)}
          {skill.level && ` • Level ${skill.level}/5`}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
        </div>
      )}
    </div>
  );
}