"use client";

import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/project";

export default function ProjectsPage() {
  return (
    <section
      className="relative w-full max-w-7xl mx-auto flex flex-col gap-16"
      style={{
        paddingLeft: "4rem",
        paddingRight: "4rem",
        background: "linear-gradient(to bottom, #ffffff 0%, #fcd34d 50%, #ffffff 100%)",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Projects Header */}
      <div 
        style={{
          backgroundColor: '#000000',
          border: '3px solid #000000',
          borderRadius: '0.5rem',
          padding: '1rem 1.5rem',
          marginBottom: '2rem'
        }}
      >
        <h1
          className="text-4xl md:text-6xl font-bold uppercase"
          style={{ 
            color: "#ffffff", 
            letterSpacing: "-0.05em",
            fontFamily: 'Inter, sans-serif'
          }}
        >
          My Projects
        </h1>
      </div>

      <div className="flex flex-col gap-48">
        {projects.map((project, index) => (
          <div key={project.id} style={index === 0 ? { marginTop: '0rem' } : {}}>
            {/* Project Separator */}
            {index > 0 && (
              <div className="flex items-center justify-center my-16">
                <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1"></div>
                <div 
                  className="mx-8 px-8 py-4 rounded-full"
                  style={{
                    backgroundColor: '#000000',
                    border: '3px solid #FCD34D',
                    color: '#ffffff',
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                    whiteSpace: 'nowrap',
                    minWidth: '160px',
                    textAlign: 'center'
                  }}
                >
                  Next Project
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1"></div>
              </div>
            )}
            
            <div
              className="flex flex-col gap-10 bg-white rounded-2xl shadow-lg p-8"
              style={{border: '3px solid #000000', marginTop: '4rem', marginBottom: '4rem'}}
            >
            {/* Card - Without Images */}
            <div style={{backgroundColor: '#000000', padding: '1.5rem', width: '100%', display: 'block', border: '2px solid #FFD700', borderBottom: 'none'}}>
              <div style={{textAlign: 'center'}}>
                {/* FYP Badge - Only for Final Year Projects */}
                {project.featured && (
                  <div style={{display: 'inline-block', backgroundColor: '#FFD700', color: '#000000', padding: '0.25rem 0.75rem', borderRadius: '0.5rem', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem'}}>
                    🎓 Final Year Project
                  </div>
                )}
                <h1
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: "#ffffff",
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    backgroundColor: '#000000',
                    display: 'block'
                  }}
                >
                  {project.title}
                </h1>

                <p style={{color: '#d1d5db', fontSize: '1.125rem', marginBottom: '1.5rem', backgroundColor: '#000000', display: 'block'}}>
                  {project.shortDescription}
                </p>
              </div>
            </div>

            {/* Details */}
            <div className="mt-10 grid md:grid-cols-2 gap-10 items-start">
              {/* Description */}
              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold text-black mb-6"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Project Details
                </h2>

                <p className="text-gray-700 leading-relaxed text-base md:text-lg mt-4">
                  {project.description}
                </p>

                <h3 className="text-lg md:text-xl text-black mt-6 mb-4 font-semibold">
                  Tech Stack
                </h3>

                <div style={{display:'flex',flexWrap:'wrap',gap:'2rem',justifyContent:'center'}}>
                  {project.techStack.map((tech: string) => (
                    <div key={tech} style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                      <div style={{width:'72px',height:'72px',borderRadius:'50%',border:'4px solid #FCD34D',background:'black',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'0.5rem'}}>
                        <span style={{color:'white',fontSize:'0.75rem',fontWeight:'bold'}}>
                          {tech.substring(0, 2).toUpperCase()}
                        </span>
                      </div>
                      <span style={{fontSize:'0.75rem',color:'black',fontWeight:'600',textAlign:'center'}}>
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 mb-20" style={{marginTop: '6rem'}}>
                  <a
                    href={project.github}
                    target="_blank"
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
                      textDecoration: 'none',
                      display: 'inline-block'
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      alert('Please contact the owner for permission to access the code repository.');
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
                    GitHub Link
                  </a>
                  
                  {/* Watch on Facebook Button - Only for Fixora project */}
                  {project.id === 'fixora' && (
                    <a
                      href="https://www.facebook.com/reel/2320509371787323/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        backgroundColor: '#1877f2',
                        color: 'white',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '9999px',
                        fontWeight: 'bold',
                        fontSize: '0.875rem',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        transition: 'all 0.3s ease',
                        border: '2px solid #1877f2',
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#166fe5';
                        e.currentTarget.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#1877f2';
                        e.currentTarget.style.color = 'white';
                      }}
                    >
                      <span style={{ fontSize: '1rem' }}>▶</span>
                      Watch on Facebook (Fullscreen)
                    </a>
                  )}
                </div>
              </div>

              {/* Video */}
              <div>
                <div style={{backgroundColor: '#000000', padding: '0.5rem 1.5rem', width: '100%', marginBottom: '0rem', display: 'block', border: '2px solid #FFD700', borderBottom: 'none'}}>
                  <h3 style={{color: '#ffffff', fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center', backgroundColor: '#000000', display: 'block', margin: '0', lineHeight: '1.5'}}>
                    Project Demo Video
                  </h3>
                </div>
                <div className="w-full h-[400px] md:h-[450px] flex items-center justify-center bg-black rounded-xl relative" style={{ minHeight: '400px' }}>
                  <iframe
                    src={project.video}
                    className="rounded-xl border-2 border-yellow-300 shadow"
                    style={{ 
                      background: "#000",
                      width: "100%",
                      height: "100%",
                      position: 'absolute',
                      top: 0,
                      left: 0
                    }}
                    allowFullScreen
                    allow="autoplay; fullscreen; picture-in-picture; accelerometer; gyroscope; encrypted-media"
                    loading="lazy"
                    frameBorder="0"
                    scrolling="no"
                  />
                </div>
              </div>
            </div>

            {/* Mobile Screens Gallery - At the very bottom */}
            <div style={{marginTop: '0rem', paddingTop: '0rem'}}>
              <div style={{backgroundColor: '#000000', padding: '0.5rem 1.5rem', width: '100%', marginBottom: '1.5rem', display: 'block', border: '2px solid #FFD700', borderTop: 'none'}}>
                <h3 style={{color: '#ffffff', fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center', backgroundColor: '#000000', display: 'block', margin: '0', lineHeight: '1.5'}}>
                  {project.id === 'ai-word-chain' ? 'Game Frontend' : 'App Frontend'}
                </h3>
              </div>
              <div className="flex gap-6 pb-4 justify-center flex-wrap">
                {project.images.map((image: string, index: number) => (
                  <div key={index} className="flex-shrink-0">
                    <div className="relative">
                      <img
                        src={image}
                        alt={`${project.title} - Screen ${index + 1}`}
                        width={250}
                        height={500}
                        className="rounded-xl shadow-lg"
                        style={{ objectFit: 'contain' }}
                      />
                      {/* Mobile Frame Effect */}
                      <div className="absolute inset-0 border-2 border-gray-700 rounded-xl pointer-events-none"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>
        ))}
      </div>
    </section>
  );
}
