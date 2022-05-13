import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavbarPage from "./Navbar";

function Layout(props) {
  return (
    <div>
      <NavbarPage />
      <p> {props.component}</p>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
