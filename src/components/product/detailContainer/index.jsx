import { useEffect, useState, useContext } from "react";

import ProductsContext from '../../../contexts/products';

import ProductDetailt from "../detail";
import ProductListContainer from "../listContainer";

import "./style.scss";

const ProductDetailContainer = ({ filter }) => {
    const {loading, searchProducts} = useContext(ProductsContext);
    
    const [product, setProduct] = useState();

    useEffect(() => {
        if (loading) return;

        searchProducts(filter)
            .then(products => {
                if (products.length === 0) {
                    throw new Error("url invalida: " + filter.url);
                }

                setProduct(products[0]);
            })
            .catch(err => {
                console.error("Error al obtener los productos: " + err);
            });

        return () => {};
    }, [loading, searchProducts, filter, setProduct]);

    return <div className={"product-detail-container app-width"}>
        {
            !product ? <label>Loading ...</label> :
                <>
                    <ProductDetailt product={product} />
                    <ProductListContainer
                        title={"Relacionados"}
                        removeOnEmpty={true}
                        showMore={ '/category/' + product.category.url_id }
                        filters={{ category: product.category, exclude: [product.id], limit: 4 }}
                    />
                </>                
        }
    </div>
}

export default ProductDetailContainer;