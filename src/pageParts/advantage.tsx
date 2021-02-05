import React from 'react';
import { Block, Column, Flexbox, TextField } from 'shared/base';

interface IAdvantageProps {
  header: string;
  description: string;
}

export const Advantage: React.FC<IAdvantageProps> = ({ header, description, children }) => {
  return (
    <Column size={3} rounded="50" py="5" px="3" mx="4" mb="5" className="shadow">
      <Flexbox vertical alignItems="center">
        <Block
          rounded="circle"
          bg="light"
          mb="5"
          style={{ height: '7.5rem', width: '7.5rem' }}
          className="text-center icon-container">
          {children}
        </Block>
        <TextField center tag="h2" mb="5">
          {header}
        </TextField>
        <TextField center>{description}</TextField>
      </Flexbox>
    </Column>
  );
};
