import React, { useCallback } from 'react';
import classNames from 'classnames';
import { propsToSpace, SpaceProps } from './utils/spaceUtil';

import './input.scss';

interface InputProps extends SpaceProps {
  borderBottom?: boolean;
  formSpaces?: boolean;
  className?: string;
  id?: string;
  invalid?: boolean;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  onEnterPress: () => void;
}

export const Input: React.FC<InputProps> = ({
  borderBottom,
  formSpaces,
  className,
  id,
  invalid,
  placeholder,
  type,
  value,
  onChange,
  onEnterPress,
  ...other
}) => {
  const onchange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value), [onChange]);
  const onkeypress = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && onEnterPress(), [
    onEnterPress,
  ]);
  const classes = classNames(
    className,
    {
      'form-control font-weight-light input-border-bottom': borderBottom,
      'pl-0 py-2 mb-5': formSpaces,
      'is-invalid': invalid,
    },
    propsToSpace(other)
  );
  return (
    <input
      className={classes}
      id={id}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onchange}
      onKeyPress={onkeypress}
    />
  );
};
