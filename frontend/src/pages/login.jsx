import React, { useEffect } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { useNavigate } from "react-router-dom";
import { Auth } from 'aws-amplify';

function Login() {
    const navigate = useNavigate();

    useEffect(() => {
        async function checkUser() {
            try {
                const user = await Auth.currentAuthenticatedUser();
                const userGroups = user.signInUserSession.accessToken.payload["cognito:groups"];
                
                // Check if user is part of the admin group
                if (userGroups && userGroups.includes('admin')) {
                    navigate("/dashboard");
                    window.location.reload();
                }
            } catch (error) {
                console.log('user is not signed in');
            }
        }

        checkUser();
    }, []);

    return (
        <div>
            <h1>Welcome to the Login Page</h1>
            <p>Please sign in to continue.</p>
        </div>
    );
}

export default withAuthenticator(Login);
