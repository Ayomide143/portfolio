// Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import mummys from "../assets/mummys kitchen.png";
import dawcon from "../assets/dawcon.jpg";

const Projects = () => {
  const projects = [
    {
      imageUrl: mummys,
      title: "Mummys Kitchen",
      description: "A web app for a restaurant with admin functionality.",
      projectLink: "https://themummyskitchen.com",
    },
    {
      imageUrl: dawcon,
      title: "Dawcon Construction",
      description:
        "An Ottawa-based construction company who sought and obtained a professional, robust website to effectively showcase their identity and services.",
      projectLink: "https://dawcon.ca",
    },
  ];

  return (
    <section id="projects" className="projects">
      {/* Top curve */}
      <svg
        className="projects-curve-top"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fill="#383838"
          d="M0,224L48,213.3C96,203,192,181,288,160C384,139,480,117,576,128C672,139,768,181,864,192C960,203,1056,181,1152,154.7C1248,128,1344,96,1392,80L1440,64V0H0Z"
        />
      </svg>

      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My <span>Projects</span>
        </motion.h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              style={{ backgroundImage: `url(${project.imageUrl})` }}
            >
              <div className="overlay">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button-animated">Visit Project</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </section>
  );
};

export default Projects;
