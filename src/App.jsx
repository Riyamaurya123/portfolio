import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Project from "./components/Project/Project";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="bg-[#171d32] h-auto w-full overflow-hidden">
        <Navbar />
        <Home />
        <About />

        <Experience />

        <Project />
        <Footer />
      </div>
    </>
  );
};

export default App;
