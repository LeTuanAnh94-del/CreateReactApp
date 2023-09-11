import styles from './feedback.module.css';

import iconQuotes from '../../../../assets/icons/iconQuotes.svg';
import iconStar from '../../../../assets/icons/iconStar.svg';
import avtUserFeedback from '../../../../assets/images/avtUserFeedback.png';
import iconLongDot from '../../../../assets/icons/iconLongDot.svg';
import iconShortDot from '../../../../assets/icons/iconShortDot.svg';
import Slider from 'react-slick';

function Feedback() {
    const settings = {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
    };

    return (
        <section className={styles.feedback}>
            <p className={styles.title}>What our learners say?</p>
            <div className={styles.feedbacks}>
                <div className={styles.wrapper_user_feedback}>
                    <div className={styles.user_feedback}>
                        <div className={styles.feedback_star}>
                            <img src={iconQuotes} alt="icon_quotes" />
                            <div className={styles.stars}>
                                <img src={iconStar} alt="star" />
                                <img src={iconStar} alt="icon_star" />
                                <img src={iconStar} alt="icon_star" />
                                <img src={iconStar} alt="icon_star" />
                                <img src={iconStar} alt="icon_star" />
                            </div>
                        </div>
                        <p className={styles.text_feedback}>
                            As a Vietnamese learner, you might have realized that pronunciation is not an easy task. I
                            had very refreshing pronunciation sessions with the course. It guided me step by step in
                            order to fix and correct several issues with my Vietnamese pronunciations. Highly
                            recommended!
                        </p>
                        <div className={styles.user}>
                            <img src={avtUserFeedback} alt="avt_user_feedback" />
                            <div className={styles.info_user}>
                                <p className={styles.name_user}>Tariq</p>
                                <p className={styles.job_user}>Master Your Pronunciation Course</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.user_feedback}>
                        <div className={styles.feedback_star}>
                            <img src={iconQuotes} alt="icon_quotes" />
                            <div className={styles.stars}>
                                <img src={iconStar} alt="icon_star" />
                                <img src={iconStar} alt="icon_star" />
                                <img src={iconStar} alt="icon_star" />
                                <img src={iconStar} alt="icon_star" />
                                <img src={iconStar} alt="icon_star" />
                            </div>
                        </div>
                        <p className={styles.text_feedback}>
                            It is amazing to see my progress even after so many lessons and each one brings me forward!
                            I am so glad that I found Gwen to accompany me on this way with her patience, high energy,
                            and always having something to ask or say!
                        </p>
                        <div className={styles.user}>
                            <img src={avtUserFeedback} alt="avt_user_feedback" />
                            <div className={styles.info_user}>
                                <p className={styles.name_user}>Konrad S.</p>
                                <p className={styles.job_user}>Master Your Pronunciation Course</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.user_feedback}>
                        <div className={styles.feedback_star}>
                            <img src={iconQuotes} alt="icon_quotes" />
                            <div className={styles.stars}>
                                <img src={iconStar} alt="icon_star" />
                                <img src={iconStar} alt="icon_star" />
                                <img src={iconStar} alt="icon_star" />
                                <img src={iconStar} alt="icon_star" />
                                <img src={iconStar} alt="icon_star" />
                            </div>
                        </div>
                        <p className={styles.text_feedback}>
                            Quyen - The instructor of the pronunciation course is a fantastic teacher. She is very
                            knowledgable. I took the 5-hour pronunciation course, now we're working our way through the
                            beginner material and I'm definitely progressing faster than I would have expected.
                        </p>
                        <div className={styles.user}>
                            <img src={avtUserFeedback} alt="img_user_feedback" />
                            <div className={styles.info_user}>
                                <p className={styles.name_user}>Gina H.</p>
                                <p className={styles.job_user}>Master Your Pronunciation Course</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.container_user_feedback_hidden}>
                    <div className={styles.wrapper_user_feedback_hidden}>
                        <Slider {...settings}>
                            <div className={styles.user_feedback}>
                                <div className={styles.feedback_star}>
                                    <img src={iconQuotes} alt="icon_quotes" />
                                    <div className={styles.stars}>
                                        <img src={iconStar} alt="star" />
                                        <img src={iconStar} alt="icon_star" />
                                        <img src={iconStar} alt="icon_star" />
                                        <img src={iconStar} alt="icon_star" />
                                        <img src={iconStar} alt="icon_star" />
                                    </div>
                                </div>
                                <p className={styles.text_feedback}>
                                    As a Vietnamese learner, you might have realized that pronunciation is not an easy
                                    task. I had very refreshing pronunciation sessions with the course. It guided me
                                    step by step in order to fix and correct several issues with my Vietnamese
                                    pronunciations. Highly recommended!
                                </p>
                                <div className={styles.user}>
                                    <img src={avtUserFeedback} alt="avt_user_feedback" />
                                    <div className={styles.info_user}>
                                        <p className={styles.name_user}>Tariq</p>
                                        <p className={styles.job_user}>Master Your Pronunciation Course</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.user_feedback}>
                                <div className={styles.feedback_star}>
                                    <img src={iconQuotes} alt="icon_quotes" />
                                    <div className={styles.stars}>
                                        <img src={iconStar} alt="icon_star" />
                                        <img src={iconStar} alt="icon_star" />
                                        <img src={iconStar} alt="icon_star" />
                                        <img src={iconStar} alt="icon_star" />
                                        <img src={iconStar} alt="icon_star" />
                                    </div>
                                </div>
                                <p className={styles.text_feedback}>
                                    It is amazing to see my progress even after so many lessons and each one brings me
                                    forward! I am so glad that I found Gwen to accompany me on this way with her
                                    patience, high energy, and always having something to ask or say!
                                </p>
                                <div className={styles.user}>
                                    <img src={avtUserFeedback} alt="avt_user_feedback" />
                                    <div className={styles.info_user}>
                                        <p className={styles.name_user}>Konrad S.</p>
                                        <p className={styles.job_user}>Master Your Pronunciation Course</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.user_feedback}>
                                <div className={styles.feedback_star}>
                                    <img src={iconQuotes} alt="icon_quotes" />
                                    <div className={styles.stars}>
                                        <img src={iconStar} alt="icon_star" />
                                        <img src={iconStar} alt="icon_star" />
                                        <img src={iconStar} alt="icon_star" />
                                        <img src={iconStar} alt="icon_star" />
                                        <img src={iconStar} alt="icon_star" />
                                    </div>
                                </div>
                                <p className={styles.text_feedback}>
                                    Quyen - The instructor of the pronunciation course is a fantastic teacher. She is
                                    very knowledgable. I took the 5-hour pronunciation course, now we're working our way
                                    through the beginner material and I'm definitely progressing faster than I would
                                    have expected.
                                </p>
                                <div className={styles.user}>
                                    <img src={avtUserFeedback} alt="img_user_feedback" />
                                    <div className={styles.info_user}>
                                        <p className={styles.name_user}>Gina H.</p>
                                        <p className={styles.job_user}>Master Your Pronunciation Course</p>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
            <div className={styles.dots}>
                <img src={iconLongDot} alt="icon_long_dot" />
                <img src={iconShortDot} alt="icon_short_dot" />
                <img src={iconShortDot} alt="icon_short_dot" />
                <img src={iconShortDot} alt="icon_short_dot" />
            </div>
        </section>
    );
}

export default Feedback;
