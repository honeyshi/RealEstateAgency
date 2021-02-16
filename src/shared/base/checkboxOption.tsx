import classNames from 'classnames';
import React, { useState } from 'react';

import './checkboxOption.scss';

interface ICheckboxOptionProps {
  id: string;
  disabled: boolean;
}

export const CheckboxOption: React.FC<ICheckboxOptionProps> = ({ id, disabled, children }) => {
  const [checked, setChecked] = useState(false);
  const classes = classNames(
    'checkbox',
    'rounded-50',
    'font-weight-light',
    'px-4',
    'py-2',
    { selected: checked },
    { disabled: disabled }
  );
  return (
    <button id={id} disabled={disabled} className={classes} onClick={() => setChecked(!checked)}>
      {children}
    </button>
  );
};
