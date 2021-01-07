import React, { useCallback } from 'react';
import classNames from 'classnames';
import { propsToSpace, SpaceProps } from './utils/spaceUtil';

import './input.scss';

interface InputProps extends SpaceProps {
  borderBottom?: boolean;
  className?: string;
  id?: string;
  invalid?: boolean;
  form?: boolean;
  light?: boolean;
  placeholder: string;
  tag?: React.ElementType;
  type?: string;
  value: string;
  onChange: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({
  borderBottom,
  className,
  id,
  invalid,
  form,
  light,
  placeholder,
  tag: Tag = 'input',
  type,
  value,
  onChange,
  ...other
}) => {
  const onchange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value), [onChange]);
  const classes = classNames(
    className,
    {
      'font-weight-light': light,
      'input-border-bottom': borderBottom,
      'is-invalid': invalid,
      'form-control': form,
    },
    propsToSpace(other)
  );
  return (
    <Tag
      className={classNames(classes)}
      id={id}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onchange}
    />
  );
};
