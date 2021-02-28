import './style.scss';

import { useEffect, useState } from 'react';

import { getFirestore } from '../../../firebase';

import ProductList from '../list';

const ProductListContainer = ({ title, filters = {}}) => {
    const [products, setProducts] = useState([]);

    const [filter] = useState(filters);

    const getProducts = async (filter) => {
        const query = getFirestore()
            .collection('products')
            .where("show", "!=", false);
        
        if (filter.query) query.where("title", "==", filter.query);
        if (filter.category) query.where("category", "==", filter.category.id);

        const snapshot = await query.get();

        const products = snapshot.docs.map(doc => {
            return { id: doc.id, ...doc.data() }
        });

        return products;
    }

    useEffect(() => {        
        getProducts(filter)
            .then(setProducts)
            .catch(err => {
                console.error("Error al obtener los productos: " + err);
            });

        return () => {}
    }, [setProducts, filter])

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