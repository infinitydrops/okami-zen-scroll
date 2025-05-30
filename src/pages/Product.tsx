
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../hooks/useCart';
import { ArrowLeft, Star } from 'lucide-react';

const Product = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const products = {
    'ceremonial-matcha': {
      id: 'ceremonial-matcha',
      name: 'Ceremonial-Grade Matcha',
      description: 'Our premium ceremonial-grade matcha is stone-ground from the finest tea leaves in Uji, Kyoto. This vibrant green powder delivers a smooth, umami-rich flavor with no bitterness.',
      price: 2499,
      image: '🍃',
      weight: '30g',
      inStock: true,
      features: ['Ceremonial Grade', 'Stone Ground', 'Single Origin', 'Zero Additives'],
      benefits: ['Natural energy boost', 'Rich in antioxidants', 'Supports focus and calm', 'Promotes healthy skin'],
      preparation: [
        'Sift 1-2 tsp matcha into your bowl',
        'Add 60ml of 70°C water',
        'Whisk in M or W motions until frothy',
        'Enjoy mindfully'
      ],
      reviews: [
        { name: 'Priya S.', rating: 5, comment: 'The best matcha I\'ve ever tasted. So smooth and vibrant!' },
        { name: 'Arjun M.', rating: 5, comment: 'Perfect for my morning ritual. No bitterness at all.' },
        { name: 'Kavya R.', rating: 4, comment: 'Great quality, though a bit pricey. Worth it for special occasions.' }
      ]
    },
    'starter-kit': {
      id: 'starter-kit',
      name: 'Traditional Starter Kit',
      description: 'Begin your matcha journey with our complete traditional kit. Includes everything you need to prepare authentic Japanese matcha at home.',
      price: 3999,
      image: '🎋',
      inStock: true,
      includes: ['30g Ceremonial Matcha', 'Bamboo Whisk (Chasen)', 'Bamboo Scoop (Chashaku)', 'Preparation Guide'],
      features: ['Complete Set', 'Traditional Tools', 'Perfect for Beginners', 'Gift Ready'],
      benefits: ['Learn proper technique', 'Traditional experience', 'Everything included', 'Great value'],
      preparation: [
        'Use the bamboo scoop to measure matcha',
        'Sift into your bowl',
        'Add warm water (70°C)',
        'Whisk with the chasen until frothy'
      ],
      reviews: [
        { name: 'Rohit K.', rating: 5, comment: 'Perfect starter set! The tools are beautiful and functional.' },
        { name: 'Sneha T.', rating: 5, comment: 'Bought this as a gift and they loved it. Great packaging too.' }
      ]
    },
    'matcha-latte': {
      id: 'matcha-latte',
      name: 'Matcha Latte Blend',
      description: 'Coming soon! Our specially formulated blend perfect for lattes, smoothies, and everyday enjoyment.',
      price: 1999,
      image: '🥛',
      weight: '50g',
      inStock: false,
      comingSoon: true
    }
  };

  const product = products[id as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-emerald-600 hover:text-emerald-700">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-emerald-600">Okami Matcha</Link>
          <Link to="/shop" className="flex items-center text-slate-600 hover:text-emerald-600">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Shop
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Product Image */}
          <div className="bg-emerald-50 rounded-3xl p-16 text-center">
            <div className="text-8xl mb-8">{product.image}</div>
            {product.weight && (
              <p className="text-emerald-600 font-medium">{product.weight}</p>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-slate-800 mb-4">{product.name}</h1>
              <p className="text-xl text-slate-600 leading-relaxed">{product.description}</p>
            </div>

            <div className="text-4xl font-bold text-emerald-600">
              ₹{product.price.toLocaleString()}
            </div>

            {/* Features */}
            {product.features && (
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Features</h3>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, index) => (
                    <span key={index} className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Includes */}
            {product.includes && (
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">What's Included</h3>
                <ul className="space-y-2">
                  {product.includes.map((item, index) => (
                    <li key={index} className="flex items-center text-slate-600">
                      <span className="text-emerald-500 mr-3">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Add to Cart */}
            {product.inStock ? (
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <label className="text-slate-700 font-medium">Quantity:</label>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="border border-stone-300 rounded-lg px-3 py-2"
                  >
                    {[1, 2, 3, 4, 5].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
                <button
                  onClick={() => addToCart({ ...product, quantity })}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-full font-semibold text-lg transition-all duration-300"
                >
                  Add to Cart - ₹{(product.price * quantity).toLocaleString()}
                </button>
              </div>
            ) : (
              <button className="w-full bg-stone-300 text-stone-500 py-4 rounded-full font-semibold text-lg cursor-not-allowed">
                Coming Soon
              </button>
            )}
          </div>
        </div>

        {/* Preparation Guide */}
        {product.preparation && (
          <div className="mt-16 bg-emerald-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">How to Prepare</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {product.preparation.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-lg font-bold mb-4 mx-auto">
                    {index + 1}
                  </div>
                  <p className="text-slate-600">{step}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Reviews */}
        {product.reviews && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">What Our Customers Say</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {product.reviews.map((review, index) => (
                <div key={index} className="bg-white border border-stone-200 rounded-2xl p-6">
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-slate-600 ml-2">by {review.name}</span>
                  </div>
                  <p className="text-slate-600 italic">"{review.comment}"</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
