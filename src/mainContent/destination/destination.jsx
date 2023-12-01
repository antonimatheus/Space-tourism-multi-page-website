import React, { useState } from "react";
import "./Destination.css";

import { destinations } from "../data";
import NavBarDestination from "./navBarDestinations";

function Destination() {

    const [selectedDestination, setSelectedDestination] = useState("Moon");
    const selectedDestinationInfo = destinations.find((item) => item.name === selectedDestination)

    return (
        <div className="Destination--container">
            <div className="Destination--content">
                <div className="Destination--title">
                    <h3>
                        <span>01</span> Pick up your destination
                    </h3>
                </div>
                <div className="Destination--img">
                    {
                        selectedDestinationInfo && (
                            <img src={selectedDestinationInfo.images.png} alt="Planet"/>
                        )
                    }
                </div>
            </div>

        <div className="Destination--planetInfo">
            <div className="Destination--text">
            <NavBarDestination
                setSelectedDestination={setSelectedDestination}
            />
            <div className="Destination--planetName">
                {
                    selectedDestinationInfo && (
                        <h1>{selectedDestinationInfo.name}</h1>
                    )
                }
            </div>
            <div className="Destination--planetText">
                {
                    selectedDestinationInfo && (
                        <p>{selectedDestinationInfo.description}</p>
                    )
                }
            </div>

            <div className="Destination--row"></div>

            <div className="Destination--planetStats">
                <div className="Destination--planetDistance">
                    <div className="Destination--planetDistanceText">
                        <p>Avg. Distance</p>
                    </div>
                    <div className="Destination--planetDistanceKm">
                        {
                            selectedDestinationInfo && (
                                <p>{selectedDestinationInfo.distance}</p>
                            )
                        }
                    </div>
                </div>
                <div className="Destination--planetTravelTime">
                    <div className="Destination--planetTravelTimeText">
                        <p>Est. Travel Time</p>
                    </div>
                    <div className="Destination--planetTravelTimeDay">
                        {
                            selectedDestinationInfo && (
                                <p>{selectedDestinationInfo.travel}</p>
                            )
                        }
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default Destination;
