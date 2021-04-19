import { Column, Flexbox, RemixIcon, TextField } from 'shared/base';

import React from 'react';

interface InformationColumnProps {
  header: string;
  iconName: string;
  text: string;
}

export const AdvertismentDescriptionColumn: React.FC<InformationColumnProps> = ({ header, iconName, text }) => {
  return (
    <Column size={3} p="0">
      <TextField classes="information-header">{header}</TextField>
      <Flexbox alignItems="center">
        <RemixIcon name={iconName} size="lg" mr="3" />
        <TextField tag="h6" mb="0">
          {text}
        </TextField>
      </Flexbox>
    </Column>
  );
};
