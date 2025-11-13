export function CyberGrid() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #0B0F17 0%, #141823 100%)'
        }}
      />
      
      {/* Perspective grid */}
      <div className="absolute inset-0" style={{ perspective: '1000px' }}>
        <div 
          className="absolute inset-0"
          style={{
            transform: 'rotateX(60deg) translateZ(-200px)',
            transformOrigin: 'center bottom',
            backgroundImage: `
              linear-gradient(to right, rgba(0,230,255,0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,230,255,0.15) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            filter: 'drop-shadow(0 0 20px rgba(0,230,255,0.2))'
          }}
        />
      </div>
      
      {/* Horizon glow */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-1/3"
        style={{
          background: 'linear-gradient(to top, rgba(166,77,255,0.1) 0%, transparent 100%)'
        }}
      />
      
      {/* Glowing nodes */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${40 + Math.random() * 40}%`,
            width: '4px',
            height: '4px',
            background: '#00E6FF',
            borderRadius: '50%',
            boxShadow: '0 0 20px rgba(0,230,255,0.8), 0 0 40px rgba(0,230,255,0.4)',
            animation: `pulse ${1.5 + Math.random() * 2}s ease-in-out infinite`
          }}
        />
      ))}
      
      {/* Scanline effect */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)'
        }}
      />
      
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
      `}</style>
    </div>
  );
}
