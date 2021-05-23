import { Block } from 'shared/base';
import React from 'react';

export const DefaultListBlock: React.FC = ({ children }) => {
  return (
    <Block mr="5" mt="3" mb="5">
      {children}
    </Block>
  );
};
