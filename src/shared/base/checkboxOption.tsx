import classNames from 'classnames';
import React from 'react';
import { propsToSpace, SpaceProps } from './utils/spaceUtil';

import './checkboxOption.scss';

interface ICheckboxOptionProps extends SpaceProps {
  selected: boolean;
  notSelected?: boolean;
  big?: boolean;
  circle?: boolean;
  disabled?: boolean;
  onClick: (e: React.MouseEvent) => void;
}

export const CheckboxOption: React.FC<ICheckboxOptionProps> = ({
  selected,
  notSelected,
  big,
  circle,
  disabled,
  onClick,
  children,
  ...other
}) => {
  const classes = classNames(
    'checkbox',
    'font-weight-light',
    big ? 'py-4' : 'py-2',
    circle ? 'rounded-circle' : 'rounded-50',
    circle ? 'px-3' : 'px-4',
    { 'not-selected': notSelected },
    { selected: selected },
    { disabled: disabled },
    propsToSpace(other)
  );
  return (
    <button disabled={disabled} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};
