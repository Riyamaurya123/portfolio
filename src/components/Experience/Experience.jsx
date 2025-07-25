import React from "react";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { FaReact, FaNodeJs, FaBriefcase } from "react-icons/fa6";
import {
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiNextdotjs,
  SiMantine,
  SiShadcnui,
} from "react-icons/si";

const skills = [
  {
    icon: <IoLogoHtml5 color="#E34F26" size={60} />,
    label: "HTML5",
    desc: "Semantic HTML, SEO, and accessibility best practices.",
  },
  {
    icon: <IoLogoCss3 color="#1572b6" size={60} />,
    label: "CSS3",
    desc: "Responsive layouts, Flexbox, Grid, and animations.",
  },
  {
    icon: <IoLogoJavascript color="#F7DF1E" size={60} />,
    label: "JavaScript",
    desc: "ES6+, async programming, and clean DOM scripting.",
  },
  {
    icon: <FaReact color="#61DAFB" size={60} />,
    label: "React.js",
    desc: "Hooks, component-driven UIs, performance optimization.",
  },
  {
    icon: <SiNextdotjs color="white" size={60} />,
    label: "Next.js",
    desc: "Routing, SSR/SSG, and full-stack app development.",
  },
  {
    icon: <SiMantine color="#339AF0" size={60} />,
    label: "Mantine",
    desc: "Modern React UI library for forms, modals & themes.",
  },
  {
    icon: <SiShadcnui color="white" size={60} />,
    label: "Shadcn UI",
    desc: "Beautiful and accessible UI components built on Radix.",
  },
  {
    icon: <SiTailwindcss color="#38B2AC" size={60} />,
    label: "Tailwind CSS",
    desc: "Rapid utility-first styling with mobile-first design.",
  },
  {
    icon: <SiMongodb color="#47A248" size={60} />,
    label: "MongoDB",
    desc: "NoSQL database design, queries, and Mongoose.",
  },
  {
    icon: <FaNodeJs color="#68A063" size={60} />,
    label: "Node.js",
    desc: "Server-side logic, APIs, and event-driven architecture.",
  },
  {
    icon: <SiExpress color="white" size={60} />,
    label: "Express.js",
    desc: "Routing, middleware, and RESTful APIs.",
  },
];

const internships = [
  {
    company: "DESIGNDOT TECHNOLOGIES PVT LTD",
    role: "Frontend Developer Intern",
    duration: "May 2025 - June 2025",
    description: [
      "Developed and optimized web pages using React, Next.js, Tailwind, Shadcn UI, and Mantine.",
      "Collaborated with designers for pixel-perfect UIs.",
      "Improved load performance by 30% via lazy loading & cleanup.",
    ],
  },
  {
    company: "Lets Grow More",
    role: "Full Stack Developer Intern",
    duration: "Oct 2023 - Jan 2024",
    description: [
      "Built full-stack features using React, Node, and MongoDB.",
      "Integrated secure REST APIs and handled token auth.",
      "Debugged and refactored backend logic for speed and clarity.",
    ],
  },
];

const Experience = () => {
  return (
    <div
      id="Experience"
      className="p-6 sm:p-10 md:p-16 lg:p-24 text-white bg-[#0d0d0d]"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6">
        My Tech Stack
      </h1>

      <p className="text-center text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
        I specialize in{" "}
        <span className="text-blue-400 font-medium">Frontend</span> and{" "}
        <span className="text-blue-400 font-medium">
          Full Stack Development
        </span>
        . From crafting beautiful UIs to building scalable APIs, I work with
        modern tech to deliver impactful web applications.
      </p>

      {/* Skills Grid */}
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-10 justify-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-4 bg-zinc-900 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300 text-center w-full max-w-[160px]"
          >
            <div className="flex justify-center">{skill.icon}</div>
            <h3 className="mt-3 text-sm md:text-base font-semibold">
              {skill.label}
            </h3>
            <p className="text-gray-400 text-xs md:text-sm mt-2">
              {skill.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Internship Section */}
      <div className="mt-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
          Experiences
        </h2>

        <div className="space-y-6">
          {internships.map((intern, idx) => (
            <div
              key={idx}
              className="p-6 bg-zinc-900 rounded-xl shadow-md hover:shadow-blue-400/10 transition-shadow duration-300"
            >
              <div className="flex gap-4 items-start">
                <FaBriefcase size={30} className="text-blue-500 mt-1" />
                <div>
                  <h3 className="text-lg md:text-xl font-semibold">
                    {intern.role}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    {intern.company} • {intern.duration}
                  </p>
                  <ul className="list-disc pl-5 mt-2 text-gray-300 text-sm space-y-1">
                    {intern.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <p className="text-base md:text-lg text-gray-300">
          Looking for a passionate developer to join your team?
        </p>
        <a
          href="#contact"
          className="mt-4 inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Experience;
