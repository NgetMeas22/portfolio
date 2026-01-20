import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full bg-black border-b sticky z-50 top-0 border-gray-700 shadow-md px-6 lg:px-16 py-7 ">
     
      <div className="flex items-center justify-between">
       
        <h1 className="text-2xl font-bold flex text-white">
          Portfolio <span className="text-blue-400">.</span>
        </h1>

        
        <div className="hidden lg:flex bg-gray-700/50 px-50 py-2 border border-gray-600 rounded-full">
         <ul className="flex text-lg font-medium gap-15">
  {nav.map((item, index) => (
    <li key={index}>
    
      <Link
        to={item.href} 
        className="relative text-gray-200 transition-colors duration-300 hover:text-blue-400
                  after:content-[''] after:absolute after:left-2 after:-bottom-1 after:h-0.5 after:w-0
                  after:bg-blue-500 after:transition-all after:duration-350 after:-translate-x-2
                  hover:after:w-full"
      >
        {item.name}
      </Link>
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
  <button className="relative text-white transition-colors duration-300 px-2 py-2 rounded-xl hover:bg-gray-600 bg-gray-700/50 hover:text-blue-400
                 ">
    Contact Me
  </button>
</Link>
      <ul className="flex flex-col gap-6 text-lg font-medium mt-5">
        {nav.map((item, index) => (
          <li key={index}>
      {/* 1. Change <a> to <Link> */}
      {/* 2. Change href to to */}
      <Link
        to={item.href} 
       className="relative text-gray-300 transition-colors duration-300 hover:text-blue-400
                  after:content-[''] after:absolute after:left-2 after:-bottom-1 after:h-0.5 after:w-0
                  after:bg-blue-500 after:transition-all after:duration-350 after:-translate-x-2
                  hover:after:w-full"
      >
        {item.name}
      </Link>
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