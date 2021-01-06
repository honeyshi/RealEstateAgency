import React from 'react';
import classNames from 'classnames';
import { propsToSpace, SpaceProps } from './utils/spaceUtil';

import './button.scss';

interface IButtonProps extends SpaceProps {
  light?: boolean;
}

export const Button: React.FC<IButtonProps> = ({ light, children, ...other }) => {
  const classes = classNames('btn', { 'btn-light': light }, propsToSpace(other));
  return (
    <button className={classes} type="button">
      {children}
    </button>
  );
};
