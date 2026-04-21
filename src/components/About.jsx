import React from 'react';
import { motion } from 'framer-motion';
import { Users, Shield, Link as LinkIcon } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          <motion.div 
            className="about-content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 className="section-title text-left" variants={itemVariants}>
              The Story Behind <br/>
              <span className="logo-text">VST EXPERTIES</span>
            </motion.h2>
            
            <motion.div className="about-text" variants={itemVariants}>
              <p>
                The name <strong>Experties</strong> carries a double meaning — it stands for the expertise we bring to every placement, and the ties we build between workers and the companies that need them. 
              </p>
              <p>
                We don't just provide labour. We forge lasting partnerships. The navy blue we carry represents trust, reliability, and the depth of commitment we bring to every relationship.
              </p>
            </motion.div>

            <motion.div className="about-values" variants={containerVariants}>
              <motion.div variants={itemVariants}>
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02} transitionSpeed={2000} className="value-item">
                  <div className="value-icon"><Users size={24} /></div>
                  <div>
                    <h3>Human Connections</h3>
                    <p>People-first approach to workforce solutions.</p>
                  </div>
                </Tilt>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02} transitionSpeed={2000} className="value-item">
                  <div className="value-icon"><Shield size={24} /></div>
                  <div>
                    <h3>Dignified Work</h3>
                    <p>Ensuring respect and fair opportunities for all.</p>
                  </div>
                </Tilt>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02} transitionSpeed={2000} className="value-item">
                  <div className="value-icon"><LinkIcon size={24} /></div>
                  <div>
                    <h3>Reliable Partnerships</h3>
                    <p>Bridging the gap between talent and industry.</p>
                  </div>
                </Tilt>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="about-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="visual-wrapper">
              <div className="visual-shape primary"></div>
              <div className="visual-shape accent"></div>
              <div className="visual-image-container">
                <img src="/images/about_indian.png" alt="Professional workforce" className="about-image" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
