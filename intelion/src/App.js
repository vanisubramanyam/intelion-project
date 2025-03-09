// src/App.js
import React from 'react';
import './App.css'{

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <About />
      <Services />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-logo">
          <h1>Intelion</h1>
        </div>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h2>Welcome to Intelion</h2>
        <p>Empowering businesses with intelligent solutions.</p>
        <button className="cta-button">Learn More</button>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about" id="about">
      <h3>About Intelion</h3>
      <p>Intelion is a cutting-edge platform offering innovative solutions for businesses. Our mission is to simplify processes, increase efficiency, and drive business growth through intelligent technologies.</p>
    </section>
  );
}

function Services() {
  return (
    <section className="services" id="services">
      <h3>Our Services</h3>
      <div className="service-item">
        <h4>AI Solutions</h4>
        <p>Leverage artificial intelligence for smarter decision-making.</p>
      </div>
      <div className="service-item">
        <h4>Cloud Integration</h4>
        <p>Seamless cloud integration for better scalability and flexibility.</p>
      </div>
      <div className="service-item">
        <h4>Data Analytics</h4>
        <p>Transform data into actionable insights for better business outcomes.</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" id="contact">
      <p>&copy; 2025 Intelion. All rights reserved.</p>
    </footer>
  );
}

export default App;
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
}

.header {
  background: #333;
  color: white;
  padding: 10px 0;
  text-align: center;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
}

.navbar-links {
  list-style: none;
  display: flex;
}

.navbar-links li {
  margin: 0 15px;
}

.navbar-links a {
  color: white;
  text-decoration: none;
}

.hero {
  background: #0073e6;
  color: white;
  text-align: center;
  padding: 100px 20px;
}

.cta-button {
  background: #ff9900;
  padding: 15px 30px;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 20px;
}

.about, .services {
  padding: 40px 20px;
  text-align: center;
}

.service-item {
  background: #f4f4f4;
  margin: 10px 0;
  padding: 20px;
}

.footer {
  background: #333;
  color: white;
  text-align: center;
  padding: 10px;
}
