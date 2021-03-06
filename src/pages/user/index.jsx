import { useContext } from 'react';
import { Redirect, Route, Switch, useHistory} from 'react-router-dom';

import UserContext from '../../contexts/user';

import Header from '../../components/header';

import './style.scss';

const UserPage = ({match}) => {
    const { loggedIn } = useContext(UserContext);
    const history = useHistory();

    if (!loggedIn) history.push('/');

    return <Switch>
        <Redirect exact path={match.url} to={match.url + "info"}></Redirect>
        <Route path={match.url + "/info"} >
            <Header />
            <h1>Info Page</h1>
        </Route>
    </Switch>;
}

export default UserPage;