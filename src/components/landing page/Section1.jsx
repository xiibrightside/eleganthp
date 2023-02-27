import React from "react";
import { NavLink } from "react-router-dom";

const Section1 = () => {
  return (
    <div className="homepage-section1">
      <div className="section1-wrapper">
        <h1>ELEGANT HOME PRODUCTS</h1>
        <NavLink to="/products">
          <button>EXPLORE</button>
        </NavLink>

        <p>URBAN HOMECARE PRODUCTS AT YOUR DOORSTEPS</p>
      </div>
    </div>
  );
};

export default Section1;
