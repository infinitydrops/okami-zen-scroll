
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      category: "About Matcha",
      questions: [
        {
          question: "What is ceremonial-grade matcha?",
          answer: "Ceremonial-grade matcha is the highest quality matcha, made from the youngest tea leaves and ground using traditional stone mills. It has a vibrant green color, smooth texture, and naturally sweet taste without any bitterness."
        },
        {
          question: "What's the difference between ceremonial and culinary grade?",
          answer: "Ceremonial grade is meant to be whisked with water and consumed pure, while culinary grade is better for cooking, baking, and making lattes. Our ceremonial grade has a superior taste and texture perfect for traditional preparation."
        },
        {
          question: "How much caffeine is in matcha?",
          answer: "One serving of matcha (1-2 tsp) contains about 70mg of caffeine, roughly half that of coffee. However, matcha provides sustained energy without jitters thanks to L-theanine, which promotes calm focus."
        },
        {
          question: "What are the health benefits of matcha?",
          answer: "Matcha is rich in antioxidants (catechins), supports metabolism, provides calm energy, may boost immune function, and contains chlorophyll which supports detoxification. It's also known to promote mental clarity and focus."
        }
      ]
    },
    {
      category: "Preparation & Usage",
      questions: [
        {
          question: "How do I prepare traditional matcha?",
          answer: "Sift 1-2 tsp of matcha into a bowl, add 60ml of 70°C water, and whisk in M or W motions until frothy. The key is using cooler water (not boiling) and whisking vigorously to create the perfect texture."
        },
        {
          question: "Do I need special tools?",
          answer: "While you can start with a regular whisk, we recommend a traditional bamboo whisk (chasen) for the best results. Our Starter Kit includes all the traditional tools you need."
        },
        {
          question: "Can I make matcha lattes?",
          answer: "Absolutely! While our ceremonial grade is perfect for traditional preparation, you can also use it for lattes. Whisk the matcha with a small amount of hot water first, then add steamed milk."
        },
        {
          question: "How much matcha should I drink daily?",
          answer: "1-2 servings per day is ideal for most people. Start with one serving and see how your body responds. It's best consumed in the morning or early afternoon."
        }
      ]
    },
    {
      category: "Orders & Shipping",
      questions: [
        {
          question: "Do you offer free shipping?",
          answer: "Yes! We offer free shipping on all orders across India. Most orders are delivered within 3-5 business days."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit/debit cards, UPI payments, and cash on delivery (COD) for your convenience."
        },
        {
          question: "Can I track my order?",
          answer: "Yes, once your order ships, you'll receive a tracking link via email and SMS to monitor your package's progress."
        },
        {
          question: "What if I'm not satisfied with my purchase?",
          answer: "We offer a 30-day satisfaction guarantee. If you're not completely happy with your matcha, contact us for a full refund or exchange."
        }
      ]
    },
    {
      category: "Storage & Freshness",
      questions: [
        {
          question: "How should I store my matcha?",
          answer: "Store matcha in a cool, dry place away from light and air. Keep it in the original tin or an airtight container. For best quality, consume within 6 months of opening."
        },
        {
          question: "Should I refrigerate matcha?",
          answer: "You can refrigerate unopened matcha to extend its shelf life, but once opened, store it at room temperature in an airtight container to prevent condensation."
        },
        {
          question: "How do I know if my matcha is fresh?",
          answer: "Fresh matcha should be vibrant green, have a sweet grassy aroma, and taste smooth without bitterness. If it's brown or tastes bitter, it may be old or low quality."
        }
      ]
    }
  ];

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
            Frequently Asked <span className="text-emerald-600">Questions</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about matcha, our products, and your orders
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-800 border-b border-emerald-200 pb-2">
                {category.category}
              </h2>
              
              <div className="space-y-3">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = categoryIndex * 100 + questionIndex;
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <div key={questionIndex} className="bg-stone-50 rounded-2xl overflow-hidden">
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-stone-100 transition-colors"
                      >
                        <span className="font-semibold text-slate-800">{faq.question}</span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-emerald-600 flex-shrink-0 ml-4" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-emerald-600 flex-shrink-0 ml-4" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Still have questions?</h3>
          <p className="text-slate-600 mb-6">We're here to help you start your matcha journey</p>
          <Link 
            to="/contact"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
