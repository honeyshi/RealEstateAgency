import { CheckBox, Flexbox, Loading, TextField } from 'shared/base';
import React, { useEffect, useMemo, useState } from 'react';
import { Statuses, amountAdvertismentOnPage } from 'data/values';

import { Advertisment } from 'pageParts/advertisment';
import { DefaultListBlock } from 'shared/layout/defaultListBlock';
import { IAdvertisment } from 'core/getAdvertisment/advertismentModel';
import { NumberPagination } from 'shared/pagination';
import { buildAdditionalInformationString } from 'core/buildAdditionalInformationString';
import { performGetAdvertismentByStatusRequest } from 'core/getAdvertisment/getAdvertismentByStatus';

const chekboxes = [
  { id: 'status-unpublished', text: 'Неопубликованные', statusCode: Statuses.unpublished },
  { id: 'status-published', text: 'Опубликованные', statusCode: Statuses.published },
  { id: 'status-moderation', text: 'На модерации', statusCode: Statuses.moderation },
  { id: 'status-declined', text: 'Отклоненные', statusCode: Statuses.declined },
  { id: 'status-blocked', text: 'Заблокированные', statusCode: Statuses.blocked },
];

export const AdminAdvertismentsListPage: React.FC = () => {
  const [activeStatus, setActiveStatus] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [advertisments, setAdvertisments] = useState<IAdvertisment[]>();
  const [amountPages, setAmountPages] = useState(10);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = false;
    const fetchData = async () => {
      setLoading(true);
      const result = await performGetAdvertismentByStatusRequest(activeStatus, activePage);
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
  }, [activePage, activeStatus]);

  const advertismentItemComponents = useMemo(() => {
    const advertismentItems = advertisments?.map((advertisment) => {
      return (
        <Advertisment
          withMenu
          admin
          status={activeStatus}
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
  }, [advertisments, activeStatus]);

  return (
    <>
      <Flexbox justifyContent="between" my="5">
        {chekboxes.map((chekbox) => (
          <CheckBox
            name={chekbox.id}
            value={activeStatus === chekbox.statusCode}
            onChange={(value) => {
              value && setActiveStatus(chekbox.statusCode);
              setActivePage(1);
            }}
            key={chekbox.id}>
            {chekbox.text}
          </CheckBox>
        ))}
      </Flexbox>
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
              <TextField classes="lead">По вашему запросу не было найдено ни одного объявления.</TextField>
            )}
          </>
        )}
      </DefaultListBlock>
    </>
  );
};
