import './suggestion.scss';

import { Column, Flexbox, Image, RemixIcon, TextField } from 'shared/base';

import { Link } from 'react-router-dom';
import React from 'react';

interface ISuggestionProps {
  address: string;
  header: string;
  image: string;
  price: string;
  link: string;
}

export const Suggestion: React.FC<ISuggestionProps> = ({ address, header, image, price, link }) => {
  return (
    <Column rounded="50" p="0" mx="4" my="5" breakpoint="md" space="my" className="shadow my-3 suggestion-container">
      <Image rounded="top-50" src={image} className="suggestion-image" />
      <Flexbox vertical justifyContent="between" px="4" py="2" className="suggestion-description">
        <TextField tag="span" bold>
          {header}
        </TextField>
        <TextField tag="span">{address}</TextField>
        <Flexbox justifyContent="between">
          <TextField bold>{price}</TextField>
          <Link to={link} className="text-accent">
            <Flexbox>
              <TextField tag="span" mr="2">
                Подробнее
              </TextField>
              <RemixIcon name="arrow-right" mr="2" />
            </Flexbox>
          </Link>
        </Flexbox>
      </Flexbox>
    </Column>
  );
};
