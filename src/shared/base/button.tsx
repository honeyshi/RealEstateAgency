import React from 'react';
import classNames from 'classnames';

import { propsToSpace, SpaceProps } from './utils/spaceUtil';
import { propsToSize, SizeProps } from './utils/sizeUtil';
import { ColorProps, propsToColor } from './utils/colorUtils';

interface IButtonProps extends SpaceProps, SizeProps, ColorProps, React.ButtonHTMLAttributes<any> {
  className?: string;
  fontLight?: boolean;
  light?: boolean;
  primary?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<IButtonProps> = ({
  fontLight,
  light,
  primary,
  className,
  onClick,
  children,
  ...other
}) => {
  const classes = classNames(
    'btn',
    { 'btn-light': light, 'font-weight-light': fontLight },
    { 'font-weight-light text-white bg-accent': primary },
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
