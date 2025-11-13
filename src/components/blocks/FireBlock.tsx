interface FireBlockProps {
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

export function FireBlock({ intensity = 'medium', className = '' }: FireBlockProps) {
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
          background: 'linear-gradient(135deg, #FFD24D 0%, #FF4D00 50%, #C400FF 100%)',
          opacity: opacityMap[intensity]
        }}
      />
      
      {/* Flame waves */}
      <div className="absolute inset-0">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="absolute bottom-0 left-0 right-0"
            style={{
              height: `${40 + i * 20}%`,
              background: `linear-gradient(to top, ${
                i % 2 === 0 ? 'rgba(255,77,0,0.4)' : 'rgba(255,210,77,0.3)'
              } 0%, transparent 100%)`,
              filter: `blur(${15 + i * 5}px)`,
              animation: `fireWave ${2 + i * 0.3}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
              transform: 'translateZ(0)'
            }}
          />
        ))}
      </div>
      
      {/* Noise texture */}
      <div 
        className="absolute inset-0 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`
        }}
      />
      
      {/* Sparks/particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: `${Math.random() * 60}%`,
            width: `${1 + Math.random() * 3}px`,
            height: `${1 + Math.random() * 3}px`,
            background: '#FFD24D',
            boxShadow: '0 0 6px #FFD24D',
            opacity: 0.6 + Math.random() * 0.4,
            animation: `spark ${1 + Math.random() * 2}s ease-out infinite`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
      
      {/* Additive glow overlay */}
      <div 
        className="absolute inset-0 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,210,77,0.3) 0%, transparent 70%)',
          filter: 'blur(30px)'
        }}
      />
      
      <style jsx>{`
        @keyframes fireWave {
          0%, 100% { transform: translateY(0) scaleY(1); }
          50% { transform: translateY(-10px) scaleY(1.1); }
        }
        
        @keyframes spark {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          100% { transform: translateY(-100px) scale(0); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
