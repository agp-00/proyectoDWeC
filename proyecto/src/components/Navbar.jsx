import React from 'react';
import '../styles.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">Flecha</a>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#artists">Artists</a></li>
        <li><a href="#exhibitions">Exhibitions</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
