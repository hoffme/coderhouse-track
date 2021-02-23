import React from "react";

import Galery from "../galery";

import ProductControl from "../productControl";

import "./style.scss";

const ProductDetail = ({product}) => {
    return <div className={"product-detail"}>
        <Galery images={product.galery} />
        <div className={"info"}>
            <h3 className={"title"}>{product.title}</h3>
            <b className={"price"}>{"$ " + product.price}</b>
            <label className={"description"}>{product.description}</label>
            <ProductControl product={product} />
        </div>
    </div>
}

export default ProductDetail;