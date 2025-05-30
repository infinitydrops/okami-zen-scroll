
const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Japanese calligraphy accent */}
          <div className="text-8xl font-light text-emerald-100 mb-8 opacity-50">
            狼
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8">
            Meet <span className="text-emerald-600">Okami</span>
          </h2>
          
          <div className="prose prose-xl mx-auto text-slate-600 leading-relaxed">
            <p className="text-2xl mb-6 font-light">
              At Okami, we bring <strong className="text-emerald-600">ceremonial-grade matcha</strong> straight from Japan — no fillers, no nonsense.
            </p>
            <p className="text-xl">
              Just pure green energy for your glow-up.
            </p>
          </div>
          
          {/* Decorative elements */}
          <div className="flex justify-center items-center mt-12 space-x-8">
            <div className="w-16 h-1 bg-emerald-300 rounded-full"></div>
            <div className="text-emerald-400 text-2xl">🌿</div>
            <div className="w-16 h-1 bg-emerald-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
