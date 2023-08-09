import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./profile.css"

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    if (!isAuthenticated) {
        return <h1>Log in to see user information</h1>;
    }

    const { name, picture, email } = user;

    return (
            <div className="content-container">
                <div className="row align-items-center profileheader">
                    <div className="col-md-2 mb-3">
                        <img
                            src={picture}
                            alt="Profile"
                            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
                        />
                    </div>
                    <div className="col-md text-center text-md-left">
                        <h2>{name}</h2>
                        <p className="lead text-muted">{email}</p>
                    </div>
                </div>
                <footer className="footer">
                    <p>&copy; 2023 Car Wraps R Us. All rights reserved.</p>
                </footer>
            </div>
    );
};

export default Profile;