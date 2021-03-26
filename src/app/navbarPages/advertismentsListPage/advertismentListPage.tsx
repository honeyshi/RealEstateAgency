import React from 'react';
import { Container, Section } from 'shared/base';
import { MoveTop } from 'shared/composite/moveTop';
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
          <MoveTop />
        </Container>
      </Section>
    </DefaultPage>
  );
};
