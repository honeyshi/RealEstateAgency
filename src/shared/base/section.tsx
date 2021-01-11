import React from 'react';
import classNames from 'classnames';

import { propsToSpace, SpaceProps } from './utils/spaceUtil';

import './section.scss';

interface ISectionProps extends SpaceProps {
  className?: string;
}

export const Section: React.FC<ISectionProps> = ({ className, children, ...other }) => {
  const classes = classNames(propsToSpace(other), className);
  return <section className={classes}>{children}</section>;
};
