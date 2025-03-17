import React from "react";
import "./Destination.css";

function NavBarDestination({ selectedDestination, setSelectedDestination }) {
    return (
        <div className="NavBarDestination--container">
            <div className="NavBarDestination--ul">
                <ul>
                    {["Moon", "Mars", "Europa", "Titan"].map((dest) => (
                        <li 
                            key={dest} 
                            onClick={() => setSelectedDestination(dest)}
                            className={selectedDestination === dest ? "active" : ""}
                        >
                            {dest}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}


export default NavBarDestination;

