import styles from './journey.module.css';

import patternLeft from '../../../../assets/images/patternLeft.png';
import patternRight from '../../../../assets/images/patternRight.png';
import bannerHome from '../../../../assets/images/bannerHome.svg';

function Journey() {
    return (
        <section className={styles.container}>
            <div className={styles.box}>
                <div className={styles.content}>
                    <p className={styles.title}>Vietnamese Journey with LEVION</p>
                    <p className={styles.text}>
                        We are ready to help you crafting package branding for your products according to you target
                        market. We helped more than 1000 product in United States
                    </p>
                </div>
                <button className={styles.button_test}>Test Now</button>
            </div>
            <img src={bannerHome} alt="banner_home" className={styles.banner_home} />
            <div className={styles.pattern}>
                <img src={patternLeft} alt="pattern_left" className={styles.pattern_left} />
                <img src={patternRight} alt="pattern_right" className={styles.pattern_right} />
            </div>
        </section>
    );
}

export default Journey;
