import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import './Careers.css';

const Careers = () => {
  return (
    <section id="careers" className="section careers-section">
      <div className="container">
        <motion.div 
          className="careers-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="careers-content">
            <h2>Ready to Work? <br/>We'll Find You the Right Opportunity.</h2>
            <p>
              VST Experties connects both skilled and unskilled workers with reputable companies. 
              Join our network today to access steady work, fair pay, and a dignified working environment. 
              We are here to help you grow.
            </p>
            
            <a 
              href="https://wa.me/919834582650?text=Hi%20VST%20Experties,%20I%20am%20looking%20for%20work%20opportunities." 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <MessageCircle size={20} className="mr-2" />
              Chat on WhatsApp
            </a>
            <p className="contact-number mt-3">Or call us: +91 98345 82650</p>
          </div>
          <div className="careers-visual">
            {/* Using a modern CSS pattern as a placeholder for a graphic */}
            <div className="dots-pattern"></div>
            <div className="accent-circle"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Careers;
