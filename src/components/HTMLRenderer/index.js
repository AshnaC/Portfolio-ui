import React, { Component } from "react";

import { menuItems } from "../../constants";
import styles from "./styles.less";

export default class HtmlRenderer extends Component {
    state = {};
    componentDidMount() {
        this.setPage();
    }

    setPage = () => {
        const menuId = new URLSearchParams(window.location.search).get("page");
        import(`../../html/${menuId}.html`)
            .then(Page => {
                const htmlDoc = { __html: Page };
                this.setState({ htmlDoc });
            })
            .catch(err => {
                console.log(err);
            });
    };

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
