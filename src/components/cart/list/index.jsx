import './style.scss';

import { useContext } from "react";

import CartContext from '../../../contexts/cart';
import CartAmounts from '../amounts';
import ItemList from '../../item/list';

const CartList = () => {
    const {cart, addItem, removeItem, amounts} = useContext(CartContext);

    return <div className={"cart-list app-width"}>
        <ItemList
            items={cart.items}
            onRemoveItem={removeItem}
            onAddItem={addItem}
        />
        <CartAmounts amounts={amounts} />
    </div>;
}

export default CartList;