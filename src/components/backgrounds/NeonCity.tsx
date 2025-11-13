export function NeonCity() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #0B0F17 0%, #1A0B2E 50%, #0F1220 100%)'
        }}
      />
      
      {/* Far buildings */}
      <div className="absolute bottom-0 left-0 right-0 h-2/5 opacity-[0.14]">
        <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
          <rect x="5%" y="40%" width="8%" height="60%" fill="#000" />
          <rect x="15%" y="30%" width="12%" height="70%" fill="#000" />
          <rect x="30%" y="35%" width="10%" height="65%" fill="#000" />
          <rect x="45%" y="25%" width="15%" height="75%" fill="#000" />
          <rect x="65%" y="38%" width="9%" height="62%" fill="#000" />
          <rect x="78%" y="32%" width="11%" height="68%" fill="#000" />
        </svg>
      </div>
      
      {/* Mid buildings */}
      <div className="absolute bottom-0 left-0 right-0 h-3/5 opacity-[0.30]">
        <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
          <rect x="0%" y="50%" width="15%" height="50%" fill="#000" />
          <rect x="18%" y="35%" width="18%" height="65%" fill="#000" />
          <rect x="40%" y="45%" width="14%" height="55%" fill="#000" />
          <rect x="58%" y="30%" width="20%" height="70%" fill="#000" />
          <rect x="82%" y="42%" width="18%" height="58%" fill="#000" />
        </svg>
        
        {/* Neon windows on mid buildings */}
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 60}%`,
              width: '2px',
              height: '3px',
              background: Math.random() > 0.5 ? '#00E6FF' : '#FF4DFF',
              boxShadow: `0 0 4px currentColor`,
              opacity: 0.6 + Math.random() * 0.4
            }}
          />
        ))}
      </div>
      
      {/* Near buildings with neon signs */}
      <div className="absolute bottom-0 left-0 right-0 h-4/5">
        <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
          <rect x="-5%" y="60%" width="25%" height="40%" fill="#0A0E15" />
          <rect x="25%" y="50%" width="22%" height="50%" fill="#0A0E15" />
          <rect x="52%" y="55%" width="28%" height="45%" fill="#0A0E15" />
          <rect x="85%" y="58%" width="20%" height="42%" fill="#0A0E15" />
        </svg>
        
        {/* Detailed neon signs and windows */}
        {Array.from({ length: 60 }).map((_, i) => {
          const colors = ['#00E6FF', '#FF4DFF', '#A64DFF', '#FFD24D'];
          const color = colors[Math.floor(Math.random() * colors.length)];
          return (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: `${Math.random() * 80}%`,
                width: `${1 + Math.random() * 3}px`,
                height: `${2 + Math.random() * 4}px`,
                background: color,
                boxShadow: `0 0 8px ${color}, 0 0 16px ${color}`,
                opacity: 0.7 + Math.random() * 0.3,
                animation: `flicker ${2 + Math.random() * 3}s infinite`
              }}
            />
          );
        })}
      </div>
      
      {/* Purple/blue fog */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-1/2 opacity-[0.30]"
        style={{
          background: 'linear-gradient(to top, rgba(166,77,255,0.4) 0%, rgba(0,230,255,0.2) 50%, transparent 100%)',
          filter: 'blur(60px)'
        }}
      />
      
      {/* Vertical light streaks */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="absolute bottom-0"
          style={{
            left: `${10 + i * 12}%`,
            width: '2px',
            height: '100%',
            background: `linear-gradient(to top, ${i % 2 === 0 ? 'rgba(0,230,255,0.2)' : 'rgba(255,77,255,0.2)'} 0%, transparent 70%)`,
            filter: 'blur(4px)',
            opacity: 0.3
          }}
        />
      ))}
      
      <style jsx>{`
        @keyframes flicker {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
          75% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}
