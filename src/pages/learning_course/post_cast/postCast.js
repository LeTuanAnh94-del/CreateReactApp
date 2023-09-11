import styles from './postCast.module.css';
import categories from '../data/categoriesData';
import postCastData from '../data/postCastData';
// import bannerIntroducePostCast from '../../../assets/images/bannerIntroducePostCast.svg';
// import imgPreviewPostCast from '../../../assets/images/imgPreviewPostCast.svg';
import iconSearch from '../../../assets/icons/iconSearch.svg';
import iconCategory from '../../../assets/icons/iconCategory.svg';
import iconBack from '../../../assets/icons/iconBack.svg';
import iconSpotify from '../../../assets/icons/iconSpotify.svg';
import iconDot from '../../../assets/icons/iconDots.svg';
import iconPlay from '../../../assets/icons/iconPlayPostCast.svg';

function PostCast() {
    return (
        <div className={styles.container}>
            <div className={styles.introduce}>
                <div className={styles.inner_introduce}>
                    <div className={styles.content_introduce}>
                        <p className={styles.title_introduce}>True Stories</p>
                        <p className={styles.paragraph_introduce}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus risus non venenatis dolor
                            nisl tellus habitant aliquam. Dignissim tellus, eu eu sed malesuada pharetra aliquam
                            eu.Dignissim tellus, Tellus elementum enim faucibus morbi enim fusce:
                        </p>
                    </div>
                    {/* <img src={bannerIntroducePostCast} alt="banner_introduce_post_cast" /> */}
                </div>
            </div>
            <div className={styles.body_container}>
                <div className={styles.inner_container}>
                    <div className={styles.back}>
                        <img src={iconBack} alt="icon_back" />
                        <p className={styles.title_back}>Back</p>
                    </div>
                    <div className={styles.main_content}>
                        <div className={styles.sidebar_body}>
                            <div className={styles.search}>
                                <img src={iconSearch} alt="icon_search" />
                                <input type="search" className={styles.input_search} placeholder="Search Here" />
                            </div>
                            <div className={styles.categories}>
                                <p className={styles.title_categories}>Categories</p>
                                <div className={styles.list_categories}>
                                    {categories.map((category) => (
                                        <div className={styles.item_category} key={category.id}>
                                            <img src={iconCategory} alt="icon_category" />
                                            <p className={styles.name_category}>{category.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className={styles.list_post_casts}>
                            {postCastData.map((postCast) => (
                                <div className={styles.item_post_cast} key={postCast.id}>
                                    <img
                                        // src={imgPreviewPostCast}
                                        alt="img_preview_post_cast"
                                        className={styles.img_preview_post_cast}
                                    />
                                    <div className={styles.info_post_cast}>
                                        <img src={iconSpotify} alt="icon_spotify" className={styles.icon_item} />
                                        <div className={styles.inner_info_post_cast}>
                                            <div className={styles.wrapper_title_info_post_cast}>
                                                <p className={styles.title_info_post_cast}>{postCast.title}</p>
                                                <p className={styles.date_post_cast}>
                                                    Mar 7 - Southern Vietnamese Lessons | HowtoVietnamese
                                                </p>
                                            </div>
                                            <div>
                                                <button className={styles.button_following}>Following</button>
                                            </div>
                                        </div>
                                        <div className={styles.item_footer}>
                                            <img src={iconDot} alt="icon_dot" className={styles.icon_item} />
                                            <img src={iconPlay} alt="icon_play" className={styles.icon_item} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostCast;
