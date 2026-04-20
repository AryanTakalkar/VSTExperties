import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    requirement: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);

    try {
      const response = await fetch("https://formsubmit.co/ajax/contact@vstexperties.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: "New Lead from VST Experties Website!"
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', company: '', email: '', requirement: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-wrapper">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Let's build something together.</h2>
            <p>Ready to find the right workforce or looking for your next opportunity? Get in touch with us today.</p>
            
            <div className="info-items">
              <div className="info-item">
                <Mail className="info-icon" />
                <div>
                  <h4>Email Us</h4>
                  <a href="mailto:contact@vstexperties.com">contact@vstexperties.com</a>
                </div>
              </div>
              <div className="info-item">
                <Phone className="info-icon" />
                <div>
                  <h4>Call Us</h4>
                  <a href="tel:+919834582650">+91 98345 82650</a>
                </div>
              </div>
              <div className="info-item">
                <MapPin className="info-icon" />
                <div>
                  <h4>Head Office</h4>
                  <p>Pune, Maharashtra, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} scale={1.01} transitionSpeed={2000} className="contact-form-container hover-card">
            {submitted ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>Thank You!</h3>
                <p>We have received your message and will get back to you shortly.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="requirement">Requirement</label>
                  <select id="requirement" name="requirement" value={formData.requirement} onChange={handleChange} required>
                    <option value="" disabled>Select your requirement</option>
                    <option value="skilled">Skilled Workforce</option>
                    <option value="unskilled">Unskilled / Support Staff</option>
                    <option value="job">Looking for a Job</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group full-width">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary full-width" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {error && <p className="error-text" style={{color: '#ff4d4f', marginTop: '1rem', fontSize: '0.9rem', textAlign: 'center'}}>There was an error sending your message. Please try emailing us directly.</p>}
              </form>
            )}
            </Tilt>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
