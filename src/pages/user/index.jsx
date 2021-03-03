import './style.scss';

import { Redirect, Route, Switch, useHistory, useLocation} from 'react-router-dom';

import Header from '../../components/header';

import { useContext } from 'react';
import UserContext from '../../contexts/user';

const UserPage = ({match}) => {
    const { usuario } = useContext(UserContext);
    const location = useLocation();
    const history = useHistory();

    return <>
        <Switch>
            <Redirect exact path={match.url} to={match.url + "info/"}></Redirect>
            <Route path={match.url + "/info"} >
                <Header />
                <h1>Info Page</h1>
                { (!usuario && location.pathname === '/user/info/') && history.push('/user/login/') }
            </Route>
            <Route path={match.url + "/login"} >
                <h1>login Page</h1>
            </Route>
            <Route path={match.url + "/sing-up"} >
                <h1>singup Page</h1>
            </Route>
            <Route path={match.url + "/restore"} >
                <h1>restore Page</h1>
            </Route>
        </Switch>
    </>;
}

export default UserPage;