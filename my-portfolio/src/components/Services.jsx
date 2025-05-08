// Services.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaTools } from "react-icons/fa";
import development from "../assets/development.png";
import design from "../assets/design.png";
import optimization from "../assets/optimization.png";

const services = [
  {
    title: "Web Development",
    image: development,
    description:
      "Building fast, modern, and responsive websites tailored to your business needs.",
  },
  {
    title: "UI/UX Design",
    image: design,
    description:
      "Crafting intuitive and elegant interfaces with focus on user experience.",
  },
  {
    title: "SEO Optimization",
    image: optimization,
    description:
      "Enhancing your online visibility through effective SEO strategies.",
  },
];

const Services = () => {
  return (
    <section id="services" className="services">
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

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="services-title"
        >
          <span className="services-title-content">
            My <span>Services</span>
            <FaTools className="tools-icon" />
          </span>
        </motion.h2>
        <div className="services-list">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </section>
  );
};

export default Services;
