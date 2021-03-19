const onlyTrue = (...booleans) => {
    for (const boolean of booleans) if (boolean) return true;
    return false;
}
const simple = (text) => text.toLowerCase();

const find = (params, category) => {
    return onlyTrue(
        params.url_id && category.url_id === params.url_id,
        params.id && category.id === params.id,
        params.query && simple(category.title).includes(simple(params.query))
    )
}

const restrictions = (filter) => {
    return Object.entries(filter).reduce((result, [key, value]) => {
        if (
            key in ['url_id', 'id'] ||
            (key === 'query' && value.length > 0)
        ) result[key] = value;

        return result;
    }, {});
}

const categoryFilter = (categories, filter) => {
    const result = [];

    const restrictive_params = restrictions(filter);

    for(const category of categories) {
        if (filter.limit && filter.limit <= result.length) break;

        const add = 
            Object.keys(restrictive_params).length === 0 || 
            find(restrictive_params, category);

        if (add) result.push(category);
    }

    return result;
}

export default categoryFilter;