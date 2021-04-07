import { BorderProps, propsToBorder } from './utils/borderUtil';
import { SpaceProps, propsToSpace } from './utils/spaceUtil';

import React from 'react';
import classNames from 'classnames';

interface IColumnProps extends SpaceProps, BorderProps {
  tag?: React.ElementType;
  className?: string;
  flex?: boolean;
  vertical?: boolean;
  justifyContent?: 'start' | 'end' | 'center' | 'between' | 'around';
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto';
}

export const Column: React.FC<IColumnProps> = ({
  tag: Tag = 'div',
  className,
  flex,
  vertical,
  justifyContent,
  size,
  children,
  ...other
}) => {
  const classes = classNames(
    size ? `col-md-${size}` : 'col-md',
    { 'd-flex': flex },
    vertical ? 'flex-column' : 'flex-row',
    {
      [`justify-content-${justifyContent}`]: justifyContent != null,
    },
    propsToSpace(other),
    propsToBorder(other),
    className
  );
  return (
    <Tag className={classes} {...other}>
      {children}
    </Tag>
  );
};
