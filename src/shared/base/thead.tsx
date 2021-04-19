import React from 'react';

interface ITheadProps {
  className?: string;
}

export const THead: React.FC<ITheadProps> = ({ className, children }) => {
  return <thead className={className}>{children}</thead>;
};
