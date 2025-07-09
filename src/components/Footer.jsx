import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";

const Footer = () => {
  return (
    <div
      id="contact"
      className="flex flex-col md:flex-row justify-between items-center gap-8 bg-[#465697] text-white p-8 md:p-12 text-center md:text-left"
    >
      {/* Heading Section */}
      <div>
        <h1 className="text-3xl md:text-5xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-xl font-normal mt-2">
          Feel Free To Reach Out!
        </h3>
      </div>

      {/* Contact List */}
      <ul className="text-sm md:text-lg flex flex-col gap-3">
        <li className="flex items-center gap-2 hover:text-black break-all">
          <MdEmail />
          <a href="mailto:mauryariya234@gmail.com">mauryariya234@gmail.com</a>
        </li>

        <li className="flex items-center gap-2 hover:text-black break-all">
          <FaLinkedin />
          <a
            href="https://www.linkedin.com/in/riya-maurya-195914294"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/riya-maurya-195914294
          </a>
        </li>

        <li className="flex items-center gap-2 hover:text-black break-all">
          <FaGithub />
          <a
            href="https://github.com/Riyamaurya123"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/Riyamaurya123
          </a>
        </li>

        <li className="flex items-center gap-2 hover:text-black">
          <FaPhoneVolume />
          <a href="tel:9260941556">9260941556</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
