import React, { Component } from "react";
import CovidEda from "../../html/covid_eda.html";
import { menuItems } from "../../constants";
import styles from "./styles.less";

export default class HtmlRenderer extends Component {
    state = {};
    componentDidMount() {
        const path = window.location.pathname;
        const menuId = menuItems.find(elt => elt.path === path).id;
        let Page = "";
        switch (menuId) {
            case "covid_eda":
                Page = CovidEda;
                break;
        }
        const htmlDoc = { __html: Page };
        this.setState({ htmlDoc });
    }

    render() {
        const { htmlDoc } = this.state;
        if (htmlDoc) {
            return (
                <div className={styles.jp_wrapper}>
                    {htmlDoc && <div dangerouslySetInnerHTML={htmlDoc} />}
                </div>
            );
        }
        return "";
    }
}
