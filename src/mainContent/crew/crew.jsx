import React from "react";
import "./Crew.css"
import navBarCrew from "./navBarCrew"

function Crew() {
    return (
        <div className="Crew--container">
            <div className="Crew--content">
                <div className="Crew--titlePage">
                    <h3><span>02</span> Meet your crew</h3>
                </div>
                <div>
                    <div className="Crew--title">
                        <div className="Crew--titlePosition">
                            <h3>Commander</h3>
                        </div>
                        <div className="Crew--titleName">
                            <h1>Douglas Hurley</h1>
                        </div>
                    </div>
                    <div className="Crew--text">
                        <p>
                            Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
                            and former NASA astronaut. He launched into space for the third time as
                            commander of Crew Dragon Demo-2.
                        </p>
                    </div>
                </div>
                <navBarCrew />
            </div>
            <div className="Crew--img">
                <img src="src/assets/assets/crew/image-douglas-hurley.png" alt="img" />
            </div>
        </div>
    )
}

export default Crew;