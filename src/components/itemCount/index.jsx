import './style.scss';

import { useState } from "react"

const ItemCount = ({
    title = "",
    stock = 0,
    initial = 0,
    onAdd = () => {}
}) => {
    const [count, setCount] = useState(initial);

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