import React from "react";

const projects = [
  {
    title: "Investment Website",
    link: "https://github.com/Riyamaurya123/invest.git",
    live: "https://spectacular-crepe-314e1f.netlify.app/",
    description:
      "A static investment website built using HTML, CSS, and JavaScript with an intuitive and responsive user interface that showcases investment plans, calculators, and user-friendly design.",
    bullets: [
      "**Responsive Design:** Developed a fully responsive layout using HTML5 and modern CSS techniques (Flexbox, Grid).",
      "**User Interface:** Designed interactive sections like investment plans, calculators, and FAQs using vanilla JavaScript.",
      "**Clean Codebase:** Structured and semantic HTML for accessibility and SEO.",
      "**Styling:** Used CSS animations and transitions to enhance user experience.",
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/images/invest1.png",
  },
  {
    title: "Tic Tac Toe Game",
    link: "https://github.com/Riyamaurya123/tic-tac-toe.git",
    live: "https://joyful-longma-392f06.netlify.app/",
    description:
      "A classic Tic Tac Toe game built using HTML, CSS, and JavaScript. Features interactive gameplay, turn-based logic, win detection, and responsive UI for both desktop and mobile devices.",
    bullets: [
      "**Game Logic:** Implemented complete game functionality with JavaScript including player turns, win/draw detection, and restart option.",
      "**Responsive Design:** Optimized for mobile and desktop using Flexbox and media queries.",
      "**Interactive UI:** Visual indicators for player moves (X/O), winning combinations, and game result display.",
      "**Clean Codebase:** Structured HTML and modular JavaScript for easy readability and maintenance.",
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/images/tictactoe.png",
  },
  {
    title: "Job Portal Website",
    link: "https://github.com/Riyamaurya123/Job-Portal.git",
    description:
      "A full-stack job portal platform built with the MERN stack, designed to connect job seekers (students) with recruiters. It features role-based dashboards, job application workflows, and an intuitive admin panel for managing platform data.",
    bullets: [
      "**Authentication & Authorization:** Secure login/signup using JWT tokens with role-based access for Admins and Students.",
      "**Student Dashboard:** Students can search, apply, and track job applications; upload resumes and edit profiles.",
      "**Admin Panel:** Admins can manage job listings, view applicant data, and monitor platform usage with CRUD operations.",
      "**Job Listings & Filters:** Dynamic job posting system with real-time filtering by role, location, and category.",
      "**Responsive UI:** Fully responsive UI using Tailwind CSS and Framer Motion for smooth transitions.",
    ],
    tags: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Tailwind CSS",
      "JWT",
      "Framer Motion",
    ],
    image: "/images/invest2.png",
  },
  {
    title: "Gym Website",
    link: "https://github.com/Riyamaurya123/Gym-website.git",
    description:
      "A modern, full-stack gym management platform built using the MERN stack. Designed for fitness enthusiasts to track progress, calculate BMI, explore workout plans, and connect with gym trainers. Includes automated email support via NodeMailer.",
    bullets: [
      "**BMI Calculator:** Integrated real-time BMI calculator to help users track fitness goals.",
      "**Workout Plans:** Users can view personalized fitness programs and health tips.",
      "**Email Notifications:** Implemented NodeMailer to send welcome emails and contact form responses.",
    ],
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "CSS", "NodeMailer"],
    image: "/images/invest3.png",
  },
  {
    title: "Blog App",
    link: "https://github.com/Riyamaurya123/Blog-App.git",
    description:
      "A full-stack Blog Application built using the MERN (MongoDB, Express, React, Node.js) stack with Tailwind CSS. It allows users to create, edit, and delete blog posts with secure authentication and a responsive, modern UI.",
    bullets: [
      "**Full-Stack Functionality:** Integrated RESTful APIs using Express and Node.js to handle blog CRUD operations with MongoDB as the database.",
      "**Authentication & Authorization:** Implemented user registration and login with JWT-based authentication and protected routes.",
      "**Responsive UI:** Styled using Tailwind CSS for a modern, mobile-first user experience across devices.",
      "**Rich Text Editing:** Integrated a rich text editor for creating formatted blog content.",
      "**User Dashboard:** Users can view their posts, edit or delete them, and manage their profile from a clean dashboard interface.",
    ],
    tags: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    image: "/images/blog.png",
  },
];

const Project = () => {
  return (
    <div id="Project" className="relative p-6 sm:p-10 md:p-24 text-white">
      {/* Background Gradient */}
      <div className="absolute z-0 top-40 left-[60%] w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-[160px] opacity-30 animate-pulse"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold text-center">Projects</h1>
        <p className="text-center mt-2 max-w-xl mx-auto px-2">
          Explore some of the projects I’ve built using modern tech stacks like
          React and Node.js.
        </p>

        <div className="mt-16 space-y-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              } items-center justify-between gap-10`}
            >
              {/* Text */}
              <div className="w-full md:w-1/2 px-2">
                <h2 className="text-2xl md:text-3xl font-bold">
                  {project.title}
                </h2>
                <div className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500 my-2 rounded" />
                <p className="mt-2 text-sm sm:text-base">
                  {project.description}
                </p>
                <ul className="mt-4 list-disc pl-5 space-y-1 text-gray-400 text-sm">
                  {project.bullets.map((point, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: point }} />
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 text-sm px-3 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-4 flex-wrap">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#465697] text-white rounded hover:bg-[#3456de] transition"
                  >
                    GitHub ↗
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[#465697] text-white rounded hover:bg-[#3456de] transition"
                    >
                      Demo ↗
                    </a>
                  )}
                </div>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl w-full object-cover border border-gray-200 shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
