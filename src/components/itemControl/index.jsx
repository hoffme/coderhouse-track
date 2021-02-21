import './style.scss';

import { useContext, useState } from "react";
import { useHistory } from 'react-router-dom';

import CartContext from '../../contexts/cart';

const ItemControl = ({info}) => {
    const {addItem} = useContext(CartContext);
    const [count, setCount] = useState(0);
    const history = useHistory();

    if (info.stock === 0) {
        return <div className={"item-out-stock"}>Sin Stock</div>;
    }

    return <>
        <div className={"count-container"}>
            <label className={"title-quantity"}>Cantidad: </label>
            <select onChange={e => setCount(parseInt(e.currentTarget.value))} value={count}>
                {
                    Array.from(Array(Math.min(info.stock, 10))).map((_, i) => {
                        return <option key={i} value={i}>{i}</option>
                    })
                }
            </select>
            <label className={"text-available"}>({info.stock} disponibles)</label>
        </div>
        <button
            className={"button-add-to-cart"}
            onClick={() => addItem(info, count)}
        >Agregar al Carrito</button>
        <button
            className={"button-buy-now"}
            onClick={() => {
                addItem(info, count);
                history.push('/cart');
            }}
        >Comprar Ya</button>
    </>;
}

export default ItemControl;