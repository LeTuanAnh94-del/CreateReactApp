import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { persistStore } from 'redux-persist';

import courseData from './components/courseData';
import paginate from './components/pagination';
import { addToCart } from '../../ultils/action';
import { store } from '../../ultils/store';

const itemsPerPage = 12;

function useLogicCourses() {
    const [currentPage, setCurrentPage] = useState(1);
    const [isReadyToRender, setIsReadyToRender] = useState(false);
    const [filter, setFilter] = useState({
        search: '',
        level: [],
        skill: [],
    });
    const [pagination, setPagination] = useState({
        currentItems: [],
        totalPages: 0,
    });
    const [isClicked, setIsClicked] = useState(false);

    const { levels, skills } = courseData.reduce(
        (acc, { level, skill }) => ({
            levels: acc.levels.add(level),
            skills: acc.skills.add(skill),
        }),
        { levels: new Set(), skills: new Set() },
    );

    const dispatch = useDispatch();

    const handleAddToCart = (course) => {
        dispatch(addToCart(course));
        persistStore(store);
    };

    useEffect(() => {
        let timeout;

        if (isReadyToRender) {
            const { currentItems, totalPages } = paginate(courseData, currentPage, itemsPerPage, filter.search, filter);
            setPagination({
                currentItems,
                totalPages,
            });
        } else {
            timeout = setTimeout(() => {
                setIsReadyToRender(true);
            }, 250);
        }

        return () => clearTimeout(timeout);
    }, [filter, currentPage, isReadyToRender]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo(0, 500);
    };

    const handleSearch = (e) => {
        setCurrentPage(1);
        setIsReadyToRender(false);
        setFilter({ ...filter, search: e.target.value });
    };

    const handleLevelChange = (level) => {
        setFilter((prevState) => ({
            ...prevState,
            level: prevState.level.includes(level)
                ? prevState.level.filter((selectedLevel) => selectedLevel !== level)
                : [...prevState.level, level],
        }));
        setCurrentPage(1);
    };

    const handleSkillChange = (skill) => {
        setFilter((prevState) => ({
            ...prevState,
            skill: prevState.skill.includes(skill)
                ? prevState.skill.filter((selectedSkill) => selectedSkill !== skill)
                : [...prevState.skill, skill],
        }));
        setCurrentPage(1);
    };

    const handleClicked = () => {
        setIsClicked(!isClicked);
    };
    return {
        searchTerm: filter.search,
        handleLevelChange,
        handleSearch,
        levels,
        selected: filter,
        skills,
        handleSkillChange,
        currentItems: pagination.currentItems,
        currentPage,
        handlePageChange,
        totalPages: pagination.totalPages,
        handleAddToCart,
        handleClicked,
        isClicked
    };
}

export default useLogicCourses;
