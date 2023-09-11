import styles from './contact.module.css';
// import bannerContact from '../../../../assets/images/bannerContact.svg';
import iconFacebook from '../../../../assets/icons/iconFacebook.svg';
import iconDiscord from '../../../../assets/icons/iconDiscord.svg';

function Contact() {
    return (
        <section className={styles.contact}>
            {/* <img src={bannerContact} alt="banner_contact" className={styles.banner_contact} /> */}
            <div className={styles.about_contact}>
                <div className={styles.content_contact}>
                    <p className={styles.title_contact}>
                        Be a part of our<p className={styles.title_contact}> Vietnamese-speaking community</p>
                    </p>
                    <p className={styles.text_contact}>
                        Join Vietnamese learners from around the world to become fluent and confident in the community
                        we are building!
                    </p>
                </div>
                <div className={styles.buttons_contact}>
                    <button className={styles.button_contact}>
                        <img src={iconFacebook} alt="icon_facebook" />
                        Join us on Facebook
                    </button>
                    <button className={styles.button_contact}>
                        <img src={iconDiscord} alt="icon_facebook" />
                        Join us on Discord
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Contact;
