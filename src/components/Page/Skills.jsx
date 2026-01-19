import React from 'react'
import { FaBootstrap, FaGithub, FaJsSquare, FaLaravel, FaReact } from 'react-icons/fa'
import { IoLogoCss3, IoLogoHtml5 } from 'react-icons/io'
import { SiMysql, SiTailwindcss } from 'react-icons/si'
import { TbBrandCpp } from 'react-icons/tb'


const skills = [
  { name: "C++", icon: <TbBrandCpp />, level: 60 },
  { name: "HTML5", icon: <IoLogoHtml5 />, level: 60 },
  { name: "CSS3", icon: <IoLogoCss3 />, level: 60 },
  { name: "JavaScript", icon: <FaJsSquare />, level: 45 },
  { name: "Bootstrap", icon: <FaBootstrap />, level: 60 },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 70 },
  { name: "React", icon: <FaReact />, level: 50 },
  { name: "GitHub", icon: <FaGithub />, level: 25 },
  { name: "Laravel", icon: <FaLaravel />, level: 10 },
];

const Skills = () => {
  return (
     <div className="w-full min-h-screen py-20 px-6 lg:px-60" accordion bg-cover bg-center bg-no-repeat
     
      style={{
    backgroundImage:
      "url('./src/assets/images/Sli.gif')",
  }}
     >
      
      {/* Title */}
      <h2 className="text-3xl lg:text-5xl font-bold text-white mb-12 flex">
        My <span className="text-blue-500 pl-4">Skills</span>
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-blue-500 p-7 rounded-xl 
                       hover:scale-105 transition-transform duration-300"
          >
            {/* Icon */}
            <div className="text-7xl  text-sky-500 flex justify-center mb-4">
              {skill.icon}
            </div>

            {/* Name + % */}
            <div className="flex justify-between text-gray-300 mb-2 text-sm">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500 rounded-full transition-all duration-700"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Skills
