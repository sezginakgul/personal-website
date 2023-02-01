import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        {/* {new Date().getFullYear()}  */}© Copyright. All Rights Reserved.
      </div>
      <div>
        Designed by <span>Sezgin Akgül</span>
      </div>
    </div>
  );
};

export default Footer;
