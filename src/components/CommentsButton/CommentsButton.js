import React from "react";
import styles from "./CommentsButton.module.css";
import commentsimg from "./Vector (1).svg";

export default function CommentsButton(props) {
    return (
        <button className={styles.commentButton}>
        <img src={commentsimg} className={styles.commentImg} />
        <span className={styles.buttonText}>{props.comments}</span>
      </button>
    );
}
