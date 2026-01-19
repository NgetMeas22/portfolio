import React from 'react';

// Recommended: Import your background gif
import SliBg from "./src/assets/images/Sli.gif";

const Project = () => {
  const projectData = [
    {
      id: 1,
      title: "Cafe-Golden Leaf",
      desc: "A modern, fully responsive website built with React and Tailwind CSS featuring smooth transitions.",
      link: "https://cafe-goldenleaf.vercel.app/",
      tech: ["React", "Tailwind CSS"]
    },
    {
      id: 2,
      title: "NGM-Coffee",
      desc: "My second project exploring coffee shop layouts. Built using pure HTML and CSS.",
      link: "https://ngetmeas22.github.io/NGM-COFFEE/",
      tech: ["HTML", "CSS"]
    },
    {
      id: 3,
      title: "Press Mart",
      desc: "My very first project. A foundational web layout focusing on structure and basic styling.",
      link: "https://press-mart-eta.vercel.app/",
      tech: ["HTML", "CSS"]
    }
  ];

  return (
    <div 
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat py-20 px-6 lg:px-20"
      style={{ backgroundImage: `url(${SliBg})` }}
    >
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          My <span className="text-blue-400">Projects</span>
        </h1>
        <p className="text-gray-300 text-lg">
          Take a look at my journey from my first website to my latest React applications.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project) => (
          <div 
            key={project.id}
            className="group relative bg-gray-900/80 border border-white/10 p-6 rounded-3xl backdrop-blur-md hover:scale-105 hover:border-blue-500/50 transition-all duration-500 shadow-xl"
          >
            {/* Project Number Badge */}
            <span className="absolute top-4 right-6 text-blue-500/30 font-black text-5xl group-hover:text-blue-500/50 transition-colors">
              0{project.id}
            </span>

            <h2 className="text-2xl font-bold text-white mt-4 mb-2">
              <span className="text-blue-400">Project:</span> {project.title}
            </h2>

            <p className="text-gray-400 mb-6 min-h-15">
              {project.desc}
            </p>

            {/* Tech Tags */}
            <div className="flex gap-2 mb-6">
              {project.tech.map((t, i) => (
                <span key={i} className="text-xs font-semibold bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20">
                  {t}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-white/5">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center text-blue-400 font-semibold hover:text-white transition-colors"
              >
                View Live Demo 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;