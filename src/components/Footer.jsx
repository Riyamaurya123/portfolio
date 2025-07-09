import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";

const Footer = () => {
  return (
    <div
      id="contact"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>
      <ul className="text-sm md:text-xl flex flex-col gap-2">
        <li className="flex gap-2 items-center hover:text-black">
          <MdEmail />
          mauryariya234@gmail.com
        </li>
        <li className="flex gap-2 items-center hover:text-black">
          <FaLinkedin />
          www.linkedin.com/in/riya-maurya-195914294
        </li>
        <li className="flex gap-2 items-center hover:text-black">
          <FaGithub />
          https://github.com/Riyamaurya123
        </li>
        <li className="flex gap-2 items-center hover:text-black">
          <FaPhoneVolume />
          9260941556
        </li>
      </ul>
    </div>
  );
};

export default Footer;
