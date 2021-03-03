import './style.scss';

import { Redirect, Route, Switch} from 'react-router-dom';

import Header from '../../components/header';

import { useContext } from 'react';
import UserContext from '../../contexts/user';
import UserLogin from '../../components/user/login';

const UserPage = ({match}) => {
    const { usuario } = useContext(UserContext);

    return <>
        <Switch>
            <Redirect exact path={match.url} to={match.url + "info"}></Redirect>
            <Route path={match.url + "/login"} component={UserLogin} />
            <Route path={match.url + "/sing-up"} >
                <h1>singup Page</h1>
            </Route>
            <Route path={match.url + "/restore"} >
                <h1>restore Page</h1>
            </Route>
            <Route path={match.url + "/info"} >{
                usuario ?
                    <>
                        <Header />
                        <h1>Info Page</h1>
                    </> :
                    <Redirect to={match.url + "/login"} />
            }</Route>
        </Switch>
    </>;
}

export default UserPage;