import React from "react";
import { NavLink } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./HeaderLogin.css";

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
        <Button
          icon={"public/user.svg"}
          type={"button-user"}
          name_button={""}
        />
      </div>
    </div>
  );
};

export default Header;
