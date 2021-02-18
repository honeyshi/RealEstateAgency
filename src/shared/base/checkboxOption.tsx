import classNames from 'classnames';
import React from 'react';
import { propsToSpace, SpaceProps } from './utils/spaceUtil';

import './checkboxOption.scss';

interface ICheckboxOptionProps extends SpaceProps {
  id: string;
  selected: boolean;
  circle?: boolean;
  disabled?: boolean;
  onClick: (e: React.MouseEvent) => void;
}

export const CheckboxOption: React.FC<ICheckboxOptionProps> = ({
  id,
  selected,
  circle,
  disabled,
  onClick,
  children,
  ...other
}) => {
  const classes = classNames(
    'checkbox',
    'font-weight-light',
    'py-2',
    circle ? 'rounded-circle' : 'rounded-50',
    circle ? 'px-3' : 'px-4',
    { selected: selected },
    { disabled: disabled },
    propsToSpace(other)
  );
  return (
    <button id={id} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};
