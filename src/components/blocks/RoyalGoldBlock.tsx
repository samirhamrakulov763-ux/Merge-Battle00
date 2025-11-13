interface RoyalGoldBlockProps {
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

export function RoyalGoldBlock({ intensity = 'medium', className = '' }: RoyalGoldBlockProps) {
  const opacityMap = {
    low: 0.6,
    medium: 0.8,
    high: 1
  };
  
  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      {/* Dark velvet background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #1A0F0A 0%, #2D1810 100%)'
        }}
      />
      
      {/* Gold gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #FFD24D 0%, #F2C94C 100%)',
          opacity: opacityMap[intensity] * 0.3,
          mixBlendMode: 'overlay'
        }}
      />
      
      {/* Heraldic pattern (damask-like) */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.15 }}>
        <defs>
          <pattern id="heraldic" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="12" fill="none" stroke="#FFD24D" strokeWidth="1" />
            <path d="M 30,18 L 33,25 L 40,25 L 34,30 L 37,37 L 30,32 L 23,37 L 26,30 L 20,25 L 27,25 Z" fill="#FFD24D" />
            <circle cx="10" cy="10" r="3" fill="#F2C94C" />
            <circle cx="50" cy="10" r="3" fill="#F2C94C" />
            <circle cx="10" cy="50" r="3" fill="#F2C94C" />
            <circle cx="50" cy="50" r="3" fill="#F2C94C" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#heraldic)" />
      </svg>
      
      {/* Gold veins/streaks */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${30 + Math.random() * 60}px`,
            height: '1px',
            background: `linear-gradient(90deg, transparent, rgba(255,210,77,0.6), transparent)`,
            transform: `rotate(${Math.random() * 180}deg)`,
            filter: 'blur(1px)',
            opacity: 0.5
          }}
        />
      ))}
      
      {/* Metallic sheen/highlights */}
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${3 + Math.random() * 8}px`,
            height: `${3 + Math.random() * 8}px`,
            background: 'radial-gradient(circle, rgba(255,210,77,0.8) 0%, transparent 70%)',
            filter: 'blur(2px)',
            opacity: 0.6,
            animation: `shimmer ${2 + Math.random() * 3}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
      
      {/* Metallic noise texture */}
      <div 
        className="absolute inset-0 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          opacity: 0.35
        }}
      />
      
      {/* Bevel/emboss effect - top light */}
      <div 
        className="absolute inset-x-0 top-0 h-1/4"
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, transparent 100%)',
          opacity: 0.4
        }}
      />
      
      {/* Bevel/emboss effect - bottom shadow */}
      <div 
        className="absolute inset-x-0 bottom-0 h-1/4"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 100%)',
          opacity: 0.3
        }}
      />
      
      {/* Golden glow overlay */}
      <div 
        className="absolute inset-0 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle at 50% 30%, rgba(255,210,77,0.2) 0%, transparent 60%)',
          filter: 'blur(30px)'
        }}
      />
      
      <style jsx>{`
        @keyframes shimmer {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.3); }
        }
      `}</style>
    </div>
  );
}
