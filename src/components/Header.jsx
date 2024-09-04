import React from 'react';
import { Link } from 'react-router-dom';
import '../componetsCss/Header.css'; // Import external CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
         <a href="/"><img src="/images/Logo.png" alt="Logo"  /></a>
          
        </div>
       
        <nav className="nav">
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/signup" className="nav-link">Sign Up</Link>
          <Link to="/post-property" className="nav-link">Post Property </Link>


        </nav>
      </div>
    </header>
  );
};

export default Header;
