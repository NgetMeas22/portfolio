import React from 'react'
import { FaGithub, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

        <p className="text-sm">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>

        <div className="flex items-center text-lg   gap-3 px-10 py-5">
                     <a
                       aria-label="Facebook"
                       href="https://web.facebook.com/nget.meas.2025"
                       className="p-2 text-sky-600 rounded-full border-2 border-sky-700
                  transition-transform duration-600 ease-out
                  hover:bg-blue-500/55 hover:-translate-y-2"
                     >
                       <FaFacebook/>
                     </a>
                     <a
                       aria-label="Instagram"
                       href="#"
                       className="p-2 text-sky-600 rounded-full border-2 border-sky-700
                  transition-transform duration-500 ease-out
                  hover:bg-blue-500/55 hover:-translate-y-2"
                     >
                       <FaInstagram/>
                     </a>
                     <a
                       aria-label="TikTok"
                       href="https://www.tiktok.com/@ngetmeas2"
                       className="p-2 text-sky-600 rounded-full border-2 border-sky-700
                  transition-transform duration-500 ease-out
                  hover:bg-blue-500/55 hover:-translate-y-2"
                     >
                       <FaTiktok/>
                     </a>
                     <a
                       aria-label="Github"
                       href="https://github.com/NgetMeas22"
                       className="p-2 text-sky-600 rounded-full border-2 border-sky-700
                  transition-transform duration-500 ease-out
                  hover:bg-blue-500/55 hover:-translate-y-2"
                     >
                       <FaGithub/>
                     </a>
                  
                   </div>
      </div>
    </footer>
  )
}

export default Footer
