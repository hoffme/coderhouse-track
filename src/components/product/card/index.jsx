import { Link } from "react-router-dom";
import "./style.scss";

/*
    settings = {
        frame?: 'card' | 'border' | 'botomless' (defautl),
        direction: 'horizontal' | 'vertical' (default),
        size?: 'big' | 'medium' (default) | 'small',
    }
*/

const ProductCard = ({ product, settings = {} }) => {
    if (!settings.frame) settings.frame = 'card';
    if (!settings.direction) settings.direction = 'vertical';
    if (!settings.size) settings.size = 'medium';

    const style = `product-card direction-${settings.direction} frame-${settings.frame} size-${settings.size}`;

    return <Link className={style} to={'/product/' + product.url}>
        <img className={"image"} src={ product.picture.url } alt={ product.picture.alt } />
        <label className={"price"}>{ "$ " + product.price }</label>
        <label className={"title"}>{ product.title }</label>
    </Link>;
}

export default ProductCard;