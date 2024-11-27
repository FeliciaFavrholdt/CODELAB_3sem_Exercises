import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
