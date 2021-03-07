import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import CartList from '../../components/checkout/cart';
import CartDelivery from '../../components/checkout/delivery';
import CartPayment from '../../components/checkout/payment';
import Amounts from '../../components/checkout/amounts';
import ButtonBuy from '../../components/checkout/buttonBuy';

import './style.scss';

const CheckOutPage = () => {
    const [buy, setBuy] = useState(null);
    const history = useHistory();

    const abrirOrden = () => {
        setBuy(null);
        history.push('/user/orders/' + buy.id);
    }

    if (buy) {
        return <div className={"buy-finish app-width"}>
            <h2>Gracias Por la compra :)</h2>
            <button onClick={abrirOrden}>Ver Orden</button>
        </div>;
    }
 
    return <div className="checkout-page app-width">
        <CartList />
        <CartDelivery />
        <CartPayment />
        <Amounts />
        <ButtonBuy onFinishBuy={newBuy => setBuy(newBuy)} />
    </div>
}

export default CheckOutPage;