interface ToxicSlimeBlockProps {
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

export function ToxicSlimeBlock({ intensity = 'medium', className = '' }: ToxicSlimeBlockProps) {
  const opacityMap = {
    low: 0.6,
    medium: 0.8,
    high: 1
  };
  
  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      {/* Base gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #A6FF00 0%, #00FF66 100%)',
          opacity: opacityMap[intensity]
        }}
      />
      
      {/* Ooze/slime shapes */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.4 }}>
        {Array.from({ length: 6 }).map((_, i) => {
          const cx = 20 + Math.random() * 60;
          const cy = 20 + Math.random() * 60;
          const r = 15 + Math.random() * 25;
          
          return (
            <ellipse
              key={i}
              cx={`${cx}%`}
              cy={`${cy}%`}
              rx={`${r}%`}
              ry={`${r * 0.7}%`}
              fill="rgba(0,255,102,0.3)"
              style={{
                filter: 'blur(20px)',
                animation: `ooze ${3 + Math.random() * 2}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`
              }}
            />
          );
        })}
      </svg>
      
      {/* Bubbles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full border-2"
          style={{
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
            width: `${10 + Math.random() * 30}px`,
            height: `${10 + Math.random() * 30}px`,
            borderColor: 'rgba(166,255,0,0.4)',
            background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), transparent)',
            animation: `bubble ${2 + Math.random() * 3}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
      
      {/* Glossy highlights */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 80}%`,
            top: `${10 + Math.random() * 40}%`,
            width: `${5 + Math.random() * 15}px`,
            height: `${3 + Math.random() * 8}px`,
            background: 'rgba(255,255,255,0.6)',
            filter: 'blur(3px)',
            opacity: 0.7,
            transform: `rotate(${Math.random() * 180}deg)`
          }}
        />
      ))}
      
      {/* Slime droplets */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: '0%',
            width: `${2 + Math.random() * 4}px`,
            height: `${8 + Math.random() * 12}px`,
            background: 'linear-gradient(to bottom, rgba(166,255,0,0.8), rgba(0,255,102,0.6))',
            borderRadius: '50% 50% 50% 50% / 30% 30% 70% 70%',
            filter: 'blur(1px)',
            animation: `drip ${2 + Math.random() * 2}s ease-in infinite`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
      
      {/* Inner glow */}
      <div 
        className="absolute inset-0"
        style={{
          boxShadow: 'inset 0 0 40px rgba(0,230,0,0.25)',
          borderRadius: 'inherit'
        }}
      />
      
      {/* Additive screen glow */}
      <div 
        className="absolute inset-0 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle at 40% 40%, rgba(166,255,0,0.3) 0%, transparent 60%)',
          filter: 'blur(25px)'
        }}
      />
      
      <style jsx>{`
        @keyframes ooze {
          0%, 100% { transform: scale(1) translateY(0); }
          50% { transform: scale(1.1) translateY(-5px); }
        }
        
        @keyframes bubble {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.2); opacity: 0.7; }
        }
        
        @keyframes drip {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(200px); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
