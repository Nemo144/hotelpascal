import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import "./scrollbutton.scss";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="button">
      <FaArrowCircleUp
        onClick={ScrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      />
    </div>
  );
};

export default ScrollButton;
