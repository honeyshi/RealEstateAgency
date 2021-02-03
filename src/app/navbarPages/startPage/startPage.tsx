import React from 'react';
import { DefaultPage } from 'shared/layout/defaultPage';
import { AdvantagesSection, FeedbacksSection, FiltersSection, SuggestionsSection } from './sections';

export const StartPage: React.FC = () => {
  return (
    <DefaultPage>
      <FiltersSection />
      <AdvantagesSection />
      <SuggestionsSection />
      <FeedbacksSection />
    </DefaultPage>
  );
};
