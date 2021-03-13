import { Link } from "react-router-dom";
import "./style.scss";

const CategoryCard = ({ category }) => {
    return <Link className={"category-card"} to={'/category/' + category.url_id}>
        <img className={"icon"} src={ category.icon } alt={`icono categoria ${category.title}`} />
        <label className={"title"}>{ category.title }</label>
    </Link>;
}

export default CategoryCard;