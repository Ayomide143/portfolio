import React from "react";
import { VscVscodeInsiders } from "react-icons/vsc";
import { MdWork } from "react-icons/md";
import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiTypescript,
  SiGit,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiSocketdotio,
  SiBootstrap,
} from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", icon: <SiJavascript color="#f7df1e" /> },
  { name: "React", icon: <SiReact color="#61dafb" /> },
  { name: "Next.js", icon: <SiNextdotjs color="#000" /> },
  { name: "HTML5", icon: <SiHtml5 color="#e34c26" /> },
  { name: "CSS3", icon: <SiCss3 color="#1572b6" /> },
  { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178c6" /> },
  { name: "Git", icon: <SiGit color="#f05032" /> },
  { name: "Redux", icon: <SiRedux color="#764abc" /> },
  { name: "Sass", icon: <SiSass color="#cc6699" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#38bdf8" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47a248" /> },
  { name: "WebSocket", icon: <SiSocketdotio color="#010101" /> },
  { name: "VS Code", icon: <VscVscodeInsiders color="#3178c6" /> },
  { name: "Bootstrap", icon: <SiBootstrap color="#7952b3" /> },
];

const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Skills = () => {
  return (
    <section className="skills-section">
      {/* Top curve */}
      <svg
        className="services-curve"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fill="#101010"
          d="M0,224L48,213.3C96,203,192,181,288,160C384,139,480,117,576,128C672,139,768,181,864,192C960,203,1056,181,1152,154.7C1248,128,1344,96,1392,80L1440,64V0H0Z"
        />
      </svg>
      <div className="container text-center">
        <motion.h2
          className="skills-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          My <span>Skills</span>
          <MdWork className="skills-icon" />
        </motion.h2>
        <motion.p
          className="skills-desc"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          Here are some of the technologies and tools I work with:
        </motion.p>
        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              variants={cardVariants}
              whileHover={{
                scale: 1.12,
                rotate: -3,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <span style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
                {skill.icon}
              </span>
              <span className="fw-medium" style={{ fontSize: "1.1rem", color: "#fff" }}>
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
