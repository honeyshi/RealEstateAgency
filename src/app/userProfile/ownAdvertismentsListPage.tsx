import React, { useEffect, useMemo, useState } from 'react';

import { Advertisment } from 'pageParts/advertisment';
import { DefaultListBlock } from 'shared/layout/defaultListBlock';
import { IAdvertisment } from 'core/getAdvertisment/advertismentModel';
import { Loading } from 'shared/base';
import { NoResultsPage } from 'shared/layout/noResultsPage';
import { NumberPagination } from 'shared/pagination';
import { amountAdvertismentOnPage } from 'data/values';
import { buildAdditionalInformationString } from 'core/buildAdditionalInformationString';
import { performGetOwnAdvertismentsRequest } from 'core/getAdvertisment/getOwnAdvertisments';

export const OwnAdvertismentsListPage: React.FC = () => {
  const [activePage, setActivePage] = useState(1);
  const [advertisments, setAdvertisments] = useState<IAdvertisment[]>();
  const [amountPages, setAmountPages] = useState(10);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = false;
    const fetchData = async () => {
      setLoading(true);
      const result = await performGetOwnAdvertismentsRequest(activePage);
      if (!mounted) {
        setAdvertisments(result.apartments);
        setAmountPages(Math.ceil(result.total_count / amountAdvertismentOnPage));
      }
      setLoading(false);
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
    <DefaultListBlock>
      {loading ? (
        <Loading loading />
      ) : (
        <>
          {advertismentItemComponents?.length !== 0 ? (
            <>
              {advertismentItemComponents}
              {amountPages !== 1 && (
                <NumberPagination amountPages={amountPages} activePage={activePage} setActivePage={setActivePage} />
              )}
            </>
          ) : (
            <NoResultsPage>Вы еще не разместили ни одного объявления.</NoResultsPage>
          )}
        </>
      )}
    </DefaultListBlock>
  );
};
