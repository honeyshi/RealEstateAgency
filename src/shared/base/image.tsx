import { BorderProps, propsToBorder } from './utils/borderUtil';
import { SpaceProps, propsToSpace } from './utils/spaceUtil';

import React from 'react';
import classNames from 'classnames';

interface ImageProps extends SpaceProps, BorderProps {
  alt?: string;
  className?: string;
  src: string;
}

export const Image: React.FC<ImageProps> = ({ alt, className, src, ...other }) => {
  const classes = classNames(propsToSpace(other), propsToBorder(other), className);
  return <img alt={alt == null ? '' : alt} src={src} className={classes} />;
};
