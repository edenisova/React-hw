import React from "react";
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import paperclip from '../../Images/paperclip.jpg'
import film from '../../Images/film.jpg'
import image from '../../Images/image.jpg'
import send from '../../Images/send.png'
import styles from "./NewPostItem.module.css";

export default function NewPostItem() {
  return (
    <div className={styles.postBlock}>
      <div className={styles.postBlock__header}>New Post</div>
      <div className={styles.inputFLex}>
      <input
        className={styles.postBlock__input}
        type="text"
        placeholder="What’s on your mind?"
      />
      <button className={styles.attachButton}>
        <img src={paperclip}/>
      </button>
      <button className={styles.attachButton}>
        <img src={image}/>
      </button>
      <button className={styles.attachButton}>
        <img src={film}/>
      </button>
      <button className={styles.addButton}>
        <img src={send}/>
      </button>
      </div>
    </div>
  );
}
