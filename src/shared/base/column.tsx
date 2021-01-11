import React from 'react';
import classNames from 'classnames';

import { SpaceProps, propsToSpace } from './utils/spaceUtil';

interface IColumnProps extends SpaceProps {
  tag?: React.ElementType;
  className?: string;
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto';
}

export const Column: React.FC<IColumnProps> = ({ tag: Tag = 'div', className, size, children, ...other }) => {
  const classes = classNames(size ? `col-md-${size}` : 'col-md', propsToSpace(other), className);
  return (
    <Tag className={classes} {...other}>
      {children}
    </Tag>
  );
};
