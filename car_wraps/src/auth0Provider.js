import React from "react";
import { useNavigate } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithNavigate = ({ children }) => {
    const domain = "dev-p8ubh7rpnmxqk6l7.us.auth0.com"
    const clientId = "5FYd1pAZ9K0Ey7iZIEeL66NlZCTA7fPz"
    console.log('Auth0 Domain:', domain);

    const navigate = useNavigate();

    const onRedirectCallback = (appState) => {
        navigate.push(appState?.returnTo || window.location.pathname);
    };

    return (
        <Auth0Provider
            domain={ domain }
            clientId={ clientId }
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    );
};

export default Auth0ProviderWithNavigate;