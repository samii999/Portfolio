// src/app/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <div className="flex-1 text-center md:text-left order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Muhammad Usman
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-4">
                Computer Science Graduate
              </p>
              
              <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
                Web & Mobile App Developer specializing in React, Next.js, and React Native
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
                <Link 
                  href="/projects" 
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2"
                >
                  View My Work
                  <ArrowRight size={20} />
                </Link>
                
                <Link 
                  href="/resume.pdf" 
                  target="_blank"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Download size={20} />
                  Download Resume
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 justify-center md:justify-start">
                <Link 
                  href="https://github.com/samii999" 
                  target="_blank"
                  className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </Link>
                <Link 
                  href="https://www.linkedin.com/in/muhammad-usman-004b363a4/" 
                  target="_blank"
                  className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </Link>
                <Link 
                  href="mailto:um558899@gmail.com"
                  className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 relative order-1 md:order-2">
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                <Image
                  src="/images/profile/profile.jpeg"
                  alt="Muhammad Usman"
                  fill
                  className="rounded-full object-cover border-4 border-white shadow-xl"
                  priority
                />
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-400 rounded-full opacity-20 animate-pulse delay-700"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="text-center p-6">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">6+</div>
              <div className="text-gray-600 text-sm md:text-base">Projects</div>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">4+</div>
              <div className="text-gray-600 text-sm md:text-base">Technologies</div>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">1+</div>
              <div className="text-gray-600 text-sm md:text-base">Year Experience</div>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">2</div>
              <div className="text-gray-600 text-sm md:text-base">Major Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <p className="text-gray-600 mb-4">
                Computer Science graduate from COMSATS University with strong foundational knowledge 
                of web and mobile application development.
              </p>
              <p className="text-gray-600 mb-6">
                Hands-on experience with React Native, React.js, and Next.js through academic and 
                personal projects. Developed a full-featured Final Year Project involving authentication, 
                role-based access control, APIs, and AI-assisted image classification.
              </p>
              <Link 
                href="/about" 
                className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-1"
              >
                Read More <ArrowRight size={16} />
              </Link>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">Web</div>
                <div className="text-gray-600">React & Next.js</div>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">Mobile</div>
                <div className="text-gray-600">React Native</div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">Backend</div>
                <div className="text-gray-600">Node.js & APIs</div>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-600 mb-2">AI/ML</div>
                <div className="text-gray-600">Image Classification</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-blue-100 mb-8 text-lg">
            I'm currently looking for internship opportunities. Feel free to reach out!
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
          >
            Get In Touch
            <Mail size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}