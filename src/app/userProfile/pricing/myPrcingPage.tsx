import { Block, Button, Flexbox } from 'shared/base';
import React, { useEffect, useMemo, useState } from 'react';

import { MyPricingModel } from 'core/pricing/pricingModel';
import { NoResultsPage } from 'shared/layout/noResultsPage';
import { PricingItem } from './pricingItem';
import { history } from 'core/history';
import { performGetMyPricingRequest } from 'core/pricing/getMyPricing';

export const MyPricingPage: React.FC = () => {
  const [pricing, setPricing] = useState<MyPricingModel[]>([]);

  useEffect(() => {
    let mounted = false;
    const fetchData = async () => {
      const result = await performGetMyPricingRequest();
      if (!mounted) setPricing(result);
    };
    fetchData();
    return () => {
      mounted = true;
    };
  }, []);

  const pricingItemComponents = useMemo(() => {
    const pricingItems = pricing.map((pricingItem) => {
      return (
        <PricingItem
          type={pricingItem.tariff.name}
          iconName={(() => {
            switch (pricingItem.tariff.name) {
              case 'Базовый':
                return 'coin';
              case 'Продвинутый':
                return 'wallet';
              case 'Персональный':
                return 'vip-diamond';
              default:
                return '';
            }
          })()}
          price={pricingItem.tariff.price}
          validity={pricingItem.tariff.days_duration}
          expiration={pricingItem.expiry_date}
          creation={pricingItem.created_at}
          key={pricingItem.tariff.name}
        />
      );
    });
    return pricingItems;
  }, [pricing]);

  return (
    <Block mr="5" mt="3" mb="5">
      {pricingItemComponents.length !== 0 ? (
        <>{pricingItemComponents}</>
      ) : (
        <>
          <NoResultsPage>Вы еще не приобрели ни одного тарифа.</NoResultsPage>
          <Flexbox justifyContent="center" mt="3">
            <Button primary onClick={() => history.push('/pricing')}>
              Выбрать тариф
            </Button>
          </Flexbox>
        </>
      )}
    </Block>
  );
};
