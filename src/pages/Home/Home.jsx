import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import {getBotDetialsAction} from './Home.store';
import { API } from '../../services/api/api';
import {ThemeContext} from '../../services/contextProviders'

export default function Home() {
    const loginDetails = useSelector(state => state.Login.loginDetails);
    const configDetails = useSelector(state => state.Home.configDetails);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBotDetialsAction())
    }, []);

    return <ThemeContext.Consumer>
        {themeDetails => (
            <>
            <h1> HOME</h1>
            <h3>{loginDetails && loginDetails.name.toUpperCase()}</h3>
            <h3>{themeDetails.theme}</h3>
            <h4>{configDetails?.branding_key}</h4>
            </>
        )}
    </ThemeContext.Consumer>
}