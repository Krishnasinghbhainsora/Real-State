// Header.jsx
import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../componetsCss/Header.css"; // Import external CSS file
import UserLayout from "./UserLayout"; // Import UserLayout

const Header = () => {
  return (
    <header className="header bg-white" >
      <div className="header-container ">
        <div className="logo">
          <a href="/">
            <img src="/images/zwolf.jpeg" alt="Logo" style={{width:"160px", height:"auto"}}/>
          </a>
        </div>

        <nav className="nav">
         
          <UserLayout />
          {/* <Link to="/login" className="nav-link" style={{ color: "#000", marginRight:"15px" }}>
            Login
          </Link> */}
          
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
