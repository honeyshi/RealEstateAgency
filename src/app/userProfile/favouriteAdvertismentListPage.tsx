import React, { useEffect, useMemo, useState } from 'react';

import { Advertisment } from 'pageParts/advertisment';
import { Block } from 'shared/base';
import { IAdvertisment } from 'core/getAdvertisment/advertismentModel';
import { NoResultsPage } from 'shared/layout/noResultsPage';
import { buildAdditionalInformationString } from 'core/buildAdditionalInformationString';
import { performGetFavouriteAdvertismentsRequest } from 'core/getAdvertisment/getFavouriteAdvertisments';

export const FavouriteAdvertismentsListPage: React.FC = () => {
  const [advertisments, setAdvertisments] = useState<IAdvertisment[]>();

  useEffect(() => {
    let mounted = false;
    const fetchData = async () => {
      const result = await performGetFavouriteAdvertismentsRequest();
      if (!mounted) setAdvertisments(result);
    };
    fetchData();
    return () => {
      mounted = true;
    };
  }, []);

  const advertismentItemComponents = useMemo(() => {
    const advertismentItems = advertisments?.map((advertisment) => {
      return (
        <Advertisment
          favourite
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
          key={`favourite-advertisment-${advertisment.id}`}
        />
      );
    });
    return advertismentItems;
  }, [advertisments]);

  return (
    <>
      <Block mr="5" mt="3" mb="5">
        {advertismentItemComponents?.length !== 0 ? (
          <>{advertismentItemComponents}</>
        ) : (
          <NoResultsPage>Вы еще не добавили объявления в избранное.</NoResultsPage>
        )}
      </Block>
    </>
  );
};
