import React from 'react'

const Project = () => {
  return (
    <div className="w-full min-h-screen bg-cover bg-center bg-no-repeat py-10 px-5 lg:px-20"
    style={{
        backgroundImage:
          "url('./src/assets/images/Sli.gif')",
      }}
    >
      <div className=" mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4">
    My <span className="text-blue-400 px-1">Projects</span>
  </h1>
        <h1 className=' text-white'>Check out me projects</h1>
      </div>
      <main className='flex flex-col items-center justify-center'>
        <div className=" w-full lg:w-300 mt-20 h-40 p-3 shadow-xl text-white rounded-2xl hover:scale-105 transition-transform duration-500  bg-gray-800/60 ">
          <h1 className=' text-xl lg:text-2xl font-medium py-2' > <span className="text-blue-400 px-1">Projects 1: </span> Cafe-Golden Leaf </h1>
          <p className=' text-lg'>A responsive website built with React and Tailwind CSS.</p>
          <a className=' hover:underline text-blue-500' href="https://cafe-goldenleaf.vercel.app/">
            View Project
          </a>
        </div>
     
        <div className=" w-full lg:w-300 mt-20 h-40 p-3 shadow-xl text-white rounded-2xl hover:scale-105 transition-transform duration-500  bg-gray-800/60 ">
          <h1 className=' text-xl lg:text-2xl font-medium py-2' > <span className="text-blue-400 px-1">Projects 2: </span> NGM-Coffee</h1>
          <p className=' text-lg'>A responsive website built with Html and css no responsive this is my second project. </p>
          <a className=' hover:underline text-blue-500' href="https://ngetmeas22.github.io/NGM-COFFEE/">
            View Project
          </a>
        </div>
        <div className=" w-full lg:w-300 mt-20 h-40 p-3 shadow-xl text-white rounded-2xl hover:scale-105 transition-transform duration-500  bg-gray-800/60 ">
          <h1 className=' text-xl lg:text-2xl font-medium py-2' > <span className="text-blue-400 px-1">Projects 3: </span> Press Mart</h1>
          <p className=' text-lg'>A responsive website built with Html and css no responsive but this is my first project. </p>
          <a className=' hover:underline text-blue-500' href="https://press-mart-eta.vercel.app/">
            View Project
          </a>
        </div>
       
      </main>
    </div>
  )
}

export default Project
