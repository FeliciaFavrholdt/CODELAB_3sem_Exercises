import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <logo src={logo} alt="Bornholmer Tours logo" />
        <h1 className="titel">bornholmer Tours</h1>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "active login" : "login")}
          >
            Login
          </NavLink>
      </header>
    </>
  );
};

export default Header;
