import { ColorProps, propsToColor } from './utils/colorUtils';
import { SizeProps, propsToSize } from './utils/sizeUtil';
import { SpaceProps, propsToSpace } from './utils/spaceUtil';

import React from 'react';
import classNames from 'classnames';

interface IButtonProps extends SpaceProps, SizeProps, ColorProps, React.ButtonHTMLAttributes<any> {
  className?: string;
  fontLight?: boolean;
  light?: boolean;
  primary?: boolean;
  secondary?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<IButtonProps> = ({
  fontLight,
  light,
  primary,
  secondary,
  className,
  onClick,
  children,
  ...other
}) => {
  const classes = classNames(
    'btn',
    { 'btn-light': light, 'font-weight-light': fontLight },
    { 'font-weight-light text-white bg-accent': primary },
    { 'font-weight-light bg-light': secondary },
    propsToSpace(other),
    propsToSize(other),
    propsToColor(other),
    className
  );
  return (
    <button className={classes} type="button" onClick={onClick} {...other}>
      {children}
    </button>
  );
};
