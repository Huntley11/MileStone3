import React from "react";
import Navigation from "./Navigation";
import Appointment from "./Appointment";

function HomePage() {
    return (
        <div>
            <Navigation/>
            <div className="body">
                <Appointment />
                <div>
                    <img src="./images/midnightPurpleWrapRoll.webp" alt="Car wrap roll purple" height="200px" width="200px"/>
                    <img src="./images/blackWrapRoll.webp" alt="Car wrap roll black" height="200px" width="200px"/>
                    <img src="./images/blueWrapRoll.webp" alt="Car wrap roll" height="200px" width="200px"/>
                    <img src="./images/greenWrapRoll.webp" alt="Car wrap roll" height="200px" width="200px"/>
                    <img src="./images/redWrapRoll.webp" alt="Car wrap roll" height="200px" width="200px"/>
                    <img src="./images/roseGoldWrapRoll.webp" alt="Car wrap roll" height="200px" width="200px"/>
                </div>
            </div>
        </div>
            
            
    )
}

export default HomePage