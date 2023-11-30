import React, { useState } from "react";
import "./Crew.css"
import NavBarCrew from "./navBarCrew";
import { crew } from "../data";

function Crew() {

    const [selectedName, setSelectedName] = useState("Douglas Hurley");
    const selectedCrewMember = crew.find((item) => item.name === selectedName);

    return (
        <div className="Crew--container">
            <div className="Crew--content">
                <div className="Crew--titlePage">
                    <h3><span>02</span> Meet your crew</h3>
                </div>
                <div>
                    <div className="Crew--title">
                    <div className="Crew--titlePosition">
                        {
                            selectedCrewMember && (
                                <h3>{selectedCrewMember.role}</h3>
                            )
                        }
                    </div>
                        <div className="Crew--titleName">
                            {
                                selectedCrewMember && (
                                    <h1>{selectedCrewMember.name}</h1>
                                )
                            }
                        </div>
                    </div>
                    <div className="Crew--text">
                        {
                            selectedCrewMember && (
                                <p>{selectedCrewMember.bio}</p>
                            )
                        }
                    </div>
                </div>
                <NavBarCrew setSelectedName={setSelectedName}/>
            </div>
            <div className="Crew--img"> 
            {
                selectedCrewMember && (
                    <img src={selectedCrewMember.images.png} alt="img" />
                )
            }
            </div>
        </div>
    )
}

export default Crew;