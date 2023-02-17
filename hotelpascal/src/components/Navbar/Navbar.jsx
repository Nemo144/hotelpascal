import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import "./navbar.scss";

const Menu = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#rooms">Rooms</a>
      </p>
      <p>
        <a href="#about">About</a>
      </p>
      <p>
        <a href="#gallery">Gallery</a>
      </p>
      <p>
        <a href="#contact">Contact</a>
      </p>
    </>
  );
};

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-logo">Logo</div>
      {/* <ul className="navbar-links">
        {["Home", "Rooms", "About", "Gallery", "Contact"].map((item) => (
          <li className="">
            <div />
            <a href="/">{item}</a>
          </li>
        ))}
      </ul> */}
      <div className="navbar-links">
        <Menu className="" />
      </div>

      <div className="navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            {["Home", "Rooms", "Gallery", "Contact", "About"].map((item) => (
              <ul>
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              </ul>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
