import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nav = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={`w-full fixed z-50 top-0 transition-all duration-300 px-6 lg:px-16 py-4 ${
      scrolled 
      ? "bg-black/80 backdrop-blur-lg border-b border-gray-800 py-3" 
      : "bg-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white tracking-tighter">
          NgetMeas<span className="text-blue-500">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center bg-gray-900/40 px-8 py-2 border border-white/10 rounded-full backdrop-blur-md">
          <ul className="flex text-sm font-semibold gap-10">
            {nav.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  className={`relative transition-colors duration-300 hover:text-blue-400 ${
                    location.pathname === item.href ? "text-blue-400" : "text-gray-300"
                  } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 
                    after:bg-blue-500 after:transition-all hover:after:w-full`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="hidden lg:block bg-blue-600 hover:bg-blue-500 text-white px-8 py-2.5 rounded-full font-bold transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] active:scale-95"
        >
          Contact Me
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 z-60"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`h-1 w-8 bg-white rounded-full transition-all ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`}></span>
          <span className={`h-1 w-8 bg-white rounded-full transition-all ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`h-1 w-8 bg-white rounded-full transition-all ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/95 flex flex-col items-center justify-center gap-8 transition-all duration-500 lg:hidden ${
        menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}>
        <ul className="flex flex-col items-center gap-8 text-2xl font-bold">
          {nav.map((item, index) => (
            <li key={index}>
              <Link
                to={item.href}
                className="text-white hover:text-blue-500 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="/contact"
          onClick={() => setMenuOpen(false)}
          className="bg-blue-600 text-white px-10 py-3 rounded-full font-bold text-xl"
        >
          Contact Me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;