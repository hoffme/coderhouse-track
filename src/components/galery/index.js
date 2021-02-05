import React, { useState } from "react";

import "./style.css";

const Galery = ({images = []}) => {
    const [imgShowing, setImgShowing] = useState(images[0]);

    return <div className={"galery"}>
        <div className={"preview"}>
            {
                images.map(({url, alt}, index) => {
                    return <button key={index} onClick={() => setImgShowing({url, alt})}>
                        <img src={url} alt={alt} />
                    </button>
                })
            }
        </div>
        <div className={"showing"}>
            <img src={imgShowing.url} alt={imgShowing.alt} />
        </div>
    </div>;
}

export default Galery;