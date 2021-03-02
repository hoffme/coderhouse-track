import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import ProductsContext from '../../../contexts/products';

import ProductDetailt from "../detail";

import "./style.scss";

const ProductDetailContainer = () => {
    const {loading, searchProducts} = useContext(ProductsContext);

    const { productUrl } = useParams('productUrl');
    const [product, setProduct] = useState();

    useEffect(() => {
        if (loading) return;

        searchProducts({url: productUrl})
            .then(products => {
                if (products.length === 0) {
                    throw new Error("url invalida: " + productUrl);
                }

                setProduct(products[0]);
            })
            .catch(err => {
                console.error("Error al obtener los productos: " + err);
            });

        return () => {};
    }, [loading, searchProducts, productUrl, setProduct]);

    return <div className={"product-detail-container app-width"}>{
        (product) ?
            <ProductDetailt product={product} /> :
            <label>Loading ...</label>
    }</div>
}

export default ProductDetailContainer;