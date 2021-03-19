const onlyTrue = (...booleans) => {
    for (const boolean of booleans) if (boolean) return true;
    return false;
}
const simple = (text) => text.toLowerCase();

const find = (params, product) => {
    return onlyTrue(
        params.category && params.category.url_id && product.category.url_id === params.category.url_id,
        params.category && params.category.id && product.category.id === params.category.id,
        params.id && product.id === params.id,
        params.url && product.url === params.url,
        params.query && onlyTrue(
            simple(product.title).includes(simple(params.query)),
            simple(product.category.title).includes(simple(params.query)),
        )
    );
}

const restrictions = (filter) => {
    return Object.entries(filter).reduce((result, [key, value]) => {
        if (
            key in ['url', 'id'] ||
            (key === 'query' && value.length > 0) ||
            (key === 'category' && Object.keys(value).length > 0)
        ) result[key] = value;

        return result;
    }, {});
}

const productsFilter = (products, filter) => {
    const result = [];

    const restrictive_params = restrictions(filter);

    for(const product of products) {
        if (filter.limit && filter.limit <= result.length) break;

        const add = 
            Object.keys(restrictive_params).length === 0 || 
            find(restrictive_params, product);

        if (add) result.push(product);
    }

    return result;
}

export default productsFilter;