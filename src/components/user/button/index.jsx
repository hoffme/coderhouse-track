import { useContext } from 'react';

import UserContext from '../../../contexts/user';

import WindowButton from '../../windowButton';

import UserWindowInfo from '../windowInfo';
import UserWindowLogin from '../windowLogin';

import userIcon from '../../../assets/icons/usuario.svg';

import './style.scss';

const UserButton = () => {
    const {loggedIn} = useContext(UserContext);

    return <WindowButton
        className={"button-user"}
        contentButton={<img src={userIcon} alt={"icon user"} />}
    >
        { loggedIn ? <UserWindowInfo /> : <UserWindowLogin /> }
    </WindowButton>;
}

export default UserButton;