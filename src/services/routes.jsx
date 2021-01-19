import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginPage from "../pages/Login/Login";

const ROUTES = [
    {
        path: "/", key: "HOME_OF_ALL", exact: true, component: (props) => <ProtectedRoute component={() => <h1>HOME OF ALL</h1>} />
    },
    {
        path: "/gallery", key: "APP_GALLERY", name: "GALLERY", exact: true, component: () => <ProtectedRoute component={() => <h1> GALLERY</h1>} />
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
    if (!localStorage.getItem("authToken")) {
        alert("You need to log in to access app routes");
        return <Redirect to={"/login"} />;
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