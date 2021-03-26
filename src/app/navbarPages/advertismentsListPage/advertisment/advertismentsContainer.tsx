import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Column, Flexbox, TextField } from 'shared/base';
import { NumberPagination } from 'shared/pagination';
import { Select } from 'shared/composite/select';
import { StoreType } from 'core/store';
import { setAdvertismentPageFilter, setSortingFilter } from 'data/actions';

import { Advertisment } from './advertisment';

const advertisments = [
  {
    header: '1-комнатная квартира, 45 м², этаж 4/7',
    address: 'Нижегородская область, Нижний Новгород, р-н Советский, мкр. Высоково, ул. Бориса Панина, 7к3',
    metro: 'Горьковская',
    additionalInformation: 'От года, 21 000 ₽ + 1 000 ₽ комм. платежи (без счётчиков), залог 10 000 ₽',
    payment: '21 000',
    link: '/test',
    id: 'advertisment-1',
  },
  {
    header: '1-комнатная квартира, 45 м², этаж 4/7',
    address: 'Нижегородская область, Нижний Новгород, р-н Советский, мкр. Высоково, ул. Бориса Панина, 7к3',
    metro: 'Горьковская',
    additionalInformation: 'От года, 21 000 ₽ + 1 000 ₽ комм. платежи (без счётчиков), залог 10 000 ₽',
    payment: '21 000',
    link: '#',
    id: 'advertisment-2',
  },
  {
    header: '1-комнатная квартира, 45 м², этаж 4/7',
    address: 'Нижегородская область, Нижний Новгород, р-н Советский, мкр. Высоково, ул. Бориса Панина, 7к3',
    metro: 'Горьковская',
    additionalInformation: 'От года, 21 000 ₽ + 1 000 ₽ комм. платежи (без счётчиков), залог 10 000 ₽',
    payment: '21 000',
    link: '#',
    id: 'advertisment-3',
  },
];

export const AdvertismentsContainer: React.FC = () => {
  const dispatch = useDispatch();
  const activePage = useSelector((state: StoreType) => state.advertismentFilter.activePage);

  const advertismentItemComponents = useMemo(() => {
    const advertismentItems = advertisments.map((advertisment) => {
      return (
        <Advertisment
          header={advertisment.header}
          address={advertisment.address}
          metro={advertisment.metro}
          additionalInformation={advertisment.additionalInformation}
          payment={advertisment.payment}
          link={advertisment.link}
          key={advertisment.id}
        />
      );
    });
    return advertismentItems;
  }, []);
  return (
    <Column size={9} ml="5">
      {advertismentItemComponents.length !== 0 ? (
        <>
          <Flexbox alignItems="baseline" justifyContent="between">
            <TextField>Найдено 517 объявлений</TextField>
            <Select
              selectOptions={['Сначала новые', 'По возрастанию цены', 'По убыванию цены']}
              selectText="Сортировка"
              onSelectValue={(value) => dispatch(setSortingFilter(value))}
            />
          </Flexbox>
          {advertismentItemComponents}
          <NumberPagination amountPages={10} activePage={activePage} setActivePage={setAdvertismentPageFilter} />
        </>
      ) : (
        <TextField classes="lead">
          По вашему запросу не было найдено ни одного объявления. Попробуйте смягчить критерии поиска.
        </TextField>
      )}
    </Column>
  );
};
