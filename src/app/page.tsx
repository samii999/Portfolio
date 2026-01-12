"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Playfair_Display, Inter } from 'next/font/google';

const serif = Playfair_Display({ subsets: ['latin'], style: 'italic' });
const sans = Inter({ subsets: ['latin'], weight: ['900'] });

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden pt-96 sm:pt-[28rem]">
      {/* HERO SECTION */}
      <section className="relative w-full max-w-7xl mx-auto flex items-center justify-between gap-16" style={{ paddingLeft: '4rem', paddingRight: '4rem' }}>

        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-start gap-4" style={{ marginTop: '-4rem' }}>
          {/* Top Left: Hey there */}
          <h2 className={`${serif.className} text-[3rem] md:text-[4.5rem] font-bold text-black`}>
            Hey, there
          </h2>

          {/* Bottom Left: Name */}
          <h1 className={`${sans.className} text-[2rem] md:text-[3rem] lg:text-[4rem] leading-tight uppercase tracking-tighter text-black`}>
            I AM MUHAMMAD USMAN
          </h1>

          {/* Role */}
          <h2 className={`${sans.className} text-xl md:text-3xl lg:text-4xl font-black uppercase tracking-tighter text-black`}>
            WEB & APP DEVELOPER & UI/UX DESIGNER
          </h2>

          {/* View My Work Button */}
          <Link 
            href="/projects" 
            style={{
              backgroundColor: 'black',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '9999px',
              fontWeight: 'bold',
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              border: '2px solid #FCD34D',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease',
              marginTop: '0.5rem'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#FCD34D';
              e.currentTarget.style.color = 'black';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'black';
              e.currentTarget.style.color = 'white';
            }}
          >
            View My projects
          </Link>
        </div>

        {/* Middle: Hero Profile Picture and Badge */}
        <div className="relative flex flex-col items-center" style={{ marginTop: '4rem' }}>
          <div className="relative w-[280px] md:w-[320px] lg:w-[380px] h-[280px] md:h-[320px] lg:h-[380px] rounded-full overflow-hidden shadow-2xl border-4 border-yellow-400 flex-shrink-0">
            <Image
              src="/images/profile/profile.jpeg"
              alt="Muhammad Usman"
              fill
              className="w-full h-full object-cover"
              priority
            />
          </div>
          
          {/* Badge Below Profile Picture */}
          <div className="flex items-center">
            <span className="w-3 h-3 bg-orange-500 rounded-full animate-pulse block"></span>
            <span className="bg-white/90 text-black px-4 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-wide shadow-md" style={{ fontWeight: '900' }}>
              Available for new opportunities
            </span>
          </div>

          {/* Description Under Badge */}
          <p className="text-sm md:text-base font-medium text-gray-700 text-center mt-4">
            Specialized in Web & App Development, UI/UX, and Modern Solutions.
          </p>

          {/* Statistics Section */}
          <div className="flex flex-col items-center space-y-4 mb-8" style={{ marginTop: '60px' }}>
            <div className="flex justify-center" style={{ gap: '6rem' }}>
              <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <span className="text-3xl md:text-4xl text-black" style={{ fontWeight: '900' }}>3+</span>
                <span className="text-sm md:text-base text-black" style={{ fontWeight: '900' }}>Experiences</span>
              </div>
              <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <span className="text-3xl md:text-4xl text-black" style={{ fontWeight: '900' }}>4+</span>
                <span className="text-sm md:text-base text-black" style={{ fontWeight: '900' }}>Projects</span>
              </div>
              <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <span className="text-3xl md:text-4xl text-black" style={{ fontWeight: '900' }}>40+</span>
                <span className="text-sm md:text-base text-black" style={{ fontWeight: '900' }}>Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Skill Orbs Column */}
        <div className="flex-1" style={{display:'flex',flexDirection:'column',alignItems:'end',justifyContent:'start',paddingLeft:'0.5rem'}}>
          {/* Skills Grid */}
          <div style={{display:'flex',flexDirection:'column',gap:'2rem',marginTop:'2rem'}}>
            {/* First Row - 4 skills */}
            <div style={{display:'flex',justifyContent:'end',columnGap:'2.5rem',alignItems:'center'}}>
              {/* React Native */}
              <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <div style={{width:'72px',height:'72px',borderRadius:'50%',border:'4px solid #FCD34D',background:'black',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'0.5rem'}}>
                  <span style={{color:'white',fontSize:'0.75rem',fontWeight:'bold'}}>RN</span>
                </div>
                <span style={{fontSize:'0.75rem',color:'black',fontWeight:'600'}}>React Native</span>
              </div>
              
              {/* Next.js */}
              <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <div style={{width:'72px',height:'72px',borderRadius:'50%',border:'4px solid #FCD34D',background:'black',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'0.5rem'}}>
                  <span style={{color:'white',fontSize:'0.75rem',fontWeight:'bold'}}>N</span>
                </div>
                <span style={{fontSize:'0.75rem',color:'black',fontWeight:'600'}}>Next.js</span>
              </div>
              
              {/* Python */}
              <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <div style={{width:'72px',height:'72px',borderRadius:'50%',border:'4px solid #FCD34D',background:'black',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'0.5rem'}}>
                  <span style={{color:'white',fontSize:'0.75rem',fontWeight:'bold'}}>PY</span>
                </div>
                <span style={{fontSize:'0.75rem',color:'black',fontWeight:'600'}}>Python</span>
              </div>
              
              {/* AI */}
              <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <div style={{width:'72px',height:'72px',borderRadius:'50%',border:'4px solid #FCD34D',background:'black',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'0.5rem'}}>
                  <span style={{color:'white',fontSize:'0.75rem',fontWeight:'bold'}}>AI</span>
                </div>
                <span style={{fontSize:'0.75rem',color:'black',fontWeight:'600'}}>AI</span>
              </div>
            </div>
            
            {/* Second Row - 4 skills */}
            <div style={{display:'flex',justifyContent:'end',columnGap:'2.5rem',alignItems:'center'}}>
              {/* GitHub */}
              <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <div style={{width:'72px',height:'72px',borderRadius:'50%',border:'4px solid #FCD34D',background:'black',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'0.5rem'}}>
                  <span style={{color:'white',fontSize:'0.75rem',fontWeight:'bold'}}>GH</span>
                </div>
                <span style={{fontSize:'0.75rem',color:'black',fontWeight:'600'}}>GitHub</span>
              </div>
              
              {/* Figma */}
              <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <div style={{width:'72px',height:'72px',borderRadius:'50%',border:'4px solid #FCD34D',background:'black',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'0.5rem'}}>
                  <span style={{color:'white',fontSize:'0.75rem',fontWeight:'bold'}}>F</span>
                </div>
                <span style={{fontSize:'0.75rem',color:'black',fontWeight:'600'}}>Figma</span>
              </div>
              
              {/* Firebase */}
              <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <div style={{width:'72px',height:'72px',borderRadius:'50%',border:'4px solid #FCD34D',background:'black',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'0.5rem'}}>
                  <span style={{color:'white',fontSize:'0.75rem',fontWeight:'bold'}}>FB</span>
                </div>
                <span style={{fontSize:'0.75rem',color:'black',fontWeight:'600'}}>Firebase</span>
              </div>
              
              {/* Supabase */}
              <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <div style={{width:'72px',height:'72px',borderRadius:'50%',border:'4px solid #FCD34D',background:'black',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'0.5rem'}}>
                  <span style={{color:'white',fontSize:'0.75rem',fontWeight:'bold'}}>SB</span>
                </div>
                <span style={{fontSize:'0.75rem',color:'black',fontWeight:'600'}}>Supabase</span>
              </div>
            </div>
            
            {/* Third Row - 2 skills */}
            <div style={{display:'flex',justifyContent:'end',columnGap:'2.5rem',alignItems:'center'}}>
              {/* HTML5 */}
              <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <div style={{width:'72px',height:'72px',borderRadius:'50%',border:'4px solid #FCD34D',background:'black',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'0.5rem'}}>
                  <span style={{color:'white',fontSize:'0.75rem',fontWeight:'bold'}}>H5</span>
                </div>
                <span style={{fontSize:'0.75rem',color:'black',fontWeight:'600'}}>HTML5</span>
              </div>
              
              {/* CSS3 */}
              <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <div style={{width:'72px',height:'72px',borderRadius:'50%',border:'4px solid #FCD34D',background:'black',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'0.5rem'}}>
                  <span style={{color:'white',fontSize:'0.75rem',fontWeight:'bold'}}>C3</span>
                </div>
                <span style={{fontSize:'0.75rem',color:'black',fontWeight:'600'}}>CSS3</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
