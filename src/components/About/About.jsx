import React from "react";
import { FaArrowRight } from "react-icons/fa6";

// Reusable feature item
const FeatureItem = ({ title, description }) => (
  <div className="flex items-start gap-4 py-4 max-w-xl">
    <FaArrowRight size={20} className="text-teal-400 mt-1 shrink-0" />
    <div>
      <h3 className="text-lg md:text-2xl font-semibold text-white">{title}</h3>
      <p className="text-sm md:text-base text-gray-300 leading-snug">
        {description}
      </p>
    </div>
  </div>
);

// Main About component
const About = () => {
  return (
    <div
      id="About"
      className="text-white relative z-10 bg-black bg-opacity-40 px-6 py-10 sm:px-10 md:px-16 rounded-xl shadow-2xl mx-4 md:mx-20 my-10"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6">
        About
      </h2>
      <div className="flex justify-center text-center">
        <p className=" text-gray-400 max-w-4xl mx-auto text-sm sm:text-base md:text-lg">
          {" "}
          I’m a passionate web developer driven by curiosity and creativity. I
          love exploring emerging technologies and trends to craft high-quality,
          innovative digital experiences that stand out. Vision I’m a passionate
          web developer driven by curiosity and creativity. I’m a passionate web
          developer driven by curiosity and creativity love exploring emerging
          technologies.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src="/images/photo1.png"
            alt="About"
            className="w-full h-auto rounded-xl object-cover shadow-lg"
          />
        </div>

        {/* Text/Features Section */}
        <div className="w-full lg:w-1/2">
          <FeatureItem
            title="Frontend Developer"
            description="Passionate about creating visually appealing and highly responsive interfaces with modern technologies like React, Tailwind, Shadcn UI, Mantine, and Next.js."
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
