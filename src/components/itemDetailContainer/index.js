import React, { useEffect, useState } from "react";
import ItemDetail from "../itemDetail";

import "./style.css";

const ItemDetailContainer = () => {
    const [info, setInfo] = useState();
    
    useEffect(() => {
        new Promise(resolve => {
            setTimeout(() => {
                setInfo({
                    id: "asd",
                    title: "Fernet 1L",
                    description:"bebida alcohólica amarga del tipo amaro elaborada a partir de varios tipos de hierbas, que son maceradas en alcohol de vino.",
                    stock: 59,
                    discount: 0,
                    galery: [
                        {
                            alt: "beer",
                            url: "https://www.fullescabio.com/productos/1612465161/01_1612465161.jpg?v=231220"  
                        },
                        {
                            alt: "beer",
                            url: "https://images.vexels.com/media/users/3/129956/isolated/preview/27c9746749f6da553d790fbbac71c986-copa-de-icono-de-bebida-de-cerveza-by-vexels.png"  
                        },
                        {
                            alt: "beer",
                            url: "https://images.vexels.com/media/users/3/129956/isolated/preview/27c9746749f6da553d790fbbac71c986-copa-de-icono-de-bebida-de-cerveza-by-vexels.png"  
                        },
                    ],
                    price: 500.00,
                    pictureAlt: "beer",
                    pictureUrl: "https://images.vexels.com/media/users/3/129956/isolated/preview/27c9746749f6da553d790fbbac71c986-copa-de-icono-de-bebida-de-cerveza-by-vexels.png"   
                })
            }, 2000);
        })

        return () => {};
    }, []);

    return <div className={"item-detail-container app-width"}>
        {
            (info) ?
                <ItemDetail info={info} /> :
                <label>Loading ...</label>
        }
    </div>
}

export default ItemDetailContainer;