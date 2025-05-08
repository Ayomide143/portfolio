import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer hero-bg">
      {/* Top curve */}
      <svg
        className="projects-curve-top"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fill="#474646"
          d="M0,224L48,213.3C96,203,192,181,288,160C384,139,480,117,576,128C672,139,768,181,864,192C960,203,1056,181,1152,154.7C1248,128,1344,96,1392,80L1440,64V0H0Z"
        />
      </svg>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="footer-container">
          {/* Logo and Description */}
          <div className="footer-section">
            <img src={logo} alt="Company Logo" className="footer-logo" />
            <p className="footer-description">
              Delivering top-notch web design, development, and SEO services to
              ensure the best results for your business.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="footer-section">
            <h4>Navigation</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>
                Email:{" "}
                <a href="mailto:praiseebenezer10@gmail.com">
                  praiseebenezer10@gmail.com
                </a>
              </li>
              <li>
                Phone: <a href="tel:+2349032793342">+234 903 279 3342</a>
              </li>
              <li>Location: Osun state, Nigeria</li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <p>© 2025 Praise Developer. All rights reserved.</p>
        </div>
      </motion.footer>
    </footer>
  );
};

export default Footer;
