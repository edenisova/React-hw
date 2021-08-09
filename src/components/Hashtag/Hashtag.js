import React from 'react';
import styles from './Hashtag.module.css';


export default function Hahstag(props) {
    return (
        <a className={styles.hashtagItem} href="">
            {props.text}
        </a>
    );
  }