import styles from './offer.module.css';

import imgTarget from '../../../../assets/images/imgTarget.png';
import imgEducation from '../../../../assets/images/imgEducation.png';
import imgCommunicationOffer from '../../../../assets/images/imgCommunicationOffer.png';

function Offer() {
    return (
        <section className={styles.offer}>
            <p className={styles.title}>What we offer?</p>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <div className={styles.icon}>
                        <img src={imgTarget} alt="img_target" />
                    </div>
                    <p className={styles.text}>Test your level and identify your learning journey.</p>
                </div>
                <div className={styles.card}>
                    <div className={styles.icon}>
                        <img src={imgEducation} alt="img_education" />
                    </div>
                    <p className={styles.text}>Giant supporting resources.</p>
                </div>
                <div className={styles.card}>
                    <div className={styles.icon}>
                        <img src={imgCommunicationOffer} alt="img_communication_offer" />
                    </div>
                    <p className={styles.text}>Community of Vietnamese-language lovers:</p>
                </div>
                <div className={styles.card}>
                    <div className={styles.icon}>
                        <img src={imgEducation} alt="img_education" />
                    </div>
                    <p className={styles.text}>Giant supporting resources.</p>
                </div>
            </div>
        </section>
    );
}

export default Offer;
