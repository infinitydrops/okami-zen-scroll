
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { ShoppingCart, Heart, Star } from 'lucide-react';

const EnhancedProducts = () => {
  const { addToCart } = useCart();
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  const products = [
    {
      id: "ceremonial-matcha",
      name: "Okami Ceremonial Matcha",
      subtitle: "Premium Grade",
      description: "30g Tin",
      tagline: "Smooth. Vibrant. Crafted for your daily ritual.",
      price: 1499,
      originalPrice: 1799,
      image: "🍃",
      available: true,
      badge: "Best Seller",
      rating: 4.9,
      reviews: 127,
      category: "premium"
    },
    {
      id: "starter-kit",
      name: "Okami Matcha Starter Kit",
      subtitle: "Complete Set",
      description: "Everything you need",
      tagline: "Your ritual begins here.",
      price: 2799,
      originalPrice: 3299,
      image: "🎋",
      available: true,
      badge: "Popular",
      rating: 4.8,
      reviews: 89,
      category: "kit"
    },
    {
      id: "culinary-matcha",
      name: "Okami Culinary Matcha",
      subtitle: "For Recipes",
      description: "100g Pouch",
      tagline: "Blend. Bake. Boost.",
      price: 899,
      originalPrice: 1199,
      image: "🥛",
      available: true,
      badge: "New",
      rating: 4.7,
      reviews: 34,
      category: "culinary"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-stone-50 via-emerald-50 to-stone-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-stone-200 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Premium <span className="text-emerald-600">Matcha Collection</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Handpicked from Japan's finest tea gardens, crafted for your daily ritual
          </p>
          <div className="flex justify-center items-center space-x-4 text-sm text-slate-500">
            <span className="flex items-center">
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
              Free shipping on all orders
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
              30-day money back guarantee
            </span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 relative overflow-hidden border border-white/20"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Badge */}
              {product.badge && (
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold z-10 ${
                  product.badge === 'Best Seller' ? 'bg-yellow-400 text-yellow-900' :
                  product.badge === 'Popular' ? 'bg-emerald-600 text-white' :
                  'bg-purple-500 text-white'
                }`}>
                  {product.badge}
                </div>
              )}

              {/* Floating particles effect */}
              <div className={`absolute inset-0 transition-opacity duration-500 ${
                hoveredProduct === product.id ? 'opacity-30' : 'opacity-0'
              }`}>
                <div className="absolute top-16 left-8 w-2 h-2 bg-emerald-300 rounded-full animate-float"></div>
                <div className="absolute bottom-24 right-6 w-1 h-1 bg-emerald-400 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 left-4 w-1.5 h-1.5 bg-emerald-200 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
              </div>

              {/* Heart icon */}
              <button className="absolute top-4 left-4 p-2 rounded-full bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110">
                <Heart className="w-4 h-4 text-slate-400 hover:text-red-500 transition-colors" />
              </button>

              <div className="text-center relative z-10">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300 filter group-hover:drop-shadow-lg">
                  {product.image}
                </div>
                
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-slate-800 mb-1 group-hover:text-emerald-700 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-emerald-600 font-medium text-sm">{product.subtitle}</p>
                  <p className="text-slate-500 text-sm">{product.description}</p>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center mb-4">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                    ))}
                  </div>
                  <span className="text-sm text-slate-600">{product.rating} ({product.reviews})</span>
                </div>

                <p className="text-emerald-700 font-medium italic mb-4 min-h-[24px]">
                  "{product.tagline}"
                </p>

                <div className="mb-6">
                  <div className="flex items-center justify-center space-x-2">
                    <p className="text-3xl font-bold text-emerald-600">
                      ₹{product.price.toLocaleString()}
                    </p>
                    {product.originalPrice && (
                      <p className="text-lg text-slate-400 line-through">
                        ₹{product.originalPrice.toLocaleString()}
                      </p>
                    )}
                  </div>
                  {product.originalPrice && (
                    <p className="text-sm text-emerald-600 font-medium">
                      Save ₹{(product.originalPrice - product.price).toLocaleString()}
                    </p>
                  )}
                </div>
                
                {product.available ? (
                  <div className="space-y-3">
                    <Link 
                      to={`/product/${product.id}`}
                      className="block w-full bg-stone-100 hover:bg-stone-200 text-slate-700 py-2 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105"
                    >
                      Quick View
                    </Link>
                    <button
                      onClick={() => addToCart(product)}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 group/button"
                    >
                      <ShoppingCart className="w-4 h-4 group-hover/button:animate-bounce" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                ) : (
                  <button className="w-full bg-stone-300 text-stone-500 py-3 rounded-full font-semibold cursor-not-allowed">
                    Coming Soon
                  </button>
                )}
              </div>

              {/* Hover overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-emerald-600/10 to-transparent rounded-3xl transition-opacity duration-500 ${
                hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <Link 
            to="/shop"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore Full Collection
          </Link>
          <p className="text-sm text-slate-500 mt-4">
            ✨ Free shipping • 30-day returns • Sustainably sourced
          </p>
        </div>
      </div>
    </section>
  );
};

export default EnhancedProducts;
