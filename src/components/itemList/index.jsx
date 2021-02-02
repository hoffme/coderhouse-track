import Item from '../item';

import "./style.css";

const ItemList = ({ items }) => {
    return <div className={"item-list"}>
        {
            items.map((itemInfo, index) => {
                return <Item
                    key={index}
                    info={itemInfo}
                    onAdd={newCount => { console.log(newCount) }}
                />
            })
        }
    </div>;
}

export default ItemList;