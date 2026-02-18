// src/data/skills.ts
export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'mobile' | 'other';
  level?: number; // Optional skill level 1-5
}

export const skills: Skill[] = [
  // Frontend Skills
  { name: 'React.js', category: 'frontend', level: 4 },
  { name: 'Next.js', category: 'frontend', level: 4 },
  { name: 'TypeScript', category: 'frontend', level: 3 },
  { name: 'JavaScript (ES6+)', category: 'frontend', level: 4 },
  { name: 'HTML5', category: 'frontend', level: 5 },
  { name: 'CSS3', category: 'frontend', level: 4 },
  { name: 'Tailwind CSS', category: 'frontend', level: 4 },
  
  // Backend Skills
  { name: 'Node.js', category: 'backend', level: 3 },
  { name: 'Express.js', category: 'backend', level: 3 },
  { name: 'Firebase', category: 'backend', level: 4 },
  { name: 'Supabase', category: 'backend', level: 4 },
  { name: 'REST APIs', category: 'backend', level: 4 },
  
  // Mobile Skills
  { name: 'React Native', category: 'mobile', level: 4 },
  { name: 'Expo', category: 'mobile', level: 4 },
  
  // Other Skills
  { name: 'Git', category: 'other', level: 4 },
  { name: 'GitHub', category: 'other', level: 4 },
  { name: 'Machine Learning', category: 'other', level: 2 },
  { name: 'API Integration', category: 'other', level: 4 },
];

export const skillCategories = [
  { id: 'frontend', name: 'Frontend Development', color: 'blue', icon: '🎨' },
  { id: 'backend', name: 'Backend Development', color: 'green', icon: '⚙️' },
  { id: 'mobile', name: 'Mobile Development', color: 'purple', icon: '📱' },
  { id: 'other', name: 'Other Skills', color: 'orange', icon: '🔧' },
];

export const getSkillsByCategory = (category: string) => {
  return skills.filter(skill => skill.category === category);
};