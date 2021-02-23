const productsFilter = (products, filter) => {
    return products.filter(product => {
        if (
            filter.query && 
            !product.title.toLowerCase().includes(filter.query.toLowerCase())
            ) {
            return false;        
        }
        
        if (
            filter.category && 
            product.category !== filter.category.id
        ) {
            return false;
        }

        return true;
    })   
}

export default productsFilter;