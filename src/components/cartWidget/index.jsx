import './style.css';

import icon from '../../assets/icons/cart.svg';

const CartWidget = () => {
    return <div className={"cart-container app-width"}>
        <div className={"cart"}>
            <img src={icon}/>
            <label>No hay items seleccionados</label>
        </div>
    </div>;
}

export default CartWidget;