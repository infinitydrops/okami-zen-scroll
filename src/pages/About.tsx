
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <Link to="/" className="text-2xl font-bold text-emerald-600">Okami Matcha</Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-emerald-50 to-white">
        <div className="container mx-auto px-6 text-center">
          <div className="text-8xl font-light text-emerald-100 mb-8 opacity-50">狼</div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Our <span className="text-emerald-600">Story</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From the ancient tea gardens of Kyoto to your modern ritual, 
            we bring you the purest matcha experience.
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">The Wolf's Journey</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Okami (狼) means "wolf" in Japanese — a symbol of loyalty, strength, and pack mentality. 
                Just like wolves, we believe in the power of ritual, community, and staying true to our nature.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">From Kyoto, With Love</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Our matcha is sourced directly from the historic tea gardens of Uji, Kyoto — 
                  the birthplace of ceremonial matcha. Each batch is stone-ground by master artisans 
                  who have perfected their craft over generations.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  We work closely with family-owned farms that have been cultivating tea for centuries, 
                  ensuring every sip connects you to this ancient tradition.
                </p>
              </div>
              <div className="bg-emerald-50 rounded-3xl p-12 text-center">
                <div className="text-6xl mb-4">🌿</div>
                <p className="text-emerald-700 font-medium">Premium Quality</p>
                <p className="text-slate-600 text-sm">Ceremonial Grade Only</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-emerald-50 rounded-3xl p-12 text-center order-2 md:order-1">
                <div className="text-6xl mb-4">🧘</div>
                <p className="text-emerald-700 font-medium">Mindful Ritual</p>
                <p className="text-slate-600 text-sm">Ancient Wisdom, Modern Life</p>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Made for Modern India</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  While our matcha comes from Japan, it's crafted for the modern Indian lifestyle. 
                  We understand the need for clean energy, mental clarity, and moments of calm 
                  in our fast-paced world.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Whether you're starting your day, taking a work break, or winding down, 
                  our matcha fits seamlessly into your wellness routine.
                </p>
              </div>
            </div>

            <div className="text-center bg-emerald-50 rounded-3xl p-12">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Our Promise</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl mb-3">🌱</div>
                  <h4 className="font-semibold text-slate-800 mb-2">Pure & Natural</h4>
                  <p className="text-slate-600 text-sm">No fillers, no additives. Just pure matcha.</p>
                </div>
                <div>
                  <div className="text-4xl mb-3">🤝</div>
                  <h4 className="font-semibold text-slate-800 mb-2">Fair & Ethical</h4>
                  <p className="text-slate-600 text-sm">Supporting farmers and sustainable practices.</p>
                </div>
                <div>
                  <div className="text-4xl mb-3">💚</div>
                  <h4 className="font-semibold text-slate-800 mb-2">Community First</h4>
                  <p className="text-slate-600 text-sm">Building a community of mindful tea lovers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-slate-800 mb-6">Ready to Begin Your Ritual?</h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Join thousands who have made matcha a part of their daily practice.
          </p>
          <Link 
            to="/shop"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
          >
            Explore Our Collection
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
