import React from 'react';

import styles from './blog.module.css';
import popularPostsData from '../data/popularPostsData';
import categories from '../data/categoriesData';
import blogData from '../data/blogData';
import bannerBlog from '../../../assets/images/imageBlog.svg';
import avtUserPost from '../../../assets/images/avtUserPost.svg';
import imgPreviewBlog from '../../../assets/images/imgPreviewBlog.svg';
import iconSearch from '../../../assets/icons/iconSearch.svg';
import iconCategory from '../../../assets/icons/iconCategory.svg';
import iconCalendar from '../../../assets/icons/iconCalendar.svg';
import iconViews from '../../../assets/icons/iconViews.svg';
import iconArrowLeft from '../../../assets/icons/iconArrowLeft.svg';
import iconArrowRight from '../../../assets/icons/iconArrowRight.svg';

function Blog() {
    return (
        <div className={styles.container}>
            <div className={styles.introduce}>
                <div className={styles.content_introduce}>
                    <p className={styles.title_introduce}>Blog</p>
                    <p className={styles.paragraph_introduce}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus risus non venenatis dolor nisl
                        tellus habitant aliquam. Dignissim tellus, eu eu sed malesuada pharetra aliquam eu.Dignissim
                        tellus, Tellus elementum enim faucibus morbi enim fusce:
                    </p>
                </div>
                <img src={bannerBlog} alt="banner_blog" />
            </div>
            <div className={styles.body_blog}>
                <div className={styles.wrapper_body}>
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
                                        <img src={avtUserPost} alt="avt_user_post" />
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
                    <div className={styles.content_body}>
                        <div className={styles.blogs}>
                            {blogData.map((blog) => (
                                <div className={styles.item_blog} key={blog.id}>
                                    <img
                                        src={imgPreviewBlog}
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
                        <div className={styles.pagination}>
                            <div className={styles.arrows}>
                                <img src={iconArrowLeft} alt="icon_arrow_left" />
                            </div>
                            <div className={styles.number_page_active}>
                                <p className={styles.number_active}>1</p>
                            </div>
                            <div className={styles.page_number}>
                                <p className={styles.number}>2</p>
                            </div>
                            <div className={styles.arrows}>
                                <img src={iconArrowRight} alt="icon_arrow_right" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
