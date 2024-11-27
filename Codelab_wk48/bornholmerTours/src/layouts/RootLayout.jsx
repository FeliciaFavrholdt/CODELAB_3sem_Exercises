import { NavLink, Outlet } from "react-router-dom";
import Header from "../components/Header";

function RootLayout() {
  return (
    <div className="root-layout">
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
