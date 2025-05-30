
import Hero from '../components/Hero';
import About from '../components/About';
import Benefits from '../components/Benefits';
import HowToUse from '../components/HowToUse';
import Products from '../components/Products';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      <Hero />
      <About />
      <Benefits />
      <HowToUse />
      <Products />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
