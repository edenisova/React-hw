import React from "react";
import styles from "./SidebarInfo.module.css";
import profilePhoto from "./Ellipse.jpg";
import logo from "./Logo.jpg";

export default function SidebarInfo(props) {
  const {name, profileText} = props;
  return (
    <div className={styles.information}>
      <img src={profilePhoto} alt="" className={styles.profilePhoto} />
      <div className={styles.profileName}>
        <span className={styles.name}>{name}</span>
        <img src={logo} />
      </div>
      <div className={styles.profileText}>
        {profileText}
      </div>
    </div>
  );
}
