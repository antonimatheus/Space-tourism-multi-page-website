import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/assets/shared/logo.svg"
import "./navBar.css"

function NavBar() {

const [burger, setBurger] = useState(false)

const navBarClicked = () => {
    setBurger(!burger)
}

    return (
        <div className="NavBar--container">
            <div className="NavBar--logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="NavBar--ul">
                <ul>
                    <Link to="/"><li><span>00</span> Home</li></Link>
                    <Link to="/destination"><li><span>01</span> Destination</li></Link>
                    <Link to='/crew'><li><span>02</span> Crew</li></Link>
                    <Link to='/technology'><li><span>03</span> Technology</li></Link>
                </ul>
            </div>
            
            <div className="NavBar--ulBurger" onClick={navBarClicked}>
                <img src={burger ? "src/assets/assets/shared/icon-close.svg" : "src/assets/assets/shared/icon-hamburger.svg"} alt="img" />
                {
                    burger && (
                    <ul>
                        <Link to="/"><li><span>00</span> Home</li></Link>
                        <Link to="/destination"><li><span>01</span> Destination</li></Link>
                        <Link to='/crew'><li><span>02</span> Crew</li></Link>
                        <Link to='/technology'><li><span>03</span> Technology</li></Link>
                    </ul>  
                    )
                }
            </div>
        </div>
    )
}

export default NavBar;