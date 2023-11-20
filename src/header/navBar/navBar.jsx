import React from "react";
import logo from "/src/assets/assets/shared/logo.svg"
import "./navBar.css"

function NavBar() {
    return (
        <div className="NavBar--container">
            <div className="NavBar--logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="NavBar--ul">
                <ul>
                    <li><span>00</span> Home</li>
                    <li><span>01</span> Destination</li>
                    <li><span>02</span> Crew</li>
                    <li><span>03</span> Technology</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;