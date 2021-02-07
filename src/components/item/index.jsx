import "./style.scss";

const Item = ({ info, onClick }) => {
    return <button className={"item"} onClick={onClick}>
        <img src={ info.pictureUrl } alt={ info.pictureAlt } />
        <b className={"title"}>{ info.title }</b>
        <label className={"description"}>{info.description}</label>
        <b className={"price"}>{ "$ " + info.price }</b>
    </button>;
}

export default Item;