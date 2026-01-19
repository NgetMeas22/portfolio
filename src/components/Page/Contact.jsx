import React from 'react'
import { FaFacebookF, FaGithub, FaInstagram, FaPhoneAlt, FaTiktok, FaTwitter } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { MdEmail, MdLocalPhone } from 'react-icons/md'


const Contact = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 bg-cover bg-center bg-no-repeat "
     style={{
    backgroundImage:
      "url('./src/assets/images/Sli.gif')",
  }}
    >

  <div className="grid grid-cols-1  lg:grid-cols-2 shadow-lg max-w-5xl w-full bg-gray-900/55 rounded-2xl overflow-hidden">

    {/* Left Section */}
    <div
      className="h-64 lg:h-auto bg-cover bg-center bg-no-repeat"
    
    >
      <h1 className="text-center pt-5 lg:pt-25 text-3xl lg:text-5xl font-bold text-white">
        Contact<span className="text-blue-400 pl-2 px-1">Me</span>
      </h1>
      <p className="p-6 text-sm lg:px-20 text-center text-sky-200">
        Feel free to get in touch with me if you have any questions.I will be happy to respond.
      </p>
     <div className=" px-10 lg:pt-10 text-sm space-y-2">
              <div className="flex text-blue-500 items-center gap-2">
                <FaLocationDot/>
                <span> St 06, Dang kor, Phnom Penh</span>
              </div>
              <div className=" text-blue-500 flex items-center gap-2">
                <MdLocalPhone/>
                <a href="tel:+855966698074" className="hover:underline">
                  +855 966 698 074
                </a>
              </div>
              <div className="flex text-blue-500 items-center gap-2">
                <MdEmail/>
                <a
                  href="mailto:measm2519@gmail.com"
                  className="hover:underline"
                >
                  measm2519@gmail.com
                </a>
              </div>

            </div>
      
      <div className="flex items-center text-sm lg:pt-20  gap-3 px-10 py-5">
              <a
                aria-label="Facebook"
                href="https://web.facebook.com/nget.meas.2025"
                className="p-2 text-sky-600 rounded-full  hover:bg-blue-500/55 border-2 border-sky-700 transition"
              >
                <FaFacebookF/>
              </a>
              <a
                aria-label="Instagram"
                href="#"
                className="p-2 text-sky-600 rounded-full  hover:bg-blue-500/55 border-2 border-sky-700 transition"
              >
                <FaInstagram/>
              </a>
              <a
                aria-label="TikTok"
                href="https://www.tiktok.com/@ngetmeas2"
                className="p-2 text-sky-600 rounded-full  hover:bg-blue-500/55 border-2 border-sky-700 transition"
              >
                <FaTiktok/>
              </a>
              <a
                aria-label="Github"
                href="https://github.com/NgetMeas22"
                className="p-2 text-sky-600 rounded-full  hover:bg-blue-500/55 border-2 border-sky-700 transition"
              >
                <FaGithub/>
              </a>
           
            </div>
    </div>

    {/* Right Form */}
    <div className="p-8">
      <form className="space-y-5">

        {/* Full Name */}
        <div>
          <label className="block text-white font-medium">Full Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full px-4 py-3 text-white rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>


        {/* Email */}
        <div>
          <label className="block text-white font-medium">Email</label>
          <input
            type="email"
            placeholder="Youremail@gmail.com"
            className="w-full px-4 py-3 text-white rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

      
        {/* About Me */}
        <div>
          <label className="block text-white font-medium">About Me</label>
          <textarea
            rows="4"
            placeholder="Write a short summary about yourself..."
            className="w-full px-4 py-3 text-white rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none resize-none"
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-sky-600 hover:bg-sky-800 text-white hover:text-gray-400 py-3 rounded-xl font-medium transition"
        >
          Save CV
        </button>

      </form>
    </div>

  </div>
</div>
  )
}

export default Contact


