import classNames from 'classnames';
import React from 'react';

interface IRemixIconProps {
  className?: string;
  name: string;
  style?: 'line' | 'fill';
  size?: 'fw' | 'xxs' | 'xs' | 'sm' | 'lg' | 'xl' | '1x' | '2x' | '3x';
}

export const RemixIcon: React.FC<IRemixIconProps> = ({ className, name, style = 'line', size }) => {
  const classes = classNames(
    `ri-${name}-${style}`,
    {
      [`ri-${size}`]: size != null,
    },
    className
  );
  return <i className={classes} />;
};
