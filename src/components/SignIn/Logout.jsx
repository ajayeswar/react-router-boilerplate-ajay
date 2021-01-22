import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { logoutAction } from '../../pages/Login/Login.store';

const clientId =
    '615431139760-t49kr24ovuiihvbk689dovbklr1gn8qe.apps.googleusercontent.com';

function Logout() {
    const history = useHistory();
    const dispatch = useDispatch();

    const onSuccess = () => {
        logoutAction(dispatch);
        history.push('/')
    };

    return (
            <GoogleLogout
                style={{ margin: '2px 1rem 2px auto' }}
                clientId={clientId}
                buttonText="LOGOUT"
                onLogoutSuccess={onSuccess}
            ></GoogleLogout>
    );
}

export default Logout;