import React from 'react';
import classNames from 'classnames';

import { SpaceProps, propsToSpace } from './utils/spaceUtil';

import './container.scss';

interface Props extends SpaceProps {
  tag?: React.ElementType;
  className?: string;
  flex?: boolean;
  nonFluid?: boolean;
  small?: boolean;
}

export const Container: React.FC<Props> = ({
  tag: Tag = 'div',
  flex,
  nonFluid,
  small,
  className,
  children,
  ...other
}) => {
  const classes = classNames(
    { 'd-flex': flex },
    nonFluid && !small && 'container',
    !nonFluid && !small && 'container-fluid',
    nonFluid && small && 'container-small',
    propsToSpace(other),
    className
  );
  return (
    <Tag className={classes} {...other}>
      {children}
    </Tag>
  );
};
