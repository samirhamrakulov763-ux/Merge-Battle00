interface FrostBlockProps {
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

export function FrostBlock({ intensity = 'medium', className = '' }: FrostBlockProps) {
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
          background: 'linear-gradient(135deg, #E6F7FF 0%, #BEEBFF 50%, #8FD8FF 100%)',
          opacity: opacityMap[intensity]
        }}
      />
      
      {/* Ice crystal shards */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.3 }}>
        {Array.from({ length: 15 }).map((_, i) => {
          const x = Math.random() * 100;
          const y = Math.random() * 100;
          const size = 5 + Math.random() * 15;
          const rotation = Math.random() * 360;
          
          return (
            <g key={i} transform={`translate(${x} ${y}) rotate(${rotation})`}>
              <polygon
                points={`0,0 ${size},${size * 0.5} ${size * 0.8},${size * 1.2} 0,${size}`}
                fill="rgba(255,255,255,0.6)"
                stroke="rgba(190,235,255,0.8)"
                strokeWidth="0.5"
              />
            </g>
          );
        })}
      </svg>
      
      {/* Frost cracks/lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.25 }}>
        {Array.from({ length: 8 }).map((_, i) => {
          const startX = Math.random() * 100;
          const startY = Math.random() * 100;
          const endX = startX + (Math.random() - 0.5) * 40;
          const endY = startY + (Math.random() - 0.5) * 40;
          
          return (
            <line
              key={i}
              x1={`${startX}%`}
              y1={`${startY}%`}
              x2={`${endX}%`}
              y2={`${endY}%`}
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="1"
            />
          );
        })}
      </svg>
      
      {/* Specular highlights */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${2 + Math.random() * 8}px`,
            height: '1px',
            background: 'rgba(255,255,255,0.8)',
            boxShadow: '0 0 8px rgba(255,255,255,0.6)',
            transform: `rotate(${Math.random() * 180}deg)`,
            opacity: 0.6
          }}
        />
      ))}
      
      {/* Frost microtexture */}
      <div 
        className="absolute inset-0 opacity-10 mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`
        }}
      />
      
      {/* Rim light (cyan-white) */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, transparent 0%, rgba(142,216,255,0.4) 100%)',
          filter: 'blur(20px)',
          mixBlendMode: 'screen'
        }}
      />
      
      {/* Ice particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${1 + Math.random() * 2}px`,
            height: `${1 + Math.random() * 2}px`,
            background: 'rgba(255,255,255,0.9)',
            boxShadow: '0 0 4px rgba(190,235,255,0.8)',
            animation: `sparkle ${1 + Math.random() * 2}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
      
      <style jsx>{`
        @keyframes sparkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
      `}</style>
    </div>
  );
}
