import React from "react";
import "./Destination.css";

function NavBarDestination({ selectedDestination, onDestinationClick }) {
    const destinations = ["Moon", "Mars", "Europa", "Titan"];

    return (
        <div className="NavBarDestination--container">
        <div className="NavBarDestination--ul">
            <ul>
            {destinations.map((destination, index) => (
                <li
                key={index}
                className={selectedDestination === destination ? "active" : ""}
                onClick={() => onDestinationClick(destination)}
                >
                {destination}
                </li>
            ))}
            </ul>
        </div>
        </div>
    );
}

export default NavBarDestination;
