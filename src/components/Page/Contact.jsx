import React from 'react'
import { FaFacebookF, FaGithub, FaInstagram, FaTiktok } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { MdEmail, MdLocalPhone } from 'react-icons/md'

// Best practice: Import your background
import SliBg from "./src/assets/images/Sli.gif";

const Contact = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${SliBg})` }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 shadow-2xl max-w-5xl w-full bg-gray-900/80 rounded-3xl overflow-hidden backdrop-blur-md border border-white/10">

        {/* Left Section: Info */}
        <div className="p-8 lg:p-12 flex flex-col justify-between bg-blue-600/10">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Contact <span className="text-blue-400">Me</span>
            </h1>
            <p className="text-sky-200/80 text-lg mb-8">
              I’m currently looking for new opportunities. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-white group">
                <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500 transition-colors">
                  <FaLocationDot className="text-blue-400 group-hover:text-white" />
                </div>
                <span className="text-lg">St 06, Dang Kor, Phnom Penh</span>
              </div>

              <div className="flex items-center gap-4 text-white group">
                <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500 transition-colors">
                  <MdLocalPhone className="text-blue-400 group-hover:text-white" />
                </div>
                <a href="tel:+855966698074" className="text-lg hover:text-blue-400 transition-colors">
                  +855 966 698 074
                </a>
              </div>

              <div className="flex items-center gap-4 text-white group">
                <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500 transition-colors">
                  <MdEmail className="text-blue-400 group-hover:text-white" />
                </div>
                <a href="mailto:measm2519@gmail.com" className="text-lg hover:text-blue-400 transition-colors break-all">
                  measm2519@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-12">
            <h3 className="text-white font-semibold mb-4 uppercase tracking-widest text-sm">Follow Me</h3>
            <div className="flex gap-4">
              {[
                { icon: <FaFacebookF />, link: "https://web.facebook.com/nget.meas.2025" },
                { icon: <FaInstagram />, link: "#" },
                { icon: <FaTiktok />, link: "https://www.tiktok.com/@ngetmeas2" },
                { icon: <FaGithub />, link: "https://github.com/NgetMeas22" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-800 text-blue-400 border border-blue-500/30 hover:bg-blue-500 hover:text-white hover:-translate-y-1 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section: Form */}
        <div className="p-8 lg:p-12 bg-white/5">
          <form className="space-y-6">
            <div>
              <label className="block text-blue-400 font-medium mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Nget Meas"
                className="w-full px-4 py-3 bg-gray-800/50 text-white rounded-xl border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-blue-400 font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full px-4 py-3 bg-gray-800/50 text-white rounded-xl border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-blue-400 font-medium mb-2">Message</label>
              <textarea
                rows="5"
                placeholder="How can I help you?"
                className="w-full px-4 py-3 bg-gray-800/50 text-white rounded-xl border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none resize-none transition-all"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 transition-all active:scale-95"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Contact