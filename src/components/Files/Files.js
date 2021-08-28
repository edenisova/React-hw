import React from 'react';
import styles from './Files.module.css';
import downloadImg from '../../Images/download-cloud.png'
import fileBack from '../../Images/Rectangle 2.2 (4).jpg'


export default function Files(props) {
    return (
        <div className = {styles.fileItem}>
            <div className = {styles.leftWrapper}>
            <img src = {fileBack} className = {styles.fileBack}/>
            <div>
                <div className = {styles.fileName}>{props.filename}</div>
                <div className = {styles.filetype}>{props.filetype}</div>
            </div>
            </div>
            <img src={downloadImg} className={styles.downloadImg}/>
        </div>
    );
  }