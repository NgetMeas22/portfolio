import React, { useEffect, useState } from 'react'
import { FaBootstrap, FaGithub, FaJsSquare, FaLaravel, FaReact } from 'react-icons/fa'
import { IoLogoCss3, IoLogoHtml5 } from 'react-icons/io'
import { SiTailwindcss } from 'react-icons/si'
import { TbBrandCpp } from 'react-icons/tb'

// Best practice: Import your background
import SliBg from "./src/assets/images/Sli.gif";

const skills = [
  { name: "C++", icon: <TbBrandCpp />, level: 60, color: "text-blue-400" },
  { name: "HTML5", icon: <IoLogoHtml5 />, level: 60, color: "text-orange-500" },
  { name: "CSS3", icon: <IoLogoCss3 />, level: 60, color: "text-blue-500" },
  { name: "JavaScript", icon: <FaJsSquare />, level: 45, color: "text-yellow-400" },
  { name: "Bootstrap", icon: <FaBootstrap />, level: 60, color: "text-purple-500" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 70, color: "text-sky-400" },
  { name: "React", icon: <FaReact />, level: 50, color: "text-cyan-400" },
  { name: "GitHub", icon: <FaGithub />, level: 25, color: "text-gray-400" },
  { name: "Laravel", icon: <FaLaravel />, level: 10, color: "text-red-500" },
];

const Skills = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Small delay to trigger the progress bar animation after component mounts
    setTimeout(() => setAnimate(true), 300);
  }, []);

  return (
    <div className="w-full min-h-screen py-20 px-6 lg:px-40 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${SliBg})` }}
    >
      
      {/* Title */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-4xl lg:text-6xl font-bold text-white">
          My <span className="text-blue-500">Skills</span>
        </h2>
        <p className="text-gray-400 mt-4 text-lg">My technical expertise and proficiency levels.</p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group bg-gray-900/60 backdrop-blur-md border border-blue-500/30 p-8 rounded-2xl 
                       hover:scale-105 hover:border-blue-500 transition-all duration-500 shadow-xl"
          >
            {/* Icon with Glow Effect */}
            <div className={`text-6xl ${skill.color} flex justify-center mb-6 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(59,130,246,0.8)] transition-all`}>
              {skill.icon}
            </div>

            {/* Name + % */}
            <div className="flex justify-between items-center text-white mb-3 px-1">
              <span className="font-bold text-lg">{skill.name}</span>
              <span className="text-blue-400 font-mono">{skill.level}%</span>
            </div>

            {/* Progress Bar Container */}
            <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden p-[2px]">
              {/* Actual Progress Bar */}
              <div
                className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-1000 ease-out"
                style={{ 
                    width: animate ? `${skill.level}%` : '0%',
                    boxShadow: '0 0 10px rgba(59,130,246,0.5)'
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills