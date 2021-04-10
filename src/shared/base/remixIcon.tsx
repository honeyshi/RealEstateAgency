import { ColorProps, propsToColor } from './utils/colorUtils';
import { SpaceProps, propsToSpace } from './utils/spaceUtil';

import React from 'react';
import classNames from 'classnames';

interface IRemixIconProps extends React.HTMLAttributes<any>, SpaceProps, ColorProps {
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
    propsToColor(other),
    className
  );
  return <i className={classes} {...other} />;
};
