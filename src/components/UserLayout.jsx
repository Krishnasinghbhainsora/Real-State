// import React from 'react';
// import { Dropdown, Button } from 'react-bootstrap';
// import '../componetsCss/SignUp&Login.css';  // Ensure you have the CSS file

// const UserLayout = () => {
//   const isLoggedIn = true; // Static logged-in state
//   const userName = 'Praveen'; // Static user name

//   return (
//     <div className="container-fluid d-flex justify-content-between align-items-center">
//       {isLoggedIn ? (
//         <Dropdown>
//           <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
//             Hi, {userName}
//           </Dropdown.Toggle>

//           <Dropdown.Menu>
//             <Dropdown.Item href="/requested-properties">Requested Properties</Dropdown.Item>
//             <Dropdown.Item href="/manage-properties">Manage Properties</Dropdown.Item>
//             <Dropdown.Item href="/profile">My Profile</Dropdown.Item>
//             <Dropdown.Item href="/sign-out">Sign Out</Dropdown.Item>
//           </Dropdown.Menu>
//         </Dropdown>
//       ) : (
//         <Button variant="outline-light" href="/login">
//           Login
//         </Button>
//       )}


//     </div>
//   );
// };

// export default UserLayout;


// UserLayout.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../componetsCss/UserLayout.css"; // Ensure this file contains styles for the dropdown
import { useContext } from "react";
import { AccountContext } from "../Contexts/UserContext";
const UserLayout = () => {
  const username = "Krishna"; // Demo name, you can later replace it with dynamic data
  const { user, logout } = useContext(AccountContext);

  return (
    <div className="user-layout">
      {user&&(
      <div className="user-info">
        <span className="user-icon">{user?.user?.name?.split("")[0]}</span> {/* This can be replaced with the user's image or initial */}
        <span className="user-name">Hi, {user?.user?.name.split(" ")[0]}</span>
        {/* {console.log("checking")} */}
        <span className="dropdown-arrow"></span> {/* Icon to indicate dropdown */}
      </div>
)}
      <div className="user-dropdown">
        <Link to="/profile" className="dropdown-item">Requested Properties</Link>
        <Link to="/profile" className="dropdown-item">Manage Properties</Link>


        <Link to="/profile" className="dropdown-item">My Profile</Link>
        <Link to="/help" className="dropdown-item">Help</Link>
        <Link to="" onClick={() => {logout()}} className="dropdown-item">Sign Out</Link>
      </div>
    </div>
  );
};

export default UserLayout;
