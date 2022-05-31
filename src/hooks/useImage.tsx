import { useEffect, useState } from 'react';

function useImage(rawImage?: string | string[]) {
  const [image, setImage] = useState<string[]>([]);
  useEffect(() => {
    let imgArray: string[];
    if (!rawImage) {
      imgArray = [];
    } else {
      imgArray = rawImage && Array.isArray(rawImage) ? rawImage : [rawImage];
    }
    setImage(imgArray);
  }, [rawImage]);
  return image;
}

export default useImage;
