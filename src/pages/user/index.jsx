import { Redirect, Route, Switch, useHistory, useParams} from 'react-router-dom';
import { useContext } from 'react';

import UserContext from '../../contexts/user';

import UserControl from '../../components/user/control';
import InputField from '../../components/fields/input';
import OrderList from '../../components/orders/list';

import './style.scss';
import OrderDetail from '../../components/orders/detail';

const SectionInfo = () => {
    const { loading, user } = useContext(UserContext);
    
    if (loading) return <label>Loading ...</label>;
    
    return <>
        <h2>Mis Datos</h2>
        <InputField
            title={"Nombre Completo"}
            value={user ? user.displayName : ''}
            onChange={console.log}
        />
    </>
}

const SectionOrders = () => {
    const { loading, buys } = useContext(UserContext);
    
    if (loading) return <label>Loading ...</label>;
    
    return <>
        <h2>Ordenes</h2>
        <OrderList orders={buys} />
    </>
}

const SectionOrder = () => {
    const { loading } = useContext(UserContext);
    const { orderId } = useParams('orderId');

    if (loading) return <label>Loading ...</label>;
    
    return <OrderDetail orderId={orderId} />;
}

const UserPage = ({match}) => {
    const { loading, loggedIn } = useContext(UserContext);
    const history = useHistory();

    if (loading) return <label>Loading ...</label>;
    
    if (!loggedIn) history.push('/');

    return <div className={"user-page app-width"}>
        <UserControl />
        <div className={"user-section"}>
            <Switch>
                <Redirect exact path={match.url} to={match.url + "info"} />
                <Route path={match.url + "/info"} component={SectionInfo} />
                <Route exact path={match.url + "/orders/"} component={SectionOrders} />
                <Route path={match.url + "/orders/:orderId"} component={SectionOrder} />
            </Switch>
        </div>
    </div>;
}

export default UserPage;