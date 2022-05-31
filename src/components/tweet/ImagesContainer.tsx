import React from 'react';
import useImage from '../../hooks/useImage';
import TweetConfig from '../../types/TweetConfig';

function ImagesContainer({ config }: { config: TweetConfig }) {
  const image = useImage(config.image);

  switch (image.length) {
    case 1:
      return (
        <div className="image-container">
          <img src={image[0]} alt="" />
        </div>
      );
    case 2:
      return (
        <div className="images-container two-image-container">
          <OneImageColumn side="left" image={image[0]} />
          <div className="vertical-spacer" />
          <OneImageColumn side="right" image={image[1]} />
        </div>
      );
    case 3:
      return (
        <div className="images-container three-image-container">
          <OneImageColumn side="left" image={image[0]} />
          <div className="vertical-spacer" />
          <TwoImagesColumn side="right" image1={image[1]} image2={image[2]} />
        </div>
      );
    case 4:
      return (
        <div className="images-container four-image-container">
          <TwoImagesColumn side="left" image1={image[0]} image2={image[2]} />
          <div className="vertical-spacer" />
          <TwoImagesColumn side="right" image1={image[1]} image2={image[3]} />
        </div>
      );
    default:
      return <></>;
  }

  function OneImageColumn({ side, image }: { side: string; image: string }) {
    side = sanitizeSide(side);
    const borderSide = getBorderSide(side);
    return (
      <div
        className={`full-height-image ${side}-image t${borderSide} b${borderSide}`}
      >
        <img src={image} alt="" />
      </div>
    );
  }

  function TwoImagesColumn({
    side,
    image1,
    image2,
  }: {
    side: string;
    image1: string;
    image2: string;
  }) {
    side = sanitizeSide(side);
    const borderSide = getBorderSide(side);
    return (
      <div className={`${side}-col`}>
        <div className={`half-height-image t${borderSide}`}>
          <img src={image1} alt="" />
        </div>
        <div className="horizontal-spacer" />
        <div className={`half-height-image b${borderSide}`}>
          <img src={image2} alt="" />
        </div>
      </div>
    );
  }

  function sanitizeSide(side: string) {
    return side === 'right' || side === 'left' ? side : 'left';
  }

  function getBorderSide(side: string) {
    return side.charAt(0);
  }
}

export default ImagesContainer;
