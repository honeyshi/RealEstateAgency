import { Block, Column, Flexbox, RemixIcon, TextField } from 'shared/base';

import { Link } from 'react-router-dom';
import React from 'react';

interface ISuggestionProps {
  address: string;
  header: string;
  price: string;
  link: string;
}

export const Suggestion: React.FC<ISuggestionProps> = ({ address, header, price, link }) => {
  return (
    <Column rounded="50" p="0" mx="4" my="5" breakpoint="md" space="my" className="shadow my-3">
      <Block bg="light" rounded="top-50" style={{ height: '10rem' }} />
      <Flexbox vertical px="4" py="2">
        <TextField tag="span" bold mb="2">
          {header}
        </TextField>
        <TextField tag="span" mb="2">
          {address}
        </TextField>
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
