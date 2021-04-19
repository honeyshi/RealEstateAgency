import classNames from 'classnames';
import React from 'react';

import { Image } from 'shared/base';

interface ImagesCarouselItemProps {
  displayed: boolean;
  url: string;
}

export const ImagesCarouselItem: React.FC<ImagesCarouselItemProps> = ({ displayed, url }) => {
  return (
    <div className={classNames('images-carousel-item', { 'd-none': !displayed })}>
      <Image src={url} />
    </div>
  );
};
