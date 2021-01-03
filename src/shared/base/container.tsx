import React from 'react';
import classNames from 'classnames';

import { SpaceProps, propsToSpace } from './utils/spaceUtil';

interface Props extends SpaceProps {
  tag?: React.ElementType;
  className?: string;
  nonFluid?: boolean;
}

export const Container: React.FC<Props> = ({ tag: Tag = 'div', nonFluid, className, children, ...other }) => {
  const classes = classNames(nonFluid ? 'container' : 'container-fluid', propsToSpace(other), className);
  return (
    <Tag className={classes} {...other}>
      {children}
    </Tag>
  );
};
