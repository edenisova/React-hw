import React from 'react';
import styles from './SidebarItem.module.css';


export default function SidebarItem(props) {
    return (
        <div className = {styles.sidebarItem}>
        <div className={styles.sidebarTop}>
            <div className={styles.sidebarHeaders}>{props.header}</div>
            {props.header == "My groups" && <a className={styles.editList} href = "">Edit list</a>}
        </div>
        <div>
            {props.content}
        </div>
        {props.header == "My groups" && <a className={styles.showAll} href="">Show all (8)</a>}
        </div>
    );
  }