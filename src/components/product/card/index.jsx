import { Link } from "react-router-dom";
import "./style.scss";

const ProductCard = ({ product }) => {
    return <Link className={"product-card"} to={'/product/' + product.url}>
        <img src={ product.picture.url } alt={ product.picture.alt } />
        <b className={"title"}>{ product.title }</b>
        <label className={"description"}>{product.description}</label>
        <b className={"price"}>{ "$ " + product.price }</b>
    </Link>;
}

export default ProductCard;