import './style.scss';

import { useContext } from "react";

import CartContext from '../../contexts/cart';

import FinishPurchaseButton from '../finishPurchaseButton';
import ItemCount from '../itemCount';
import ItemOutStock from '../itemOutStock';

const ItemControl = ({info}) => {
    const {addItem, removeItem, getItem, itemInCart} = useContext(CartContext);

    if (info.stock === 0) return <ItemOutStock />;

    return <>
        <ItemCount
            stock={info.stock}
            count={itemInCart(info.id) ? getItem(info.id).quantity : 0}
            onAdd={count => addItem(info, count)}
            onRemove={count => removeItem(info.id, count)}
        />
        <FinishPurchaseButton />
    </>;
}

export default ItemControl;