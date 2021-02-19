import './style.scss';

import { useContext } from "react";

import CartContext from '../../contexts/cart';

import FinishPurchaseButton from '../finishPurchaseButton';
import ItemCount from '../itemCount';
import ItemOutStock from '../itemOutStock';

const ItemControl = ({info}) => {
    const {addItem, itemInCart} = useContext(CartContext);

    if (info.stock === 0) return <ItemOutStock />;

    if (itemInCart(info.id)) return <FinishPurchaseButton />;

    return <ItemCount
        stock={info.stock}
        count={info.count}
        onAdd={count => addItem(info, count)}
    />;
}

export default ItemControl;