import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import { Nav, Container } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

const NavbarPage = () => {
  const navigate = useNavigate();
  const handlesubmit = () => {
    navigate("/login");
  };
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav>
            <div style={{ marginRight: "20px" }}>
              <NavLink
                to="/"
                style={{ color: "white", textDecoration: "none" }}
              >
                Home
              </NavLink>
            </div>
            <div style={{ marginRight: "20px" }}>
              <NavLink
                to="/about"
                style={{ color: "white", textDecoration: "none" }}
              >
                About
              </NavLink>
            </div>
            <div style={{ marginRight: "20px" }}>
              <NavLink
                to="/showtable"
                style={{ color: "white", textDecoration: "none" }}
              >
                {" "}
                ShowAllData
              </NavLink>
            </div>
          </Nav>
          <div style={{ marginRight: "2px" }}>
            <button
              type="submit"
              style={{
                backgroundColor: "#04aa6d",
                color: "white",
                padding: "8px 8px",
                margin: "2px 0",
                border: "none",
              }}
              onClick={handlesubmit}
            >
              Logout
            </button>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarPage;
