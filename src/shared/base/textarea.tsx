import React, { useCallback } from 'react';
import classNames from 'classnames';
import { propsToSpace, SpaceProps } from './utils/spaceUtil';

import './textarea.scss';

interface ITextareaProps extends SpaceProps {
  formSpaces?: boolean;
  className?: string;
  invalid?: boolean;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  onEnterPress: () => void;
}

export const Textarea: React.FC<ITextareaProps> = ({
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
    'form-control font-weight-light',
    {
      'pl-0 py-2 mb-5': formSpaces,
      'is-invalid': invalid,
    },
    propsToSpace(other)
  );
  return (
    <textarea placeholder={placeholder} className={classes} value={value} onChange={onchange} onKeyPress={onkeypress} />
  );
};
