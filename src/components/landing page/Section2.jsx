/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import whyus1 from "../../images/quality.png";
import whyus2 from "../../images/service.png";
import whyus3 from "../../images/time.png";

const Section2 = () => {
  return (
    <div className="homepage-section2">
      <h2>WHY US</h2>
      <div className="whyus-container">
        <div className="whyus-cell">
          <div className="whyus-image-div">
            <img src={whyus1}></img>
          </div>
          <h3>QUALITY</h3>
          <p>
            Built in the best factories and assembled in our Delhi Workshops,
            using High Quality Materials.
          </p>
        </div>
        <div className="whyus-cell">
          <div className="whyus-image-div">
            <img src={whyus2}></img>
          </div>
          <h3>SERVICE</h3>
          <p>
            Stored at sustainable and safe Storage facilities all across Delhi
            at easily accessible Locations.
          </p>
        </div>
        <div className="whyus-cell">
          <div className="whyus-image-div">
            <img src={whyus3}></img>
          </div>
          <h3>TIME</h3>
          <p>
            Timely Deliveries and Installation is our crowned Jewel, We respect
            your time like our own.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
