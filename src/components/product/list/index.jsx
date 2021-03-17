import ProductCard from '../card';

import "./style.scss";

/*
    settings = {
        desing?: 'horizontal' | 'vertical' | 'grid' (defautl),
        frame?: 'card' | 'border' | 'botomless' (defautl),
        limit?: number | undefined (defautl)
    }
*/

const ProductList = ({ products, settings = {}, settingsItem }) => {
    if (!settings.desing) settings.desing = 'horizontal';
    if (!settings.frame) settings.frame = 'botomless';

    const style = `product-list desing-${settings.desing} frame-${settings.frame}`;

    return <div className={style}>{
        products.map((product, index) => {
            return <ProductCard key={index} product={product} settings={settingsItem} />
        })
    }</div>;
}

export default ProductList;