
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <Link to="/" className="text-2xl font-bold text-emerald-600">Okami Matcha</Link>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Get in <span className="text-emerald-600">Touch</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Have questions about matcha? Need help with your order? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-stone-50 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Send us a message</h2>
            
            {isSubmitted && (
              <div className="bg-emerald-100 border border-emerald-300 text-emerald-700 px-4 py-3 rounded-lg mb-6">
                Thank you for your message! We'll get back to you within 24 hours.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
                />
              </div>
              
              <select
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
              >
                <option value="">Select a subject</option>
                <option value="product-inquiry">Product Inquiry</option>
                <option value="order-support">Order Support</option>
                <option value="shipping">Shipping Question</option>
                <option value="general">General Question</option>
                <option value="wholesale">Wholesale Inquiry</option>
              </select>

              <textarea
                name="message"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
              />

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center transition-all duration-300"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <Mail className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Email</h3>
                    <p className="text-slate-600">hello@okamimatcha.com</p>
                    <p className="text-slate-600">support@okamimatcha.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <Phone className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Phone</h3>
                    <p className="text-slate-600">+91 98765 43210</p>
                    <p className="text-slate-500 text-sm">Mon-Fri, 9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <MapPin className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Address</h3>
                    <p className="text-slate-600">
                      Okami Matcha<br />
                      123 Wellness Street<br />
                      Mumbai, Maharashtra 400001<br />
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Follow Us</h3>
              <p className="text-slate-600 mb-4">Stay connected for matcha tips, recipes, and updates</p>
              <div className="flex space-x-4">
                <a href="#" className="bg-emerald-600 text-white p-3 rounded-full hover:bg-emerald-700 transition-colors">
                  📷
                </a>
                <a href="#" className="bg-emerald-600 text-white p-3 rounded-full hover:bg-emerald-700 transition-colors">
                  📘
                </a>
                <a href="#" className="bg-emerald-600 text-white p-3 rounded-full hover:bg-emerald-700 transition-colors">
                  🐦
                </a>
              </div>
            </div>

            <div className="bg-stone-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Quick Help</h3>
              <div className="space-y-2">
                <Link to="/faq" className="block text-emerald-600 hover:text-emerald-700 transition-colors">
                  → Frequently Asked Questions
                </Link>
                <Link to="/shop" className="block text-emerald-600 hover:text-emerald-700 transition-colors">
                  → View Our Products
                </Link>
                <a href="#" className="block text-emerald-600 hover:text-emerald-700 transition-colors">
                  → Shipping & Returns
                </a>
                <a href="#" className="block text-emerald-600 hover:text-emerald-700 transition-colors">
                  → Track Your Order
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
