import styles from './FooterLinks.module.css';


export default function FooterLinks(props) {
    return (
        <div className={`${styles.navLinks} ${props.styleName}`}>
            {props.links.map(item => <a className={styles.navLinks__text} href="">{item}</a>)}
        </div>
    );
  }