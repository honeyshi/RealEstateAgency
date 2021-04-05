import { Container, RemixIcon, Row, Section, TextField } from 'shared/base';

import { Advantage } from 'pageParts/advantage';
import React from 'react';

const Icon: React.FC<{ name: string }> = ({ name }) => {
  return <RemixIcon name={name} styleType="fill" className="advantage-icon" />;
};

export const AdvantagesSection: React.FC = () => {
  return (
    <Section>
      <Container nonFluid>
        <TextField center tag="h1" mb="5">
          Преимущества сервиса
        </TextField>
        <Row justifyContent="between">
          <Advantage
            header="Объявления от собственников"
            description="Все объявления проходят тщательную проверку, что позволяет исключить возможность публикации предложений агенствами">
            <Icon name="shield-check" />
          </Advantage>
          <Advantage
            header="Демократичные цены"
            description="Несколько тарифов в различных ценовых категориях делают сервис доступным всем слоям населения">
            <Icon name="hand-coin" />
          </Advantage>
          <Advantage
            header="Совместная аренда"
            description="Сервис предоставляет возможность поиска людей для совместной аренды недвижимости">
            <Icon name="group" />
          </Advantage>
        </Row>
      </Container>
    </Section>
  );
};
