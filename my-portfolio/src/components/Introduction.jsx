// Introduction.jsx
import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/Profileimage.jpg";

const Introduction = () => {
  return (
    <motion.section
      id="introduction"
      className="introduction-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="intro-overlay">
        <div className="intro-content">
          <motion.div
            className="intro-image"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img src={profile} alt="Profile" />
          </motion.div>
          <motion.div
            className="intro-text"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2>About Me</h2>
            <p>
              Hello, My name is PRAISE a passionate full-stack developer from Nigeria dedicated to building modern,
              responsive, and intuitive digital experiences.
            </p>
            <p>
              With a strong command of frontend and backend technologies, I create
              seamless and performant web solutions tailored to user needs.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Introduction;
