import './style.scss';

import { Redirect, Route, Switch} from 'react-router-dom';

import HeadCart from '../../components/cart/head';
import NavCart from '../../components/cart/nav';

import CartList from '../../components/cart/list';

const CartPage = ({match}) => {
    return <>
        <HeadCart />
        <Switch>
            <Redirect exact path={match.url} to={match.url + "items/"}></Redirect>
            <Route path={match.url + "/items"} component={CartList} />
            <Route path={match.url + "/delivery"} component={CartList} />
            <Route path={match.url + "/payment"} component={CartList} />
            <Route path={match.url + "/checkout"} component={CartList} />
        </Switch>
        <NavCart />
    </>;
}

export default CartPage;