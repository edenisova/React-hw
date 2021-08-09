import React from "react";
import styles from "./SidebarInfo.module.css";
import profilePhoto from "./Ellipse.jpg";
import logo from "./Logo.jpg";

export default function SidebarInfo(props) {
  return (
    <div className={styles.information}>
      <img src={profilePhoto} alt="" className={styles.profilePhoto} />
      <div className={styles.profileName}>
        <span className={styles.name}>Dmitry Kargaev</span>
        <img src={logo} />
      </div>
      <div className={styles.profileText}>
        Freelance UX/UI designer, 80+ projects in web design, mobile apps (iOS &
        android) and creative projects. Open to offers.
      </div>
    </div>
  );
}
