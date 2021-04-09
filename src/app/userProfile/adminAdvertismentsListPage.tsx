import { Block, CheckBox, Flexbox, TextField } from 'shared/base';
import React, { useEffect, useMemo, useState } from 'react';

import { Advertisment } from 'pageParts/advertisment';
import { IAdvertisment } from 'core/getAdvertisment/advertismentModel';
import { NumberPagination } from 'shared/pagination';
import { amountAdvertismentOnPage } from 'data/values';
import { buildAdditionalInformationString } from 'core/buildAdditionalInformationString';
import { performGetAdvertismentByStatusRequest } from 'core/getAdvertisment/getAdvertismentByStatus';

enum Statuses {
  unpublished = 0,
  published = 1,
  moderation = 2,
  declined = 3,
  blocked = 4,
}

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

  useEffect(() => {
    let mounted = false;
    const fetchData = async () => {
      const result = await performGetAdvertismentByStatusRequest(activeStatus, activePage);
      if (!mounted) {
        setAdvertisments(result.apartments);
        setAmountPages(Math.ceil(result.total_count / amountAdvertismentOnPage));
        console.log(advertisments);
      }
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
      <Flexbox justifyContent="between" my="5">
        {chekboxes.map((chekbox) => (
          <CheckBox
            name={chekbox.id}
            value={activeStatus === chekbox.statusCode}
            onChange={(value) => value && setActiveStatus(chekbox.statusCode)}
            key={chekbox.id}>
            {chekbox.text}
          </CheckBox>
        ))}
      </Flexbox>
      <Block mr="5" mt="3" mb="5">
        {advertismentItemComponents?.length !== 0 ? (
          <>
            {advertismentItemComponents}
            <NumberPagination amountPages={amountPages} activePage={activePage} setActivePage={setActivePage} />
          </>
        ) : (
          <TextField classes="lead">
            По вашему запросу не было найдено ни одного объявления.
          </TextField>
        )}
      </Block>
    </>
  );
};
