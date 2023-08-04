import React from "react";
import Popup from "./Popup/Popup";
import { useState } from "react";
import Button from 'react-bootstrap/Button';

function FreeEstimate () {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [vehicleMake, setVehicleMake] = useState("");
    const [vehicleModel, setVehicleModel] = useState("");
    const [vehicleYear, setVehicleYear] = useState("");
    const [userEmail, setUserEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        //Clear input fields
        setFirstName("");
        setLastName("");
        setUserEmail("");
        setVehicleMake("");
        setVehicleModel("");
        setVehicleYear("");

        //Close Popup on submit
        setButtonPopup(false);
    };

    function getID() {
        var nodes = document.forms["estimateInfo"].querySelectorAll("input[type='text']");
        var array = [].map.call(nodes, function(item) {
          return {name : item.name, value : item.value};
        });
        console.log(array);
      }

    return(
    <section className="FreeEstimate">
        <Button
            className="createFreeEstimate"
            onClick={() => setButtonPopup(true)}
        >
           Schedule Now
        </Button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <form id="estimateInfo" onSubmit={handleSubmit}>
                <h3>Free Estimate</h3>
                <label>First Name</label>
                <br />
                    <input
                        type="text"
                        value={firstName}
                        required
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                <br />
                <label>Last Name</label>
                <br />
                    <input
                        type="text"
                        value={lastName}
                        required
                        onChange={(e) => setLastName(e.target.value)}
                    />
                <br/>
                <label>Email</label>
                <br />
                    <input
                        type="text"
                        value={userEmail}
                        required
                        onChange={(e) => setUserEmail(e.target.value)}
                    />
                <br/>
                <label>Vehicle Make</label>
                <br />
                    <input
                        type="text"
                        value={vehicleMake}
                        required
                        onChange={(e) => setVehicleMake(e.target.value)}
                    />
                <br/>
                <label>Vehicle Model</label>
                <br />
                    <input
                        type="text"
                        value={vehicleModel}
                        required
                        onChange={(e) => setVehicleModel(e.target.value)}
                    />
                <br/>
                <label>Vehicle Year</label>
                <br />
                    <input
                        type="text"
                        value={vehicleYear}
                        required
                        onChange={(e) => setVehicleYear(e.target.value)}
                    />
                <br />
                <br />
                <Button type="submit" value="Create">Submit</Button>
            </form>
        </Popup>
    </section>
    )
}

export default FreeEstimate

// car api link https://rapidapi.com/principalapis/api/car-data/
// https://docs.rapidapi.com/docs/api-requests-overview