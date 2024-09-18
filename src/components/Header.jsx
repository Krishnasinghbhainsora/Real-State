// Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../componetsCss/Header.css"; // Import external CSS file
import UserLayout from "./UserLayout"; // Import UserLayout

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src="/images/Logo.png" alt="Logo" />
          </a>
        </div>

        <nav className="nav">
         
          <UserLayout />
          <Link to="/login" className="nav-link" style={{ color: "#000" }}>
            Login
          </Link>
          <Link to="/signup" className="nav-link" style={{ color: "#000" }}>
            Sign Up
          </Link>
          <Link
            to="/post-property"
            className="nav-link "
            style={{
              backgroundColor: "#FCCA36",
              borderRadius: "20px",
              color: "#000",
            }}
          >
            Post Property
          </Link>

          
        </nav>
      </div>
    </header>
  );
};

export default Header;
