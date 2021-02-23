import { Link } from "react-router-dom";
import "./style.scss";

const ProductCard = ({ product }) => {
    return <Link className={"product-card"} to={'/product/' + product.id}>
        <img src={ product.pictureUrl } alt={ product.pictureAlt } />
        <b className={"title"}>{ product.title }</b>
        <label className={"description"}>{product.description}</label>
        <b className={"price"}>{ "$ " + product.price }</b>
    </Link>;
}

export default ProductCard;