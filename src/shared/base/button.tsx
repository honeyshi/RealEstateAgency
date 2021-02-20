import React from 'react';
import classNames from 'classnames';
import { propsToSpace, SpaceProps } from './utils/spaceUtil';
import { propsToSize, SizeProps } from './utils/sizeUtil';
import { ColorProps, propsToColor } from './utils/colorUtils';

import './button.scss';

interface IButtonProps extends SpaceProps, SizeProps, ColorProps {
  className?: string;
  fontLight?: boolean;
  light?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<IButtonProps> = ({ fontLight, light, className, onClick, children, ...other }) => {
  const classes = classNames(
    'btn',
    { 'btn-light': light, 'font-weight-light': fontLight },
    propsToSpace(other),
    propsToSize(other),
    propsToColor(other),
    className
  );
  return (
    <button className={classes} type="button" onClick={onClick}>
      {children}
    </button>
  );
};
