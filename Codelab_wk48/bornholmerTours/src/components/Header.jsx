import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <header>
        <img src={logo} alt="Bornholmer Tours logo" />
        <h1 className="title">Bornholmer Tours</h1>
        <NavLink
          to="/login"                   
          className={({ isActive }) => (isActive ? "active login" : "login")}
        >
          Login   
        </NavLink>
      </header>
    </div>
  );
}

export default Header;
