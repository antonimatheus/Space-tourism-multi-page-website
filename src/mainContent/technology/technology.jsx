import React, { useState } from "react";
import "./Technology.css"
import NavBarTechnology from "./navBarTechnology";
import { Data } from "../data";

function Technology() {

    const [starShip, setStarShip] = useState("Launch vehicle")
    const selectStarShip = Data.technology.find((item) => item.name === starShip)

    return (
        <div className="Technology--container">
            <div className="Technology--content">
                <div className="Technology--titlePage">
                    <h3><span>03</span> Space launch 101</h3>
                </div>
                <div className="Technology--contentBlock">
                    <NavBarTechnology setStarShip={setStarShip}/>
                    <div>
                        <div className="Technology--title">
                            <div className="Technology--subTitle">
                                <h4>The terminology...</h4>
                            </div>
                            <div className="Technology--titleName">
                                {
                                    selectStarShip && (
                                        <h1>{selectStarShip.name}</h1>
                                    )
                                }
                            </div>
                        </div>
                        <div className="Technology--text">
                            {
                                selectStarShip && (
                                    <p>{selectStarShip.description}</p>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="Technology--img">
                {
                    selectStarShip && (
                        <img src={selectStarShip.images.portrait} alt="" />
                    )
                }
            </div>
        </div>
    )
}

export default Technology;