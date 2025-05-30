
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-600 to-emerald-700">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join the <span className="text-emerald-200">Ritual Club</span>
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Stay grounded. Get perks. Be the first to know about new blends and exclusive offers.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Your email address"
              className="flex-1 py-3 px-6 rounded-full text-lg bg-white"
            />
            <Button 
              className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Join Now
            </Button>
          </div>
          
          <p className="text-emerald-200 text-sm mt-4">
            No spam, just good vibes and great matcha.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
