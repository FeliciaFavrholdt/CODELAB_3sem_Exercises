import { NavLink, Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Sidebar from "../components/SideBar";
import ContentBox from "../components/ContentBox";
import Footer from "../components/Footer";

function RootLayout() {
  return (
    <div className="root-layout">
      <Header />
      <Navbar />
      <Sidebar />
      <ContentBox />
      <Footer />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
