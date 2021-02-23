import './style.scss';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ProductList from '../productList';

const getProduct = (filter) => {
    return new Promise((resolve, reject) => {
        // https://www.npoint.io/docs/5d5547aef66f65d0d13c edit
        fetch("https://api.npoint.io/5d5547aef66f65d0d13c")
            .then(data => data.json())
            .then(products => {
                resolve(products.filter(product => {
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
                }))
            })
            .catch(reject);
    });
}

const ProductListContainer = ({ title }) => {
    const [products, setProducts] = useState([]);

    const { categoryId } = useParams('categoryId');
    const { query } = useParams('query');

    useEffect(() => {
        let filter = {};
   
        if (categoryId) filter.category = { id: categoryId };
        if (query) filter.query = query;
        
        getProduct(filter)
            .then(products => { setProducts(products) })
            .catch(err => alert("Error al obtener los productos: " + err))

        return () => {}
    }, [categoryId, query])

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