// src/components/Footer.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, Sparkles, Code } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { href: "https://github.com/samii999", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/muhammad-usman-004b363a4/", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:um558899@gmail.com", icon: Mail, label: "Email" },
  ];

  return (
    <motion.footer 
      className="bg-gradient-to-b from-gray-900 via-gray-800 to-black border-t border-yellow-400/20 text-white py-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.div 
              className="mb-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-lg font-bold bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent mb-2">
                About
              </h3>
              <p className="text-gray-400 text-sm">
                Computer Science graduate passionate about building innovative web and mobile applications.
              </p>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div 
              className="mb-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-lg font-bold bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent mb-2">
                Quick Links
              </h3>
              <div className="flex flex-col space-y-2">
                <Link href="/" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Home
                </Link>
                <Link href="/about" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  About
                </Link>
                <Link href="/projects" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Projects
                </Link>
                <Link href="/skills" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Skills
                </Link>
                <Link href="/certificates" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Certificates
                </Link>
                <Link href="/contact" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Contact
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div 
              className="mb-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-lg font-bold bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent mb-2">
                Connect
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="bg-gray-800/50 text-gray-300 p-2 rounded-lg border border-gray-700/50 hover:bg-yellow-400/10 hover:border-yellow-400/40 transition-all"
                    whileHover={{ 
                      scale: 1.1,
                      y: -2,
                      borderColor: "rgba(250, 204, 21, 0.4)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div 
          className="h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent mb-8"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.4 }}
        />

        {/* Copyright */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center gap-2 text-gray-400">
            <span> 2026 Muhammad Usman</span>
            <span className="text-gray-500">•</span>
            <span>All rights reserved</span>
          </div>
          
          <motion.div 
            className="flex items-center gap-1 text-gray-400"
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Heart className="w-4 h-4 text-red-500" />
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-2 text-gray-400"
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
          >
            <Sparkles className="w-4 h-4 text-yellow-400" />
          </motion.div>
        </motion.div>

        {/* Bottom Note */}
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-gray-500 text-sm">
            Built with <span className="text-yellow-400 font-medium">React</span>, <span className="text-amber-400 font-medium">Next.js</span>, and <span className="text-yellow-500 font-medium">Framer Motion</span>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}