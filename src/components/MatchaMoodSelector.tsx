
import { useState } from 'react';

const MatchaMoodSelector = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  
  const moods = [
    {
      id: 'calm-focus',
      title: 'Calm Focus',
      icon: '🧘',
      description: 'Deep concentration without the jitters',
      product: 'Ceremonial-Grade Matcha',
      benefit: 'L-theanine for sustained mental clarity'
    },
    {
      id: 'skin-glow',
      title: 'Skin Glow',
      icon: '✨',
      description: 'Antioxidant boost for radiant skin',
      product: 'Daily Ritual Blend',
      benefit: 'Packed with chlorophyll and vitamins'
    },
    {
      id: 'clean-energy',
      title: 'Clean Energy',
      icon: '⚡',
      description: 'Natural energy that lasts all day',
      product: 'Morning Boost Matcha',
      benefit: 'Caffeine with smooth release'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            What's Your <span className="text-emerald-600">Matcha Mood</span> Today?
          </h2>
          <p className="text-xl text-slate-600">
            Discover your perfect match based on how you want to feel
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {moods.map((mood) => (
            <div
              key={mood.id}
              className={`p-8 rounded-3xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                selectedMood === mood.id
                  ? 'bg-gradient-to-br from-emerald-100 to-emerald-200 shadow-xl'
                  : 'bg-gradient-to-br from-stone-50 to-emerald-50 hover:shadow-lg'
              }`}
              onClick={() => setSelectedMood(mood.id)}
            >
              <div className="text-center">
                <div className="text-6xl mb-4">{mood.icon}</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{mood.title}</h3>
                <p className="text-slate-600 mb-4">{mood.description}</p>
                
                {selectedMood === mood.id && (
                  <div className="animate-fade-in">
                    <div className="bg-white p-4 rounded-2xl shadow-md mt-4">
                      <p className="text-emerald-600 font-semibold mb-2">Perfect for you:</p>
                      <p className="text-slate-800 font-bold">{mood.product}</p>
                      <p className="text-slate-600 text-sm mt-2">{mood.benefit}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {selectedMood && (
          <div className="text-center animate-fade-in">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
              Shop Your Mood Match
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MatchaMoodSelector;
