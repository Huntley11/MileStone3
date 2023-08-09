import React from "react";
import Popup from "./Popup/Popup";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import axios from 'axios';


function FreeEstimate() {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [vehicleMake, setVehicleMake] = useState("");
    const [vehicleModel, setVehicleModel] = useState("");
    const [vehicleYear, setVehicleYear] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [estimates, setEstimates] = useState([]); // Array to store the form data

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create an object with form data
        const formData = {
            firstName: firstName,
            lastName: lastName,
            userEmail: userEmail,
            vehicleMake: vehicleMake,
            vehicleModel: vehicleModel,
            vehicleYear: vehicleYear,
        };

        // Send the form data to the backend API endpoint
        axios.post('/api/estimates', formData)
        .then(response => {
        console.log(response.data.message);
        })
        .catch(error => {
        console.error('Error sending estimate:', error);
        });

        // Add the form data to the estimates array
        setEstimates((prevEstimates) => [...prevEstimates, formData]);

        // Clear input fields
        setFirstName("");
        setLastName("");
        setUserEmail("");
        setVehicleMake("");
        setVehicleModel("");
        setVehicleYear("");

        // Close Popup on submit
        setButtonPopup(false);
    };

    // Log the array of estimates whenever it updates
    React.useEffect(() => {
         console.log("Estimates Array:", estimates);
    }, [estimates]);



    return (
        <section className="FreeEstimate">
            <Button
                className="createFreeEstimate"
                onClick={() => setButtonPopup(true)}
            >
                Schedule A Free Estimate
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
                    <br />
                    <label>Email</label>
                    <br />
                    <input
                        type="text"
                        value={userEmail}
                        required
                        onChange={(e) => setUserEmail(e.target.value)}
                    />
                    <br />
                    <label>Vehicle Make</label>
                    <br />
                    <input
                        type="text"
                        value={vehicleMake}
                        required
                        onChange={(e) => setVehicleMake(e.target.value)}
                    />
                    <br />
                    <label>Vehicle Model</label>
                    <br />
                    <input
                        type="text"
                        value={vehicleModel}
                        required
                        onChange={(e) => setVehicleModel(e.target.value)}
                    />
                    <br />
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
    );
}

export default FreeEstimate;

// car api link https://rapidapi.com/principalapis/api/car-data/
// https://docs.rapidapi.com/docs/api-requests-overview