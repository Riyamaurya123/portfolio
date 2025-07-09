import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const FeatureItem = ({ title, description }) => (
  <div className="flex items-start gap-4 py-4 max-w-xl">
    <FaArrowRight size={24} className="text-teal-400 mt-1" />
    <div>
      <h3 className="text-xl md:text-2xl font-semibold text-white">{title}</h3>
      <p className="text-sm md:text-base text-gray-300 leading-snug">
        {description}
      </p>
    </div>
  </div>
);

const About = () => {
  return (
    <div
      id="About"
      className="text-white  relative z-10 bg-black bg-opacity-40 p-8 md:p-12 rounded-xl shadow-2xl mx-4 md:mx-20 my-10"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">About</h2>

      <div className="md:flex md:items-center md:gap-10">
        <img
          src="/images/photo1.png"
          alt="About Image"
          className="w-full md:w-1/2 h-auto rounded-lg mb-6 md:mb-0 object-cover"
        />

        <div className="flex flex-col justify-center gap-4">
          <FeatureItem
            title="Frontend Developer"
            description="Passionate about creating visually appealing and highly responsive interfaces with modern technologies like React, Tailwind, Shadcn ui, Mantine, and Next.js."
          />
          <FeatureItem
            title="Backend Developer"
            description="Experienced in building robust APIs, managing databases, and ensuring secure and scalable server-side logic."
          />
          <FeatureItem
            title="Web Developer"
            description="End-to-end web development experience with full-stack projects, delivering complete and performant web applications."
          />
        </div>
      </div>
    </div>
  );
};

export default About;
