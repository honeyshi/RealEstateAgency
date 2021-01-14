import React from 'react';
import classNames from 'classnames';
import { propsToSpace, SpaceProps } from './utils/spaceUtil';

import './button.scss';

interface IButtonProps extends SpaceProps {
  className?: string;
  light?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<IButtonProps> = ({ light, className, onClick, children, ...other }) => {
  const classes = classNames('btn', { 'btn-light': light }, propsToSpace(other), className);
  return (
    <button className={classes} type="button" onClick={onClick}>
      {children}
    </button>
  );
};
