export function DarkVoid() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #05060A 0%, #0B0F17 50%, #0F1220 100%)'
        }}
      />
      
      {/* Noise overlay */}
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay'
        }}
      />
      
      {/* Bokeh specks */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            background: 'rgba(255,255,255,0.3)',
            filter: `blur(${2 + Math.random() * 6}px)`,
            opacity: 0.3 + Math.random() * 0.4,
            mixBlendMode: 'screen'
          }}
        />
      ))}
      
      {/* Vignette */}
      <div 
        className="absolute inset-0 opacity-[0.18]"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, transparent 40%, #000000 100%)'
        }}
      />
    </div>
  );
}
