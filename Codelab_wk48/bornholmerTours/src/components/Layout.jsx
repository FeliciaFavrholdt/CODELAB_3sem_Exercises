import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./SideBar";

const Layout = () => {
  return (
    <>
    <div className="layout">
      <Header />
      <Navbar />
      <Sidebar />
      <div className="main-content">
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
    </>
  );
};

export default Layout;
