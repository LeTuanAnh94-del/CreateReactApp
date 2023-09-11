import styles from './aboutUs.module.css';
// import bannerAboutUs from '../../assets/images/bannerAboutUs.svg';
// import videoStory from '../../assets/images/videoStory.svg';
// import bannerVision from '../../assets/images/bannerVision.svg';
// import bannerMission from '../../assets/images/bannerMission.svg';
// import bannerAboutStory from '../../assets/images/bannerAboutStory.svg';
// import bannerTeam from '../../assets/images/bannerTeam.svg';
import iconVision from '../../assets/icons/iconVision.svg';
import iconMission from '../../assets/icons/iconMission.svg';

function AboutUs() {
    return (
        <div className={styles.about_us}>
            <div className={styles.introduce}>
                <div className={styles.content_introduce}>
                    <div className={styles.inner_content}>
                        <p className={styles.title_introduce}>Who are we?</p>
                        <p className={styles.paragraph_introduce}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus risus non venenatis dolor
                            nisl tellus habitant aliquam. Dignissim tellus, eu eu sed malesuada pharetra aliquam
                            eu.Dignissim tellus, Tellus elementum enim faucibus morbi enim fusce:
                        </p>
                    </div>
                    {/* <img src={bannerAboutUs} alt="banner_about_us" className={styles.banner_about_us} /> */}
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.story}>
                    <div className={styles.content_story}>
                        <p className={styles.title_story}>The Levion story</p>
                        <p className={styles.paragraph_story}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst sed massa tempor, sagittis
                            non consequat pretium urna nisi. Vitae, nunc proin mollis accumsan, velit. Turpis ornare
                            commodo nisl, pharetra, tempus nam pellentesque. Nulla et id consectetur suscipit sagittis
                            viverra tortor eu tempus. Nibh urna ullamcorper venenatis.
                        </p>
                    </div>
                    {/* <img src={videoStory} alt="video_story" className={styles.img} /> */}
                </div>
                <div className={styles.target}>
                    <div className={styles.inner_vision}>
                        {/* <img src={bannerVision} alt="banner_vision" className={styles.img} /> */}
                        <div className={styles.content_target}>
                            <img src={iconVision} alt="icon_vision" className={styles.icon_target} />
                            <div className={styles.wrapper_content_target}>
                                <p className={styles.title_target}>Our Vision</p>
                                <p className={styles.paragraph_target}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus risus non venenatis
                                    dolor nisl tellus habitant aliquam. Dignissim tellus, eu eu sed malesuada pharetra
                                    aliquam eu.Dignissim tellus, Tellus elementum enim faucibus morbi enim fusce:
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.inner_mission}>
                        <div className={styles.content_target}>
                            <div className={styles.wrapper_content_target}>
                                <img src={iconMission} alt="icon_mission" className={styles.icon_target} />
                                <p className={styles.title_target}>Our Mission</p>
                                <p className={styles.paragraph_target}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus risus non venenatis
                                    dolor nisl tellus habitant aliquam. Dignissim tellus, eu eu sed malesuada pharetra
                                    aliquam eu.Dignissim tellus, Tellus elementum enim faucibus morbi enim fusce:
                                </p>
                            </div>
                        </div>
                        {/* <img src={bannerMission} alt="banner_mission" className={styles.img} /> */}
                    </div>
                </div>
                <div className={styles.about_story}>
                    <div className={styles.content_about_story}>
                        <p className={styles.title_about_story}>Our “Vi” Mascot story</p>
                        <p className={styles.paragraph_about_story}>
                            At eu ut vitae platea at in. In porttitor mollis eu et ornare odio cursus id. Sed eget et
                            nunc vivamus hac et urna, fermentum. Purus malesuada tempor donec egestas. Lorem quam
                            aliquam porttitor ornare magna condimentum ipsum, gravida. Nascetur eget eget massa purus
                            amet vitae facilisi consequat. Iaculis purus, integer condimentum sodales vulputate dapibus
                            molestie netus. Suscipit fringilla amet leo rutrum aliquet. Tempus mi fringilla fermentum
                            feugiat amet leo placerat cras nam. Egestas arcu, egestas consectetur scelerisque habitant.
                            Viverra sed adipiscing mi dignissim tortor dignissim molestie.
                        </p>
                    </div>
                    {/* <img src={bannerAboutStory} alt="banner_about_story" className={styles.banner_about_story} /> */}
                </div>
                <div className={styles.team}>
                    <div className={styles.wrapper_content_team}>
                        <div className={styles.content_team}>
                            <p className={styles.title_content_team}>The Levion Team</p>
                            <div className={styles.line}></div>
                            <p className={styles.paragraph_content_team}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst sed massa tempor,
                                sagittis non consequat pretium urna nisi. Vitae, nunc proin mollis accumsan, velit.
                                Turpis ornare commodo nisl, pharetra, tempus nam pellentesque. Nulla et id consectetur
                                suscipit sagittis viverra tortor eu tempus. Nibh urna ullamcorper venenatis.
                            </p>
                        </div>
                    </div>
                    {/* <img src={bannerTeam} alt="banner_team" className={styles.banner_team} /> */}
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
