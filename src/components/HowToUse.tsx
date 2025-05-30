
const HowToUse = () => {
  const steps = [
    { step: "01", action: "Scoop", description: "2 bamboo scoops of matcha" },
    { step: "02", action: "Whisk", description: "Add warm water, whisk in 'M' motion" },
    { step: "03", action: "Sip", description: "Enjoy your moment of zen" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            The <span className="text-emerald-600">Ritual</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Three simple steps to your perfect cup
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Step number */}
              <div className="text-8xl font-bold text-emerald-100 mb-4">
                {step.step}
              </div>
              
              {/* Action circle */}
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl font-bold">{step.action}</span>
              </div>
              
              <p className="text-slate-600 text-lg">{step.description}</p>
              
              {/* Connecting line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-1 bg-emerald-300 rounded-full"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105">
            Explore the Matcha Ritual
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
