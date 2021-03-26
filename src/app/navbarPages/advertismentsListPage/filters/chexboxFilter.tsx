import classNames from 'classnames';
import React, { useState } from 'react';
import { Block, Flexbox, TextField, RemixIcon } from 'shared/base';

export const CheckboxFilter: React.FC<{ filterName: string }> = ({ filterName, children }) => {
  const [opened, setOpened] = useState(false);
  return (
    <Block mt="4" mb="4">
      <Flexbox
        alignItems="center"
        justifyContent="between"
        pb="2"
        onClick={() => setOpened(!opened)}
        className="filter-header">
        <TextField tag="span" pr="4">
          {filterName}
        </TextField>
        <RemixIcon name="arrow-down-s" className={classNames({ 'd-none': opened })} />
        <RemixIcon name="arrow-up-s" className={classNames({ 'd-none': !opened })} />
      </Flexbox>
      <div className={classNames('filter-checkboxes flex-column', { 'd-none': !opened }, { 'd-flex': opened })}>
        {children}
      </div>
    </Block>
  );
};
