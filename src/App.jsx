import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Clients from './components/Clients';
import WhyChooseUs from './components/WhyChooseUs';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Clients />
        <WhyChooseUs />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
