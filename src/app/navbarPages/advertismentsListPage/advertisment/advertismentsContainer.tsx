import { Block, Flexbox, TextField } from 'shared/base';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Advertisment } from 'pageParts/advertisment';
import { IAdvertisment } from 'core/getAdvertisment/advertismentModel';
import { NumberPagination } from 'shared/pagination';
import { Select } from 'shared/composite/select';
import { StoreType } from 'core/store';
import { amountAdvertismentOnPage } from 'data/values';
import { buildAdditionalInformationString } from 'core/buildAdditionalInformationString';
import { history } from 'core/history';
import { performGetAdvertismentRequest } from 'core/getAdvertisment/getAdvertisment';
import { setApplyFilter } from 'data/actions/advertismentFilterActions';
import { setSortingFilter } from 'data/actions';
import { usePrevious } from 'core/usePrevious';

export const AdvertismentsContainer: React.FC = () => {
  const dispatch = useDispatch();

  const [activePage, setActivePage] = useState(1);
  const [advertisments, setAdvertisments] = useState<IAdvertisment[]>();
  const [amountPages, setAmountPages] = useState(10);
  const [totalAds, setTotalAds] = useState(10);

  const advertismentFilter = useSelector((state: StoreType) => state.advertismentFilter);

  const previousApplyFilter = usePrevious(advertismentFilter.apply);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let result: any;
        if (!previousApplyFilter) {
          advertismentFilter.withFilter
            ? (result = await performGetAdvertismentRequest(
                activePage,
                advertismentFilter.districts,
                advertismentFilter.rentPayment,
                advertismentFilter.rooms,
                advertismentFilter.space,
                advertismentFilter.facilities,
                advertismentFilter.livingRules
              ))
            : (result = await performGetAdvertismentRequest(activePage));
          setAdvertisments(result.apartments);
          setAmountPages(Math.ceil(result.total_count / amountAdvertismentOnPage));
          setTotalAds(result.total_count);
        }
      } catch {
        history.push('/error');
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, [activePage, advertismentFilter.withFilter, advertismentFilter.apply]);

  useEffect(() => {
    if (advertismentFilter.apply) {
      setActivePage(1);
      dispatch(setApplyFilter(false));
    }
  }, [dispatch, advertismentFilter.apply]);

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
          favourite={advertisment.favorite_apartments.length !== 0}
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
          {amountPages !== 1 && (
            <NumberPagination amountPages={amountPages} activePage={activePage} setActivePage={setActivePage} />
          )}
        </>
      ) : (
        <TextField classes="lead">
          По вашему запросу не было найдено ни одного объявления. Попробуйте смягчить критерии поиска.
        </TextField>
      )}
    </Block>
  );
};
