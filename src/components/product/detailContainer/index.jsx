import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getFirestore } from '../../../firebase';

import ProductDetailt from "../detail";

import "./style.scss";

const ProductDetailContainer = () => {
    const { productUrl } = useParams('productUrl');
    const [product, setProduct] = useState();

    const getProduct = async (url) => {
        const snapshot = await getFirestore()
            .collection('products')
            .where("show", "!=", false)
            .where("url", "==", url)
            .limit(1)
            .get();
        
        const products = snapshot.docs.map(doc => {
            return { id: doc.id, ...doc.data() }
        });

        if (products.length === 0) {
            throw new Error("no se ha encontrado el producto");
        }

        return products[0];
    }

    useEffect(() => {
        getProduct(productUrl)
            .then(setProduct)
            .catch(err => {
                console.error("Error al obtener los productos: " + err);
            });

        return () => {};
    }, [productUrl, setProduct]);

    return <div className={"product-detail-container app-width"}>{
        (product) ?
            <ProductDetailt product={product} /> :
            <label>Loading ...</label>
    }</div>
}

export default ProductDetailContainer;