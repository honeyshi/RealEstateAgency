import './propertyType.scss';

import { Flexbox, TextField } from 'shared/base';

import React from 'react';
import classNames from 'classnames';

interface IPropertyTypeProps {
  active: boolean;
  text: string;
  onClick: (e: React.MouseEvent) => void;
}

export const PropertyType: React.FC<IPropertyTypeProps> = ({ active, text, onClick, children }) => {
  const classes = classNames('shadow property-type-container', { active: active });
  return (
    <Flexbox vertical alignItems="center" p="2" mx="2" className={classes} onClick={onClick}>
      {children}
      <TextField tag="span" pt="1" px="2">
        {text}
      </TextField>
    </Flexbox>
  );
};
