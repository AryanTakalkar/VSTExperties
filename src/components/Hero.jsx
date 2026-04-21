import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-split-bg"></div>
      <div className="container hero-container">
        <div className="hero-grid">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
          >
            <h1 className="hero-title">
              Your Workforce. <br />
              Our <span className="text-gradient">Expertise.</span>
            </h1>
            
            <p className="hero-subtitle">
              Connecting businesses with skilled and unskilled workforce across industries. 
              We build ties that work.
            </p>
            
            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary btn-lg">Get Started</a>
              <a href="#services" className="btn btn-text btn-lg">Explore Services</a>
            </div>

            <div className="hero-trust-badge">
              <div className="stars">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="trust-text"><strong>4.9/5</strong> Rating from 200+ Enterprises</p>
            </div>
          </motion.div>

          <motion.div 
            className="hero-image-wrapper"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.3 }}
          >
            <div className="hero-main-image-container">
              <img src="/images/hero_indian.png" alt="Corporate Team" className="hero-main-image" />
              
              <motion.div 
                className="floating-badge"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <div className="badge-avatars">
                  <div className="avatar"></div>
                  <div className="avatar"></div>
                  <div className="avatar"></div>
                </div>
                <span className="badge-text">Active 2k+ Professionals</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
