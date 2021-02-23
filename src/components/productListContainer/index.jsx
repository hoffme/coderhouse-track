import './style.scss';

import { useEffect, useState } from 'react';

import ProductList from '../productList';
import productsFilter from './filter';

const ProductListContainer = ({ title, filters = {}}) => {
    const [products, setProducts] = useState([]);

    // hay que guardar el filtro en un estado para que no entre
    // en bucle cunado se le pasa el prop al useEffect
    // eslint-disable-next-line
    const [filter, _] = useState(filters);

    const getProducts = (filter) => {
        return new Promise((resolve, reject) => {
            // https://www.npoint.io/docs/5d5547aef66f65d0d13c edit
            fetch("https://api.npoint.io/5d5547aef66f65d0d13c")
                .then(data => data.json())
                .then(products => resolve(productsFilter(products, filter)))
                .catch(reject);
        });
    }

    useEffect(() => {        
        getProducts(filter)
            .then(products => { setProducts(products) })
            .catch(err => console.error("Error al obtener los productos: " + err))

        return () => {}
    }, [filter])

    return <div className={"product-list-container app-width"}>
        <h2>{ title }</h2>
        {
            (!products || products.length === 0) ?
                <label>Loading ...</label> :
                <ProductList products={products} />
        }
    </div>;
}

export default ProductListContainer;