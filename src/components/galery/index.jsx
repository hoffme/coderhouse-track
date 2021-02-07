import React, { useState } from "react";

import "./style.scss";

const Galery = ({images = []}) => {
    const [imgShowing, setImgShowing] = useState(images[0]);

    return <div className={"galery"}>
        <div className={"showing"}>
            <button
                className={"button-back"}
                onClick={() => {
                    const actualIndex = images.indexOf(imgShowing);
                    setImgShowing(images[actualIndex - 1]);
                }}
                disabled={images.indexOf(imgShowing) === 0}
            >{"<"}</button>
            <button
                className={"button-next"}
                onClick={() => {
                    const actualIndex = images.indexOf(imgShowing);
                    setImgShowing(images[actualIndex + 1]);
                }}
                disabled={images.indexOf(imgShowing) === (images.length - 1)}
            >{">"}</button>
            <img src={imgShowing.url} alt={imgShowing.alt} />
        </div>
        <div className={"preview"}>
            {
                images.map((img, index) => {
                    return <button
                        className={(img === imgShowing) ? 'selected' : null}
                        key={index}
                        onClick={() => setImgShowing(img)}
                    >
                        <img src={img.url} alt={img.alt} />
                    </button>
                })
            }
        </div>
    </div>;
}

export default Galery;