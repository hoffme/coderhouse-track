import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductDetailt from "../productDetail";

import "./style.scss";

const getProduct = (productId) => {
    return new Promise((resolve, reject) => {
        // https://www.npoint.io/docs/5d5547aef66f65d0d13c edit
        fetch("https://api.npoint.io/5d5547aef66f65d0d13c/" + productId)
            .then(data => data.json())
            .then(resolve)
            .catch(reject);
    });
}

const ProductDetailContainer = () => {
    const [product, setProduct] = useState();
    const { productId } = useParams('productId');

    useEffect(() => {
        getProduct(productId)
            .then(product => setProduct(product))
            .catch(err => console.error(err));

        return () => {};
    }, [productId]);

    return <div className={"product-detail-container app-width"}>{
        (product) ?
            <ProductDetailt product={product} /> :
            <label>Loading ...</label>
    }</div>
}

export default ProductDetailContainer;