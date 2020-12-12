import DemoImage from "./demo.gif";

import React, { Component } from "react";
import styles from "./demo.less";

export default class Demo extends Component {
    render() {
        return (
            <div className={styles.container}>
                <img src={DemoImage} />
            </div>
        );
    }
}
