import styles from './congratulation.module.css';
import Logo from '../../components/logo';

import { Link } from 'react-router-dom';

function congratulation() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.inner_container}>
                    <Logo />
                    <div className={styles.form}>
                        <form id="login_form">
                            <div className={styles.congratulation} />
                            <div className={styles.banner}>
                                <p className={styles.banner_congratulation}>Your Password has changed Successful</p>
                                <p className={styles.contact}>Let’s Discover Vietnamese with us</p>
                            </div>
                            <Link className={styles.choice} to={'/profile'}>
                                <button className={styles.button}>Let's start</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
            <div className={styles.overlay} />
        </div>
    );
}

export default congratulation;
