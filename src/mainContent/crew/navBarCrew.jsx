import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import "./Crew.css";

function NavBarCrew({ setSelectedName }) {
    const crewMembers = ["Douglas Hurley", "Mark Shuttleworth", "Victor Glover", "Anousheh Ansari"];
    const [currentIndex, setCurrentIndex] = useState(0);

    // 🔥 Atualiza o nome sempre que currentIndex muda
    useEffect(() => {
        setSelectedName(crewMembers[currentIndex]);
    }, [currentIndex]);

    const handleSwipe = (direction) => {
        const newIndex =
            direction === "left"
                ? (currentIndex + 1) % crewMembers.length
                : (currentIndex - 1 + crewMembers.length) % crewMembers.length;

        setCurrentIndex(newIndex);
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => handleSwipe("left"),
        onSwipedRight: () => handleSwipe("right"),
    });

    return (
        <div {...handlers} className="navBarCrew--container">
            <div className="navBarCrew--ul">
                <ul>
                    {crewMembers.map((member, index) => (
                        <li
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                        >
                            <i className={`fa-solid fa-circle ${currentIndex === index ? 'active' : ''}`}></i>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default NavBarCrew;
