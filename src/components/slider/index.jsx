import React, { useCallback, useEffect, useState } from "react";

import "./style.scss";

const Slider = ({images = [], time = 5}) => {
    const [imgShowing, setImgShowing] = useState(images[0]);
    const [timeNext] = useState(time);

    const back = () => {
        let actualIndex = images.indexOf(imgShowing);
        if (actualIndex <= 0) actualIndex = images.length;
        setImgShowing(images[actualIndex - 1]);
    }

    const next = useCallback(
        () => {
            let actualIndex = images.indexOf(imgShowing);
            if (actualIndex >= images.length - 1) actualIndex = -1;
            setImgShowing(images[actualIndex + 1]);
        },
        [images, imgShowing, setImgShowing]
    )

    useEffect(() => {
        const interval = setInterval(next, timeNext * 1000);
        return () => clearInterval(interval);
    }, [timeNext, next]);

    return <div className={"slider"}>
        <button
            className={"button-back"}
            onClick={back}
        >{"<"}</button>
        <button
            className={"button-next"}
            onClick={next}
        >{">"}</button>
        <img src={imgShowing.src} alt={imgShowing.alt} />
    </div>;
}

export default Slider;