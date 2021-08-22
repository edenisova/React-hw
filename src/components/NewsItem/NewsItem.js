import React from "react";
import styles from "./NewsItem.module.css";
import shareimg from "./share-2.svg";
import LikesButton from '../LikesButton/LikesButton'
import CommentsButton from '../CommentsButton/CommentsButton'
import NewsText from '../NewsText/NewsText'

export default function NewsItem(props) {
  const [likes, updateLikes] = React.useState(props.likes);
  const [isToggle, setState] = React.useState(false);
  const [isOpen, setOpen] = React.useState(false);
  function handleClick(isToggle, likes){
    setState(isToggle);
    updateLikes(likes => isToggle ? ++likes : --likes);
  }
  function handleOpen(isOpen){
    setOpen(!isOpen);
  }
  return (
    <div className={styles.newsItem}>
      <div className={styles.reaction}>
        <div>{props.reaction.map((item, index, array) => (index === array.length - 1) ? <div className = {styles.reactionText} key={index}>and <a href = "" className = {styles.reactionName}>{item}</a> comment this</div> : <div className = {styles.reactionText} key={index}><a href = "" className = {styles.reactionName}>{item}</a>,</div>)}</div>
        <button className={styles.item}>
        <span className={`icon-more-horizontal-1 ${styles.item__image}`}/>
        </button>
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
      <NewsText onClick={handleOpen} news={props.news} isOpen={isOpen}/>
      {props.newsImg && (
        <img className={styles.newsImg} src={props.newsImg}/>
      )}
      {props.content}
      <div className={styles.newsFooter}>
        <div>
          <LikesButton likes={likes} isToggle={isToggle} onClick={handleClick}/>
          <CommentsButton comments={props.comments}/>
        </div>
        <button className={styles.shareButton}>
          <img src={shareimg} className={styles.shareImg}/>
          <span className={styles.buttonText}>Share</span>
        </button>
      </div>
    </div>
  );
}
