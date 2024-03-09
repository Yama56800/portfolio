import React, { useState, useEffect } from "react";
import logo from'../../logo.webp';
export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = 1010; 
      
      setIsSticky(scrollY > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
      <i className="logo"><img src={logo} alt="logo" /></i>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#accueil" className="nav-link">
            Accueil
          </a>
        </li>
        <li className="nav-item">
          <a href="#presentation" className="nav-link">
            Présentation
          </a>
        </li>
        <li className="nav-item">
          <a href="#realisations" className="nav-link">
            Réalisations
          </a>
        </li>
        <li className="nav-item">
          <a href="#competences" className="nav-link">
            Compétences
          </a>
        </li>
        <li className="nav-item">
          <a href="#Unprojet" className="nav-link">
            Un Projet ?
          </a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </li>
        <li className="nav-item">
        <a href={`${process.env.PUBLIC_URL}/cv.pdf`} target="_blank" rel="noopener noreferrer">Mon CV</a>
        </li>
      </ul>
    </nav>
  );
}