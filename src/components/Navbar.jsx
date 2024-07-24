import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className="nav">
      <div className="logo"><span className="green-T">T</span>anya <span className="green-T">S</span>ingh</div>
      <ul className="comp">
        <li className={`nav-h ${activeSection === 'Hero' ? 'active' : ''}`}>
          <a href="#Hero">Home</a>
          <div className="line-home"></div>
        </li>
        <li className={`nav-ab ${activeSection === 'About' ? 'active' : ''}`}>
          <a href="#About">About Us</a>
          <div className="line-aboutus"></div>
        </li>
        <li className={`nav-p ${activeSection === 'Portfolio' ? 'active' : ''}`}>
          <a href="#Portfolio">Portfolio</a>
          <div className="line-portfolio"></div>
        </li>
        <li className={`nav-s ${activeSection === 'Skills' ? 'active' : ''}`}>
          <a href="#Skills">Skills</a>
          <div className="line-skill"></div>
        </li>
        <li className={`nav-b ${activeSection === 'Blogs' ? 'active' : ''}`}>
          <a href="#Blogs">Blogs</a>
          <div className="line-blogs"></div>
        </li>
        <li className={`nav-c ${activeSection === 'Contact' ? 'active' : ''}`}>
          <a href="#Contact">Contact Us</a>
          <div className="line-contact"></div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


