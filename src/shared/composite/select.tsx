import './select.scss';

import { Flexbox, RemixIcon, SelectOption, TextField } from 'shared/base';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import classNames from 'classnames';

interface ISelectProps {
  solid?: boolean;
  selectOptions: string[];
  selectText: string;
  className?: string;
  onSelectValue: (value: string) => void;
}

export const Select: React.FC<ISelectProps> = ({ solid, selectOptions, selectText, className, onSelectValue }) => {
  const selectRef = useRef<HTMLDivElement>(null);

  const [opened, setOpened] = useState(false);
  const [text, setText] = useState('');

  const onselectvalue = useCallback(
    (e: React.MouseEvent<HTMLSpanElement>) => {
      setText(e.currentTarget.innerText);
      onSelectValue(e.currentTarget.innerText);
      setOpened(false);
    },
    [onSelectValue]
  );

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (!selectRef.current || selectRef.current.contains(e.target as Node)) return;
      setOpened(false);
    },
    [selectRef]
  );

  useEffect(() => {
    if (opened) document.addEventListener('mousedown', handleClickOutside);
    else document.removeEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [opened, handleClickOutside]);

  const selectOptionComponents = useMemo(() => {
    const selectOptionItems = selectOptions.map((optionText, index) => {
      return (
        <SelectOption onClick={onselectvalue} key={`${optionText}-${index}`} displayed={!(text === optionText)}>
          {optionText}
        </SelectOption>
      );
    });
    return selectOptionItems;
  }, [selectOptions, onselectvalue, text]);

  return (
    <div className={classNames('select p-2', { solid: solid }, className)} ref={selectRef}>
      <Flexbox
        alignItems="center"
        justifyContent="between"
        pb="2"
        className="placeholder-container"
        onClick={() => setOpened(!opened)}>
        <TextField tag="span" classes="placeholder" pr="4">
          {text === '' ? selectText : text}
        </TextField>
        <RemixIcon name="arrow-down-s" className={classNames({ 'd-none': opened })} />
        <RemixIcon name="arrow-up-s" className={classNames({ 'd-none': !opened })} />
      </Flexbox>
      <div className={classNames({ 'd-none': !opened }, { 'd-flex flex-column': opened }, 'options-container')}>
        {selectOptionComponents}
      </div>
    </div>
  );
};
