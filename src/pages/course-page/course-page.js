import styles from './course-page.module.css';
import questionsData from './quizData';
import lessonData from './lessonData';

import logo from '../../assets/images/logo.svg';
import circleProgressBar from '../../assets/images/circleProgressBar.svg';
import avt from '../../assets/images/avt.svg';
import avtAsk from '../../assets/images/avtAsk.svg';

import trackIcon from '../../assets/icons/trackIcons.svg';
import tickIcon from '../../assets/icons/tickIcon.svg';
import stepItemLessonIcon from '../../assets/icons/stepItemLessonIcon.svg';
import iconDownload from '../../assets/icons/iconDownload.svg';
import iconNavVideos from '../../assets/icons/iconNavVideos.svg';
import iconNavQuiz from '../../assets/icons/iconNavQuiz.svg';
import iconSearch from '../../assets/icons/iconSearch.svg';
import iconArrowDown from '../../assets/icons/iconArrowDown.svg';
import iconComment from '../../assets/icons/iconComment.svg';
import iconExercise from '../../assets/icons/iconExercise.svg';
import iconFile from '../../assets/icons/iconFile.svg';
import iconEdit from '../../assets/icons/iconEdit.svg';
import iconDelete from '../../assets/icons/iconDelete.svg';
import iconMenu from '../../assets/icons/iconMenu.svg';

import { useEffect, useState } from 'react';
import axios from 'axios';

function CoursePage() {
    const [activeNavMarkdown, setActiveNavMarkdown] = useState('Transcript');
    const [activeNav, setActiveNav] = useState('Videos');
    const [questions, setQuestions] = useState(questionsData);
    const [submitted, setSubmitted] = useState(false);
    const [clickMenu, setClickMenu] = useState(true);
    const [isOpen, setIsOpen] = useState([]);
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [correctPercent, setCorrectPercent] = useState(0);

    const handleClickNavMarkdown = (nav) => {
        setActiveNavMarkdown(nav);
    };

    const handleClickNav = (nav) => {
        setActiveNav(nav);
    };

    const handleAnswer = (questionId, selectedAnswer) => {
        const updatedQuestions = questions.map((question) => {
            if (question.id === questionId) {
                return {
                    ...question,
                    selectedAnswer,
                };
            }
            return question;
        });

        setQuestions(updatedQuestions);
    };

    const handleSubmit = () => {
        setSubmitted(true);
        const count = questions.reduce((total, question) => {
            const selectedAnswer = question.selectedAnswer;
            const correctAnswer = questionsData.find((quiz) => quiz.id === question.id).correct_answers[
                `answer_${selectedAnswer}_correct`
            ];
            if (selectedAnswer && correctAnswer === 'true') {
                return total + 1;
            }
            return total;
        }, 0);
        setCorrectPercent(count);
    };

    const checkAnswer = (questionId) => {
        const selectedAnswer = questions.find((question) => question.id === questionId)?.selectedAnswer;
        return (
            selectedAnswer &&
            questionsData.find((question) => question.id === questionId).correct_answers[
                `answer_${selectedAnswer}_correct`
            ] === 'true'
        );
    };

    const calculatePercentage = () => {
        if (submitted) {
            return Math.round((correctPercent / questionsData.length) * 100);
        }
        return 0;
    };

    const handleClickMenu = () => {
        setClickMenu(!clickMenu);
    };

    const toggleDropdown = (sectionId) => {
        if (isOpen.includes(sectionId)) {
            setIsOpen(isOpen.filter((id) => id !== sectionId));
        } else {
            setIsOpen([...isOpen, sectionId]);
        }
    };
    const handleLessionClick = (lesson) => {
        setSelectedLesson(lesson);
    };

    const handleDownload = async (lesson) => {
        try {
            const res = await axios({
                url: lesson.video,
                method: 'GET',
                responseType: 'blob',
            });
            const url = URL.createObjectURL(res.data);
            const a = document.createElement('a');

            a.href = url;
            a.download = `${lesson.name}.mp4`;
            a.click();

            URL.revokeObjectURL(URL);
        } catch (error) {
            console.error('Error downloading video:', error);
        }
    };

    useEffect(() => {
        if (lessonData.length > 0) {
            setSelectedLesson(lessonData[0].lesson.lesson_1);
        }
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.wrapper_logo_course_title}>
                    <img src={logo} alt="logo" className={styles.logo} />
                    <img src={iconMenu} alt="icon_menu" className={styles.icon_menu} onClick={handleClickMenu} />
                    <div className={styles.line}></div>
                    <p className={styles.course_title}>Course 1: Master Your Pronunciation</p>
                </div>
                <div className={styles.wrapper_progress_bar_avt}>
                    <div className={styles.progress_bar}>
                        <img src={circleProgressBar} alt="circle_progress_bar" />
                        <p className={styles.completed_msg}>Course Progress</p>
                    </div>
                    <img src={avt} alt="avt" />
                </div>
            </div>
            <div className={styles.tracks_content_wrapper}>
                <div className={styles.tracks_wrapper}>
                    {lessonData.map((section) => (
                        <div>
                            <div className={styles.track_item_wrapper} key={section.id}>
                                <div className={styles.track_item_title_desc}>
                                    <p className={styles.track_item_title}>
                                        Section {section.id}: {section.section}
                                    </p>
                                    <p className={styles.desc_wrapper}>0/7 | {section.desc}</p>
                                </div>
                                <img src={trackIcon} alt="track_icon" onClick={() => toggleDropdown(section.id)} />
                            </div>
                            {isOpen.includes(section.id) && (
                                <div>
                                    {Object.values(section.lesson).map((lesson, index) => (
                                        <div className={styles.track_item_step_list} key={index}>
                                            <img src={tickIcon} alt="tick_icon" />
                                            <div className={styles.step_item_title_desc_wrapper}>
                                                <p
                                                    className={styles.step_item_title}
                                                    onClick={() => handleLessionClick(lesson)}
                                                >
                                                    {lesson.name}
                                                </p>
                                                <div className={styles.step_item_desc_download_wrapper}>
                                                    <div className={styles.step_item_desc}>
                                                        <img src={stepItemLessonIcon} alt="step_item_lesson_icon" />
                                                        <p className={styles.step_item_desc_duration}>{lesson.desc}</p>
                                                    </div>
                                                    <button
                                                        className={styles.button_download}
                                                        onClick={() => handleDownload(lesson)}
                                                    >
                                                        <img src={iconDownload} alt="icon_download" />
                                                        Download
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                {clickMenu && (
                    <div className={styles.tracks_wrapper_hidden}>
                        {lessonData.map((section) => (
                            <div>
                                <div className={styles.track_item_wrapper} key={section.id}>
                                    <div className={styles.track_item_title_desc}>
                                        <p className={styles.track_item_title}>
                                            Section {section.id}: {section.section}
                                        </p>
                                        <p className={styles.desc_wrapper}>0/7 | {section.desc}</p>
                                    </div>
                                    <img src={trackIcon} alt="track_icon" onClick={() => toggleDropdown(section.id)} />
                                </div>
                                {isOpen.includes(section.id) && (
                                    <div>
                                        {Object.values(section.lesson).map((lesson, index) => (
                                            <div className={styles.track_item_step_list} key={index}>
                                                <img src={tickIcon} alt="tick_icon" />
                                                <div className={styles.step_item_title_desc_wrapper}>
                                                    <p
                                                        className={styles.step_item_title}
                                                        onClick={() => handleLessionClick(lesson)}
                                                    >
                                                        {lesson.name}
                                                    </p>
                                                    <div className={styles.step_item_desc_download_wrapper}>
                                                        <div className={styles.step_item_desc}>
                                                            <img src={stepItemLessonIcon} alt="step_item_lesson_icon" />
                                                            <p className={styles.step_item_desc_duration}>
                                                                {lesson.desc}
                                                            </p>
                                                        </div>
                                                        <button
                                                            className={styles.button_download}
                                                            onClick={() => handleDownload(lesson)}
                                                        >
                                                            <img src={iconDownload} alt="icon_download" />
                                                            Download
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
                <div className={styles.content_wrapper}>
                    <p className={styles.heading}>Lession 1: Xin chào, cảm ơn / Hello, Thank kiu</p>
                    <div className={styles.nav_video_wrapper}>
                        <div className={styles.nav_wrapper}>
                            <div className={styles.nav}>
                                <div
                                    className={activeNav === 'Videos' ? styles.nav_active : styles.nav_blur}
                                    onClick={() => handleClickNav('Videos')}
                                >
                                    <img src={iconNavVideos} alt="icon_nav_videos" />
                                    <p className={styles.text_nav}>Videos</p>
                                </div>
                                <div
                                    className={activeNav === 'Quiz' ? styles.nav_active : styles.nav_blur}
                                    onClick={() => handleClickNav('Quiz')}
                                >
                                    <img src={iconNavQuiz} alt="icon_nav_quiz" />
                                    <p className={styles.text_nav}>Exercise/Quiz</p>
                                </div>
                            </div>
                            <div className={styles.line_nav}></div>
                        </div>
                        {activeNav === 'Videos' && selectedLesson && (
                            <div>
                                <iframe
                                    width="100%"
                                    height="618"
                                    src={selectedLesson.video}
                                    title="2-HOUR STUDY WITH ME / \uD83C\uDFB9 Calm Piano / Working Day / Pomodoro 45-15"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    className={styles.video}
                                />
                            </div>
                        )}
                        {activeNav === 'Quiz' && (
                            <div className={styles.progress_quiz_wrapper}>
                                <div className={styles.progress_wrapper}>
                                    <p className={styles.text_progress_quiz}>
                                        {submitted && <div>{`${calculatePercentage()}% Completed`}</div>}
                                    </p>
                                    <svg
                                        width="100%"
                                        height="20"
                                        viewBox="0 0 1040 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect width="100%" height="20" rx="10" fill="#D7BFFF" />
                                        <rect
                                            x="3.71484"
                                            y="4"
                                            width={`${calculatePercentage()}%`}
                                            height="12"
                                            rx="6"
                                            fill="#9453FF"
                                        />
                                    </svg>
                                </div>
                                <div className={styles.quizzes_wrapper}>
                                    {questions.map((question) => (
                                        <div className={styles.quiz_wrapper} key={question.id}>
                                            <div className={question.img === null ? styles.img_quiz_hidden : ''}>
                                                <img src={question.img} alt="img_quiz_1" className={styles.img_quiz} />
                                            </div>
                                            <div className={styles.quiz_question_wrapper}>
                                                <div>
                                                    <p className={styles.number_question}>{question.id}</p>
                                                </div>
                                                <p className={styles.title_quiz}>{question.question}</p>
                                            </div>
                                            <div className={styles.quiz_answer_wrapper}>
                                                {Object.keys(question.answers).map((answerKey) => (
                                                    <div className={styles.radio_wrapper} key={answerKey}>
                                                        <input
                                                            type="radio"
                                                            name={`question-${question.id}`}
                                                            value={answerKey.split('_')[1]}
                                                            onChange={() =>
                                                                handleAnswer(question.id, answerKey.split('_')[1])
                                                            }
                                                            disabled={submitted}
                                                            className={styles.radio}
                                                        />
                                                        <p
                                                            className={
                                                                question.selectedAnswer === answerKey
                                                                    ? styles.label_radio_active
                                                                    : styles.label_radio
                                                            }
                                                        >
                                                            {question.answers[answerKey]}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                            {submitted && <p>{checkAnswer(question.id) ? 'Correct' : 'Incorrect'}!</p>}
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <button
                                        className={styles.button_submit_quiz}
                                        onClick={handleSubmit}
                                        disabled={submitted}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                    {activeNav === 'Videos' && (
                        <div className={styles.markdown_parser_wrapper}>
                            <div>
                                <div className={styles.nav_markdown_parser}>
                                    <p
                                        className={
                                            activeNavMarkdown === 'Transcript'
                                                ? styles.text_nav_markdown_parser_active
                                                : styles.text_nav_markdown_parser
                                        }
                                        onClick={() => handleClickNavMarkdown('Transcript')}
                                    >
                                        Transcript
                                    </p>
                                    <p
                                        className={
                                            activeNavMarkdown === 'Q&A'
                                                ? styles.text_nav_markdown_parser_active
                                                : styles.text_nav_markdown_parser
                                        }
                                        onClick={() => handleClickNavMarkdown('Q&A')}
                                    >
                                        Q&A
                                    </p>
                                    <p
                                        className={
                                            activeNavMarkdown === 'Note'
                                                ? styles.text_nav_markdown_parser_active
                                                : styles.text_nav_markdown_parser
                                        }
                                        onClick={() => handleClickNavMarkdown('Note')}
                                    >
                                        Note
                                    </p>
                                    <p
                                        className={
                                            activeNavMarkdown === 'Download'
                                                ? styles.text_nav_markdown_parser_active
                                                : styles.text_nav_markdown_parser
                                        }
                                        onClick={() => handleClickNavMarkdown('Download')}
                                    >
                                        Download
                                    </p>
                                </div>
                            </div>
                            {activeNavMarkdown === 'Transcript' && (
                                <div className={styles.transcript}>
                                    <p className={styles.paragraph_transcript}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
                                        et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
                                        litora torquent per conubia nostra, per inceptos himenaeos.
                                    </p>
                                    <p className={styles.paragraph_transcript}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
                                        et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
                                        litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus
                                        urna at turpis condimentum lobortis. Ut commodo efficitur neque.
                                    </p>
                                    <p className={styles.paragraph_transcript_outstanding}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
                                        molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla
                                        accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
                                        Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti
                                        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent
                                        auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
                                        ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
                                        Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                                    </p>
                                    <p className={styles.paragraph_transcript}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
                                        et velit interdum, ac aliquet odio mattis.
                                    </p>
                                    <p className={styles.paragraph_transcript}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
                                        et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
                                        litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus
                                        urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam,
                                        semper iaculis condimentum ac, vestibulum eu nisl.
                                    </p>
                                    <p className={styles.paragraph_transcript}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
                                        et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
                                        litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus
                                        urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam,
                                        semper iaculis condimentum ac, vestibulum eu nisl.
                                    </p>
                                    <p className={styles.paragraph_transcript}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
                                        et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
                                        litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus
                                        urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam,
                                        semper iaculis condimentum ac, vestibulum eu nisl.
                                    </p>
                                    <p className={styles.paragraph_transcript}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
                                        et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
                                        litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus
                                        urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam,
                                        semper iaculis condimentum ac, vestibulum eu nisl.
                                    </p>
                                </div>
                            )}
                            {activeNavMarkdown === 'Q&A' && (
                                <div className={styles.inner_question}>
                                    <div className={styles.search_dropdown_wrapper}>
                                        <div className={styles.search_wrapper}>
                                            <img src={iconSearch} alt="icon_search" />
                                            <input
                                                type="search"
                                                placeholder="Search Here"
                                                className={styles.input_search}
                                            />
                                        </div>
                                        <div className={styles.dropdown}>
                                            <p className={styles.text_dropdown}>All Lectures</p>
                                            <img src={iconArrowDown} alt="icon_arrow_down" />
                                        </div>
                                    </div>
                                    <div className={styles.question_wrapper}>
                                        <div className={styles.input_question_wrapper}>
                                            <div className={styles.input_label_wrapper}>
                                                <p className={styles.label}>Your Question</p>
                                                <input type="text" className={styles.input_question} />
                                            </div>
                                            <div>
                                                <button className={styles.button_ask}>Ask Question</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.questions_wrapper}>
                                        <div className={styles.question_item_wrapper}>
                                            <img src={avtAsk} alt="avt_ask" className={styles.avt_ask} />
                                            <div className={styles.info_question}>
                                                <p className={styles.name_person_ask}>
                                                    Tùng Nguyễn - Lecture 10 - 1 month ago
                                                </p>
                                                <p className={styles.text_question}>
                                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                                                    sint. Velit officia consequat duis enim velit mollit. Exercitation
                                                    veniam consequat sunt nostrud amet.is enim velit mollit.
                                                    Exercitation veniam consequat sunt nostrud amet. is enim velit
                                                    mollit. Exercitation veniam consequat n veniam....
                                                </p>
                                                <div className={styles.comments_wrapper}>
                                                    <img src={iconComment} alt="icon_comment" />
                                                    <p className={styles.count_comment}>168 Comments</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.question_item_wrapper}>
                                            <img src={avtAsk} alt="avt_ask" className={styles.avt_ask} />
                                            <div className={styles.info_question}>
                                                <p className={styles.name_person_ask}>
                                                    Tùng Nguyễn - Lecture 10 - 1 month ago
                                                </p>
                                                <p className={styles.text_question}>
                                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                                                    sint. Velit officia consequat duis enim velit mollit. Exercitation
                                                    veniam consequat sunt nostrud amet.is enim velit mollit.
                                                    Exercitation veniam consequat sunt nostrud amet. is enim velit
                                                    mollit. Exercitation veniam consequat n veniam....
                                                </p>
                                                <div className={styles.comments_wrapper}>
                                                    <img src={iconComment} alt="icon_comment" />
                                                    <p className={styles.count_comment}>168 Comments</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.question_item_wrapper}>
                                            <img src={avtAsk} alt="avt_ask" className={styles.avt_ask} />
                                            <div className={styles.info_question}>
                                                <p className={styles.name_person_ask}>
                                                    Tùng Nguyễn - Lecture 10 - 1 month ago
                                                </p>
                                                <p className={styles.text_question}>
                                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                                                    sint. Velit officia consequat duis enim velit mollit. Exercitation
                                                    veniam consequat sunt nostrud amet.is enim velit mollit.
                                                    Exercitation veniam consequat sunt nostrud amet. is enim velit
                                                    mollit. Exercitation veniam consequat n veniam....
                                                </p>
                                                <div className={styles.comments_wrapper}>
                                                    <img src={iconComment} alt="icon_comment" />
                                                    <p className={styles.count_comment}>168 Comments</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.question_item_wrapper}>
                                            <img src={avtAsk} alt="avt_ask" className={styles.avt_ask} />
                                            <div className={styles.info_question}>
                                                <p className={styles.name_person_ask}>
                                                    Tùng Nguyễn - Lecture 10 - 1 month ago
                                                </p>
                                                <p className={styles.text_question}>
                                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                                                    sint. Velit officia consequat duis enim velit mollit. Exercitation
                                                    veniam consequat sunt nostrud amet.is enim velit mollit.
                                                    Exercitation veniam consequat sunt nostrud amet. is enim velit
                                                    mollit. Exercitation veniam consequat n veniam....
                                                </p>
                                                <div className={styles.comments_wrapper}>
                                                    <img src={iconComment} alt="icon_comment" />
                                                    <p className={styles.count_comment}>168 Comments</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.question_item_wrapper}>
                                            <img src={avtAsk} alt="avt_ask" className={styles.avt_ask} />
                                            <div className={styles.info_question}>
                                                <p className={styles.name_person_ask}>
                                                    Tùng Nguyễn - Lecture 10 - 1 month ago
                                                </p>
                                                <p className={styles.text_question}>
                                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                                                    sint. Velit officia consequat duis enim velit mollit. Exercitation
                                                    veniam consequat sunt nostrud amet.is enim velit mollit.
                                                    Exercitation veniam consequat sunt nostrud amet. is enim velit
                                                    mollit. Exercitation veniam consequat n veniam....
                                                </p>
                                                <div className={styles.comments_wrapper}>
                                                    <img src={iconComment} alt="icon_comment" />
                                                    <p className={styles.count_comment}>168 Comments</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.question_item_wrapper}>
                                            <img src={avtAsk} alt="avt_ask" className={styles.avt_ask} />
                                            <div className={styles.info_question}>
                                                <p className={styles.name_person_ask}>
                                                    Tùng Nguyễn - Lecture 10 - 1 month ago
                                                </p>
                                                <p className={styles.text_question}>
                                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                                                    sint. Velit officia consequat duis enim velit mollit. Exercitation
                                                    veniam consequat sunt nostrud amet.is enim velit mollit.
                                                    Exercitation veniam consequat sunt nostrud amet. is enim velit
                                                    mollit. Exercitation veniam consequat n veniam....
                                                </p>
                                                <div className={styles.comments_wrapper}>
                                                    <img src={iconComment} alt="icon_comment" />
                                                    <p className={styles.count_comment}>168 Comments</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeNavMarkdown === 'Note' && (
                                <div className={styles.note_wrapper}>
                                    <div className={styles.dropdown_download}>
                                        <p className={styles.text_dropdown_download}>All Lectures</p>
                                        <img src={iconArrowDown} alt="icon_arrow_down" />
                                    </div>
                                    <div className={styles.item_note_wrapper}>
                                        <div className={styles.header_item_note}>
                                            <div className={styles.wrapper_item_title}>
                                                <p className={styles.time_item_note}>0:31 - 0:4</p>
                                                <p className={styles.title_item_note}>Section 1: Xin chào, cảm ơn</p>
                                                <p className={styles.text_item_note}>10. Tên Lesson 10</p>
                                            </div>
                                            <div className={styles.wrapper_button_item_note}>
                                                <img src={iconEdit} alt="icon_edit" />
                                                <img src={iconDelete} alt="icon_delete" />
                                            </div>
                                        </div>
                                        <div className={styles.body_item_note}>
                                            <p className={styles.paragraph_item_note}>
                                                Lorem ipsum dolor sit amet consectetur. Sed vitae aenean id scelerisque
                                                fusce proin dignissim eu vulputate. In sit diam sed nec arcu commodo
                                                cursus faucibus. Placerat sed faucibus massa facilisis consectetur sit
                                                elit sagittis enim. Duis vestibulum elementum diam iaculis curabitur
                                                tortor diam parturient. Vitae pellentesque sit mattis quam tortor
                                                ultricies a. Semper pulvinar felis tempus magna lacinia in adipiscing.
                                                Habitant duis sapien quis tortor suspendisse. Feugiat aliquam dictum
                                                augue pellentesque suscipit maecenas sed massa. Cursus malesuada
                                                porttitor nec sit arcu netus tellus. Quis sit laoreet est tortor.
                                                Iaculis in sit mauris proin erat gravida viverra vitae. Augue sed cursus
                                                arcu a pellentesque. Senectus ridiculus velit nulla est volutpat purus
                                                egestas tellus accumsan.
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styles.item_note_wrapper}>
                                        <div className={styles.header_item_note}>
                                            <div className={styles.wrapper_item_title}>
                                                <p className={styles.time_item_note}>0:31 - 0:4</p>
                                                <p className={styles.title_item_note}>Section 1: Xin chào, cảm ơn</p>
                                                <p className={styles.text_item_note}>10. Tên Lesson 10</p>
                                            </div>
                                            <div className={styles.wrapper_button_item_note}>
                                                <img src={iconEdit} alt="icon_edit" />
                                                <img src={iconDelete} alt="icon_delete" />
                                            </div>
                                        </div>
                                        <div className={styles.body_item_note}>
                                            <p className={styles.paragraph_item_note}>
                                                Lorem ipsum dolor sit amet consectetur. Sed vitae aenean id scelerisque
                                                fusce proin dignissim eu vulputate. In sit diam sed nec arcu commodo
                                                cursus faucibus. Placerat sed faucibus massa facilisis consectetur sit
                                                elit sagittis enim. Duis vestibulum elementum diam iaculis curabitur
                                                tortor diam parturient. Vitae pellentesque sit mattis quam tortor
                                                ultricies a. Semper pulvinar felis tempus magna lacinia in adipiscing.
                                                Habitant duis sapien quis tortor suspendisse. Feugiat aliquam dictum
                                                augue pellentesque suscipit maecenas sed massa. Cursus malesuada
                                                porttitor nec sit arcu netus tellus. Quis sit laoreet est tortor.
                                                Iaculis in sit mauris proin erat gravida viverra vitae. Augue sed cursus
                                                arcu a pellentesque. Senectus ridiculus velit nulla est volutpat purus
                                                egestas tellus accumsan.
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styles.item_note_wrapper}>
                                        <div className={styles.header_item_note}>
                                            <div className={styles.wrapper_item_title}>
                                                <p className={styles.time_item_note}>0:31 - 0:4</p>
                                                <p className={styles.title_item_note}>Section 1: Xin chào, cảm ơn</p>
                                                <p className={styles.text_item_note}>10. Tên Lesson 10</p>
                                            </div>
                                            <div className={styles.wrapper_button_item_note}>
                                                <img src={iconEdit} alt="icon_edit" />
                                                <img src={iconDelete} alt="icon_delete" />
                                            </div>
                                        </div>
                                        <div className={styles.body_item_note}>
                                            <p className={styles.paragraph_item_note}>
                                                Lorem ipsum dolor sit amet consectetur. Sed vitae aenean id scelerisque
                                                fusce proin dignissim eu vulputate. In sit diam sed nec arcu commodo
                                                cursus faucibus. Placerat sed faucibus massa facilisis consectetur sit
                                                elit sagittis enim. Duis vestibulum elementum diam iaculis curabitur
                                                tortor diam parturient. Vitae pellentesque sit mattis quam tortor
                                                ultricies a. Semper pulvinar felis tempus magna lacinia in adipiscing.
                                                Habitant duis sapien quis tortor suspendisse. Feugiat aliquam dictum
                                                augue pellentesque suscipit maecenas sed massa. Cursus malesuada
                                                porttitor nec sit arcu netus tellus. Quis sit laoreet est tortor.
                                                Iaculis in sit mauris proin erat gravida viverra vitae. Augue sed cursus
                                                arcu a pellentesque. Senectus ridiculus velit nulla est volutpat purus
                                                egestas tellus accumsan.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeNavMarkdown === 'Download' && (
                                <div className={styles.wrapper_download}>
                                    <div className={styles.dropdown_download}>
                                        <p className={styles.text_dropdown_download}>Current Lectures</p>
                                        <img src={iconArrowDown} alt="icon_arrow_down" />
                                    </div>
                                    <div className={styles.list_download}>
                                        <div className={styles.heading_list_download}>
                                            <p className={styles.title_list_download}>Section 1: Xin chào, cảm ơn</p>
                                            <p className={styles.text_list_download}>10. Tên Lesson 10</p>
                                        </div>
                                        <div className={styles.list_item_download}>
                                            <div className={styles.item_download}>
                                                <img src={iconExercise} alt="icon_exercise" />
                                                <p className={styles.title_list_item}>
                                                    Lorem ipsum dolor sit amet consectetur.
                                                </p>
                                            </div>
                                            <div className={styles.item_download}>
                                                <img src={iconFile} alt="icon_file" />
                                                <p className={styles.title_list_item}>
                                                    Lorem ipsum dolor sit amet consectetur.
                                                </p>
                                            </div>
                                            <div className={styles.item_download}>
                                                <img src={iconExercise} alt="icon_exercise" />
                                                <p className={styles.title_list_item}>
                                                    Lorem ipsum dolor sit amet consectetur.
                                                </p>
                                            </div>
                                            <div className={styles.item_download}>
                                                <img src={iconFile} alt="icon_file" />
                                                <p className={styles.title_list_item}>
                                                    Lorem ipsum dolor sit amet consectetur.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CoursePage;
