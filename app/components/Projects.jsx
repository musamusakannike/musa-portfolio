"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import ProjectImage1 from "../assets/projects/project1.png";
import ProjectImage2 from "../assets/projects/project2.png";
import ProjectImage3 from "../assets/projects/project3.png";
import ProjectImage4 from "../assets/projects/project4.png";
import ProjectImage5 from "../assets/projects/project5.png";
import ProjectImage6 from "../assets/projects/project6.png";
import ProjectImage7 from "../assets/projects/project7.png";
import ProjectImage8 from "../assets/projects/project8.png";
import ProjectImage9 from "../assets/projects/project9.png";
import ProjectImage10 from "../assets/projects/project10.png";

// Icons for technologies (replace with your own paths)
import nextLogo from "../assets/icons/next.jpg";
import cssLogo from "../assets/icons/css.png";
import tailwindLogo from "../assets/icons/tailwind.svg";
import reactLogo from "../assets/icons/react.png";
import bootstrapLogo from "../assets/icons/bootstrap.png";
import htmlLogo from "../assets/icons/html.png";
import jsLogo from "../assets/icons/js.png";
import jQueryLogo from "../assets/icons/jquery.png";

// Projects data
const projects = [
  {
    title: "Creator",
    description: "An AI powered tool for content creators.",
    image: ProjectImage1,
    link: "https://creatortest.vercel.app/",
    tech: [nextLogo, cssLogo, tailwindLogo],
  },
  {
    title: "Graphic Designer Portfolio",
    description:
      "A portfolio website for a graphic designer. Design from Figma.",
    image: ProjectImage2,
    link: "https://mock-portfolio-rose.vercel.app/",
    tech: [reactLogo, bootstrapLogo, cssLogo],
  },
  {
    title: "Finance",
    description: "A landing page for an imaginary crypto project.",
    image: ProjectImage3,
    link: "https://financo.vercel.app/",
    tech: [htmlLogo, cssLogo, jsLogo, bootstrapLogo],
  },
  {
    title: "Virtuals",
    description: "A landing page for a tech-related organization.",
    image: ProjectImage4,
    link: "https://virtuals-build.vercel.app/",
    tech: [htmlLogo, cssLogo],
  },
  {
    title: "CryptoDucklings",
    description:
      "A landing page for CryptoDucklings, a crypto trading project.",
    image: ProjectImage5,
    link: "https://crypto-ducklings.vercel.app/",
    tech: [reactLogo, bootstrapLogo, cssLogo],
  },
  {
    title: "WatchWave",
    description:
      "A movie app with movie search functionality, trending movies, TV series, and many more.",
    image: ProjectImage6,
    link: "https://watch-wave2.vercel.app/",
    tech: [reactLogo, bootstrapLogo, cssLogo],
  },
  {
    title: "PimpWif",
    description: "A landing page website for PimpWif, a crypto project.",
    image: ProjectImage7,
    link: "https://pimpwif.vercel.app/",
    tech: [bootstrapLogo, reactLogo, cssLogo],
  },
  {
    title: "Captain Levi Portfolio",
    description: "A portfolio website for Captain Levi, a community manager.",
    image: ProjectImage8,
    link: "https://captain-levi.vercel.app/",
    tech: [reactLogo, bootstrapLogo, cssLogo],
  },
  {
    title: "Dishful",
    description: "A Food Recipe finder.",
    image: ProjectImage9,
    link: "https://musamusa.vercel.app/",
    tech: [nextLogo, tailwindLogo],
  },
  {
    title: "Musa Musa Kannike",
    description: "A portfolio website for Musa Kannike.",
    image: ProjectImage10,
    link: "https://musamusakannike.vercel.app/",
    tech: [htmlLogo, cssLogo, jsLogo, jQueryLogo, bootstrapLogo],
  },
];

// Unique technologies for filter buttons
const techOptions = [
  { name: "All", icon: null }, // "All" option for showing all projects
  { name: "Next.js", icon: nextLogo },
  { name: "CSS", icon: cssLogo },
  { name: "Tailwind", icon: tailwindLogo },
  { name: "React", icon: reactLogo },
  { name: "Bootstrap", icon: bootstrapLogo },
  { name: "HTML", icon: htmlLogo },
  { name: "JavaScript", icon: jsLogo },
  { name: "jQuery", icon: jQueryLogo },
];

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState("All");

  // Function to handle filter button click
  const handleFilterClick = (tech) => {
    setSelectedTech(tech.name);
  };

  // Filtered projects based on selected technology
  const filteredProjects =
    selectedTech === "All"
      ? projects
      : projects.filter((project) =>
          project.tech.includes(
            techOptions.find((option) => option.name === selectedTech).icon
          )
        );

  // Animation variants for project cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } }, // Hover animation
  };

  return (
    <div id="projects" className="min-h-screen bg-white text-black flex flex-col items-center py-8  mt-24 mb-5">
      {/* Section Title */}
      <motion.h2
        className="text-4xl font-bold mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      {/* Filter Buttons */}
      <div className="flex overflow-x-auto gap-4 mb-8 py-2 w-full relative z-10">
        <div className="flex flex-nowrap  space-x-4 w-screen">
          {techOptions.map((tech) => (
            <button
              key={tech.name}
              onClick={() => handleFilterClick(tech)}
              className={`flex text-center justify-center items-center px-4 py-2 rounded-lg shadow-md transition-all duration-300 whitespace-nowrap ${
                selectedTech === tech.name
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              } hover:bg-gray-400 hover:text-white`}
            >
              {tech.icon && (
                <Image
                  src={tech.icon}
                  alt={`${tech.name} logo`}
                  width={20}
                  height={20}
                  className="mr-2"
                />
              )}
              {tech.name}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl px-3">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover" // Apply hover animation
            viewport={{ once: true, amount: 0.5 }}
          >
            {/* Project Image */}
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <Tilt
                className="tilt-card"
                tiltMaxAngleX={25}
                tiltMaxAngleY={25}
                scale={1.1}
                transitionSpeed={2500}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={568}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
              </Tilt>
            </a>

            {/* Project Title */}
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>

            {/* Project Description */}
            <p className="text-gray-700 mb-4">{project.description}</p>

            {/* Technology Icons */}
            <div className="flex space-x-3">
              {project.tech.map((tech, idx) => (
                <Image
                  key={idx}
                  src={tech}
                  alt="Tech icon"
                  width={30}
                  height={30}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
