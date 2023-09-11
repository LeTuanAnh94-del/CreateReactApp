const paginate = (items, currentPage, itemsPerPage, searchTerm, selected) => {
    const filteredItems = items
        .filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .filter((item) => {
            if (selected.level.length === 0) return true;
            return selected.level.includes(item.level);
        })
        .filter((item) => {
            if (selected.skill.length === 0) return true;
            return selected.skill.includes(item.skill);
        });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

    return {
        currentItems,
        totalPages,
    };
};

export default paginate;
