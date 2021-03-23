import { Redirect, Route, Switch, useHistory, useParams} from 'react-router-dom';
import { useContext } from 'react';

import UserContext from '../../contexts/user';

import UserControl from '../../components/user/control';
import InputField from '../../components/fields/input';
import OrderList from '../../components/orders/list';

import './style.scss';
import OrderDetail from '../../components/orders/detail';
import Loading from '../../components/loading';

const SectionInfo = () => {
    const { user } = useContext(UserContext);
    
    return <>
        <h2 className={"title"}>Mis Datos</h2>
        <div className={"content"}>
            <InputField
                title={"Nombre Completo"}
                value={user ? user.displayName : ''}
                onChange={console.log}
            />
        </div>
    </>
}

const SectionOrders = () => {
    const { buys } = useContext(UserContext);
    
    return <>
        <h2 className={"title"}>Ordenes</h2>
        <div className={"content"}>
           <OrderList orders={buys} />
        </div>
    </>
}

const SectionOrder = () => {
    const { orderId } = useParams('orderId');
    
    return <>
        <h2 className={"title"}>Detalle de Orden</h2>
        <div className={"content"}>
            <OrderDetail orderId={orderId} />
        </div>
    </>
}

const UserPage = ({match}) => {
    const { loading, loggedIn } = useContext(UserContext);
    const history = useHistory();

    if (loading) return <Loading />
    
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