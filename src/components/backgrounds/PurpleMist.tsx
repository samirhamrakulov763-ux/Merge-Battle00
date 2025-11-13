export function PurpleMist() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #0B0F17 0%, #1A0B2E 50%, #0F1220 100%)'
        }}
      />
      
      {/* Volumetric fog layers */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(166,77,255,0.06) 0%, rgba(255,77,255,0.04) 100%)',
          filter: 'blur(80px)'
        }}
      />
      
      {/* Fog clouds/brush strokes */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${-10 + Math.random() * 120}%`,
            top: `${-10 + Math.random() * 60}%`,
            width: `${200 + Math.random() * 300}px`,
            height: `${100 + Math.random() * 200}px`,
            background: `radial-gradient(ellipse, ${
              i % 3 === 0 ? 'rgba(166,77,255,0.15)' :
              i % 3 === 1 ? 'rgba(255,77,255,0.12)' :
              'rgba(200,0,255,0.10)'
            } 0%, transparent 70%)`,
            filter: `blur(${60 + Math.random() * 80}px)`,
            opacity: 0.3 + Math.random() * 0.25,
            transform: `rotate(${Math.random() * 360}deg)`
          }}
        />
      ))}
      
      {/* Rim lights */}
      <div 
        className="absolute top-0 left-0 right-0 h-1/3"
        style={{
          background: 'linear-gradient(to bottom, rgba(166,77,255,0.08) 0%, transparent 100%)',
          filter: 'blur(40px)'
        }}
      />
      
      <div 
        className="absolute bottom-0 left-0 w-1/2 h-1/2"
        style={{
          background: 'radial-gradient(circle at bottom left, rgba(255,77,255,0.12) 0%, transparent 60%)',
          filter: 'blur(60px)'
        }}
      />
      
      {/* Subtle particles */}
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 80}%`,
            width: `${2 + Math.random() * 2}px`,
            height: `${2 + Math.random() * 2}px`,
            background: 'rgba(255,255,255,0.4)',
            filter: `blur(${1 + Math.random() * 2}px)`,
            opacity: 0.2 + Math.random() * 0.3,
            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`
          }}
        />
      ))}
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}
