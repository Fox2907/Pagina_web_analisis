import React, { useState } from "react";
import "./Button.css";

const Button = ({ icon, type, name_button }) => {
  const [isButtonActive, setIsButtonActive] = useState(false);
  const handleClick = () => {
    setIsButtonActive(!isButtonActive);

    switch (type) {
      case "button-login":
        console.log("Log In");
        break;
      case "button-buy":
        console.log("Comprar");
        break;
      case "button-signin":
        console.log("Sign in");
        break;
      case "button-menuimage":
        console.log("Sign in");
        break;
    }
  };
  const name_class = `${type} ${isButtonActive ? "active" : ""}`;
  return (
      <button onClick={handleClick} className={name_class}>
        {icon && <img src={icon} alt="" />} 
        {name_button}
      </button>
  );
};
export default Button;
