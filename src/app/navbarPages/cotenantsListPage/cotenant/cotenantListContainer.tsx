import { Block, THead, Table, Th, Tr } from 'shared/base';
import React, { useEffect, useMemo, useState } from 'react';

import { Cotenant } from './cotenant';
import { CotenantListItem } from 'core/cotenant/cotenantModel';
import { NoResultsPage } from 'shared/layout/noResultsPage';
import { NumberPagination } from 'shared/pagination';
import { amountAdvertismentOnPage } from 'data/values';
import { history } from 'core/history';
import { performGetCotenantsRequest } from 'core/cotenant/getCotenants';

export const CotenantListContainer: React.FC = () => {
  const [activePage, setActivePage] = useState(1);
  const [requests, setRequests] = useState<CotenantListItem[]>();
  const [amountPages, setAmountPages] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await performGetCotenantsRequest(activePage);
        setRequests(result.items);
        setAmountPages(Math.ceil(result.total_count / amountAdvertismentOnPage));
      } catch (error) {
        history.push('/error');
      }
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
          <Table className=" cotenant-list-container">
            <THead>
              <Tr>
                <Th>Фотография</Th>
                <Th>Пол</Th>
                <Th>Район</Th>
                <Th>Возраст</Th>
                <Th></Th>
              </Tr>
            </THead>
            <tbody>{cotenantItemComponents}</tbody>
          </Table>
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
