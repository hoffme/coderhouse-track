import { Link } from "react-router-dom";
import "./style.scss";

/*
    settings = {
        frame?: 'card' | 'border' | 'botomless' (defautl),
        size?: 'big' | 'medium' (default) | 'small',
        form?: 'square' | 'circle' (default) | 'rounded-square'
    }
*/

const CategoryCard = ({ category, settings = {} }) => {
    if (!settings.frame) settings.frame = 'botomless';
    if (!settings.size) settings.size = 'medium';
    if (!settings.form) settings.form = 'circle';

    const style = `category-card frame-${settings.frame} size-${settings.size} form-${settings.form}`;

    return <Link className={style} to={'/category/' + category.url_id}>
        <img className={"icon"} src={ category.icon } alt={`icono categoria ${category.title}`} />
        <label className={"title"}>{ category.title }</label>
    </Link>;
}

export default CategoryCard;