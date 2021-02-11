import React from "react";

import Galery from "../galery";

import ItemControl from "../itemControl";

import "./style.scss";

const ItemDetail = ({info}) => {
    return <div className={"item-detail"}>
        <Galery images={info.galery} />
        <div className={"info"}>
            <h3 className={"title"}>{info.title}</h3>
            <b className={"price"}>{"$ " + info.price}</b>
            <label className={"description"}>{info.description}</label>
            <ItemControl info={info} />
        </div>
    </div>
}

export default ItemDetail;