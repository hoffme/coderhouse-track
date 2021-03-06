import './style.scss';

import { useContext, useState } from "react";

import CartContext from '../../../contexts/cart';

import ButtonCheckout from '../../checkout/buttonCheckout';

const ProductControl = ({product}) => {
    const {addItem, availableItem, quantityItem} = useContext(CartContext);
    const [count, setCount] = useState(0);

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
        <ButtonCheckout />
    </>;
}

export default ProductControl;