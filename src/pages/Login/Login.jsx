import React from 'react';

import Login from '../../components/SignIn/Login';
import LoginIcon from '../../resources/images/login.png';

export default function LoginPage() {
    return (
        <div>
            <img src={LoginIcon} alt="Login-person"></img>
            <Login />
        </div>
    )
}