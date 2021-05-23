import DotLoader from 'react-spinners/DotLoader';
import { Flexbox } from 'shared/base';
import { MainColor } from 'data/values';
import React from 'react';

export const Loading: React.FC<{ loading: boolean }> = ({ loading }) => {
  return (
    <Flexbox justifyContent="center">
      <DotLoader color={MainColor} loading={loading} size={60} />
    </Flexbox>
  );
};
