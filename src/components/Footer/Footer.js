import React from "react";
import styles from "./Footer.module.css";
import FooterLinks from "../FooterLinks/FooterLinks";
import logo from "./Logo.svg";

export default function Footer(props) {
  let linksFirst = ["About", "Careers", "Advertising", "Small Business"];
  let linksSecond = [
    "Talent Solutions",
    "Marketing Solutions",
    "Sales Solutions",
    "Safery Center",
  ];
  let linksThird = ["Community Guidelines", "Privacy & Terms", "Mobile App"];
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerLogo}>
        <img
            src={logo}
            alt="Logo"
            className={styles.footerLogo__img}
          />
        <div className={styles.footerLogo__name}>
            Linked<span className={styles.footerLogo__twoLetters}>In</span>
          </div>
        </div>
        <FooterLinks links={linksFirst} styleName="columnMl69"/>
        <FooterLinks links={linksSecond} styleName="columnMl35"/>
        <FooterLinks links={linksThird} styleName="columnMl45"/>
        <div className={`${styles.fastAccess} ${styles.columnMl65}`}>
        <div class={`${styles.footerSection} ${styles.mb23}`}>Fast access</div>
          <button className={styles.fastAccess__button}>
            Questions?
            {/*<span class="icon-help-circle fast-access__button-icon"></span>*/}
          </button>
          <button className={styles.fastAccess__button}>
            Settings
            <span className={`${styles.iconSettings} ${styles.fastAccess__buttonIcon}`}></span>
          </button>
        </div>
        <div className={`${styles.lang} ${styles.ml60}`}>
        <div className={`${styles.footerSection} ${styles.mb23}`}>Language</div>
          <select
            name="Language"
            id="linkedin-lang"
            size="1"
            className={styles.langSelect}
          >
            <option value="English">English</option>
            <option value="Russian">Russian</option>
            <option value="Germany">Germany</option>
          </select>
        </div>
      </div>
    </div>
  );
}
