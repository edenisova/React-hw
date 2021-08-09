import React from 'react';
import styles from './Article.module.css';


export default function Article(props) {
    return (
        <div className = {styles.articleItem}>
            <img src = {props.articleImg} className = {styles.articleImg}/>
            <div>
                <a className = {styles.articleName} href = "">{props.articleName}</a>
                <span className = {styles.articleViewers}>{props.viewers} viewers</span>
            </div>
        </div>
    );
  }