import styles from './socialNetWork.module.css';
import bannerIntroduceSocialNetwork from '../../../assets/images/bannerIntroduceSocialNetwork.svg';
import bannerFacebook from '../../../assets/images/bannerFacebook.svg';
import bannerIns from '../../../assets/images/bannerIns.svg';
import bannerYoutube from '../../../assets/images/bannerYoutube.svg';
import bannerTiktok from '../../../assets/images/bannerTiktok.svg';

function SocialNetwork() {
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
                    <img src={bannerIntroduceSocialNetwork} alt="banner_introduce_social_network" />
                </div>
            </div>
            <div className={styles.main}>
                <p className={styles.title_main}>Let’s Join Our Social Network</p>
                <div className={styles.wrapper_box}>
                    <div className={styles.inner_box}>
                        <div className={styles.wrapper_box_item}>
                            <div className={styles.wrapper_banner}>
                                <img src={bannerFacebook} alt="banner_facebook" className={styles.banner_box} />
                            </div>
                            <p className={styles.title_box}>Podcast</p>
                        </div>
                        <div className={styles.wrapper_box_item}>
                            <div className={styles.wrapper_banner}>
                                <img src={bannerIns} alt="banner_ins" className={styles.banner_box} />
                            </div>
                            <p className={styles.title_box}>Instagram</p>
                        </div>
                        <div className={styles.wrapper_box_item}>
                            <div className={styles.wrapper_banner}>
                                <img src={bannerYoutube} alt="banner_youtube" className={styles.banner_box} />
                            </div>
                            <p className={styles.title_box}>Youtube</p>
                        </div>
                        <div className={styles.wrapper_box_item}>
                            <div className={styles.wrapper_banner}>
                                <img src={bannerTiktok} alt="banner_tiktok" className={styles.banner_box} />
                            </div>
                            <p className={styles.title_box}>Tiktok</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SocialNetwork;
