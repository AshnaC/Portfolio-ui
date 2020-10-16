import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "babel-polyfill";
import "sanitize.css";
import WebFont from "webfontloader";
import "font-awesome/css/font-awesome.min.css";

import store from "./store/configureStore";
import App from "./containers/App";
WebFont.load({
    google: {
        families: ["Amiri:400,700", "serif"]
    }
});

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
