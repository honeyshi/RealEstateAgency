import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { propsToSpace, SpaceProps } from './utils/spaceUtil';

interface INavbarItemProps extends SpaceProps {
  isActive?: boolean;
  linkClass?: string;
  text?: string;
  to: string;
  onClick?: () => void;
}

export const NavbarItem: React.FC<INavbarItemProps> = ({
  isActive,
  linkClass,
  text,
  to,
  onClick,
  children,
  ...other
}) => {
  const classes = classNames('nav-item', { active: isActive }, propsToSpace(other));
  return (
    <li className={classes}>
      <Link to={to} className={classNames('nav-link', linkClass)} onClick={onClick}>
        {text}
        {children}
      </Link>
    </li>
  );
};
