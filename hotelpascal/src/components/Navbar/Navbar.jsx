import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Logo</div>
      <ul className="navbar-links">
        {["Home", "Rooms", "Gallery", "Contact", "About"].map((item) => (
          <li className="">
            <div />
            <a href="/">{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
