import './filters.scss';

import { Block, Flexbox, RemixIcon, TextField } from 'shared/base';
import React, { useState } from 'react';

import classNames from 'classnames';

export const CheckboxFilter: React.FC<{ after?: boolean; filterName: string }> = ({ after, filterName, children }) => {
  const [opened, setOpened] = useState(false);
  return (
    <Block mb="4" className={classNames({ 'mt-4': !after })}>
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
