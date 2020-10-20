import React from "react";
import { slide as Menu } from "react-burger-menu";
import styles from "./styles.less";

export default function App() {
    return (
        <div className={styles.header}>
            <div className={styles.header_tab} is />
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

const menuItems = [
    {
        id: "RECOMMENDER",
        path: "/movie",
        name: "Movie Explorer"
    },
    {
        id: "falcone",
        path: "/falcone",
        name: "Finding Falcone"
    }
];
