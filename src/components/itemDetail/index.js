import React from "react";

import Galery from "../galery";
import ItemCount from "../itemCount";

import "./style.css";

const ItemDetail = ({info, onAdd}) => {
    const imagesGalery = [{url:info.pictureUrl, alt: info.pictureAlt}, ...info.galery];

    return <div className={"item-detail"}>
        <Galery images={imagesGalery} />
        <div className={"info"}>
            <h3 className={"title"}>{info.title}</h3>
            <b className={"price"}>{"$ " + info.price}</b><br/>
            <label className={"description"}>{info.description}</label>
            <ItemCount stock={info.stock} initial={1} onAdd={onAdd} />
        </div>
    </div>
}

export default ItemDetail;