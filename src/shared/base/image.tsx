import classNames from 'classnames';
import React from 'react';
import { propsToSpace, SpaceProps } from './utils/spaceUtil';

interface ImageProps extends SpaceProps {
  alt?: string;
  className?: string;
  src: string;
}

export const Image: React.FC<ImageProps> = ({ alt, className, src, ...other }) => {
  const classes = classNames(propsToSpace(other), className);
  return <img alt={alt == null ? '' : alt} src={src} className={classes} />;
};
