import './style.scss';

import { useContext } from "react";

import SectionCheckout from '../section';

import CartContext from '../../../contexts/cart';
import ItemList from '../../item/list';

const CartList = () => {
    const {cart, addItem, removeItem} = useContext(CartContext);

    return <SectionCheckout className={"cart-list"} title={"Carrito"}>
        <ItemList
            items={cart.items}
            onRemoveItem={removeItem}
            onAddItem={addItem}
        />
    </SectionCheckout>;
}

export default CartList;