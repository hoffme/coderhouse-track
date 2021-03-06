import { Link } from 'react-router-dom';
import { useContext } from 'react';

import UserContext from '../../../contexts/user';

import './style.scss';

const UserControl = () => {
    const {loggedIn, loading, user, logOut} = useContext(UserContext);

    if (loading) return <label>Loading ...</label>;

    if (!loggedIn) return <></>;

    return <div className={"user-control"}>
        <h3>{user.displayName}</h3>
        <nav>
            <li><Link to={"/user/info"}>Mis Datos</Link></li>
            <li><Link to={"/user/orders"}>Ordenes</Link></li>
            <li><button onClick={() => logOut()}>Salir</button></li>
        </nav>
    </div>
}

export default UserControl;