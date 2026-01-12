"use client";

import Link from "next/link";
import { Playfair_Display, Inter } from "next/font/google";
import { usePathname } from "next/navigation";

const serif = Playfair_Display({ subsets: ["latin"], weight: ["700"] });
const sans = Inter({ subsets: ["latin"], weight: ["500"] });

interface NavbarProps {
  cinzelClassName: string;
}

export default function Navbar({ cinzelClassName }: NavbarProps) {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };
  return (
    <nav className="sticky top-20 left-0 w-full z-[200] bg-transparent" style={{ paddingLeft: '3rem', paddingRight: '3rem' }}>
      <div className="relative flex items-center justify-between max-w-7xl mx-auto w-full py-4">

        {/* Left: Logo */}
       <div className={`${cinzelClassName} font-bold`} style={{ fontSize: '3.5rem', paddingLeft: '2rem' }}>
  <Link href="/" style={{ textDecoration: 'none', color: 'black' }} className="hover:text-orange-500 transition">
    Usman<span style={{ color: '#f97316' }}>.</span>
  </Link>
</div>


        {/* Center: Navigation Links */}
        <div className="absolute left-1/2 -translate-x-1/2 flex w-[500px] justify-between">
          <Link href="/" style={{ textDecoration: isActive("/") ? 'underline' : 'none', color: 'black' }} className={`${sans.className} text-sm font-semibold uppercase tracking-widest hover:text-orange-500 transition-all hover:scale-110 hover:underline`}>
            Home
          </Link>
          <Link href="/projects" style={{ textDecoration: isActive("/projects") ? 'underline' : 'none', color: 'black' }} className={`${sans.className} text-sm font-semibold uppercase tracking-widest hover:text-orange-500 transition-all hover:scale-110 hover:underline`}>
            Work
          </Link>
          <Link href="/about" style={{ textDecoration: isActive("/about") ? 'underline' : 'none', color: 'black' }} className={`${sans.className} text-sm font-semibold uppercase tracking-widest hover:text-orange-500 transition-all hover:scale-110 hover:underline`}>
            About
          </Link>
          <Link href="/skills" style={{ textDecoration: isActive("/skills") ? 'underline' : 'none', color: 'black' }} className={`${sans.className} text-sm font-semibold uppercase tracking-widest hover:text-orange-500 transition-all hover:scale-110 hover:underline`}>
            Services
          </Link>
          <Link href="/resume" style={{ textDecoration: isActive("/resume") ? 'underline' : 'none', color: 'black' }} className={`${sans.className} text-sm font-semibold uppercase tracking-widest hover:text-orange-500 transition-all hover:scale-110 hover:underline`}>
            Resume
          </Link>
        </div>

           {/* Right: Contact Button */}
<div className="ml-auto flex items-center gap-6" style={{ paddingRight: '2rem' }}>
  <Link
    href="/contact"
    style={{ 
      backgroundColor: 'black', 
      color: 'white', 
      paddingLeft: '2rem', 
      paddingRight: '2rem', 
      paddingTop: '0.75rem', 
      paddingBottom: '0.75rem', 
      borderRadius: '9999px',
      fontSize: '0.875rem',
      fontWeight: 'bold',
      textDecoration: 'none',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
    }}
    className="hover:bg-gray-900 transition-all"
  >
    Contact
  </Link>
</div>



      </div>
    </nav>
  );
}
