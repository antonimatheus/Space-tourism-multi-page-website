import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "/src/assets/assets/shared/logo.svg";
import "./navBar.css";

import icon_burger from "/src/assets/assets/shared/icon-hamburger.svg";
import close_icon from "/src/assets/assets/shared/icon-close.svg";

function NavBar() {
  const [burger, setBurger] = useState(false);

  const navBarClicked = () => {
    setBurger(!burger);
  };

  return (
    <div className="NavBar--container">
      <div className="NavBar--logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="NavBar--ul">
        <ul>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-li" : "")}
          >
            <li>
              <span>00</span> Home
            </li>
          </NavLink>

          <NavLink
            to="/destination"
            className={({ isActive }) => (isActive ? "active-li" : "")}
          >
            <li>
              <span>01</span> Destination
            </li>
          </NavLink>

          <NavLink
            to="/crew"
            className={({ isActive }) => (isActive ? "active-li" : "")}
          >
            <li>
              <span>02</span> Crew
            </li>
          </NavLink>

          <NavLink
            to="/technology"
            className={({ isActive }) => (isActive ? "active-li" : "")}
          >
            <li>
              <span>03</span> Technology
            </li>
          </NavLink>
        </ul>
      </div>

      <div className="NavBar--ulBurger" onClick={navBarClicked}>
        <img src={burger ? close_icon : icon_burger} alt="menu" />
        {burger && (
          <ul>
            <NavLink
              to="/"
              onClick={navBarClicked}
              className={({ isActive }) => (isActive ? "active-li" : "")}
            >
              <li>
                <span>00</span> Home
              </li>
            </NavLink>

            <NavLink
              to="/destination"
              onClick={navBarClicked}
              className={({ isActive }) => (isActive ? "active-li" : "")}
            >
              <li>
                <span>01</span> Destination
              </li>
            </NavLink>

            <NavLink
              to="/crew"
              onClick={navBarClicked}
              className={({ isActive }) => (isActive ? "active-li" : "")}
            >
              <li>
                <span>02</span> Crew
              </li>
            </NavLink>

            <NavLink
              to="/technology"
              onClick={navBarClicked}
              className={({ isActive }) => (isActive ? "active-li" : "")}
            >
              <li>
                <span>03</span> Technology
              </li>
            </NavLink>
          </ul>
        )}
      </div>
    </div>
  );
}

export default NavBar;
