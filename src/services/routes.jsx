import React, {Suspense, lazy} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch} from "react-router-dom";

import { loginAction } from '../pages/Login/Login.store';

//react lazy loading 
const Home = lazy(() => import('../pages/Home/Home.tsx'));
const Gallery = lazy(() => import('../pages/Gallery/Gallery'));
const LoginPage = lazy(() => import('../pages/Login/Login'));

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
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                {routes.map((route, i) => {
                    return <RouteWithSubRoutes key={route.key} {...route} />;
                })}
                <Route component={() => <h1>Not Found!</h1>} />
            </Switch>
        </Suspense>
    );
}

export default ROUTES;