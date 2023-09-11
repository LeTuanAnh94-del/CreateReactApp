import { useEffect } from 'react';

import styles from './courseDetail.module.css';

import iconStar from '../../../assets/icons/iconStarCourseDetail.svg';
import iconLevel from '../../../assets/icons/iconLevel.svg';
import iconClock from '../../../assets/icons/iconClock.svg';
import iconPlay from '../../../assets/icons/iconPlayPostCast.svg';
import iconCheck from '../../../assets/icons/iconCheck.svg';
import iconSpeakingSkill from '../../../assets/icons/iconSpeakingSkill.svg';
import iconListeningSkill from '../../../assets/icons/iconListeningSkill.svg';
import iconWritingSkill from '../../../assets/icons/iconWritingSkill.svg';
import iconExpand from '../../../assets/icons/iconExpand.svg';
import iconVideo from '../../../assets/icons/iconVideo.svg';
import iconTest from '../../../assets/icons/iconTest.svg';
import iconSubject from '../../../assets/icons/iconSubject.svg';
import iconLanguage from '../../../assets/icons/iconLanguage.svg';
import iconBook from '../../../assets/icons/iconBook.svg';
import iconStarFeedback from '../../../assets/icons/iconStarFeedback.svg';
import avtTeacher from '../../../assets/images/avtTeacher.svg';
import imgPreviewCourseDetail from '../../../assets/images/imgPreviewCourseDetail.svg';
import avtMentor from '../../../assets/images/avtMentor.svg';
import avtStudent1 from '../../../assets/images/avtStudent1.svg';
import avtStudent2 from '../../../assets/images/avtStudent2.svg';
import avtStudent3 from '../../../assets/images/avtStudent3.svg';
import avtStudent4 from '../../../assets/images/avtStudent4.svg';
import avtStudent5 from '../../../assets/images/avtStudent5.svg';
import buttonHeart from '../../../assets/images/buttonHeart.svg';

function CourseDetail() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <section className={styles.container_info_course}>
                    <div className={styles.wrapper_info_course}>
                        <div className={styles.info_course}>
                            <div className={styles.course_category}>
                                <p className={styles.text}>Course Category</p>
                                <div className={styles.box_title}>
                                    <p className={styles.title}>Lorem ipsum dolor sit amet.</p>
                                    <p className={styles.text}>Last update December 1, 2022</p>
                                </div>
                            </div>
                            <div className={styles.teacher}>
                                <img src={avtTeacher} alt="avt_teacher" />
                                <p className={styles.name}>Kathryn Murphy</p>
                            </div>
                            <div className={styles.rate}>
                                <div className={styles.rate_star}>
                                    <div className={styles.text_rate}>
                                        <b>4.5</b>
                                    </div>
                                    <div className={styles.stars}>
                                        <img src={iconStar} alt="icon_star" className={styles.icon_star} />
                                        <img src={iconStar} alt="icon_star" className={styles.icon_star} />
                                        <img src={iconStar} alt="icon_star" className={styles.icon_star} />
                                        <img src={iconStar} alt="icon_star" className={styles.icon_star} />
                                        <img src={iconStar} alt="icon_star" className={styles.icon_star} />
                                    </div>
                                    <p className={styles.text}>(100)</p>
                                </div>
                                <p className={styles.text_rate}>|</p>
                                <p className={styles.text_rate}>100 alreadey enrolled</p>
                            </div>
                        </div>
                        <div className={styles.card_info_course}>
                            <img
                                src={imgPreviewCourseDetail}
                                alt="img_preview_course_detail"
                                className={styles.img_preview}
                            />
                            <div className={styles.course_detail}>
                                <div className={styles.course_detail_info}>
                                    <div className={styles.course_info_item}>
                                        <div className={styles.header_info_item}>
                                            <img src={iconLevel} alt="icon_level" />
                                            <p className={styles.name_info_item}>Level</p>
                                        </div>
                                        <p className={styles.text_info_item}>Beginner</p>
                                    </div>
                                    <div className={styles.course_info_item}>
                                        <div className={styles.header_info_item}>
                                            <img src={iconClock} alt="icon_clock" />
                                            <p className={styles.name_info_item}>Duration</p>
                                        </div>
                                        <p className={styles.text_info_item}>4 hour</p>
                                    </div>
                                    <div className={styles.course_info_item}>
                                        <div className={styles.header_info_item}>
                                            <img src={iconPlay} alt="icon_play" />
                                            <p className={styles.name_info_item}>Lectures</p>
                                        </div>
                                        <p className={styles.text_info_item}>Vo Hanh Quyen</p>
                                    </div>
                                    <div className={styles.course_info_item}>
                                        <div className={styles.header_info_item}>
                                            <img src={iconSubject} alt="icon_subject" />
                                            <p className={styles.name_info_item}>Subject</p>
                                        </div>
                                        <p className={styles.text_info_item}>Pronounciation</p>
                                    </div>
                                    <div className={styles.course_info_item}>
                                        <div className={styles.header_info_item}>
                                            <img src={iconLanguage} alt="icon_language" />
                                            <p className={styles.name_info_item}>Language</p>
                                        </div>
                                        <p className={styles.text_info_item}>Beginner</p>
                                    </div>
                                </div>
                                <div className={styles.material}>
                                    <p className={styles.title_material}>Material includes</p>
                                    <div className={styles.item_material}>
                                        <img src={iconPlay} alt="icon_play" />
                                        <p className={styles.text_material}>Video</p>
                                    </div>
                                    <div className={styles.item_material}>
                                        <img src={iconBook} alt="icon_book" />
                                        <p className={styles.text_material}>Books</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.cart}>
                                <button className={styles.button_cart}>Added To Cart</button>
                                <div className={styles.buy_now}>
                                    <button className={styles.button_buy}>Buy Now</button>
                                    <img src={buttonHeart} alt="button_heart" className={styles.img_heart} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className={styles.card_info_course_hidden}>
                <div className={styles.wrapper_img_cart}>
                    <img src={imgPreviewCourseDetail} alt="img_preview_course_detail" className={styles.img_preview} />
                    <div className={styles.cart}>
                        <button className={styles.button_cart}>Added To Cart</button>
                        <div className={styles.buy_now}>
                            <button className={styles.button_buy}>Buy Now</button>
                            <img src={buttonHeart} alt="button_heart" />
                        </div>
                    </div>
                </div>
                <div className={styles.course_detail}>
                    <div className={styles.course_detail_info}>
                        <div className={styles.course_info_item}>
                            <div className={styles.header_info_item}>
                                <img src={iconLevel} alt="icon_level" />
                                <p className={styles.name_info_item}>Level</p>
                            </div>
                            <p className={styles.text_info_item}>Beginner</p>
                        </div>
                        <div className={styles.course_info_item}>
                            <div className={styles.header_info_item}>
                                <img src={iconClock} alt="icon_clock" />
                                <p className={styles.name_info_item}>Duration</p>
                            </div>
                            <p className={styles.text_info_item}>4 hour</p>
                        </div>
                        <div className={styles.course_info_item}>
                            <div className={styles.header_info_item}>
                                <img src={iconPlay} alt="icon_play" />
                                <p className={styles.name_info_item}>Lectures</p>
                            </div>
                            <p className={styles.text_info_item}>Vo Hanh Quyen</p>
                        </div>
                        <div className={styles.course_info_item}>
                            <div className={styles.header_info_item}>
                                <img src={iconSubject} alt="icon_subject" />
                                <p className={styles.name_info_item}>Subject</p>
                            </div>
                            <p className={styles.text_info_item}>Pronounciation</p>
                        </div>
                        <div className={styles.course_info_item}>
                            <div className={styles.header_info_item}>
                                <img src={iconLanguage} alt="icon_language" />
                                <p className={styles.name_info_item}>Language</p>
                            </div>
                            <p className={styles.text_info_item}>Beginner</p>
                        </div>
                    </div>
                    <div className={styles.material}>
                        <p className={styles.title_material}>Material includes</p>
                        <div className={styles.item_material}>
                            <img src={iconPlay} alt="icon_play" />
                            <p className={styles.text_material}>Video</p>
                        </div>
                        <div className={styles.item_material}>
                            <img src={iconBook} alt="icon_book" />
                            <p className={styles.text_material}>Books</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.card_info_course_hidden_2}>
                <img src={imgPreviewCourseDetail} alt="img_preview_course_detail" className={styles.img_preview} />
                <div className={styles.course_detail}>
                    <div className={styles.course_detail_info}>
                        <div className={styles.course_info_item}>
                            <div className={styles.header_info_item}>
                                <img src={iconLevel} alt="icon_level" />
                                <p className={styles.name_info_item}>Level</p>
                            </div>
                            <p className={styles.text_info_item}>Beginner</p>
                        </div>
                        <div className={styles.course_info_item}>
                            <div className={styles.header_info_item}>
                                <img src={iconClock} alt="icon_clock" />
                                <p className={styles.name_info_item}>Duration</p>
                            </div>
                            <p className={styles.text_info_item}>4 hour</p>
                        </div>
                        <div className={styles.course_info_item}>
                            <div className={styles.header_info_item}>
                                <img src={iconPlay} alt="icon_play" />
                                <p className={styles.name_info_item}>Lectures</p>
                            </div>
                            <p className={styles.text_info_item}>Vo Hanh Quyen</p>
                        </div>
                        <div className={styles.course_info_item}>
                            <div className={styles.header_info_item}>
                                <img src={iconSubject} alt="icon_subject" />
                                <p className={styles.name_info_item}>Subject</p>
                            </div>
                            <p className={styles.text_info_item}>Pronounciation</p>
                        </div>
                        <div className={styles.course_info_item}>
                            <div className={styles.header_info_item}>
                                <img src={iconLanguage} alt="icon_language" />
                                <p className={styles.name_info_item}>Language</p>
                            </div>
                            <p className={styles.text_info_item}>Beginner</p>
                        </div>
                    </div>
                    <div className={styles.material}>
                        <p className={styles.title_material}>Material includes</p>
                        <div className={styles.item_material}>
                            <img src={iconPlay} alt="icon_play" />
                            <p className={styles.text_material}>Video</p>
                        </div>
                        <div className={styles.item_material}>
                            <img src={iconBook} alt="icon_book" />
                            <p className={styles.text_material}>Books</p>
                        </div>
                    </div>
                </div>
                <div className={styles.cart}>
                    <button className={styles.button_cart}>Added To Cart</button>
                    <div className={styles.buy_now}>
                        <button className={styles.button_buy}>Buy Now</button>
                        <img src={buttonHeart} alt="button_heart" />
                    </div>
                </div>
            </div>
            <section className={styles.about_course}>
                <div className={styles.content}>
                    <p className={styles.title_content}>About this Course</p>
                    <p className={styles.paragraph}>
                        In this course, I take you from the fundamentals and concepts of data modeling all the way
                        through a number of best practices and techniques that you’ll need to build data models in your
                        organization. You’ll find many examples that clearly demonstrate the key concepts and techniques
                        covered throughout the course. By the end of the course, you’ll be all set to not only put these
                        principles to work, but also to make the key data modeling and design decisions required by the
                        “art” of data modeling that transcend the nuts-and-bolts techniques and design patterns.
                        Organisations, or groups of organisations, may establish the need for master data management
                        when they hold more than one copy of data about a business entity. Holding more than one copy of
                        this master data inherently means that there is an inefficiency in maintaining a “single version
                        of the truth” across all copies. Unless people, processes and technology are in place to ensure
                        that the data values are kept aligned across all copies, it is almost inevitable that different
                        versions of information about a business entity will be held.
                    </p>
                </div>
                <div className={styles.learn}>
                    <div className={styles.what_learn}>
                        <p className={styles.title_learn}>What you'll learn</p>
                        <div className={styles.target_learns}>
                            <div className={styles.target_learn}>
                                <img src={iconCheck} alt="icon_check" />
                                <p className={styles.text_check}>
                                    Ready to begin working on real-world data modeling projects,
                                </p>
                            </div>
                            <div className={styles.target_learn}>
                                <img src={iconCheck} alt="icon_check" />
                                <p className={styles.text_check}>
                                    Expanded responsibilities as part of an existing role
                                </p>
                            </div>
                            <div className={styles.target_learn}>
                                <img src={iconCheck} alt="icon_check" />
                                <p className={styles.text_check}>Find a new position involving data modeling.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.skills}>
                        <p className={styles.title_learn}>Skills include</p>
                        <div className={styles.skill_include}>
                            <div className={styles.skill}>
                                <img src={iconSpeakingSkill} alt="icon_speaking_skills" />
                                <p className={styles.text_check}>Speaking Skills</p>
                            </div>
                            <div className={styles.skill}>
                                <img src={iconListeningSkill} alt="icon_listening_skill" />
                                <p className={styles.text_check}>Listening Skills</p>
                            </div>
                            <div className={styles.skill}>
                                <img src={iconWritingSkill} alt="icon_writing_skill" />
                                <p className={styles.text_check}>Writing Skills</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.curriculum_of_course}>
                    <div className={styles.curriculum_of_course_panel}>
                        <p className={styles.curriculum_of_course_name}>Introduction and Plugins</p>
                        <img src={iconExpand} alt="icon_expand" />
                    </div>
                    <div className={styles.curriculum_of_course_lesson_item}>
                        <div className={styles.curriculum_of_course_icon_link}>
                            <img src={iconVideo} alt="icon_video" />
                            <p className={styles.curriculum_of_course_lesson_name}>Learning Objectives</p>
                        </div>
                        <div className={styles.curriculum_of_course_time}>
                            <div className={styles.preview}>
                                <p className={styles.text_preview}>Preview</p>
                            </div>
                            <p className={styles.time}>13:27</p>
                        </div>
                    </div>
                    <div className={styles.curriculum_of_course_lesson_item}>
                        <div className={styles.curriculum_of_course_icon_link}>
                            <img src={iconVideo} alt="icon_video" />
                            <p className={styles.curriculum_of_course_lesson_name}>Learning Objectives</p>
                        </div>
                        <div className={styles.curriculum_of_course_time}>
                            <p className={styles.time}>13:27</p>
                        </div>
                    </div>
                    <div className={styles.curriculum_of_course_panel}>
                        <p className={styles.curriculum_of_course_name}>Pronunciation</p>
                        <img src={iconExpand} alt="icon_expand" />
                    </div>
                    <div className={styles.curriculum_of_course_lesson_item}>
                        <div className={styles.curriculum_of_course_icon_link}>
                            <img src={iconVideo} alt="icon_video" />
                            <p className={styles.curriculum_of_course_lesson_name}>Learning Objectives</p>
                        </div>
                        <div className={styles.curriculum_of_course_time}>
                            <p className={styles.time}>13:27</p>
                        </div>
                    </div>
                    <div className={styles.curriculum_of_course_lesson_item}>
                        <div className={styles.curriculum_of_course_icon_link}>
                            <img src={iconVideo} alt="icon_video" />
                            <p className={styles.curriculum_of_course_lesson_name}>Learning Objectives</p>
                        </div>
                        <div className={styles.curriculum_of_course_time}>
                            <p className={styles.time}>13:27</p>
                        </div>
                    </div>
                    <div className={styles.curriculum_of_course_lesson_item}>
                        <div className={styles.curriculum_of_course_icon_link}>
                            <img src={iconVideo} alt="icon_video" />
                            <p className={styles.curriculum_of_course_lesson_name}>Learning Objectives</p>
                        </div>
                        <div className={styles.curriculum_of_course_time}>
                            <p className={styles.time}>13:27</p>
                        </div>
                    </div>
                    <div className={styles.curriculum_of_course_lesson_item}>
                        <div className={styles.curriculum_of_course_icon_link}>
                            <img src={iconTest} alt="icon_test" />
                            <p className={styles.curriculum_of_course_lesson_name}>Learning Objectives</p>
                        </div>
                        <div className={styles.curriculum_of_course_time}>
                            <p className={styles.time}>13:27</p>
                        </div>
                    </div>
                    <div className={styles.curriculum_of_course_panel}>
                        <p className={styles.curriculum_of_course_name}>Grammar</p>
                        <img src={iconExpand} alt="icon_expand" />
                    </div>
                    <div className={styles.curriculum_of_course_lesson_item}>
                        <div className={styles.curriculum_of_course_icon_link}>
                            <img src={iconVideo} alt="icon_video" />
                            <p className={styles.curriculum_of_course_lesson_name}>Learning Objectives</p>
                        </div>
                        <div className={styles.curriculum_of_course_time}>
                            <p className={styles.time}>13:27</p>
                        </div>
                    </div>
                    <div className={styles.curriculum_of_course_lesson_item}>
                        <div className={styles.curriculum_of_course_icon_link}>
                            <img src={iconVideo} alt="icon_video" />
                            <p className={styles.curriculum_of_course_lesson_name}>Learning Objectives</p>
                        </div>
                        <div className={styles.curriculum_of_course_time}>
                            <p className={styles.time}>13:27</p>
                        </div>
                    </div>
                    <div className={styles.curriculum_of_course_lesson_item}>
                        <div className={styles.curriculum_of_course_icon_link}>
                            <img src={iconVideo} alt="icon_video" />
                            <p className={styles.curriculum_of_course_lesson_name}>Learning Objectives</p>
                        </div>
                        <div className={styles.curriculum_of_course_time}>
                            <p className={styles.time}>13:27</p>
                        </div>
                    </div>
                    <div className={styles.curriculum_of_course_lesson_item}>
                        <div className={styles.curriculum_of_course_icon_link}>
                            <img src={iconTest} alt="icon_test" />
                            <p className={styles.curriculum_of_course_lesson_name}>Learning Objectives</p>
                        </div>
                        <div className={styles.curriculum_of_course_time}>
                            <p className={styles.time}>13:27</p>
                        </div>
                    </div>
                    <div className={styles.curriculum_of_course_panel}>
                        <p className={styles.curriculum_of_course_name}>Vocabulary</p>
                        <img src={iconExpand} alt="icon_expand" />
                    </div>
                    <div className={styles.curriculum_of_course_lesson_item}>
                        <div className={styles.curriculum_of_course_icon_link}>
                            <img src={iconVideo} alt="icon_video" />
                            <p className={styles.curriculum_of_course_lesson_name}>Learning Objectives</p>
                        </div>
                        <div className={styles.curriculum_of_course_time}>
                            <p className={styles.time}>13:27</p>
                        </div>
                    </div>
                    <div className={styles.curriculum_of_course_lesson_item}>
                        <div className={styles.curriculum_of_course_icon_link}>
                            <img src={iconVideo} alt="icon_video" />
                            <p className={styles.curriculum_of_course_lesson_name}>Learning Objectives</p>
                        </div>
                        <div className={styles.curriculum_of_course_time}>
                            <p className={styles.time}>13:27</p>
                        </div>
                    </div>
                    <div className={styles.curriculum_of_course_lesson_item}>
                        <div className={styles.curriculum_of_course_icon_link}>
                            <img src={iconVideo} alt="icon_video" />
                            <p className={styles.curriculum_of_course_lesson_name}>Learning Objectives</p>
                        </div>
                        <div className={styles.curriculum_of_course_time}>
                            <p className={styles.time}>13:27</p>
                        </div>
                    </div>
                    <div className={styles.curriculum_of_course_lesson_item}>
                        <div className={styles.curriculum_of_course_icon_link}>
                            <img src={iconTest} alt="icon_test" />
                            <p className={styles.curriculum_of_course_lesson_name}>Learning Objectives</p>
                        </div>
                        <div className={styles.curriculum_of_course_time}>
                            <p className={styles.time}>13:27</p>
                        </div>
                    </div>
                </div>
                <div className={styles.instructor}>
                    <p className={styles.instructor_title}>Instructor</p>
                    <div className={styles.instructor_mentor}>
                        <div className={styles.mentor_info}>
                            <img src={avtMentor} alt="avt_mentor" />
                            <div className={styles.info_mentor}>
                                <p className={styles.mentor_name}>Vo Hanh Quyen</p>
                                <p className={styles.mentor_position}>Head of Levion Traning</p>
                            </div>
                        </div>
                        <p className={styles.experience_mentor}>
                            Jose Marcial Portilla has a BS and MS in Mechanical Engineering from Santa Clara University
                            and years of experience as a professional instructor and trainer for Data Science, Machine
                            Learning and Python Programming. He has publications and patents in various fields such as
                            microfluidics, materials science, and data science. Over the course of his career he has
                            developed a skill set in analyzing data and he hopes to use his experience in teaching and
                            data science to help other people learn the power of programming, the ability to analyze
                            data, and the skills needed to present the data in clear and beautiful visualizations.
                            Currently he works as the Head of Data Science for Pierian Training and provides in-person
                            data science and python programming training courses to employees working at top companies,
                            including General Electric, Cigna, The New York Times, Credit Suisse, McKinsey and many
                            more.
                        </p>
                    </div>
                </div>
                <div className={styles.feedback}>
                    <p className={styles.feedback_heading}>Student Feedback</p>
                    <div className={styles.feedback_detail_row}>
                        <div className={styles.feedback_detail}>
                            <div className={styles.feedback_student}>
                                <img src={avtStudent1} alt="avt_student" />
                                <div className={styles.info_student}>
                                    <p className={styles.name_student}>Nguyễn Đỗ Sơn Tùng</p>
                                    <p className={styles.time_feedback}>1 week ago</p>
                                    <div className={styles.feedback_star}>
                                        <img src={iconStarFeedback} alt="star" />
                                        <img src={iconStarFeedback} alt="star" />
                                        <img src={iconStarFeedback} alt="star" />
                                        <img src={iconStarFeedback} alt="star" />
                                        <img src={iconStarFeedback} alt="star" />
                                    </div>
                                </div>
                            </div>
                            <p className={styles.feedback_body}>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                                consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                        <div className={styles.feedback_detail}>
                            <div className={styles.feedback_student}>
                                <img src={avtStudent2} alt="avt_student" />
                                <div className={styles.info_student}>
                                    <p className={styles.name_student}>Nguyễn Đỗ Sơn Tùng</p>
                                    <p className={styles.time_feedback}>1 week ago</p>
                                    <div className={styles.feedback_star}>
                                        <img src={iconStarFeedback} alt="star" />
                                        <img src={iconStarFeedback} alt="star" />
                                        <img src={iconStarFeedback} alt="star" />
                                        <img src={iconStarFeedback} alt="star" />
                                        <img src={iconStarFeedback} alt="star" />
                                    </div>
                                </div>
                            </div>
                            <p className={styles.feedback_body}>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                                consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                        <div className={styles.feedback_detail}>
                            <div className={styles.feedback_student}>
                                <img src={avtStudent3} alt="avt_student" />
                                <div className={styles.info_student}>
                                    <p className={styles.name_student}>Nguyễn Đỗ Sơn Tùng</p>
                                    <p className={styles.time_feedback}>1 week ago</p>
                                    <div className={styles.feedback_star}>
                                        <img src={iconStarFeedback} alt="star" />
                                        <img src={iconStarFeedback} alt="star" />
                                        <img src={iconStarFeedback} alt="star" />
                                        <img src={iconStarFeedback} alt="star" />
                                        <img src={iconStarFeedback} alt="star" />
                                    </div>
                                </div>
                            </div>
                            <p className={styles.feedback_body}>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                                consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                        <div className={styles.feedback_detail}>
                            <div className={styles.feedback_student}>
                                <img src={avtStudent4} alt="avt_student" />
                                <div className={styles.info_student}>
                                    <p className={styles.name_student}>Nguyễn Đỗ Sơn Tùng</p>
                                    <p className={styles.time_feedback}>1 week ago</p>
                                    <div className={styles.feedback_star}>
                                        <img src={iconStarFeedback} alt="star" />
                                        <img src={iconStarFeedback} alt="star" />
                                        <img src={iconStarFeedback} alt="star" />
                                        <img src={iconStarFeedback} alt="star" />
                                        <img src={iconStarFeedback} alt="star" />
                                    </div>
                                </div>
                            </div>
                            <p className={styles.feedback_body}>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                                consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                        <div className={styles.feedback_detail}>
                            <div className={styles.feedback_student}>
                                <img src={avtStudent5} alt="avt_student" />
                                <div className={styles.info_student}>
                                    <p className={styles.name_student}>Nguyễn Đỗ Sơn Tùng</p>
                                    <p className={styles.time_feedback}>1 week ago</p>
                                    <div className={styles.feedback_star}>
                                        <img src={iconStarFeedback} alt="star" />
                                        <img src={iconStarFeedback} alt="star" />
                                        <img src={iconStarFeedback} alt="star" />
                                        <img src={iconStarFeedback} alt="star" />
                                        <img src={iconStarFeedback} alt="star" />
                                    </div>
                                </div>
                            </div>
                            <p className={styles.feedback_body}>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                                consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CourseDetail;
