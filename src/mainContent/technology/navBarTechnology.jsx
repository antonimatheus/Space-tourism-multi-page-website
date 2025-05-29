import React, { useState, useEffect } from "react";
import "./Technology.css";

function NavBarTechnology({ setStarShip }) {
    const techList = ["Launch vehicle", "Spaceport", "Space capsule"];
    const [currentIndex, setCurrentIndex] = useState(0);

    // Sempre que currentIndex mudar, atualiza o starShip no componente pai
    useEffect(() => {
        setStarShip(techList[currentIndex]);
    }, [currentIndex]);

    return (
        <div className="navBarTechnology--container">
            <div className="navBarTechnology--ul">
                <ul>
                    {techList.map((tech, index) => (
                        <li
                            key={index}
                            className={currentIndex === index ? "active" : ""}
                            onClick={() => setCurrentIndex(index)}
                        >
                            {index + 1}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default NavBarTechnology;
