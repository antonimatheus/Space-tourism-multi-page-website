import React, { useState } from "react";
import "./Destination.css";

import NavBarDestination from "./NavBarDestination";
import { destinations } from "../data";

function Destination() {

    const [selectedDestination, setSelectedDestination] = useState("Moon");
    const selectedDestinationInfo = destinations.find(
        (item) => item.name === selectedDestination
    );

    const handleDestinationClick = (destination) => {
        setSelectedDestination(destination);
    };

    return (
        <div className="Destination--container">
            <div className="Destination--content">
                <div className="Destination--title">
                    <h3>
                        <span>01</span> Pick up your destination
                    </h3>
                </div>
                <div className="Destination--img">
                {selectedDestinationInfo && (
                    <img
                    src={selectedDestinationInfo.images.png}
                    alt="Planet"
                    key={selectedDestinationInfo.name}
                    />
                )}
                </div>
            </div>

        <div className="Destination--planetInfo">
            <div className="Destination--text">

            <NavBarDestination
                selectedDestination={selectedDestination}
                onDestinationClick={handleDestinationClick}
            />

            <div className="Destination--planetName">
                <h1>{selectedDestinationInfo?.name}</h1>
            </div>
            <div className="Destination--planetText">
                <p>{selectedDestinationInfo?.description}</p>
            </div>

            <div className="Destination--row"></div>

            <div className="Destination--planetStats">
                <div className="Destination--planetDistance">
                <div className="Destination--planetDistanceText">
                    <p>Avg. Distance</p>
                </div>
                <div className="Destination--planetDistanceKm">
                    <p>{selectedDestinationInfo?.distance}</p>
                </div>
                </div>
                <div className="Destination--planetTravelTime">
                <div className="Destination--planetTravelTimeText">
                    <p>Est. Travel Time</p>
                </div>
                <div className="Destination--planetTravelTimeDay">
                    <p>{selectedDestinationInfo?.travel}</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default Destination;
