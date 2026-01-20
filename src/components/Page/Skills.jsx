import React, { useRef, useState, useEffect } from 'react'
import { FaBootstrap, FaGithub, FaJsSquare, FaLaravel, FaReact } from 'react-icons/fa'
import { IoLogoCss3, IoLogoHtml5 } from 'react-icons/io'
import { SiTailwindcss } from 'react-icons/si'
import { TbBrandCpp } from 'react-icons/tb'

import Sli from '../../assets/images/Sli.gif'

const skills = [
  { name: "C++", icon: <TbBrandCpp />, level: 60 },
  { name: "HTML5", icon: <IoLogoHtml5 />, level: 60 },
  { name: "CSS3", icon: <IoLogoCss3 />, level: 75 },
  { name: "JavaScript", icon: <FaJsSquare />, level: 45 },
  { name: "Bootstrap", icon: <FaBootstrap />, level: 75 },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 75 },
  { name: "React", icon: <FaReact />, level: 50 },
  { name: "GitHub", icon: <FaGithub />, level: 25 },
  { name: "Laravel", icon: <FaLaravel />, level: 15 },
];

const Skills = () => {
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(entry.target) // Animate only once
        }
      },
      { threshold: 0.3 } // Trigger when 30% of section is visible
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={sectionRef}
      className="w-full min-h-screen py-20 px-6 lg:px-60 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Sli})` }}
    >
      {/* Title */}
      <h2 className="text-3xl lg:text-5xl font-bold text-white mb-12 flex">
        My <span className="text-blue-500 pl-4">Skills</span>
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`bg-gray-900 border border-blue-500 p-7 rounded-xl 
                        transform opacity-0 translate-y-10
                        ${inView ? 'animate-slide-up' : ''}`}
            style={{
              animationDelay: `${index * 150}ms`,
              animationFillMode: 'forwards',
            }}
          >
            {/* Icon */}
            <div className="text-7xl text-sky-500 flex justify-center mb-4">
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
                className={`h-full bg-blue-500 rounded-full transition-all duration-1000 ease-out`}
                style={{
                  width: inView ? `${skill.level}%` : '0%',
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Tailwind custom animation */}
      <style>
        {`
          @keyframes slideUp {
            0% { opacity: 0; transform: translateY(200px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-slide-up {
            animation: slideUp 1.5s forwards;
          }
        `}
      </style>
    </div>
  )
}

export default Skills
