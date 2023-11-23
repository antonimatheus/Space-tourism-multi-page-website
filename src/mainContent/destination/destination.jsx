import React from "react";
import "./Destination.css"

function Destination() {
    return (
        <div className="Destination--container">
            <div className="Destination--content">
                <div className="Destination--title">
                    <h3><span>01</span> Pick up your destination</h3>
                </div>
                <div className="Destination--img">
                    <img src="src\assets\assets\destination\image-moon.png" alt="Planet" />
                </div>
            </div>

            <div className="Destination--planetInfo">
                <div className="Destination--text">
                    <div className="Destination--planetName">
                        <h1>Moon</h1>
                    </div>
                    <div className="Destination--planetText">
                        <p>
                        See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
                        regain perspective and come back refreshed. While you’re there, take in some history 
                        by visiting the Luna 2 and Apollo 11 landing sites.
                        </p>
                    </div>

                    <div className="Destination--row">
                    </div>

                    <div className="Destination--planetStats">
                        <div className="Destination--planetDistance">
                            <div className="Destination--planetDistanceText">
                                <p>Avg. Distance</p>
                            </div>
                            <div className="Destination--planetDistanceKm"> 
                                <p>384,400 Km</p>
                            </div>
                        </div>
                        <div className="Destination--planetTravelTime">
                            <div className="Destination--planetTravelTimeText">
                                <p>Est. Travel Time</p>
                            </div>
                            <div className="Destination--planetTravelTimeDay">
                                <p>3 Days</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Destination;