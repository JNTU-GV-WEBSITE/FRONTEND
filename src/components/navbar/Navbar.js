import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.jpg'

function Navbar() {
  return (
    <div className="App">
      <NavbarComponent />
    </div>
  );
}

function NavbarComponent() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="University Logo" />
      </div>
      <div className="navbar-title">
        JAWAHARLAL NEHRU TECHNOLOGICAL UNIVERSITY GURAJADA VIZIANAGARAM
      </div>
    </nav>
  );
}

export default Navbar;
