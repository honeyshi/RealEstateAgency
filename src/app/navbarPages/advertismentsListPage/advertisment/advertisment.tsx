import './advertisment.scss';

import { Button, Column, Flexbox, RemixIcon, TextField } from 'shared/base';
import React, { useState } from 'react';

import { ImagesCarousel } from '../imagesCarousel';
import { Link } from 'react-router-dom';

interface IAdvertismentProps {
  header: string;
  address: string;
  metro: string;
  additionalInformation: string;
  payment: string;
  link: string;
  images: string[];
  id: string;
}

const imageUrls = [
  'https://images.unsplash.com/photo-1611095788646-86737a001141?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1616530277010-4c328803766f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
  'https://images.unsplash.com/photo-1616587428989-382dcaaaa012?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  'https://images.unsplash.com/photo-1616578274010-0ddd36f1417f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
];

export const Advertisment: React.FC<IAdvertismentProps> = ({
  header,
  address,
  metro,
  additionalInformation,
  payment,
  link,
  images,
  id,
}) => {
  const [favourite, setFavourite] = useState(false);
  const [hover, setHover] = useState(false);
  return (
    <Flexbox rounded="50" className="advertisment-container" mb="5">
      <Column size={5} className="images-carousel">
        <ImagesCarousel imageUrls={imageUrls} />
      </Column>
      <Column flex vertical justifyContent="between" size={7} p="4" pr="5">
        <Flexbox justifyContent="between">
          <TextField bold tag="h5" mb="3">
            {header}
          </TextField>
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
        </Flexbox>
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
