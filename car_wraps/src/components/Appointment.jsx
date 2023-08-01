import React from "react";
import Popup from "./Popup";
import { useState } from "react";
import Button from 'react-bootstrap/Button';

function Appointment () {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        //Clear input fields
        setFirstName("");
        setLastName("");

        //Close Popup on submit
        setButtonPopup(false);
    };
    return(
    <section className="appointment">
        <Button
            className="createNewAppointment"
            onClick={() => setButtonPopup(true)}
        >
           Schedule Now
        </Button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <form onSubmit={handleSubmit}>
                <h3>Schedule Appointment Now</h3>
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
                <Button type="submit" value="Create">Submit</Button>
            </form>
        </Popup>
    </section>
    )
}

export default Appointment

// car api link https://rapidapi.com/principalapis/api/car-data/
// https://docs.rapidapi.com/docs/api-requests-overview