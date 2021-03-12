import React, { useEffect, useState } from "react";

import "./style.scss";

const Slider = ({images = [], time = 5}) => {
    const [imgShowing, setImgShowing] = useState(images[0]);
    const [time] = useState(time);

    const back = () => {
        const actualIndex = images.indexOf(imgShowing);
        if (actualIndex <= 0) actualIndex = images.length;
        setImgShowing(images[actualIndex - 1]);
    }

    const next = () => {
        const actualIndex = images.indexOf(imgShowing);
        setImgShowing(images[actualIndex + 1]);
    }

    useEffect(() => {
        const interval = setInterval(next, time);
        return () => clearInterval(interval);
    }, [time, next]);

    return <div className={"slider"}>
        <button
            className={"button-back"}
            onClick={back}
        >{"<"}</button>
        <button
            className={"button-next"}
            onClick={next}
        >{">"}</button>
        <img src={imgShowing.url} alt={imgShowing.alt} />
    </div>;
}

export default Slider;