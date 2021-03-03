import './style.scss';

import { Link } from 'react-router-dom';

import userIcon from '../../../assets/icons/usuario.svg';

const UserButton = () => {
    return <Link to={"/user/"} className={"button-user"}>
        <img src={userIcon} alt={"icon user"} />
    </Link>;
}

export default UserButton;