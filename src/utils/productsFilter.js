const onlyTrue = (...booleans) => {
    for (const boolean of booleans) if (boolean) return true;
    return false;
}
const simple = (text) => text.toLowerCase();

const productsFilter = (products, filter) => {
    if (!filter || Object.keys(filter).length === 0) {
        return products;
    };

    return products.filter(product => onlyTrue(
        filter.category && filter.category.url_id && product.category.url_id === filter.category.url_id,
        filter.category && filter.category.id && product.category.id === filter.category.id,
        filter.id && product.id === filter.id,
        filter.url && product.url === filter.url,
        filter.query && onlyTrue(
            simple(product.title).includes(simple(filter.query)),
            simple(product.category.title).includes(simple(filter.query)),
        )
    ))
}

export default productsFilter;