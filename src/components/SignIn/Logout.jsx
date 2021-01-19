import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { useHistory } from 'react-router-dom';

const clientId =
    '615431139760-t49kr24ovuiihvbk689dovbklr1gn8qe.apps.googleusercontent.com';

function Logout() {
    const history = useHistory();

    const onSuccess = () => {
        console.log('Logout made successfully');
        alert('Logout made successfully ✌');
        localStorage.removeItem('authToken');
        history.push('/')
    };

    return (
        <div style={{ margin: '2px' }}>
            <GoogleLogout
                clientId={clientId}
                buttonText="LOGOUT"
                onLogoutSuccess={onSuccess}
            ></GoogleLogout>
        </div>
    );
}

export default Logout;