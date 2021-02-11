import './style.scss';

import { useState } from "react";

import FinishPurchaseButton from '../finishPurchaseButton';
import ItemCount from '../itemCount';
import ItemOutStock from '../itemOutStock';

const onAddEvent = (info, count) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), 500);
    });
}

const ItemControl = ({info}) => {
    const [added, setAdded] = useState(info.count > 0);

    if (info.stock === 0) {
        return <ItemOutStock />;
    }

    if (added) {
        return <FinishPurchaseButton />;
    }

    return <ItemCount
        stock={info.stock}
        count={info.count}
        onAdd={count => {
            onAddEvent(info, count)
                .then(() => setAdded(true))
                .catch(err => console.error(err));    
        }}
    />;
}

export default ItemControl;