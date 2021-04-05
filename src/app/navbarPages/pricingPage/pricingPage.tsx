import { Column, Container, Flexbox, Image, Row, Section, TextField } from 'shared/base';

import { DefaultPage } from 'shared/layout/defaultPage';
import { PricingItem } from './pricingItem';
import React from 'react';
import image from 'icons/prcing.svg';

export const PricingPage: React.FC = () => {
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
                  Мы предлагаем несколько вариантов подписки на сервис <br /> по демократичным ценам.
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
          <Flexbox justifyContent="around">
            <PricingItem
              type="Базовый"
              description={[
                'Доступ к объявлениям за последние 30 дней',
                'Добавление квартир в избранное',
                'Поиск квартир на карте',
                'Удобные фильтры для поиска',
                'Поиск людей для совместной аренды',
              ]}
              iconName="coin"
              link="#"
              validity="7"
              price="800"
            />
            <PricingItem
              primary
              type="Продвинутый"
              description={[
                'Шаблон правильного договора аренды',
                'Уведомления о новых квартирах',
                'Бесплатная консультация наших специалистов',
              ]}
              iconName="wallet"
              link="#"
              validity="15"
              price="1200"
              additionalPlan="Базовый"
            />
            <PricingItem
              type="Персональный"
              description={['Личный менеджер']}
              iconName="vip-diamond"
              link="#"
              validity="30"
              price="2500"
              additionalPlan="Продвинутый"
            />
          </Flexbox>
        </Container>
      </Section>
    </DefaultPage>
  );
};
