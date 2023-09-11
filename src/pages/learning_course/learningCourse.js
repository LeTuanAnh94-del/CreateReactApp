import React from 'react';

import styles from './learningCourse.module.css';
import bannerIntroduceLearningCourse from '../../assets/images/bannerIntroduceLearningCourse.svg';
import bannerPodcast from '../../assets/images/bannerPodcast.svg';
import bannerDigitalFlashcards from '../../assets/images/bannerDigitalFlashcards.svg';
import bannerBlog from '../../assets/images/BannerBlog.svg';
import bannerSocialNetwork from '../../assets/images/bannerSocialNetwork.svg';
import bannerOurCommunity from '../../assets/images/bannerOurCommunity.svg';
import bannerEBooks from '../../assets/images/bannerEBooks.svg';

const LearningCourse = () => {
    return (
        <div className={styles.container}>
            <div className={styles.introduce}>
                <div className={styles.inner_introduce}>
                    <div className={styles.content_introduce}>
                        <p className={styles.title_introduce}>Learning Resources</p>
                        <p className={styles.paragraph_introduce}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus risus non venenatis dolor
                            nisl tellus habitant aliquam. Dignissim tellus, eu eu sed malesuada pharetra aliquam
                            eu.Dignissim tellus, Tellus elementum enim faucibus morbi enim fusce:
                        </p>
                    </div>
                    <img src={bannerIntroduceLearningCourse} alt="banner_introduce_learning_course" />
                </div>
            </div>
            <div className={styles.wrapper_box}>
                <div className={styles.inner_box}>
                    <div className={styles.wrapper_box_item}>
                        <div className={styles.wrapper_banner}>
                            <img src={bannerPodcast} alt="banner_podcast" className={styles.banner_box} />
                        </div>
                        <p className={styles.title_box}>Podcast</p>
                    </div>
                    <div className={styles.wrapper_box_item}>
                        <div className={styles.wrapper_banner}>
                            <img
                                src={bannerDigitalFlashcards}
                                alt="banner_digital_flashcards"
                                className={styles.banner_box}
                            />
                        </div>
                        <p className={styles.title_box}>Digital Flashcards</p>
                    </div>
                    <div className={styles.wrapper_box_item}>
                        <div className={styles.wrapper_banner}>
                            <img src={bannerBlog} alt="banner_blog" className={styles.banner_box} />
                        </div>
                        <p className={styles.title_box}>Blog</p>
                    </div>
                    <div className={styles.wrapper_box_item}>
                        <div className={styles.wrapper_banner}>
                            <img src={bannerSocialNetwork} alt="banner_social_network" className={styles.banner_box} />
                        </div>
                        <p className={styles.title_box}>Social Network</p>
                    </div>
                    <div className={styles.wrapper_box_item}>
                        <div className={styles.wrapper_banner}>
                            <img src={bannerOurCommunity} alt="banner_our_community" className={styles.banner_box} />
                        </div>
                        <p className={styles.title_box}>Our Community</p>
                    </div>
                    <div className={styles.wrapper_box_item}>
                        <div className={styles.wrapper_banner}>
                            <img src={bannerEBooks} alt="banner_e_books" className={styles.banner_box} />
                        </div>
                        <p className={styles.title_box}>EBooks</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearningCourse;
