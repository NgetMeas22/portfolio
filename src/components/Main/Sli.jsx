import React, { useEffect, useState } from "react";

// Importing images is safer than using string paths in Vite/React
import SliBg from "./src/assets/images/Sli.gif";
import AboutGif from "./src/assets/images/About.gif";
import Sli1 from "./src/assets/images/Sli1.gif";
import Sli2 from "./src/assets/images/Sli2.gif";
import Sli3 from "./src/assets/images/Sli3.gif";

const Sli = () => {
  const texts = ["I'm a Frontend Developer", "Welcome to My Portfolio"];
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = texts[textIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1500); // Pause at end
        }
      } else {
        // Deleting
        setCurrentText(fullText.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <div 
      className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center bg-cover bg-center bg-no-repeat px-6 lg:px-20 pt-20 lg:pt-0"
      style={{ backgroundImage: `url(${SliBg})` }}
    >
      
      {/* LEFT SIDE: Text Section */}
      <div className="lg:w-1/2 w-full flex flex-col text-center lg:text-left mt-10 lg:mt-0">
        <h4 className="text-lg sm:text-xl text-blue-500 font-semibold mb-2">
          👋 Hello there!
        </h4>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4">
          I'm <span className="text-blue-400">Meas</span>
        </h1>

        {/* Auto-typing text height-fixed to prevent layout shift */}
        <div className="h-12 sm:h-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            <span className="text-blue-500 border-r-4 border-blue-500 pr-2 animate-pulse">
              {currentText}
            </span>
          </h2>
        </div>

        <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
          Creative Frontend Developer with 1 year of experience developing modern web UI and improving user experience.
        </p>

        {/* Stats/Image Cards */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          {[Sli1, Sli2, Sli3].map((img, i) => (
            <div key={i} className="group overflow-hidden rounded-xl border border-blue-500/30 hover:border-blue-500 transition-all duration-300 shadow-lg shadow-blue-500/10">
              <img 
                className="w-full h-24 sm:h-32 object-cover transition-transform duration-500 group-hover:scale-110" 
                src={img} 
                alt={`stat-${i}`} 
              />
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE: Profile Image */}
      <div className="lg:w-1/2 flex justify-center lg:justify-end">
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-112.5 lg:h-112.5 group">
          {/* Multi-color Spinning Gradient */}
          <div className="absolute -inset-2 rounded-full bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 opacity-60 blur-xl group-hover:opacity-100 animate-spin-slow"></div>

          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-500/50 p-2 bg-gray-900">
            <img
              src={AboutGif}
              alt="Meas"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Sli;