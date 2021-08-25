import styles from './FooterLinks.module.css';


export default function FooterLinks(props) {
    const className = styles[props.styleName];
    return (
        <div className={`${styles.navLinks} ${className}`}>
            {props.links.map(item => <a className={styles.navLinks__text} href="">{item}</a>)}
        </div>
    );
  }