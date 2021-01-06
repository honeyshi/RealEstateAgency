import React from 'react';
import classNames from 'classnames';
import { propsToSpace, SpaceProps } from './utils/spaceUtil';

import './input.scss';

interface InputProps extends SpaceProps {
  borderBottom?: boolean;
  className?: string;
  id?: string;
  light?: boolean;
  placeholder: string;
  tag?: React.ElementType;
  type?: string;
}

export const Input: React.FC<InputProps> = ({
  borderBottom,
  className,
  id,
  light,
  placeholder,
  tag: Tag = 'input',
  type,
  ...other
}) => {
  const classes = classNames(
    className,
    { 'font-weight-light': light, 'input-border-bottom': borderBottom },
    propsToSpace(other)
  );
  return <Tag className={classNames(classes)} id={id} placeholder={placeholder} type={type} />;
};
