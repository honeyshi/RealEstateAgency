import classNames from 'classnames';
import React from 'react';

interface ISelectOptionProps {
  displayed: boolean;
  onClick: (e: React.MouseEvent<HTMLSpanElement>) => void;
}

export const SelectOption: React.FC<ISelectOptionProps> = ({ onClick, displayed, children }) => {
  const classes = classNames('pb-2', { 'd-none': !displayed });
  return (
    <span className={classes} onClick={onClick}>
      {children}
    </span>
  );
};
