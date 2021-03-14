import classNames from 'classnames';
import React from 'react';
import { propsToSpace, SpaceProps } from './utils/spaceUtil';

interface IRemixIconProps extends React.HTMLAttributes<any>, SpaceProps {
  className?: string;
  name: string;
  styleType?: 'line' | 'fill';
  size?: 'fw' | 'xxs' | 'xs' | 'sm' | 'lg' | 'xl' | '1x' | '2x' | '3x';
}

export const RemixIcon: React.FC<IRemixIconProps> = ({ className, name, styleType = 'line', size, ...other }) => {
  const classes = classNames(
    `ri-${name}-${styleType}`,
    {
      [`ri-${size}`]: size != null,
    },
    propsToSpace(other),
    className
  );
  return <i className={classes} {...other} />;
};
