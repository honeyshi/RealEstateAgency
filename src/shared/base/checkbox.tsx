import './checkbox.scss';

import React, { useCallback } from 'react';

import { Flexbox } from './flexbox';
import classNames from 'classnames';

interface ICheckboxProps {
  className?: string;
  name: string | undefined;
  value: boolean;
  onChange: (value: boolean) => void;
}

export const CheckBox: React.FC<ICheckboxProps> = ({ className, name, value, onChange, children }) => {
  const onchange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.checked), [onChange]);
  return (
    <Flexbox alignItems="center" className={classNames('form-check', className)}>
      <input className="form-check-input" type="checkbox" id={name} checked={value} onChange={onchange} />
      <label className="form-check-label" htmlFor={name}>
        {children}
      </label>
    </Flexbox>
  );
};
