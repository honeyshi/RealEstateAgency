import classNames from 'classnames';
import React, { useCallback, useMemo, useState } from 'react';
import { Icon, SelectOption, TextField } from 'shared/base';

import './select.scss';

interface ISelectProps {
  selectOptions: string[];
  selectText: string;
  className?: string;
  onSelectValue: (value: string) => void;
}

export const Select: React.FC<ISelectProps> = ({ selectOptions, selectText, className, onSelectValue }) => {
  const classes = classNames('select p-2', className);
  const [opened, setOpened] = useState(false);
  const [text, setText] = useState('');
  const onselectvalue = useCallback(
    (e: React.MouseEvent<HTMLSpanElement>) => {
      setText(e.currentTarget.innerText);
      onSelectValue(e.currentTarget.innerText);
    },
    [onSelectValue]
  );
  const selectOptionComponents = useMemo(() => {
    const selectOptionItems = selectOptions.map((optionText, index) => {
      return (
        <SelectOption onClick={onselectvalue} key={`${optionText}-${index}`}>
          {optionText}
        </SelectOption>
      );
    });
    return selectOptionItems;
  }, [selectOptions, onselectvalue]);

  return (
    <div className={classes}>
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
