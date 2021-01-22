import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch} from "react-router-dom";

import Gallery from "../pages/Gallery/Gallery";
import Home from "../pages/Home/Home";
import LoginPage from "../pages/Login/Login";
import { loginAction } from '../pages/Login/Login.store';

const ROUTES = [
    {
        path: "/", key: "HOME_OF_ALL", exact: true, component: (props) => <ProtectedRoute component={() => <Home />} />
    },
    {
        path: "/gallery", key: "APP_GALLERY", name: "GALLERY", exact: true, component: () => <ProtectedRoute component={() => <Gallery/>} />
    },
    {
        path: "/wod", key: "APP_WOD", name: "WOD", exact: true, component: () => <ProtectedRoute component={() => <h1> WOD</h1>} />
    },
    {
        path: "/about", key: "ABOUT", name: "ABOUT", exact: true, component: () => <ProtectedRoute component={() => <h1> ABOUT</h1>} />
    },
    {
        path: "/login", key: "LOGIN", name: "LOGIN", exact: true, component: LoginPage
    }
];

function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            exact={route.exact}
            render={props => <route.component {...props} routes={route.routes} />}
        />
    );
}

export function ProtectedRoute(props) {
    const  dispatch = useDispatch();
    const loginDetails = useSelector(state => state.Login.loginDetails);

    if (!localStorage.getItem("authToken")) {
        return <Redirect to={"/login"} />;
    }
    
    if(!loginDetails){
        dispatch(loginAction(JSON.parse(localStorage.getItem("authToken"))))
    }
    return props.component();
}

export function RenderRoutes({ routes }) {
    return (
        <Switch>
            {routes.map((route, i) => {
                return <RouteWithSubRoutes key={route.key} {...route} />;
            })}
            <Route component={() => <h1>Not Found!</h1>} />
        </Switch>
    );
}

export default ROUTES;