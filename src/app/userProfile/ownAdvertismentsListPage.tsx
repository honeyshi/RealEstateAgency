import { Block, TextField } from 'shared/base';
import React, { useEffect, useMemo, useState } from 'react';

import { Advertisment } from 'pageParts/advertisment';
import { IAdvertisment } from 'core/getAdvertisment/advertismentModel';
import { NumberPagination } from 'shared/pagination';
import { amountAdvertismentOnPage } from 'data/values';
import { buildAdditionalInformationString } from 'core/buildAdditionalInformationString';
import { performGetOwnAdvertismentsRequest } from 'core/getAdvertisment/getOwnAdvertisments';

export const OwnAdvertismentsListPage: React.FC = () => {
  const [activePage, setActivePage] = useState(1);
  const [advertisments, setAdvertisments] = useState<IAdvertisment[]>();
  const [amountPages, setAmountPages] = useState(10);

  useEffect(() => {
    let mounted = false;
    const fetchData = async () => {
      const result = await performGetOwnAdvertismentsRequest(activePage);
      if (!mounted) {
        setAdvertisments(result.apartments);
        setAmountPages(Math.ceil(result.total_count / amountAdvertismentOnPage));
      }
    };
    fetchData();
    return () => {
      mounted = true;
    };
    // eslint-disable-next-line
  }, [activePage]);

  const advertismentItemComponents = useMemo(() => {
    const advertismentItems = advertisments?.map((advertisment) => {
      return (
        <Advertisment
          withMenu
          status={Number(advertisment.status)}
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
    <>
      <Block mr="5" mt="3" mb="5">
        {advertismentItemComponents?.length !== 0 ? (
          <>
            {advertismentItemComponents}
            {amountPages !== 1 && (
              <NumberPagination amountPages={amountPages} activePage={activePage} setActivePage={setActivePage} />
            )}
          </>
        ) : (
          <TextField classes="lead">По вашему запросу не было найдено ни одного объявления.</TextField>
        )}
      </Block>
    </>
  );
};
