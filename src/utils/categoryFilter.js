const onlyTrue = (...booleans) => {
    for (const boolean of booleans) if (boolean) return true;
    return false;
}
const simple = (text) => text.toLowerCase();

const categoryFilter = (categories, filter) => {
    if (!filter || Object.keys(filter).length === 0) {
        return categories;
    };

    return categories.filter(category => onlyTrue(
        filter.url_id && category.url_id === filter.url_id,
        filter.id && category.id === filter.id,
        filter.query && simple(category.title).includes(simple(filter.query))
    ))
}

export default categoryFilter;