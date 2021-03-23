import { useContext } from 'react';
import { useHistory } from 'react-router';

import UserContext from '../../../contexts/user';
import Loading from '../../loading';

import './style.scss';

const UserControl = ({ onChange = () => {} }) => {
    const {loggedIn, loading, user, logOut} = useContext(UserContext);
    const history = useHistory();

    if (loading) return <Loading />;

    if (!loggedIn) return <></>;

    const onClick = (e, to) => {
        history.push(to);
        onChange(e, to);
    } 

    return <div className={"user-control"}>
        <h3>{user.displayName}</h3>
        <nav>
            <li><button onClick={e => onClick(e, "/user/info")}>Mis Datos</button></li>
            <li><button onClick={e => onClick(e, "/user/orders")}>Ordenes</button></li>
            <li><button onClick={() => logOut()}>Salir</button></li>
        </nav>
    </div>
}

export default UserControl;