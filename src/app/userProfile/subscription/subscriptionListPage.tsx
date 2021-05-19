import { Block, Button, Flexbox } from 'shared/base';
import React, { useEffect, useMemo, useState } from 'react';

import { NoResultsPage } from 'shared/layout/noResultsPage';
import { SubsciptionGetModel } from 'core/subscription/subscription';
import { SubscriptionItem } from './subscriptionItem';
import { history } from 'core/history';
import { performGetSubscriptionRequest } from 'core/subscription/getSubscription';

export const SubscriptionListPage: React.FC = () => {
  const [subscriptions, setSubscriptions] = useState<SubsciptionGetModel[]>([]);
  useEffect(() => {
    let mounted = false;
    const fetchData = async () => {
      const result = await performGetSubscriptionRequest();
      if (!mounted) setSubscriptions(result);
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
    <Block mr="5" mt="3" mb="5">
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
    </Block>
  );
};
