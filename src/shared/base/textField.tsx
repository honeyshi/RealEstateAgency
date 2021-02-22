import React from 'react';
import classNames from 'classnames';
import { propsToSpace, SpaceProps } from './utils/spaceUtil';
import { ColorProps, propsToColor } from './utils/colorUtils';

interface ITextFieldProps extends SpaceProps, ColorProps {
  classes?: string;
  bold?: boolean;
  center?: boolean;
  light?: boolean;
  left?: boolean;
  small?: boolean;
  tag?: React.ElementType;
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
      'text-uppercase': uppercase,
      small: small,
    },
    propsToSpace(other),
    propsToColor(other)
  );
  return <Tag className={textClasses}>{children}</Tag>;
};
