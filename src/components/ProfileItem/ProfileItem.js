import styles from './ProfileItem.module.css';


export default function ProfileItem(props) {
    const {name, views, raiting, photo} = props;
    return (
        <div className={styles.profile}>
          <div className={styles.profileFlex}>
            <img src={photo} alt="Profile photo" className={styles.profile__image}/>
            <div className={styles.profileData}>
              <div className={styles.profileDataPersonal}>
                {name}<span className={styles.profileData__pointer}>You</span>
              </div>
              <div className={styles.profileRaitings}>
                <span className={styles.profileRaitings__views}>{views} views today</span>
                <span className={styles.profileRaitings__number}>+{raiting}</span>
                <span className={`icon-arrow-up-right`}/>
              </div>
            </div>
          </div>
        </div>
    );
  }