
import { useState } from 'react';

const EnhancedProducts = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  
  const products = [
    {
      name: "Ceremonial-Grade Matcha",
      description: "30g Tin",
      price: "₹2,499",
      image: "🍃",
      available: true,
      hoverText: "View Ritual",
      benefits: ["Premium quality", "Stone-ground", "Single origin"]
    },
    {
      name: "Starter Kit",
      description: "Tin + Bamboo Whisk + Scoop",
      price: "₹3,999",
      image: "🎋",
      available: true,
      hoverText: "See How It's Made",
      benefits: ["Complete set", "Traditional tools", "Perfect for beginners"]
    },
    {
      name: "Matcha Latte Blend",
      description: "Coming Soon",
      price: "₹1,999",
      image: "🥛",
      available: false,
      hoverText: "Notify Me",
      benefits: ["Creamy texture", "Perfect sweetness", "Café quality"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-emerald-50 to-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Our <span className="text-emerald-600">Collection</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Premium matcha, carefully curated for your wellness journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div 
              key={index}
              className={`relative bg-white p-8 rounded-3xl shadow-lg transition-all duration-500 overflow-hidden ${
                product.available ? 'hover:shadow-2xl hover:-translate-y-4' : 'opacity-75'
              }`}
              onMouseEnter={() => setHoveredProduct(index)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Floating particles effect on hover */}
              {hoveredProduct === index && product.available && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-emerald-300 rounded-full opacity-60 animate-float"
                      style={{
                        left: `${20 + (i * 15) % 60}%`,
                        top: `${20 + (i * 13) % 60}%`,
                        animationDelay: `${i * 0.2}s`,
                        animationDuration: '3s'
                      }}
                    />
                  ))}
                </div>
              )}
              
              <div className="text-center relative z-10">
                <div className={`text-6xl mb-6 transition-transform duration-300 ${
                  hoveredProduct === index ? 'scale-110' : ''
                }`}>
                  {product.image}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{product.name}</h3>
                <p className="text-slate-600 mb-4">{product.description}</p>
                <p className="text-3xl font-bold text-emerald-600 mb-6">{product.price}</p>
                
                {/* Benefits list on hover */}
                {hoveredProduct === index && (
                  <div className="mb-6 animate-fade-in">
                    <ul className="text-sm text-slate-600 space-y-1">
                      {product.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center justify-center">
                          <span className="text-emerald-500 mr-2">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {product.available ? (
                  <div className="space-y-3">
                    <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-full font-semibold transition-all duration-300">
                      Add to Cart
                    </button>
                    {hoveredProduct === index && (
                      <p className="text-emerald-600 font-medium animate-fade-in">
                        {product.hoverText}
                      </p>
                    )}
                  </div>
                ) : (
                  <button className="w-full bg-stone-300 text-stone-500 py-3 rounded-full font-semibold cursor-not-allowed">
                    Coming Soon
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnhancedProducts;
