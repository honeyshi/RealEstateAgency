import { Button, Modal, RemixIcon } from 'shared/base';
import React, { useState } from 'react';

import { invalidModalState } from 'data/values';
import { performAddToFavouriteRequest } from 'core/favourite/addToFavourite';
import { performDeleteFromFavouriteRequest } from 'core/favourite/deleteFromFavourite';

interface IFavouriteButtonProps {
  isFavourite?: boolean;
  small?: boolean;
  id: string;
}

export const FavouriteButton: React.FC<IFavouriteButtonProps> = ({ isFavourite, small, id }) => {
  const [favourite, setFavourite] = useState(isFavourite);
  const [hover, setHover] = useState(false);
  const [modalProps, setModalProps] = useState({ ...invalidModalState, show: false });

  const handleModalClose = () => {
    setModalProps({ ...invalidModalState, show: false });
  };

  const toggleFavorite = async () => {
    try {
      favourite ? await performDeleteFromFavouriteRequest(id) : await performAddToFavouriteRequest(id);
      setFavourite(!favourite);
    } catch (error) {
      setModalProps({ ...invalidModalState, show: true });
    }
  };

  return (
    <>
      <Modal valid={modalProps.valid} text={modalProps.text} show={modalProps.show} handleClose={handleModalClose} />
      <Button
        {...(small && { px: '2', pt: '2', pb: '0' })}
        className="shadow add-favourite"
        onClick={() => toggleFavorite()}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
        {!favourite && !hover && <RemixIcon name="heart-3" />}
        {(favourite || hover) && <RemixIcon name="heart-3" styleType="fill" className="text-danger" />}
      </Button>
    </>
  );
};
