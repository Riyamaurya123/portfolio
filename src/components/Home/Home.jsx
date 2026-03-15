import React from "react";
import TextChanger from "../TextChanger";

const Home = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 py-20 text-white overflow-hidden">
      {/* Profile Image */}
      <div className="relative w-40 h-40 md:w-56 md:h-56 mb-10 group">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 animate-spin-slow p-[3px]">
          <div className="w-full h-full rounded-full bg-[#0f172a] p-1 flex items-center justify-center shadow-xl shadow-indigo-500/40">
            <img
              src="/images/photo.jpg"
              alt="Riya Maurya"
              className="rounded-full w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div className="text-center z-10 max-w-3xl">
        {/* small badge */}
        <span className="px-4 py-1 text-sm bg-white/10 backdrop-blur-md rounded-full border border-white/20">
          Frontend Developer
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold mt-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Hello, I’m Riya Maurya
        </h1>

        <h2 className="text-2xl md:text-4xl font-bold mt-6 flex justify-center items-center gap-2 flex-wrap">
          <span className="text-gray-300">I am</span>
          <span className="text-white">
            <TextChanger />
          </span>
        </h2>

        <p className="mt-6 text-gray-300 text-base md:text-lg leading-relaxed">
          Passionate frontend developer specializing in
          <span className="text-blue-400"> React</span>,
          <span className="text-purple-400"> Next.js</span>, and modern web
          technologies. I love building fast, responsive and visually appealing
          web applications with clean and scalable code.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <a href="#contact">
            <button className="px-7 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 hover:scale-105 transition-all shadow-lg shadow-blue-500/40">
              Contact Me
            </button>
          </a>
          <a href="#Project">
            <button className="px-7 py-3 rounded-full text-lg font-semibold border border-white/30 hover:bg-white hover:text-black transition-all">
              View Projects
            </button>
          </a>
          {/* Resume button */}
          <a href="/Riya-resume.pdf" download>
            <button className="px-7 py-3 rounded-full text-lg font-semibold bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-black transition-all">
              Download Resume
            </button>
          </a>{" "}
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[450px] h-[450px] bg-purple-500 rounded-full blur-[180px] opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-500 rounded-full blur-[160px] opacity-30"></div>
    </section>
  );
};

export default Home;
