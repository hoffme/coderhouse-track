import './style.scss';

import { useContext } from "react";

import CartContext from '../../contexts/cart';
import { Link } from 'react-router-dom';

const Cart = () => {
    const {cart, isEmpty, removeItem} = useContext(CartContext);

    if (isEmpty()) return <div className={"cart"}>No hay items seleccionados</div>;

    return <div className={"cart"}>
        <div className={"items-cart"}>
            {
                cart.items.map((item, index) => {
                    return <div className={"item-cart"} key={index}>
                        <label className={"quantity"}>{item.quantity}</label>
                        <label className={"title"}>{item.item.title}</label>
                        <b className={"price"}>$ {item.item.price * item.quantity}</b>
                        <button onClick={() => removeItem(item.item.id)}>x</button>
                    </div>
                })
            }
        </div>
        <Link className={"finish-button"} to={"/cart/"}>Finalizar Compra</Link>
    </div>;
}

export default Cart;