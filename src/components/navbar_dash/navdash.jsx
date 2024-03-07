import React from 'react';
import './navdash.css'; // You can create a CSS file for styling

const Navdash = () => {
  return (
    <div className="navbar">
      <div className="left-icons">
        {/* Icon on the extreme left */}
        <img className="jobmate" src="logo-img.png" ></img>
      </div>
      
      <div className="right-icons">
        {/* Icon on the extreme right */}
        <button className="right-button">Query box</button>
        {/* Spacer */}
        <span className="spacer"></span>
        {/* Button at the right */}
        <span className="right-icon">Icon right</span>
      </div>
    </div>
  );
};

export default Navdash;


