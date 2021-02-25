import './style.scss';

import { useEffect, useState } from 'react';

import { getFirestore } from '../../../firebase';

import ProductList from '../list';
// import productsFilter from './filter';

const ProductListContainer = ({ title, filters = {}}) => {
    const db = getFirestore();
    const productsCollection = db.collection('products');
    
    let productsQuery = productsCollection.where("show", "!=", false);
    if (filters.query) productsQuery.where("title", "==", filters.query);
    if (filters.category) productsQuery.where("category", "==", filters.category.id);

    // hay que guardar los siguientes parametros en un estado para que no entre
    // en bucle cuando se actualiza el componente. (refactor)

    // eslint-disable-next-line
    const [query, _] = useState(productsQuery);
    // eslint-disable-next-line
    const [collection, __] = useState(productsCollection);

    const [products, setProducts] = useState([]);

    useEffect(() => {        
        collection.get(query)
            .then(querySnapshot => {
                setProducts(querySnapshot.docs.map(doc => doc.data()));
            }).catch(err => {
                console.error("Error al obtener los productos: " + err);
            });

        return () => {}
    }, [collection, query])

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