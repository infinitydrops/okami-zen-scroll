
import { useState, useEffect, useRef } from 'react';

const RitualTimer = () => {
  const [timeLeft, setTimeLeft] = useState(60);
  const [isActive, setIsActive] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isActive && !isComplete) {
          setIsActive(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isActive, isComplete]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setIsComplete(true);
            setIsActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div ref={sectionRef} className="text-center mb-12">
      {!isComplete ? (
        <div className="bg-white p-8 rounded-3xl shadow-lg max-w-md mx-auto">
          <div className="text-4xl mb-4">⏱️</div>
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Your moment of calm starts now...
          </h3>
          <div className="text-6xl font-bold text-emerald-600 mb-4">
            {formatTime(timeLeft)}
          </div>
          <div className="w-full bg-emerald-100 rounded-full h-2 mb-4">
            <div 
              className="bg-emerald-500 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${((60 - timeLeft) / 60) * 100}%` }}
            />
          </div>
          <p className="text-slate-600">
            {isActive ? 'Take this time to breathe deeply...' : 'Scroll to begin your ritual'}
          </p>
        </div>
      ) : (
        <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 p-8 rounded-3xl shadow-lg max-w-md mx-auto animate-fade-in">
          <div className="text-4xl mb-4">🍵</div>
          <h3 className="text-2xl font-bold text-emerald-600 mb-4">
            Now take a sip.
          </h3>
          <p className="text-slate-700 mb-6">
            Your perfect moment of mindfulness is ready.
          </p>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
            Order Your Matcha
          </button>
        </div>
      )}
    </div>
  );
};

export default RitualTimer;
