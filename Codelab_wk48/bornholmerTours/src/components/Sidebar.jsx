import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <aside>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Admin
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/travels"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Travels
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
