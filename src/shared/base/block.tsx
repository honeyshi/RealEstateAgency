import React from 'react';
import classNames from 'classnames';

import { SpaceProps, propsToSpace } from './utils/spaceUtil';
import { ColorProps, propsToColor } from './utils/colorUtils';

interface Props extends SpaceProps, ColorProps {
  tag?: React.ElementType;
  className?: string;
  inline?: boolean;
}

export const Block: React.FC<Props> = ({ tag: Tag = 'div', className, inline, children, ...other }) => {
  const classes = classNames(inline ? 'd-inline' : 'd-block', propsToSpace(other), propsToColor(other), className);
  return (
    <Tag className={classes} {...other}>
      {children}
    </Tag>
  );
};
