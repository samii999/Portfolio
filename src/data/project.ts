// src/data/projects.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  images: string[];
  videoLink?: string;
  githubLink?: string;
  liveLink?: string;
  technologies: string[];
  category: 'fyp' | 'personal' | 'game';
}

export const projects: Project[] = [
  {
    id: 'fixora',
    title: 'Fixora - AI-Powered Mobile Issue Reporting App',
    description: 'A cross-platform mobile app for reporting issues with AI-powered image classification',
    longDescription: 'Built a cross-platform mobile app using React Native and Expo. Implemented authentication and role-based access for Users, Staff, and Admins. Integrated Supabase for data storage and GPS-based issue tracking. Trained and integrated a machine learning model for image classification and issue categorization.',
    images: [
      '/images/projects/fixora/screen1.jpeg',
      '/images/projects/fixora/screen2.jpeg',
      '/images/projects/fixora/screen3.jpeg',
      '/images/projects/fixora/screen4.jpeg',
    ],
    videoLink: 'https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/share/r/1LuTsvDubY/',
    githubLink: 'https://github.com/samii999/fixora',
    technologies: ['React Native', 'Expo', 'Supabase', 'Machine Learning', 'GPS', 'Authentication'],
    category: 'fyp',
  },
  {
    id: 'rescov',
    title: 'Rescov - AI Resume & Cover Letter Builder',
    description: 'Real-time AI-powered resume generator with smart suggestions',
    longDescription: 'Built a real-time AI-powered resume & cover letter generator using Next.js and AI LLM integration. Added live preview, smart suggestions, and structured templates for professional resumes.',
    images: [
      '/images/projects/rescov/home page.png',
      '/images/projects/rescov/perview page.png',
      '/images/projects/rescov/template page.png',
    ],
    githubLink: 'https://github.com/samii999/Rescov_AI_Resume',
    technologies: ['Next.js', 'AI LLM', 'TypeScript', 'Tailwind CSS', 'OpenAI'],
    category: 'personal',
  },
  {
    id: 'wordchain',
    title: 'WordChain Game Collection',
    description: 'Interactive word games with various challenges and game modes',
    longDescription: 'A collection of interactive word games built with React, featuring multiple game modes including word validation, time-based challenges, and pause functionality. Each game demonstrates different React concepts and state management techniques.',
    images: [
      '/images/projects/gametwiceword.png',
      '/images/projects/invalidword.png',
      '/images/projects/pausegame.png',
      '/images/projects/timesup.png'
    ],
    videoLink: 'https://www.youtube.com/embed/QOoZslxAc-s',
    githubLink: 'https://github.com/samii999/ai-game-website',
    technologies: ['React', 'JavaScript', 'CSS', 'State Management', 'Game Logic', 'Timers'],
    category: 'game',
  },
  {
    id: 'tensesurdu',
    title: 'TensesUrdu - English Tenses in Urdu',
    description: 'Next.js web app teaching English tenses in Urdu with SEO optimization',
    longDescription: 'Next.js/TypeScript web app teaching English tenses in Urdu – built for hands-on SEO practice with complete sitemap, robots.txt, and keyword-optimized content structure.',
    images: [
      '/images/projects/tensesurdu/first.png',
      '/images/projects/tensesurdu/second.png',
      '/images/projects/tensesurdu/third.png'
    ],
    githubLink: 'https://github.com/samii999/tenses-learning-urdu',
    liveLink: 'https://tensesurdu.vercel.app',
    technologies: ['Next.js', 'TypeScript', 'SEO', 'Tailwind CSS', 'Vercel'],
    category: 'personal',
  },
  {
    id: 'kamimobileshop',
    title: 'KAMI MobileShop - E-Commerce Platform',
    description: 'Full-Stack E-Commerce Platform with admin dashboard and real-time notifications',
    longDescription: 'Built with Next.js 16, TypeScript, Tailwind CSS, and Supabase featuring secure admin authentication, real-time order notifications, multi-file printing service with individual settings, and complete product/order management system.',
    images: [
      '/images/projects/ecommerce/e1.png',
      '/images/projects/ecommerce/e2.png',
      '/images/projects/ecommerce/e3.png',
      '/images/projects/ecommerce/e4.png',
      '/images/projects/ecommerce/e5.png',
    ],
    githubLink: 'https://github.com/samii999/Ecommerce-Store',
    liveLink: 'https://kami-mobileshop.vercel.app/',
    technologies: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Admin Auth', 'Real-time Notifications'],
    category: 'personal',
  },
];