import './style.css';

import { useState } from "react"

const ItemCount = ({
    itemCount = 0,
    stock = 0,
    onAdd = () => {},
    title = "Agregar Articulo"
}) => {
    const [count, setCount] = useState(itemCount);

    return <div className={"item-count"}>
        <label className={"title"}>{ title }</label>

        <div className={"count-containter"}>
            <button
                disabled={count <= 0}
                onClick={() => { setCount(count - 1) }}
            >-</button>
            <label>{ count }</label>
            <button
                disabled={count >= stock}
                onClick={() => { setCount(count + 1) }}
            >+</button>
        </div>
        
        <button
            disabled={count === 0}
            className={"button-add-cart"}
            onClick={() => onAdd(count)}
        >
            Agregar al carrito
        </button>
    </div>
}

export default ItemCount;