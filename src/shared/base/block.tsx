import React from 'react';
import classNames from 'classnames';

import { SpaceProps, propsToSpace } from './utils/spaceUtil';

interface Props extends SpaceProps {
  tag?: React.ElementType;
  className?: string;
  inline?: boolean;
}

export const Block: React.FC<Props> = ({ tag: Tag = 'div', className, inline, children, ...other }) => {
  const classes = classNames(inline ? 'd-inline' : 'd-block', propsToSpace(other), className);
  return (
    <Tag className={classes} {...other}>
      {children}
    </Tag>
  );
};
