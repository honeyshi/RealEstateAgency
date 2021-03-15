import React from 'react';
import classNames from 'classnames';

import { propsToSpace, SpaceProps } from './utils/spaceUtil';
import { propsToSize, SizeProps } from './utils/sizeUtil';
import { ColorProps, propsToColor } from './utils/colorUtils';

type Breakpoint = 'sm' | 'md' | 'lg' | 'xl';

interface IFlexboxProps extends SpaceProps, SizeProps, ColorProps {
  tag?: React.ElementType;
  className?: string;
  vertical?: boolean;
  wrap?: boolean;
  justifyContent?: 'start' | 'end' | 'center' | 'between' | 'around';
  alignItems?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  flexSize?: Breakpoint;
  directionSize?: Breakpoint;
  wrapSize?: Breakpoint;
  justifyContentSize?: Breakpoint;
  alignItemsSize?: Breakpoint;
  onClick?: (e: React.MouseEvent) => void;
}

export const Flexbox: React.FC<IFlexboxProps> = ({
  tag: Tag = 'div',
  className,
  vertical,
  justifyContent,
  alignItems,
  wrap,
  flexSize,
  directionSize,
  wrapSize,
  justifyContentSize,
  alignItemsSize,
  onClick,
  children,
  ...other
}) => {
  const classes = classNames(
    `d${flexSize != null ? `-${flexSize}` : ''}-flex`,
    vertical
      ? `flex${directionSize != null ? `-${directionSize}` : ''}-column`
      : `flex${directionSize != null ? `-${directionSize}` : ''}-row`,
    {
      [`justify-content${justifyContentSize != null ? `-${justifyContentSize}` : ''}-${justifyContent}`]:
        justifyContent != null,
      [`align-items${alignItemsSize != null ? `-${alignItemsSize}` : ''}-${alignItems}`]: alignItems != null,
      [`flex${wrapSize != null ? `-${wrapSize}` : ''}-wrap`]: wrap,
    },
    propsToSpace(other),
    propsToSize(other),
    propsToColor(other),
    className
  );
  return (
    <Tag className={classes} onClick={onClick} {...other}>
      {children}
    </Tag>
  );
};
