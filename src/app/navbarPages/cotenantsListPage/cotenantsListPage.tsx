import { CotenantListContainer } from './cotenant/cotenantListContainer';
import React from 'react';
import { RightContainerPage } from 'shared/layout/rightContainerPage';

export const CotenantsListPage: React.FC = () => {
  return (
    <RightContainerPage header="Фильтры" leftMenu={<></>}>
      <CotenantListContainer />
    </RightContainerPage>
  );
};
