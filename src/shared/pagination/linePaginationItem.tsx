import classNames from 'classnames';
import React from 'react';
import { Block } from 'shared/base';

export const LinePaginationItem: React.FC<{ active: boolean }> = ({ active }) => {
  const className = classNames('pagination-item', { active: active });
  return <Block w="100" className={className} />;
};
