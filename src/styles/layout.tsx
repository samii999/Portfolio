import './globals.css';
import Navbar from '@/components/Header';
import Footer from '@/components/Footer';
import { ReactNode } from 'react';
import { Cinzel_Decorative, Inter } from "next/font/google";
import type { Metadata } from 'next';

// Optimize font loading
const cinzel = Cinzel_Decorative({ 
  subsets: ["latin"], 
  weight: ["700"],
  display: 'swap',
  variable: '--font-cinzel',
});

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Muhammad Usman | Portfolio',
    template: '%s | Muhammad Usman'
  },
  description: 'BSCS Student & Web Developer - Explore my projects, skills, and journey in web development',
  keywords: ['portfolio', 'web developer', 'BSCS student', 'frontend developer', 'React', 'Next.js'],
  authors: [{ name: 'Muhammad Usman' }],
  creator: 'Muhammad Usman',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://usman.dev',
    title: 'Muhammad Usman | Portfolio',
    description: 'BSCS Student & Web Developer - Explore my projects, skills, and journey in web development',
    siteName: 'Muhammad Usman Portfolio',
    images: [
      {
        url: '/images/profile/profile.jpeg',
        width: 1200,
        height: 630,
        alt: 'Muhammad Usman Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Usman | Portfolio',
    description: 'BSCS Student & Web Developer',
    images: ['/images/profile/profile.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html 
      lang="en" 
      className={`${cinzel.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Viewport meta tag for proper mobile scaling */}
        <meta 
          name="viewport" 
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" 
        />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#c9a929" />
        <meta name="msapplication-TileColor" content="#c9a929" />
        
        {/* iOS specific */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Usman Portfolio" />
        
        {/* Favicon links */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="antialiased">
        {/* Skip to main content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-md"
        >
          Skip to main content
        </a>

        {/* Main layout container */}
        <div className="min-h-screen flex flex-col bg-background text-text-primary">
          <Navbar />
          
          {/* Main content with proper spacing */}
          <main 
            id="main-content" 
            className="flex-grow pt-16 md:pt-20"
          >
            {children}
          </main>
          
          <Footer />
        </div>
      </body>
    </html>
  );
}