import './style.scss';

import { useContext } from "react";

import SectionCheckout from '../section';

import CartContext from '../../../contexts/cart';

const CartAmounts = () => {
    const {amounts} = useContext(CartContext);

    const cartAmounts = amounts();

    return <SectionCheckout className={"cart-amounts"} title={"Importe"}>
        <div className={"field-money"}>
            <label>Importe</label>
            <b>$ {cartAmounts.amount}</b>
        </div>
        <div className={"field-money"}>
            <label>Descuento</label>
            <b>-$ {cartAmounts.discount}</b>
        </div>
        <div className={"field-money"}>
            <label>Total</label>
            <b>$ {cartAmounts.total}</b>
        </div>
    </SectionCheckout>   
}

export default CartAmounts;