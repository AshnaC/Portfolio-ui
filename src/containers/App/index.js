import React from "react";
import { Switch, Route } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

import MovieContainer from "../MovieContainer";
import GetResources from "../GetResources";

import Header from "../Header";

export default function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={MovieContainer} />
                <Route exact path="/falcone" component={GetResources} />
                <Route exact path="/movie" component={MovieContainer} />
            </Switch>
        </div>
    );
}
