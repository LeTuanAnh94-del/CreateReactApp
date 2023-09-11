import styles from './blogDetail.module.css';
import popularPostsData from '../../data/popularPostsData';
import relatedBlogs from '../../data/relatedBlogs';
import categories from '../../data/categoriesData';
import iconBack from '../../../../assets/icons/iconBack.svg';
import iconSearch from '../../../../assets/icons/iconSearch.svg';
import iconCategory from '../../../../assets/icons/iconCategory.svg';
import iconCalendar from '../../../../assets/icons/iconCalendar.svg';
import iconEye from '../../../../assets/icons/iconViews.svg';
import iconFacebook from '../../../../assets/icons/iconFacebookShare.svg';
import iconIns from '../../../../assets/icons/iconInstagramShare.svg';
import iconTiktok from '../../../../assets/icons/iconTiktokShare.svg';
import iconYoutube from '../../../../assets/icons/iconYoutubeShare.svg';
import iconViews from '../../../../assets/icons/iconViews.svg';
// import avtUserPost from '../../../../assets/images/avtUserPost.svg';
// import avtCusPost from '../../../../assets/images/avtCusPost.svg';
// import imgBlogDetail from '../../../../assets/images/imgBlogDetail.svg';
// import imgBlogDetailFooter from '../../../../assets/images/imgBlogDetailFooter.svg';
// import imgPreviewBlog from '../../../../assets/images/imgPreviewBlog.svg';

function BlogDetail() {
    return (
        <div className={styles.container}>
            <div className={styles.inner_container}>
                <div className={styles.back}>
                    <img src={iconBack} alt="icon_back" />
                    <p className={styles.title_back}>Back</p>
                </div>
                <div className={styles.body_container}>
                    <div className={styles.sidebar_body}>
                        <div className={styles.search}>
                            <img src={iconSearch} alt="icon_search" />
                            <input type="search" className={styles.input_search} placeholder="Search Here" />
                        </div>
                        <div className={styles.popular_posts}>
                            <p className={styles.title_popular_posts}>Popular Posts</p>
                            <div className={styles.list_posts}>
                                {popularPostsData.map((popularPost) => (
                                    <div className={styles.item_post} key={popularPost.id}>
                                        {/* <img src={avtUserPost} alt="avt_user_post" /> */}
                                        <div className={styles.content_post}>
                                            <p className={styles.title_post}>{popularPost.title}</p>
                                            <p className={styles.user_post}>by Varun Bhagat / April 4, 2022</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
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
                    <div className={styles.main_container}>
                        <div className={styles.content_detail}>
                            <div className={styles.header_content}>
                                <p className={styles.title_content_detail}>
                                    It’s Time To Think Differently About Writing In The Classroom
                                </p>
                                <div className={styles.info_header_content}>
                                    <div className={styles.info_customer_post}>
                                        {/* <img src={avtCusPost} alt="avt_cus_post" /> */}
                                        <p className={styles.name_cus}>Owen Christ</p>
                                    </div>
                                    <div className={styles.date_post}>
                                        <img
                                            src={iconCalendar}
                                            alt="icon_calendar"
                                            className={styles.icon_header_content}
                                        />
                                        <p className={styles.text_icon}>August 10, 2022</p>
                                    </div>
                                    <div className={styles.amount_views}>
                                        <img src={iconEye} alt="icon_eye" className={styles.icon_header_content} />
                                        <p className={styles.text_icon}>504 views</p>
                                    </div>
                                </div>
                            </div>
                            {/* <img src={imgBlogDetail} alt="img_blog_detail" className={styles.img_blog_detail} /> */}
                            <div className={styles.paragraphs_content}>
                                <div className={styles.paragraph}>
                                    <p className={styles.text_paragraph}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu quis egestas
                                        convallis lorem mauris. Morbi proin in faucibus orci aliquet turpis mi quam
                                        commodo. Volutpat velit nisl ultricies vitae amet integer mauris.
                                    </p>
                                    <p className={styles.text_paragraph}>
                                        Aliquam id felis nibh ut risus duis euismod eu. In id eu commodo bibendum
                                        bibendum et. Urna imperdiet eget phasellus quam et nulla nibh sed sed. Dictum
                                        potenti vestibulum maecenas quis sollicitudin. Interdum pharetra magna libero
                                        eu. Lacinia dignissim cras ornare egestas. Nulla vehicula vel fringilla semper
                                        egestas sodales fames venenatis aenean. Purus phasellus mauris eu adipiscing
                                        mattis id tempor. Enim dolor bibendum ut commodo accumsan, aliquam.
                                    </p>
                                </div>
                                <div className={styles.paragraph_bold}>
                                    <p className={styles.text_paragraph_bold}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt turpis
                                        tellus nunc venenatis, bibendum. Pulvinar gravida ornare convallis nunc est
                                        mauris tellus. Facilisis id imperdiet amet molestie vulputate sed quis. Sodales
                                        diam in scelerisque tincidunt dui proin a enim ac. Blandit dis sed consequat id
                                        tincidunt egestas dignissim.
                                    </p>
                                </div>
                                <p className={styles.text_paragraph}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt turpis
                                    tellus nunc venenatis, bibendum. Pulvinar gravida ornare convallis nunc est mauris
                                    tellus. Facilisis id imperdiet amet molestie vulputate sed quis. Sodales diam in
                                    scelerisque tincidunt dui proin a enim ac. Blandit dis sed consequat id tincidunt
                                    egestas dignissim. Hendrerit maecenas integer diam tincidunt eu semper ipsum.
                                    Pharetra tincidunt iaculis ac faucibus nec massa. Id scelerisque quam diam
                                    adipiscing feugiat. Sed tincidunt a, arcu, curabitur pretium pellentesque vitae,
                                    tristique. Risus sagittis, id amet ut amet dignissim tortor. Consectetur eu sed
                                    faucibus eget pellentesque tortor, quis maecenas ultrices. Netus id in nunc non nibh
                                    sapien volutpat dis. Pretium lectus elementum donec mattis vestibulum consectetur.
                                </p>
                                <div className={styles.wrapper_title_paragraph}>
                                    <p className={styles.title_paragraph}>Lorem ipsum dolor sit amet </p>
                                </div>
                                <div className={styles.paragraph_footer}>
                                    <p className={styles.text_paragraph}>
                                        Dui tempor, congue neque, augue lectus cursus integer leo. Tristique
                                        pellentesque non massa netus. Cursus facilisis ullamcorper dictum tempor ut
                                        commodo enim, rhoncus. Blandit morbi scelerisque bibendum est nibh. Elementum
                                        faucibus netus praesent fringilla nunc, donec mi a. Auctor neque justo, aenean
                                        sit felis, elementum mauris massa. Risus eu porttitor nisi sit. Elementum
                                        elementum habitasse vulputate sed vestibulum. Arcu pharetra nisl in elit.
                                        Quisque molestie mollis eleifend nisi. Pulvinar adipiscing integer erat etiam in
                                        mauris curabitur tellus ultricies. Sollicitudin commodo mattis netus eu id arcu
                                        urna, eget. Turpis sed consectetur faucibus a. Nam turpis ultricies tortor
                                        consequat nibh gravida at sit dignissim.
                                    </p>
                                    <img
                                        // src={imgBlogDetailFooter}
                                        alt="img_blog_detail_footer"
                                        className={styles.img_blog_detail}
                                    />
                                    <p className={styles.text_paragraph}>
                                        Scelerisque vestibulum malesuada donec feugiat. Habitant lacinia enim, in cursus
                                        tempor arcu, lobortis nulla. Non porttitor in ut vestibulum sed viverra gravida
                                        risus fusce. Orci, amet, sit tincidunt ullamcorper. Urna, aliquam feugiat
                                        tincidunt lectus tristique netus molestie. Venenatis interdum diam tortor id
                                        odio. Vitae at mauris condimentum arcu, tellus. Et, nunc, odio non vel orci
                                        molestie mus sit. Magnis pellentesque quam pulvinar ut non sed. At cras tempus
                                        fermentum faucibus mattis maecenas ultrices. Viverra fermentum, mauris porttitor
                                        ipsum sollicitudin tristique nunc nec. Varius lorem nunc augue porta enim.
                                        Lectus ultricies duis viverra ac. Et vel eget nisi scelerisque purus dolor.
                                        Purus facilisis egestas nisl, sit sollicitudin vestibulum sed arcu posuere.
                                        Varius malesuada condimentum ornare risus etiam velit bibendum. Ac viverra
                                        faucibus aliquam, ac volutpat odio. Mattis nulla aliquet duis quis id pulvinar
                                        tortor odio. Auctor vitae habitant scelerisque quis sit risus. Sit imperdiet
                                        aliquet tristique non sit sodales purus. Sodales sed felis at nisl. At tellus
                                        euismod platea commodo sodales et et, nec tincidunt. Pretium sit mi at porttitor
                                        iaculis. Odio diam adipiscing at sed est et a fermentum lectus. Eget adipiscing
                                        amet nisl varius arcu morbi lorem pretium.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.footer_content}>
                                <div className={styles.share}>
                                    <p className={styles.title_footer}>Share</p>
                                    <div className={styles.items_share}>
                                        <img src={iconFacebook} alt="icon_facebook" />
                                        <img src={iconIns} alt="icon_ins" />
                                        <img src={iconTiktok} alt="icon_tiktok" />
                                        <img src={iconYoutube} alt="icon_youtube" />
                                    </div>
                                </div>
                                <div className={styles.hashtag}>
                                    <p className={styles.title_footer}>Hashtag</p>
                                    <div className={styles.items_hashtag}>
                                        <div className={styles.item_hashtag}>
                                            <p className={styles.text_hashtag}>Education</p>
                                        </div>
                                        <div className={styles.item_hashtag}>
                                            <p className={styles.text_hashtag}>Education</p>
                                        </div>
                                        <div className={styles.item_hashtag}>
                                            <p className={styles.text_hashtag}>Education</p>
                                        </div>
                                        <div className={styles.item_hashtag}>
                                            <p className={styles.text_hashtag}>Education</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.sidebar_body_mobile}>
                            <div className={styles.search}>
                                <img src={iconSearch} alt="icon_search" />
                                <input type="search" className={styles.input_search} placeholder="Search Here" />
                            </div>
                            <div className={styles.popular_posts}>
                                <p className={styles.title_popular_posts}>Popular Posts</p>
                                <div className={styles.list_posts}>
                                    {popularPostsData.map((popularPost) => (
                                        <div className={styles.item_post} key={popularPost.id}>
                                            {/* <img src={avtUserPost} alt="avt_user_post" /> */}
                                            <div className={styles.content_post}>
                                                <p className={styles.title_post}>{popularPost.title}</p>
                                                <p className={styles.user_post}>by Varun Bhagat / April 4, 2022</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
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
                        <div className={styles.related_posts}>
                            <p className={styles.title_related_posts}>Related Post</p>
                            <div className={styles.blogs}>
                                {relatedBlogs.map((blog) => (
                                    <div className={styles.item_blog} key={blog.id}>
                                        <img
                                            // src={imgPreviewBlog}
                                            alt="img_preview_blog"
                                            className={styles.img_preview_blog}
                                        />
                                        <div className={styles.content_blog}>
                                            <div className={styles.info_blog}>
                                                <div className={styles.time_views_wrapper}>
                                                    <div className={styles.time_wrapper}>
                                                        <img src={iconCalendar} alt="icon_calendar" />
                                                        <p className={styles.time_post}>August 10, 2022</p>
                                                    </div>
                                                    <div className={styles.views_wrapper}>
                                                        <img src={iconViews} alt="icon_views" />
                                                        <p className={styles.amount_views}>504 views</p>
                                                    </div>
                                                </div>
                                                <p className={styles.title_blog}>{blog.title}</p>
                                                <p className={styles.describe_blog}>
                                                    Great writing starts at the beginning, whether with an idea or…
                                                </p>
                                            </div>
                                            <div>
                                                <button className={styles.read_more}>Read More</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogDetail;
