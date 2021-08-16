import React from "react";
import styles from "./NewsText.module.css";

export default function NewsText(props) {
    function handleOpen(){
        props.onClick(props.isOpen);
    }
    return (
        <>
        {props.isOpen ? (
            <>
              <div className={styles.newsText}>{props.news}</div>
              <button
                className={styles.readMoreButton}
                onClick={handleOpen}
              >
                Read Less
              </button>
            </>
          ) : props.news.split(" ").length > 60 ? (
            <>
              <div className={styles.newsText}>
                {props.news.split(" ").slice(0, 60).join(" ") + '...'}
                <div className={styles.blurred}></div>
              </div>
              <button
                className={styles.readMoreButton}
                onClick={handleOpen}
              >
                Read More
              </button>
            </>
          ) : (
            <div className={styles.newsText}>{props.news}</div>
          )}
          </>
    );
}
