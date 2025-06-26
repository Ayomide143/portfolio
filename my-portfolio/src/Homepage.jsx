import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import './Homepage.css'
import Services from "./components/Services";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import ContactForm from "./components/Contactform";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white pt-20">
        <Hero />
        <Introduction />
        <Services /> 
        <Projects />
        <Skills />
        <ContactForm />
        <Footer /> 
      </main>
    </>
  );
}
