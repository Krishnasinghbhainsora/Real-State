import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../componetsCss/UserLayout.css"; // Assuming you will style accordingly

const UserLayout = () => {
  const user = {
    name: "Krishna", 
    isLoggedIn: true, 
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Get the first letter of the user's name
  const getUserInitial = (name) => {
    return name.charAt(0).toUpperCase();
  };

  // Close the dropdown
  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="user-layout">
      {user.isLoggedIn && (
        <div className="user-info" onClick={toggleDropdown}>
          <span className="user-icon">{getUserInitial(user.name)}</span>
          <span className="user-name">Hi, {user.name.split(" ")[0]}</span>
          <span className={`dropdwn-arrow ${dropdownOpen ? "open" : ""}`}></span>
        </div>
      )}

      {/* Dropdown menu */}
      {dropdownOpen && (
        <div className="user-dropdwn">
          <Link to="/requested-properties" className="dropdwn-item" onClick={closeDropdown}>
            Requested Properties
          </Link>
          <Link to="/manage-property" className="dropdwn-item" onClick={closeDropdown}>
            Manage Properties
          </Link>
          <Link to="/profile" className="dropdwn-item" onClick={closeDropdown}>
            My Profile
          </Link>
          <Link to="/help" className="dropdwn-item" onClick={closeDropdown}>
            Help
          </Link>
          <Link to="/logout" className="dropdwn-item" onClick={closeDropdown}>
            Sign Out
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserLayout;
