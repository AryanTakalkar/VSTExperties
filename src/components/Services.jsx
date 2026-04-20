import React from 'react';
import { motion } from 'framer-motion';
import { HardHat, Users } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import './Services.css';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>
        
        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={cardVariants}>
            <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.02} transitionSpeed={2000} className="service-card hover-card">
              <div className="service-card-image">
              <img src="/images/services.png" alt="Skilled Workforce" />
            </div>
            <div className="card-header">
              <div className="service-icon">
                <HardHat size={32} />
              </div>
              <h3>Skilled Workforce</h3>
            </div>
            <div className="card-body">
              <p>We provide highly trained and experienced professionals to meet the technical demands of your industry.</p>
              <ul className="service-list">
                <li>Engineers</li>
                <li>Electricians & Plumbers</li>
                <li>Technicians</li>
                <li>IT Staff</li>
                <li>Trade Professionals</li>
              </ul>
            </div>
            <div className="card-footer">
              <a href="#contact" className="btn btn-secondary">Request Talent</a>
              </div>
            </Tilt>
          </motion.div>

          <motion.div variants={cardVariants}>
            <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.02} transitionSpeed={2000} className="service-card hover-card">
              <div className="service-card-image">
              <img src="/images/about.png" alt="Support Workforce" />
            </div>
            <div className="card-header">
              <div className="service-icon">
                <Users size={32} />
              </div>
              <h3>Unskilled / Support Workforce</h3>
            </div>
            <div className="card-body">
              <p>Reliable support staff essential for the day-to-day operations and maintenance of your facilities.</p>
              <ul className="service-list">
                <li>Housekeeping</li>
                <li>Security Personnel</li>
                <li>Delivery Riders</li>
                <li>Facility Support</li>
                <li>Cleaning Staff</li>
              </ul>
            </div>
            <div className="card-footer">
              <a href="#contact" className="btn btn-secondary">Request Talent</a>
            </div>
            </Tilt>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
