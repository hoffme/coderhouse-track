import { Link } from 'react-router-dom';
import { useContext } from 'react';

import UserContext from '../../../contexts/user';

import './style.scss';

const UserWindowInfo = () => {
    const {user, logOut} = useContext(UserContext);

    return <>
        <h3>{user.displayName}</h3>
        <nav className={"user-nav"}>
            <li><Link to={"/user/info"}>Mis Datos</Link></li>
            <li><Link to={"/user/orders"}>Ordenes</Link></li>
            <li><button onClick={() => logOut()}>Salir</button></li>
        </nav>
    </>
}

export default UserWindowInfo;