import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import './Clients.css';

const Clients = () => {
  const clients = [
    { name: 'Tata Projects', logo: '/logos/tata.png' },
    { name: 'Belrise Industries', logo: '/logos/belrise.png' },
    { name: 'Jadhavar Group of Colleges', logo: '/logos/jadhavar.png' },
    { name: 'D-Mart', logo: '/logos/dmart.png' },
  ];

  return (
    <section id="clients" className="section clients-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Trusted By Industry Leaders
        </motion.h2>

        <div className="clients-scroll-container">
          <motion.div 
            className="clients-track"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {clients.map((client, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, delay: index * 0.1 }}
              >
                <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={2000} className="client-logo hover-card">
                  <img src={client.logo} alt={`${client.name} logo`} className="client-logo-img" />
                  <div className="client-name">{client.name}</div>
                  {client.badge && <span className="badge">{client.badge}</span>}
                </Tilt>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
