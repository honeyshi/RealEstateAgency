import { CotenantListContainer } from './cotenant/cotenantListContainer';
import { FiltersContainer } from './filters';
import React from 'react';
import { RightContainerPage } from 'shared/layout/rightContainerPage';

export const CotenantsListPage: React.FC = () => {
  return (
    <RightContainerPage header="Фильтры" leftMenu={<FiltersContainer />}>
      <CotenantListContainer />
    </RightContainerPage>
  );
};
