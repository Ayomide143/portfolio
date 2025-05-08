import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa6";
import Profileimage from "../assets/developer-hero.svg";

const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero hero-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-content">
        {/* Left Column: Text */}
        <div className="hero-text">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Designing <span>Tomorrow's</span> Web <span>Today</span>.
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Experience the difference: Websites created with 100% creativity and
            elegance for superior performance.
          </motion.p>
          <div className="buttons">
            <motion.button
              className="download-cv button-animated"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a href="/cv/Ayoola_Praise_Fullstack_Developer_CV.docx" download className="download">
              <FaDownload className="mr-2" /> 
              <span>Download CV</span>
              </a>
            </motion.button>
          </div>
        </div>

        {/* Right Column: Image */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img src={Profileimage} alt="Profile" />
        </motion.div>
      </div>

      {/* SVG Curve */}
      <svg
        className="hero-curve"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#101010"
          d="M0,224L48,213.3C96,203,192,181,288,160C384,139,480,117,576,128C672,139,768,181,864,192C960,203,1056,181,1152,154.7C1248,128,1344,96,1392,80L1440,64V320H0Z"
        />
      </svg>
    </motion.section>
  );
};

export default Hero;
