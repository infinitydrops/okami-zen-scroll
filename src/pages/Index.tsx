
import Hero from '../components/Hero';
import About from '../components/About';
import Benefits from '../components/Benefits';
import InteractiveWhisk from '../components/InteractiveWhisk';
import MatchaMoodSelector from '../components/MatchaMoodSelector';
import HowToUse from '../components/HowToUse';
import RitualTimer from '../components/RitualTimer';
import EnhancedProducts from '../components/EnhancedProducts';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import FloatingCTA from '../components/FloatingCTA';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      <Hero />
      <About />
      <Benefits />
      <InteractiveWhisk />
      <MatchaMoodSelector />
      <HowToUse />
      <RitualTimer />
      <EnhancedProducts />
      <Testimonials />
      <Newsletter />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
