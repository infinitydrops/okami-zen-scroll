
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { Minus, Plus, Trash2, ArrowLeft } from 'lucide-react';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, total, itemCount } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <div className="bg-white shadow-sm">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-emerald-600">Okami Matcha</Link>
            <Link to="/shop" className="flex items-center text-slate-600 hover:text-emerald-600">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Continue Shopping
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-6 py-20 text-center">
          <div className="text-6xl mb-8">🛒</div>
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Your cart is empty</h1>
          <p className="text-slate-600 mb-8">Discover our premium matcha collection</p>
          <Link 
            to="/shop"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-emerald-600">Okami Matcha</Link>
          <Link to="/shop" className="flex items-center text-slate-600 hover:text-emerald-600">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Continue Shopping
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-slate-800 mb-8">Your Cart ({itemCount} items)</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{item.image}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-800">{item.name}</h3>
                    <p className="text-emerald-600 font-medium">₹{item.price.toLocaleString()}</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center hover:bg-stone-50"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center hover:bg-stone-50"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="text-lg font-semibold text-slate-800">
                    ₹{(item.price * item.quantity).toLocaleString()}
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 p-2"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-2xl p-6 shadow-sm h-fit">
            <h3 className="text-xl font-semibold text-slate-800 mb-6">Order Summary</h3>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span>₹{total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t pt-3 flex justify-between text-lg font-semibold text-slate-800">
                <span>Total</span>
                <span>₹{total.toLocaleString()}</span>
              </div>
            </div>

            <Link
              to="/checkout"
              className="w-full block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-full font-semibold transition-all duration-300"
            >
              Proceed to Checkout
            </Link>

            <div className="mt-4 text-center text-sm text-slate-500">
              <p>🔒 Secure checkout</p>
              <p>Free shipping on all orders</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
