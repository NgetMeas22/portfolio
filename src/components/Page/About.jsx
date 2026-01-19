import React, { useRef, useEffect, useState } from "react";

export const About = () => {
  const text1 = "I'm Frontend Developer";
  const text2 = "Hello, my name is Nget Meas. I’m 18 years old and currently in my second year at the Royal University of Phnom Penh, majoring in Computer Science. I have three siblings, and I am the third child. I am talkative and friendly, and I enjoy interacting with people and learning new things.";
  const text3 = "I am also a Frontend Developer with skills in HTML, CSS, JavaScript, React, and Tailwind CSS, focused on building clean and responsive websites.";
  const text4 = "Laguages I speak are Khmer (native) and English (fair).";
  // Refs for each paragraph
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
      { threshold: 1 }
    );

    paragraphs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <section className="w-full min-h-screen bg-cover bg-center bg-no-repeat py-16 px-6 lg:px-20"
      
       style={{
    backgroundImage:
      "url('./src/assets/images/Sli.gif')",
  }}
      >
        <div className="max-w-7xl mx-auto grid  bg-amber50 grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left Image */}
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-75 lg:h-75 lg:ml-10 rounded-full group">
            <div className="absolute -inset-1 rounded-full bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 opacity-70 blur-lg transition-all duration-500 group-hover:opacity-100 animate-spin"></div>

            <div className="relative w-full h-full rounded-full overflow-hidden border-2 lg:border-5 border-blue-500">
              <img
                src="./src/assets/images/1.jpg"
                alt="Meas"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-4xl lg:text-7xl font-bold flex text-white mb-4">
              About <span className="text-blue-500 mb-5 pl-4 lg:text-7xl text-4xl">Me</span>
            </h2>
            
            {[text1, text2, text3, text4].map((text, idx) => (
              <p
                key={idx}
                ref={paragraphs[idx]}
                className={`text-white text-xl leading-relaxed mb-10 transition-all duration-1500 ${
                  visible[idx] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-15"
                }`}
              >
                {text}
              </p>
            ))}
            <hr className=" text-white"/>
            <h2 className="text-3xl lg:text-3xl font-bold text-white mt-2 mb-5">
        Langu<span className="text-blue-500">ages :</span>
      </h2>
            <h2 className="text-xl lg:text-xl font-medium text-white">
        Khmer: <span className="text-blue-500">Native</span>
      </h2>
            <h2 className="text-xl lg:text-xl font-medium text-white">
        English: <span className="text-blue-500">Fair</span>
      </h2>
      
          </div>
          
        </div>
      </section>
      
    </div>
    
  );
};
