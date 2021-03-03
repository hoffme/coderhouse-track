import './style.scss';

import { CheckOutProvider } from '../../contexts/checkout';

import Header from '../../components/header';
import CartList from '../../components/checkout/cart';
import CartDelivery from '../../components/checkout/delivery';
import CartPayment from '../../components/checkout/payment';
import Amounts from '../../components/checkout/amounts';
import ButtonBuy from '../../components/checkout/buttonBuy';

const CheckOutPage = () => {
    return <CheckOutProvider>
        <Header />
        <div className="checkout-page app-width">
            <CartList />
            <CartDelivery />
            <CartPayment />
            <Amounts />
            <ButtonBuy />
        </div>
    </CheckOutProvider>;
}

export default CheckOutPage;