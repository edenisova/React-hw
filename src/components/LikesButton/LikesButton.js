import React from 'react';
import likesimg from "./Vector.svg";
import likesClick from "./thumbs-up.jpg";
import styles from './LikesButton.module.css';


export default function LikesButton(props) {
    let likes = props.isToggle ? +props.likes + 1 : props.likes;
    function handleClick(){
        props.onClick(props.isToggle);
    }
    return (
        <button
        className={styles.likesButton}
        onClick={handleClick}
      >
        {props.isToggle ? (
          <>
            <img src={likesClick} className={styles.likesImg}/>
            <span className={styles.buttonText}>{likes}</span>
          </>
        ) : (
          <>
            <img src={likesimg} className={styles.likesImg}/>
            <span className={styles.buttonText}>{likes}</span>
          </>
        )}
      </button>
    );
  }