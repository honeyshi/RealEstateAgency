import { AdvantagesSection, FeedbacksSection, FiltersSection, SuggestionsSection } from './sections';
import React, { useEffect } from 'react';

import { DefaultPage } from 'shared/layout/defaultPage';
import { history } from 'core/history';
import { useLocation } from 'react-router-dom';

export const StartPage: React.FC = () => {
  const location = useLocation();
  useEffect(() => {
    location.search.includes('?verified=true') && history.push('/email-confirm');
  }, [location.search]);
  return (
    <DefaultPage>
      <FiltersSection />
      <AdvantagesSection />
      <SuggestionsSection />
      <FeedbacksSection />
    </DefaultPage>
  );
};
