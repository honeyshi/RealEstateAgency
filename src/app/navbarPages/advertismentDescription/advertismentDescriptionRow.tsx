import { Column, Flexbox, TextField } from 'shared/base';

import React from 'react';

interface InformationRowProps {
  header: string;
  text: string;
}

export const AdvertismentDescriptionRow: React.FC<InformationRowProps> = ({ header, text }) => {
  return (
    <Flexbox>
      <Column size={5}>
        <TextField bold mr="3">
          {header}
        </TextField>
      </Column>
      <Column size={7}>
        <TextField>{text}</TextField>
      </Column>
    </Flexbox>
  );
};
