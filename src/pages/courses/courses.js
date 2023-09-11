import styles from './courses.module.css';
import bannerListCourse from '../../assets/images/bannerListCourse.png';
import iconSearch from '../../assets/icons/iconSearch.png';
import imgPreviewListCourse from '../../assets/images/imgPreviewListCourse.png';
import iconHeart from '../../assets/icons/iconHeart.png';
import iconArrowLeft from '../../assets/icons/iconArrowLeft.png';
import iconArrowRight from '../../assets/icons/iconArrowRight.png';
import iconFilter from '../../assets/icons/iconFilter.png';

import useLogicCourses from './useLogicCourses';
import { Link } from 'react-router-dom';

function Courses() {
    const {
        searchTerm,
        handleLevelChange,
        handleSearch,
        levels,
        selected,
        skills,
        handleSkillChange,
        currentItems,
        currentPage,
        handlePageChange,
        totalPages,
        handleAddToCart,
        handleClicked,
        isClicked,
    } = useLogicCourses();

    return (
        <div className={styles.courses}>
            <section className={styles.introduce_courses}>
                <div className={styles.introduce}>
                    <p className={styles.title}>Courses</p>
                    <p className={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus risus non venenatis dolor nisl
                        tellus habitant aliquam. Dignissim tellus, eu eu sed malesuada pharetra aliquam eu.Dignissim
                        tellus, Tellus elementum enim faucibus morbi enim fusce:
                    </p>
                </div>
                <img src={bannerListCourse} alt="image_course" className={styles.image_course} />
            </section>
            <section className={styles.course_list}>
                <div className={styles.wrapper_category}>
                    <div className={styles.category}>
                        <div type="search" className={styles.box_search}>
                            <div className={styles.search_bar}>
                                <img src={iconSearch} alt="icon_search" />
                                <input
                                    type="search"
                                    placeholder="Search Courses"
                                    className={styles.button_search}
                                    value={searchTerm}
                                    onChange={handleSearch}
                                />
                            </div>
                        </div>
                        <div className={styles.filter_levels}>
                            <p className={styles.title_filter}>Levels</p>
                            <div className={styles.filter}>
                                {Array.from(levels).map((level) => (
                                    <div className={styles.item} key={level}>
                                        <input
                                            type="checkbox"
                                            className={styles.checkbox}
                                            value="All Levels"
                                            checked={selected.level.includes(level)}
                                            onChange={() => handleLevelChange(level)}
                                        />
                                        <label className={styles.label}>{level}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.filter_levels}>
                            <p className={styles.title_filter}>Skills</p>
                            <div className={styles.filter}>
                                {Array.from(skills).map((skill) => {
                                    return (
                                        <div className={styles.item} key={skill}>
                                            <input
                                                type="checkbox"
                                                className={styles.checkbox}
                                                value="All Skills"
                                                checked={selected.skill.includes(skill)}
                                                onChange={() => handleSkillChange(skill)}
                                            />
                                            <label className={styles.label}>{skill}</label>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <img
                            src={iconFilter}
                            alt="icon_filter"
                            className={styles.icon_filter}
                            onClick={handleClicked}
                        />
                    </div>
                    <div className={styles.filter_hidden}>
                        {isClicked && (
                            <div className={styles.filter_hidden_items}>
                                <div className={styles.filter_hidden_item}>
                                    <p className={styles.title_filter}>Levels</p>
                                    <div className={styles.filter}>
                                        {Array.from(levels).map((level) => (
                                            <div className={styles.item} key={level}>
                                                <input
                                                    type="checkbox"
                                                    className={styles.checkbox}
                                                    value="All Levels"
                                                    checked={selected.level.includes(level)}
                                                    onChange={() => handleLevelChange(level)}
                                                />
                                                <label className={styles.label}>{level}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className={styles.filter_hidden_item}>
                                    <p className={styles.title_filter}>Skills</p>
                                    <div className={styles.filter}>
                                        {Array.from(skills).map((skill) => {
                                            return (
                                                <div className={styles.item} key={skill}>
                                                    <input
                                                        type="checkbox"
                                                        className={styles.checkbox}
                                                        value="All Skills"
                                                        checked={selected.skill.includes(skill)}
                                                        onChange={() => handleSkillChange(skill)}
                                                    />
                                                    <label className={styles.label}>{skill}</label>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className={styles.box_list}>
                    <div className={styles.list}>
                        <div className={styles.cards}>
                            {currentItems.map((course) => {
                                return (
                                    <Link to={'/course_detail'} className={styles.card} key={course.id}>
                                        <img
                                            src={imgPreviewListCourse}
                                            alt="image_card"
                                            className={styles.img_preview_list_course}
                                        />
                                        <div className={styles.course}>
                                            <div className={styles.info_course}>
                                                <div className={styles.info_filter}>
                                                    <div className={styles.levels}>{course.level}</div>
                                                    <div className={styles.levels}>{course.skill}</div>
                                                </div>
                                                <p className={styles.name_course}>{course.name}</p>
                                                <p className={styles.price_course}>${course.price}</p>
                                            </div>
                                            <div className={styles.add}>
                                                <button
                                                    className={styles.add_to_cart}
                                                    onClick={() => handleAddToCart(course)}
                                                >
                                                    Add To Cart
                                                </button>
                                                <img src={iconHeart} alt="icon_heart" />
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                    <div className={styles.pagination}>
                        {currentPage > 1 && (
                            <div className={styles.arrow_back}>
                                <img
                                    src={iconArrowLeft}
                                    alt="arrow_back"
                                    onClick={() => handlePageChange(currentPage - 1)}
                                />
                            </div>
                        )}

                        {Array.from(Array(totalPages), (e, i) => {
                            const pageNumber = i + 1;
                            return (
                                <div
                                    className={`${styles.page} ${pageNumber === currentPage && styles.active}`}
                                    key={pageNumber}
                                    onClick={() => handlePageChange(pageNumber)}
                                >
                                    {pageNumber}
                                </div>
                            );
                        })}
                        {currentPage < totalPages && (
                            <div className={styles.arrow_back}>
                                <img
                                    src={iconArrowRight}
                                    alt="arrow_back"
                                    onClick={() => handlePageChange(currentPage + 1)}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Courses;
