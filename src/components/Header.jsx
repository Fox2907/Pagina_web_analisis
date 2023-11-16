import React from "react";
import "./Header.css";
import Button from "./Button";

const Header = () => {
  return (
    <div className="header-container">
      <img src="/src/assets/logo-emi.jpg" alt="" className="logo" />
      <div className="modulos">
        <h3 className="menu">Menu</h3>
        <h3 className="about-us">About us</h3>
        <Button type={"button-login"} name_button={"Iniciar sesión"} />
        <Button type={"button-signin"} name_button={"Registrarse"} />
      </div>
    </div>
  );
};

export default Header;
