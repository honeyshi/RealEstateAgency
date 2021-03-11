import React from 'react';
import { CheckBox, Flexbox } from 'shared/base';

export const FiltersContainer: React.FC = () => {
  return (
    <Flexbox>
      <CheckBox name="c1" value={false} onChange={(value) => console.log(value)}>
        I am checkbox
      </CheckBox>
    </Flexbox>
  );
};
