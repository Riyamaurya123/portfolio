import React from "react";
import TextChanger from "../TextChanger";

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-center md:items-start gap-10 px-6 py-10 md:px-20 md:py-20 animate-fade-in">
      {/* Left Section */}
      <div className="w-full md:w-2/4 md:pt-10 text-center md:text-left">
        <h1 className="text-3xl md:text-6xl font-bold leading-normal tracking-tighter flex justify-center md:justify-start gap-3">
          Hi, <TextChanger />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight mt-4 md:mt-2">
          Hello! I’m a dedicated web developer with a love for learning and
          creating. I thrive on exploring new technologies and trends to ensure
          my projects meet the highest standards of quality and innovation.
        </p>

        <div className="relative inline-block mt-6 md:mt-10">
          <a href="#contact">
            <button className="text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 transform hover:scale-105 font-semibold rounded-3xl bg-[#465697] transition-all">
              Contact Me
            </button>
          </a>
          <div className="absolute top-[-50px] left-[-100px] w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-30 animate-pulse -z-10"></div>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="relative w-[250px] h-[320px] md:w-[400px] md:h-[500px]">
        <div className="absolute inset-0 rounded-[50%/40%] bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 animate-spin-slow p-1">
          <div className="w-full h-full rounded-[50%/40%] bg-black p-1">
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
