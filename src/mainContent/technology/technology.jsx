import React from "react";
import "./Technology.css"
import NavBarTechnology from "./navBarTechnology";

function Technology() {
    return (
        <div className="Technology--container">
            <div className="Technology--content">
                <div className="Technology--titlePage">
                    <h3><span>03</span> Space launch 101</h3>
                </div>
                <div className="Technology--contentBlock">
                    <NavBarTechnology />
                    <div>
                        <div className="Technology--title">
                            <div className="Technology--subTitle">
                                <h4>The terminology...</h4>
                            </div>
                            <div className="Technology--titleName">
                                <h1>Space capsule</h1>
                            </div>
                        </div>
                        <div className="Technology--text">
                            <p>
                                A space capsule is an often-crewed spacecraft that uses a blunt-body reentry
                                capsule to reenter the Earth's atmosphere without wings. Our capsule is where
                                you'll spend your time during the flight. It includes a space gym, cinema,
                                and plenty of other activities to keep you entertained.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Technology--img">
                <img src="src/assets/assets/technology/image-space-capsule-portrait.jpg" alt="img" />
            </div>
        </div>
    )
}

export default Technology;