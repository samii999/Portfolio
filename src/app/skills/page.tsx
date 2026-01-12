import SkillCard from "@/components/SkillBadge";
import { skills } from "@/data/skills";

export default function SkillsPage() {
  return (
    <section
      className="w-full max-w-7xl mx-auto flex flex-col gap-16"
      style={{
        paddingLeft: "4rem",
        paddingRight: "4rem",
        paddingTop: "4rem",
        paddingBottom: "4rem",
      }}
    >
      {/* Header */}
      <div 
        style={{
          backgroundColor: '#000000',
          border: '3px solid #FFD700',
          borderRadius: '1rem',
          padding: '2rem',
          marginBottom: '2rem'
        }}
      >
        <h1
          className="text-4xl md:text-6xl font-bold uppercase mb-4"
          style={{ 
            color: "#ffffff", 
            letterSpacing: "-0.05em",
            fontFamily: 'Inter, sans-serif'
          }}
        >
          Skills & Services
        </h1>

        <p 
          className="max-w-2xl text-lg"
          style={{ 
            color: "#d1d5db",
            lineHeight: 1.6
          }}
        >
          Technologies and services I use to design and develop modern,
          scalable, and user-focused applications.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {skills.map((skill) => (
          <SkillCard
            key={skill.title}
            title={skill.title}
            description={skill.description}
            icon={skill.icon}
          />
        ))}
      </div>
    </section>
  );
}
