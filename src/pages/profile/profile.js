import styles from './profile.module.css';
import avt from '../../assets/images/avt.png';
import iconUpload from '../../assets/icons/iconUpload.png';
import iconEdit from '../../assets/icons/iconEdit.png';
import iconUser from '../../assets/icons/iconUser.png';
import iconPhone from '../../assets/icons/iconPhone.png';
import iconDate from '../../assets/icons/iconDate.png';
import iconEmail from '../../assets/icons/iconEmail.png';
import imgPreviewCourse from '../../assets/images/imgPreviewCourse.png';
import imgProgress from '../../assets/images/imgProgress.png';
import imgWishlist from '../../assets/images/imgWishList.png';
import { profileAccountApi } from '../../api/signIn.js';

import { useEffect, useState } from 'react';

function Profile() {
    const [activeNav, setActiveNav] = useState('Course');
    const [userData, setUserData] = useState(null);

    const handleClickNav = (nav) => {
        setActiveNav(nav);
    };

    const accessToken = localStorage.getItem('token');

    useEffect(() => {
        const data = async () => {
            try {
                const res = await profileAccountApi({ token: accessToken });
                setUserData(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        data();
    }, [accessToken]);

    return (
        <div className={styles.container}>
            <div className={styles.container_profile}>
                <div className={styles.wrapper_avt}>
                    <div className={styles.avt}>
                        <img src={avt} alt="avt" />
                        <button className={styles.button_upload}>
                            <img src={iconUpload} alt="icon_upload" />
                            <p className={styles.text_upload}>Upload image</p>
                        </button>
                    </div>
                </div>
                <div className={styles.user_info}>
                    <div className={styles.header_info}>
                        <p className={styles.title_info}>User Infomation</p>
                        <div className={styles.edit_info}>
                            <img src={iconEdit} alt="icon_edit" />
                            <p className={styles.text_edit}>Edit</p>
                        </div>
                    </div>
                    <div className={styles.body_info}>
                        <div className={styles.box_info}>
                            <img src={iconUser} alt="icon_user" />
                            <div className={styles.info_name}>
                                <p className={styles.title_items_info}>Họ và tên</p>
                                <p className={styles.items_info}>{userData?.fullname ? userData.fullname : '...'}</p>
                            </div>
                        </div>
                        <div className={styles.box_info}>
                            <img src={iconPhone} alt="icon_phone" />
                            <div className={styles.info_name}>
                                <p className={styles.title_items_info}>Số điện thoại</p>
                                <p className={styles.items_info}>
                                    {userData?.phone ? userData.phone : 'Chưa cập nhật'}
                                </p>
                                
                            </div>
                        </div>
                        <div className={styles.box_info}>
                            <img src={iconDate} alt="icon_date" />
                            <div className={styles.info_name}>
                                <p className={styles.title_items_info}>Ngày sinh</p>
                                <p className={styles.items_info}>Chưa cập nhật</p>
                            </div>
                        </div>
                        <div className={styles.box_info}>
                            <img src={iconEmail} alt="icon_email" />
                            <div className={styles.info_name}>
                                <p className={styles.title_items_info}>Email</p>
                                <p className={styles.items_info}>{userData?.email ? userData.email : '...'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.container_info}>
                <nav className={styles.navbar}>
                    <div className={styles.items_navbar}>
                        <div
                            className={activeNav === 'Course' ? styles.item_navbar_active : styles.item_navbar}
                            onClick={() => handleClickNav('Course')}
                        >
                            <p className={styles.text_navbar}>My Learning Journey</p>
                        </div>
                        <div
                            className={activeNav === 'Change Password' ? styles.item_navbar_active : styles.item_navbar}
                            onClick={() => handleClickNav('Change Password')}
                        >
                            <p className={styles.text_navbar}>Password</p>
                        </div>
                        <div className={styles.item_navbar}>
                            <p className={styles.text_navbar}>Billing & Purchases</p>
                        </div>
                        <div
                            className={activeNav === 'Wishlist' ? styles.item_navbar_active : styles.item_navbar}
                            onClick={() => handleClickNav('Wishlist')}
                        >
                            <p className={styles.text_navbar}>Whishlist</p>
                        </div>
                    </div>
                    <div className={styles.line}></div>
                </nav>
                <div className={styles.content}>
                    {activeNav === 'Course' && (
                        <div className={styles.courses}>
                            <div className={styles.course}>
                                <div className={styles.info_course}>
                                    <div className={styles.box_course}>
                                        <img src={imgPreviewCourse} alt="img_preview_course" />
                                        <div className={styles.info}>
                                            <div className={styles.info_inner}>
                                                <p className={styles.title_course}>Master your pronunciation Course</p>
                                                <p className={styles.teacher_course}>By Vo Hanh Quyen</p>
                                                <div className={styles.level_course}>
                                                    <p className={styles.text_level}>All Levels</p>
                                                </div>
                                            </div>
                                            <button className={styles.button_course}>Go to course</button>
                                        </div>
                                    </div>
                                    <div className={styles.wrapper_progress}>
                                        <div className={styles.line_column}></div>
                                        <div className={styles.progress}>
                                            <img src={imgProgress} alt="img_progress" />
                                            <p className={styles.text_progress}>Your Progress</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.course}>
                                <div className={styles.info_course}>
                                    <div className={styles.box_course}>
                                        <img src={imgPreviewCourse} alt="img_preview_course" />
                                        <div className={styles.info}>
                                            <div className={styles.info_inner}>
                                                <p className={styles.title_course}>Master your pronunciation Course</p>
                                                <p className={styles.teacher_course}>By Vo Hanh Quyen</p>
                                                <div className={styles.level_course}>
                                                    <p className={styles.text_level}>All Levels</p>
                                                </div>
                                            </div>
                                            <button className={styles.button_course}>Go to course</button>
                                        </div>
                                    </div>
                                    <div className={styles.wrapper_progress}>
                                        <div className={styles.line_column}></div>
                                        <div className={styles.progress}>
                                            <img src={imgProgress} alt="img_progress" />
                                            <p className={styles.text_progress}>Your Progress</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.course}>
                                <div className={styles.info_course}>
                                    <div className={styles.box_course}>
                                        <img src={imgPreviewCourse} alt="img_preview_course" />
                                        <div className={styles.info}>
                                            <div className={styles.info_inner}>
                                                <p className={styles.title_course}>Master your pronunciation Course</p>
                                                <p className={styles.teacher_course}>By Vo Hanh Quyen</p>
                                                <div className={styles.level_course}>
                                                    <p className={styles.text_level}>All Levels</p>
                                                </div>
                                            </div>
                                            <button className={styles.button_course}>Go to course</button>
                                        </div>
                                    </div>
                                    <div className={styles.wrapper_progress}>
                                        <div className={styles.line_column}></div>
                                        <div className={styles.progress}>
                                            <img src={imgProgress} alt="img_progress" />
                                            <p className={styles.text_progress}>Your Progress</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeNav === 'Change Password' && (
                        <div className={styles.change_password}>
                            <div className={styles.input_filled}>
                                <div className={styles.item_input}>
                                    <div className={styles.title_input}>
                                        <p className={styles.text}>Current Password</p>
                                    </div>
                                    <div type="password" className={styles.box_input}>
                                        <input type="password" className={styles.password_input} />
                                    </div>
                                </div>
                                <div className={styles.item_input}>
                                    <div className={styles.title_input}>
                                        <p className={styles.text}>New Password</p>
                                    </div>
                                    <div type="password" className={styles.box_input}>
                                        <input type="password" className={styles.password_input} />
                                    </div>
                                </div>
                                <div className={styles.item_input}>
                                    <div className={styles.title_input}>
                                        <p className={styles.text}>Re-type Password</p>
                                    </div>
                                    <div type="password" className={styles.box_input}>
                                        <input type="password" className={styles.password_input} />
                                    </div>
                                </div>
                            </div>
                            <button className={styles.button_save}>Save changes</button>
                        </div>
                    )}
                    {activeNav === 'Wishlist' && (
                        <div className={styles.wishlist}>
                            <img src={imgWishlist} alt="img_wishlist" />
                            <p className={styles.title_wishlist}>
                                Your Wishlist is empty. Keep Going to find a course!
                            </p>
                            <button className={styles.button_wishlist}>Go to Courses</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Profile;
