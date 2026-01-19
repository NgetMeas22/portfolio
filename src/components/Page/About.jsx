import React, { useRef, useEffect, useState } from "react";

// Assuming these are your local assets
import Sli from "./src/assets/images/Sli.gif";
import img from "./src/assets/images/1.jpg";

export const About = () => {
  const text1 = "I'm a Frontend Developer";
  const text2 = "Hello, my name is Nget Meas. I’m 18 years old and currently in my second year at the Royal University of Phnom Penh, majoring in Computer Science.";
  const text3 = "I focus on building clean and responsive websites using HTML, CSS, JavaScript, React, and Tailwind CSS.";
  
  const contents = [text1, text2, text3];
  
  // Create refs for the 3 main paragraphs
  const paragraphs = [useRef(null), useRef(null), useRef(null)];
  const [visible, setVisible] = useState([false, false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          paragraphs.forEach((ref, idx) => {
            if (entry.target === ref.current && entry.isIntersecting) {
              setVisible((prev) => {
                const newState = [...prev];
                newState[idx] = true;
                return newState;
              });
            }
          });
        });
      },
      { threshold: 0.5 } // Trigger when 50% visible for smoother UX
    );

    paragraphs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <section 
        className="w-full min-h-screen bg-cover bg-center bg-no-repeat py-16 px-6 lg:px-20"
        style={{ backgroundImage: `url(${Sli})` }} // Better practice to use imported variable
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left Side: Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-56 h-56 md:w-64 md:h-64 lg:w-96 lg:h-96 group">
              {/* Spinning Glow Effect */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-70 blur-lg transition-all duration-500 group-hover:opacity-100 animate-pulse"></div>

              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl">
                <img
                  src={img} // Use the imported 'img' variable
                  alt="Nget Meas"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="text-white">
            <h2 className="text-5xl lg:text-7xl font-bold mb-6">
              About <span className="text-blue-500">Me</span>
            </h2>
            
            {/* Animated Paragraphs */}
            {contents.map((text, idx) => (
              <p
                key={idx}
                ref={paragraphs[idx]}
                className={`text-lg lg:text-xl leading-relaxed mb-6 transition-all duration-1000 ease-out ${
                  visible[idx] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                {text}
              </p>
            ))}

            <hr className="border-gray-500 my-8" />

            {/* Language Section */}
            <div className="bg-black/30 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
              <h3 className="text-3xl font-bold mb-4">
                Langu<span className="text-blue-500">ages</span>
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between max-w-xs">
                  <span className="text-xl font-medium">Khmer:</span>
                  <span className="text-blue-400 font-bold bg-blue-500/10 px-3 py-1 rounded-lg">Native</span>
                </div>
                
                <div className="flex items-center justify-between max-w-xs">
                  <span className="text-xl font-medium">English:</span>
                  <span className="text-blue-400 font-bold bg-blue-500/10 px-3 py-1 rounded-lg">Fair</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};