
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 'morning-matcha-ritual',
      title: 'The Perfect Morning Matcha Ritual',
      excerpt: 'Start your day with intention and calm energy. Learn how to create a mindful morning matcha practice.',
      image: '🌅',
      category: 'Rituals',
      date: '2024-01-15',
      readTime: '5 min read',
      featured: true
    },
    {
      id: 'matcha-vs-coffee',
      title: 'Matcha vs Coffee: The Ultimate Energy Showdown',
      excerpt: 'Discover why matcha provides sustained energy without the crash, and how it compares to your morning coffee.',
      image: '⚡',
      category: 'Health',
      date: '2024-01-12',
      readTime: '7 min read'
    },
    {
      id: 'japanese-tea-ceremony',
      title: 'The Art of Japanese Tea Ceremony',
      excerpt: 'Explore the ancient traditions and mindful practices behind the Japanese tea ceremony.',
      image: '🍵',
      category: 'Culture',
      date: '2024-01-10',
      readTime: '6 min read'
    },
    {
      id: 'matcha-skincare-benefits',
      title: '5 Ways Matcha Transforms Your Skin',
      excerpt: 'From antioxidants to chlorophyll, discover how matcha can give you that natural glow.',
      image: '✨',
      category: 'Beauty',
      date: '2024-01-08',
      readTime: '4 min read'
    },
    {
      id: 'ceremonial-vs-culinary',
      title: 'Ceremonial vs Culinary Matcha: What\'s the Difference?',
      excerpt: 'Understanding the grades of matcha and when to use each type for the best experience.',
      image: '🎋',
      category: 'Education',
      date: '2024-01-05',
      readTime: '5 min read'
    },
    {
      id: 'matcha-recipes',
      title: '3 Delicious Matcha Recipes Beyond Tea',
      excerpt: 'From matcha lattes to desserts, explore creative ways to enjoy your daily dose of green goodness.',
      image: '🥛',
      category: 'Recipes',
      date: '2024-01-03',
      readTime: '8 min read'
    }
  ];

  const categories = ['All', 'Rituals', 'Health', 'Culture', 'Beauty', 'Education', 'Recipes'];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <Link to="/" className="text-2xl font-bold text-emerald-600">Okami Matcha</Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-emerald-50 to-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Matcha <span className="text-emerald-600">Journal</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Discover the art of matcha, wellness tips, and mindful living practices
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full font-medium transition-all bg-white text-slate-600 hover:bg-emerald-50 hover:text-emerald-600 border border-stone-200"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {posts.filter(post => post.featured).map((post) => (
          <div key={post.id} className="bg-emerald-50 rounded-3xl p-8 mb-16">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="text-emerald-600 font-medium">{post.category}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                  {post.title}
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center space-x-6 text-slate-500 mb-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{post.readTime}</span>
                  </div>
                </div>
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
              <div className="text-center">
                <div className="text-8xl mb-4">{post.image}</div>
                <p className="text-emerald-600 font-medium">Featured Article</p>
              </div>
            </div>
          </div>
        ))}

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.filter(post => !post.featured).map((post) => (
            <article key={post.id} className="bg-white border border-stone-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-6 text-center bg-stone-50">
                <div className="text-4xl mb-2">{post.image}</div>
                <span className="text-emerald-600 text-sm font-medium">{post.category}</span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3 leading-tight">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-slate-500 text-xs mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="bg-emerald-50 rounded-3xl p-8 text-center mt-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Stay Updated with Our Latest Articles
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Get weekly insights on matcha, wellness, and mindful living delivered to your inbox.
          </p>
          <Link
            to="/"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
          >
            Join Our Newsletter
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
