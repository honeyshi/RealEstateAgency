import classNames from 'classnames';
import React from 'react';
import { Column, Flexbox, TextField } from 'shared/base';

import './propertyType.scss';

interface IPropertyTypeProps {
  active: boolean;
  text: string;
  onClick: (e: React.MouseEvent) => void;
}

export const PropertyType: React.FC<IPropertyTypeProps> = ({ active, text, onClick, children }) => {
  const classes = classNames('shadow property-type-container', { active: active });
  return (
    <Column size={3} rounded="50" py="5" px="1" className={classes}>
      <Flexbox vertical alignItems="center" onClick={onClick}>
        {children}
        <TextField tag="span" pt="4">
          {text}
        </TextField>
      </Flexbox>
    </Column>
  );
};
