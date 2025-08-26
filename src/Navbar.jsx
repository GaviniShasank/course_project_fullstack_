// Navbar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <h1 className="logo" onClick={() => navigate("/")}>
        f<span className="orange">(Y)</span> SOLUTIONS
      </h1>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/Course">Courses</a>
        <a href="/signin">Tracker</a>
        <a href="/About">About Us</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
}
