import React from "react";

const ProjectCart = ({ title, main, link }) => {
  return (
    <div
      className="relative bg-zinc-900 p-5 md:p-7 flex flex-col w-80  shadow-lg rounded-2xl 
                    transition-all duration-300 hover:scale-105 hover:shadow-xl border border-transparent 
                    hover:border-[#465697] hover:shadow-[#465697]/50"
    >
      <img src="/images/img3.jpg" className="p-4" alt="" />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      <div className="mt-2 p-2 flex gap-2 md:gap-4">
        <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg ,d:py-2 md-px-4 hover:opacity-25 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Demo
        </button>
        <a
          href={link}
          target="blank"
          className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg ,d:py-2 md-px-4 hover:opacity-25 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          source Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCart;
