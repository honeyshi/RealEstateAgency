import React from 'react';
import classNames from 'classnames';

import { propsToSpace, SpaceProps } from './utils/spaceUtil';

export const NavbarContainer: React.FC<SpaceProps> = ({ children, ...other }) => {
  const classes = classNames('navbar-nav', propsToSpace(other));
  return <ul className={classes}>{children}</ul>;
};
