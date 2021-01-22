import React, { useState, useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import HomeImg from '../../resources/images/people-1.png';
import { ThemeContext } from '../../services/contextProviders';
import Logout from '../SignIn/Logout';
import ToggleSwitch from '../ToggleSwitch/toggleSwitch';

import './SideNav.css';

export default function SideNav({ routes }) {
    const [toggleHamburger, setHamburger] = useState(false);
    const loginDetails = useSelector(state => state.Login.loginDetails);
    const themeSelected = useContext(ThemeContext);

    function toggleMobileMenu() {
        setHamburger(!toggleHamburger);
    }

    function singleRoute(route) {
        return route.name ? (<NavLink activeclassname="active" className="route-link" exact={route.exact} to={route.path} key={route.key} onClick={toggleMobileMenu}> {route.name} </NavLink>) : <></>;
    }

    function displayRouteMenu(routes) {
        return (
            <>
                {routes.map(route => route.routes ?
                    <React.Fragment key={route.key}>
                        {singleRoute(route)}
                        {displayRouteMenu(route.routes)}
                    </React.Fragment> :
                    singleRoute(route)
                )}
            </>
        );
    }

    function renderThemeSelector() {
        return <ToggleSwitch onChange={themeSelected.setThemeMode} />
    }

    function mobileHamburgerButton() {
        return <div className="hamburger-icon">
            {homeIcon()}
            <i className="fa fa-bars" onClick={toggleMobileMenu}></i>
        </div>
    }

    function logOutBtn() {
        return loginDetails && loginDetails.name && <Logout />;
    }

    function homeIcon() {
        return <Link to="/" ><img src={HomeImg} alt="home-icon"></img></Link>
    }

    return (
        <aside className={toggleHamburger ? 'hamburger-open' : ''}>
            {mobileHamburgerButton()}
            {window.innerWidth > 600 && homeIcon()}
            {displayRouteMenu(routes, toggleMobileMenu)}
            <div className="pull-right">
                {renderThemeSelector()}
                {logOutBtn()}
            </div>
        </aside>
    );
}