import React from "react";
import FreeEstimate from "./FreeEstimate";

function HomePage() {
    return (
        <div>
            <div className="body">
                <FreeEstimate />
                <div className="productsContainer">
                    <div className="product">
                        <img src="./images/midnightPurpleWrapRoll.webp" alt="Car wrap roll purple" height="200px" width="200px"/>
                    </div>
                    <div className="product">
                        <img src="./images/blackWrapRoll.webp" alt="Car wrap roll black" height="200px" width="200px"/>
                    </div>
                    <div className="product">
                        <img src="./images/blueWrapRoll.webp" alt="Car wrap roll" height="200px" width="200px"/>
                    </div>
                    <div className="product">
                        <img src="./images/greenWrapRoll.webp" alt="Car wrap roll" height="200px" width="200px"/>
                    </div>
                    <div className="product">
                        <img src="./images/redWrapRoll.webp" alt="Car wrap roll" height="200px" width="200px"/>
                    </div>
                    <div className="product">
                        <img src="./images/roseGoldWrapRoll.webp" alt="Car wrap roll" height="200px" width="200px"/>
                    </div>
                </div>
            </div>
        </div>
            
            
    )
}

export default HomePage