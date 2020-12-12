import DemoImage from "./demo.gif";

import React, { Component } from "react";

export default class Demo extends Component {
    render() {
        return (
            <div>
                <img src={DemoImage} />
            </div>
        );
    }
}
