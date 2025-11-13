interface BubblegumBlockProps {
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

export function BubblegumBlock({ intensity = 'medium', className = '' }: BubblegumBlockProps) {
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
          background: 'linear-gradient(135deg, #FF4DFF 0%, #FF78C9 100%)',
          opacity: opacityMap[intensity]
        }}
      />
      
      {/* Soft waves */}
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse ${60 + i * 20}% ${40 + i * 15}% at ${30 + i * 15}% ${40 + i * 10}%, rgba(255,120,201,0.3) 0%, transparent 60%)`,
            filter: `blur(${25 + i * 10}px)`,
            animation: `wave ${3 + i * 0.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`
          }}
        />
      ))}
      
      {/* Glossy highlights (main) */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.2) 100%)',
          opacity: 0.6
        }}
      />
      
      {/* Glossy spot highlights */}
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${10 + Math.random() * 40}%`,
            width: `${20 + Math.random() * 40}px`,
            height: `${15 + Math.random() * 30}px`,
            background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.7) 0%, transparent 70%)',
            filter: 'blur(8px)',
            opacity: 0.5,
            animation: `gloss ${2 + Math.random() * 2}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
      
      {/* Iridescent overlay (purple/cyan) */}
      <div 
        className="absolute inset-0 mix-blend-overlay"
        style={{
          background: 'linear-gradient(45deg, rgba(166,77,255,0.15) 0%, transparent 50%, rgba(0,230,255,0.1) 100%)',
          animation: 'iridescence 4s ease-in-out infinite'
        }}
      />
      
      {/* Subtle noise */}
      <div 
        className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`
        }}
      />
      
      {/* Soft shadow for volume */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at bottom, rgba(0,0,0,0.15) 0%, transparent 50%)',
          opacity: 0.4
        }}
      />
      
      {/* Bubble reflections */}
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full border"
          style={{
            left: `${Math.random() * 80}%`,
            top: `${Math.random() * 80}%`,
            width: `${15 + Math.random() * 25}px`,
            height: `${15 + Math.random() * 25}px`,
            borderColor: 'rgba(255,255,255,0.3)',
            borderWidth: '1px',
            background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.2), transparent)',
            opacity: 0.4
          }}
        />
      ))}
      
      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: translateX(0) scale(1); }
          50% { transform: translateX(5px) scale(1.05); }
        }
        
        @keyframes gloss {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        
        @keyframes iridescence {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(10px); }
        }
      `}</style>
    </div>
  );
}
