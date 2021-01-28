import React from 'react';
import { DefaultPage } from 'shared/layout/defaultPage';
import { AdvantagesSection } from './advantagesSection';
import { FiltersSection } from './filtersSection';

export const StartPage: React.FC = () => {
  return (
    <DefaultPage>
      <FiltersSection />
      <AdvantagesSection />
    </DefaultPage>
  );
};
