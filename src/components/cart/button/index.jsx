import './style.scss';

import { useContext } from "react";

import CartContext from '../../../contexts/cart';

import WindowButton, { WindowContext } from '../../windowButton';
import ItemList from '../../item/list';
import ButtonCheckout from '../../checkout/buttonCheckout';

import cartIcon from '../../../assets/icons/cart.svg';

const Cart = () => {
    const { setOpen } = useContext(WindowContext);
    const { items, addItem, removeItem, amounts } = useContext(CartContext);

    return <>
        <h3>Carrito</h3>
        <ItemList
            items={items}
            onRemoveItem={removeItem}
            onAddItem={addItem}
        />
        <div className={"amount"}>
            <label>Total:</label>
            <b>$ {amounts().total}</b>
        </div>
        <ButtonCheckout onClick={() => setOpen(false)} />
    </>
}

const Button = () => {
    const { isEmpty, totalCount } = useContext(CartContext);

    return <>
        <div className={"total-count"}>{!isEmpty() && totalCount()}</div>
        <img src={cartIcon} alt={"icon cart"} />
    </>
}

const CartButton = () => {
    return <WindowButton className={"button-cart"} contentButton={<Button/>}>
        <Cart/>
    </WindowButton>;
}

export default CartButton;