import styles from './Footer.module.css'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.author}>Dominic Malyukov, 2022</div>
                <a className={styles.github} href="https://github.com/RexDelf/">
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;