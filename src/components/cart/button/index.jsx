import './style.scss';

import { useContext } from "react";

import CartContext from '../../../contexts/cart';

import WindowButton from '../../windowButton';
import ItemList from '../../item/list';
import ButtonCheckout from '../../checkout/buttonCheckout';

import cartIcon from '../../../assets/icons/cart.svg';

const CartButton = () => {
    const {isEmpty, totalCount, items, addItem, removeItem, amounts} = useContext(CartContext);

    return <WindowButton
        className={"button-cart"}
        contentButton={<>
            <div className={"total-count"}>{!isEmpty() && totalCount()}</div>
            <img src={cartIcon} alt={"icon cart"} />
        </>}
    >
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
        <ButtonCheckout />
    </WindowButton>;
}

export default CartButton;