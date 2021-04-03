import './advantage.scss';

import { Block, Column, Flexbox, TextField } from 'shared/base';

import React from 'react';

interface IAdvantageProps {
  header: string;
  description: string;
}

export const Advantage: React.FC<IAdvantageProps> = ({ header, description, children }) => {
  return (
    <Column size={3} rounded="50" pt="5" pb="3" px="3" mx="4" mb="5" className="shadow">
      <Flexbox vertical alignItems="center">
        <Block rounded="circle" mb="4" className="text-center advantage-icon-container">
          {children}
        </Block>
        <TextField center tag="h4" mb="4">
          {header}
        </TextField>
        <TextField center mx="3">{description}</TextField>
      </Flexbox>
    </Column>
  );
};
