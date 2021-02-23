import './style.scss';

import { useContext } from "react";

import CartContext from '../../contexts/cart';
import ListItem from '../listItems';
import CartAmounts from '../cartAmounts';

const CartContainer = () => {
    const {cart, addItem, removeItem, amounts} = useContext(CartContext);

    return <div className={"cart app-width"}>
        <ListItem
            items={cart.items}
            onRemoveItem={removeItem}
            onAddItem={addItem}
        />
        <CartAmounts amounts={amounts} />
    </div>;
}

export default CartContainer;