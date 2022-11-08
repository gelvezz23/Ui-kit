import React from "react";
import MyIcon from "./../../assets/images/icon.png";

import "./../../assets/styles/navs.scss";
const Asidebar = () => {
  return (
    <div className="sidebar ct-bg-dark">
      <div className="profile ct-text-white">
        <picture>
          <img src={MyIcon} alt="icon" />
        </picture>
        <h3>Carlos Gomez</h3>
        <p>Senior Frontend Developer</p>
      </div>
      <ul>
        <li>
          <a href="/" className="active">
            <span className="item">Home</span>
          </a>
        </li>
        <li>
          <a href="/">
            <span className="item">My Dashboard</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Asidebar;
