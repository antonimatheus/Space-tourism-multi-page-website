import React from "react";
import "./Technology.css"

function NavBarTechnology({setStarShip}) {
    return (
        <div className="navBarTechnology--container">
            <div className="navBarTechnology--ul">
                <ul>
                    <li onClick={() => setStarShip("Launch vehicle")}>1</li>
                    <li onClick={() => setStarShip("Spaceport")}>2</li>
                    <li onClick={() => setStarShip("Space capsule")}>3</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBarTechnology;