
const Products = () => {
  const products = [
    {
      name: "Ceremonial-Grade Matcha",
      description: "30g Tin",
      price: "₹2,499",
      image: "🍃",
      available: true
    },
    {
      name: "Starter Kit",
      description: "Tin + Bamboo Whisk + Scoop",
      price: "₹3,999",
      image: "🎋",
      available: true
    },
    {
      name: "Matcha Latte Blend",
      description: "Coming Soon",
      price: "₹1,999",
      image: "🥛",
      available: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-emerald-50 to-stone-50">
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
              className={`bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                product.available ? 'hover:-translate-y-2' : 'opacity-75'
              }`}
            >
              <div className="text-center">
                <div className="text-6xl mb-6">{product.image}</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{product.name}</h3>
                <p className="text-slate-600 mb-4">{product.description}</p>
                <p className="text-3xl font-bold text-emerald-600 mb-6">{product.price}</p>
                
                {product.available ? (
                  <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-full font-semibold transition-all duration-300">
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
  );
};

export default Products;
