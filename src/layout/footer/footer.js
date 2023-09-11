import { Link } from 'react-router-dom';

import styles from './footer.module.css';
import logo from '../../assets/images/LogoFooter.png';
import iconInstagram from '../../assets/icons/iconInstagram.svg';
import iconYoutube from '../../assets/icons/iconYoutube.svg';
import iconTiktok from '../../assets/icons/iconTiktok.svg';
import iconFacebook from '../../assets/icons/iconFacebook.png';

function Footer() {
    return (
        <footer className={styles.footer}>
            <img src={logo} alt="logo" className={styles.logo} />
            <nav className={styles.navbar}>
                <li className={styles.items}>
                    <Link className={styles.item}>Home</Link>
                    <Link className={styles.item}>Level Test</Link>
                    <Link className={styles.item}>Course</Link>
                    <Link className={styles.item}>Learning Resources</Link>
                    <Link className={styles.item}>About Us</Link>
                </li>
            </nav>
            <nav className={styles.contact}>
                <li>
                    <Link>
                        <img src={iconFacebook} alt="icon_facebook" className={styles.icon} />
                    </Link>
                </li>
                <li>
                    <Link>
                        <img src={iconInstagram} alt="icon_instagram" className={styles.icon} />
                    </Link>
                </li>
                <li>
                    <Link>
                        <img src={iconYoutube} alt="icon_youtube" className={styles.icon} />
                    </Link>
                </li>
                <li>
                    <Link>
                        <img src={iconTiktok} alt="icon_tiktok" className={styles.icon} />
                    </Link>
                </li>
            </nav>
            <p className={styles.copyrights}>©2022 Levion. All copyrights reserved</p>
        </footer>
    );
}

export default Footer;
