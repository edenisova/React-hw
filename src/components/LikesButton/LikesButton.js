import React from 'react';
import likesimg from "./Vector.svg";
import likesClick from "./thumbs-up.jpg";
import styles from './LikesButton.module.css';


export default function LikesButton(props) {
    function handleClick(){
        props.onClick(!props.isToggle, props.likes);
    }
    return (
        <button
        className={styles.likesButton}
        onClick={handleClick}
      >
        {props.isToggle ? (
          <>
            <img src={likesClick} className={styles.likesImg}/>
          </>
        ) : (
          <>
            <img src={likesimg} className={styles.likesImg}/>
          </>
        )}
        <span className={styles.buttonText}>{props.likes}</span>
      </button>
    );
  }