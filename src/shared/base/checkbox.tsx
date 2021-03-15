import React, { useCallback } from 'react';
import { Flexbox } from './flexbox';

import './checkbox.scss';

interface ICheckboxProps {
  name: string | undefined;
  value: boolean;
  onChange: (value: boolean) => void;
}

export const CheckBox: React.FC<ICheckboxProps> = ({ name, value, onChange, children }) => {
  const onchange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.checked), [onChange]);
  return (
    <Flexbox alignItems="center" className="form-check">
      <input className="form-check-input" type="checkbox" id={name} checked={value} onChange={onchange} />
      <label className="form-check-label" htmlFor={name}>
        {children}
      </label>
    </Flexbox>
  );
};
