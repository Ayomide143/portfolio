import React from "react";
import { motion } from "framer-motion";
import contactImg from "../assets/services1.png";
import { MdMessage } from "react-icons/md";

const ContactForm = () => {
  return (
    <section id="contact" className="contact-section">
      {/* Top curve */}
      <svg
        className="services-curve"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fill="#474646"
          d="M0,224L48,213.3C96,203,192,181,288,160C384,139,480,117,576,128C672,139,768,181,864,192C960,203,1056,181,1152,154.7C1248,128,1344,96,1392,80L1440,64V0H0Z"
        />
      </svg>

      <motion.section
        id="contact"
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
          <span className="contact-title-content">
            Contact <span>us</span>.
            <MdMessage className="contact-icon" />
          </span>
        </motion.h2>
        <div className="contact-container">
          {/* Left Form Side */}
          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>Name:</label>
                <input type="text" required />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input type="email" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Phone number:</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Subject:</label>
                <input type="text" required />
              </div>
            </div>
            <div className="form-group full-width">
              <label>Message:</label>
              <textarea rows="5" required></textarea>
            </div>
            <div className="button-wrapper">
              <button className="send-btn">Send</button>
            </div>
          </form>

          {/* Right Info Side */}
          <div className="contact-info">
            <img src={contactImg} alt="contact visual" />
            <div className="info-block">
              <h4>Phone:</h4>
              <p>+234 903 279 3342</p>
            </div>
            <div className="info-block">
              <h4>Email:</h4>
              <p>praiseebenezer10@gmail.com</p>
            </div>
            <div className="info-block">
              <h4>Location:</h4>
              <p>Osun state, Nigeria</p>
            </div>
          </div>
        </div>
      </motion.section>
    </section>
  );
};

export default ContactForm;
