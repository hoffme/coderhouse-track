import './style.scss';

import icon from '../../assets/icons/loading.gif';

const Loading = () => {
    return <div className={"loading"}> <img alt={"loading gif"} src={icon} /> </div>
}

export default Loading;