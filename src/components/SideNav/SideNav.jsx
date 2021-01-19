import React, { useState, useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';

import './SideNav.css';
import HomeImg from '../../resources/images/people-1.png';
import Logout from '../SignIn/Logout';
import { AuthContext } from "../../services/contextProviders";

export default function SideNav({ routes }) {
    const [toggleHamburger, setHamburger] = useState(false);
    const authContext = useContext(AuthContext);

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

    function mobileHamburgerButton() {
        return <div className="hamburger-icon">
            {homeIcon()}
            <i className="fa fa-bars" onClick={toggleMobileMenu}></i>
        </div>
    }

    function logOutBtn() {
        return authContext.isLoggedIn && <Logout />;
    }

    function homeIcon() {
        return <Link to="/" ><img src={HomeImg} alt="home-icon"></img></Link>
    }

    return (
        <aside className={toggleHamburger ? 'hamburger-open' : ''}>
            {mobileHamburgerButton()}
            {window.innerWidth > 600 && homeIcon()}
            {displayRouteMenu(routes, toggleMobileMenu)}
            {logOutBtn()}
        </aside>
    );
}