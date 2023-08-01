import React from "react";
import Navigation from "./Navigation";
import Appointment from "./Appointment";

function HomePage() {
    return (
        <div>
            <h1>Car Wraps R US</h1>
            <Navigation/>
            <div className="body">
                <Appointment />
                <img src="./images/midnightPurpleWrapRoll.webp" alt="car wrap" height="400px" width="400px"/>
            </div>
        </div>
            
            
    )
}

export default HomePage