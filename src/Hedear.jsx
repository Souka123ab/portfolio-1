import React, { useState } from 'react';
import './styl.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="nav">
        <div className="logo">
        <h3>SOUKA</h3><span>/</span><h3>AYNA</h3>

        </div>
        <nav>
          <ul className={menuOpen ? 'nav-links active' : 'nav-links'}>
            <li><a href="#home">Accueil</a></li>
            <li><a href="#about">À propos</a></li>
            <li><a href="#projects">Projets</a></li>
            <li><a href="#skills">Compétences</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>
      </div>
    </header>
  );
}

export default Header;
