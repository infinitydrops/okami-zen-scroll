
const Testimonials = () => {
  const testimonials = [
    {
      quote: "Okami is my 9AM ritual now.",
      author: "Priya, Mumbai",
      avatar: "👩"
    },
    {
      quote: "My skin's glowing. My brain's calm. I'm never going back to coffee.",
      author: "Arjun, Bangalore",
      avatar: "👨"
    },
    {
      quote: "Finally, a matcha that tastes like the real deal from Japan.",
      author: "Sakshi, Delhi",
      avatar: "👩"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            What Our <span className="text-emerald-600">Community</span> Says
          </h2>
          <p className="text-xl text-slate-600">
            Real stories from real matcha lovers
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-emerald-50 to-stone-50 p-8 rounded-3xl hover:shadow-lg transition-all duration-300"
            >
              <div className="text-5xl mb-4">{testimonial.avatar}</div>
              <blockquote className="text-xl text-slate-700 mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <cite className="text-emerald-600 font-semibold">
                — {testimonial.author}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
