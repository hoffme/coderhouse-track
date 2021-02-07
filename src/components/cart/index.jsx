import './style.scss';

import icon from '../../assets/icons/cart.svg';

const Cart = () => {
    return <div className={"cart"}>
        <img src={icon} alt="carrito icono"/>
        <label>No hay items seleccionados</label>
    </div>;
}

export default Cart;