import { Provider } from 'react-redux';
import React, { useState } from 'react';

import SideNav from './components/SideNav/SideNav';
import { ThemeContext } from './services/contextProviders';
import ROUTES, { RenderRoutes } from './services/routes';
import store from './services/redux/store';

import "./App.css";

function App(): React.ReactNode {
    const [theme, setThemeMode] = useState<string>('light');

    function toggleThemeMode() {
        theme === 'light' ? setThemeMode('dark') : setThemeMode('light');
    }

    return (
        <Provider store={store} >
            <ThemeContext.Provider value={{ theme, setThemeMode: toggleThemeMode }}>
                <div className={`App ${theme}`}>
                    <SideNav routes={ROUTES} />
                    <div className="main" >
                        <RenderRoutes routes={ROUTES} />
                    </div>
                </div>
            </ThemeContext.Provider>
        </Provider>
    );
}

export default App;

