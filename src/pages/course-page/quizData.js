// import imgQuiz1 from '../../assets/images/imgQuiz1.svg';
// import imgQuiz2 from '../../assets/images/imgQuiz2.svg';
// import imgQuiz3 from '../../assets/images/imgQuiz3.svg';

const questionsData = [
    {
        id: 1,
        // img: imgQuiz1,
        question: 'Look at the picture and choose the correct answer: “Chào...”',
        answers: {
            answer_a: 'Chào anh',
            answer_b: 'Chào ông',
            answer_c: 'Quả táo nuột thế',
            answer_d: 'I don’t know',
        },
        correct_answers: {
            answer_a_correct: 'false',
            answer_b_correct: 'false',
            answer_c_correct: 'false',
            answer_d_correct: 'true',
        },
    },
    {
        id: 2,
        // img: imgQuiz2,
        question: 'What is this country?',
        answers: {
            answer_a: 'Mỹ',
            answer_b: 'Hàn Quốc',
            answer_c: 'Trung Quốc',
            answer_d: 'Việt Nam',
        },
        correct_answers: {
            answer_a_correct: 'false',
            answer_b_correct: 'false',
            answer_c_correct: 'false',
            answer_d_correct: 'true',
        },
    },
    {
        id: 3,
        img: null,
        question: 'How do you say “I am a doctor” in Vietnamese?',
        answers: {
            answer_a: 'Tôi là cô giáo',
            answer_b: 'Chị là y tá',
            answer_c: 'Anh là bác sĩ',
            answer_d: 'Bà là luật sư',
        },
        correct_answers: {
            answer_a_correct: 'false',
            answer_b_correct: 'false',
            answer_c_correct: 'false',
            answer_d_correct: 'true',
        },
    },
    {
        id: 4,
        // img: imgQuiz3,
        question: 'Look at the picture and choose the correct answer: “"What are they doing?"',
        answers: {
            answer_a: 'Họ đang đọc sách',
            answer_b: 'Họ đang nghe nhạc',
            answer_c: 'Họ đang xem tivi',
            answer_d: 'Họ đang học tiếng Việt',
        },
        correct_answers: {
            answer_a_correct: 'false',
            answer_b_correct: 'false',
            answer_c_correct: 'false',
            answer_d_correct: 'true',
        },
    },
    {
        id: 5,
        img: null,
        question: 'How do you say “What is this?” in Vietnamese?',
        answers: {
            answer_a: 'Đấy là cái gì?',
            answer_b: 'Đó là cái gì?',
            answer_c: 'Đây là con gì?',
            answer_d: 'Kia là con gì?',
        },
        correct_answers: {
            answer_a_correct: 'false',
            answer_b_correct: 'false',
            answer_c_correct: 'false',
            answer_d_correct: 'true',
        },
    },
    {
        id: 6,
        img: null,
        question: 'Fill in the blanks:  ________sách này có 30 __________ giấy.',
        answers: {
            answer_a: 'Quyển / Cái',
            answer_b: 'Quyển / Tờ',
            answer_c: 'Con / Bức',
            answer_d: 'Quyển / Bức',
        },
        correct_answers: {
            answer_a_correct: 'false',
            answer_b_correct: 'false',
            answer_c_correct: 'false',
            answer_d_correct: 'true',
        },
    },
];

export default questionsData;
