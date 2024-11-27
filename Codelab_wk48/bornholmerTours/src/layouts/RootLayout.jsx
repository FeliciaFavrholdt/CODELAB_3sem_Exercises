import { NavLink, Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Sidebar from "../components/SideBar";
import Footer from "../components/Footer";

function RootLayout() {
  return (
    <div className="root-layout">
      <Header />
      <Navbar />
      <Sidebar />
      <Footer />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
