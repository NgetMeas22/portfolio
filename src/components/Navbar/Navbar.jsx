import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = [
    { name: "Home", href: "/" },
    { name: "About", href: "/" },
    { name: "Skills", href: "/" },
    { name: "Projects", href: "/" },
    { name: "Contact", href: "/" },
  ];

  return (
    <nav className="w-full bg-black border-b sticky z-50 top-0 border-gray-700 shadow-md px-6 lg:px-16 py-7 ">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold flex text-white">
          Portfolio <span className="text-blue-400">.</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden lg:flex bg-gray-700/50 px-50 py-2 border border-gray-600 rounded-full">
          <ul className="flex text-lg font-medium gap-15">
            {nav.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="relative text-gray-200 transition-colors duration-300 hover:text-blue-800
                  after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:w-0
                  after:bg-blue-500 after:transition-all after:duration-200 after:-translate-x-1/2
                  hover:after:w-full"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
       {/* Desktop Button */}
       
       <Link
  to="/contact"
  className="hidden lg:block bg-blue-500 font-medium hover:bg-blue-700 text-white px-6 py-2 rounded-full transition duration-300 text-center"
>
  Contact Me
</Link>

{/* Mobile Button */}
<button
  className="lg:hidden text-3xl text-white"
  onClick={() => setMenuOpen(true)}
>
  ☰
</button>
</div>

{/* Mobile Menu */}
{menuOpen && (
  <>
    {/* Overlay */}
    <div
      className="fixed inset-0 bg-black/50 z-40"
      onClick={() => setMenuOpen(false)}
    />

    {/* Sidebar */}
    <div className="lg:hidden fixed top-0 right-0 h-full w-[70%] bg-gray-800 p-6 shadow-lg z-50">
      {/* Close Button */}
      <button
        className="text-white text-3xl absolute top-4 right-4"
        onClick={() => setMenuOpen(false)}
      >
        ✕
      </button>
         {/* Mobile CTA */}
      <Link to="/contact">
  <button className="mt-10 px-5 bg-blue-500 hover:bg-blue-700 text-white py-2 rounded-full transition">
    Contact Me
  </button>
</Link>
      <ul className="flex flex-col gap-6 text-lg font-medium mt-5">
        {nav.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
             className="relative text-gray-300 transition-colors duration-300 hover:text-white
                  after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:w-0
                  after:bg-blue-500 after:transition-all after:duration-200 after:-translate-x-1/2
                  hover:after:w-full"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>

     
    </div>
  </>
)}


    </nav>
  );
};

export default Navbar;