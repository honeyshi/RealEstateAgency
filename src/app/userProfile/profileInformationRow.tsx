import { Column, Row, TextField } from 'shared/base';

import React from 'react';

export const ProfileInfromationRow: React.FC<{ row?: boolean; label: string }> = ({ row, label, children }) => {
  return (
    <Row mt="5" mb="4" w="100">
      <Column size={2} flex className="align-items-center">
        <TextField tag="span">{label}</TextField>
      </Column>
      <Column flex vertical={!row} size={9}>
        {children}
      </Column>
    </Row>
  );
};
