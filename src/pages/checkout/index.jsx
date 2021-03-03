import './style.scss';

import Header from '../../components/header';
import CartList from '../../components/cart/list';

const CheckOutPage = () => {
    return <>
        <Header />
        <div className="checkout">
            <CartList />
        </div>
    </>;
}

export default CheckOutPage;