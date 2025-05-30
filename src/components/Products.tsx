
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

const Products = () => {
  const { addToCart } = useCart();

  const products = [
    {
      id: "ceremonial-matcha",
      name: "Okami Ceremonial Matcha",
      subtitle: "Premium",
      description: "30g Tin",
      tagline: "Smooth. Vibrant. Crafted for your daily ritual.",
      fullDescription: "Our highest-grade matcha, stone-ground in small batches from the Uji region of Japan. Vibrant green, velvety texture, and rich umami taste — perfect for sipping, meditating, and replacing your coffee habit with intention.",
      price: 1499,
      image: "🍃",
      available: true,
      badge: "Best Seller",
      ctaText: "Add to Cart"
    },
    {
      id: "starter-kit",
      name: "Okami Matcha Starter Kit",
      subtitle: "",
      description: "Complete Set",
      tagline: "Your ritual begins here.",
      fullDescription: "Everything you need to start your matcha journey — whether you're new to the art or upgrading your morning energy. Includes our premium ceremonial matcha and traditional Japanese tools for whisking the perfect cup.",
      price: 2799,
      image: "🎋",
      available: true,
      badge: "Complete Set",
      ctaText: "Start Your Ritual",
      includes: ["30g Premium Tin", "Bamboo Whisk (Chasen)", "Matcha Scoop (Chashaku)"]
    },
    {
      id: "culinary-matcha",
      name: "Okami Culinary Matcha",
      subtitle: "For Recipes",
      description: "100g Pouch",
      tagline: "Blend. Bake. Boost.",
      fullDescription: "A more robust matcha, crafted for smoothies, lattes, and recipes. Slightly more bitter than ceremonial grade, but still clean, vibrant, and rich in antioxidants. Ideal for matcha lattes, energy bites, and desserts.",
      price: 899,
      image: "🥛",
      available: true,
      badge: "New",
      ctaText: "Shop Now"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-stone-50 to-emerald-50">
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
              className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {product.badge}
                </div>
              )}

              {/* Floating matcha dust effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                <div className="absolute top-10 left-10 w-2 h-2 bg-emerald-200 rounded-full animate-float"></div>
                <div className="absolute bottom-20 right-8 w-1 h-1 bg-emerald-300 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 left-6 w-1.5 h-1.5 bg-emerald-100 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
              </div>

              <div className="text-center relative z-10">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {product.image}
                </div>
                
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-slate-800 mb-1">
                    {product.name}
                  </h3>
                  {product.subtitle && (
                    <p className="text-emerald-600 font-medium text-sm">{product.subtitle}</p>
                  )}
                  <p className="text-slate-500 text-sm">{product.description}</p>
                </div>

                <p className="text-emerald-700 font-medium italic mb-4 min-h-[24px]">
                  {product.tagline}
                </p>

                <p className="text-slate-600 text-sm mb-6 leading-relaxed min-h-[60px]">
                  {product.fullDescription}
                </p>

                {/* What's included for starter kit */}
                {product.includes && (
                  <div className="mb-6">
                    <p className="text-xs text-slate-500 mb-2">Includes:</p>
                    <div className="text-xs text-slate-600 space-y-1">
                      {product.includes.map((item, i) => (
                        <div key={i} className="flex items-center justify-center">
                          <span className="text-emerald-500 mr-2">•</span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <p className="text-3xl font-bold text-emerald-600 mb-6">
                  ₹{product.price.toLocaleString()}
                </p>
                
                {product.available ? (
                  <div className="space-y-3">
                    <Link 
                      to={`/product/${product.id}`}
                      className="block w-full bg-stone-100 hover:bg-stone-200 text-slate-700 py-2 rounded-full font-medium text-sm transition-all duration-300"
                    >
                      View Details
                    </Link>
                    <button
                      onClick={() => addToCart(product)}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                    >
                      {product.ctaText}
                    </button>
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

        {/* Call to action */}
        <div className="text-center mt-12">
          <Link 
            to="/shop"
            className="inline-block bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
