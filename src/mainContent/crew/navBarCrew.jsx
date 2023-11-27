import React from "react";
import "./Crew.css"

function NavBarCrew({setSelectedName}) {

    return (
        <div className="navBarCrew--container">
            <div className="navBarCrew--ul">
                <ul>
                    <li onClick={() => setSelectedName("Douglas Hurley")}><i class="fa-solid fa-circle"></i></li>
                    <li onClick={() => setSelectedName("Mark Shuttleworth")}><i class="fa-solid fa-circle"></i></li>
                    <li onClick={() => setSelectedName("Victor Glover")}><i class="fa-solid fa-circle"></i></li>
                    <li onClick={() => setSelectedName("Anousheh Ansari")}><i class="fa-solid fa-circle"></i></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBarCrew;