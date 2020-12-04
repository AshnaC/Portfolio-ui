import React from "react";
import { slide as Menu } from "react-burger-menu";
import styles from "./styles.less";
import { menuItems } from "../../constants";

export default function App() {
    const heading = () => {
        let pathName = window.location.pathname;
        if (pathName == "/") pathName = "/movie";
        if (pathName == "/jpn") {
            const menuId = new URLSearchParams(window.location.search).get('page');
            return menuItems.find(elt => elt.id == menuId).name;
        }
        return menuItems.find(elt => elt.path == pathName).name;
    };
    return (
        <div className={styles.header}>
            <div className={styles.header_tab}>{heading()}</div>
            <Menu width={310}>
                <div className={styles.menu_heading}>Ashna's Projects</div>
                {menuItems.map(item => {
                    return (
                        <a key={item.id} id={item.id} className={styles.menu_item} href={item.path}>
                            <i className={`fa fa-file-text-o ${styles.menu_icon}`} />
                            {item.name}
                        </a>
                    );
                })}
            </Menu>
        </div>
    );
}
