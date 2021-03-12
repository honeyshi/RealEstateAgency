import classNames from 'classnames';
import React, { useState } from 'react';
import { Block, Flexbox, Icon, TextField } from 'shared/base';

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
        <Icon name="angle-down" className={classNames({ 'd-none': opened })} />
        <Icon name="angle-up" className={classNames({ 'd-none': !opened })} />
      </Flexbox>
      <div className={classNames('filter-checkboxes', { 'd-none': !opened }, { 'd-flex flex-column': opened })}>
        {children}
      </div>
    </Block>
  );
};
