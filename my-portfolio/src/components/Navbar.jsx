import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        className="navbar hero-bg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="logo">
          <img src={logo} className="nav-logo"/>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#home" className="home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <a
          href="https://github.com/Ayomide143"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn button-animated"
        >
          Get in Touch
        </a>

        <div className="menu-icon" onClick={() => setIsOpen(true)}>
          <FaBars />
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.aside
            className="sidebar"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
          >
            <div className="close-icon" onClick={() => setIsOpen(false)}>
              <FaTimes />
            </div>
            <ul>
              <li>
                <a href="#home" onClick={() => setIsOpen(false)}>
                  Home |
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => setIsOpen(false)}>
                  Services |
                </a>
              </li>
              <li>
                <a href="#projects" onClick={() => setIsOpen(false)}>
                  Projects |
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setIsOpen(false)}>
                  Contact |
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Ayomide143"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-animated"
                  style={{ display: "inline-block", marginTop: "1rem" }}
                >
                  Get in Touch
                </a>
              </li>
            </ul>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
