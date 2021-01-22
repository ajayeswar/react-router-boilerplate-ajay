import { Provider } from 'react-redux';
import { useState } from 'react';

import SideNav from './components/SideNav/SideNav';
import { ThemeContext } from './services/contextProviders';
import ROUTES, { RenderRoutes } from './services/routes';
import store from './services/store/store';

import "./App.css";

function App() {
    const [theme, setThemeMode] = useState('light');

    function toggleThemeMode() {
        theme === 'light' ? setThemeMode('dark') : setThemeMode('light');
    }

    return (
        <Provider store={store}>
            <ThemeContext.Provider value={{ theme, setThemeMode: toggleThemeMode }}>
                <div className={`App ${theme}`}>
                    <SideNav routes={ROUTES}></SideNav>
                    <div className="main"><RenderRoutes routes={ROUTES} /></div>
                </div>
            </ThemeContext.Provider>
        </Provider>
    );
}

export default App;

