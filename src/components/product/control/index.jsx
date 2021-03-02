import './style.scss';

import { useContext, useState } from "react";
import { useHistory } from 'react-router-dom';

import CartContext from '../../../contexts/cart';

const ProductControl = ({product}) => {
    const {addItem, availableItem, quantityItem} = useContext(CartContext);
    const [count, setCount] = useState(0);
    const history = useHistory();

    if (product.stock === 0) {
        return <div className={"item-out-stock"}>Sin Stock</div>;
    }

    return <>
        <div className={"count-container"}>
            <label className={"title-quantity"}>Cantidad: </label>
            <select onChange={e => setCount(parseInt(e.currentTarget.value))} value={count}>{
                Array.from(Array(availableItem(product) + 1)).map((_, i) => {
                    return <option key={i} value={i}>{i}</option>
                })
            }</select>
            <div className={"text-available"}>
                <label >({product.stock} disponibles)</label>
                {
                    quantityItem(product.id) > 0 &&
                    <label>({quantityItem(product.id)} en carrito)</label>
                }
            </div>
        </div>
        <button
            className={"button-add-to-cart"}
            onClick={() => {
                setCount(0);
                addItem(product, count)
            }}
        >Agregar al Carrito</button>
        <button
            className={"button-buy-now"}
            onClick={() => {
                addItem(product, count);
                history.push('/cart/');
            }}
        >Comprar Ya</button>
    </>;
}

export default ProductControl;