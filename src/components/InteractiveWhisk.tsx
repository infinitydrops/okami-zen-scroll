
import { useState, useEffect } from 'react';

const InteractiveWhisk = () => {
  const [whiskPosition, setWhiskPosition] = useState({ x: 0, y: 0 });
  const [frothLevel, setFrothLevel] = useState(0);
  const [isWhisking, setIsWhisking] = useState(false);
  const [showRitual, setShowRitual] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setWhiskPosition({ x, y });
    
    if (!isWhisking) {
      setIsWhisking(true);
      setTimeout(() => setIsWhisking(false), 1000);
    }
    
    setFrothLevel(prev => Math.min(prev + 1, 100));
  };

  useEffect(() => {
    if (frothLevel >= 80) {
      setShowRitual(true);
    }
  }, [frothLevel]);

  return (
    <section className="py-20 bg-gradient-to-b from-emerald-50 to-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Try Whisking Your Own <span className="text-emerald-600">Matcha</span>
          </h2>
          <p className="text-xl text-slate-600 mb-4">
            Move your cursor over the bowl to whisk the perfect cup
          </p>
          <div className="text-emerald-600 text-2xl animate-bounce">↓</div>
        </div>
        
        <div className="flex justify-center">
          <div 
            className="relative w-80 h-80 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full cursor-none shadow-2xl"
            onMouseMove={handleMouseMove}
          >
            {/* Matcha bowl */}
            <div className="absolute inset-4 bg-gradient-to-br from-emerald-300 to-emerald-400 rounded-full overflow-hidden">
              {/* Matcha liquid with froth effect */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-emerald-500 to-emerald-400 transition-all duration-300"
                style={{
                  background: `radial-gradient(circle at ${whiskPosition.x}px ${whiskPosition.y}px, rgba(255,255,255,${frothLevel / 200}) 20px, transparent 40px), linear-gradient(to top, #10b981, #34d399)`
                }}
              >
                {/* Froth bubbles */}
                {Array.from({ length: Math.floor(frothLevel / 10) }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-white bg-opacity-60 rounded-full animate-pulse"
                    style={{
                      left: `${20 + (i * 15) % 60}%`,
                      top: `${20 + (i * 13) % 40}%`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  />
                ))}
              </div>
              
              {/* Whisk cursor */}
              {isWhisking && (
                <div 
                  className="absolute w-1 h-16 bg-amber-600 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-100"
                  style={{ 
                    left: whiskPosition.x, 
                    top: whiskPosition.y,
                    transform: `translate(-50%, -50%) rotate(${Math.sin(Date.now() / 100) * 10}deg)`
                  }}
                />
              )}
            </div>
            
            {/* Steam effect */}
            {frothLevel > 30 && (
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-8 bg-gradient-to-t from-white to-transparent opacity-50 animate-pulse"
                    style={{
                      left: `${i * 10 - 10}px`,
                      animationDelay: `${i * 0.5}s`,
                      animation: `pulse 2s infinite ${i * 0.5}s, float 3s ease-in-out infinite ${i * 0.3}s`
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="mt-8 max-w-md mx-auto">
          <div className="w-full bg-emerald-100 rounded-full h-2">
            <div 
              className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${frothLevel}%` }}
            />
          </div>
          <p className="text-center mt-2 text-slate-600">
            {frothLevel < 80 ? 'Keep whisking...' : 'Perfect froth achieved!'}
          </p>
        </div>
        
        {/* Ritual message */}
        {showRitual && (
          <div className="mt-12 text-center animate-fade-in">
            <div className="bg-white p-8 rounded-3xl shadow-lg max-w-md mx-auto">
              <div className="text-4xl mb-4">🍵</div>
              <h3 className="text-2xl font-bold text-emerald-600 mb-4">
                Now you're ready.
              </h3>
              <p className="text-slate-600 mb-6">
                Let's begin your ritual.
              </p>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                Shop Matcha Now
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default InteractiveWhisk;
