import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Handshake, Zap, Factory, ClipboardCheck } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <CheckCircle size={32} />,
      title: "Verified Professionals",
      desc: "100% background-checked and thoroughly vetted workforce."
    },
    {
      icon: <Handshake size={32} />,
      title: "Long-Term Partnerships",
      desc: "We focus on building sustainable relationships, not just quick fixes."
    },
    {
      icon: <Zap size={32} />,
      title: "Fast Deployment",
      desc: "Workforce ready and deployed within days of your request."
    },
    {
      icon: <Factory size={32} />,
      title: "Industry Experience",
      desc: "Expertise across Manufacturing, Retail, Education & Infrastructure."
    },
    {
      icon: <ClipboardCheck size={32} />,
      title: "End-to-End Support",
      desc: "Comprehensive HR & compliance management included."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="why-us" className="section why-us-section">
      <div className="container">
        <motion.h2 
          className="section-title text-left"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Why Choose <br/>VST Experties
        </motion.h2>

        <motion.div 
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feat, index) => (
            <motion.div key={index} className="feature-block hover-card" variants={itemVariants}>
              <div className="feature-icon">{feat.icon}</div>
              <h3 className="feature-title">{feat.title}</h3>
              <p className="feature-desc">{feat.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
