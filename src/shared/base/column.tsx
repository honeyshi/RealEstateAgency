import React from 'react';
import classNames from 'classnames';

import { SpaceProps, propsToSpace } from './utils/spaceUtil';
import { BorderProps, propsToBorder } from './utils/borderUtil';

interface IColumnProps extends SpaceProps, BorderProps {
  tag?: React.ElementType;
  className?: string;
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto';
}

export const Column: React.FC<IColumnProps> = ({ tag: Tag = 'div', className, size, children, ...other }) => {
  const classes = classNames(size ? `col-md-${size}` : 'col-md', propsToSpace(other), propsToBorder(other), className);
  return (
    <Tag className={classes} {...other}>
      {children}
    </Tag>
  );
};
