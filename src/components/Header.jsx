import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import Button from "./Button";

const Header = () => {
  return (
    <div className="header-container">
      <img src="/src/assets/logo-emi.jpg" alt="" className="logo" />
      <div className="modulos">
        <NavLink to="/" style={{ textDecoration: "none", color: "" }}>
          <h3 className="menu">Home</h3>
        </NavLink>
        <h3 className="menu">Menu</h3>
        <h3 className="about-us">About us</h3>
        <NavLink to="/Login" style={{ textDecoration: "none", color: "" }}>
          <Button type={"button-login"} name_button={"Iniciar sesión"} />
        </NavLink>
        <Button type={"button-signin"} name_button={"Registrarse"} />
      </div>
    </div>
  );
};

export default Header;
