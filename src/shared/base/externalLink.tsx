import React from 'react';
import classNames from 'classnames';
import { ColorProps, propsToColor } from './utils/colorUtils';
import { propsToSpace, SpaceProps } from './utils/spaceUtil';

interface ILinkProps extends SpaceProps, ColorProps {
  className?: string;
  to: string;
}

export const ExternalLink: React.FC<ILinkProps> = ({ className, to, children, ...other }) => {
  const linkClasses = classNames(className, propsToSpace(other), propsToColor(other));
  return (
    <a className={linkClasses} href={to}>
      {children}
    </a>
  );
};
