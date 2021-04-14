import { Block, Flexbox, TextField } from 'shared/base';
import React, { useEffect, useMemo, useState } from 'react';

import { Advertisment } from 'pageParts/advertisment';
import { IAdvertisment } from 'core/getAdvertisment/advertismentModel';
import { NumberPagination } from 'shared/pagination';
import { Select } from 'shared/composite/select';
import { amountAdvertismentOnPage } from 'data/values';
import { buildAdditionalInformationString } from 'core/buildAdditionalInformationString';
import { performGetAdvertismentRequest } from 'core/getAdvertisment/getAdvertisment';
import { setSortingFilter } from 'data/actions';
import { useDispatch } from 'react-redux';

export const AdvertismentsContainer: React.FC = () => {
  const dispatch = useDispatch();

  const [activePage, setActivePage] = useState(1);
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
