import React from "react";
import { Switch, Route } from "react-router-dom";

import MovieContainer from "../MovieContainer";

export default function App() {
    return (
        <Switch>
            <Route exact path="*" component={MovieContainer} />
        </Switch>
    );
}
