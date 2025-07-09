import React from "react";
import TextChanger from "../TextChanger";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20 animate-fade-in">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-3xl md:text-6xl font-bold leading-normal tracking-tighter flex gap-3">
          Hi, <TextChanger />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight mt-2">
          Hello! I’m a dedicated web developer with a love for learning and
          creating. I thrive on exploring new technologies and trends to ensure
          my projects meet the highest standards of quality and innovation.
        </p>
        <a href="#contact">
          <button className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:px-4 hover:opacity-85 duration-300 transform hover:scale-105 font-semibold rounded-3xl bg-[#465697] transition-all">
            Contact Me
          </button>
          <div className="absolute top-[50px] left-[-100px] w-[300px] h-[300px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        </a>
      </div>
      <div className="relative w-[400px] h-[500px] mx-auto">
        {/* Gradient Border Animation */}
        <div className="absolute inset-0 rounded-[50%/40%] bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 animate-spin-slow p-1">
          <div className="w-full h-full rounded-[50%/40%] bg-black p-1">
            {/* Actual Image */}
            <img
              src="/images/photo.jpg"
              alt="Profile"
              className="rounded-[50%/40%] w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
