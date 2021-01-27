import React from 'react';
import classNames from 'classnames';
import { propsToSpace, SpaceProps } from './utils/spaceUtil';
import { ColorProps, propsToColor } from './utils/colorUtils';

interface ITextFieldProps extends SpaceProps, ColorProps {
  classes?: string;
  bold?: boolean;
  center?: boolean;
  light?: boolean;
  small?: boolean;
  tag?: React.ElementType;
  uppercase?: boolean;
}

export const TextField: React.FC<ITextFieldProps> = ({
  classes,
  bold,
  center,
  light,
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
      small: small,
      'text-uppercase': uppercase,
    },
    propsToSpace(other),
    propsToColor(other)
  );
  return <Tag className={textClasses}>{children}</Tag>;
};
