import './style.scss';

import { useContext } from "react";

import CartContext from '../../contexts/cart';
import ListItem from '../listItems';
import TotalCart from '../totalCart';

const CartContainer = () => {
    const {cart, removeItem, amounts} = useContext(CartContext);

    return <div className={"cart app-width"}>
        <ListItem
            items={cart.items}
            onRemoveItem={removeItem}
        />
        <TotalCart
            amount={amounts.amount}
            discount={amounts.discount}
            total={amounts.total}
        />
    </div>;
}

export default CartContainer;