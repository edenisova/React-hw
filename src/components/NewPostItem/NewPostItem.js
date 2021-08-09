import React from "react";
import styles from "./NewPostItem.module.css";

export default function NewPostItem(props) {
  return (
    <div className={styles.postBlock}>
      <div className={styles.postBlock__header}>New Post</div>
      <input
        className={styles.postBlock__input}
        type="text"
        placeholder="What’s on your mind?"
      ></input>
    </div>
  );
}
