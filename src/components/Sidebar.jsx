import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <a href="#0">
        <div className="legacy-logo">
          <button>
            <i className="fa-solid fa-indian-rupee-sign"></i>
          </button>
        </div>
      </a>
      <div className="navigation-wrapper">
        <a className="nav-element" href="#0">
          HOME
        </a>
        <a className="nav-element" href="#0">
          ABOUT
        </a>
        <a className="nav-element" href="#0">
          SERVICES
        </a>
        <a className="nav-element" href="#0">
          PRODUCTS
        </a>
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
