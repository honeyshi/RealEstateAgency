import './checkbox.scss';

import React, { useCallback } from 'react';

import { Flexbox } from './flexbox';
import classNames from 'classnames';

interface ICheckboxProps {
  className?: string;
  name: string | undefined;
  value: boolean;
  switcher?: boolean;
  onChange: (value: boolean) => void;
}

export const CheckBox: React.FC<ICheckboxProps> = ({ className, name, value, switcher, onChange, children }) => {
  const onchange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.checked), [onChange]);
  const classes = classNames(
    'custom-control',
    switcher ? 'custom-switch' : 'custom-checkbox',
    { 'align-items-center': !switcher },
    className
  );

  return (
    <Flexbox className={classes}>
      <input className="custom-control-input" type="checkbox" id={name} checked={value} onChange={onchange} />
      <label className="custom-control-label" htmlFor={name}>
        {children}
      </label>
    </Flexbox>
  );
};
