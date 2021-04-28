import { Button, CheckBox, Flexbox, RemixIcon, TextField } from 'shared/base';
import React, { useMemo } from 'react';

import { CheckboxFilter } from 'pageParts/filters';
import InputRange from 'react-input-range';
import { districts } from 'data/values';

export const FiltersContainer: React.FC = () => {
  const districtItemComponents = useMemo(() => {
    const districtItems = districts.map((district) => {
      return (
        <CheckBox name={district} value={false} onChange={(value) => void 0} key={district}>
          {district}
        </CheckBox>
      );
    });
    return districtItems;
  }, []);
  return (
    <Flexbox vertical mx="5" mb="5">
      <CheckboxFilter filterName="Район">{districtItemComponents}</CheckboxFilter>
      <CheckboxFilter after filterName="Пол соарендатора">
        <CheckBox name="cotenant-sex-male" value={false} onChange={(value) => void 0} key="cotenant-sex-male">
          Мужской
        </CheckBox>
        <CheckBox name="cotenant-sex-female" value={false} onChange={(value) => void 0} key="cotenant-sex-female">
          Женский
        </CheckBox>
        <CheckBox
          name="cotenant-sex-unselected"
          value={false}
          onChange={(value) => void 0}
          key="cotenant-sex-unselected">
          Не важен
        </CheckBox>
      </CheckboxFilter>
      <TextField mb="4">Возраст соарендатора</TextField>
      <Flexbox py="4">
        <InputRange
          formatLabel={(value) => `${value} лет`}
          maxValue={70}
          minValue={18}
          value={{ min: 18, max: 70 }}
          onChange={(value) => void 0}
        />
      </Flexbox>
      <CheckboxFilter filterName="Ваш пол">
        <CheckBox name="own-sex-male" value={false} onChange={(value) => void 0} key="own-sex-male">
          Мужской
        </CheckBox>
        <CheckBox name="own-sex-female" value={false} onChange={(value) => void 0} key="own-sex-female">
          Женский
        </CheckBox>
      </CheckboxFilter>
      <TextField mb="4">Ваш возраст</TextField>
      <Flexbox py="4" mb="4">
        <InputRange
          formatLabel={(value) => `${value} лет`}
          maxValue={70}
          minValue={18}
          value={18}
          onChange={(value) => void 0}
        />
      </Flexbox>
      <Flexbox justifyContent="between" text="accent" className="cursor-pointer" mb="4" onClick={() => void 0}>
        Сбросить фильтры
        <RemixIcon name="refresh" />{' '}
      </Flexbox>
      <Button primary w="100">
        Поиск
      </Button>
    </Flexbox>
  );
};
