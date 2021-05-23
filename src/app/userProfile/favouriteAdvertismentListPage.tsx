import React, { useEffect, useMemo, useState } from 'react';

import { Advertisment } from 'pageParts/advertisment';
import { DefaultListBlock } from 'shared/layout/defaultListBlock';
import { IAdvertisment } from 'core/getAdvertisment/advertismentModel';
import { Loading } from 'shared/base';
import { NoResultsPage } from 'shared/layout/noResultsPage';
import { buildAdditionalInformationString } from 'core/buildAdditionalInformationString';
import { performGetFavouriteAdvertismentsRequest } from 'core/getAdvertisment/getFavouriteAdvertisments';

export const FavouriteAdvertismentsListPage: React.FC = () => {
  const [advertisments, setAdvertisments] = useState<IAdvertisment[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = false;
    const fetchData = async () => {
      setLoading(true);
      const result = await performGetFavouriteAdvertismentsRequest();
      if (!mounted) setAdvertisments(result);
      setLoading(false);
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
    <DefaultListBlock>
      {loading ? (
        <Loading loading />
      ) : (
        <>
          {advertismentItemComponents?.length !== 0 ? (
            <>{advertismentItemComponents}</>
          ) : (
            <NoResultsPage>Вы еще не добавили объявления в избранное.</NoResultsPage>
          )}
        </>
      )}
    </DefaultListBlock>
  );
};
