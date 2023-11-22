import React from "react";
import "./Home.css"

function Home() {
    return (
        <div className="Home--container">
            <div className="Home--content">
                <div className="Home--title">
                    <h3>So, you want to travel to</h3>
                    <h1>Space</h1>
                </div>
                <div className="Home--text">
                    <p>
                        Let’s face it; if you want to go to space, you might as well genuinely go to
                        outer space and not hover kind of on the edge of it. Well sit back, and relax
                        because we’ll give you a truly out of this world experience!
                    </p>
                </div>
            </div>
            <div className="Home--buttonExplore">
                <button>
                    Explore
                </button>
            </div>
        </div>
    )
}

export default Home;