import React from 'react';
import { Container, Section } from 'shared/base';
import { DefaultPage } from 'shared/layout/defaultPage';
import { AdvertismentsContainer } from './advertisment';
import { FiltersContainer } from './filters';

export const AdvertismentListPage: React.FC = () => {
  return (
    <DefaultPage>
      <Section bottom>
        <Container nonFluid flex>
          <FiltersContainer />
          <AdvertismentsContainer />
        </Container>
      </Section>
    </DefaultPage>
  );
};
