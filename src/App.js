import "./App.css";
import { useState } from 'react';
import ROUTES, { RenderRoutes } from './services/routes';
import SideNav from './components/SideNav/SideNav';
import { AuthContext } from './services/contextProviders';

function App() {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const login = () => {
        setLoggedIn(true);
    }
    const logout = () => {
        setLoggedIn(false);
    }
    return (
        <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}>
            <div className="App">
                <SideNav routes={ROUTES}></SideNav>
                <div className="main"><RenderRoutes routes={ROUTES} /></div>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
