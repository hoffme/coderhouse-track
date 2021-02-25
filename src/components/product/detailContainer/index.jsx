import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getFirestore } from '../../../firebase';

import ProductDetailt from "../detail";

import "./style.scss";

const ProductDetailContainer = () => {
    const { productUrl } = useParams('productUrl');

    const db = getFirestore();
    const productsCollection = db.collection('products');
    
    let productsQuery = productsCollection
        .where("show", "!=", false)
        .where("url", "==", productUrl)
        .limit(1);

    // hay que guardar los siguientes parametros en un estado para que no entre
    // en bucle cuando se actualiza el componente. (refactor)

    // eslint-disable-next-line
    const [query, _] = useState(productsQuery);
    // eslint-disable-next-line
    const [collection, __] = useState(productsCollection);

    const [product, setProduct] = useState();

    useEffect(() => {
        collection.get(query)
            .then(querySnapshot => {
                const products = querySnapshot.docs.map(doc => doc.data());
                if (products.length === 0) {
                    throw new Error("no se ha encontrado el producto");
                }

                setProduct(products[0]);
            }).catch(err => {
                console.error("Error al obtener los productos: " + err);
            });

        return () => {};
    }, [query, collection]);

    return <div className={"product-detail-container app-width"}>{
        (product) ?
            <ProductDetailt product={product} /> :
            <label>Loading ...</label>
    }</div>
}

export default ProductDetailContainer;