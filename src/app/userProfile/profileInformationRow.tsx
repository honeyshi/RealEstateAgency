import { Column, Row, TextField } from 'shared/base';

import React from 'react';

export const ProfileInfromationRow: React.FC<{ label: string }> = ({ label, children }) => {
  return (
    <Row mt="5" mb="4">
      <Column size={2} flex className="align-items-center">
        <TextField tag="span">{label}</TextField>
      </Column>
      <Column size={9}>{children}</Column>
    </Row>
  );
};
