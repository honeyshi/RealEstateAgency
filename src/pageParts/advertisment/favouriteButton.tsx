import { Button, RemixIcon } from 'shared/base';
import React, { useState } from 'react';

export const FavouriteButton: React.FC<{ isFavourite?: boolean; small?: boolean }> = ({ isFavourite, small }) => {
  const [favourite, setFavourite] = useState(isFavourite);
  const [hover, setHover] = useState(false);
  return (
    <Button
      {...(small && { px: '2', pt: '2', pb: '0' })}
      className="shadow add-favourite"
      onClick={() => setFavourite(!favourite)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      {!favourite && !hover && <RemixIcon name="heart-3" />}
      {(favourite || hover) && <RemixIcon name="heart-3" styleType="fill" className="text-danger" />}
    </Button>
  );
};
