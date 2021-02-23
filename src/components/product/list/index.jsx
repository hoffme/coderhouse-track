import ProductCard from '../card';

import "./style.scss";

const ProductList = ({ products }) => {
    return <div className={"product-list"}>{
        products.map((product, index) => {
            return <ProductCard key={index} product={product} />
        })
    }</div>;
}

export default ProductList;