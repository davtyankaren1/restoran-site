import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onLoadingChange?: (isLoading: boolean) => void;
}

const LoadingScreen = ({ onLoadingChange }: LoadingScreenProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Notify parent component about loading state
    onLoadingChange?.(isLoading);
    
    // Simulate loading time or wait for resources to load
    const timer = setTimeout(() => {
      setFadeOut(true);
      
      // After fade animation completes, remove from DOM
      const fadeTimer = setTimeout(() => {
        setIsLoading(false);
        onLoadingChange?.(false);
      }, 1000); // 1 second for fade out animation
      
      return () => clearTimeout(fadeTimer);
    }, 1000); // 1 second loading screen display

    return () => clearTimeout(timer);
  }, [onLoadingChange]);

  if (!isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 overflow-hidden bg-gradient-to-t from-[#74ACDF] to-[#74ACDF] via-white flex items-center justify-center z-[9999] transition-opacity duration-1000 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      {/* Animated background patterns - refined to be more subtle and elegant */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Refined floating particles - smaller and more transparent */}
        <div className="absolute inset-0">
          {Array.from({ length: 40 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: `${0.2 + Math.random() * 0.6}px`,
                height: `${0.2 + Math.random() * 0.6}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `particle ${5 + Math.random() * 10}s infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        {/* More elegant wave patterns - thinner and more transparent */}
        <div 
          className="absolute inset-x-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" 
          style={{
            top: '30%',
            height: '0.5px',
            animation: 'wave-slow 15s infinite ease-in-out'
          }}
        ></div>
        <div 
          className="absolute inset-x-0 bg-gradient-to-r from-transparent via-white/8 to-transparent" 
          style={{
            top: '50%',
            height: '0.5px',
            animation: 'wave-medium 18s infinite ease-in-out'
          }}
        ></div>
        <div 
          className="absolute inset-x-0 bg-gradient-to-r from-transparent via-white/6 to-transparent" 
          style={{
            top: '70%',
            height: '0.5px',
            animation: 'wave-fast 20s infinite ease-in-out'
          }}
        ></div>
        
        {/* Argentina flag color accents - more subtle gradients */}
        <div 
          className="absolute top-0 left-0 w-full bg-gradient-to-r from-[#74ACDF]/15 via-transparent to-transparent" 
          style={{
            height: '0.5px',
            animation: 'slide-right 20s infinite ease-in-out'
          }}
        ></div>
        <div 
          className="absolute bottom-0 right-0 w-full bg-gradient-to-l from-[#74ACDF]/15 via-transparent to-transparent" 
          style={{
            height: '0.5px',
            animation: 'slide-left 20s infinite ease-in-out'
          }}
        ></div>
        <div 
          className="absolute inset-y-0 left-0 bg-gradient-to-b from-transparent via-[#F6B40E]/15 to-transparent" 
          style={{
            width: '0.5px',
            animation: 'slide-down 20s infinite ease-in-out'
          }}
        ></div>
        <div 
          className="absolute inset-y-0 right-0 bg-gradient-to-t from-transparent via-[#F6B40E]/15 to-transparent" 
          style={{
            width: '0.5px',
            animation: 'slide-up 20s infinite ease-in-out'
          }}
        ></div>
        
        {/* Large diffused blobs with Argentina flag colors */}
        {Array.from({ length: 3 }).map((_, i) => (
          <div 
            key={`blob-${i}`}
            className="absolute blur-[100px] opacity-10"
            style={{
              width: `${400 + Math.random() * 300}px`,
              height: `${400 + Math.random() * 300}px`,
              borderRadius: '50%',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: i === 0 ? 'radial-gradient(circle, rgba(116,172,223,0.4) 0%, transparent 70%)' : 
                         i === 1 ? 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)' : 
                                  'radial-gradient(circle, rgba(246,180,14,0.4) 0%, transparent 70%)',
              transform: `scale(${0.8 + Math.random() * 0.5})`,
              animation: `float-medium ${20 + Math.random() * 15}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 10}s`
            }}
          />
        ))}
        
        {/* Blurred light beams with Argentina flag colors */}
        {Array.from({ length: 4 }).map((_, i) => (
          <div 
            key={`blur-beam-${i}`}
            className="absolute blur-2xl opacity-10"
            style={{
              width: `${300 + Math.random() * 400}px`,
              height: `${20 + Math.random() * 40}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? 
                'linear-gradient(90deg, transparent, rgba(116,172,223,0.3), transparent)' : 
                'linear-gradient(90deg, transparent, rgba(246,180,14,0.3), transparent)',
              transform: `rotate(${Math.random() * 180}deg)`,
              animation: `pulse-slow ${10 + Math.random() * 8}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
        
        {/* Twinkling stars - smaller, more varied, and more subtle */}
        <div className="absolute inset-0">
          {Array.from({ length: 25 }).map((_, i) => (
            <div 
              key={`star-${i}`}
              className="absolute bg-white"
              style={{
                width: `${0.2 + Math.random() * 0.4}px`,
                height: `${0.2 + Math.random() * 0.4}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.1 + Math.random() * 0.3,
                animation: `twinkle ${2 + Math.random() * 4}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content container */}
      <div className="relative w-full h-full flex flex-col items-center justify-center z-10">
        <div className="flex flex-col items-center justify-center gap-8">
          {/* Logo */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-white/5 animate-pulse-slow"></div>
            <img 
              src="/pigeon.gif" 
              alt="Logo" 
              className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 object-contain" 
            />
          </div>
          
          {/* Restaurant name */}
          <div className="flex flex-col items-center">
            <div className="max-w-xs text-center">
              <h1 className="text-black font-montserrat tracking-wider">
                <span className="block text-2xl sm:text-3xl md:text-4xl font-light mb-1">Armenian Restaurante</span>
                <span className="block text-3xl sm:text-4xl md:text-5xl font-bold uppercase">PIGEON</span>
              </h1>
            </div>
          </div>
          
          {/* Loading bar */}
          <div className="w-64 sm:w-80 mt-2">
            <div className="h-1 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white animate-[loading_1s_ease-in-out]" 
                style={{ animation: 'loading 1s ease-in-out forwards' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
