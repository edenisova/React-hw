import React from "react";
import styles from "./NewsItem.module.css";
import likesimg from "./Vector.svg";
import likesClick from "./thumbs-up.jpg";
import commentsimg from "./Vector (1).svg";
import shareimg from "./share-2.svg";

export default function NewsItem(props) {
  let initVal = false;
  const [isToggle, setState] = React.useState(initVal);
  const [isOpen, setOpen] = React.useState(false);
  let likes = isToggle ? +props.likes + 1 : props.likes;
  return (
    <div className={styles.newsItem}>
      <div className={styles.reaction}>
        <div>{props.reaction.map((item, index, array) => (index == array.length - 1) ? <div className = {styles.reactionText} key={index}>and <a href = "" className = {styles.reactionName}>{item}</a> comment this</div> : <div className = {styles.reactionText} key={index}><a href = "" className = {styles.reactionName}>{item}</a>,</div>)}</div>
        <button className={styles.item}></button>
      </div>
      <div className={styles.profileData}>
        <img className={styles.profilePhoto} src={props.profileImg}/>
        <div>
          <a className={styles.profileName} href="">
            {props.profileName}
          </a>
          <span className={styles.profText}>{props.profession}</span>
        </div>
      </div>
      {isOpen ? (
        <>
          <div className={styles.newsText}>{props.news}</div>
          <button
            className={styles.readMoreButton}
            onClick={() => setOpen(!isOpen)}
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
            onClick={() => setOpen(!isOpen)}
          >
            Read More
          </button>
        </>
      ) : (
        <div className={styles.newsText}>{props.news}</div>
      )}
      {props.newsImg && (
        <img className={styles.newsImg} src={props.newsImg}/>
      )}
      {props.content}
      <div className={styles.newsFooter}>
        <div>
          <button
            className={styles.likesButton}
            onClick={() => setState(!isToggle)}
          >
            {isToggle ? (
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
          <button className={styles.commentButton}>
            <img src={commentsimg} className={styles.commentImg}/>
            <span className={styles.buttonText}>{props.comments}</span>
          </button>
        </div>
        <button className={styles.shareButton}>
          <img src={shareimg} className={styles.shareImg}/>
          <span className={styles.buttonText}>Share</span>
        </button>
      </div>
    </div>
  );
}
