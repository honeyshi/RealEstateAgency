import React, { useEffect, useMemo, useState } from 'react';

import { Block } from 'shared/base';
import { Cotenant } from './cotenant';
import { CotenantListItem } from 'core/cotenant/cotenantModel';
import { NoResultsPage } from 'shared/layout/noResultsPage';
import { NumberPagination } from 'shared/pagination';
import { amountAdvertismentOnPage } from 'data/values';
import { performGetCotenantsRequest } from 'core/cotenant/getCotenants';

export const CotenantListContainer: React.FC = () => {
  const [activePage, setActivePage] = useState(1);
  const [requests, setRequests] = useState<CotenantListItem[]>();
  const [amountPages, setAmountPages] = useState(10);
  useEffect(() => {
    const fetchData = async () => {
      const result = await performGetCotenantsRequest(activePage);
      setRequests(result.items);
      setAmountPages(Math.ceil(result.total_count / amountAdvertismentOnPage));
    };
    fetchData();
  }, [activePage]);

  const cotenantItemComponents = useMemo(() => {
    const cotenantItems = requests?.map((request) => {
      return (
        <Cotenant
          id={request.id}
          image=""
          sex={request.author_sex}
          district={request.district}
          age={request.author_age}
          key={`cotenant-request-${request.id}`}
        />
      );
    });
    return cotenantItems;
  }, [requests]);

  return (
    <>
      {cotenantItemComponents?.length !== 0 ? (
        <Block mr="5" mt="3" mb="5">
          <table className="table cotenant-list-container">
            <thead>
              <tr>
                <th scope="col">Фотография</th>
                <th scope="col">Пол</th>
                <th scope="col">Район</th>
                <th scope="col">Возраст</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>{cotenantItemComponents}</tbody>
          </table>
          {amountPages !== 1 && (
            <NumberPagination amountPages={amountPages} activePage={activePage} setActivePage={setActivePage} />
          )}
        </Block>
      ) : (
        <NoResultsPage>По вашему запросу не было найдено заявок на совместную аренду</NoResultsPage>
      )}
    </>
  );
};
