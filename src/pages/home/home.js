import styles from './home.module.css';
import Journey from './components/journey';
import Learn from './components/learn';
import Reason from './components/reason';
import Offer from './components/offer';
import Feedback from './components/feedback';
import Contact from './components/contact';
// import backgroundJoin from '../../assets/images/backgroundJoin.svg';
// import pattern1 from '../../assets/images/pattern1.svg';
// import pattern2 from '../../assets/images/pattern2.svg';
// import pattern3 from '../../assets/images/pattern3.svg';
// import pattern4 from '../../assets/images/pattern4.svg';

function home() {
    return (
        <div className={styles.container}>
            <Journey />
            <Learn />
            <Reason />
            <Offer />
            <Feedback />
            <Contact />
            <section className={styles.join}>
                <div className={styles.wrapper_background_join}>
                    {/* <img src={backgroundJoin} alt="background_join" className={styles.background_join} /> */}
                </div>
                <div className={styles.wrapper_content_join}>
                    <div className={styles.about_join}>
                        <div className={styles.content_join}>
                            <p className={styles.title_join}>Join our Newsletter</p>
                            <p className={styles.text_join}>
                                Get a notification from us on any updates and tips for your learning progress.
                            </p>
                        </div>
                        <div className={styles.input_join}>
                            <input type="text" className={styles.field_email} placeholder="Enter your email" />
                            <button className={styles.button_join}>Subscribe</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* <img src={pattern1} alt="pattern" className={styles.pattern1} /> */}
            {/* <img src={pattern2} alt="pattern2" className={styles.pattern2} /> */}
            {/* <div className={styles.background_why_learn}></div> */}
            {/* <img src={pattern3} alt="pattern3" className={styles.pattern3} /> */}
            {/* <img src={pattern4} alt="pattern4" className={styles.pattern4} /> */}
        </div>
    );
}

export default home;
