import './style.scss';

import { useContext, useEffect, useState } from 'react';

import ProductsContext from '../../../contexts/products';

import ProductList from '../list';

const ProductListContainer = ({ title, filters}) => {
    const {loading, searchProducts} = useContext(ProductsContext);

    const [products, setProducts] = useState([]);
    const [filter] = useState(filters);

    useEffect(() => {        
        searchProducts(filter)
            .then(setProducts)
            .catch(err => {
                console.error("Error al obtener los productos: " + err);
            });

        return () => {}
    }, [searchProducts, setProducts, filter])

    return <div className={"product-list-container app-width"}>
        <h2>{ title }</h2>
        {
            (loading) ?
                <label>Loading ...</label> :
                <ProductList products={products} />
        }
    </div>;
}

export default ProductListContainer;