import React, { useEffect, useState } from "react";


import SliBg from '../../assets/images/Sli.gif'; 
import Sli1 from '../../assets/images/Sli1.gif';
import Sli2 from '../../assets/images/Sli2.gif';
import Sli3 from '../../assets/images/Sli3.gif';
import About from '../../assets/images/About.gif';


const Sli = () => {
  const texts = ["I'm a Frontend Developer", "Welcome to My Portfolio"];

  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[textIndex];

      if (!isDeleting) {
        setCurrentText(fullText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setCurrentText(fullText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 60 : 120);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);


  return (
   <div 
      className="min-h-screen flex flex-col-reverse bg-cover bg-center bg-no-repeat lg:flex-row pt-20 lg:pt-40 justify-center px-6 lg:px-20"
      style={{
        
        backgroundImage: `url(${SliBg})`,
      }}
    >
      

      
     {/* Text Section */}
  <div className="lg:w-1/2 w-full flex flex-col px-4 sm:px-6 lg:pr-40 text-center lg:text-left">
  {/* Greeting */}
  <h4 className="text-lg sm:text-xl text-blue-500 font-semibold pt-10 lg:pt-0 mb-2">
    👋 Hello there!
  </h4>

  {/* Name */}
  <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4">
    I'm <span className="text-blue-400 px-1">Meas</span>
  </h1>

  {/* Auto-typing text */}
  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
    {" "}
    <span className="text-blue-500 border-r-2 border-blue-500 pr-1 animate-pulse">
      {currentText}
    </span>
  </h2>

  {/* Description */}
  <p className="text-base sm:text-lg text-gray-300 mb-8">
    Creative Frontend Developer with 1 year of experience developing modern web UI and improving user experience.
  </p>

  {/* 3 Stats Cards */}
  <div className="grid grid-cols-3 pt-20 sm:grid-cols-3 gap-4 sm:gap-6">
    <div className="bg-gray-900 border border-blue-500 rounded-xl hover:scale-105 transition-transform duration-300 text-center">
     <img className=" object-cover object-center rounded-xl" src={Sli1} alt="" />
    </div>
    <div className="bg-gray-900 border border-blue-500 rounded-xl hover:scale-105 transition-transform duration-300 text-center">
     <img className=" object-cover object-center rounded-xl" src={Sli2} alt="" />
    </div>
    <div className="bg-gray-900 border border-blue-500 rounded-xl hover:scale-105 transition-transform duration-300 text-center">
     <img className=" object-cover object-center rounded-xl" src={Sli3} alt="" />
    </div>

   
  </div>
</div>


      <div className="relative w-50 h-50 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-100 lg:h-100 lg:ml-10 rounded-full group">
  {/* Animated gradient border */}
  <div className="
    absolute -inset-2 rounded-full bg-linear-to-r bg-[linear-gradient(90deg,#6366f1,#8b5cf6,#d946ef,#ec4899,#f43f5e,#f97316,#facc15)]
    opacity-70 blur-lg transition-all duration-500 group-hover:opacity-100 animate-spin
  "></div>

  {/* Centered Image */}
  <div className="relative w-full h-full  rounded-full overflow-hidden border-2 lg:border-5 border-blue-500">
    <img
      src={About} // replace with your image path
      alt="Meas"
      className="w-full h-full object-cover rounded-full"
    />
  </div>
</div>


    </div>
  );
};

export default Sli;
