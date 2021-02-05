import React from 'react';
import classNames from 'classnames';

import { propsToSpace, SpaceProps } from './utils/spaceUtil';

import './section.scss';

interface ISectionProps extends SpaceProps {
  bottom?: boolean;
  className?: string;
}

export const Section: React.FC<ISectionProps> = ({ bottom, className, children, ...other }) => {
  const classes = classNames({ 'section-bottom': bottom }, propsToSpace(other), className);
  return <section className={classes}>{children}</section>;
};
