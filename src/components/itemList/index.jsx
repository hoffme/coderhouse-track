import Item from '../item';

import "./style.scss";

const ItemList = ({ items }) => {
    return <div className={"item-list"}>
        {
            items.map((itemInfo, index) => {
                return <Item
                    key={index}
                    info={itemInfo}
                    onClick={() => { alert("abrir item: " + itemInfo.title) }}
                />
            })
        }
    </div>;
}

export default ItemList;