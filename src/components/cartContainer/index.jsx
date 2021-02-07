import './style.scss';

import Cart from '../cart';

const CartContainer = ({ items = [] }) => {
    if (items.length === 0) return <></>;

    return <div className={"cart-container app-width"}>
        <Cart />
    </div>;
}

export default CartContainer;