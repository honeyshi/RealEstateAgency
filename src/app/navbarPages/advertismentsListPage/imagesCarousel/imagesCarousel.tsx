import './imagesCarousel.scss';

import React, { useMemo, useState } from 'react';

import { Flexbox, RemixIcon } from 'shared/base';
import { decrementIndex, incrementIndex } from 'core/paginationHandler';

import { ImagesCarouselItem } from './imagesCarouselItem';

export const ImagesCarousel: React.FC<{ imageUrls: string[] }> = ({ imageUrls }) => {
  const [activeImage, setActiveImage] = useState(0);
  const imageItemComponents = useMemo(() => {
    const imageItems = imageUrls.map((imageUrl, index) => {
      return <ImagesCarouselItem url={imageUrl} displayed={activeImage === index} key={imageUrl} />;
    });
    return imageItems;
  }, [activeImage, imageUrls]);
  return (
    <Flexbox justifyContent="center" alignItems="end" className="images-carousel-container">
      {imageItemComponents}
      <Flexbox className="arrows-container" mb="4">
        <RemixIcon
          name="arrow-left"
          pr="4"
          onClick={() => setActiveImage(decrementIndex(activeImage, imageUrls.length))}
        />
        <RemixIcon
          name="arrow-right"
          pl="4"
          onClick={() => setActiveImage(incrementIndex(activeImage, imageUrls.length))}
        />
      </Flexbox>
    </Flexbox>
  );
};
