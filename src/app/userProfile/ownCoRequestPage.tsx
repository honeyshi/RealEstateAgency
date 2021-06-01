import { Button, Flexbox } from 'shared/base';
import React, { useEffect, useState } from 'react';

import { EditCoRequestPage } from './editCoRequestPage';
import { NoResultsPage } from 'shared/layout/noResultsPage';
import { history } from 'core/history';
import { performGetOwnCotenantRequest } from 'core/cotenant/getOwnCotenant';
import { switchError } from 'core/switchError';

export const OwnCoRequestPage: React.FC = () => {
  const [hasRequest, setHasRequest] = useState(false);
  useEffect(() => {
    let mounted = false;
    const fetchData = async () => {
      try {
        const result = await performGetOwnCotenantRequest();
        if (!mounted) {
          if (!Object.keys(result).includes('error')) {
            setHasRequest(true);
          }
        }
      } catch (error) {
        switchError(error.response.status);
      }
    };
    fetchData();
    return () => {
      mounted = true;
    };
  }, []);

  return (
    <>
      {hasRequest ? (
        <EditCoRequestPage />
      ) : (
        <>
          <NoResultsPage>Вы еще не подали заявку на совместную аренду.</NoResultsPage>
          <Flexbox justifyContent="center">
            <Button primary onClick={() => history.push('/profile/create-cotenant-request')}>
              Создать заявку
            </Button>
          </Flexbox>
        </>
      )}
    </>
  );
};
