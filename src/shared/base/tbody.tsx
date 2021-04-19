import React from 'react';

interface ITbodyProps {
  className?: string;
}

export const TBody: React.FC<ITbodyProps> = ({ className, children }) => {
  return <tbody className={className}>{children}</tbody>;
};
