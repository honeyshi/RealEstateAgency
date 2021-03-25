import classNames from 'classnames';
import React from 'react';

interface ImagesCarouselItemProps {
  displayed: boolean;
  url: string;
}

export const ImagesCarouselItem: React.FC<ImagesCarouselItemProps> = ({ displayed, url }) => {
  return (
    <div className={classNames('images-carousel-item', { 'd-none': !displayed })}>
      <img alt="" src={url} />
    </div>
  );
};
