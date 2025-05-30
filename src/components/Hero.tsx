
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-emerald-50 via-stone-50 to-amber-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-emerald-200 blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-amber-200 blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-emerald-300 blur-lg"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Japanese character accent */}
        <div className="text-6xl font-light text-emerald-200 mb-4 opacity-60">
          抹茶
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight">
          Pure Japanese Matcha.
          <br />
          <span className="text-emerald-600">For Focus, Glow & Clean Energy.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto font-light">
          From the heart of Japan. Crafted for your daily ritual.
        </p>
        
        {/* Matcha bowl illustration placeholder */}
        <div className="w-64 h-64 mx-auto mb-8 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center shadow-lg">
          <div className="w-48 h-48 bg-gradient-to-br from-emerald-300 to-emerald-400 rounded-full flex items-center justify-center">
            <div className="text-emerald-700 text-4xl">🍵</div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Shop Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-4 text-lg rounded-full transition-all duration-300"
          >
            Learn What Matcha Is
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
