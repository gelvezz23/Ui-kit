import React from "react";
import Asidebar from "../Asidebar";
import MyIcon from "./../../assets/images/icon.png";
import "./../../assets/styles/navs.scss";

function Navbar({ example }) {
  const burger = (burgers) => {
    let burger = document.querySelector(`.${burgers}`);
    burger.classList.toggle("active");
    document.querySelector("body").classList.toggle("active");
    //let sidebar = document.querySelector(".sidebar");
    //sidebar.classList.toggle("active");
  };

  return (
    <>
      {!example && (
        <nav className="ct-2 ct-text-white ct-bg-dark ct-between">
          <div className="ct-navbar">
            <div className="burger" onClick={() => burger("burger")}>
              <div className="line ct-bg-white"></div>
              <div className="line ct-bg-white"></div>
              <div className="line ct-bg-white"></div>
            </div>
            <div className="ct-icon-nav">
              <picture>
                <img src={MyIcon} alt="icon" />
              </picture>
            </div>
          </div>
          <ul className="ct-navbar-options">
            <li className="ct-text-white">option 1</li>
            <li className="ct-text-white">option 1</li>
            <li className="ct-text-white">option 1</li>
          </ul>
        </nav>
      )}

      {example && (
        <>
          <nav className="ct-2 ct-text-white ct-bg-primary ct-between">
            <div className="ct-navbar">
              <div className="burger-2" onClick={() => burger("burger-2")}>
                <div className="line ct-bg-white"></div>
                <div className="line ct-bg-white"></div>
                <div className="line ct-bg-white"></div>
              </div>
              <div className="ct-icon-nav">Navbar</div>
            </div>
            <ul className="ct-navbar-options">
              <li className="ct-text-white">option 1</li>
              <li className="ct-text-white">option 1</li>
              <li className="ct-text-white">option 1</li>
            </ul>
          </nav>

          <nav className="ct-2 ct-text-white ct-bg-secondary ct-between">
            <div className="ct-navbar">
              <div className="burger-3" onClick={() => burger("burger-3")}>
                <div className="line ct-bg-white"></div>
                <div className="line ct-bg-white"></div>
                <div className="line ct-bg-white"></div>
              </div>
              <div className="ct-icon-nav">Navbar</div>
            </div>
            <ul className="ct-navbar-options">
              <li className="ct-text-white">option 1</li>
              <li className="ct-text-white">option 1</li>
              <li className="ct-text-white">option 1</li>
            </ul>
          </nav>

          <nav className="ct-2 ct-text-white ct-bg-dark ct-between">
            <div className="ct-navbar">
              <div className="burger-4" onClick={() => burger("burger-4")}>
                <div className="line ct-bg-white"></div>
                <div className="line ct-bg-white"></div>
                <div className="line ct-bg-white"></div>
              </div>
              <div className="ct-icon-nav">Navbar</div>
            </div>
            <ul className="ct-navbar-options">
              <li className="ct-text-white">option 1</li>
              <li className="ct-text-white">option 1</li>
              <li className="ct-text-white">option 1</li>
            </ul>
          </nav>
          <Asidebar />
        </>
      )}
    </>
  );
}

export default Navbar;
