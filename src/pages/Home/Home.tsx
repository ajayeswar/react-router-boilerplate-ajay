import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { getBotDetialsAction } from './store/index';
import { ThemeContext } from '../../services/contextProviders';
import { RootState } from '../../services/redux/store';
import { Button } from '../../stories/Button';

interface StateObject {
    [key: string]: any;
}
interface ThemeContextInterface {
    theme: string,
    setThemeMode(theme: string): void
}

function Home(): React.ReactNode {
    const loginDetails: StateObject = useSelector((state: RootState) => state.Login.loginDetails) || {};
    const configDetails: StateObject = useSelector((state: RootState) => state.Home.configDetails) || {};
    const dispatch = useDispatch();

    function cwumHook() {
        console.log("UNMOUNTED HOME")
    }

    useEffect(() => {
        dispatch(getBotDetialsAction())

        return cwumHook;
    }, [dispatch]);

    return <ThemeContext.Consumer>
        {(themeDetails: ThemeContextInterface) => (
            <>
                <h1> HOME --- {themeDetails.theme}</h1>
                <h3>HI {loginDetails && loginDetails.name.toUpperCase()}</h3>
                <Button backgroundColor={'red'} primary={true} size={'medium'} label={configDetails?.branding_key || ''}></Button>
            </>
        )}
    </ThemeContext.Consumer>
}

export default Home;
