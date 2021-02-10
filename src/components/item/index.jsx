import { Link } from "react-router-dom";
import "./style.scss";

const Item = ({ info, onClick }) => {
    return <Link className={"item"} to={'/item/' + info.id}>
        <img src={ info.pictureUrl } alt={ info.pictureAlt } />
        <b className={"title"}>{ info.title }</b>
        <label className={"description"}>{info.description}</label>
        <b className={"price"}>{ "$ " + info.price }</b>
    </Link>;
}

export default Item;