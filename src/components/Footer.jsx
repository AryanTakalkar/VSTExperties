import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo">
              <div className="logo-vst" style={{ color: 'white', backgroundImage: 'none', WebkitTextFillColor: 'white' }}>VST</div>
              <div className="logo-sub" style={{ color: 'var(--color-accent)' }}>EXPERTIES</div>
            </a>
            <p className="footer-tagline">Where Expertise Meets Opportunity</p>
            <p className="footer-desc">
              Bridging the gap between businesses and skilled/unskilled talent. 
              We don't just provide labour. We forge lasting partnerships.
            </p>
            <div className="social-links">
              <a href="https://www.linkedin.com/company/vst-expertise" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#clients">Clients</a></li>
              <li><a href="#why-us">Why Choose Us</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Info</h3>
            <ul>
              <li>
                <MapPin size={18} className="footer-icon" />
                <span>Pune, Maharashtra, India</span>
              </li>
              <li>
                <Phone size={18} className="footer-icon" />
                <a href="tel:+919834582650">+91 98345 82650</a>
              </li>
              <li>
                <Mail size={18} className="footer-icon" />
                <a href="mailto:contact@vstexperties.com">contact@vstexperties.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>VST Experties — Building Ties That Work.</p>
          <p className="copyright">&copy; {currentYear} VST Experties. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
