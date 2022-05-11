import React from "react";
import "./../../assets/styles/navs.scss";
function Navbar({ example }) {
  const burger = () => {
    let burger = document.querySelector(".burger");
    burger.classList.toggle("active");
  };

  return (
    <>
      {!example && (
        <nav className="ct-2 ct-text-white ct-bg-dark ct-between">
          <div className="ct-navbar">
            <div className="burger" onClick={() => burger()}>
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
      )}

      {example && (
        <>
          <nav className="ct-2 ct-text-white ct-bg-primary ct-between">
            <div className="ct-navbar">
              <div className="burger" onClick={() => burger()}>
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
              <div className="burger" onClick={() => burger()}>
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
              <div className="burger" onClick={() => burger()}>
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
        </>
      )}
    </>
  );
}

export default Navbar;
