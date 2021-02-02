import ItemCount from '../itemCount';

import "./style.css";

const Item = ({ info, onAdd }) => {
    return <div className={"item"}>
        <img src={ info.pictureUrl } alt={ info.pictureAlt } />
        <b>{ info.title }</b>
        <label>{ "$ " + info.price }</label>
        <ItemCount
            title={"Agregar al Carrito"}
            initial={info.initial}
            stock={info.stock}
            onAdd={(newCount) => { onAdd(newCount) }}
        />
    </div>;
}

export default Item;