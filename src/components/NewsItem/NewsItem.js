import React from "react";
import styles from "./NewsItem.module.css";
import shareimg from "../../Images/share-2.svg";
import LikesButton from '../LikesButton/LikesButton'
import { increment } from '../../action'
import { decrement } from "../../action";
import { useDispatch } from 'react-redux';
import CommentsButton from '../CommentsButton/CommentsButton'
import NewsText from '../NewsText/NewsText'
import Files from '../Files/Files'

export default function NewsItem(props) {
  let toggleState = localStorage.getItem('isToggle_' + props.itemId) === "false" ? false : true;
  const post = JSON.parse(localStorage.getItem('post ' + props.itemId));
  const [isToggle, setState] = React.useState(toggleState);
  const [isOpen, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  React.useEffect(() => {
    localStorage.setItem('isToggle_' + props.itemId, isToggle.toString())
  }, [props.itemId, isToggle]);
  function handleClick(isToggleArg, likesArg){
    setState(isToggleArg);
    isToggleArg === true ? dispatch(increment(props.itemId)) : dispatch(decrement(props.itemId));
  }
  function handleOpen(isOpen){
    setOpen(!isOpen);
  }
  return (
    <div className={styles.newsItem}>
      <div className={styles.reaction}>
        <div>{post.reaction.map((item, index, array) => (index === array.length - 1) ? <div className = {styles.reactionText} key={index}>and <a href = "" className = {styles.reactionName}>{item}</a> comment this</div> : <div className = {styles.reactionText} key={index}><a href = "" className = {styles.reactionName}>{item}</a>,</div>)}</div>
        <button className={styles.item}>
        <span className={`icon-more-horizontal ${styles.item__image}`}/>
        </button>
      </div>
      <div className={styles.profileData}>
        <img className={styles.profilePhoto} src={post.profileImg}/>
        <div>
          <a className={styles.profileName} href="">
            {post.profileName}
          </a>
          <span className={styles.profText}>{post.profession}</span>
        </div>
      </div>
      <NewsText onClick={handleOpen} news={post.news} isOpen={isOpen}/>
      {post.newsImg && (
        <img className={styles.newsImg} src={post.newsImg}/>
      )}
      {post.files && post.files.map((el, ind) => <Files filename={el.filename} filetype={el.filetype} key={ind}/>)}
      <div className={styles.newsFooter}>
        <div>
          <LikesButton likes={localStorage.getItem('likes_' + props.itemId)} isToggle={isToggle} itemId={props.itemId} onClick={handleClick}/>
          <CommentsButton comments={post.comments}/>
        </div>
        <button className={styles.shareButton}>
          <img src={shareimg} className={styles.shareImg}/>
          <span className={styles.buttonText}>Share</span>
        </button>
      </div>
    </div>
  );
}

