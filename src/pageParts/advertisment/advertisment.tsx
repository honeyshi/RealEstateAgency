import './advertisment.scss';

import { Badge, Button, Column, Flexbox, RemixIcon, TextField } from 'shared/base';
import React, { useState } from 'react';

import { AdvertismentMenu } from './advertismentMenu';
import { ImagesCarousel } from 'pageParts/imagesCarousel';
import { Link } from 'react-router-dom';
import { Statuses } from 'data/values';
import { mapStatusToText } from 'core/statusToText';

interface IAdvertismentProps {
  header: string;
  address: string;
  metro: string;
  additionalInformation: string;
  payment: string;
  link: string;
  images: string[];
  id: string;
  withMenu?: boolean;
  admin?: boolean;
  status?: number;
}

export const Advertisment: React.FC<IAdvertismentProps> = ({
  header,
  address,
  metro,
  additionalInformation,
  payment,
  link,
  images,
  id,
  withMenu,
  admin,
  status,
}) => {
  const [favourite, setFavourite] = useState(false);
  const [hover, setHover] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Flexbox rounded="50" className="advertisment-container" mb="5">
      <Column size={5} className="images-carousel">
        <ImagesCarousel imageUrls={images} />
      </Column>
      <Column flex vertical justifyContent="between" size={7} p="4" pr="5">
        {withMenu && !admin && (
          <Badge danger={status === Statuses.blocked || status === Statuses.declined}>{mapStatusToText(status)}</Badge>
        )}
        <Flexbox justifyContent="between">
          <TextField bold tag="h5" mb="3">
            {header}
          </TextField>
          {withMenu ? (
            <Button className="shadow add-favourite" px="2" pt="2" pb="0" onClick={() => setShowMenu(!showMenu)}>
              <RemixIcon name="menu" size="sm" />
            </Button>
          ) : (
            <Button
              className="shadow add-favourite"
              px="2"
              pt="2"
              pb="0"
              onClick={() => setFavourite(!favourite)}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}>
              {!favourite && !hover && <RemixIcon name="heart-3" size="sm" />}
              {(favourite || hover) && <RemixIcon name="heart-3" styleType="fill" size="sm" className="text-danger" />}
            </Button>
          )}
        </Flexbox>
        {withMenu && (
          <Flexbox justifyContent="end">
            <AdvertismentMenu admin={admin} status={status} show={showMenu} id={id} />
          </Flexbox>
        )}
        <TextField tag="span" mb="2">
          {address}
        </TextField>
        {metro !== '' && metro !== 'Не указано' && (
          <Flexbox alignItems="center" mb="2">
            <RemixIcon size="xl" name="train" className="text-danger" mr="3" />
            <TextField tag="span">{metro}</TextField>
          </Flexbox>
        )}
        <TextField tag="span" mb="4">
          {additionalInformation}
        </TextField>
        <Flexbox justifyContent="between">
          <TextField bold tag="h5">
            {`${payment} ₽/месяц`}
          </TextField>
          <Link to={link} className="text-accent stretched-link">
            <Flexbox>
              <TextField tag="span" mr="3">
                Подробнее
              </TextField>
              <RemixIcon name="arrow-right" />
            </Flexbox>
          </Link>
        </Flexbox>
      </Column>
    </Flexbox>
  );
};
