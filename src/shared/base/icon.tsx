import React from 'react';
import classNames from 'classnames';

import { propsToSpace, SpaceProps } from './utils/spaceUtil';

import './iconStyle.scss';

export type ImportedIcon = 'pin';

interface IconProps extends SpaceProps {
  name: ImportedIcon;
}

export const Icon: React.FC<IconProps> = ({ name, ...other }) => {
  const classes = classNames(`gg-${name}`, propsToSpace(other));
  return <i className={classes}></i>;
};
