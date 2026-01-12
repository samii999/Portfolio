"use client";

import { useState } from 'react';
import { Inter } from 'next/font/google';

const sans = Inter({ subsets: ['latin'], weight: ['400', '600'] });

export default function ResumePage() {


  return (
    <main className="relative min-h-screen overflow-x-hidden pt-32 sm:pt-36 px-4 sm:px-8">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`${sans.className} text-4xl md:text-5xl font-bold text-black mb-4`}>
            My Resume
          </h1>
          <p className={`${sans.className} text-lg text-gray-600 max-w-2xl mx-auto`}>
            Download my resume to learn more about my experience, skills, and qualifications.
          </p>
        </div>

        {/* Resume Viewer */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-4">
            <div className="flex items-center justify-between">
              <h2 className={`${sans.className} text-white font-semibold text-lg`}>
                Resume Preview
              </h2>
            </div>
          </div>
          
          {/* PDF Embed */}
          <div className="w-full h-[800px] md:h-[900px] bg-gray-50">
            <iframe
              src="/resume.pdf"
              className="w-full h-full border-0"
              title="Muhammad Usman Resume"
            />
          </div>
        </div>

      </div>
    </main>
  );
}
