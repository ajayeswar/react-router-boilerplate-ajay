import React from 'react';

import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { refreshTokenSetup } from '../../services/refreshToken';
import {loginAction} from "../../pages/Login/Login.store";

const clientId =
    '615431139760-t49kr24ovuiihvbk689dovbklr1gn8qe.apps.googleusercontent.com';

const Login = function () {
    const history = useHistory();
    const dispatch = useDispatch();

    const onSuccess = (res) => {
        console.log('Login Success: currentUser:', res.profileObj);
        localStorage.setItem("authToken", JSON.stringify(res.profileObj));
        dispatch(loginAction(res.profileObj));
        history.push('/');
        refreshTokenSetup(res);
    };

    const onFailure = (res) => {
        console.log('Login failed: res:', res);
        history.push('/login');
        alert(
            `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
        );
    };

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="LOGIN TO GOOGLE"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{ marginTop: '100px' }}
                isSignedIn={true}
            />
        </div>
    );
}

export default Login;