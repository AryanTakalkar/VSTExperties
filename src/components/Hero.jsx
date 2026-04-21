import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container hero-container">
        <div className="hero-grid">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
          >
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000} className="hero-glass-card">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your Workforce. <br />
            <span className="text-gradient">Our Expertise.</span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Connecting businesses with skilled and unskilled workforce across industries. 
            We build ties that work.
          </motion.p>
          
          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="#contact" className="btn btn-primary btn-lg">Hire Workforce</a>
            <a href="#careers" className="btn btn-secondary btn-lg">Join as a Professional</a>
          </motion.div>
          </Tilt>
          </motion.div>

          <motion.div 
            className="hero-image-grid"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.3 }}
          >
            <motion.div 
              className="grid-image grid-image-1"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <img src="/images/hero_1.png" alt="Corporate Team" />
            </motion.div>
            <motion.div 
              className="grid-image grid-image-2"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <img src="/images/hero_2.png" alt="Construction Workforce" />
            </motion.div>
            <motion.div 
              className="grid-image grid-image-3"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              <img src="/images/hero_3.png" alt="Logistics Experts" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
