import './style.scss';

import { Link } from 'react-router-dom';

import WindowButton from '../../windowButton';

import userIcon from '../../../assets/icons/usuario.svg';

const UserButton = () => {
    return <WindowButton
        className={"button-user"}
        contentButton={<img src={userIcon} alt={"icon user"} />}
    >
        <h3>Usuario</h3>
        <Link to={"/user/"}>Info</Link>
    </WindowButton>;
}

export default UserButton;