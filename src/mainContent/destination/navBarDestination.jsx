import React from "react";
import "./Destination.css";

function NavBarDestination({ setSelectedDestination }) {
    
    return (
        <div className="NavBarDestination--container">
            <div className="NavBarDestination--ul">
                <ul>
                    <li onClick={() => setSelectedDestination("Moon")}>Moon</li>
                    <li onClick={() => setSelectedDestination("Mars")}>Mars</li>
                    <li onClick={() => setSelectedDestination("Europa")}>Europa</li>
                    <li onClick={() => setSelectedDestination("Titan")}>Titan</li>
                </ul>
            </div>
        </div>
    );
}

export default NavBarDestination;

