/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="navigation-wrapper">
        <div className="nav-element">
          <NavLink to="/">HOME</NavLink>
        </div>
        <div className="nav-element">
          <NavLink to="/about">ABOUT</NavLink>
        </div>
        <div className="nav-element">
          <a href="#0">SERVICES</a>
        </div>
        <div className="nav-element">
          <NavLink to="/products">PRODUCTS</NavLink>
        </div>
      </div>
      <div className="socials-wrapper">
        <button className="social-icon">
          <a href="#0">
            <i className="fa-brands fa-amazon"></i>
          </a>
        </button>
        <button className="social-icon">
          <a href="#0">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </button>
        <button className="social-icon">
          <a href="#0">
            <i className="fa-solid fa-hashtag"></i>
          </a>
        </button>
        <button className="social-icon">
          <a href="#0">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
