type SkillProps = {
  title: string;
  description: string;
  icon: string;
};

export default function SkillCard({ title, description, icon }: SkillProps) {
  return (
    <div 
      className="hover:shadow-xl transition-all duration-300"
      style={{ 
        backgroundColor: '#000000',
        border: '3px solid #FFD700',
        borderRadius: '1rem',
        padding: '2rem',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
      }}
    >
      <div className="text-center">
        <div 
          className="text-5xl mb-4 mx-auto"
          style={{ 
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            border: '4px solid #FCD34D',
            backgroundColor: '#000000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1rem auto'
          }}
        >
          <span style={{ color: '#ffffff', fontSize: '1.5rem', lineHeight: 1 }}>
            {icon}
          </span>
        </div>

        <h3 
          className="text-xl font-bold mb-3"
          style={{ 
            color: '#ffffff',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}
        >
          {title}
        </h3>

        <p 
          className="leading-relaxed"
          style={{ 
            color: '#d1d5db',
            fontSize: '1rem',
            lineHeight: 1.6
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
