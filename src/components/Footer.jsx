import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#1e2547] text-white px-6 py-16 md:px-16"
    >
      {/* Gradient Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-[160px] pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Riya Maurya</h2>
          <p className="text-gray-300 leading-relaxed">
            Frontend Developer specializing in React, Next.js and modern web
            technologies. Passionate about building clean, responsive and
            user-friendly web applications.
          </p>
        </div>

        {/* Quick Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center gap-3 hover:text-white transition">
              <MdEmail />
              <a href="mailto:mauryariya234@gmail.com">
                mauryariya234@gmail.com
              </a>
            </li>

            <li className="flex items-center gap-3 hover:text-white transition">
              <FaPhoneVolume />
              <a href="tel:9260941556">+91 92609 41556</a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Social</h3>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/riya-maurya-195914294"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-indigo-500 transition duration-300"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="https://github.com/Riyamaurya123"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-purple-500 transition duration-300"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="relative max-w-6xl mx-auto border-t border-white/10 mt-12 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Riya Maurya — Built with React & Tailwind
        CSS
      </div>
    </footer>
  );
};

export default Footer;
