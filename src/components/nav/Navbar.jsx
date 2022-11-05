import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar row">
      <div>
        <img
          src="https://365psd.com/images/istock/previews/9126/91267209-restaurant-cafe-vector-logo-chef-or-cuisine-cooking-cookery-icon.jpg"
          alt=""
          width="90rem"
          height="90rem"
        />
      </div>
      <div className="linksdiv">
        <NavLink className="links" to="/">
          Home
        </NavLink>
        <NavLink className="links" to="/login">
          Login
        </NavLink>
        <NavLink className="links" to="/about">
          About
        </NavLink>
        <NavLink className="links" to="/logout">
          Logout
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
