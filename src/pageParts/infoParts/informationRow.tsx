import { Column, Flexbox, TextField } from 'shared/base';

import React from 'react';

interface InformationRowProps {
  header: string;
}

export const InformationRow: React.FC<InformationRowProps> = ({ header, children }) => {
  return (
    <Flexbox>
      <Column size={5}>
        <TextField bold mr="3">
          {header}
        </TextField>
      </Column>
      <Column size={7}>
        <TextField>{children}</TextField>
      </Column>
    </Flexbox>
  );
};
