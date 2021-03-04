import './style.scss';

import { useContext } from "react";

import SectionCheckout from '../section';

import CartContext from '../../../contexts/cart';
import ItemList from '../../item/list';

const CartList = () => {
    const {items, addItem, removeItem} = useContext(CartContext);

    return <SectionCheckout className={"cart-list"} title={"Carrito"}>
        <ItemList
            items={items}
            onRemoveItem={removeItem}
            onAddItem={addItem}
        />
    </SectionCheckout>;
}

export default CartList;