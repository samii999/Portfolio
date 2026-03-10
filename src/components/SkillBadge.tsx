// src/components/SkillBadge.tsx
'use client';

import { Skill } from '@/data/skills';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
      case 'other': return 'bg-gradient-to-r from-yellow-400/20 to-amber-600/20 text-yellow-400 border-yellow-400/30 hover:border-yellow-400/60';
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
          <motion.div
            key={dot}
            className={`w-1 h-1 rounded-full ${
              dot <= (skill.level || 0) ? 'bg-yellow-400' : 'bg-gray-600'
            }`}
            animate={{
              scale: dot <= (skill.level || 0) ? [1, 1.2, 1] : [1, 1, 1],
              opacity: dot <= (skill.level || 0) ? [1, 1, 1] : [1, 1, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: dot * 0.1,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <motion.div
      className="relative inline-block"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      whileHover={{ 
        scale: 1.05,
        y: -2
      }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <motion.span
        className={`
          inline-flex items-center gap-1
          ${getCategoryColor(skill.category)}
          ${getSizeClasses()}
          rounded-full border font-medium
          transition-all duration-200
          cursor-default
          shadow-lg hover:shadow-yellow-400/20
        `}
        whileHover={{
          borderColor: skill.category === 'frontend' ? 'rgba(250, 204, 21, 0.6)' : 
                     skill.category === 'backend' ? 'rgba(251, 191, 36, 0.6)' : 
                     skill.category === 'mobile' ? 'rgba(250, 204, 21, 0.6)' : 
                     'rgba(250, 204, 21, 0.6)'
        }}
      >
        <span>{skill.name}</span>
        {showLevel && renderLevelDots()}
      </motion.span>

      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div 
            className="absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-yellow-400 text-xs rounded whitespace-nowrap border border-yellow-400/30 shadow-lg shadow-yellow-400/20"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="font-bold">{skill.category.charAt(0).toUpperCase() + skill.category.slice(1)}</div>
            {skill.level && <div className="text-yellow-300"> • Level {skill.level}/5</div>}
            <motion.div 
              className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"
              animate={{
                width: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
