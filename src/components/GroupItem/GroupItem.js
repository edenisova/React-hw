import React from 'react';
import styles from './GroupItem.module.css';


export default function GroupItem(props) {
    return (
        <div className = {styles.groupItem}>
            <img src = {props.groupImg} className = {styles.groupImg}/>
            <a className = {styles.groupName} href = "">{props.groupName}</a>
        </div>
    );
  }