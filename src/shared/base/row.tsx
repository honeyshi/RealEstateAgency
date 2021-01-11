import React from 'react';
import classNames from 'classnames';

import { SpaceProps, propsToSpace } from './utils/spaceUtil';

interface Props extends SpaceProps {
  tag?: React.ElementType;
  className?: string;
  justifyContent?: 'start' | 'end' | 'center' | 'between' | 'around';
  alignItems?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
}

export const Row: React.FC<Props> = ({
  tag: Tag = 'div',
  className,
  justifyContent,
  alignItems,
  children,
  ...other
}) => {
  const classes = classNames(
    'row',
    {
      [`justify-content-md-${justifyContent}`]: justifyContent != null,
      [`align-items-md-${alignItems}`]: alignItems != null,
    },
    propsToSpace(other),
    className
  );
  return (
    <Tag className={classes} {...other}>
      {children}
    </Tag>
  );
};
