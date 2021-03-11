import { useState, useEffect } from "react";

function useImage(rawImage) {
    const [image, setImage] = useState([]);
    useEffect(() => {
        let imgArray;
        if (!rawImage) {
            imgArray = [];
        } else {
            imgArray = rawImage && typeof rawImage === "string" ? [rawImage] : rawImage;
        }
        setImage(imgArray);
    }, [rawImage]);
    return image;
}

export default useImage;