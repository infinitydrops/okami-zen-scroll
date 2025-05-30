
import { Zap, CircleCheck } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: "☕",
      title: "No Jitters",
      description: "Calm energy without the caffeine crash"
    },
    {
      icon: "✨",
      title: "Skin Glow",
      description: "Packed with antioxidants & chlorophyll"
    },
    {
      icon: "🧘",
      title: "Mental Clarity",
      description: "Natural L-theanine for razor-sharp focus"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-stone-50 to-emerald-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Why <span className="text-emerald-600">Matcha?</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Three powerful reasons to make matcha your daily ritual
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="text-6xl mb-6">{benefit.icon}</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{benefit.title}</h3>
              <p className="text-slate-600 text-lg leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
