"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Facebook } from "lucide-react";
import { Playfair_Display } from "next/font/google";

const serif = Playfair_Display({ subsets: ["latin"], weight: ["700"] });

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#111111] border-t-2 py-12 px-6" style={{ borderTopColor: '#EAB308' }}>
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-8">

        {/* Brand Name */}
        <h3 className={`${serif.className} mb-4`} style={{ color: '#EAB308', fontSize: '1.5rem', fontWeight: 'bold' }}>
          Muhammad Usman
        </h3>

        {/* Tagline */}
        <p className="text-center max-w-md mb-8" style={{ color: '#FCD34D' }}>
          BSCS student & Web Developer focused on modern solutions.
        </p>

        {/* Social Links */}
        <div className="flex items-center" style={{ gap: '3rem' }}>
          <button
            onClick={() => {
              alert('Please contact the owner for permission to access the code repository.');
            }}
            style={{ 
              color: '#FCD34D', 
              transition: 'all 0.3s ease',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0
            }}
            className="hover:opacity-80"
          >
            <Github size={24} />
          </button>

          <Link
            href="https://www.linkedin.com/in/muhammad-usman-004b363a4/"
            target="_blank"
            style={{ color: '#FCD34D', transition: 'all 0.3s ease' }}
            className="hover:opacity-80"
          >
            <Linkedin size={24} />
          </Link>

          <Link
            href="https://web.facebook.com/profile.php?id=61586227118967"
            target="_blank"
            style={{ color: '#FCD34D', transition: 'all 0.3s ease' }}
            className="hover:opacity-80"
          >
            <Facebook size={24} />
          </Link>

          <Link
            href="mailto:um558899@gmail.com"
            style={{ color: '#FCD34D', transition: 'all 0.3s ease' }}
            className="hover:opacity-80"
          >
            <Mail size={24} />
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-sm mt-8" style={{ color: '#FCD34D' }}>
          © {currentYear} Muhammad Usman. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
