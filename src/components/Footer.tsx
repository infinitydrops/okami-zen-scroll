
const Footer = () => {
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Shop", href: "#" },
    { name: "Rituals", href: "#" },
    { name: "Contact", href: "#" }
  ];

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-emerald-400 mb-2">Okami Matcha</h3>
            <p className="text-slate-400">From Kyoto to your cup</p>
          </div>
          
          {/* Navigation */}
          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center gap-8">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-slate-300 hover:text-emerald-400 transition-colors duration-300 text-lg"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Japanese wave pattern */}
          <div className="flex justify-center items-center mb-8">
            <div className="w-16 h-1 bg-emerald-400 rounded-full"></div>
            <div className="mx-4 text-emerald-400 text-2xl">🌊</div>
            <div className="w-16 h-1 bg-emerald-400 rounded-full"></div>
          </div>
          
          {/* Copyright */}
          <p className="text-slate-500 text-sm">
            © 2024 Okami Matcha. Crafted with love for your wellness journey.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
