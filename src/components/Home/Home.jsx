import React from "react";
import TextChanger from "../TextChanger";

const Home = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center px-6 py-20 text-white overflow-hidden">
      {/* Profile Image at Top */}
      <div className="relative w-40 h-40 md:w-56 md:h-56 mb-10">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 animate-spin-slow p-1">
          <div className="w-full h-full rounded-full bg-black p-1 flex items-center justify-center shadow-lg shadow-indigo-500/40">
            <img
              src="/images/photo.jpg"
              alt="Profile"
              className="rounded-full w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Heading */}
      <div className="text-center z-10 max-w-3xl">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Hello, I’m Riya Maurya
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold mt-6 flex justify-start items-center gap-2">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text ml-20 text-transparent">
            I am,
          </span>
          <span className="text-white">
            <TextChanger />
          </span>
        </h2>
        <p className="mt-4 md:mt-6 text-sm md:text-lg font-bold text-gray-300">
          I’m a passionate web developer who loves crafting modern, responsive,
          and interactive web experiences. I enjoy exploring new technologies
          and building projects with clean code and smooth UI.
        </p>
        {/* Buttons */}
        <div className="mt-6 md:mt-10 flex justify-center gap-4">
          <a href="#contact">
            <button className="relative inline-block px-6 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-cyan-500 hover:to-blue-500 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/50">
              Contact Me
            </button>
          </a>
          <a href="#Project">
            <button className="relative inline-block px-6 py-3 text-lg font-semibold rounded-full border-2 border-white hover:bg-white hover:text-black transition-all transform hover:scale-105">
              My Projects
            </button>
          </a>
        </div>
      </div>

      {/* Decorative Background Circle */}
      <div className="absolute -top-32 -left-32 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-30 animate-pulse -z-10"></div>
    </section>
  );
};

export default Home;
