import React from "react";
import { useSwipeable } from "react-swipeable";
import "./Crew.css";

function NavBarCrew({ setSelectedName }) {
    const crewMembers = ["Douglas Hurley", "Mark Shuttleworth", "Victor Glover", "Anousheh Ansari"];
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const handleSwipe = (deltaX) => {
        if (deltaX < 0) {
            // Swipe left (next)
            setCurrentIndex((prevIndex) => (prevIndex + 1) % crewMembers.length);
        } else {
            // Swipe right (previous)
            setCurrentIndex((prevIndex) => (prevIndex - 1 + crewMembers.length) % crewMembers.length);
        }
        setSelectedName(crewMembers[currentIndex]);
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => handleSwipe(-1),
        onSwipedRight: () => handleSwipe(1),
    });

    return (
        <div {...handlers} className="navBarCrew--container">
            <div className="navBarCrew--ul">
                <ul>
                    {crewMembers.map((member, index) => (
                        <li key={index} onClick={() => setSelectedName(member)}>
                            <i className={`fa-solid fa-circle ${currentIndex === index ? 'active' : ''}`}></i>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default NavBarCrew;
