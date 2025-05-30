
import { useState, useEffect } from 'react';

const FloatingCTA = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      const windowHeight = window.innerHeight;
      setScrollPosition(position);
      
      // Show after scrolling past hero section
      setIsVisible(position > windowHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getCTAText = () => {
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollPercent = scrollPosition / (documentHeight - windowHeight);

    if (scrollPercent < 0.3) return 'Discover Matcha';
    if (scrollPercent < 0.7) return 'Start Your Ritual';
    return 'Add to Cart';
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 animate-fade-in">
      <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-110 flex items-center space-x-2">
        <span className="text-2xl">🍃</span>
        <span>{getCTAText()}</span>
      </button>
    </div>
  );
};

export default FloatingCTA;
