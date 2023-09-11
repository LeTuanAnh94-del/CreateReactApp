import { Link } from 'react-router-dom';
import iconCart from '../../assets/icons/iconCart.png';
import { useSelector } from 'react-redux';
import { useState } from 'react';

import styles from './header.module.css';
import Logo from '../../assets/images/Logo.png';
import onlyLogo from '../../assets/images/onlyLogo.png';
import iconArrowDown from '../../assets/icons/iconArrowDown.png';
import iconMenu from '../../assets/icons/iconMenu.png';

function Header() {
    const cart = useSelector((state) => state.cart);

    const [isClicked, setIsClicked] = useState(false);

    const totalItems = cart.length;

    const handleClicked = () => {
        setIsClicked(!isClicked);
    };

    return (
        <div>
            <div className={styles.header}>
                <Link to={'/'} className={styles.logo}>
                    <img src={Logo} alt="logo" />
                </Link>
                <Link to={'/'}>
                    <img src={onlyLogo} alt="only_logo" className={styles.only_logo} />
                </Link>
                <nav className={styles.navbar}>
                    <li>
                        <Link to="" className={styles.link}>
                            Level Test
                        </Link>
                    </li>
                    <li>
                        <Link to="/Courses" className={styles.link}>
                            Course
                        </Link>
                    </li>
                    <li>
                        <Link to="" className={styles.link}>
                            Learning Resources
                            <img src={iconArrowDown} alt="icon" className={styles.icon} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/about_us" className={styles.link}>
                            About us
                        </Link>
                    </li>
                </nav>
                <nav className={styles.user}>
                    <li className={styles.icon_cart}>
                        <Link to={'/cart'}>
                            <img src={iconCart} alt="icon_cart" />
                            <span className={styles.cart_item_count}>{totalItems}</span>
                        </Link>
                    </li>

                    <li className={styles.button}>
                        <button className={styles.sign_in}>
                            <p className={styles.text_login}>Sign In</p>
                        </button>
                    </li>
                    <li className={styles.button}>
                        <button className={styles.sign_up}>
                            <p className={styles.text_register}>Sign Up</p>
                        </button>
                    </li>
                    <li>
                        <img src={iconMenu} alt="icon_menu" className={styles.icon_menu} onClick={handleClicked} />
                    </li>
                </nav>
            </div>
            <div className={styles.menu}>
                {isClicked && (
                    <div className={styles.wrapper_menu}>
                        <div className={styles.content_menu}>
                            <div className={styles.button_menu}>
                                <button className={styles.button_sign_in}>Sign In</button>
                                <button className={styles.button_sign_up}>Sign Up</button>
                            </div>
                            <div>
                                <div className={styles.menu_items}>
                                    <ul>
                                        <li className={styles.link}>Level Test</li>
                                        <li className={styles.link}>Courses</li>
                                        <li className={styles.link}>
                                            Learning Resources
                                            <img src={iconArrowDown} alt="icon" className={styles.icon} />
                                        </li>
                                        <li className={styles.link}>About us</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;
