import ProductCard from '../card';

import "./style.scss";

/*
    settings = {
        desing?: 'horizontal' | 'vertical' | 'grid' (defautl),
        frame?: 'card' | 'border' | 'botomless' (defautl),
        limit?: number | undefined (defautl)
    }
*/

const ProductList = ({ products = [], settings = {}, settingsItem }) => {
    if (!settings.desing) settings.desing = 'horizontal';
    if (!settings.frame) settings.frame = 'botomless';

    const style = `product-list desing-${settings.desing} frame-${settings.frame}`;

    if (products.length === 0) {
        return <div className={style}>
            <label className={"empty"}>No se han encontrado productos</label>
        </div>
    }

    return <div className={style}>
        {
            products.map((product, index) => {
                return <ProductCard key={index} product={product} settings={settingsItem} />
            })
        }
    </div>;
}

export default ProductList;