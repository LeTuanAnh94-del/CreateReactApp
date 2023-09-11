import styles from './reason.module.css';

import imgWhyLearn from '../../../../assets/images/imgWhyLearn.svg';
import iconReward from '../../../../assets/icons/iconReward.svg';

import React from 'react';
import Slider from 'react-slick';

function Reason() {
    const settings = {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
    };

    return (
        <section className={styles.wrapper}>
            <div className={styles.content}>
                <img src={imgWhyLearn} alt="img_why_learn" className={styles.img_why_learn} />
                <div className={styles.box_content}>
                    <p className={styles.title}>Why learning Vietnamese with Levion?</p>
                    <div className={styles.wrapper_cards}>
                        <div className={styles.cards}>
                            <div className={styles.row}>
                                <div className={styles.card}>
                                    <div className={styles.wrapper_card}>
                                        <div className={styles.icon}>
                                            <img src={iconReward} alt="icon_reward" />
                                        </div>
                                        <div className={styles.content_card}>
                                            <p className={styles.title_card}>Diverse courses of choices</p>
                                            <p className={styles.text_card}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sodales non
                                                interdum eget. Platea et quam magna tortor, dolor.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.card}>
                                    <div className={styles.wrapper_card}>
                                        <div className={styles.icon}>
                                            <img src={iconReward} alt="icon_reward" />
                                        </div>
                                        <div className={styles.content_card}>
                                            <p className={styles.title_card}>
                                                Quality lessons with designated journeys
                                            </p>
                                            <p className={styles.text_card}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sodales non
                                                interdum eget. Platea et quam magna tortor, dolor.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.card}>
                                    <div className={styles.wrapper_card}>
                                        <div className={styles.icon}>
                                            <img src={iconReward} alt="icon_reward" />
                                        </div>
                                        <div className={styles.content_card}>
                                            <p className={styles.title_card}>Diverse courses of choices</p>
                                            <p className={styles.text_card}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sodales non
                                                interdum eget. Platea et quam magna tortor, dolor.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.card}>
                                    <div className={styles.wrapper_card}>
                                        <div className={styles.icon}>
                                            <img src={iconReward} alt="icon_reward" />
                                        </div>
                                        <div className={styles.content_card}>
                                            <p className={styles.title_card}>
                                                Quality lessons with designated journeys
                                            </p>
                                            <p className={styles.text_card}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sodales non
                                                interdum eget. Platea et quam magna tortor, dolor.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.wrapper_cards_hidden}>
                            <div>
                                <div className={styles.cards_hidden}>
                                    <Slider {...settings}>
                                        <div className={styles.card}>
                                            <div className={styles.wrapper_card}>
                                                <div className={styles.icon}>
                                                    <img src={iconReward} alt="icon_reward" />
                                                </div>
                                                <div className={styles.content_card}>
                                                    <p className={styles.title_card}>Diverse courses of choices</p>
                                                    <p className={styles.text_card}>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                                                        sodales non interdum eget. Platea et quam magna tortor, dolor.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.card}>
                                            <div className={styles.wrapper_card}>
                                                <div className={styles.icon}>
                                                    <img src={iconReward} alt="icon_reward" />
                                                </div>
                                                <div className={styles.content_card}>
                                                    <p className={styles.title_card}>Diverse courses of choices</p>
                                                    <p className={styles.text_card}>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                                                        sodales non interdum eget. Platea et quam magna tortor, dolor.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.card}>
                                            <div className={styles.wrapper_card}>
                                                <div className={styles.icon}>
                                                    <img src={iconReward} alt="icon_reward" />
                                                </div>
                                                <div className={styles.content_card}>
                                                    <p className={styles.title_card}>Diverse courses of choices</p>
                                                    <p className={styles.text_card}>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                                                        sodales non interdum eget. Platea et quam magna tortor, dolor.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Reason;
