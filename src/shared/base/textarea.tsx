import './textarea.scss';

import React, { useCallback } from 'react';
import { SpaceProps, propsToSpace } from './utils/spaceUtil';

import classNames from 'classnames';

interface ITextareaProps extends SpaceProps {
  solid?: boolean;
  formSpaces?: boolean;
  className?: string;
  invalid?: boolean;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  onEnterPress: () => void;
}

export const Textarea: React.FC<ITextareaProps> = ({
  solid,
  formSpaces,
  className,
  invalid,
  placeholder,
  value,
  onChange,
  onEnterPress,
  ...other
}) => {
  const onchange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value), [onChange]);
  const onkeypress = useCallback((e: React.KeyboardEvent<HTMLTextAreaElement>) => e.key === 'Enter' && onEnterPress(), [
    onEnterPress,
  ]);
  const classes = classNames(
    className,
    'textarea',
    'form-control font-weight-light',
    {
      'pl-0 py-2 mb-5': formSpaces,
      'is-invalid': invalid,
      solid: solid,
    },
    propsToSpace(other)
  );
  return (
    <textarea
      rows={6}
      placeholder={placeholder}
      className={classes}
      value={value}
      onChange={onchange}
      onKeyPress={onkeypress}
    />
  );
};
