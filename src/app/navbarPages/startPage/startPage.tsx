import React from 'react';
import { DefaultPage } from 'shared/layout/defaultPage';
import { AdvantagesSection, FiltersSection, SuggestionsSection } from './sections';

export const StartPage: React.FC = () => {
  return (
    <DefaultPage>
      <FiltersSection />
      <AdvantagesSection />
      <SuggestionsSection />
    </DefaultPage>
  );
};
