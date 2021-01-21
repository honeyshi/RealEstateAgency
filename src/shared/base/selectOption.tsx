import React from 'react';

export const SelectOption: React.FC<{ onClick: (e: React.MouseEvent<HTMLSpanElement>) => void }> = ({
  onClick,
  children,
}) => {
  return (
    <span className="pb-2" onClick={onClick}>
      {children}
    </span>
  );
};
