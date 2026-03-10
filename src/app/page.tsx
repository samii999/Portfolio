"use client";

// src/app/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Download, Github, Linkedin, Mail, Code, Smartphone, Server, Brain } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

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

function ParticleBackground() {
  // Generate deterministic positions based on index to avoid hydration mismatch
  const particles = Array.from({ length: 8 }, (_, i) => {
    const seed = i * 9301 + 49297; // Simple seed for pseudo-randomness
    const x = ((seed * 9301 + 49297) % 10000) / 100;
    const y = ((seed * 23333 + 49991) % 10000) / 100;
    const duration = 1.5 + ((seed * 7) % 1);
    const delay = ((seed * 13) % 5) / 10;
    const size = 1; // Fixed size for performance
    
    return {
      id: i,
      x,
      y,
      duration,
      delay,
      size,
      endX: ((seed * 17) % 10000) / 100,
      endY: ((seed * 19) % 10000) / 100,
    };
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `radial-gradient(circle, rgba(250, 204, 21, 0.8) 0%, rgba(251, 191, 36, 0.4) 50%, transparent 70%)`,
            boxShadow: `0 0 ${particle.size * 2}px rgba(250, 204, 21, 0.3)`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          initial={{ 
            x: `${particle.x}%`, 
            y: `${particle.y}%`,
            scale: 0,
            opacity: 0
          }}
          animate={{ 
            x: [`${particle.x}%`, `${particle.endX}%`],
            y: [`${particle.y}%`, `${particle.endY}%`],
            scale: [0, 0.8, 0],
            opacity: [0, 0.3, 0]
          }}
          transition={{ 
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear"
          }}
        />
      ))}
      
      {/* Geometric shapes */}
      {[...Array(3)].map((_, i) => {
        const seed = i * 12345;
        const x = ((seed * 7) % 10000) / 100;
        const y = ((seed * 11) % 10000) / 100;
        const rotation = ((seed * 13) % 360);
        
        return (
          <motion.div
            key={`geo-${i}`}
            className="absolute"
            style={{
              left: `${x}%`,
              top: `${y}%`,
            }}
            initial={{ 
              rotate: 0,
              scale: 0,
              opacity: 0
            }}
            animate={{ 
              rotate: [0, rotation],
              scale: [0, 0.8, 0],
              opacity: [0, 0.1, 0]
            }}
            transition={{ 
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear"
            }}
          >
            <div 
              className="w-6 h-6 border border-yellow-400/15"
              style={{
                clipPath: i % 2 === 0 ? "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" : "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)"
              }}
            />
          </motion.div>
        );
      })}

      {/* Light rays */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`ray-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent"
          style={{
            width: "150px",
            left: `${25 + i * 25}%`,
            top: `${35 + i * 20}%`,
            transformOrigin: "left center",
          }}
          initial={{ 
            scaleX: 0,
            opacity: 0,
            rotate: i * 30
          }}
          animate={{ 
            scaleX: [0, 0.8, 0],
            opacity: [0, 0.2, 0],
            rotate: [i * 30, i * 30 + 30]
          }}
          transition={{ 
            duration: 1.5 + i,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-16 md:py-24">
        <ParticleBackground />
        
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"
          style={{ y: backgroundY }}
        />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <motion.div 
              className="flex-1 text-center md:text-left order-2 md:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6"
                style={{ y: textY }}
              >
                Hi, I'm{' '}
                <motion.span 
                  className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent relative"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
                >
                  Muhammad Usman
                  {/* Glitch effect overlay */}
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-amber-600 to-yellow-400 bg-clip-text text-transparent"
                    animate={{
                      opacity: [0, 0.3, 0],
                      x: [0, -2, 2, 0],
                    }}
                    transition={{
                      duration: 0.1,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut"
                    }}
                  >
                    Muhammad Usman
                  </motion.span>
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                Computer Science Graduate
              </motion.p>
              
              <motion.p 
                className="text-lg text-gray-400 mb-8 max-w-lg mx-auto md:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                Web & Mobile App Developer specializing in React, Next.js, and React Native
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
              >
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: 1 }} 
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-600 rounded-lg opacity-50 blur-lg"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <Link 
                    href="/projects" 
                    className="relative bg-gradient-to-r from-yellow-400 to-amber-600 text-black px-8 py-4 rounded-lg font-bold hover:from-yellow-500 hover:to-amber-700 transition-all inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-yellow-500/25 border border-yellow-400/20"
                  >
                    <motion.span
                      animate={{
                        x: [0, 3, 0],
                      }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      View My Work
                    </motion.span>
                    <motion.div
                      animate={{
                        x: [0, 5, 0],
                      }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.2
                      }}
                    >
                      <ArrowRight size={20} />
                    </motion.div>
                  </Link>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: -1 }} 
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <motion.div
                    className="absolute inset-0 border-2 border-yellow-400 rounded-lg opacity-30"
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <Link 
                    href="/resume.pdf" 
                    target="_blank"
                    className="relative border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 hover:text-black transition-all inline-flex items-center justify-center gap-2 backdrop-blur-sm"
                  >
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
                      <Download size={20} />
                    </motion.div>
                    Download Resume
                  </Link>
                </motion.div>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                className="flex gap-4 justify-center md:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                {[
                  { href: "https://github.com/samii999", icon: Github, label: "GitHub", color: "hover:bg-gray-700" },
                  { href: "https://www.linkedin.com/in/muhammad-usman-004b363a4/", icon: Linkedin, label: "LinkedIn", color: "hover:bg-blue-700" },
                  { href: "mailto:um558899@gmail.com", icon: Mail, label: "Email", color: "hover:bg-red-700" }
                ].map((social, index) => (
                  <motion.div
                    key={social.label}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6 + index * 0.1 }}
                  >
                    <Link 
                      href={social.href} 
                      target="_blank"
                      className={`bg-gray-800 text-white p-3 rounded-full transition-all ${social.color} hover:shadow-lg hover:shadow-yellow-500/20`}
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div 
              className="flex-1 relative order-1 md:order-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                {/* Holographic effect */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "conic-gradient(from 0deg, transparent, rgba(250, 204, 21, 0.1), transparent, rgba(251, 191, 36, 0.1), transparent)",
                  }}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                {/* Pulsing rings */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={`ring-${i}`}
                    className="absolute inset-0 rounded-full border-2 border-yellow-400/30"
                    animate={{
                      scale: [1, 1.3 + i * 0.2, 1.6 + i * 0.2],
                      opacity: [0.6, 0.2, 0],
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeOut"
                    }}
                  />
                ))}
                
                {/* Glowing aura */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 rounded-full opacity-20 blur-2xl"
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <Image
                  src="/images/profile/profile.jpeg"
                  alt="Muhammad Usman"
                  fill
                  className="rounded-full object-cover border-4 border-yellow-400 shadow-2xl relative z-20"
                  priority
                />
                
                {/* Floating geometric elements */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-20 h-20"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-amber-600 rounded-lg opacity-30 transform rotate-45" />
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-16 h-16"
                  initial={{ rotate: 45 }}
                  animate={{ rotate: -315 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-full h-full border-2 border-amber-500 rounded-full opacity-40" />
                </motion.div>
                
                {/* Orbiting dots */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={`orbit-${i}`}
                    className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                    style={{
                      left: "50%",
                      top: "50%",
                      marginLeft: "-4px",
                      marginTop: "-4px",
                    }}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 10 + i * 2,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.5,
                    }}
                  >
                    <motion.div
                      className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                      style={{
                        transform: `translateX(${80 + i * 5}px)`,
                      }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-amber-600/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {[
              { target: 6, label: "Projects", delay: 0.1 },
              { target: 4, label: "Technologies", delay: 0.2 },
              { target: 1, label: "Year Experience", delay: 0.3 },
              { target: 2, label: "Major Projects", delay: 0.4 }
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="text-center p-6 rounded-lg bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-yellow-400/20 backdrop-blur-sm hover:border-yellow-400/40 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: stat.delay }}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "rgba(250, 204, 21, 0.6)"
                }}
              >
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                  <AnimatedCounter target={stat.target} />
                </div>
                <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-l from-amber-600/5 to-yellow-400/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div 
            className="flex flex-col md:flex-row items-center gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                Computer Science graduate from COMSATS University with strong foundational knowledge 
                of web and mobile application development.
              </p>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                Hands-on experience with React Native, React.js, and Next.js through academic and 
                personal projects. Developed a full-featured Final Year Project involving authentication, 
                role-based access control, APIs, and AI-assisted image classification.
              </p>
              <motion.div whileHover={{ x: 10 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/about" 
                  className="text-yellow-400 font-bold hover:text-yellow-300 inline-flex items-center gap-2 text-lg transition-colors"
                >
                  Read More <ArrowRight size={18} />
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex-1 grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {[
                { icon: Code, title: "Web", tech: "React & Next.js", color: "from-yellow-400 to-amber-600", delay: 0.3 },
                { icon: Smartphone, title: "Mobile", tech: "React Native", color: "from-amber-600 to-yellow-400", delay: 0.4 },
                { icon: Server, title: "Backend", tech: "Node.js & APIs", color: "from-yellow-500 to-amber-500", delay: 0.5 },
                { icon: Brain, title: "AI/ML", tech: "Image Classification", color: "from-amber-400 to-yellow-600", delay: 0.6 }
              ].map((skill, index) => (
                <motion.div
                  key={skill.title}
                  className="p-6 rounded-lg bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-yellow-400/20 backdrop-blur-sm hover:border-yellow-400/40 transition-all"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: skill.delay }}
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: "rgba(250, 204, 21, 0.6)"
                  }}
                >
                  <motion.div
                    className="text-2xl font-bold mb-2 bg-gradient-to-r bg-clip-text text-transparent"
                    style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}
                    initial={{ y: -10 }}
                    whileHover={{ y: 0 }}
                  >
                    {skill.title}
                  </motion.div>
                  <div className="text-gray-300 text-sm flex items-center gap-2">
                    <skill.icon size={16} className="text-yellow-400" />
                    {skill.tech}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-600"
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Let's Work Together
            </h2>
            <p className="text-black/80 mb-10 text-lg font-medium">
              I'm currently looking for internship opportunities. Feel free to reach out!
            </p>
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link 
                href="/contact" 
                className="bg-black text-yellow-400 px-10 py-4 rounded-lg font-bold hover:bg-gray-900 transition-all inline-flex items-center gap-3 shadow-2xl hover:shadow-yellow-400/30"
              >
                Get In Touch
                <Mail size={22} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}