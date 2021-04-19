import { AdvertismentsContainer } from './advertisment';
import { FiltersContainer } from './filters';
import React from 'react';
import { RightContainerPage } from 'shared/layout/rightContainerPage';

export const AdvertismentListPage: React.FC = () => {
  return (
    <RightContainerPage header="Фильтры" leftMenu={<FiltersContainer />}>
      <AdvertismentsContainer />
    </RightContainerPage>
  );
};
