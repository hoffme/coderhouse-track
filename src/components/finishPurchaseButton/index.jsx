import { Link } from 'react-router-dom';
import './style.scss';

const FinishPurchaseButton = () => {
    return <Link to={"/cart/"} className={"button-finish-purchase"}>
        Finalizar Compra
    </Link>
}

export default FinishPurchaseButton;