import React from "react";
import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const { pathname } = useLocation();
  return (
    <header className="bar">
      <div className="inner">
        <div className="brand">
          <img
            src="https://amrutam.co.in/cdn/shop/files/only_text_Amrutam_Logo_in_Green-09.png?height=628&pad_color=fff7e2&v=1654240030&width=1200"
            alt="logo"
          />
        </div>
        <nav className="links">
          <Link to="/">Home</Link>
          <Link to="/doctors" className="find-doctors">
            Find Doctors
          </Link>
          <a href="#">About Us</a>
        </nav>
        <div className="auth">
          <button className="btn">Login</button>
          <button className="btn primary">Sign-up</button>
        </div>
      </div>
    </header>
  );
}
