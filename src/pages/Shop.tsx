
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

const Shop = () => {
  const { addToCart } = useCart();
  const [filter, setFilter] = useState('all');

  const products = [
    {
      id: 'ceremonial-matcha',
      name: 'Ceremonial-Grade Matcha',
      description: 'Premium stone-ground matcha from Uji, Kyoto',
      price: 2499,
      image: '🍃',
      category: 'matcha',
      inStock: true,
      weight: '30g',
      features: ['Ceremonial Grade', 'Stone Ground', 'Single Origin', 'Zero Additives']
    },
    {
      id: 'starter-kit',
      name: 'Traditional Starter Kit',
      description: 'Everything you need to begin your matcha ritual',
      price: 3999,
      image: '🎋',
      category: 'kit',
      inStock: true,
      includes: ['30g Ceremonial Matcha', 'Bamboo Whisk (Chasen)', 'Bamboo Scoop (Chashaku)', 'Preparation Guide']
    },
    {
      id: 'matcha-latte',
      name: 'Matcha Latte Blend',
      description: 'Smooth blend perfect for lattes and smoothies',
      price: 1999,
      image: '🥛',
      category: 'matcha',
      inStock: false,
      weight: '50g',
      comingSoon: true
    }
  ];

  const filteredProducts = filter === 'all' ? products : products.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <Link to="/" className="text-2xl font-bold text-emerald-600">Okami Matcha</Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Our <span className="text-emerald-600">Collection</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Premium matcha and traditional tools, sourced directly from Japan
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === 'all' 
                  ? 'bg-emerald-600 text-white' 
                  : 'bg-white text-slate-600 hover:bg-emerald-50'
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => setFilter('matcha')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === 'matcha' 
                  ? 'bg-emerald-600 text-white' 
                  : 'bg-white text-slate-600 hover:bg-emerald-50'
              }`}
            >
              Matcha
            </button>
            <button
              onClick={() => setFilter('kit')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === 'kit' 
                  ? 'bg-emerald-600 text-white' 
                  : 'bg-white text-slate-600 hover:bg-emerald-50'
              }`}
            >
              Kits
            </button>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <Link to={`/product/${product.id}`}>
                  <div className="p-8 text-center">
                    <div className="text-6xl mb-6">{product.image}</div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{product.name}</h3>
                    <p className="text-slate-600 mb-4">{product.description}</p>
                    {product.weight && (
                      <p className="text-sm text-emerald-600 mb-2">Weight: {product.weight}</p>
                    )}
                    <p className="text-3xl font-bold text-emerald-600 mb-6">₹{product.price.toLocaleString()}</p>
                  </div>
                </Link>
                
                <div className="px-8 pb-8">
                  {product.inStock ? (
                    <button
                      onClick={() => addToCart(product)}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-full font-semibold transition-all duration-300"
                    >
                      Add to Cart
                    </button>
                  ) : (
                    <button className="w-full bg-stone-300 text-stone-500 py-3 rounded-full font-semibold cursor-not-allowed">
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
