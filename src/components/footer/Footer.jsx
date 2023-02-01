import React from "react";
import "./footer.css";

const Footer = ({ darkMode }) => {
  return (
    <div className="footer" style={{ backgroundColor: darkMode && "#222" }}>
      <div>© Copyright. All Rights Reserved.</div>
    </div>
  );
};

export default Footer;
