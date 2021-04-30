import { Block, THead, Table, Th, Tr } from 'shared/base';
import React, { useEffect, useMemo, useState } from 'react';
import { setApplyCotenantFilter, setWithCotenantFilter } from 'data/actions/cotenantFilterActions';
import { useDispatch, useSelector } from 'react-redux';

import { Cotenant } from './cotenant';
import { CotenantListItem } from 'core/cotenant/cotenantModel';
import { NoResultsPage } from 'shared/layout/noResultsPage';
import { NumberPagination } from 'shared/pagination';
import { StoreType } from 'core/store';
import { amountAdvertismentOnPage } from 'data/values';
import { history } from 'core/history';
import { performGetCotenantsRequest } from 'core/cotenant/getCotenants';

export const CotenantListContainer: React.FC = () => {
  const [activePage, setActivePage] = useState(1);
  const [requests, setRequests] = useState<CotenantListItem[]>();
  const [amountPages, setAmountPages] = useState(10);

  const dispatch = useDispatch();

  const cotenantFilter = useSelector((state: StoreType) => state.cotenantFilter);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let result: any;
        cotenantFilter.withFilter
          ? console.log('with filter')
          : (result = await performGetCotenantsRequest(activePage));
        setRequests(result.items);
        setAmountPages(Math.ceil(result.total_count / amountAdvertismentOnPage));
      } catch (error) {
        history.push('/error');
      }
    };
    fetchData();
  }, [activePage, cotenantFilter.withFilter]);

  useEffect(() => {
    if (cotenantFilter.apply) {
      console.log('Apply filter');
      dispatch(setWithCotenantFilter(true));
      dispatch(setApplyCotenantFilter(false));
    }
  }, [dispatch, cotenantFilter.apply]);

  const cotenantItemComponents = useMemo(() => {
    const cotenantItems = requests?.map((request) => {
      return (
        <Cotenant
          id={request.id}
          image={request.image}
          sex={request.author_sex}
          desiredMinAge={request.desired_min_age}
          desiredMaxAge={request.desired_max_age}
          desiredSex={request.desired_sex}
          district={request.district.name}
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
                <Th>Возраст</Th>
                <Th>Район</Th>
                <Th>Пол соарендатора</Th>
                <Th>Возраст соарендатора</Th>
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
