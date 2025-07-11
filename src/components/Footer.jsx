import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#374477] text-white px-6 py-12 md:px-16"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-[150px] pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Let's Connect</h1>
          <p className="text-lg text-gray-200">
            Whether you have a question, want to work together, or just want to
            say hi — feel free to drop a message or connect via my socials.
          </p>
        </div>

        <ul className="flex flex-col gap-4 text-base md:text-lg text-gray-300">
          <li className="flex items-center gap-3 hover:text-white transition-all duration-200">
            <MdEmail className="text-xl" />
            <a href="mailto:mauryariya234@gmail.com" className="break-all">
              mauryariya234@gmail.com
            </a>
          </li>

          <li className="flex items-center gap-3 hover:text-white transition-all duration-200">
            <FaLinkedin className="text-xl" />
            <a
              href="https://www.linkedin.com/in/riya-maurya-195914294"
              target="_blank"
              rel="noopener noreferrer"
              className="break-all"
            >
              linkedin.com/in/riya-maurya-195914294
            </a>
          </li>

          <li className="flex items-center gap-3 hover:text-white transition-all duration-200">
            <FaGithub className="text-xl" />
            <a
              href="https://github.com/Riyamaurya123"
              target="_blank"
              rel="noopener noreferrer"
              className="break-all"
            >
              github.com/Riyamaurya123
            </a>
          </li>

          <li className="flex items-center gap-3 hover:text-white transition-all duration-200">
            <FaPhoneVolume className="text-xl" />
            <a href="tel:9260941556">+91 92609 41556</a>
          </li>
        </ul>
      </div>

      <div className="relative z-10 mt-12 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Riya Maurya. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
