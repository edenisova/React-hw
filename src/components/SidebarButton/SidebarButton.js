import React from 'react';
import styles from './SidebarButton.module.css';


export default function SidebarInfo() {
    return (
        <div className={styles.buttonBlock}>
           <button className = {styles.buttonBlock__button}>Write new article</button>
        </div>
    );
  }