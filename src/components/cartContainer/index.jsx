import './style.scss';

import { useContext } from "react";

import CartContext from '../../contexts/cart';
import CartAmounts from '../cartAmounts';
import ItemList from '../itemList';

const CartContainer = () => {
    const {cart, addItem, removeItem, amounts} = useContext(CartContext);

    return <div className={"cart app-width"}>
        <ItemList
            items={cart.items}
            onRemoveItem={removeItem}
            onAddItem={addItem}
        />
        <CartAmounts amounts={amounts} />
    </div>;
}

export default CartContainer;