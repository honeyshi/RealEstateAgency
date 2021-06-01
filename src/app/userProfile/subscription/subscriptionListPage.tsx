import { Button, Flexbox, Loading } from 'shared/base';
import React, { useEffect, useMemo, useState } from 'react';

import { DefaultListBlock } from 'shared/layout/defaultListBlock';
import { NoResultsPage } from 'shared/layout/noResultsPage';
import { SubsciptionGetModel } from 'core/subscription/subscription';
import { SubscriptionItem } from './subscriptionItem';
import { history } from 'core/history';
import { performGetSubscriptionRequest } from 'core/subscription/getSubscription';
import { switchError } from 'core/switchError';

export const SubscriptionListPage: React.FC = () => {
  const [subscriptions, setSubscriptions] = useState<SubsciptionGetModel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = false;
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await performGetSubscriptionRequest();
        if (!mounted) setSubscriptions(result);
        setLoading(false);
      } catch (error) {
        switchError(error.response.status);
      }
    };
    fetchData();
    return () => {
      mounted = true;
    };
  }, []);

  const subscriptionItemComponents = useMemo(() => {
    const subscriptionItems = subscriptions.map((subscription, index) => {
      return <SubscriptionItem props={subscription} key={`subscription-${index}`} />;
    });
    return subscriptionItems;
  }, [subscriptions]);

  return (
    <DefaultListBlock>
      {loading ? (
        <Loading loading />
      ) : (
        <>
          {subscriptionItemComponents.length !== 0 ? (
            <Flexbox wrap justifyContent="between">
              {subscriptionItemComponents}
            </Flexbox>
          ) : (
            <NoResultsPage>У вас нет активных подписок.</NoResultsPage>
          )}
          <Flexbox justifyContent="center" mt="3">
            <Button primary onClick={() => history.push('/profile/create-subscription')}>
              Подписаться на объявления
            </Button>
          </Flexbox>
        </>
      )}
    </DefaultListBlock>
  );
};
