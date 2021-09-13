import React from "react";
import "../css/Explore.css";

const Explore = ({ title, image }) => {
  return (
    <div className="explore">
      <div className="row-icon">
        <img className="icon" src={image} />
      </div>
      <div className="row-line">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default Explore;
