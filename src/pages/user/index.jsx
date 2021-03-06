import { Redirect, Route, Switch, useHistory, useParams} from 'react-router-dom';
import { useContext } from 'react';

import UserContext from '../../contexts/user';

import UserControl from '../../components/user/control';
import InputField from '../../components/fields/input';

import './style.scss';

const UserPage = ({match}) => {
    const { loading, loggedIn, user, buys } = useContext(UserContext);
    const history = useHistory();
    const { orderId } = useParams('orderId');

    if (loading) return <label>Loading ...</label>;
    if (!loggedIn) history.push('/');

    return <div className={"user-page app-width"}>
        <UserControl />
        <div className={"user-section"}>
            <Switch>
                <Redirect exact path={match.url} to={match.url + "info"}></Redirect>
                <Route path={match.url + "/info"} >
                    <h2>Mis Datos</h2>
                    <InputField
                        title={"Nombre Completo"}
                        value={user ? user.displayName : ''}
                        onChange={console.log}
                    />
                </Route>
                <Route path={match.url + "/orders/:orderId?"} >{
                        orderId ?
                            <div>orden {orderId}</div>:
                            <>
                                <h2>Ordenes</h2>
                                {
                                    buys.map((order, index) => {
                                        return <div key={index}>{order.id}</div>
                                    })
                                }
                            </>
                }</Route>
            </Switch>
        </div>
    </div>;
}

export default UserPage;