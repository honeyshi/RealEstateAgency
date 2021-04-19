import { Column, Flexbox, Image, TextField } from 'shared/base';

import React from 'react';
import image from 'icons/empty.svg';

export const NoResultsPage: React.FC = ({ children }) => {
  return (
    <Flexbox vertical alignItems="center" mt="5">
      <Column size={6}>
        <Image src={image} mb="5" />
      </Column>
      <TextField classes="lead">{children}</TextField>
    </Flexbox>
  );
};
