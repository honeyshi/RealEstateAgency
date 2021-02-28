import React from 'react';
import { TextField } from 'shared/base';

export const SectionHeader: React.FC = ({ children }) => {
  return (
    <TextField bold tag="h5" mt="5" mb="4">
      {children}
    </TextField>
  );
};
