import classNames from 'classnames';
import React, { useMemo, useState } from 'react';
import { Icon, SelectOption, TextField } from 'shared/base';

import './select.scss';

interface ISelectProps {
  selectOptions: string[];
  selectText: string;
  className?: string;
}

export const Select: React.FC<ISelectProps> = ({ selectOptions, selectText, className }) => {
  const [opened, setOpened] = useState(false);
  const [text, setText] = useState('');
  const selectOptionComponents = useMemo(() => {
    const selectOptionItems = selectOptions.map((optionText) => {
      return <SelectOption onClick={() => setText(optionText)}>{optionText}</SelectOption>;
    });
    return selectOptionItems;
  }, [selectOptions]);

  return (
    <div className="select p-2">
      <div className="pb-2" onClick={() => setOpened(!opened)}>
        <TextField tag="span" classes="placeholder" pr="4">
          {text === '' ? selectText : text}
        </TextField>
        <Icon name="angle-down" className={classNames({ 'd-none': opened })} />
        <Icon name="angle-up" className={classNames({ 'd-none': !opened })} />
      </div>
      <div className={classNames({ 'd-none': !opened }, { 'd-flex flex-column': opened })}>
        {selectOptionComponents}
      </div>
    </div>
  );
};
