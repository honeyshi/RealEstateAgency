import React from 'react';
import classNames from 'classnames';

import { propsToSpace, SpaceProps } from './utils/spaceUtil';
import { propsToSize, SizeProps } from './utils/sizeUtil';

interface Props extends SpaceProps, SizeProps {
  tag?: React.ElementType;
  className?: string;
  md?: boolean;
  vertical?: boolean;
  wrap?: boolean;
  justifyContent?: 'start' | 'end' | 'center' | 'between' | 'around';
  alignItems?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
}

export const Flexbox: React.FC<Props> = ({
  tag: Tag = 'div',
  className,
  md = true,
  vertical,
  justifyContent,
  alignItems,
  wrap,
  children,
  ...other
}) => {
  const classes = classNames(
    `d${md ? '-md' : ''}-flex`,
    vertical ? `flex${md ? '-md' : ''}-column` : `flex${md ? '-md' : ''}-row`,
    {
      [`justify-content${md ? '-md' : ''}-${justifyContent}`]: justifyContent != null,
      [`align-items${md ? '-md' : ''}-${alignItems}`]: alignItems != null,
      [`flex${md ? '-md' : ''}-wrap`]: wrap,
    },
    propsToSpace(other),
    propsToSize(other),
    className
  );
  return (
    <Tag className={classes} {...other}>
      {children}
    </Tag>
  );
};
