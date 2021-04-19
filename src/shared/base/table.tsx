import React from 'react';
import classNames from 'classnames';

interface ITableProps {
  className?: string;
}

export const Table: React.FC<ITableProps> = ({ className, children }) => {
  const classes = classNames('table', className);
  return <table className={classes}>{children}</table>;
};
