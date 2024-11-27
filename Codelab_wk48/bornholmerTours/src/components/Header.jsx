import React from "react";
import logo from "../assets/logo.png";
import Login from "./Login";

const Header = () => {
  return (
    <>
    <header>
      <logo src={logo} alt="Bornholmer Tours logo" />
      <h1 className="titel">bornholmer Tours</h1>
    </header>
    <Login />
    </>
  );
};

export default Header;
