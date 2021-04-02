import { ColorProps, propsToColor } from './utils/colorUtils';
import { SpaceProps, propsToSpace } from './utils/spaceUtil';

import React from 'react';
import classNames from 'classnames';

interface ITextFieldProps extends SpaceProps, ColorProps {
  classes?: string;
  bold?: boolean;
  center?: boolean;
  light?: boolean;
  left?: boolean;
  small?: boolean;
  tag?: React.ElementType;
  titleName?: string;
  truncate?: boolean;
  uppercase?: boolean;
}

export const TextField: React.FC<ITextFieldProps> = ({
  classes,
  bold,
  center,
  light,
  left,
  small,
  tag: Tag = 'p',
  titleName,
  truncate,
  uppercase,
  children,
  ...other
}) => {
  const textClasses = classNames(
    classes,
    {
      'font-weight-bold': bold,
      'font-weight-light': light,
      'text-center': center,
      'text-left': left,
      'text-truncate': truncate,
      'text-uppercase': uppercase,
      small: small,
    },
    propsToSpace(other),
    propsToColor(other)
  );
  return (
    <Tag className={textClasses} {...(titleName && { title: titleName })}>
      {children}
    </Tag>
  );
};
