import { Column, Container, Flexbox, Image, Loading, Row, Section, TextField } from 'shared/base';
import React, { useEffect, useState } from 'react';

import { DefaultPage } from 'shared/layout/defaultPage';
import { PricingItem } from './pricingItem';
import { PricingModel } from 'core/pricing/pricingModel';
import image from 'icons/prcing.svg';
import { performGetPricingLinksRequest } from 'core/pricing/getPricingLinks';

export const PricingPage: React.FC = () => {
  const [pricings, setPricings] = useState<PricingModel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await performGetPricingLinksRequest();
      setPricings(result);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <DefaultPage>
      <Section>
        <Container nonFluid>
          <Row pb="5" alignItems="center">
            <Column size={7}>
              <Flexbox justifyContent="center" vertical>
                <TextField tag="h2" my="5">
                  Гибкие тарифные планы
                </TextField>
                <TextField>
                  Мы предлагаем несколько вариантов подписки на сервис <br /> по доступным ценам.
                </TextField>
              </Flexbox>
            </Column>
            <Column size={5}>
              <Image src={image} />
            </Column>
          </Row>
        </Container>
      </Section>
      <Section bottom>
        <Container nonFluid>
          {loading ? (
            <Loading loading />
          ) : (
            <>
              {pricings.length !== 0 && (
                <Flexbox justifyContent="around">
                  <PricingItem
                    type={pricings[0].name}
                    description={[
                      'Доступ к объявлениям за последние 30 дней',
                      'Добавление объявлений в избранное',
                      'Поиск недвижимости на карте',
                      'Удобная фильтрация объявлений',
                      'Поиск людей для совместной аренды',
                    ]}
                    iconName="coin"
                    link={pricings[0].link}
                    validity={`${pricings[0].days_duration} дня`}
                    price={pricings[0].price}
                  />
                  <PricingItem
                    primary
                    type={pricings[1].name}
                    description={[
                      'Шаблон правильного договора аренды',
                      'Уведомления о новых квартирах',
                      'Бесплатная консультация наших специалистов',
                    ]}
                    iconName="wallet"
                    link={pricings[1].link}
                    validity={`${pricings[1].days_duration} дней`}
                    price={pricings[1].price}
                    additionalPlan="Базовый"
                  />
                  <PricingItem
                    type={pricings[2].name}
                    description={['Личный менеджер']}
                    iconName="vip-diamond"
                    link={pricings[2].link}
                    validity={`${pricings[2].days_duration} дней`}
                    price={pricings[2].price}
                    additionalPlan="Продвинутый"
                  />
                </Flexbox>
              )}
            </>
          )}
        </Container>
      </Section>
    </DefaultPage>
  );
};
