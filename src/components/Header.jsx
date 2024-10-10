// Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../componetsCss/Header.css"; // Import external CSS file
import UserLayout from "./UserLayout"; // Import UserLayout
import { useContext } from "react";
import { AccountContext } from "../Contexts/UserContext";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const { user } = useContext(AccountContext)
  const navigate = useNavigate()
  const postproperty = async () => {
    // console.log('postproperty called');
    if (user) {
      
      window.location.href = '/post-property';
    } else {
   
   alert("Please login or create Account ")
    window.location.href = '/login'
    }
  }
  return (
    <header className="header">
      {/* {console.log("jarnc ",user)} */}
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src="/images/Logo.png" alt="Logo" />
          </a>
        </div>

        <nav className="nav">

          <UserLayout />
          {/* <div className="nav" > */}
          {!user && (
            <Link to="/login" className="nav-link" style={{ color: "#000" }}>
              Login
            </Link>
          )}
          {!user && (
            <Link to="/signup" className="nav-link" style={{ color: "#000" }}>
              Sign Up
            </Link>
          )}
          <Link
            onClick={postproperty}
            className="nav-link "
            // to="/post-property"
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
