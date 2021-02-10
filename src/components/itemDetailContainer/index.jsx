import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "../itemDetail";

import "./style.scss";

const getItem = (itemId) => {
    return new Promise((resolve, reject) => {
        // https://www.npoint.io/docs/5d5547aef66f65d0d13c edit
        fetch("https://api.npoint.io/5d5547aef66f65d0d13c/" + itemId)
            .then(data => data.json())
            .then(resolve)
            .catch(reject);
    });
}

const ItemDetailContainer = () => {
    const [info, setInfo] = useState();
    const { itemId } = useParams('itemId');

    useEffect(() => {
        getItem(itemId)
            .then(info => setInfo(info))
            .catch(err => console.error(err));

        return () => {};
    }, [itemId]);

    return <div className={"item-detail-container app-width"}>
        {
            (info) ?
                <ItemDetail info={info} /> :
                <label>Loading ...</label>
        }
    </div>
}

export default ItemDetailContainer;