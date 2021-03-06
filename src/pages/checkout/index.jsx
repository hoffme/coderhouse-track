import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/header';
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
 
    return <>
        <Header />
        {
            buy ?
                <div className={"app-width"}>
                    <h2>Gracias Por la compra :)</h2>
                    <button onClick={abrirOrden}>Ver Orden</button>
                </div>
                :
                <div className="checkout-page app-width">
                    <CartList />
                    <CartDelivery />
                    <CartPayment />
                    <Amounts />
                    <ButtonBuy onFinishBuy={() => setBuy(buy)} />
                </div>
        }
    </>
}

export default CheckOutPage;