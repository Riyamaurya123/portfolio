import React from "react";

const ProjectCart = ({ title, main, link }) => {
  return (
    <div
      className="relative bg-zinc-900 p-6 flex flex-col w-full sm:w-80 md:w-96 rounded-2xl 
                 transition-all duration-300 hover:scale-[1.03] border border-transparent 
                 hover:border-[#465697] hover:shadow-lg hover:shadow-[#465697]/40"
    >
      {/* Project Image */}
      <div className="w-full h-52 md:h-40 overflow-hidden rounded-xl">
        <img
          src="/images/img3.jpg"
          className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-300"
          alt="project"
        />
      </div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-semibold mt-4 px-1 text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm md:text-base mt-2 px-1 text-gray-300">{main}</p>

      {/* Buttons */}
      <div className="mt-6 px-1 flex flex-col sm:flex-row sm:justify-start gap-3">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white py-2 px-5 text-sm font-medium rounded-full bg-[#465697] hover:bg-[#3a4e86] transition"
        >
          Demo
        </a>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white py-2 px-5 text-sm font-medium rounded-full bg-[#465697] hover:bg-[#3a4e86] transition"
        >
          Source Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCart;
