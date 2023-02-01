import React, { useContext } from "react";
import "./toggle.css";
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";
import { ThemeContext } from "../../context";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <div
      className="t"
      onClick={handleClick}
      style={{ transform: "all 1s ease-in-out" }}
    >
      <img src={Sun} alt="" className="t-icon" />
      <img src={Moon} alt="" className="t-icon" />
      <div
        className="t-button"
        style={{
          transform: theme.state.darkMode
            ? "translateX(-15px)"
            : "translateX(15px)",
        }}
      ></div>
    </div>
  );
};

export default Toggle;
