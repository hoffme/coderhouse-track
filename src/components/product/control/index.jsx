import './style.scss';

import { useContext, useState } from "react";
import { useHistory } from 'react-router-dom';

import CartContext from '../../../contexts/cart';

const ProductControl = ({product}) => {
    const {addItem} = useContext(CartContext);
    const [count, setCount] = useState(0);
    const history = useHistory();

    if (product.stock === 0) {
        return <div className={"item-out-stock"}>Sin Stock</div>;
    }

    return <>
        <div className={"count-container"}>
            <label className={"title-quantity"}>Cantidad: </label>
            <select onChange={e => setCount(parseInt(e.currentTarget.value))} value={count}>
                {
                    Array.from(Array(Math.min(product.stock, 10))).map((_, i) => {
                        return <option key={i} value={i}>{i}</option>
                    })
                }
            </select>
            <label className={"text-available"}>({product.stock} disponibles)</label>
        </div>
        <button
            className={"button-add-to-cart"}
            onClick={() => addItem(product, count)}
        >Agregar al Carrito</button>
        <button
            className={"button-buy-now"}
            onClick={() => {
                addItem(product, count);
                history.push('/cart');
            }}
        >Comprar Ya</button>
    </>;
}

export default ProductControl;