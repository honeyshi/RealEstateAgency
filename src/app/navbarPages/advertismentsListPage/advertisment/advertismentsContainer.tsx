import { Block, Flexbox, TextField } from 'shared/base';
import React, { useEffect, useMemo, useState } from 'react';
import { setAdvertismentPageFilter, setSortingFilter } from 'data/actions';
import { useDispatch, useSelector } from 'react-redux';

import { Advertisment } from './advertisment';
import { IAdvertisment } from 'core/getAdvertisment/advertismentModel';
import { NumberPagination } from 'shared/pagination';
import { Select } from 'shared/composite/select';
import { StoreType } from 'core/store';
import { performGetAdvertismentRequest } from 'core/getAdvertisment/getAdvertisment';

// const advertisments = [
//   {
//     header: '1-комнатная квартира, 45 м², этаж 4/7',
//     address: 'Нижегородская область, Нижний Новгород, р-н Советский, мкр. Высоково, ул. Бориса Панина, 7к3',
//     metro: 'Горьковская',
//     additionalInformation: 'От года, 21 000 ₽ + 1 000 ₽ комм. платежи (без счётчиков), залог 10 000 ₽',
//     payment: '21 000',
//     link: '/test',
//     id: 'advertisment-1',
//   },
//   {
//     header: '1-комнатная квартира, 45 м², этаж 4/7',
//     address: 'Нижегородская область, Нижний Новгород, р-н Советский, мкр. Высоково, ул. Бориса Панина, 7к3',
//     metro: 'Горьковская',
//     additionalInformation: 'От года, 21 000 ₽ + 1 000 ₽ комм. платежи (без счётчиков), залог 10 000 ₽',
//     payment: '21 000',
//     link: '#',
//     id: 'advertisment-2',
//   },
//   {
//     header: '1-комнатная квартира, 45 м², этаж 4/7',
//     address: 'Нижегородская область, Нижний Новгород, р-н Советский, мкр. Высоково, ул. Бориса Панина, 7к3',
//     metro: 'Горьковская',
//     additionalInformation: 'От года, 21 000 ₽ + 1 000 ₽ комм. платежи (без счётчиков), залог 10 000 ₽',
//     payment: '21 000',
//     link: '#',
//     id: 'advertisment-3',
//   },
// ];

const amountAdvertismentOnPage = 10;

const buildAdditionalInformationString = (
  deposit: string,
  paymentCondition: string,
  withAnimals: number,
  withKids: number
) => {
  const depositString = deposit != null ? `Залог ${deposit} ₽.` : 'Без залога.';
  const paymentString = () => {
    switch (paymentCondition) {
      case '0':
        return 'Только оплата аренды.';
      case '1':
        return 'Оплата счетчиков.';
      case '2':
        return 'Оплата коммунальных услуг.';
      default:
        return '';
    }
  };
  const animalsString = withAnimals === 1 ? 'Разрешено заселение с животными.' : 'Заселение с животными запрещено.';
  const kidsString = withKids === 1 ? 'Разрешено заселение с детьми.' : 'Заселение с детьми запрещено.';
  return `${depositString} ${paymentString()} ${animalsString} ${kidsString}`;
};

export const AdvertismentsContainer: React.FC = () => {
  const dispatch = useDispatch();

  const activePage = useSelector((state: StoreType) => state.advertismentFilter.activePage);

  const [advertisments, setAdvertisments] = useState<IAdvertisment[]>();
  const [amountPages, setAmountPages] = useState(10);
  const [totalAds, setTotalAds] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      const result = await performGetAdvertismentRequest(activePage);
      setAdvertisments(result.apartments);
      setAmountPages(Math.ceil(result.total_count / amountAdvertismentOnPage));
      setTotalAds(result.total_count);
      console.log(advertisments);
    };
    fetchData();
    // eslint-disable-next-line
  }, [activePage]);

  const advertismentItemComponents = useMemo(() => {
    const advertismentItems = advertisments?.map((advertisment) => {
      return (
        <Advertisment
          header={advertisment.header}
          address={`Нижегородская область, Нижний Новгород, р-н ${advertisment.district}, ${advertisment.address}`}
          metro={advertisment.metro}
          additionalInformation={buildAdditionalInformationString(
            advertisment.deposit,
            advertisment.payment_condition,
            advertisment.with_animals,
            advertisment.with_kids
          )}
          payment={advertisment.price}
          link={`/advertisment-description/${advertisment.id}`}
          images={advertisment.images.map((image) => {
            return image.url;
          })}
          id={advertisment.id}
          key={`advertisment-${advertisment.id}`}
        />
      );
    });
    return advertismentItems;
  }, [advertisments]);
  return (
    <Block mr="5" mt="3" mb="5">
      {advertismentItemComponents?.length !== 0 ? (
        <>
          <Flexbox alignItems="baseline" justifyContent="between" mb="4">
            <TextField>Найдено {totalAds} объявлений</TextField>
            <Select
              selectOptions={['Сначала новые', 'По возрастанию цены', 'По убыванию цены']}
              selectText="Сортировка"
              onSelectValue={(value) => dispatch(setSortingFilter(value))}
            />
          </Flexbox>
          {advertismentItemComponents}
          <NumberPagination
            amountPages={amountPages}
            activePage={activePage}
            setActivePage={setAdvertismentPageFilter}
          />
        </>
      ) : (
        <TextField classes="lead">
          По вашему запросу не было найдено ни одного объявления. Попробуйте смягчить критерии поиска.
        </TextField>
      )}
    </Block>
  );
};
